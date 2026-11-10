// app/hospital/page.tsx

import Link from "next/link";
import { HOSPITAL_SERVICES } from "@/lib/hospital";

function CardBody({
  title,
  subtitle,
  external,
}: {
  title: string;
  subtitle: string;
  external?: boolean;
}) {
  return (
    <>
      <div className="px-7 pt-7 pb-6 text-center">
        <h2 className="font-serif text-2xl text-[#142d44] md:text-[28px]">
          {title}
        </h2>
        <p className="mt-3 text-sm tracking-[0.02em] text-slate-500 md:text-[15px]">
          {subtitle}
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 border-t border-slate-100 pt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a7773f] transition-colors duration-300 group-hover:text-[#142d44]">
          <span>{external ? "Opens in a new tab" : "View Statistics"}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </div>
      </div>
    </>
  );
}

function CardImage({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#142d44] via-[#10263c] to-[#0b1e36]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e36]/70 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-6 pb-5">
        <span className="h-1.5 w-9 rounded-full bg-[#b98b52]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function HospitalPage() {
  return (
    <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-[#b98b52] font-bold tracking-[0.25em] text-xs uppercase block mb-3">
            Alva&apos;s Health Centre
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#142d44] tracking-tight">
            Hospital Services
          </h1>
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#b98b52] to-transparent mt-5 mx-auto" />
          <p className="mt-6 mx-auto max-w-2xl text-base leading-8 text-slate-600 md:text-[17px]">
            Department-wise outpatient and in-patient statistics from the
            teaching hospital, alongside the official Alva&apos;s Health Centre
            website.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {HOSPITAL_SERVICES.map((service) => {
            const cardClasses =
              "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b98b52]/30 hover:shadow-[0_24px_55px_-32px_rgba(15,41,66,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/40 focus-visible:ring-offset-2";

            const image = (
              <CardImage src={service.image} label={service.title} />
            );

            if (service.external) {
              return (
                <a
                  key={service.slug}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                >
                  {image}
                  <CardBody
                    title={service.title}
                    subtitle={service.subtitle}
                    external
                  />
                </a>
              );
            }

            return (
              <Link key={service.slug} href={service.href} className={cardClasses}>
                {image}
                <CardBody title={service.title} subtitle={service.subtitle} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
