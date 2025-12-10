"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export default function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    const chars = charsRef.current.filter(Boolean);
    if (chars.length === 0) return;

    // Randomize initial positions
    chars.forEach((char) => {
      gsap.set(char, {
        x: (Math.random() - 0.5) * 500,
        y: (Math.random() - 0.5) * 500,
        z: (Math.random() - 0.5) * 500,
        rotation: Math.random() * 360,
        opacity: 0,
        scale: 0,
      });
    });

    // Animate to final position on scroll
    gsap.to(chars, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
      x: 0,
      y: 0,
      z: 0,
      rotation: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.02,
      ease: "power3.out",
    });

    // Glitch effect on hover
    containerRef.current?.addEventListener("mouseenter", () => {
      gsap.to(chars, {
        x: () => (Math.random() - 0.5) * 10,
        y: () => (Math.random() - 0.5) * 10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "rough",
        onComplete: () => {
          gsap.to(chars, { x: 0, y: 0, duration: 0.2 });
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`perspective-500 inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => { charsRef.current[i] = el; }}
          className="inline-block transform-style-3d will-change-transform"
          style={{ display: char === " " ? "inline-block" : "inline-block", minWidth: char === " " ? "0.5em" : "auto" }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
