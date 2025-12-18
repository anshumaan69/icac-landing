"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollRevealText from "./ScrollRevealText";
import Link from "next/link";
import { CheckCircle, CreditCard, FileText, UserPlus, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Registration() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered list animation
    gsap.from(".reg-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrollRevealText text="REGISTRATION PROTOCOL" className="text-4xl md:text-6xl font-serif font-bold text-white mb-4" />
          <p className="text-gray-400 font-mono mt-4">Follow the steps to secure your entry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Details Card */}
          <div className="reg-card bg-black/80 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-neon-blue/50 transition-colors duration-300">
            <h3 className="text-2xl font-serif text-neon-blue mb-6">Details</h3>
            <ul className="space-y-6 font-mono text-gray-300">
              <li className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-blood" />
                <span className="text-xl">Fee: ₹199 per team</span>
              </li>
              <li className="flex items-center gap-4">
                <UserPlus className="w-6 h-6 text-blood" />
                <span className="text-xl">Team Size: 1-3 Members</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-blood" />
                <span className="text-xl text-blood font-bold">Ends: Feb 8th, 2026</span>
              </li>
            </ul>
          </div>

          {/* Steps Card */}
          <div className="reg-card bg-black/80 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-blood/50 transition-colors duration-300">
            <h3 className="text-2xl font-serif text-blood mb-6">Steps to Enter</h3>
            <ol className="space-y-6 font-mono text-gray-300 relative border-l border-gray-800 ml-3 pl-8">
              <li className="relative">
                <span className="absolute -left-[41px] bg-black border border-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
                <p className="text-lg font-bold text-white">Register on Unstop</p>
                <p className="text-sm text-gray-500">Create your team profile and join the roster.</p>
              </li>
              <li className="relative">
                <span className="absolute -left-[41px] bg-black border border-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                <p className="text-lg font-bold text-white">Complete Payment</p>
                <p className="text-sm text-gray-500">Secure your slot in the arena.</p>
              </li>
              <li className="relative">
                <span className="absolute -left-[41px] bg-black border border-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                <p className="text-lg font-bold text-white">Fill Google Form</p>
                <p className="text-sm text-blood font-bold uppercase tracking-wider">(Mandatory Protocol)</p>
              </li>
            </ol>
          </div>

        </div>

        <div className="mt-16 text-center reg-card">
          <Link 
            href="https://unstop.com" 
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blood text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(229,9,20,0.4)]"
          >
            Register Now <CheckCircle className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
