"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export default function Sponsors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Clone content for seamless loop
    const content = marquee.innerHTML;
    marquee.innerHTML = content + content + content + content;

    const width = marquee.scrollWidth / 4;

    gsap.to(marquee, {
      x: -width,
      duration: 30, // Slower for better visibility
      ease: "none",
      repeat: -1,
    });
  }, { scope: containerRef });

  const SPONSORS = [
    { name: "Google Cloud", color: "text-blue-400" },
    { name: "Polygon", color: "text-purple-500" },
    { name: "Devfolio", color: "text-white" },
    { name: "Tezos", color: "text-blue-600" },
    { name: "Filecoin", color: "text-green-500" },
    { name: "Celo", color: "text-yellow-500" },
    { name: "Replit", color: "text-orange-500" },
    { name: "QuillAudits", color: "text-blue-300" },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-black border-t border-b border-gray-900 overflow-hidden relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-gray-500 uppercase tracking-widest opacity-50">Our Partners</h2>
      </div>

      <div className="max-w-full overflow-hidden py-8 bg-white/5 backdrop-blur-sm">
        <div ref={marqueeRef} className="flex gap-24 whitespace-nowrap items-center px-12">
          {SPONSORS.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center group cursor-pointer grayscale hover:grayscale-0 transition-all duration-500">
              {/* Logo Placeholder - Simulating real logos with styled text/boxes */}
              <div className="h-20 min-w-[200px] flex items-center justify-center border-2 border-white/10 rounded-lg bg-black/50 group-hover:border-neon-blue/50 group-hover:shadow-[0_0_15px_rgba(0,145,255,0.3)] transition-all">
                 <span className={`text-2xl md:text-3xl font-bold ${sponsor.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transform transition-transform`}>
                   {sponsor.name}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
