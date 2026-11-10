"use client";

// app/admissions/page.tsx
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

const sections = [
  {
    id: "how-to-apply",
    title: "How to Apply",
    icon: "📋",
    color: "navy",
    type: "bullets",
    intro: null,
    items: [
      "Register through official counselling portals as per government notification.",
      <>Select <strong>Alva&apos;s Institute of Medical Sciences and Research Centre</strong> during counselling.</>,
      "Submit required documents for verification.",
      <>For queries: <br /><strong>Ph:</strong> 9379525826 / 6366428726<br /><strong>Email:</strong> <a href="mailto:admission@alvas.org" className="text-[#b98b52] underline underline-offset-2">admission@alvas.org</a></>,
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    icon: "✅",
    color: "gold",
    type: "paragraph",
    intro:
      "Candidates who have passed PUC (10+2) examination of Karnataka PU Board or an equivalent examination of any other approved Board or University with not less than 50% marks in aggregate of Physics, Chemistry & Biology & 50% English are eligible for admission provided the candidates have completed 17 years as on 31 December & should qualify UG NEET in the year of admission.",
    items: [],
  },
  {
    id: "documents",
    title: "Documents to be Produced at the Time of Admission",
    icon: "📄",
    color: "crimson",
    type: "numbered",
    intro: null,
    items: [
      "10th Std. pass certificate for proof of date of birth – Original + 3 attested copies",
      "12th Std. equivalent marks card/pass certificate – Original + 3 attested copies",
      "Transfer Certificate from the institution last attended – Original + 3 attested copies",
      "Conduct Certificate from the institution last attended – Original only",
      "Eligibility Certificate issued by the Registrar, Rajiv Gandhi University of Health Sciences.",
      "Migration Certificate from the Board of the institution last attended",
      "Physical fitness certificate from a registered medical practitioner",
      "Blood group certificate",
      "Photographs: Passport size 05, Stamp size 05",
      "Proof of employment of the parent – Original",
    ],
  },
  {
    id: "nri-quota",
    title: "Admission under NRI Quota (on the basis of NEET ranking)",
    icon: "🌐",
    color: "navy",
    type: "numbered",
    intro:
      "The admission under the NRI category is based on merit in the qualifying examination taking into consideration, marks secured in the core subjects of Physics, Chemistry and Biology. Foreign nationals are also considered for admission under this quota.",
    items: [
      "12th std. marks card / pass certificate.",
      "10th std. marks card / pass certificate for proof of date of birth.",
      "Proof of NRI status (Passport copy of parent, employment certificate, Sponsorship letter)",
      "Valid passport and student visa for the period of study (Original must be shown for verification).",
    ],
  },
  {
    id: "foreign-nationals",
    title: "Additional Documents to be Produced for Foreign Nationals Only",
    icon: "🛂",
    color: "gold",
    type: "numbered",
    intro: null,
    items: [
      "Valid passport and student visa for the period of study (Original must be shown for verification. 5 duly-attested photocopies must be produced).",
      "Letter of sponsorship if applicable – Original + 5 copies",
      "*Residential permit from the local SP and FRO",
      "*No objection certificate issued by the Ministry of Health and Family Welfare, Govt. of India",
    ],
  },
];

const accentMap = {
  navy: {
    badge: "bg-gradient-to-br from-[#234767] to-[#0b1f33] text-amber-200",
    heading: "text-[#234767]",
    divider: "border-[#234767]/20",
    dot: "bg-[#234767]",
  },
  gold: {
    badge: "bg-gradient-to-br from-[#b98b52] to-[#a7773f] text-[#0b1f33]",
    heading: "text-[#b98b52]",
    divider: "border-[#b98b52]/30",
    dot: "bg-[#b98b52]",
  },
  crimson: {
    badge: "bg-gradient-to-br from-[#a7773f] to-[#8a5a2b] text-white",
    heading: "text-[#8a5a2b]",
    divider: "border-[#8a5a2b]/25",
    dot: "bg-[#8a5a2b]",
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function AdmissionsPage() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  return (
    <div className="relative">
      {/* ── HERO ── */}
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
            alt="Admissions"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f33]/65 via-[#0b1f33]/55 to-[#0b1f33]/88" />
        </motion.div>

        <div className="mx-auto flex min-h-[64vh] w-full max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b98b52]">
              Join Us
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Admissions
            </h1>
            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#b98b52] to-transparent" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg">
              Admissions at <strong className="text-white">AIMSARC</strong> are
              conducted strictly based on{" "}
              <strong className="text-white">NEET-UG merit</strong> in line with
              NMC and Government of India guidelines.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONTENT SECTIONS ── */}
      <section className="relative w-full bg-[#f2f5f7] py-20 sm:py-24 lg:py-28">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[#b98b52]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#234767]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {sections.map((sec, i) => {
            const a = accentMap[sec.color as keyof typeof accentMap];
            return (
              <ScrollReveal key={sec.id} delay={i * 0.06}>
                <article
                  id={sec.id}
                  className="overflow-hidden rounded-3xl border border-white/70 bg-white p-8 shadow-[0_16px_60px_-30px_rgba(15,41,66,0.3)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_-28px_rgba(15,41,66,0.4)] sm:p-10"
                >
                  {/* Header row */}
                  <div className="flex items-start gap-5">
                    <span
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-xl shadow-lg ${a.badge}`}
                    >
                      {sec.icon}
                    </span>
                    <h2
                      className={`font-display text-2xl font-bold leading-snug sm:text-3xl ${a.heading}`}
                    >
                      {sec.title}
                    </h2>
                  </div>

                  {/* Divider */}
                  <div className={`my-6 border-t ${a.divider}`} />

                  {/* Body */}
                  {sec.intro && (
                    <p className="mb-5 text-[15px] leading-7 text-slate-600 sm:text-base">
                      {sec.intro}
                    </p>
                  )}

                  {sec.type === "bullets" && sec.items.length > 0 && (
                    <ul className="space-y-3.5">
                      {sec.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[15px] leading-7 text-slate-600 sm:text-base"
                        >
                          <span
                            className={`mt-2.5 h-2 w-2 flex-shrink-0 rounded-full ${a.dot}`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.type === "numbered" && sec.items.length > 0 && (
                    <ol className="space-y-3 list-none">
                      {sec.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[15px] leading-7 text-slate-600 sm:text-base"
                        >
                          <span
                            className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${a.dot}`}
                          >
                            {idx + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </article>
              </ScrollReveal>
            );
          })}

          {/* CTA Banner */}
          <ScrollReveal delay={sections.length * 0.06}>
            <div className="rounded-3xl bg-gradient-to-br from-[#0b1f33] to-[#234767] p-10 text-center shadow-[0_20px_60px_-20px_rgba(11,31,51,0.6)]">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#b98b52]">
                Need Help?
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold text-white sm:text-3xl">
                Contact the Admissions Office
              </h3>
              <p className="mb-7 text-slate-300">
                Our admissions team is happy to guide you through the process.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <a
                  href="tel:9379525826"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
                >
                  📞 9379525826 / 6366428726
                </a>
                <a
                  href="mailto:admission@alvas.org"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#b98b52] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#a7773f]"
                >
                  ✉️ admission@alvas.org
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
