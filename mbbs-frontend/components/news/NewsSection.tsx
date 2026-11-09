"use client";

// components/news/NewsSection.tsx
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type NewsItem = {
  category: string;
  date: string;
  title: string;
  description: string;
};

type MediaItem = {
  title: string;
  description: string;
  imageSrc: string;
  duration: string;
};

const newsItems: NewsItem[] = [
  {
    category: "Admission",
    date: "August 20, 2026",
    title: "Admissions Open for AIMSARC",
    description:
      "Applications are now invited for the upcoming MBBS batch at Alva's Institute of Medical Science and Research Centre.",
  },
  {
    category: "Event",
    date: "August 15, 2026",
    title: "80th Independence Day Celebration",
    description:
      "Thousands of students gathered at the Vidyagiri campus to celebrate Independence Day, featuring a massive tricolour formation and patriotic fervor.",
  },
  {
    category: "Research",
    date: "August 10, 2026",
    title: "Breakthrough in Biomedical Research",
    description:
      "Our research team published a landmark study on affordable diagnostics in a top-tier international peer-reviewed journal.",
  },
];

const mediaItems: MediaItem[] = [
  {
    title: "Virtual Campus Tour",
    description:
      "Take a 360° walk through our sprawling campus, state-of-the-art labs, and advanced medical facilities.",
    imageSrc: "/banner-7.jpg",
    duration: "02:45",
  },
  {
    title: "A Day in the Life of a Med Student",
    description:
      "Follow our students through a typical day of lectures, clinical rotations, and campus life.",
    imageSrc: "/banner-4.jpg",
    duration: "04:12",
  },
  {
    title: "Inauguration Ceremony",
    description:
      "Highlights from the grand inauguration of the new research wing by dignitaries from the medical fraternity.",
    imageSrc: "/banner-5.jpg",
    duration: "06:30",
  },
];

const categoryStyles: Record<string, string> = {
  Admission:
    "bg-amber-50 text-amber-700 border-amber-200",
  Event: "bg-sky-50 text-sky-700 border-sky-200",
  Research: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export const NewsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeMedia, setActiveMedia] = useState(0);

  // Auto-advance the media carousel
  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => {
      setActiveMedia((prev) => (prev + 1) % mediaItems.length);
    }, 5000);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  const goToMedia = (index: number) => {
    setActiveMedia((index + mediaItems.length) % mediaItems.length);
  };

  return (
    <section
      aria-labelledby="news-heading"
      className="relative isolate w-full overflow-hidden bg-[#f2f5f7] py-20 sm:py-24 lg:py-28"
    >
      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#234767]/[0.06] blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#ffddb6]/25 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <ScrollReveal>
            <h2
              id="news-heading"
              className="font-display text-3xl font-bold tracking-tight text-[#142d44] sm:text-4xl lg:text-[2.75rem]"
            >
              News &amp; Media Spotlight
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#b98b52]" />
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Stay updated with the latest happenings, events, and campus life
              at our institute.
            </p>
          </ScrollReveal>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* LEFT: Latest Updates */}
          <ScrollReveal delay={0.05}>
            <div className="flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="flex items-center gap-3 font-display text-2xl font-bold text-[#142d44]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#234767]/10 text-[#234767]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </span>
                  Latest Updates
                </h3>
                <a
                  href="#view-all-news"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#234767] transition-colors hover:text-[#a7773f]"
                >
                  View All
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <div className="flex flex-col gap-5">
                {newsItems.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.5,
                      delay: shouldReduceMotion ? 0 : index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300/60 hover:shadow-[0_18px_45px_-22px_rgba(15,41,66,0.25)] sm:p-7"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-block rounded-md border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                          categoryStyles[item.category] ??
                          "bg-slate-50 text-slate-700 border-slate-200"
                        }`}
                      >
                        {item.category}
                      </span>
                      <time className="font-mono text-xs text-slate-500">
                        {item.date}
                      </time>
                    </div>
                    <h4 className="mt-4 font-display text-lg font-bold leading-snug text-[#142d44] transition-colors group-hover:text-[#a7773f] sm:text-xl">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Media Highlights */}
          <ScrollReveal delay={0.15}>
            <div className="flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="flex items-center gap-3 font-display text-2xl font-bold text-[#142d44]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#b98b52]/15 text-[#a7773f]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M10 8l6 4-6 4z" fill="currentColor" />
                    </svg>
                  </span>
                  Media Highlights
                </h3>
                <a
                  href="#view-all-media"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#234767] transition-colors hover:text-[#a7773f]"
                >
                  View All
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_45px_-22px_rgba(15,41,66,0.25)] sm:p-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMedia}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <img
                        src={mediaItems[activeMedia].imageSrc}
                        alt={mediaItems[activeMedia].title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/80 via-[#0b1f33]/10 to-transparent" />

                      {/* Play button */}
                      <button
                        type="button"
                        aria-label="Play video"
                        className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-white/90 text-[#a7773f] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20"
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>

                      {/* Duration badge */}
                      <span className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 font-mono text-[10px] font-semibold text-white backdrop-blur">
                        {mediaItems[activeMedia].duration}
                      </span>

                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <h4 className="font-display text-lg font-bold text-white sm:text-xl">
                          {mediaItems[activeMedia].title}
                        </h4>
                        <p className="mt-1 line-clamp-2 max-w-md text-sm text-slate-200">
                          {mediaItems[activeMedia].description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Prev / Next arrows */}
                  <button
                    type="button"
                    onClick={() => goToMedia(activeMedia - 1)}
                    aria-label="Previous media"
                    className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-[#142d44] shadow-lg backdrop-blur transition-colors hover:bg-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => goToMedia(activeMedia + 1)}
                    aria-label="Next media"
                    className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-[#142d44] shadow-lg backdrop-blur transition-colors hover:bg-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>

                {/* Dot indicators */}
                <div className="mt-4 flex justify-center gap-2">
                  {mediaItems.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goToMedia(i)}
                      aria-label={`Go to media ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeMedia
                          ? "w-7 bg-[#b98b52]"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
