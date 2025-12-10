"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import HorizontalScroll from "./components/HorizontalScroll";
import Registration from "./components/Registration";
import SpecialGuest from "./components/SpecialGuest";
import Sponsors from "./components/Sponsors";
import Prizes from "./components/Prizes";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import Cursor from "./components/Cursor";
import LivingBackground from "./components/LivingBackground";
import Storm from "./components/Storm";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-void text-white overflow-x-hidden selection:bg-blood selection:text-white cursor-none perspective-1000">
      {/* Splash Screen */}
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      
      {/* Custom Cursor */}
      <Cursor />

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
