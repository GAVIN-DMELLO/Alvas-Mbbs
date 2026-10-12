// components/hero/HeroActions.jsx

export const HeroActions = () => {
  return (
    <div className="flex items-center justify-start w-full max-w-4xl px-0 mt-6">
      <button
        className="
          inline-flex items-center justify-center
          px-6 py-3 rounded-xl
          bg-[#ffddb6] text-[#0B1F3A]
          font-semibold tracking-wide
          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
          hover:brightness-110 hover:shadow-[0_14px_40px_rgba(0,0,0,0.30)]
          active:translate-y-[1px]
          transition
          focus:outline-none focus:ring-2 focus:ring-[#D9A441]/70 focus:ring-offset-2 focus:ring-offset-[#0B1F3A]
        "
      >
        EXPLORE ADMISSIONS
      </button>
    </div>
  );
};


// #ffddb6