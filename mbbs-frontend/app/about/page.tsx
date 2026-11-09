"use client";

// app/about/page.tsx
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Content (from aimsarc.org/about)                                    */
/* ------------------------------------------------------------------ */

const foundationText =
  "Alva's Institute of Medical Sciences and Research Centre (AIMSARC) was established in 2026 as a proud unit of Alva's Education Foundation, carrying forward a rich legacy of service, compassion, and academic excellence rooted in a 40-year history of Alva's Health Centre, a trusted name in healthcare that has served generations with dedication and integrity.";

const healingText =
  "For over four decades, Alva's Health Centre has stood as a pillar of quality medical care, earning the community's trust through patient-centred treatment, ethical practice, and unwavering commitment to health and wellbeing.";

const values = [
  {
    title: "Compassion in Care",
    description: "Treating every patient with dignity",
    accent: "bg-[#b98b52]",
  },
  {
    title: "Excellence in Education",
    description: "Future-ready medical training",
    accent: "bg-[#234767]",
  },
  {
    title: "Integrity in Practice",
    description: "Highest ethical standards",
    accent: "bg-[#b98b52]",
  },
  {
    title: "Service to Society",
    description: "Community health responsibility",
    accent: "bg-[#234767]",
  },
];

const lookingAhead =
  "Anchored by 40 years of healthcare excellence and energized by a new generation of learners, AIMSRC stands as a symbol of trust, progress, and hope.";

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function AboutCollegePage() {
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
        className="relative isolate min-h-[80vh] overflow-hidden"
      >
        <motion.div
          style={shouldReduceMotion ? undefined : { y: parallaxY }}
          className="absolute inset-0 -z-10"
        >
          <img
            src="/banner-7.jpg"
            alt="AIMSARC campus"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f33]/55 via-[#0b1f33]/40 to-[#0b1f33]/70" />
        </motion.div>

        <div className="mx-auto flex min-h-[80vh] w-full max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-200 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              AIMSARC
            </span>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              About the College
            </h1>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#b98b52] to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- NARRATIVE CARDS ---------------- */}
      <section className="relative w-full bg-[#f2f5f7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <ScrollReveal>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white p-10 shadow-[0_24px_70px_-40px_rgba(15,41,66,0.4)] transition-shadow duration-500 hover:shadow-[0_30px_80px_-35px_rgba(15,41,66,0.5)] sm:p-12">
                <span className="absolute left-0 top-10 h-16 w-1.5 rounded-r-full bg-gradient-to-b from-[#234767] to-[#b98b52]" />
                <h2 className="pl-6 font-display text-2xl font-bold text-[#142d44] sm:text-3xl">
                  Our Foundation
                </h2>
                <p className="mt-6 pl-6 text-[15px] leading-8 text-slate-600 sm:text-base">
                  {foundationText}
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white p-10 shadow-[0_24px_70px_-40px_rgba(15,41,66,0.4)] transition-shadow duration-500 hover:shadow-[0_30px_80px_-35px_rgba(15,41,66,0.5)] sm:p-12">
                <span className="absolute left-0 top-10 h-16 w-1.5 rounded-r-full bg-gradient-to-b from-[#b98b52] to-[#234767]" />
                <h2 className="pl-6 font-display text-2xl font-bold text-[#142d44] sm:text-3xl">
                  From Healing Hands to Learning Minds
                </h2>
                <p className="mt-6 pl-6 text-[15px] leading-8 text-slate-600 sm:text-base">
                  {healingText}
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------------- VALUES ---------------- */}
      <section className="relative w-full bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-[#142d44] sm:text-4xl">
                Built on Values, Driven by Purpose
              </h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#b98b52]" />
            </ScrollReveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <article className="group h-full rounded-3xl border border-slate-100 bg-[#f8fafc] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-200 hover:bg-white hover:shadow-[0_22px_50px_-30px_rgba(15,41,66,0.35)]">
                  <span className={`block h-1 w-10 rounded-full ${v.accent}`} />
                  <h3 className="mt-6 font-display text-lg font-bold leading-snug text-[#142d44]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {v.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Looking Ahead */}
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-16 max-w-4xl text-center text-lg leading-relaxed text-slate-600 sm:text-xl">
              {lookingAhead}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- QUOTE BANNER ---------------- */}
      <section className="relative isolate w-full overflow-hidden bg-[#0b1f33] py-20 sm:py-24 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#234767]/60 blur-[120px]" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#b98b52]/15 blur-[130px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="font-display text-6xl leading-none text-amber-300/40 sm:text-7xl">
              &ldquo;
            </span>
            <blockquote className="mx-auto -mt-4 max-w-3xl font-display text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-[2.25rem]">
              From a healing legacy to a learning future — this is our story.
            </blockquote>
            <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#b98b52]" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
