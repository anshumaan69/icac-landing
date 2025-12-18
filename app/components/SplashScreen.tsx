"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const spectrumRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onFinish,
      defaults: { ease: "power2.inOut", force3D: true }
    });

    const chars = textRef.current?.innerText.split("") || [];
    
    // Initial States
    gsap.set(containerRef.current, { opacity: 1, backgroundColor: "#000000" });
    gsap.set(textRef.current, { opacity: 0, scale: 0.5 });
    gsap.set(".spectrum-bar", { scaleY: 0, opacity: 0 });

    // 1. "Ta-dum" Pop In
    tl.to(textRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    })
    
    // 2. Idle Zoom (The "Hold")
    .to(textRef.current, {
      scale: 1.1,
      duration: 1.2,
      ease: "power1.inOut",
    }, "-=0.2")

    // 3. The Zoom into the Void + Spectrum
    .add("zoomStart")
    
    // Text explodes
    .to(textRef.current, {
      scale: 60,
      opacity: 0,
      letterSpacing: "100px",
      duration: 1.2,
      ease: "expo.in",
    }, "zoomStart")

    // Spectrum Bars shoot up
    .to(".spectrum-bar", {
      scaleY: 1,
      opacity: 1,
      duration: 0.4,
      stagger: {
        amount: 0.2,
        from: "center",
        grid: "auto"
      },
      ease: "power2.out",
    }, "zoomStart+=0.1")
    
    // Bars fade out as they fill screen
    .to(".spectrum-bar", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "zoomStart+=0.6")

    // 4. Fade to content
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    }, "-=0.2");

  }, { scope: containerRef });

  // Brighter Netflix spectrum colors
  const spectrumColors = [
    "#D81F26", // Red
    "#E50914", // Brand Red
    "#FF0000", // Bright Red
    "#FF7F00", // Orange for highlight
    "#FF00FF", // Magenta for depth
    "#0000FF", // Blue for contrast
    "#00FFFF", // Cyan for pop
    "#E50914", // Brand Red
    "#8B0000", // Dark Red
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden cursor-none">
      
      {/* Spectrum Effect Container */}
      <div ref={spectrumRef} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
        <div className="flex gap-1 h-screen w-full items-center justify-center">
          {Array.from({ length: 19 }).map((_, i) => (
             <div 
               key={i}
               className="spectrum-bar w-2 md:w-6 h-full origin-bottom"
               style={{ 
                 backgroundColor: spectrumColors[i % spectrumColors.length],
                 boxShadow: `0 0 20px ${spectrumColors[i % spectrumColors.length]}`,
               }}
             />
          ))}
        </div>
      </div>

      <h1 
        ref={textRef} 
        className="relative z-10 text-7xl md:text-[12rem] font-bold tracking-tighter text-[#E50914] drop-shadow-[0_0_60px_rgba(229,9,20,0.6)]"
        style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}
      >
        ICAC
      </h1>
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)] z-20" />
    </div>
  );
}
