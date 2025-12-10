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
        <div className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
          <img 
            src="https://placehold.co/100x100/transparent/white?text=GDG" 
            alt="GDG Logo" 
            className="w-full h-full object-contain p-1"
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-white font-serif tracking-widest text-sm">GDG KIET</span>
          <span className="text-blood font-mono text-xs">PRESENTS</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 transform-style-3d">
        <h1 ref={titleRef} className="text-6xl md:text-9xl font-serif font-bold text-transparent stroke-text tracking-tighter mb-4 transform-style-3d" style={{ textShadow: "0 10px 30px rgba(229, 9, 20, 0.5)" }}>
          ICAC 1.0
        </h1>
        
        <div ref={subtitleRef} className="space-y-4">
          <p className="text-xl md:text-3xl text-white font-mono tracking-widest">
            INTER CAMPUS ALGORITHMIC CUP
          </p>
          <p className="text-sm md:text-base text-gray-400 font-mono max-w-lg mx-auto">
            ENTER THE UPSIDE DOWN OF CODING
          </p>
        </div>

        <div ref={ctaRef} className="mt-12">
          <Link 
            href="https://unstop.com" 
            target="_blank"
            className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blood rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative text-xl tracking-widest group-hover:text-white transition-colors duration-300">ENTER THE VOID</span>
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
