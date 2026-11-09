// components/hero/HeroActions.tsx
"use client";

import { motion } from "framer-motion";

export const HeroActions = ({ isReady = false }: { isReady?: boolean }) => {
  return (
    <motion.div 
      initial={{ x: -120, opacity: 0 }}
      animate={isReady ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
      className="flex items-center justify-start w-full max-w-4xl px-0 mt-2"
    >
      <button 
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-white text-black font-bold tracking-widest text-sm uppercase hover:bg-gray-200 transition-colors focus:outline-none" 
      >
        Admissions &amp; Aid
      </button>
    </motion.div>
  );
};
