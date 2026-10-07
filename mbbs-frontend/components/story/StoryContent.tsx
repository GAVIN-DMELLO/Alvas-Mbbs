// components/story/StoryContent.jsx
import { Text } from '@/components/ui/Text';

export const StoryContent = () => {
  return (
    <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-6 ">
      {/* Eyebrow Tag with Golden Glow Accent */}
      <div>
        <span className="inline-block font-mono font-bold text-xs sm:text-sm tracking-widest text-amber-300 uppercase bg-[#ffddb6]/20 px-3 py-1 rounded-full border border-[#ffddb6] shadow-[0_0_10px_rgba(255,221,182,0.5)]">
          Our Story
        </span>
      </div>

      {/* Main Heading: Changed to pure white */}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
        A Legacy of Care. <br />
        A Future of Excellence.
      </h2>

      {/* Body Paragraph 1: Changed to bright off-white slate-100 and mapped to font-lora */}
      <p className="font-mono text-slate-100 text-base sm:text-lg leading-relaxed">
        Alva&apos;s Institute of Medical Sciences and Research Centre (AIMSRC) was established in 2026 as a proud unit of Alva&apos;s Education Foundation, carrying forward a rich legacy of service, compassion, and academic excellence.
      </p>

      {/* Body Paragraph 2: Changed to bright off-white slate-100 and mapped to font-lora */}
      <p className="font-lora text-slate-100 text-base sm:text-lg leading-relaxed">
        Our journey is deeply rooted in the remarkable 40-year history of Alva&apos;s Health Centre, a trusted name in healthcare that has served generations with dedication and integrity.
      </p>

      {/* Action CTA Button */}
      <div className="pt-2">
        <a 
          href="/about-us" 
          className="inline-flex items-center gap-2 bg-[#234767] border-2 border-[#ffddb6] text-white hover:bg-[#1a3753] hover:text-[#ffddb6] font-semibold text-xs sm:text-sm tracking-wider uppercase py-3 px-6 rounded transition-all duration-300 shadow-[0_0_15px_rgba(255,221,182,0.3)] hover:shadow-[0_0_20px_rgba(255,221,182,0.6)] group font-mono"
        >
          Read More 
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </div>
    </div>
  );
};