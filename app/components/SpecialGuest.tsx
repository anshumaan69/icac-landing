"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Lock } from "lucide-react";

export default function SpecialGuest() {
  const containerRef = useRef<HTMLDivElement>(null);
  

  useGSAP(() => {
    // Floating animation for the silhouette
    gsap.to(".silhouette", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: containerRef });



  return (
    <section ref={containerRef} className="py-32 px-4 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Mystery Silhouette */}
        <div className="relative w-64 h-80 md:w-80 md:h-96 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-100" />
          
          {/* Silhouette / Image */}
          <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden relative silhouette border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-9xl text-gray-800 font-serif">?</span>
             </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-blood/20 blur-3xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="text-center md:text-left space-y-8 max-w-lg">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
            The <span className="text-blood">Oracle</span>
          </h2>
          
          <div className="space-y-4">
            <p className="text-xl text-gray-300 font-mono">
              A surprise guest from the industry elite will be joining us.
            </p>
            <p className="text-gray-500 font-mono text-sm">
              Selected participants will get an exclusive 1:1 interaction opportunity.
            </p>
          </div>

          <button 
            disabled
            className="group relative px-8 py-4 bg-transparent border border-gray-700 overflow-hidden cursor-not-allowed opacity-50"
          >
            <span className="relative flex items-center gap-3 text-gray-400 font-mono tracking-widest uppercase">
                  <Lock className="w-5 h-5" /> Classified
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
