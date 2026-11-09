// components/story/StoryContent.jsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const StoryContent = () => {
  return (
    <ScrollReveal className="w-full max-w-3xl rounded-[1.75rem] border border-white/70 bg-white/[0.97] px-6 py-8 shadow-[0_28px_80px_rgba(7,24,39,0.25)] backdrop-blur-md sm:px-10 sm:py-10 lg:px-14 lg:py-14">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#234767]/10 bg-[#234767]/5 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#234767] sm:text-xs">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#b98b52]" />
        Our Story
      </span>

      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#142d44] sm:text-4xl lg:text-5xl">
        A Legacy of Care. <br />
        A Future of Excellence.
      </h2>

      <p className="mt-6 font-sans text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
        Alva&apos;s Institute of Medical Sciences and Research Centre (AIMSRC) was established in 2026 as a proud unit of Alva&apos;s Education Foundation, carrying forward a rich legacy of service, compassion, and academic excellence.
      </p>

      <p className="mt-4 font-sans text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
        Our journey is deeply rooted in the remarkable 40-year history of Alva&apos;s Health Centre, a trusted name in healthcare that has served generations with dedication and integrity.
      </p>

      <div className="pt-7">
        <a 
          href="/about-us" 
          className="group inline-flex items-center gap-3 rounded-full bg-[#234767] px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(35,71,103,0.18)] transition-all duration-300 hover:bg-[#173a56] sm:px-7"
        >
          Read More 
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-[#ffddb6] transition-transform duration-200 group-hover:translate-x-1">
            <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </ScrollReveal>
  );
};
