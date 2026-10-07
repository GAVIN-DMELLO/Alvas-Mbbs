// components/hero/HeroBadge.jsx

export const HeroBadge = () => {
  return (
    <div className="flex flex-col items-start justify-start py-6 mr-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 pt-12">
      {/* Institution Logo/Crest (Left-aligned) */}
      

      {/* Left-Aligned Tagline and Clean Editorial Divider */}
      <div className="flex items-center gap-3 text-[#ffddb6] font-medium text-xs sm:text-sm tracking-wider uppercase w-full">
        <span className="whitespace-nowrap font-mono">AFFILIATED TO RGUHS</span>
        <span className="text-[#ffddb6]/60">|</span>
        <span className="whitespace-nowrap font-mono">RECOGNIZED BY NMC NEW DELHI</span>
        <div className="flex-1 h-px bg-[#ffddb6]/40 ml-4"></div>
      </div>
    </div>
  );
};