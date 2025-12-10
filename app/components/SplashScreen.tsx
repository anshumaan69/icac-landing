"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onFinish,
    });

    // Initial State
    gsap.set(containerRef.current, { opacity: 1 });
    gsap.set(textRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(subTextRef.current, { opacity: 0 });

    // 1. Text Flicker In
    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      ease: "steps(1)",
    })
    .to(textRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // 2. Subtext Typewriter (simulated with clip-path or just simple reveal)
    tl.to(subTextRef.current, {
      opacity: 1,
      duration: 0.5,
      onStart: () => {
        // Glitch effect loop
        gsap.to(textRef.current, {
          x: () => Math.random() * 10 - 5,
          y: () => Math.random() * 10 - 5,
          skewX: () => Math.random() * 20 - 10,
          duration: 0.1,
          repeat: 10,
          yoyo: true,
          ease: "rough",
        });
      }
    });

    // 3. Intense Shake & Red Flash
    tl.to(containerRef.current, {
      backgroundColor: "#1a0000", // Dark red
      duration: 0.1,
      repeat: 3,
      yoyo: true,
    })
    .to(containerRef.current, {
      backgroundColor: "#000000",
      duration: 0.1,
    });

    // 4. Zoom into Void (Scale up text until it covers screen, or just fade out)
    tl.to([textRef.current, subTextRef.current], {
      scale: 50,
      opacity: 0,
      duration: 1.5,
      ease: "expo.in",
    }, "+=0.5");

    // 5. Fade out container
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden cursor-none">
      <h1 ref={textRef} className="text-6xl md:text-9xl font-serif text-blood font-bold tracking-tighter drop-shadow-[0_0_30px_rgba(229,9,20,0.8)] text-center">
        ICAC
      </h1>
      <p ref={subTextRef} className="mt-8 text-xl md:text-2xl font-mono text-neon-blue tracking-[0.5em] animate-pulse">
        INITIALIZING THE UPSIDE DOWN...
      </p>
      
      {/* Glitch Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover mix-blend-overlay" />
    </div>
  );
}
