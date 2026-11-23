// app/departments/page.tsx

import Link from "next/link";
import Image from "next/image";
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
            Academic 
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

        {/* Department cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DEPARTMENTS.map((department, index) => {
            const styles = CATEGORY_STYLES[department.category];

            return (
              <Link
                key={department.slug}
                href={`/departments/${department.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b98b52]/30 hover:shadow-[0_22px_50px_-30px_rgba(15,41,66,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/40 focus-visible:ring-offset-2"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={`/images/departments/${department.slug}.png`}
                    alt={`${department.name} department`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/75 via-[#0b1f33]/10 to-transparent" />
                </div>

                <div className="p-6">
                  <span
                    className={`mb-4 block h-1.5 w-9 rounded-full ${styles.accent}`}
                  />
                  <h2 className="font-serif text-lg leading-snug text-[#142d44] xl:text-xl">
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
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
