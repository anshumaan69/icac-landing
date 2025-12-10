"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, MapPin, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");
    
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 30%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        scale: 0.9,
        rotationX: 45,
        transformOrigin: "top center",
        ease: "power3.out",
      });
    });

    // Line animation
    gsap.from(".timeline-line", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      scaleY: 0,
      transformOrigin: "top center",
      ease: "none",
    });

  }, { scope: containerRef });

  return (
    <section id="timeline-section" ref={containerRef} className="py-24 px-4 md:px-12 bg-transparent relative z-20 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-4xl md:text-6xl font-serif text-neon-blue text-center mb-24 drop-shadow-[0_0_15px_rgba(0,145,255,0.5)]">
          The Timeline
        </h2>

        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-32 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-blood to-transparent -translate-x-1/2 timeline-line opacity-30 md:opacity-100" />

        <div className="space-y-24 relative">
          
          {/* Card 1: Online Elimination */}
          <div className="timeline-card flex flex-col md:flex-row gap-8 items-center relative">
            <div className="hidden md:block w-1/2 text-right pr-12">
              <h3 className="text-3xl font-serif text-white mb-2">The Elimination</h3>
              <p className="text-neon-blue font-mono text-xl">Online Round</p>
            </div>
            
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black border-4 border-neon-blue rounded-full z-10 shadow-[0_0_20px_rgba(0,145,255,0.8)]" />
            
            <div className="w-full md:w-1/2 pl-12 md:pl-12">
              <div className="bg-black/80 backdrop-blur-md border border-neon-blue/30 p-8 rounded-xl hover:bg-black/90 transition-all duration-300 group">
                <div className="md:hidden mb-4">
                  <h3 className="text-2xl font-serif text-white">The Elimination</h3>
                  <p className="text-neon-blue font-mono">Online Round</p>
                </div>
                
                <div className="space-y-4 font-mono text-gray-300">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-neon-blue" />
                    <span>Feb 15th, 2026</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-neon-blue" />
                    <span>6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-neon-blue" />
                    <span>Codeforces</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-400 italic border-l-2 border-neon-blue pl-4">
                  "Top 40 teams qualify for the final showdown."
                </p>
              </div>
            </div>
          </div>

          {/* Card 1.5: Mentorship Round */}
          <div className="timeline-card flex flex-col md:flex-row-reverse gap-8 items-center relative">
            <div className="hidden md:block w-1/2 text-left pl-12">
              <h3 className="text-3xl font-serif text-white mb-2">The Mentorship</h3>
              <p className="text-purple-500 font-mono text-xl">Expert Guidance</p>
            </div>
            
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black border-4 border-purple-500 rounded-full z-10 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
            
            <div className="w-full md:w-1/2 pl-12 md:pr-12">
              <div className="bg-black/80 backdrop-blur-md border border-purple-500/30 p-8 rounded-xl hover:bg-black/90 transition-all duration-300 group">
                <div className="md:hidden mb-4">
                  <h3 className="text-2xl font-serif text-white">The Mentorship</h3>
                  <p className="text-purple-500 font-mono">Expert Guidance</p>
                </div>

                <div className="space-y-4 font-mono text-gray-300">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    <span>Feb 18th, 2026</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span>5:00 PM - 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-purple-500" />
                    <span>Google Meet</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-400 italic border-l-2 border-purple-500 pl-4">
                  "Prepare for the final battle with industry veterans."
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Final Showdown */}
          <div className="timeline-card flex flex-col md:flex-row gap-8 items-center relative">
            <div className="hidden md:block w-1/2 text-right pr-12">
              <h3 className="text-3xl font-serif text-white mb-2">The Final Showdown</h3>
              <p className="text-blood font-mono text-xl">Offline Round</p>
            </div>
            
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black border-4 border-blood rounded-full z-10 shadow-[0_0_20px_rgba(229,9,20,0.8)]" />
            
            <div className="w-full md:w-1/2 pl-12 md:pl-12">
              <div className="bg-black/80 backdrop-blur-md border border-blood/30 p-8 rounded-xl hover:bg-black/90 transition-all duration-300 group">
                <div className="md:hidden mb-4">
                  <h3 className="text-2xl font-serif text-white">The Final Showdown</h3>
                  <p className="text-blood font-mono">Offline Round</p>
                </div>

                <div className="space-y-4 font-mono text-gray-300">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blood" />
                    <span>Feb 21st, 2026</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blood" />
                    <span>11:00 AM - 2:20 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blood" />
                    <span>KIET Group of Institutions</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-400 italic border-l-2 border-blood pl-4">
                  "3 Hours 20 Mins of intense algorithmic warfare."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
