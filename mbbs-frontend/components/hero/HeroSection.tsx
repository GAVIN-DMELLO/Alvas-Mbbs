// components/hero/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
// import { HeroHeartbeat } from "./HeartbeatAnimation";

export const HeroSection = ({ isReady = false }: { isReady?: boolean }) => {
  const [preloaderCompleted, setPreloaderCompleted] = useState(false);
  const animateReady = isReady || preloaderCompleted;

  useEffect(() => {
    const handlePreloaderComplete = () => {
      setPreloaderCompleted(true);
    };

    window.addEventListener("preloaderComplete", handlePreloaderComplete);
    return () => {
      window.removeEventListener("preloaderComplete", handlePreloaderComplete);
    };
  }, []);

  return (
    <section className="relative w-full h-[100vh] bg-black text-white overflow-x-clip overflow-y-visible">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-x-0 top-0 h-[calc(100%+2rem)] w-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* Soft dark gradient shadow directly behind the text */}
      <div
        className="absolute inset-x-0 top-0 h-[calc(100%+2rem)] pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 15% 80%, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 35%, rgba(0, 0, 0, 0.25) 60%, rgba(0, 0, 0, 0.05) 80%, transparent 100%)"
        }}
      />

      {/* Heartbeat component sits right here! */}
      {/* <HeroHeartbeat /> */}

      <div className="absolute z-10 bottom-8 lg:bottom-12 left-6 lg:left-[90px] flex flex-col items-start">
        <HeroContent isReady={animateReady} />
        <HeroActions isReady={animateReady} />
      </div>
    </section>
  );
}
