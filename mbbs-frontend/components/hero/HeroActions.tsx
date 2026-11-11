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
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#b98b52] to-[#a7773f] px-8 py-3.5 font-display text-[13px] font-bold uppercase tracking-[0.18em] text-[#0b1e36] shadow-[0_14px_30px_-16px_rgba(185,139,82,0.9)] transition-all duration-300 ease-out hover:-translate-y-1 hover:from-[#c99a63] hover:to-[#b98b52] hover:shadow-[0_22px_44px_-16px_rgba(185,139,82,0.95)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d3ae74] focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
      >
        {/* Light sweep on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />

        <span className="relative">Admissions &amp; Aid</span>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
        >
          <path d="M5 12h13m-5-5l5 5-5 5" />
        </svg>
      </Link>
    </motion.div>
  );
};
