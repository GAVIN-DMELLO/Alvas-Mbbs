// components/hospital/HospitalSectionHeader.tsx

import Link from "next/link";

export function HospitalSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <Link
        href="/hospital"
        className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#142d44] shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:border-[#b98b52]/50 hover:text-[#a7773f]"
      >
        <span
          aria-hidden="true"
          className="transition-transform group-hover:-translate-x-0.5"
        >
          &larr;
        </span>
        Back to Hospital Services
      </Link>

      <div className="mt-8 text-center">
        <span className="text-[#b98b52] font-bold tracking-[0.25em] text-xs uppercase block mb-3">
          {eyebrow}
        </span>
        <h1 className="text-3xl md:text-5xl font-serif text-[#142d44] tracking-tight">
          {title}
        </h1>
        <div className="w-16 h-[3px] bg-gradient-to-r from-[#b98b52] to-transparent mt-5 mx-auto" />
        <p className="mt-6 mx-auto max-w-2xl text-base leading-8 text-slate-600 md:text-[17px]">
          {description}
        </p>
      </div>
    </>
  );
}
