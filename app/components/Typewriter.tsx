"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function Typewriter({ text, className = "", delay = 0, speed = 0.05 }: TypewriterProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const chars = text.split("");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      delay: delay,
    });

    // Clear initial text
    if (textRef.current) textRef.current.innerHTML = "";

    chars.forEach((char, index) => {
      tl.to(textRef.current, {
        duration: speed,
        textContent: text.substring(0, index + 1),
        ease: "none",
      });
    });

    // Cursor blink
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "steps(1)",
    });

  }, { scope: textRef });

  return (
    <span className={`inline-block ${className}`}>
      <span ref={textRef} className="whitespace-pre-wrap"></span>
      <span ref={cursorRef} className="text-blood font-bold">|</span>
    </span>
  );
}
