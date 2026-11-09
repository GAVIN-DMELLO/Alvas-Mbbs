"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const highlights = [
  {
    value: "40+",
    label: "Years of healthcare legacy",
    detail: "A trusted tradition of care through Alva's Health Centre",
  },
  {
    value: "2026",
    label: "A new chapter begins",
    detail: "The year Alva's Institute was established",
  },
  {
    value: "03",
    label: "Pillars of our purpose",
    detail: "Medical education, research, and healthcare",
  },
  {
    value: "01",
    label: "Shared purpose",
    detail: "Compassionate care for every community",
  },
];

export const ImpactStatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="impact-stats-heading"
      className="relative z-20 overflow-hidden px-4 pb-14 sm:px-6 sm:pb-20 lg:px-[4vw]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-8 bg-[#e9eff4]"
      />

      <motion.div
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { y: glowY }}
        className="pointer-events-none absolute -right-28 top-12 h-80 w-80 rounded-full bg-[#ffddb6]/35 blur-[90px]"
      />

      <div className="relative z-10 mx-auto w-full">
        <div className="rounded-b-[2rem] rounded-t-[2rem] border border-white/80 bg-white px-6 pb-10 pt-10 shadow-[0_24px_70px_rgba(15,41,66,0.09)] sm:px-10 sm:pb-12 sm:pt-12 lg:px-14 lg:pb-14 lg:pt-14">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-9 max-w-2xl text-center sm:mb-12"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#234767]/10 bg-[#234767]/5 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#234767] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b98b52]" />
              Alva&apos;s legacy
            </span>
            <h2
              id="impact-stats-heading"
              className="font-display text-3xl font-bold tracking-tight text-[#142d44] sm:text-4xl lg:text-[2.75rem]"
            >
              Rooted in care. Focused on what&apos;s next.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              A new institute, built on generations of service and a lasting
              commitment to better health.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 divide-y divide-slate-200/80 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <motion.article
                key={highlight.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.65,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group px-4 py-6 text-center first:pt-2 last:pb-2 sm:px-6 sm:py-2 sm:first:pl-2 sm:last:pr-2 lg:px-7"
              >
                <p className="font-display text-4xl font-bold tracking-tight text-[#234767] transition-colors duration-300 group-hover:text-[#a7773f] sm:text-[2.75rem]">
                  {highlight.value}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-slate-900 sm:text-base">
                  {highlight.label}
                </h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {highlight.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
