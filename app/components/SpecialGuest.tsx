"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lock } from "lucide-react";

export default function SpecialGuest() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  
  // Grid configuration
  const rows = 12;
  const cols = 10;
  const totalPixels = rows * cols;
  const pixelArray = Array.from({ length: totalPixels });

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Scroll Entrance Animation
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const handleReveal = () => {
    if (isRevealing || isRevealed) return;
    setIsRevealing(true);
    
    // Animate the pixels exploding
    gsap.to(".pixel-grid-cell", {
      x: () => gsap.utils.random(-300, 300), // Fly out horizontally
      y: () => gsap.utils.random(-300, 300), // Fly out vertically
      scale: 0,
      opacity: 0,
      rotation: () => gsap.utils.random(-720, 720),
      duration: 1.5,
      stagger: {
        amount: 0.5,
        grid: [rows, cols],
        from: "center"
      },
      ease: "power4.out",
      onComplete: () => {
        setIsRevealed(true);
        setIsRevealing(false);
      }
    });

    // Fade out the Question Mark immediately
    gsap.to(".mystery-content", {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "back.in(2)"
    });
  };

  return (
    <section ref={containerRef} className="py-32 px-4 relative z-10 overflow-hidden min-h-[800px] flex items-center">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          
          {/* Card Container */}
          <div className="relative w-72 h-80 md:w-96 md:h-[500px] flex-shrink-0 cursor-pointer group" onClick={handleReveal}>
            
            {/* Revealed State */}
            {isRevealed && (
              <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(229,9,20,0.3)] border-2 border-blood/30 animate-[fadeIn_1s_ease-out]">
                 {/* Actual Image */}
                 <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black relative">
                    <img src="/assets/raghav-garg.png" alt="Raghav Garg" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                       <div className="animate-[pulse_2s_infinite]">
                         <span className="inline-block px-3 py-1 bg-blood/80 backdrop-blur-sm text-white text-xs font-mono font-bold tracking-widest uppercase rounded shadow-lg">
                           LEGEND REVEALED
                         </span>
                       </div>
                    </div>
                 </div>
              </div>
            )}

            {/* The "Pixel" Cover (On Top) */}
            {!isRevealed && (
              <div className="absolute inset-0 z-20 pointer-events-none">
                 {/* We construct a grid that perfectly covers the card */}
                 <div className="w-full h-full grid grid-cols-10 grid-rows-12">
                   {pixelArray.map((_, i) => (
                     <div key={i} className="pixel-grid-cell bg-slate-900 border-[0.5px] border-slate-800/30 relative"></div>
                   ))}
                 </div>
                 
                 {/* Content sitting on top of the pixels (The Question Mark) */}
                 <div className="mystery-content absolute inset-0 flex flex-col items-center justify-center bg-transparent">
                     <Lock className="w-16 h-16 text-gray-400 mb-4 animate-pulse drop-shadow-[0_0_10px_rgba(0,0,0,1)]" />
                     <span className="text-8xl text-gray-300 font-serif opacity-80 select-none drop-shadow-[0_0_10px_rgba(0,0,0,1)]">?</span>
                     <div className="absolute bottom-6 left-0 right-0 text-center">
                        <span className="text-gray-400 font-mono text-sm tracking-widest uppercase bg-black/50 px-2 py-1 rounded">Click to Dismantle</span>
                     </div>
                 </div>
              </div>
            )}
            
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-8 max-w-xl">
            
            {!isRevealed ? (
               <div className="space-y-6">
                 <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tighter transition-all duration-300">
                   The <span className="text-gray-500">Oracle</span>
                 </h2>
                 <p className="text-xl text-gray-400 font-mono max-w-md mx-auto md:mx-0">
                   Incoming transmission... <br/>
                   <span className="text-sm text-blood animate-pulse">Encryption Level: Maximum</span>
                 </p>
                 <button 
                  onClick={handleReveal}
                  className="px-8 py-3 border border-blood text-blood font-mono hover:bg-blood hover:text-white transition-all duration-300 uppercase tracking-widest text-sm relative overflow-hidden"
                 >
                   <span className="relative z-10">Initialize Decryption</span>
                 </button>
               </div>
            ) : (
              <div className="space-y-6 animate-[slideIn_0.8s_ease-out]">
                <div>
                   <h2 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-2">
                     Mr. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blood to-red-400">Raghav</span> Garg
                   </h2>
                   <h3 className="text-xl md:text-2xl text-blood font-medium">
                     Coding Wizard & Career Coach
                   </h3>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base border-l-2 border-blood/30 pl-6">
                  <p>
                    <strong className="text-white">Ex-Microsoft & Ex-Paytm</strong> engineer turned educator. 
                    Raghav Sir has bridged the gap between industry requirements and academic learning. 
                  </p>
                  <p>
                    Formerly a Senior Member of Technical Staff at <strong className="text-white">GeeksforGeeks</strong> and a key Instructor at <strong className="text-white">Physics Wallah</strong> (College Wallah).
                  </p>
                  <p>
                    He has guided thousands of students to crack FAANG and top product-based company interviews, simplifying complex concepts like DSA and System Design.
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                        <p className="text-blood text-2xl font-bold mb-1">10k+</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Students Mentored</p>
                    </div>
                    <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                        <p className="text-blood text-2xl font-bold mb-1">FAANG</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Expertise</p>
                    </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
