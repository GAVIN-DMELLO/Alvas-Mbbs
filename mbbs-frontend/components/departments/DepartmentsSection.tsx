// components/departments/DepartmentsSection.tsx
import { DepartmentMarquee } from "./DepartmentMarquee";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const departments = [
  "Anaesthesiology",
  "Anatomy",
  "Biochemistry",
  "Community Medicine",
  "Dentistry",
  "Dermatology",
  "ENT",
  "Forensic Medicine",
  "General Medicine",
  "General Surgery",
  "Microbiology",
  "Obstetrics & Gynaecology",
  "Ophthalmology",
  "Orthopaedics",
  "Paediatrics",
  "Pathology",
  "Pharmacology",
  "Physiology",
  "Psychiatry",
  "Radiology",
];

const half = Math.ceil(departments.length / 2);
const rowOne = departments.slice(0, half);
const rowTwo = departments.slice(half);

export const DepartmentsSection = () => {
  return (
    <section
      aria-labelledby="departments-heading"
      className="relative isolate w-full overflow-hidden bg-[#0b1f33] py-20 sm:py-24 lg:py-28"
    >
      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#234767]/40 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#b98b52]/15 blur-[130px]" />
      </div>

      {/* Section heading */}
      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-4 sm:mb-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            id="departments-heading"
            className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            Explore Our Departments
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Twenty specialised departments working together to deliver
            world-class medical education, research, and patient care.
          </p>
        </ScrollReveal>
      </div>

      {/* Auto-scrolling department rows */}
      <div className="relative z-10 flex flex-col gap-6">
        <DepartmentMarquee departments={rowOne} startIndex={1} direction="left" />
        <DepartmentMarquee
          departments={rowTwo}
          startIndex={half + 1}
          direction="right"
        />
      </div>
    </section>
  );
};
