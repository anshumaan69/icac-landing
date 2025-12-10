"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Storm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const [bolts, setBolts] = useState<Array<{ id: number; x: number; y: number; scale: number; rotation: number }>>([]);

  useGSAP(() => {
    // Random Lightning Flashes (Screen Flash)
    const triggerFlash = () => {
      if (!flashRef.current) return;
      
      const intensity = Math.random();
      
      gsap.to(flashRef.current, {
        opacity: intensity * 0.3, // Max 30% opacity
        duration: 0.1,
        onComplete: () => {
          gsap.to(flashRef.current, {
            opacity: 0,
            duration: Math.random() * 0.5 + 0.1,
            ease: "power2.out",
          });
        }
      });

      // Trigger a bolt with the flash sometimes
      if (Math.random() > 0.6) {
        addBolt();
      }

      // Schedule next flash
      gsap.delayedCall(Math.random() * 5 + 2, triggerFlash);
    };

    triggerFlash();

    return () => gsap.killTweensOf(flashRef.current);
  }, { scope: containerRef });

  const addBolt = () => {
    const newBolt = {
      id: Date.now(),
      x: Math.random() * 80 + 10, // 10% to 90% screen width
      y: Math.random() * 40, // Top 40% of screen
      scale: Math.random() * 0.5 + 0.5,
      rotation: Math.random() * 30 - 15,
    };

    setBolts(prev => [...prev, newBolt]);

    // Remove bolt after animation
    setTimeout(() => {
      setBolts(prev => prev.filter(b => b.id !== newBolt.id));
    }, 500);
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dark Cloud Layers */}
      <div className="absolute inset-0 opacity-60 mix-blend-multiply">
        <div 
          className="absolute inset-0 bg-repeat-x animate-cloud-drift-slow"
          style={{
            backgroundImage: "url('https://raw.githubusercontent.com/daniel-nagy/react-fog-shader/master/example/src/assets/fog.png')",
            backgroundSize: "cover",
            filter: "brightness(0.4) sepia(1) hue-rotate(-50deg) saturate(3)", // Dark red/brown tint
            transform: "scale(1.5)",
          }}
        />
        <div 
          className="absolute inset-0 bg-repeat-x animate-cloud-drift-fast"
          style={{
            backgroundImage: "url('https://raw.githubusercontent.com/daniel-nagy/react-fog-shader/master/example/src/assets/fog.png')",
            backgroundSize: "cover",
            filter: "brightness(0.3) contrast(1.2)",
            opacity: 0.7,
          }}
        />
      </div>

      {/* Lightning Bolts */}
      {bolts.map(bolt => (
        <svg
          key={bolt.id}
          viewBox="0 0 100 200"
          className="absolute w-64 h-96 drop-shadow-[0_0_15px_rgba(229,9,20,0.8)] animate-lightning-strike"
          style={{
            left: `${bolt.x}%`,
            top: `${bolt.y}%`,
            transform: `scale(${bolt.scale}) rotate(${bolt.rotation}deg)`,
          }}
        >
          <path
            d="M50 0 L20 60 L60 60 L30 120 L80 120 L10 200"
            fill="none"
            stroke="#ffcccc"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}

      {/* Red Flash Overlay */}
      <div 
        ref={flashRef}
        className="absolute inset-0 bg-blood mix-blend-overlay opacity-0"
      />
    </div>
  );
}
