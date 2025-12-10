"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Background3D() {
  const gridRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Infinite grid movement
    gsap.to(gridRef.current, {
      backgroundPosition: "0px 100px",
      duration: 2,
      ease: "none",
      repeat: -1,
    });

    // Fog movement
    gsap.to(fogRef.current, {
      backgroundPosition: "200% 0",
      duration: 60,
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden bg-black perspective-1000">
      {/* Retro Grid Floor */}
      <div 
        ref={gridRef}
        className="absolute bottom-0 left-[-50%] w-[200%] h-[100%] origin-bottom transform rotate-x-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229, 9, 20, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229, 9, 20, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "linear-gradient(to top, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 40%, transparent 100%)",
        }}
      />

      {/* Fog Layer */}
      <div 
        ref={fogRef}
        className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/daniel-nagy/react-fog-shader/master/example/src/assets/fog.png')",
          backgroundSize: "cover",
        }}
      />
      
      {/* Vignette & Color Grade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      <div className="absolute inset-0 bg-blood/5 mix-blend-overlay" />
    </div>
  );
}
