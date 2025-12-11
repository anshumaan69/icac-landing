"use client";

import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-12 bg-black border-t border-gray-900 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* KIET Details */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif text-white mb-4">KIET Group of Institutions</h3>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              Delhi-NCR, Ghaziabad-Meerut Road,<br />
              NH 58, Ghaziabad,<br />
              Uttar Pradesh 201206
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif text-white mb-4">Contact Us</h3>
            <div className="flex flex-col gap-2 text-gray-400 font-mono text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+918828912891" className="hover:text-neon-blue transition-colors">+91 8828912891</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:01232227980" className="hover:text-neon-blue transition-colors">01232-227980</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:18003130056" className="hover:text-neon-blue transition-colors">1800-3130056</a>
              </div>
            </div>
          </div>

          {/* Student Coordinator */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif text-white mb-4">Student Coordinator</h3>
            <div className="flex flex-col gap-2 text-gray-400 font-mono text-sm">
              <span className="font-bold text-white">Krishna Gupta</span>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919305707287" className="hover:text-neon-blue transition-colors">93057 07287</a>
              </div>
            </div>
          </div>

        </div>
      
      <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left text-gray-600 font-mono text-xs order-2 md:order-1">
          &copy; 2026 GDG On Campus KIET. All rights reserved.
        </div>
        
        <div className="flex items-center gap-4 order-1 md:order-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
          <span className="text-gray-400 font-mono text-xs uppercase tracking-wider">Powered by</span>
          <div className="h-8 w-px bg-gray-700 mx-2"></div>
          <img 
            src="/gdg-logo-new.png" 
            alt="GDG Logo" 
            className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </footer>
  );
}
