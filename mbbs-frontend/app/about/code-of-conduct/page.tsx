"use client";

// app/about/code-of-conduct/page.tsx
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Content (from aimsarc.org/about/code-of-conduct)                      */
/* ------------------------------------------------------------------ */

const intro =
  "The institution expects all students, faculty, and staff to uphold the highest standards of professionalism, ethics, and discipline in accordance with the values of the medical profession.";

const conduct = [
  {
    num: "01",
    title: "Academic Discipline",
    color: "navy",
    points: [
      "Attend all lectures, practicals, clinical postings, and assessments regularly and punctually.",
      "Adhere strictly to academic schedules, examination rules, and institutional guidelines.",
      "Maintain honesty and integrity in all academic activities including examinations, assignments, and research work.",
      "Any form of malpractice, plagiarism, or falsification of records will invite disciplinary action.",
    ],
  },
  {
    num: "02",
    title: "Professional Behaviour",
    color: "gold",
    points: [
      "Demonstrate respect, courtesy, and empathy towards patients, faculty members, staff, and peers.",
      "Maintain appropriate conduct within classrooms, laboratories, hospitals, hostels, and campus premises.",
      "Follow the prescribed dress code and maintain personal hygiene befitting a medical professional.",
      "Use institutional facilities responsibly and avoid damage to property.",
    ],
  },
  {
    num: "03",
    title: "Clinical Ethics & Patient Care",
    color: "crimson",
    points: [
      "Treat all patients with dignity, compassion, and confidentiality.",
      "Follow ethical medical practices and hospital protocols during clinical training.",
      "Respect patient privacy and obtain proper consent wherever required.",
      "Refrain from any behaviour that may bring disrepute to the institution or the medical profession.",
    ],
  },
  {
    num: "04",
    title: "Discipline & Campus Conduct",
    color: "navy",
    points: [
      "Maintain peace, harmony, and discipline within the campus.",
      "Ragging in any form is strictly prohibited and punishable as per UGC and government regulations.",
      "Consumption of alcohol, tobacco, drugs, or any illegal substances within the campus is strictly forbidden.",
      "Acts of violence, harassment, or discrimination will not be tolerated.",
    ],
  },
  {
    num: "05",
    title: "Digital & Social Media Conduct",
    color: "gold",
    points: [
      "Use digital platforms and institutional systems responsibly.",
      "Avoid sharing confidential institutional or patient-related information on social media.",
      "Any online activity harming the reputation of the institution will attract disciplinary action.",
    ],
  },
  {
    num: "06",
    title: "Compliance & Responsibility",
    color: "crimson",
    points: [
      "Follow all rules, regulations, and circulars issued by the institution from time to time.",
      "Cooperate with faculty and administration in maintaining academic and administrative discipline.",
      "Accept responsibility for one's actions and be accountable for any misconduct.",
    ],
  },
];

/* Palette per accent colour (kept on-brand; crimson desaturated to a warm gold-rose) */
const accent = {
  navy: {
    bg: "bg-gradient-to-br from-[#234767] to-[#0b1f33]",
    text: "text-amber-200",
    dot: "bg-[#234767]",
    border: "border-[#234767]",
    line: "bg-[#234767]",
    divider: "border-[#234767]/30",
  },
  gold: {
    bg: "bg-gradient-to-br from-[#b98b52] to-[#a7773f]",
    text: "text-[#0b1f33]",
    dot: "bg-[#b98b52]",
    border: "border-[#b98b52]",
    line: "bg-[#b98b52]",
    divider: "border-[#b98b52]/40",
  },
  crimson: {
    bg: "bg-gradient-to-br from-[#a7773f] to-[#8a5a2b]",
    text: "text-white",
    dot: "bg-[#8a5a2b]",
    border: "border-[#8a5a2b]",
    line: "bg-[#8a5a2b]",
    divider: "border-[#8a5a2b]/40",
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function CodeOfConductPage() {
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
            alt="Standards & Conduct"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f33]/60 via-[#0b1f33]/50 to-[#0b1f33]/85" />
        </motion.div>

        <div className="mx-auto flex min-h-[64vh] w-full max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Code of Conduct
            </h1>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#b98b52] to-transparent" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg">
              {intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- TIMELINE ---------------- */}
      <section className="relative w-full bg-[#f2f5f7] py-20 sm:py-24 lg:py-28">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[#b98b52]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#234767]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Vertical spine (desktop only) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#234767]/20 via-[#b98b52]/30 to-[#234767]/20 lg:block" />

          <div className="space-y-12 sm:space-y-16">
            {conduct.map((item, i) => {
              const isLeft = i % 2 === 0;
              const a = accent[item.color as keyof typeof accent];
              return (
                <div key={item.num} className="relative">
                  {/* Mobile dot */}
                  <span
                    className={`absolute left-6 top-6 z-10 h-4 w-4 rounded-full border-2 border-white shadow-md ${a.dot} lg:hidden`}
                  />

                  {/* Desktop node */}
                  <span
                    className={`absolute left-1/2 top-10 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white shadow-lg ${a.dot} lg:block`}
                  />

                  <div
                    className={`flex flex-col ${
                      isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Card half */}
                    <div className="lg:w-1/2 lg:px-10">
                      <ScrollReveal>
                        <article className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white p-8 pl-14 shadow-[0_24px_70px_-40px_rgba(15,41,66,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(15,41,66,0.5)] lg:p-9 lg:pl-9">
                          {/* Number badge */}
                          <div className="flex items-center gap-4">
                            <span
                              className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl font-mono text-sm font-bold tracking-wide shadow-lg ${a.bg} ${a.text}`}
                            >
                              {item.num}
                            </span>
                            <h2 className="font-display text-2xl font-bold text-[#142d44] sm:text-3xl">
                              {item.title}
                            </h2>
                          </div>

                          {/* Divider */}
                          <div className={`mt-5 mb-6 h-px w-full ${a.divider} border-t`} />

                          {/* Points */}
                          <ul className="space-y-3.5">
                            {item.points.map((p, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-[15px] leading-7 text-slate-600 sm:text-base"
                              >
                                <span
                                  className={`mt-2.5 h-2 w-2 flex-shrink-0 rounded-full ${a.dot}`}
                                />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </article>
                      </ScrollReveal>
                    </div>

                    {/* Spacer half (desktop) */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
