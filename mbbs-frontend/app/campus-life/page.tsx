// app/campus-life/page.tsx
"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CAMPUS_LIFE_TABS,
  CAMPUS_NEWSLETTERS,
  CAMPUS_PHOTOS,
  CAMPUS_VIDEOS,
  SECTION_INTROS,
  type CampusLifeTab,
} from "@/lib/campusLife";
import { GalleryImage } from "@/components/campus-life/GalleryImage";

function PlayBadge() {
  return (
    <span
      aria-hidden="true"
      className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-110"
    >
      <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 text-[#b98b52]">
        <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
      </svg>
    </span>
  );
}

function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {CAMPUS_PHOTOS.map((photo) => (
        <article
          key={photo.id}
          className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b98b52]/30 hover:shadow-[0_24px_55px_-32px_rgba(15,41,66,0.4)]"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <GalleryImage src={photo.image} alt={photo.title} />
          </div>
          <div className="px-6 py-5">
            <h3 className="font-serif text-lg leading-snug text-[#142d44]">
              {photo.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {photo.caption}
            </p>
          </div>
        </article>
      ))}

      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 px-8 py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eef3f8] text-[#234767]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <rect
              x="3"
              y="6"
              width="18"
              height="13"
              rx="2.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="9" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M4 17l4.5-4.5a2 2 0 012.8 0L16 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <p className="mt-4 font-semibold text-[#142d44]">More Photos Coming Soon</p>
        <p className="mt-1 text-sm text-slate-500">
          Cultural fests, academic events &amp; campus life
        </p>
      </div>
    </div>
  );
}

function VideoGallery() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {CAMPUS_VIDEOS.map((video) => {
        const body = (
          <>
            <div className="relative aspect-video overflow-hidden bg-[#0b1e36]">
              <GalleryImage src={video.thumbnail} alt={video.title} />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayBadge />
              </div>
            </div>
            <div className="px-7 pb-7 pt-6">
              <h3 className="font-serif text-xl leading-snug text-[#142d44] md:text-[22px]">
                {video.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-[15px]">
                {video.description}
              </p>
            </div>
          </>
        );

        const cardClasses =
          "group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b98b52]/30 hover:shadow-[0_24px_55px_-32px_rgba(15,41,66,0.4)]";

        if (video.href) {
          return (
            <a
              key={video.id}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClasses}
            >
              {body}
            </a>
          );
        }

        return (
          <article key={video.id} className={cardClasses}>
            {body}
          </article>
        );
      })}
    </div>
  );
}

function Newsletter() {
  if (CAMPUS_NEWSLETTERS.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 px-8 py-14 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef3f8] text-[#234767]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              d="M4 6h16v12H4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M4 7l8 6 8-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <p className="mt-4 font-semibold text-[#142d44]">
          Newsletters Coming Soon
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Institutional newsletters will be published here shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {CAMPUS_NEWSLETTERS.map((newsletter) => (
        <article
          key={newsletter.id}
          className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b98b52]">
            {newsletter.issue}
          </span>
          <h3 className="mt-3 font-serif text-lg text-[#142d44]">
            {newsletter.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {newsletter.description}
          </p>
        </article>
      ))}
    </div>
  );
}

function CampusLifeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeTab = (searchParams.get("tab") as CampusLifeTab) || "photoGallery";
  const intro = SECTION_INTROS[activeTab] ?? SECTION_INTROS.photoGallery;

  const handleTabChange = (tabId: string) => {
    router.push(`/campus-life?tab=${tabId}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#142d44] via-[#10263c] to-[#0b1e36] px-8 py-16 text-center shadow-[0_30px_80px_-42px_rgba(11,30,54,0.75)] md:px-12 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#b98b52]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#234767]/40 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b98b52]/40 bg-[#b98b52]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d3ae74]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b98b52]" />
              Happenings@AIMSARC
            </span>

            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-6xl">
              Campus Life
            </h1>
            <div className="mx-auto mt-5 h-[3px] w-16 bg-[#b98b52]" />
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-300 md:text-base">
              Discover the vibrant culture, events, and community at AIMSARC.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <div className="relative z-10 -mt-8 flex justify-center px-2">
          <div className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_20px_45px_-28px_rgba(15,41,66,0.45)]">
            {CAMPUS_LIFE_TABS.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex-1 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/40 ${
                    isActive
                      ? "bg-[#0b1e36] text-white shadow-[0_10px_30px_-14px_rgba(11,31,51,0.75)]"
                      : "text-slate-600 hover:bg-[#f7f4ee] hover:text-[#a7773f]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section intro */}
        <div className="mt-14">
          <h2 className="font-serif text-3xl text-[#142d44] md:text-4xl">
            {intro.title}
          </h2>
          <div className="mt-4 h-[3px] w-14 bg-gradient-to-r from-[#b98b52] to-transparent" />
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-[17px]">
            {intro.description}
          </p>
        </div>

        {/* Tab content */}
        <div className="mt-10">
          {activeTab === "photoGallery" && <PhotoGallery />}
          {activeTab === "videoGallery" && <VideoGallery />}
          {activeTab === "newsletter" && <Newsletter />}
        </div>
      </div>
    </div>
  );
}

export default function CampusLifePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-[#b98b52] font-bold tracking-[0.25em] text-xs uppercase block mb-3">
              Happenings@AIMSARC
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-[#142d44] tracking-tight">
              Campus Life
            </h1>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#b98b52] to-transparent mt-5 mx-auto" />
          </div>
        </div>
      }
    >
      <CampusLifeContent />
    </Suspense>
  );
}
