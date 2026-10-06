// components/hero/HeroBadge.jsx

export const HeroBadge = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-6 mx-auto w-full">
      {/* Institution Logo/Crest (Centered) */}
      <div className="mb-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
        <img 
          src="/logo_home.png" 
          alt="Alva's Institute Logo" 
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Tagline with the '|' locked directly under the center of the logo */}
      <div className="flex items-center justify-center text-[#ffddb6] font-medium text-xs sm:text-sm tracking-wider uppercase w-full max-w-4xl px-4">
        
        {/* Left Side: Line + Left Text */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
          <div className="w-full h-px bg-[#ffddb6]/60"></div>
          <span className="whitespace-nowrap">AFFILIATED TO RGUHS</span>
        </div>

        {/* Center Separator (|) - Perfectly centered under the logo */}
        <span className="px-3 text-[#ffddb6]">|</span>

        {/* Right Side: Right Text + Line */}
        <div className="flex-1 flex items-center justify-start gap-3 sm:gap-4">
          <span className="whitespace-nowrap">RECOGNIZED BY NMC NEW DELHI</span>
          <div className="w-full h-px bg-[#ffddb6]/60"></div>
        </div>

      </div>
    </div>
  );
};