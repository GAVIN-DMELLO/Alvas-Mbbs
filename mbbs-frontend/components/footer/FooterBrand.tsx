// components/footer/FooterBrand.tsx

export const FooterBrand = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 backdrop-blur">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b98b52"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
            <path d="M12 8v6M9 11h6" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-white">
            AIMSARC
          </h3>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-200/70">
            Est. 2026
          </p>
        </div>
      </div>

      <p className="max-w-xs text-sm leading-relaxed text-slate-300">
        Alva&apos;s Institute of Medical Sciences and Research Centre, dedicated
        to excellence in medical education, research, and compassionate
        healthcare for all.
      </p>

      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
          Dakshina Kannada, Karnataka
        </span>
      </div>
    </div>
  );
};
