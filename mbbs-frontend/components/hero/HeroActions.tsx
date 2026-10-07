// components/hero/HeroActions.jsx

export const HeroActions = () => {
  return (
    <div className="flex items-center justify-start w-full max-w-4xl mr-auto px-4 sm:px-6 lg:px-8 mt-6">
      {/* Single Left-Aligned CTA Button with Transparent Background & Golden Border/Text */}
      <a
        href="/admissions"
        className="flex items-center justify-center gap-3 bg-transparent hover:bg-[#ffddb6]/10 text-white border-2 border-[#ffddb6] font-semibold text-xs sm:text-sm tracking-wide uppercase py-3.5 px-8 rounded-md shadow-lg transition-all duration-200 font-mono"
      >
        <span>Explore Admissions</span>
      </a>
    </div>
  );
};