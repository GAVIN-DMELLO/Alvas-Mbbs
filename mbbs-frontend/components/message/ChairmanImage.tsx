// components/chairman/ChairmanImage.jsx
"use client";

import { motion } from "framer-motion";

export const ChairmanImage = ({ imageSrc = "/Chairman.jpeg", altText = "Dr. Mohan Alva" }) => {
  return (
    <motion.div 
      // 1. SLIDE IN FROM LEFT
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the image is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full lg:w-5/12 flex justify-center"
    >
      {/* Floating animation container with golden glow */}
      <div className="p-3 bg-white border border-[#ffddb6] shadow-[0_0_20px_rgba(255,221,182,0.6)] rounded-sm animate-float">
        <img 
          src={imageSrc} 
          alt={altText}
          className="w-full h-auto object-cover max-h-[450px]"
        />
      </div>

      {/* Inline style for the smooth floating keyframe animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            box-shadow: 0 0 15px rgba(255, 221, 182, 0.5);
          }
          50% {
            transform: translateY(-8px);
            box-shadow: 0 0 25px rgba(255, 221, 182, 0.8);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
};