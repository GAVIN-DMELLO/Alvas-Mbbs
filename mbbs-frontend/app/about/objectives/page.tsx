"use client";

// app/about/objectives/page.tsx
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */

const intro =
  "Our institution is committed to nurturing skilled, ethical, and compassionate medical professionals who contribute meaningfully to healthcare in India and beyond.";

const objectives = [
  {
    num: "01",
    title: "Academic Excellence",
    description:
      "To offer undergraduate and postgraduate medical education adhering to national standards with a focus on rural and community health.",
  },
  {
    num: "02",
    title: "Clinical Training",
    description:
      "To provide clinical training through our affiliated hospitals and healthcare centers, ensuring hands-on experience and patient-centered care.",
  },
  {
    num: "03",
    title: "Regional Research",
    description:
      "To engage in research that addresses prevalent medical and public health issues in the region, contributing to evidence-based healthcare.",
  },
  {
    num: "04",
    title: "Community Wellness",
    description:
      "To build partnerships with local organizations and health programs to enhance community wellness and medical education.",
  },
  {
    num: "05",
    title: "Ethical Leadership",
    description:
      "To ensure the development of professional ethics, leadership, and lifelong learning habits among students.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function ObjectivesPage() {
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
            src="/banner-1.jpg"
            alt="Our Goals & Objectives"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f33]/60 via-[#0b1f33]/50 to-[#0b1f33]/85" />
        </motion.div>

        <div className="mx-auto flex min-h-[64vh] w-full max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b98b52]">
              Our Goals
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Objectives
            </h1>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#b98b52] to-transparent" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg">
              {intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- OBJECTIVES LIST ---------------- */}
      <section className="relative w-full bg-[#f2f5f7] py-20 sm:py-24 lg:py-28">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[#b98b52]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#234767]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#b98b52]">
              Our Goals
            </p>
            <h2 className="mb-12 font-display text-4xl font-bold text-[#142d44] sm:text-5xl">
              Objectives
            </h2>
            <div className="mb-14 h-1 w-20 rounded-full bg-[#234767]" />
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {objectives.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 0.08}>
                <article className="group flex items-start gap-6 rounded-2xl border border-white/70 bg-white p-7 shadow-[0_8px_40px_-20px_rgba(15,41,66,0.25)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-20px_rgba(15,41,66,0.35)]">
                  {/* Number badge */}
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#234767] to-[#0b1f33] font-mono text-sm font-bold tracking-wide text-amber-200 shadow-lg">
                    {item.num}
                  </span>

                  <div>
                    <h3 className="mb-2 font-display text-xl font-bold text-[#142d44] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-base leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
