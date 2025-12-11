"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Award, Gift } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

export default function Prizes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".prize-card");

    // Initial Entry Animation
    gsap.fromTo(cards, 
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Trigger earlier
        },
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          // Start Floating Animation after entry
          cards.forEach((card, i) => {
            gsap.to(card, {
              y: -10,
              duration: 2 + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.1,
            });
          });
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-12 relative z-10 perspective-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <ScrollRevealText text="REWARDS & BOUNTIES" className="text-4xl md:text-6xl font-serif font-bold text-blood mb-4" />
          <p className="text-gray-400 font-mono mt-4">Glory awaits the survivors.</p>
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Winner */}
          <div className="prize-card bg-black/80 border border-gold/20 p-8 rounded-xl flex flex-col items-center hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
            <Trophy className="w-16 h-16 text-yellow-500 mb-6 group-hover:animate-bounce" />
            <h3 className="text-2xl font-serif text-white mb-2">Top 3 Teams</h3>
            <p className="font-mono text-yellow-500 text-xl font-bold">Cash Prizes</p>
            <p className="text-gray-500 text-sm mt-4">Glory awaits the victors.</p>
          </div>

          {/* Finalists */}
          <div className="prize-card bg-black/80 border border-white/10 p-8 rounded-xl flex flex-col items-center hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
            <Award className="w-16 h-16 text-gray-300 mb-6 group-hover:rotate-12 transition-transform" />
            <h3 className="text-2xl font-serif text-white mb-2">All Finalists</h3>
            <p className="font-mono text-gray-300 text-xl font-bold">Certificates</p>
            <p className="text-gray-500 text-sm mt-4">Proof of your survival.</p>
          </div>

          {/* Swag */}
          <div className="prize-card bg-black/80 border border-neon-blue/20 p-8 rounded-xl flex flex-col items-center hover:shadow-[0_0_30px_rgba(0,145,255,0.2)] hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
            <Gift className="w-16 h-16 text-neon-blue mb-6 group-hover:animate-pulse" />
            <h3 className="text-2xl font-serif text-white mb-2">Top Performers</h3>
            <p className="font-mono text-neon-blue text-xl font-bold">Exclusive Swag</p>
            <p className="text-gray-500 text-sm mt-4">Rare artifacts from the Upside Down.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
