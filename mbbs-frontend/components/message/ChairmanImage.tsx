// components/chairman/ChairmanImage.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

export const ChairmanImage = ({ imageSrc = "/Chairman.jpeg", altText = "Dr. Mohan Alva" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative aspect-[4/3] w-full overflow-hidden bg-[#173a56] lg:aspect-auto lg:min-h-[560px] lg:w-[42%]"
    >
      <img
        src={imageSrc}
        alt={altText}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#102b43]/45 via-transparent to-[#102b43]/10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 top-0 w-1.5 bg-[#ffddb6]/80"
      />
    </motion.div>
  );
};
