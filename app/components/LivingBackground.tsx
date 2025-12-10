"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LivingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const redBlobRef = useRef<HTMLDivElement>(null);
  const cyanBlobRef = useRef<HTMLDivElement>(null);
  const voidBlobRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // The Flip: Shift colors when scrolling from About to Timeline
    // We'll target the timeline section for the trigger
    const timelineSection = document.querySelector("#timeline-section"); // Need to add ID to HorizontalScroll

    if (timelineSection) {
      ScrollTrigger.create({
        trigger: timelineSection,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          // Flip to Upside Down (Deep Red dominance)
          gsap.to(redBlobRef.current, { opacity: 0.8, scale: 1.5, duration: 2 });
          gsap.to(cyanBlobRef.current, { opacity: 0.2, scale: 0.8, duration: 2 });
          gsap.to(containerRef.current, { filter: "hue-rotate(-10deg) contrast(1.2)", duration: 2 });
        },
        onLeaveBack: () => {
          // Return to Normal (Balanced)
          gsap.to(redBlobRef.current, { opacity: 0.5, scale: 1, duration: 2 });
          gsap.to(cyanBlobRef.current, { opacity: 0.5, scale: 1, duration: 2 });
          gsap.to(containerRef.current, { filter: "none", duration: 2 });
        }
      });
    }

    // Continuous "Breathing" Animation is handled by CSS keyframes 'move'
    
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-void transition-colors duration-1000">
      
      {/* Red Blob (The Storm) */}
      <div 
        ref={redBlobRef}
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full opacity-50 mix-blend-screen animate-[move_20s_infinite_ease-in-out]"
        style={{
          background: "radial-gradient(circle, var(--color-blood) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Cyan Blob (The Lightning) */}
      <div 
        ref={cyanBlobRef}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-50 mix-blend-screen animate-[move_25s_infinite_ease-in-out_reverse]"
        style={{
          background: "radial-gradient(circle, var(--color-neon-blue) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Void Blob (The Haze) */}
      <div 
        ref={voidBlobRef}
        className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] rounded-full opacity-30 mix-blend-overlay animate-[move_30s_infinite_ease-in-out]"
        style={{
          background: "radial-gradient(circle, var(--color-haze) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Noise Overlay is handled globally in globals.css (.film-grain) */}
    </div>
  );
}
