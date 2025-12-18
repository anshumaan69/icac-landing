"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "./Typewriter";
import ScrollRevealText from "./ScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 relative z-10">
      <div className="max-w-4xl text-center space-y-8">
        <div className="overflow-hidden">
           <ScrollRevealText text="THE MISSION" className="text-4xl md:text-5xl font-serif font-bold text-blood mb-8" />
        </div>
        
        <div className="text-lg md:text-xl text-gray-300 font-mono leading-relaxed">
          <Typewriter 
            text="Welcome to the Upside Down of coding. ICAC  is not just a competition; it's a survival test for your algorithmic skills. Navigate through the void, solve the mysteries, and emerge as the champion of the other side."
            speed={0.03}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
