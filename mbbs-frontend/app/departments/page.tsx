// app/departments/page.tsx

import Link from "next/link";
import {
  DEPARTMENTS,
  type DepartmentCategory,
} from "@/lib/departments";

const CATEGORY_STYLES: Record<
  DepartmentCategory,
  { accent: string; dot: string }
> = {
  "Pre-Clinical": { accent: "bg-[#234767]", dot: "bg-[#234767]" },
  "Para-Clinical": { accent: "bg-[#b98b52]", dot: "bg-[#b98b52]" },
  Clinical: { accent: "bg-[#a7773f]", dot: "bg-[#a7773f]" },
};

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[#b98b52] font-bold tracking-[0.25em] text-xs uppercase block mb-3">
            Academics
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#142d44] tracking-tight">
            Departments
          </h1>
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#b98b52] to-transparent mt-5" />
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-[17px]">
            Twenty departments across pre-clinical, para-clinical and clinical
            disciplines shape the academic and clinical training at AIMSARC.
          </p>
        </div>

        {/* Category legend */}
        <div className="mb-10 flex flex-wrap items-center gap-3">
          {(Object.keys(CATEGORY_STYLES) as DepartmentCategory[]).map(
            (category) => (
              <span
                key={category}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${CATEGORY_STYLES[category].dot}`}
                />
                {category}
              </span>
            ),
          )}
        </div>

        {/* Department cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DEPARTMENTS.map((department, index) => {
            const styles = CATEGORY_STYLES[department.category];

            return (
              <Link
                key={department.slug}
                href={`/departments/${department.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b98b52]/30 hover:shadow-[0_22px_50px_-30px_rgba(15,41,66,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/40 focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`block h-1.5 w-9 rounded-full ${styles.accent}`}
                  />
                  <span className="text-[11px] font-semibold tabular-nums tracking-[0.12em] text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mt-5 font-serif text-lg leading-snug text-[#142d44] xl:text-xl">
                  {department.name}
                </h2>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {department.category}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 transition-colors duration-300 group-hover:border-[#b98b52]/40">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors duration-300 group-hover:text-[#a7773f]">
                    View Department
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-sm text-[#b98b52] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
