"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SpecialGuest() {
  const containerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".guest-card", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".guest-content", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-4 relative z-10 overflow-hidden min-h-[800px] flex items-center">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          
          {/* Card Container */}
          <div className="guest-card relative w-72 h-80 md:w-96 md:h-[500px] flex-shrink-0 group">
             <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(229,9,20,0.3)] border-2 border-blood/30">
                {/* Actual Image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black relative">
                   <img src="/assets/raghav-garg.png" alt="Raghav Garg" className="absolute inset-0 w-full h-full object-cover transition-all duration-500" />
                   <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                      <div className="animate-pulse">
                        <span className="inline-block px-3 py-1 bg-blood/80 backdrop-blur-sm text-white text-xs font-mono font-bold tracking-widest uppercase rounded shadow-lg">
                          Special Guest
                        </span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Text Content */}
          <div className="guest-content text-center md:text-left space-y-8 max-w-xl">
             <div className="space-y-6">
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
                    <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blood/50 transition-colors duration-300">
                        <p className="text-blood text-2xl font-bold mb-1">10k+</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Students Mentored</p>
                    </div>
                    <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blood/50 transition-colors duration-300">
                        <p className="text-blood text-2xl font-bold mb-1">FAANG</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Expertise</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

