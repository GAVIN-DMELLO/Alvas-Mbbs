"use client";

// app/about/about-alvas/page.tsx
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Content (from aimsarc.org/about/about-alvas)                        */
/* ------------------------------------------------------------------ */

const introText =
  "Alva's Education Foundation is dedicated to empowering students through quality education, strong ethical values, and leadership excellence. The foundation strives to create an academic environment that nurtures intellectual growth, professional competence, and social responsibility, preparing students to serve society with commitment and integrity.";

const pillars = [
  {
    title: "Academic Excellence",
    description:
      "Offering world-class education aligned with national and international standards of medical science.",
    accent: "from-[#234767] to-[#b98b52]",
  },
  {
    title: "Community Service",
    description:
      "Preparing students to serve society with commitment and integrity, particularly in rural and underserved areas.",
    accent: "from-[#b98b52] to-[#234767]",
  },
  {
    title: "Research & Innovation",
    description:
      "Encouraging evidence-based research that addresses prevalent health issues and advances the frontiers of medicine.",
    accent: "from-[#b98b52] to-[#234767]",
  },
  {
    title: "Leadership Development",
    description:
      "Shaping leaders equipped with professional ethics, critical thinking, and lifelong learning abilities.",
    accent: "from-[#234767] to-[#b98b52]",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function AboutAlvasPage() {
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
        className="relative isolate min-h-[72vh] overflow-hidden"
      >
        <motion.div
          style={shouldReduceMotion ? undefined : { y: parallaxY }}
          className="absolute inset-0 -z-10"
        >
          <img
            src="/banner-5.jpg"
            alt="Alva's campus"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f33]/55 via-[#0b1f33]/45 to-[#0b1f33]/75" />
        </motion.div>

        <div className="mx-auto flex min-h-[72vh] w-full max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              About Alva&apos;s
            </h1>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#b98b52] to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <section className="relative w-full bg-[#f2f5f7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white p-10 text-center shadow-[0_24px_70px_-40px_rgba(15,41,66,0.4)] sm:p-14">
              <div className="mx-auto mb-7 h-1 w-16 rounded-full bg-gradient-to-r from-[#234767] to-[#b98b52]" />
              <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                {introText}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- PILLARS ---------------- */}
      <section className="relative w-full bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-9 shadow-[0_18px_50px_-30px_rgba(15,41,66,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-30px_rgba(15,41,66,0.45)] sm:p-11">
                  <span
                    className={`mb-6 block h-1 w-12 rounded-full bg-gradient-to-r ${p.accent}`}
                  />
                  <h2 className="font-display text-2xl font-bold text-[#142d44] sm:text-[1.75rem]">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-8 text-slate-600 sm:text-base">
                    {p.description}
                  </p>
                  {/* Corner accent */}
                  <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-300/0 blur-2xl transition-colors duration-500 group-hover:bg-amber-300/15" />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
