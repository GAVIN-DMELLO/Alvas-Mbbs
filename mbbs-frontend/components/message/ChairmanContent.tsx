// components/chairman/ChairmanContent.jsx
"use client";

import { motion } from "framer-motion";
import { Text } from '@/components/ui/Text';

// 1. Container controls the stagger timing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each text element appearing
      delayChildren: 0.2,    // Wait slightly before starting so the image gets a head start
    },
  },
};

// 2. Individual items slide in from the RIGHT (x: 40)
const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

export const ChairmanContent = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of section is visible
      className="w-full lg:w-7/12 flex flex-col justify-between"
    >
      <div>
        {/* Section Heading */}
        <motion.h2 variants={itemVariants} className="font-bold text-3xl sm:text-4xl text-[#234767] mb-6 tracking-tight font-display ">
          Message From The Chairman
        </motion.h2>

        {/* Message Body */}
        <motion.div variants={itemVariants}>
          <Text variant="body" className="text-slate-700 text-base sm:text-lg mb-6 leading-relaxed font-sans">
            Knowledge is power and education is a path to imbibe it. Alva&apos;s Education Foundation (AEF) purports to do exactly the same that is, transform education into knowledge. It is knowledge that will empower the youth of today to understand the information explosions taking place in the rapidly globalizing world. Personal integrity and ethics can be maintained only with a strong mind and a mind can become strong only with knowledge.
          </Text>
        </motion.div>

        {/* Signature Metadata */}
        <motion.div variants={itemVariants} className="mb-8">
          <h4 className="font-bold text-[#234767] text-lg font-sans">
            Dr. Mohan Alva
          </h4>
          <p className="font-['Outfit'] text-slate-500 text-sm mt-0.5 font-sans">
            Chairman, Alva&apos;s Education Foundation.
          </p>
        </motion.div>
      </div>

      {/* Action Button (Added spring hover effect!) */}
      <motion.div variants={itemVariants}>
        <motion.a
          href="/chairman-message"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="inline-flex items-center justify-center bg-[#234767] border-2 border-[#ffddb6] text-white hover:bg-[#1a3753] hover:text-[#ffddb6] font-semibold text-xs tracking-wider uppercase py-3.5 px-7 rounded transition-colors shadow-sm font-mono"
        >
          Read Full Message
        </motion.a>
      </motion.div>
    </motion.div>
  );
};