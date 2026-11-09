"use client";

// app/about/superintendent-message/page.tsx
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Content (from aimsarc.org/about/superintendent-message)               */
/* ------------------------------------------------------------------ */

const quote =
  "Every patient deserves state-of-the-art care delivered with a patient-first approach.";

const paragraphs = [
  "I am privileged to welcome you to the clinical wing of Alva's Institute of Medical Sciences. Our medical centre is committed to providing state-of-the-art healthcare services with a patient-first approach.",
  "Our mission is to provide high-quality clinical care that is affordable and accessible to all members of our community, especially those in rural and underserved areas.",
  "With a dedicated team of specialists and nursing staff, we ensure that every patient receives personalized care and the best possible clinical outcomes.",
];

const contacts = [
  {
    label: "Mobile",
    value: "9845283484",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M6.5 4h2l1.5 4-2 1.5a11 11 0 005 5L15 12l4 1.5v2a2 2 0 01-2 2A12 12 0 014.5 6a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "ms@aimsarc.org",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M3 7l9 6 9-6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Office Location",
    value: "Iruvail Road, Moodabidri - 574227",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function SuperintendentMessagePage() {
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
            src="/banner-7.jpg"
            alt="Medical Leadership"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f33]/55 via-[#0b1f33]/45 to-[#0b1f33]/80" />
        </motion.div>

        <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Superintendent&apos;s Message
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
                <div className="flex h-80 items-center justify-center overflow-hidden rounded-t-3xl border-4 border-white/10 bg-[#0b1f33]/60 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.6)]">
                  <div className="flex flex-col items-center gap-3 text-amber-200/70">
                    <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12" aria-hidden>
                      <path
                        d="M12 2a5 5 0 015 5v1a4 4 0 01-4 4H11a4 4 0 01-4-4V7a5 5 0 015-5z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 21a7 7 0 0114 0"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                      Medical Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Name & role */}
            <div className="px-6 pt-8 text-center sm:px-10">
              <ScrollReveal>
                <h2 className="font-display text-3xl font-bold text-[#142d44] sm:text-4xl">
                  Dr. Pangal Harish Nayak
                </h2>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-[#a7773f]">
                  Medical Superintendent
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Alva&apos;s Institute of Medical Sciences and Research Centre
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
                      Dr. Pangal Harish Nayak
                    </p>
                    <p className="text-sm text-slate-500">
                      Medical Superintendent, AIMSARC &bull; MBBS, MS (General
                      Surgery)
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Superintendent direct contact */}
              <ScrollReveal delay={0.15}>
                <div className="mt-10 rounded-2xl border border-slate-100 bg-[#f8fafc] p-6 sm:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#b98b52]" />
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#234767]">
                      Superintendent Direct Contact
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {contacts.map((c) => (
                      <div
                        key={c.label}
                        className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
                      >
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#0b1f33]/5 text-[#a7773f]">
                          {c.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-wide text-slate-400">
                            {c.label}
                          </p>
                          <p className="mt-0.5 break-words font-medium text-[#142d44]">
                            {c.value}
                          </p>
                        </div>
                      </div>
                    ))}
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
