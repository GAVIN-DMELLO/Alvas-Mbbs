"use client";

// app/about/vision-mission/page.tsx
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Content (from aimsarc.org/about/vision-mission)                       */
/* ------------------------------------------------------------------ */

const vision =
  "To be a centre of excellence in medical education, research, and healthcare delivery, nurturing compassionate professionals dedicated to serving rural and underserved communities.";

const mission =
  "To establish the college as a centre of excellence, delivering quality and affordable medical education; to train compassionate and skilled professionals committed to providing accessible healthcare and innovative solutions to health challenges with integrity and social responsibility.";

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function VisionMissionPage() {
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
        className="relative isolate min-h-[64vh] overflow-hidden"
      >
        <motion.div
          style={shouldReduceMotion ? undefined : { y: parallaxY }}
          className="absolute inset-0 -z-10"
        >
          <img
            src="/banner-5.jpg"
            alt="Our Direction"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f33]/55 via-[#0b1f33]/45 to-[#0b1f33]/80" />
        </motion.div>

        <div className="mx-auto flex min-h-[64vh] w-full max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Vision &amp; Mission
            </h1>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#b98b52] to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- VISION & MISSION ---------------- */}
      <section className="relative w-full bg-[#f2f5f7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {/* Vision */}
            <ScrollReveal>
              <article className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white p-10 shadow-[0_24px_70px_-40px_rgba(15,41,66,0.4)] transition-shadow duration-500 hover:shadow-[0_30px_80px_-35px_rgba(15,41,66,0.5)] sm:p-12">
                {/* Top accent bar */}
                <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#234767] via-[#b98b52] to-[#234767]" />

                <div>
                  <h2 className="flex items-center gap-3.5 font-display text-2xl font-bold text-[#142d44] sm:text-3xl">
                    <span
                      className="h-3 w-3 rounded-full bg-gradient-to-r from-[#234767] to-[#b98b52] shadow-sm ring-4 ring-[#b98b52]/15"
                      aria-hidden="true"
                    />
                    Vision
                  </h2>
                  <p className="mt-4 text-[15px] leading-8 text-slate-600 sm:text-base sm:leading-9">
                    &ldquo;{vision}&rdquo;
                  </p>
                </div>
              </article>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={0.1}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white p-10 shadow-[0_24px_70px_-40px_rgba(15,41,66,0.4)] transition-shadow duration-500 hover:shadow-[0_30px_80px_-35px_rgba(15,41,66,0.5)] sm:p-12">
                {/* Top accent bar (reverse) */}
                <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#b98b52] via-[#234767] to-[#b98b52]" />

                <div>
                  <h2 className="flex items-center gap-3.5 font-display text-2xl font-bold text-[#142d44] sm:text-3xl">
                    <span
                      className="h-3 w-3 rounded-full bg-gradient-to-r from-[#234767] to-[#b98b52] shadow-sm ring-4 ring-[#b98b52]/15"
                      aria-hidden="true"
                    />
                    Mission
                  </h2>
                  <p className="mt-4 text-[15px] leading-8 text-slate-600 sm:text-base sm:leading-9">
                    &ldquo;{mission}&rdquo;
                  </p>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
