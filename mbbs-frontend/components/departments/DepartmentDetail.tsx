// components/departments/DepartmentDetail.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FacultyAvatar } from "@/components/departments/FacultyAvatar";
import {
  getDepartment,
  type DepartmentCategory,
  type FacultyMember,
} from "@/lib/departments";

const CATEGORY_ACCENT: Record<DepartmentCategory, string> = {
  "Pre-Clinical": "bg-[#234767]",
  "Para-Clinical": "bg-[#b98b52]",
  Clinical: "bg-[#a7773f]",
};

const PROFILE_FIELDS: { key: keyof FacultyMember; label: string }[] = [
  { key: "designation", label: "Designation" },
  { key: "qualifications", label: "Qualifications" },
  { key: "joiningDate", label: "Joining Date" },
  { key: "experience", label: "Experience" },
  { key: "interests", label: "Areas of Interest" },
  { key: "responsibilities", label: "Responsibilities" },
  { key: "achievements", label: "Achievements" },
  { key: "memberships", label: "Memberships" },
  { key: "email", label: "Email" },
];

export function DepartmentDetail({ slug }: { slug: string }) {
  const department = getDepartment(slug);
  const [profile, setProfile] = useState<FacultyMember | null>(null);

  useEffect(() => {
    if (!profile) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProfile(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [profile]);

  if (!department) {
    return (
      <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#142d44] shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:border-[#b98b52]/50 hover:text-[#a7773f]"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Departments
          </Link>

          <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm">
            <h1 className="font-serif text-3xl text-[#142d44]">
              Department not found
            </h1>
            <p className="mt-3 text-slate-500">
              The department you are looking for does not exist or has moved.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const faculties = department.faculties ?? [];
  const hod = department.hod;
  const hasProfile = Boolean(hod) || faculties.length > 0;

  // The HOD message sometimes repeats the hero description verbatim (as in
  // Community Medicine); keep the opening line, drop the paragraphs already
  // shown above so the page does not repeat itself.
  const descriptionParagraphs = new Set(
    (department.description ?? []).map((paragraph) => paragraph.trim()),
  );
  const messageParagraphs = (hod?.message ?? "")
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const hodMessageParagraphs =
    messageParagraphs.length > 0
      ? [
          messageParagraphs[0],
          ...messageParagraphs
            .slice(1)
            .filter((paragraph) => !descriptionParagraphs.has(paragraph)),
        ]
      : [];

  const hasProfileDetails = (member: FacultyMember) =>
    PROFILE_FIELDS.some(({ key }) => {
      if (key === "designation") return false;
      const value = member[key];
      return typeof value === "string" && value.trim().length > 0;
    });

  return (
    <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/departments"
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#142d44] shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:border-[#b98b52]/50 hover:text-[#a7773f]"
        >
          <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">
            &larr;
          </span>
          Back to Departments
        </Link>

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#142d44] via-[#10263c] to-[#0b1e36] px-8 py-10 shadow-[0_30px_80px_-42px_rgba(11,30,54,0.75)] md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#b98b52]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#234767]/40 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b98b52]/40 bg-[#b98b52]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d3ae74]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b98b52]" />
              {department.category} · {department.name}
            </span>

            <h1 className="mt-6 font-serif text-3xl leading-tight text-white md:text-5xl lg:text-[3.4rem]">
              Department of {department.name}
            </h1>
            <div className="mt-5 h-[3px] w-16 bg-[#b98b52]" />

            {department.description && department.description.length > 0 ? (
              <div className="mt-7 max-w-3xl space-y-4 text-[15px] leading-8 text-slate-300 md:text-base">
                {department.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : hasProfile ? null : (
              <p className="mt-7 max-w-3xl text-[15px] leading-8 text-slate-300 md:text-base">
                Detailed information about this department, its faculty and academic
                activities will be published here shortly.
              </p>
            )}
          </div>
        </section>

        {/* Head of Department */}
        {hod && (
          <section className="mt-10 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="mx-auto w-40 shrink-0 md:mx-0 md:w-48">
                <div className="aspect-square overflow-hidden rounded-2xl ring-1 ring-slate-200/70">
                  <FacultyAvatar name={hod.name} image={hod.image} />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#b98b52]">
                  <span className="h-px w-6 bg-[#b98b52]" />
                  Head of Department
                </span>

                {hod.name && (
                  <h2 className="mt-3 font-serif text-2xl text-[#142d44] md:text-3xl">
                    {hod.name}
                  </h2>
                )}

                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {hod.designation}
                </p>

                {hodMessageParagraphs.length > 0 && (
                  <div className="mt-6 border-[#b98b52]/40 md:border-l-2 md:pl-5">
                    <p className="font-serif text-lg italic leading-8 text-[#142d44]/85">
                      {hodMessageParagraphs[0]}
                    </p>

                    {hodMessageParagraphs.length > 1 && (
                      <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                        {hodMessageParagraphs.slice(1).map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {hasProfileDetails(hod) && (
                  <button
                    type="button"
                    onClick={() => setProfile(hod)}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0b1e36] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_30px_-18px_rgba(11,30,54,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#142d44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/50 focus-visible:ring-offset-2"
                  >
                    View Full Profile
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Faculty */}
        {faculties.length > 0 && (
          <section className="mt-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b98b52]/30 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a7773f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b98b52]" />
              Our Faculty
            </span>

            <h2 className="mt-4 font-serif text-3xl text-[#142d44] md:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-2 text-sm text-slate-500 md:text-base">
              {faculties.length} dedicated faculty members shaping the future of medical
              education
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {faculties.map((faculty) => (
                <article
                  key={`${faculty.name}-${faculty.joiningDate}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b98b52]/30 hover:shadow-[0_24px_55px_-32px_rgba(15,41,66,0.4)]"
                >
                  <div className="relative h-24 bg-gradient-to-r from-[#142d44] to-[#0b1e36]">
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,139,82,0.18),transparent_60%)]" />
                    <div className="absolute left-1/2 top-full h-24 w-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-[#e9eef4] ring-4 ring-white">
                      <FacultyAvatar name={faculty.name} image={faculty.image} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-6 pb-6 pt-14 text-center">
                    <h3 className="font-serif text-lg leading-snug text-[#142d44]">
                      {faculty.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {faculty.designation}
                    </p>

                    {faculty.qualifications && (
                      <span className="mx-auto mt-4 inline-block rounded-full border border-[#b98b52]/25 bg-[#faf6ef] px-3 py-1 text-[11px] font-semibold text-[#a7773f]">
                        {faculty.qualifications}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setProfile(faculty)}
                    className="mt-auto flex w-full items-center justify-center gap-2 border-t border-slate-100 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#142d44] transition-colors duration-200 hover:bg-[#f7f4ee] hover:text-[#a7773f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b98b52]/40"
                  >
                    View Profile
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      &rarr;
                    </span>
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Not-yet-published departments */}
        {!hod && faculties.length === 0 && (
          <section className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
            <p className="text-sm text-slate-500">
              Department details, head of department and faculty profiles will be
              published here shortly.
            </p>
          </section>
        )}
      </div>

      {/* Faculty profile dialog */}
      {profile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close profile"
            onClick={() => setProfile(null)}
            className="absolute inset-0 h-full w-full cursor-default bg-[#0b1e36]/70 backdrop-blur-sm"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${profile.name || "Head of Department"} profile`}
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-7 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setProfile(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-[#142d44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/50"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="flex items-center gap-4 pr-10">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200">
                <FacultyAvatar name={profile.name} image={profile.image} />
              </div>
              <div>
                <h2 className="font-serif text-xl leading-snug text-[#142d44]">
                  {profile.name || "Head of Department"}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {profile.designation}
                </p>
              </div>
            </div>

            <dl className="mt-6 space-y-4">
              {PROFILE_FIELDS.filter(
                ({ key }) =>
                  key !== "designation" &&
                  typeof profile[key] === "string" &&
                  (profile[key] as string).trim().length > 0,
              ).map(({ key, label }) => (
                <div
                  key={key}
                  className="border-t border-slate-100 pt-4 first:border-t-0 first:pt-0"
                >
                  <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b98b52]">
                    {label}
                  </dt>
                  <dd className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-slate-600">
                    {profile[key] as string}
                  </dd>
                </div>
              ))}
            </dl>

            {!profile.qualifications &&
              !profile.joiningDate &&
              !profile.experience &&
              !profile.interests &&
              !profile.responsibilities &&
              !profile.achievements &&
              !profile.memberships &&
              !profile.email && (
                <p className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-500">
                  Further profile details for this faculty member will be updated
                  soon.
                </p>
              )}
          </div>
        </div>
      )}
    </div>
  );
}
