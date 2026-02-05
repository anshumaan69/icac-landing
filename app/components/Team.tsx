"use client";

import { useEffect, useRef } from "react";
import { Linkedin, Mail, FileText } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  resume: string;
  image?: string; 
}

const TEAM_MEMBERS: TeamMember[] = [
    {
    name: "Krishna Gupta",
    role: "",
    email: "krishna.kietian@gmail.com",
    linkedin: "https://www.linkedin.com/in/krisshxna/",
    resume: "https://drive.google.com/open?id=1Q5sM1qLD-Evem7sHVcBNXYaYIbfBDDrV",
    image: "/assets/team/KrishnaGupta.jpeg"
  },
  {
    name: "Krishna Kumar Agrahari",
    role: "",
    email: "krishnaagrahari.16@gmail.com",
    linkedin: "https://www.linkedin.com/in/krishnaagrahari16?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    resume: "https://drive.google.com/open?id=1Q5sM1qLD-Evem7sHVcBNXYaYIbfBDDrV",
    image: "/assets/team/krishna-agrahari.jpg"
  },
  {
    name: "Kartikey Singh",
    role: "",
    email: "kartikeysingh99999@gmail.com",
    linkedin: "https://www.linkedin.com/in/kartikey-singh-54a560288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    resume: "https://drive.google.com/open?id=14h3itPBq2uQRzW3AgO6FYexKSoF8Z5PZ",
    image: "/assets/team/kartikey-singh.jpg"
  },
  {
    name: "Harsh Chaudhary",
    role: "",
    email: "chauharsh09@gmail.com",
    linkedin: "https://www.linkedin.com/in/harsh-chaudhary-5bb7882a4/",
    resume: "https://drive.google.com/open?id=1oQ6lWRLpVxJd7T_smD8QFUB3gLAkwomF",
    image: "/assets/team/harsh-chaudhary.png"
  },
  {
    name: "Vansh Maheshwari",
    role: "",
    email: "maheshwarivansh931@gmail.com",
    linkedin: "https://www.linkedin.com/in/vansh-maheshwari931/",
    resume: "https://drive.google.com/open?id=12B64WHRXbLitzqL5nah97hyeQfrSA7hF",
    image: "/assets/team/vansh-maheshwari.jpeg"
  },
  {
    name: "Sameer Patel",
    role: "",
    email: "sameer.2327it1195@kiet.edu",
    linkedin: "https://www.linkedin.com/in/sameerpat11el/",
    resume: "https://drive.google.com/open?id=17K1eh0-Qn1hd7gnB8T4BpKgYGM4_LRXS",
    image: "/assets/team/sameer-patel.jpg"
  },
  {
    name: "Deepanshu Singh",
    role: "",
    email: "deep4nxu@gmail.com",
    linkedin: "https://www.linkedin.com/in/deepanshu-singh-468b59284?trk=contact-info",
    resume: "https://drive.google.com/open?id=1I4K_B6X2EShxPeyOwlq1t-JP3vDE2VHL",
    image: "/assets/team/deepanshu-singh.jpeg"
  },
  {
    name: "Prince Kumar Yadav",
    role: "",
    email: "princeyadav61204@gmail.com",
    linkedin: "https://www.linkedin.com/in/princeyadav9099?trk=blended-typeahead",
    resume: "https://drive.google.com/open?id=15fURGCW1QIutEUMvvdfuZKx5QCToqy93",
    image: "/assets/team/prince-kumar-yadav.jpg"
  },
  {
    name: "Kushwaha Rajat Kamalakant",
    role: "",
    email: "rajatkshwh131@gmail.com",
    linkedin: "https://www.linkedin.com/in/kushwaha-rajat",
    resume: "https://drive.google.com/open?id=1i8bYkVqDBJ6osahQO0NkN5y805BbgGWa",
    image: "/assets/team/kushwaha-rajat.jpg"
  },
  {
    name: "Divyam Asthana",
    role: "",
    email: "divwork555@gmail.com",
    linkedin: "https://www.linkedin.com/in/divyam-asthana",
    resume: "https://drive.google.com/open?id=1Gf3tniNw4W1vmK_U3EbEbq4jZtH3sJjL",
    image: "/assets/team/divyam-asthana.jpeg"
  },
  {
    name: "Harsh Chandra Srivastava",
    role: "",
    email: "harshcsrivastava@gmail.com",
    linkedin: "https://www.linkedin.com/in/harshcsrivastava/",
    resume: "https://drive.google.com/open?id=18IbuyMFaT870Pbte2otRoAgpvVOH3fDO",
    image: "/assets/team/harsh-srivastava.jpg"
  },
  {
    name: "Tanmay Shukla",
    role: "",
    email: "tanmayshukla1408@gmail.com",
    linkedin: "https://www.linkedin.com/in/tanmayshukla14/",
    resume: "https://drive.google.com/open?id=1hKNi5VrRVzYRm1ndBs3dDoSJTMxjDRIO",
    image: "/assets/team/tanmay-shukla.jpeg"
  }
];

// Duplicate list for infinite scroll effect
const SCROLL_MEMBERS = [...TEAM_MEMBERS, ...TEAM_MEMBERS];

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
                                src={member.image || `/team/placeholder-${index % 5}.jpg`} 
                                alt={member.name}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-gray-800', 'to-black');
                                }}
                            />
                            {/* Fallback Initials */}
                            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-100 mix-blend-overlay">
                                <span className="text-9xl font-serif font-bold text-white/10 group-hover:text-white/20 transition-colors">
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
