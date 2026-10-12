// components/hero/HeroBadge.jsx

export const HeroBadge = ({ logoSrc = "/logo_home.png" }) => {
  return (
    <div className="w-full max-w-5xl px-0 pt-6 pb-4">
      {/* inline-flex so the logo can be centered over the row width,
          while the whole block still sits left-aligned */}
      <div className="inline-flex flex-col items-center gap-2">
        {/* Logo ABOVE the line */}
        {/* <img
          src={logoSrc}
          alt="College Logo"
          className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/80x80?text=Logo";
          }}
        /> */}

        {/* Gold affiliation line */}
        <div className="flex items-center gap-3 text-[#ffddb6] font-medium text-xs sm:text-sm tracking-wider uppercase">
          

        
        </div>
      </div>
    </div>
  );
};