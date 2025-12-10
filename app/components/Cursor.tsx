"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const blob = blobRef.current;

    if (!cursor || !follower || !blob) return;

    // Center initial position
    gsap.set([cursor, follower, blob], { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      // Main dot - instant
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      
      // Follower blob - faster now (0.2s)
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, 
        ease: "power2.out",
      });

      // Background blob - slow drift
      gsap.to(blob, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.5,
        ease: "sine.out",
      });
    };

    // Irregular shape animation for follower
    gsap.to(follower, {
      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    
    // Constant rotation for follower
    gsap.to(follower, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none",
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, { scope: cursorRef });

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-16 h-16 border-2 border-neon-blue/50 bg-neon-blue/10 backdrop-blur-[1px] pointer-events-none z-[9998]"
      />
      {/* Large Background Blob */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[0] overflow-hidden">
         <div 
           ref={blobRef}
           className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-blood/10 to-neon-blue/10 rounded-full blur-[80px] opacity-40"
         />
      </div>
    </>
  );
}
