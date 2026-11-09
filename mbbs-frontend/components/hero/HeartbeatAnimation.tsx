// components/hero/HeroHeartbeat.jsx
"use client";

import { motion } from "framer-motion";

export const HeroHeartbeat = () => {
  return (
    // Lowered base opacity to 50% (was 70%)
    <div className="absolute right-0 bottom-10 lg:bottom-[48px] w-full lg:w-[65%] opacity-50 pointer-events-none z-10">
      
      <svg viewBox="0 0 1000 120" className="w-full h-full overflow-visible">
        
        {/* Background track - Made extremely faint (opacity-5) */}
        <path 
          d="M 0,80 L 400,80 L 420,55 L 440,80 L 470,80 L 490,20 L 510,140 L 530,80 L 560,80 L 580,65 L 600,80 L 1000,80"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          className="opacity-5" 
        />

        {/* FADING "ALVA'S" TEXT */}
        <motion.text
          x="500"          
          y="20"           
          textAnchor="middle"
          fill="#ffffff"
          className="font-display font-bold tracking-[0.2em] text-2xl uppercase"
          // Softer glow for the text
          style={{ filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.3))" }}
          
          // Max opacity is now only 0.4 (40%) instead of 1!
          animate={{ opacity: [0, 0, 0.4, 0, 0] }}
          transition={{
            duration: 6, // Very slow 6-second sweep
            times: [0, 0.4, 0.5, 0.6, 1], 
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2.5 // 2.5 second pause between heartbeats
          }}
        >
          ALVA&apos;S
        </motion.text>

        {/* THE ANIMATED HEARTBEAT LINE */}
        <motion.path
          d="M 0,80 L 400,80 L 420,55 L 440,80 L 470,80 L 490,20 L 510,140 L 530,80 L 560,80 L 580,65 L 600,80 L 1000,80"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5" // Thinner, more delicate line (was 2.5)
          strokeLinecap="round"
          strokeLinejoin="round"
          // Very faint glow
          style={{ filter: "drop-shadow(0px 0px 4px rgba(255,255,255,0.2))" }} 
          
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1], 
            opacity: [0, 0.4, 0.4, 0] // Line only reaches 40% opacity at its brightest
          }}
          transition={{
            duration: 6, // Matches text duration
            repeat: Infinity, 
            ease: "linear",
            repeatDelay: 2.5 // Matches text delay
          }}
        />
      </svg>
    </div>
  );
};