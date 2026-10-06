// components/hero/HeroActions.jsx

export const HeroActions = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-3xl mx-auto px-4 mt-6">
      {/* Single Centered CTA Button with Transparent Background & Golden Border/Text */}
      <a
        href="/admissions"
        className="flex items-center justify-center gap-3 bg-transparent hover:bg-[#ffddb6]/10 text-white border-2 border-[#ffddb6] font-semibold text-xs sm:text-sm tracking-wide uppercase py-3.5 px-8 rounded-md shadow-lg transition-all duration-200"
      >
        <span>Explore Admissions</span>
      </a>
    </div>
  );
};