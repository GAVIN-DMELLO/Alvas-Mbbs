// components/hero/HeroSection.jsx
import { HeroBadge } from './HeroBadge';
import { HeroContent } from './HeroContent';
import { HeroActions } from './HeroActions';

export const HeroSection = () => {
  return (
    <section 
      className="relative w-full min-h-[750px] lg:min-h-screen bg-slate-900 text-white overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col justify-center pt-10 pb-16 pr-15"
      style={{ backgroundImage: "url('/banner66.jpeg')" }}
    >
      <div className="absolute inset-0 bg-[#234767]/80 pointer-events-none"></div>

      {/* Uses standard site container with full left alignment */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start w-full">
        <HeroBadge />
        <HeroContent />
        <HeroActions />
      </div>
    </section>
  );
};