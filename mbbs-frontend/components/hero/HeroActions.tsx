// components/hero/HeroActions.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export const HeroActions = ({ isReady = false }: { isReady?: boolean }) => {
  const shouldReduceMotion = useReducedMotion();
  const offset = shouldReduceMotion ? 0 : -120;

  return (
    <motion.div 
      initial={{ x: offset, opacity: 0 }}
      animate={isReady ? { x: 0, opacity: 1 } : { x: offset, opacity: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: shouldReduceMotion ? 0 : 0.4,
      }}
      className="flex items-center justify-start w-full max-w-4xl px-0 mt-2"
    >
      <Link
        href="/admissions"
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-white text-black font-bold tracking-widest text-sm uppercase hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
      >
        Admissions &amp; Aid
      </Link>
    </motion.div>
  );
};
