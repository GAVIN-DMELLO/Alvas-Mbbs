// components/chairman/ChairmanContent.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Text } from '@/components/ui/Text';

// 1. Container controls the stagger timing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export const ChairmanContent = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      variants={containerVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.3 }}
      className="flex w-full flex-col justify-center bg-white px-6 py-10 sm:px-10 sm:py-12 lg:w-[58%] lg:px-14 lg:py-16 xl:px-16"
    >
      <div>
        <motion.span
          aria-hidden="true"
          variants={itemVariants}
          className="mb-6 block h-1.5 w-14 rounded-full bg-[#b98b52]"
        />
        <motion.h2
          variants={itemVariants}
          className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-[#142d44] sm:text-4xl lg:text-[2.6rem]"
        >
          Message From The Chairman
        </motion.h2>

        <motion.div variants={itemVariants}>
          <Text variant="body" className="mb-6 font-sans text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-[17px]">
            Knowledge is power and education is a path to imbibe it. Alva&apos;s Education Foundation (AEF) purports to do exactly the same that is, transform education into knowledge. It is knowledge that will empower the youth of today to understand the information explosions taking place in the rapidly globalizing world. Personal integrity and ethics can be maintained only with a strong mind and a mind can become strong only with knowledge.
          </Text>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 border-t border-slate-200 pt-6"
        >
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-11 w-1 rounded-full bg-[#b98b52]"
            />
            <div>
              <h4 className="font-sans text-base font-bold text-[#234767] sm:text-lg">
                Dr. Mohan Alva
              </h4>
              <p className="mt-1 font-sans text-sm text-slate-500">
                Chairman, Alva&apos;s Education Foundation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <motion.a
          href="/chairman-message"
          whileHover={shouldReduceMotion ? undefined : { x: 4 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          transition={{ type: "spring", stiffness: 360, damping: 24 }}
          className="mt-9 inline-flex items-center gap-3 self-start rounded-full bg-[#234767] px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(35,71,103,0.18)] transition-colors hover:bg-[#173a56] sm:px-7"
        >
          Read Full Message
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4 text-[#ffddb6]"
          >
            <path
              d="M3.5 10h12m-5-5 5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
