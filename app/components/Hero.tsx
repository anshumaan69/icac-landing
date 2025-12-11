"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const [particles, setParticles] = useState<Array<{
    width: string;
    height: string;
    top: string;
    left: string;
    animationDuration: string;
    animationDelay: string;
  }>>([]);

  useEffect(() => {
    setParticles([...Array(20)].map(() => ({
      width: Math.random() * 4 + 1 + 'px',
      height: Math.random() * 4 + 1 + 'px',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      animationDuration: Math.random() * 10 + 10 + 's',
      animationDelay: Math.random() * 5 + 's',
    })));
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Logo Reveal
    tl.from(logoRef.current, {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: "power3.out",
    });

    // Title Animation (Assemble from random positions or just fade up with glitch)
    tl.from(titleRef.current, {
      duration: 2.5,
      opacity: 0,
      scale: 0.8,
      ease: "power4.out",
      filter: "blur(20px)",
    }, "-=1")
    .to(titleRef.current, {
      textShadow: "0 0 30px #E50914, 0 0 60px #E50914",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    }, "-=1.5");

    // Subtitle Reveal
    tl.from(subtitleRef.current, {
      duration: 1.5,
      opacity: 0,
      letterSpacing: "0.5em",
      ease: "power2.out",
    }, "-=2");

    // CTA Reveal
    tl.from(ctaRef.current, {
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "back.out(1.7)",
    }, "-=1");
    
    // Parallax Effect on Mouse Move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(titleRef.current, {
        x: xPos * 4, // Stronger parallax for 3D feel
        y: yPos * 4,
        rotationY: xPos * 2,
        rotationX: -yPos * 2,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden z-10 perspective-1000">
      {/* Background handled globally by Background3D */}
      
      {/* GDG Logo Placeholder */}
      <div ref={logoRef} className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity duration-300 mix-blend-difference">
        <div className="h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-2">
          <img 
            src="/gdg-logo-new.png" 
            alt="GDG Logo" 
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-white font-serif tracking-widest text-sm">GDG KIET</span>
          <span className="text-blood font-mono text-xs">PRESENTS</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 transform-style-3d flex flex-col items-center">
        
        {/* Title */}
        <div className="relative">
          <h1 ref={titleRef} className="text-7xl md:text-[10rem] font-serif font-bold text-blood tracking-tighter mb-2 transform-style-3d relative z-10" style={{ textShadow: "0 0 40px rgba(197, 15, 31, 0.6), 0 0 80px rgba(197, 15, 31, 0.3)" }}>
            ICAC
          </h1>
          {/* Title Glow Behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blood/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
        </div>
        
        <div ref={subtitleRef} className="space-y-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl font-mono tracking-widest text-white/90">
            <span>INTER CAMPUS ALGORITHMIC CUP</span>
            
          </div>
          

        </div>

        <div ref={ctaRef} className="mt-16">
          <Link 
            href="https://unstop.com" 
            target="_blank"
            className="group relative inline-flex items-center justify-center px-16 py-5 overflow-hidden font-mono font-bold tracking-widest text-white bg-transparent border border-blood/50 rounded-lg transition-all duration-300 hover:border-blood hover:shadow-[0_0_30px_rgba(197,15,31,0.4)]"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blood rounded-full group-hover:w-80 group-hover:h-80 opacity-90"></span>
            <span className="relative z-10 flex items-center gap-3">
              ENTER THE VOID
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </Link>
        </div>
      </div>
      
      {/* Floating Particles/Spores */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((style, i) => (
          <div 
            key={i}
            className="absolute bg-gray-500 rounded-full opacity-20 animate-float"
            style={style}
          />
        ))}
      </div>
    </section>
  );
}
