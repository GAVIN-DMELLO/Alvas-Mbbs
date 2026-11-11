// components/footer/FooterBrand.tsx
import Image from "next/image";

export const FooterBrand = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center gap-4">
        {/* Institution emblem with the same soft glow used in the navbar, so it
            lifts off the dark footer background */}
        <div
          className="relative flex shrink-0 items-center justify-center rounded-full p-1"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 70%)",
          }}
        >
          <Image
            src="/logo_home.png"
            alt="Alva's Institute of Medical Sciences and Research Centre emblem"
            width={420}
            height={594}
            className="h-20 w-auto object-contain"
            style={{
              filter:
                "drop-shadow(0 0 1.5px rgba(255,255,255,0.95)) drop-shadow(0 0 8px rgba(255,255,255,0.55))",
            }}
          />
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
