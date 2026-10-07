// components/story/StorySection.jsx
import { StoryImage } from './StoryImage';
import { StoryContent } from './StoryContent';

export const StorySection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-slate-900 text-white">
      {/* Background Image with a Lighter, Balanced Institutional Blue Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner-4.jpg"
          alt="Alva's Institute Campus Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Soighter blue shade overlay so the campus photo remains visible and bright */}
        <div className="absolute inset-0 bg-[#0f2942]/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f33]/70 via-[#0f2942]/50 to-[#0b1f33]/70" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Floating Accent Card */}
        <StoryImage />

        {/* Right Column: Heading, Text & CTA */}
        <StoryContent />
      </div>
    </section>
  );
};