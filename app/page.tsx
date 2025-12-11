"use client";

import { useState, useRef, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import HorizontalScroll from "./components/HorizontalScroll";
import Registration from "./components/Registration";
import SpecialGuest from "./components/SpecialGuest";
import Sponsors from "./components/Sponsors";
import Prizes from "./components/Prizes";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

import LivingBackground from "./components/LivingBackground";
import Storm from "./components/Storm";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted to attempt autoplay
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!loading && audioRef.current) {
      audioRef.current.volume = 0.4; // Set volume to 40%
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
          setIsMuted(true); // Update state if autoplay is blocked
        });
      }
    }
  }, [loading]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
        audioRef.current.muted = false;
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="relative min-h-screen bg-void text-white overflow-x-hidden selection:bg-blood selection:text-white cursor-none perspective-1000">
      {/* Background Music */}
      <audio 
        ref={audioRef} 
        loop 
        src="/stranger-things-theme-song.mp3"
      />

      {/* Sound Control */}
      {!loading && (
        <button 
          onClick={toggleMute}
          className="fixed bottom-8 right-8 z-50 p-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-full hover:bg-blood/20 hover:border-blood/50 transition-all duration-300 group"
        >
          {isMuted ? (
            <svg className="w-6 h-6 text-white/70 group-hover:text-blood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <div className="flex items-center justify-center gap-1 h-6 w-6">
              <div className="w-1 h-3 bg-blood animate-[sound-wave_1s_ease-in-out_infinite]" />
              <div className="w-1 h-6 bg-blood animate-[sound-wave_1.2s_ease-in-out_infinite_0.1s]" />
              <div className="w-1 h-4 bg-blood animate-[sound-wave_0.8s_ease-in-out_infinite_0.2s]" />
              <div className="w-1 h-2 bg-blood animate-[sound-wave_1.1s_ease-in-out_infinite_0.3s]" />
            </div>
          )}
        </button>
      )}

      {/* Splash Screen */}
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      


      {/* Living Background (The Rift) */}
      <LivingBackground />
      
      {/* Storm Effect */}
      <Storm />

      {/* Global Effects */}
      <div className="film-grain pointer-events-none" />
      <div className="vignette pointer-events-none" />

      {/* Components */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <About />
        <HorizontalScroll />
        <Registration />
        <Prizes />
        <SpecialGuest />
        <Sponsors />
        <Footer />
      </div>
    </main>
  );
}
