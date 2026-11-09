// components/departments/DepartmentCard.tsx
type DepartmentCardProps = {
  index: number;
  name: string;
};

export const DepartmentCard = ({ index, name }: DepartmentCardProps) => {
  return (
    <div className="group relative mr-5 flex h-44 w-64 shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300/60 hover:bg-white/[0.07] hover:shadow-[0_22px_45px_-22px_rgba(245,180,80,0.55)]">
      {/* Soft gold glow accent */}
      <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-300/10 blur-2xl transition-colors duration-300 group-hover:bg-amber-300/25" />

      {/* Department number */}
      <span className="relative font-mono text-xs font-semibold tracking-[0.25em] text-amber-300/80">
        {String(index).padStart(2, "0")}
      </span>

      <div className="relative">
        <h3 className="font-display text-lg font-semibold leading-snug text-white">
          {name}
        </h3>
        <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 transition-colors duration-300 group-hover:text-amber-200">
          Explore Department
          <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </div>
  );
};
