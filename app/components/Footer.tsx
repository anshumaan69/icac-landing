"use client";

import { MapPin, User, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-12 bg-black border-t border-gray-900 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* KIET Details */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-xl font-serif text-white flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-blood" /> 
              <span>Orbit Location</span>
            </h3>
            <p className="text-gray-400 font-mono text-sm leading-relaxed pl-0 md:pl-7">
              KIET Group of Institutions<br />
              Delhi-NCR, Ghaziabad-Meerut Road,<br />
              NH 58, Ghaziabad, UP 201206
            </p>
          </div>

          {/* The Gatekeepers */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-xl font-serif text-white mb-4 flex items-center justify-center md:justify-start gap-2">
              <User className="w-5 h-5 text-blood" />
              <span>The Gatekeepers</span>
            </h3>
            <div className="space-y-3 pl-0 md:pl-7">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm font-mono gap-1 border-b border-white/5 pb-2 last:border-0">
                <span className="text-gray-300">Divyam Asthana</span>
                <a href="tel:8303011718" className="flex items-center gap-2 text-gray-500 hover:text-neon-blue transition-colors">
                  <Phone className="w-3 h-3" /> 83030 11718
                </a>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center text-sm font-mono gap-1 border-b border-white/5 pb-2 last:border-0">
                <span className="text-gray-300">Krishna Gupta</span>
                <a href="tel:9305707287" className="flex items-center gap-2 text-gray-500 hover:text-neon-blue transition-colors">
                  <Phone className="w-3 h-3" /> 93057 07287
                </a>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center text-sm font-mono gap-1 border-b border-white/5 pb-2 last:border-0">
                <span className="text-gray-300">Kartikey Singh</span>
                <a href="tel:8576878931" className="flex items-center gap-2 text-gray-500 hover:text-neon-blue transition-colors">
                   <Phone className="w-3 h-3" /> 85768 78931
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Email */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-white flex items-center justify-center md:justify-start gap-2">
                 <Mail className="w-5 h-5 text-blood" />
                 <span>Transmissions</span>
              </h3>
              <div className="pl-0 md:pl-7">
                <a href="mailto:dsc@kiet.edu" className="block text-gray-400 font-mono text-sm hover:text-neon-blue transition-colors">
                  dsc@kiet.edu
                </a>
              </div>
            </div>
            
            {/* Removed redundant section to clean up UI as requested previously, keeping it minimal */}
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
