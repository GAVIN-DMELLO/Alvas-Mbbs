// components/hero/HeroSection.jsx
import { HeroBadge } from './HeroBadge';
import { HeroContent } from './HeroContent';
import { HeroActions } from './HeroActions';

export const HeroSection = () => {
  return (
    <section 
      className="relative w-full min-h-150 bg-slate-900 text-white overflow-hidden pb-5 bg-cover bg-center bg-no-repeat flex flex-col justify-center"
      style={{ backgroundImage: "url('/banner66.jpeg')",
        
       }}
    >
      {/* Optional dark overlay so white text stands out clearly over the background image */}
      <div className="absolute inset-0 bg-[#234767]/80 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center w-full">
        {/* Wrapping the HeroBadge */}
        <HeroBadge />

        {/* Wrapping the HeroContent */}
        <HeroContent />


        <HeroActions />
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-10" /> */}
      
    </section>
  );
};