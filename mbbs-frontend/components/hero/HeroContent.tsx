// components/hero/HeroContent.tsx
"use client";

import { motion } from "framer-motion";

export const HeroContent = ({ isReady = false }: { isReady?: boolean }) => {
  const transitionConfig = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <div className="flex flex-col items-start text-left w-full max-w-3xl px-0 mb-6">
      
      {/* Headline */}
      <motion.h1 
        initial={{ x: 120, opacity: 0 }}
        animate={isReady ? { x: 0, opacity: 1 } : { x: 120, opacity: 0 }}
        transition={{ ...transitionConfig, delay: 0 }}
        className="font-sans text-5xl lg:text-[56px] font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-[1.05]"
      >
        Explore Alva&apos;s<br/>Medical School
      </motion.h1>

      {/* White Line Divider */}
      <motion.div 
        initial={{ x: -120, opacity: 0 }}
        animate={isReady ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }}
        transition={{ ...transitionConfig, delay: 0.1 }}
        className="w-[280px] h-[2px] bg-white mt-5 mb-4 shadow-[0_2px_4px_rgba(0,0,0,0.5)]" 
      />

      {/* Subtext */}
      <motion.p 
        initial={{ x: -120, opacity: 0 }}
        animate={isReady ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }}
        transition={{ ...transitionConfig, delay: 0.25 }}
        className="text-white text-lg lg:text-[20px] font-normal max-w-[500px] leading-snug tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
      >
        Meet our community that shares a genuine passion for advancing healthcare and medical research.
      </motion.p>

    </div>
  );
};
