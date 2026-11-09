"use client";

// app/about/chairman-message/page.tsx
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Content (from aimsarc.org/about/chairman-message)                      */
/* ------------------------------------------------------------------ */

const quote = "Knowledge is power and education is a path to imbibe it.";

const paragraphs = [
  "Alva's Education Foundation (AEF) purports to do exactly the same — transform education into knowledge. It is knowledge that will empower the youth of today to understand the information explosions taking place in the rapidly globalizing world. Personal integrity and ethics can be maintained only with a strong mind and a mind can become strong only with knowledge.",
  "Alva's Education Foundation (AEF) aims to develop individuals who will be ready to take up real challenges presented to them. At the same time, the foundation wants these individuals to be culturally and ethically enlightened because not only the industry but our country needs such individuals today.",
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function ChairmanMessagePage() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  return (
    <div className="relative">
      {/* ---------------- HERO ---------------- */}
      <section
        ref={heroRef}
        className="relative isolate min-h-[70vh] overflow-hidden"
      >
        <motion.div
          style={shouldReduceMotion ? undefined : { y: parallaxY }}
          className="absolute inset-0 -z-10"
        >
          <img
            src="/banner-4.jpg"
            alt="Leadership"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f33]/55 via-[#0b1f33]/45 to-[#0b1f33]/80" />
        </motion.div>

        <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Chairman&apos;s Message
            </h1>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#b98b52] to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- MESSAGE ---------------- */}
      <section className="relative w-full bg-[#f2f5f7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,41,66,0.45)]">
            {/* Portrait */}
            <div className="relative bg-gradient-to-b from-[#0b1f33] to-[#142d44] px-6 pt-14 pb-0">
              <div className="mx-auto max-w-sm">
              <div className="overflow-hidden rounded-t-3xl border-4 border-white/10 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.6)]">
                <img
                  src="/Chairman.jpeg"
                  alt="Dr. Mohan Alva"
                  className="h-80 w-full object-cover"
                />
              </div>
              </div>
            </div>

            {/* Name & role */}
            <div className="px-6 pt-8 text-center sm:px-10">
              <ScrollReveal>
                <h2 className="font-display text-3xl font-bold text-[#142d44] sm:text-4xl">
                  Dr. Mohan Alva
                </h2>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-[#a7773f]">
                  Chairman
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Alva&apos;s Institute of Medical Sciences and Research Centre,
                  Moodubidire
                </p>
                <div className="mx-auto mt-6 h-px w-24 bg-slate-200" />
              </ScrollReveal>
            </div>

            {/* Quote + body */}
            <div className="px-6 pb-12 pt-8 sm:px-14 sm:pb-16 sm:pt-10">
              <ScrollReveal>
                <blockquote className="relative border-l-4 border-[#b98b52] bg-[#f8fafc] py-5 pl-6 pr-4 font-display text-xl font-semibold italic text-[#142d44] sm:text-2xl">
              &ldquo;{quote}&rdquo;
            </blockquote>
              </ScrollReveal>

              <div className="mt-8 space-y-6">
                {paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={0.05}>
                  <p className="text-[15px] leading-8 text-slate-600 sm:text-base sm:leading-9">
                    {p}
                  </p>
                </ScrollReveal>
              ))}
              </div>

              {/* Signature */}
              <ScrollReveal delay={0.1}>
                <div className="mt-10 flex items-center gap-4 border-t border-slate-100 pt-8">
                  <span className="h-12 w-1.5 rounded-full bg-[#b98b52]" />
                  <div>
                    <p className="font-display text-lg font-bold text-[#234767]">
                      Dr. Mohan Alva
                    </p>
                    <p className="text-sm text-slate-500">Chairman, AIMSARC</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
