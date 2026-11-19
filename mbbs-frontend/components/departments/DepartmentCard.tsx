// components/departments/DepartmentCard.tsx
import Link from "next/link";
import Image from "next/image";

type DepartmentCardProps = {
  index: number;
  name: string;
  slug: string;
  image: string;
};

export const DepartmentCard = ({ index, name, slug, image }: DepartmentCardProps) => {
  return (
    <Link
      href={`/departments/${slug}`}
      className="group relative mr-5 flex h-52 w-80 shrink-0 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-[#142d44] shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300/60 hover:shadow-[0_22px_45px_-22px_rgba(245,180,80,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60 sm:h-56 sm:w-[22rem]"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 640px) 20rem, 22rem"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081827] via-[#081827]/70 to-transparent" />

      {/* Department number */}
      <span className="absolute left-6 top-6 font-mono text-xs font-semibold tracking-[0.25em] text-amber-200">
        {String(index).padStart(2, "0")}
      </span>

      <div className="relative z-10 p-6">
        <h3 className="font-display text-lg font-semibold leading-snug text-white">
          {name}
        </h3>
        <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/65 transition-colors duration-300 group-hover:text-amber-200">
          Explore Department
          <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
};
