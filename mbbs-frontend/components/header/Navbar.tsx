// components/header/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = ({ isReady = false }: { isReady?: boolean }) => {
  const [animateReady, setAnimateReady] = useState(isReady);

  useEffect(() => {
    if (isReady) {
      setAnimateReady(true);
    }
  }, [isReady]);

  useEffect(() => {
    const handlePreloaderComplete = () => {
      setAnimateReady(true);
    };

    window.addEventListener("preloaderComplete", handlePreloaderComplete);
    return () => {
      window.removeEventListener("preloaderComplete", handlePreloaderComplete);
    };
  }, []);

  const navLinks = [
    { label: 'About', href: '#About' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Student Portal', href: '#student portal' },
    { label: 'Departments', href: '#departments' },
    { label: 'Hospital', href: '#hospital' },
    { label: 'Happenings@AIMSARC', href: '#happenings' },
    { label: 'Contact Us', href: '#Contact Us' },
  ];

  return (
    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={animateReady ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-gradient-to-b from-black/80 via-black/45 to-transparent backdrop-blur-sm px-6 py-3 sm:py-3.5 absolute top-0 left-0 z-50"
    >
      <div className="max-w-[95rem] mx-auto flex justify-between items-center gap-8 lg:gap-12 w-full">
        
        <motion.a 
          href="#" 
          className="flex items-center gap-3.5 group shrink-0 outline-none focus:outline-none focus:ring-0 select-none"
          style={{ outline: "none" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Subtle Backlight behind emblem */}
          <div 
            className="relative flex items-center justify-center p-1 rounded-full shrink-0"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)"
            }}
          >
            <img
              src="/logo_home.png"
              alt="Institution Logo"
              className="h-[92px] sm:h-[96px] w-auto object-contain"
              style={{
                filter: "drop-shadow(0px 0px 1.5px rgba(255, 255, 255, 0.95)) drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.55))"
              }}
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-extrabold text-base sm:text-xl leading-tight uppercase font-display tracking-[-0.01em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Alva&apos;s Institute of Medical Sciences
            </span>
            <span className="text-white/90 text-[12px] sm:text-[13px] font-semibold uppercase font-display tracking-[0.06em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              and Research Centre
            </span>
          </div>
        </motion.a>

        <div className="hidden lg:flex items-center gap-4 xl:gap-8 justify-end w-full">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ 
                y: -2,           
                scale: 1.05,     
                color: "#ffffff" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }} 
              className="text-[12px] xl:text-[13px] font-semibold uppercase text-white/90 hover:text-white inline-block font-display tracking-[0.06em] whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

      </div>
    </motion.nav>
  );
};
