"use client";

import { useEffect, useRef } from "react";
import { Linkedin, Mail, Instagram } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  instagram: string;
  image?: string; 
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Krishna Gupta",
    role: "Organizer",
    email: "krishna.kietian@gmail.com",
    linkedin: "https://www.linkedin.com/in/krisshxna/",
    instagram: "https://www.instagram.com/krisshxna/",
    image: "/team/krishna.jpg"
  },
  {
    name: "Divyam Asthana",
    role: "Organizer",
    email: "divwork555@gmail.com",
    linkedin: "https://www.linkedin.com/in/divyam-asthana/",
    instagram: "https://www.instagram.com/divyam_asthana.001/",
    image: "/team/divyam.jpg"
  },
  {
    name: "Kartikey Singh",
    role: "Organizer",
    email: "kartikeysingh99999@gmail.com",
    linkedin: "https://www.linkedin.com/in/kartikey-singh-54a560288/",
    instagram: "https://www.instagram.com/kartikey1s",
    image: "/team/kartikey.jpg"
  }
];

// Duplicate list for infinite scroll effect
const SCROLL_MEMBERS = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS];

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple CSS-based marquee animation is often smoother for continuous loops than GSAP for this specific case
    // But we can use GSAP for entrance or if we want interactive scrubbing.
    // For a simple "horizontally moving circular carousel", CSS animation is simplest and most robust.
    
    // However, to ensure it looks premium, we'll stick to a clean CSS animation defined in global or via arbitrary values.
  }, []);

  return (
    <section className="py-24 bg-black relative border-t border-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">The Architects</span>
            </h2>
            <p className="text-gray-400 font-mono text-center max-w-2xl mx-auto">
                Meet the minds behind the chaos.
            </p>
        </div>

        {/* Carousel Track */}
        <div className="relative w-full overflow-hidden">
            <div className="flex gap-8 w-max animate-carousel-scroll hover:pause">
                {SCROLL_MEMBERS.map((member, index) => (
                    <div 
                        key={index}
                        className="w-[300px] md:w-[350px] flex-shrink-0 group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-blood/50 transition-colors duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
                        
                        {/* Image */}
                        <div className="h-80 w-full bg-neutral-900 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                             <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-gray-800', 'to-black');
                                }}
                            />
                            {/* Fallback Initials */}
                            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20 group-hover:opacity-10 transition-opacity">
                                <span className="text-8xl font-serif font-bold text-white">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-sm text-blood font-mono mb-4 uppercase tracking-wider">
                                {member.role}
                            </p>

                            <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                <a 
                                    href={member.email.startsWith("mailto:") ? member.email : `mailto:${member.email}`}
                                    className="bg-white/5 p-2 rounded-full hover:bg-neon-blue/20 hover:text-neon-blue transition-all"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                                <a 
                                    href={member.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-white/5 p-2 rounded-full hover:bg-neon-blue/20 hover:text-neon-blue transition-all"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a 
                                    href={member.instagram} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-white/5 p-2 rounded-full hover:bg-neon-blue/20 hover:text-neon-blue transition-all"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
             {/* Gradient Overlays for smooth fade out at edges */}
             <div className="absolute top-0 left-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
             <div className="absolute top-0 right-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
        </div>
    </section>
  );
}
