"use client";

import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-12 bg-black border-t border-gray-900 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Contact */}
        <div className="text-center md:text-left w-full flex flex-col items-center md:items-start">
          <h3 className="text-xl font-serif text-white mb-4">Contact</h3>
          <div className="flex items-center gap-2 text-gray-400 font-mono mb-2">
            <span className="font-bold text-white">Krishna Gupta</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-mono">
            <Phone className="w-4 h-4" />
            <a href="tel:+919305707287" className="hover:text-neon-blue transition-colors">93057 07287</a>
          </div>
        </div>

      </div>
      
      <div className="mt-12 text-center text-gray-600 font-mono text-xs">
        &copy; 2026 GDG On Campus KIET. All rights reserved.
      </div>
    </footer>
  );
}
