"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Lock, Unlock } from "lucide-react";

export default function SpecialGuest() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

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

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <section ref={containerRef} className="py-32 px-4 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Mystery Silhouette */}
        <div className="relative w-64 h-80 md:w-80 md:h-96 group cursor-pointer" onClick={handleReveal}>
          <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 transition-opacity duration-1000 ${isRevealed ? 'opacity-0' : 'opacity-100'}`} />
          
          {/* Silhouette / Image */}
          <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden relative silhouette border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
             <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
               <span className="text-9xl text-gray-800 font-serif">?</span>
             </div>
             
             {/* Actual Guest Image (Placeholder for now) */}
             <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isRevealed ? 'opacity-100' : 'opacity-0'}`} 
                  style={{ backgroundImage: "url('https://placehold.co/400x500/1a1a1a/white?text=Guest')" }} 
             />
          </div>

          {/* Glow Effect */}
          <div className={`absolute -inset-4 bg-blood/20 blur-3xl -z-10 transition-all duration-500 ${isRevealed ? 'opacity-100 scale-110' : 'opacity-0 group-hover:opacity-50'}`} />
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
            onClick={handleReveal}
            className={`group relative px-8 py-4 bg-transparent border border-blood overflow-hidden transition-all duration-300 ${isRevealed ? 'cursor-default border-green-500' : 'hover:bg-blood/10'}`}
          >
            <div className={`absolute inset-0 w-0 bg-blood transition-all duration-[250ms] ease-out group-hover:w-full opacity-20 ${isRevealed ? 'w-full bg-green-500' : ''}`}></div>
            <span className="relative flex items-center gap-3 text-white font-mono tracking-widest uppercase">
              {isRevealed ? (
                <>
                  <Unlock className="w-5 h-5 text-green-500" /> Revealed
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5 text-blood" /> Unlock Identity
                </>
              )}
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
