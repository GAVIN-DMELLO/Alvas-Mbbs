// app/contact/page.tsx

import { CONTACT } from "@/lib/contact";

const ICONS = {
  building: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <path
        d="M4 21V6.5A1.5 1.5 0 015.5 5H12v16M12 9h6.5A1.5 1.5 0 0120 10.5V21M2 21h20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9h1M7.5 12.5h1M7.5 16h1M15.5 13h1M15.5 16.5h1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M6.5 3h3l1.5 4-2 1.5a12 12 0 006.5 6.5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16.5 16.5 0 014.5 5.2 2 2 0 016.5 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  train: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <rect
        x="5"
        y="3"
        width="14"
        height="13"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 10h14M9 20l-1.5 2M15 20l1.5 2M9 16h.01M15 16h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  plane: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <path
        d="M10.5 20l1.5-6 6.5-2.5a2.5 2.5 0 001.5-3 2.5 2.5 0 00-3-1.4L11.5 9.6 7 7.5V5l-2 1-2-1v2l4 2.5-2.5 2L2 11v1.5l3.5-.5L8 14v3l2-1 1 4z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  route: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="6" cy="19" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 19h5a4 4 0 000-8H9a4 4 0 010-8h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M15.5 8.5l-2 5-5 2 2-5 5-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4 16v-3l2-5h12l2 5v3h-3a1.5 1.5 0 01-3 0h-4a1.5 1.5 0 01-3 0H4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 12h12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3C9.5 5.6 9.5 18.4 12 21"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.2 1.3-2.5 1.3-2.5s-2.5-1-2.5-3.6zM14.2 6.2c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2.1-.5 2.7-1.3z" />
    </svg>
  ),
};

function IconBubble({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
        tone === "dark"
          ? "bg-white/10 text-[#d3ae74]"
          : "bg-[#eef3f8] text-[#234767]"
      }`}
    >
      {children}
    </span>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Intro + Office */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <span className="text-[#b98b52] font-bold tracking-[0.25em] text-xs uppercase block mb-3">
              Reach Out
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-[#142d44] tracking-tight">
              Get in Touch
            </h1>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#b98b52] to-transparent mt-5" />

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-[17px]">
              {CONTACT.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={CONTACT.call.href}
                className="inline-flex items-center gap-2.5 rounded-full border border-[#142d44]/25 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#142d44] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b98b52]/60 hover:text-[#a7773f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/40"
              >
                <span className="text-[#b98b52]">{ICONS.phone}</span>
                {CONTACT.call.label}
              </a>
              <a
                href={CONTACT.email.href}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#0b1e36] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_16px_30px_-18px_rgba(11,30,54,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#142d44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/50 focus-visible:ring-offset-2"
              >
                <span className="text-[#d3ae74]">{ICONS.mail}</span>
                {CONTACT.email.label}
              </a>
            </div>
          </div>

          {/* Office card */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_24px_55px_-34px_rgba(15,41,66,0.45)]">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#142d44] via-[#10263c] to-[#0b1e36] px-8 py-8">
                <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#b98b52]/10 blur-3xl" />

                <div className="relative flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-serif text-2xl text-white md:text-[28px]">
                      {CONTACT.office.title}
                    </h2>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300 md:text-[15px]">
                      {CONTACT.office.subtitle}
                    </p>
                  </div>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#d3ae74]">
                    {ICONS.building}
                  </span>
                </div>
              </div>

              <div className="space-y-7 px-8 py-8">
                <div className="flex items-start gap-4">
                  <IconBubble>{ICONS.pin}</IconBubble>
                  <div>
                    <p className="font-semibold text-[#142d44]">
                      {CONTACT.office.subtitle}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 md:text-[15px]">
                      {CONTACT.office.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <IconBubble>{ICONS.phone}</IconBubble>
                  <div>
                    <span className="text-sm font-semibold text-[#142d44]">
                      {CONTACT.office.mobile.label}:{" "}
                    </span>
                    <a
                      href={CONTACT.office.mobile.href}
                      className="text-sm text-slate-500 transition-colors duration-200 hover:text-[#a7773f] md:text-[15px]"
                    >
                      {CONTACT.office.mobile.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <IconBubble>{ICONS.mail}</IconBubble>
                  <a
                    href={CONTACT.office.email.href}
                    className="text-sm text-slate-500 transition-colors duration-200 hover:text-[#a7773f] md:text-[15px]"
                  >
                    {CONTACT.office.email.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel cards */}
        <section className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {CONTACT.travel.map((card) => {
            const isRailway = card.id === "railway";

            return (
              <article
                key={card.id}
                className="flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_24px_55px_-34px_rgba(15,41,66,0.45)]"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-[#142d44] via-[#10263c] to-[#0b1e36] px-8 py-8">
                  <div className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full bg-[#234767]/40 blur-3xl" />

                  <div className="relative flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-2xl text-white md:text-[26px]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300 md:text-[15px]">
                        {card.subtitle}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b98b52]" />
                        {card.badge}
                      </span>
                    </div>

                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#d3ae74]">
                      {isRailway ? ICONS.train : ICONS.plane}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-8 py-8">
                  <div className="space-y-6">
                    {card.details.map((detail, index) => (
                      <div key={detail.label} className="flex items-start gap-4">
                        <IconBubble tone={index === 0 ? "light" : "light"}>
                          {index === 0
                            ? isRailway
                              ? ICONS.route
                              : ICONS.globe
                            : isRailway
                              ? ICONS.car
                              : ICONS.compass}
                        </IconBubble>
                        <div>
                          <p className="font-semibold text-[#142d44]">
                            {detail.label}:
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-500 md:text-[15px]">
                            {detail.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={card.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center justify-center gap-2.5 rounded-full bg-[#0b1e36] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_16px_30px_-20px_rgba(11,30,54,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#142d44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/50 focus-visible:ring-offset-2"
                  >
                    {card.cta.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </section>

        {/* Route map */}
        <section className="mt-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-[#142d44] md:text-4xl">
                Route Map
              </h2>
              <div className="mt-4 h-[3px] w-14 bg-gradient-to-r from-[#b98b52] to-transparent" />
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 md:text-[15px]">
                Mijar, Moodbidri, Dakshina Kannada – 574227, Karnataka, India.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT.map.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#142d44] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b98b52]/50 hover:text-[#a7773f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/40"
              >
                <span className="text-[#b98b52]">{ICONS.compass}</span>
                Open in Google Maps
              </a>
              <a
                href={CONTACT.map.appleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#142d44] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b98b52]/50 hover:text-[#a7773f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/40"
              >
                <span className="text-[#b98b52]">{ICONS.apple}</span>
                Open in Apple Maps
              </a>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100 bg-white p-3 shadow-[0_24px_55px_-34px_rgba(15,41,66,0.45)] md:p-4">
            <iframe
              title="Alva's Institute of Medical Sciences and Research Centre location map"
              src={CONTACT.map.embedUrl}
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
