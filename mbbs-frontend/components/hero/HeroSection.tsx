// components/hero/HeroSection.jsx
import { HeroBadge } from "./HeroBadge";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";

export const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[750px] lg:min-h-screen bg-slate-900 text-white overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col justify-center pt-16 pb-16"
      style={{ backgroundImage: "url('/banner66.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#234767]/50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start w-full">
        <HeroBadge />
        <HeroContent />
        <HeroActions />
      </div>
    </section>
  );
};