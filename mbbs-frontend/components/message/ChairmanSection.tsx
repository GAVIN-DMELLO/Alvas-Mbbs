// components/chairman/ChairmanSection.jsx
"use client";

import { motion } from "framer-motion";
import { ChairmanImage } from './ChairmanImage';
import { ChairmanContent } from './ChairmanContent';

export const ChairmanSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-slate-50 overflow-hidden">
      
      {/* --- BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
        
        {/* 1. Navy Blue Aurora Blob */}
        <motion.div
          animate={{ x: [0, 150, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#234767]/10 blur-[120px]"
        />

        {/* 2. Gold/Peach Aurora Blob */}
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#ffddb6]/40 blur-[120px]"
        />

        {/* 3. NEW: Floating Ambient DNA Helix */}
        <motion.svg
          viewBox="0 0 100 400"
          // opacity-[0.04] makes it look like a very faint, premium watermark
          className="absolute right-[-5%] lg:right-[5%] w-[250px] lg:w-[350px] text-[#234767] opacity-[0.04]"
          animate={{
            y: [-15, 15, -15], // Floats up and down 15 pixels
            rotate: [-2, 2, -2], // Very subtle rotation to make it feel fluid
          }}
          transition={{
            duration: 12, // Slow, peaceful 12-second loop
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* DNA Strand 1 */}
          <path d="M50 0 C 100 33, 100 66, 50 100 C 0 133, 0 166, 50 200 C 100 233, 100 266, 50 300 C 0 333, 0 366, 50 400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          {/* DNA Strand 2 */}
          <path d="M50 0 C 0 33, 0 66, 50 100 C 100 133, 100 166, 50 200 C 0 233, 0 266, 50 300 C 100 333, 100 366, 50 400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* DNA Base Pairs (The connecting lines) */}
          <line x1="50" y1="16" x2="88" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="33" x2="100" y2="33" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="50" x2="88" y2="50" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="66" x2="0" y2="66" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="83" x2="12" y2="83" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="116" x2="12" y2="116" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="133" x2="0" y2="133" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="150" x2="12" y2="150" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="183" x2="88" y2="183" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="216" x2="88" y2="216" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="233" x2="100" y2="233" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="250" x2="88" y2="250" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="266" x2="0" y2="266" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="283" x2="12" y2="283" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="316" x2="12" y2="316" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="333" x2="0" y2="333" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="350" x2="12" y2="350" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="383" x2="88" y2="383" stroke="currentColor" strokeWidth="1.5" />
        </motion.svg>
      </div>
      {/* ---------------------------------- */}

      {/* --- MAIN CONTENT LAYER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <ChairmanImage />
        <ChairmanContent />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24"
      >
        <hr className="w-full border-t-2 border-slate-300" />
      </motion.div>
      
    </section>
  );
};``