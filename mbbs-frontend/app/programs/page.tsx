"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const TABS = [
  { id: "academic", label: "Academic" },
  { id: "rules-and-regulations", label: "Rules & Regulations" },
  { id: "facilities", label: "Campus Facilities" },
  { id: "committees", label: "Committees" },
];

const RULES_CARDS = [
  {
    title: "Anti-Ragging Policy",
    body: "We enforce a strict zero-tolerance policy towards ragging in any form. Offenders will face immediate suspension and legal action as per UGC/NMC guidelines.",
  },
  {
    title: "Attendance Mandatory",
    body: "A minimum of 75% attendance in theory classes and 80% in clinical/practical sessions is strictly required to be eligible for university examinations.",
  },
  {
    title: "Dress Code & ID Cards",
    body: "Students must adhere to the formal dress code. Clean white aprons and valid college ID cards must be worn at all times within the college and hospital premises.",
  },
  {
    title: "Campus Discipline",
    body: "Use of mobile phones is restricted during teaching hours. Smoking, consumption of alcohol, or any illicit substances is strictly prohibited on campus.",
  },
];

const FACILITIES_CARDS = [
  {
    title: "Central Library",
    body: "A fully air-conditioned, 24/7 central library with a vast collection of national and international medical books, journals, and e-resources.",
    accent: "bg-[#234767]",
  },
  {
    title: "Skill Labs & Museums",
    body: "State-of-the-art simulation centers and clinical skill labs equipped with advanced mannequins and departmental museum specimens.",
    accent: "bg-[#b98b52]",
  },
  {
    title: "Hostel & Mess",
    body: "Separate, secure, and well-furnished hostels for boys and girls within the campus with hygienic, nutritious meals.",
    accent: "bg-[#a7773f]",
  },
  {
    title: "Teaching Hospital",
    body: "An attached multi-specialty hospital with high patient footfall, modern OTs, and ICUs, ensuring excellent clinical exposure.",
    accent: "bg-[#234767]",
  },
  {
    title: "Sports & Recreation",
    body: "Expansive playgrounds for outdoor sports, indoor game facilities, and a fully equipped gymnasium to promote physical fitness.",
    accent: "bg-[#b98b52]",
  },
  {
    title: "Student Support",
    body: "Dedicated student counseling center, round-the-clock campus security, ATM facilities, cafeteria, and a student healthcare clinic.",
    accent: "bg-[#a7773f]",
  },
];

interface CommitteeMember {
  name: string;
  designation: string;
  position: string;
}

interface Committee {
  slug: string;
  title: string;
  designationHeading?: string;
  members: CommitteeMember[];
}

const COMMITTEES: Committee[] = [
  {
    slug: "medical-education-unit",
    title: "Medical Education Unit Committee",
    members: [
      { name: "Dr. Mahabalesh Shetty", designation: "Dean", position: "Head" },
      {
        name: "Dr. Chethana K",
        designation: "MEU Coordinator (Community Medicine)",
        position: "Member",
      },
      {
        name: "Dr. Ashrani N",
        designation: "Professor & HOD – Biochemistry",
        position: "Member",
      },
      {
        name: "Dr. Jayaprakash B.R",
        designation: "Professor & HOD – Anatomy",
        position: "Member",
      },
      {
        name: "Dr. Meena Kiran",
        designation: "Associate Professor – Forensic Medicine",
        position: "Member",
      },
      {
        name: "Dr. Ravindra S Beedimani",
        designation: "Professor & HOD – Pharmacology",
        position: "Member",
      },
      {
        name: "Dr. Anirudh Shetty",
        designation: "Assistant Professor – Psychiatry",
        position: "Member",
      },
      {
        name: "Dr. Dhanya Hegde",
        designation: "Assistant Professor – General Medicine",
        position: "Member",
      },
      {
        name: "Dr. Hana Shetty",
        designation: "Assistant Professor – OBG",
        position: "Member",
      },
      {
        name: "Dr. Aishwarya Ramakrishna",
        designation: "Assistant Professor – ENT",
        position: "Member",
      },
    ],
  },
  {
    slug: "curriculum",
    title: "Curriculum Committee",
    members: [
      { name: "Dr. Mahabalesh Shetty", designation: "Dean", position: "Head" },
      {
        name: "Dr. Janeshwar P Shenoy",
        designation: "Professor & HOD – Physiology",
        position: "Member",
      },
      {
        name: "Dr. Yashwanth Kumar Rai K",
        designation: "Professor & HOD – Microbiology",
        position: "Member",
      },
      {
        name: "Dr. Vasanth T",
        designation: "Professor – Paediatrics",
        position: "Member",
      },
      {
        name: "Dr. Roshan R Jalisatgi",
        designation: "Professor & HOD – ENT",
        position: "Member",
      },
      {
        name: "Dr. Sadananda Naik",
        designation: "Professor – General Medicine",
        position: "Member",
      },
      {
        name: "Dr. Swarna Rekha",
        designation: "Associate Professor – Anaesthesia",
        position: "Member",
      },
      {
        name: "Dr. Chethana K",
        designation: "MEU Coordinator – Community Medicine",
        position: "Member",
      },
    ],
  },
  {
    slug: "anti-ragging",
    title: "Anti Ragging Committee",
    members: [
      { name: "Dr. Mahabalesh Shetty", designation: "Dean", position: "Head" },
      { name: "Dr. Mamatha", designation: "Advocate", position: "Member" },
      {
        name: "Mr. Deviprasad Shetty",
        designation: "NGO Representative",
        position: "Member",
      },
      {
        name: "Mrs. Mookambika",
        designation: "MSW Department",
        position: "Member",
      },
      {
        name: "Police Inspector, Moodubidire",
        designation: "–",
        position: "Member",
      },
      { name: "Mr. Dhananjay", designation: "Press", position: "Member" },
      {
        name: "Mrs. Prarthana / Mr. Santhosh",
        designation: "Resident Warden (F/M)",
        position: "Member",
      },
      {
        name: "Dr. Cynthia",
        designation: "Professor & HOD – Biochemistry",
        position: "Member",
      },
      {
        name: "Dr. Janeshwar Shenoy",
        designation: "Professor & HOD – Physiology",
        position: "Member",
      },
      {
        name: "Dr. Hana Shetty",
        designation: "Assistant Professor – OBG",
        position: "Member",
      },
      {
        name: "Dr. Shamanth Shetty",
        designation: "Deputy Medical Superintendent",
        position: "Member",
      },
    ],
  },
  {
    slug: "gender-harassment",
    title: "Gender Harassment Committee",
    members: [
      {
        name: "Dr. Swarnarekha",
        designation: "Associate Professor – Anaesthesiology",
        position: "Head",
      },
      {
        name: "Dr. Madhumala",
        designation: "NGO Representative",
        position: "Member",
      },
      {
        name: "Dr. Prajakta V Rao",
        designation: "Senior Resident – Psychiatry",
        position: "Member",
      },
      {
        name: "Dr. Aishwarya Ramakrishnan",
        designation: "Assistant Professor – ENT",
        position: "Member",
      },
      {
        name: "Mrs. Chandrika",
        designation: "HR Department",
        position: "Member",
      },
      {
        name: "Ms. Deepika",
        designation: "External Member",
        position: "Member",
      },
    ],
  },
  {
    slug: "scientific",
    title: "Scientific Committee",
    members: [
      { name: "Dr. Mahabalesh Shetty", designation: "Dean", position: "Head" },
      {
        name: "Dr. Ravindra S Beedimani",
        designation: "Secretary – Pharmacology",
        position: "Member",
      },
      {
        name: "Dr. Jebitha",
        designation: "Biostatistician",
        position: "Member",
      },
      {
        name: "Dr. Roshan Jalisatgi",
        designation: "Professor & HOD – ENT",
        position: "Member",
      },
      {
        name: "Dr. Yashwanth Rai",
        designation: "Professor & HOD – Microbiology",
        position: "Member",
      },
      {
        name: "Dr. Shabina Inayath",
        designation: "Associate Professor – OBG",
        position: "Member",
      },
    ],
  },
  {
    slug: "ethical",
    title: "Ethical Committee",
    members: [
      {
        name: "Dr. Padmaja Uday Kumar",
        designation:
          "Father Muller Medical College, Professor – Pharmacology",
        position: "Head",
      },
      {
        name: "Dr. Ravindra S Beedimani",
        designation: "Professor & HOD – Pharmacology",
        position: "Secretary",
      },
      { name: "Dr. Mamatha", designation: "Advocate", position: "Member" },
      { name: "Dr. Sachin Shetty", designation: "Professor", position: "Member" },
      {
        name: "Dr. Sai K",
        designation: "Assistant Professor – Pathology",
        position: "Member",
      },
      {
        name: "Dr. Jayaprakash B R",
        designation: "Professor & HOD – Anatomy",
        position: "Member",
      },
      {
        name: "Dr. Chethan",
        designation: "Professor – Physiology",
        position: "Member",
      },
      { name: "Mr. Devi Prasad Shetty", designation: "NGO", position: "Member" },
      {
        name: "Dr. Aishwarya Ramakrishna",
        designation: "Assistant Professor – ENT",
        position: "Member",
      },
      {
        name: "Mr. Venugopal Shetty",
        designation: "External Member",
        position: "Member",
      },
    ],
  },
  {
    slug: "antimicrobial-stewardship",
    title: "Antimicrobial Stewardship Committee",
    designationHeading: "Department",
    members: [
      {
        name: "Dr. Sadananda Naik",
        designation: "General Medicine",
        position: "Chairperson",
      },
      {
        name: "Dr. Rekha Rai",
        designation: "Microbiology",
        position: "Coordinator",
      },
      {
        name: "Dr. Sattar Khan",
        designation: "General Surgery",
        position: "Secretary",
      },
      {
        name: "Dr. Vasantha Venkappa Belchada",
        designation: "Paediatrics",
        position: "Member",
      },
      {
        name: "Dr. Arun Kumar Shetty",
        designation: "Orthopaedics",
        position: "Member",
      },
      { name: "Dr. Hana Shetty", designation: "OBG", position: "Member" },
      {
        name: "Ms. Thabasam Fathima",
        designation: "Clinical Pharmacist",
        position: "Member",
      },
      {
        name: "Mrs. Julekhabi F. Sab",
        designation: "Nursing Superintendent",
        position: "Member",
      },
      {
        name: "Mr. Naveen Kumar R",
        designation: "IT Incharge",
        position: "Member",
      },
    ],
  },
  {
    slug: "hospital-infection-control",
    title: "Hospital Infection Control Committee",
    designationHeading: "Department",
    members: [
      {
        name: "Dr. Harish Nayak",
        designation: "General Surgery",
        position: "Chairperson",
      },
      {
        name: "Dr. Rekha Rai",
        designation: "Microbiology",
        position: "Coordinator",
      },
      {
        name: "Dr. Dhanya Alva K",
        designation: "General Medicine",
        position: "Secretary",
      },
      {
        name: "Dr. Rakesh Shetty",
        designation: "General Surgery",
        position: "Member",
      },
      {
        name: "Dr. Harshith G C",
        designation: "Community Medicine",
        position: "Member",
      },
      {
        name: "Dr. Arun Kumar Shetty",
        designation: "Orthopaedics",
        position: "Member",
      },
      { name: "Dr. Hana Shetty", designation: "OBG", position: "Member" },
      {
        name: "Dr. Abhijith Y V",
        designation: "Paediatrics",
        position: "Member",
      },
      {
        name: "Dr. Swarna Rekha",
        designation: "Anaesthesiology",
        position: "Member",
      },
      {
        name: "Mrs. Anet Desouza",
        designation: "Emergency Medicine",
        position: "Member",
      },
      {
        name: "Mrs. Julekhabi F Sab",
        designation: "Nursing Superintendent",
        position: "Member",
      },
      {
        name: "Ms. Neeshma",
        designation: "Quality Coordinator",
        position: "Member",
      },
      {
        name: "Mrs. Kalavathi",
        designation: "OT Incharge",
        position: "Member",
      },
      {
        name: "Mrs. Yamuna G M",
        designation: "Emergency Incharge",
        position: "Member",
      },
      {
        name: "Mrs. Mangala N H",
        designation: "ICU Incharge",
        position: "Member",
      },
    ],
  },
  {
    slug: "pharmacovigilance",
    title: "Pharmacovigilance Committee",
    members: [
      {
        name: "Dr. Harish Nayak",
        designation: "Medical Superintendent – General Surgery",
        position: "Chairperson",
      },
      {
        name: "Dr. Ravindra S Beedimani",
        designation: "Professor & HOD – Pharmacology",
        position: "Coordinator",
      },
      {
        name: "Dr. Sangeethanath",
        designation: "Assistant Professor – Pharmacology",
        position: "Secretary",
      },
      {
        name: "Dr. Sadanand Naik",
        designation: "Associate Professor – General Medicine",
        position: "Member",
      },
      {
        name: "Dr. Abhijith Y V",
        designation: "Assistant Professor – Paediatrics",
        position: "Member",
      },
      {
        name: "Dr. Jiby V Benny",
        designation: "Senior Resident – Dermatology",
        position: "Member",
      },
      {
        name: "Dr. Prajaktha",
        designation: "Senior Resident – Psychiatry",
        position: "Member",
      },
      {
        name: "Dr. Sattar Khan",
        designation: "Assistant Professor – General Surgery",
        position: "Member",
      },
      {
        name: "Dr. Hana Shetty",
        designation: "Assistant Professor – OBG",
        position: "Member",
      },
      {
        name: "Ms. Preethi",
        designation: "Clinical Pharmacist",
        position: "Member",
      },
      {
        name: "Mrs. Julekhabi F Sab",
        designation: "Nursing Superintendent",
        position: "Member",
      },
    ],
  },
];

function CommitteeTable({ committee }: { committee: Committee }) {
  const designationHeading = committee.designationHeading ?? "Designation";

  if (committee.members.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
        <p className="text-sm text-slate-500">
          Member details for this committee will be published here shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_50px_-35px_rgba(15,41,66,0.35)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="bg-[#0b1e36]">
              <th className="w-28 whitespace-nowrap px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b98b52]">
                Sl. No
              </th>
              <th className="w-[30%] whitespace-nowrap px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b98b52]">
                Name
              </th>
              <th className="whitespace-nowrap px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b98b52]">
                {designationHeading}
              </th>
              <th className="w-[16%] whitespace-nowrap px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b98b52]">
                Position
              </th>
            </tr>
          </thead>
          <tbody>
            {committee.members.map((member, index) => (
              <tr
                key={`${member.name}-${index}`}
                className={`border-t border-slate-100 transition-colors duration-150 hover:bg-[#fbf7f1] ${
                  index % 2 === 1 ? "bg-[#f7f9fb]" : "bg-white"
                }`}
              >
                <td className="px-6 py-4 text-sm tabular-nums text-slate-400">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-[#142d44]">
                  {member.name}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {member.designation}
                </td>
                <td
                  className={`px-6 py-4 text-sm ${
                    member.position === "Member"
                      ? "text-slate-600"
                      : "font-semibold text-[#a7773f]"
                  }`}
                >
                  {member.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StudentResourcesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeTab = searchParams.get("tab") || "academic";
  const [activeCommittee, setActiveCommittee] = useState<string | null>(null);

  const selectedCommittee =
    COMMITTEES.find((committee) => committee.slug === activeCommittee) ?? null;

  const handleTabChange = (tabId: string) => {
    setActiveCommittee(null);
    router.push(`/programs?tab=${tabId}`, { scroll: false });
  };

  const openCommittee = (slug: string) => {
    setActiveCommittee(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeCommittee = () => {
    setActiveCommittee(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[#b98b52] font-bold tracking-[0.25em] text-xs uppercase block mb-3">
            Portal
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#142d44] tracking-tight">
            Student Resources
          </h1>
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#b98b52] to-transparent mt-5" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#0b1e36] text-white shadow-[0_10px_30px_-12px_rgba(11,31,51,0.6)]"
                    : "bg-white text-slate-700 border border-slate-200/80 hover:border-[#b98b52]/50 hover:text-[#a7773f]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ---- ACADEMIC ---- */}
        {activeTab === "academic" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-serif text-[#142d44] flex items-center gap-3">
                <span className="w-1.5 h-7 bg-[#b98b52] rounded-full inline-block" />
                Academics
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-[17px]">
                Welcome to the Academic portal of our Medical College. We offer a
                comprehensive and rigorous medical curriculum designed by expert
                academicians and clinicians to prepare the next generation of healthcare
                professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <div className="w-10 h-1 bg-[#b98b52] rounded-full mb-5" />
                <h3 className="text-lg font-bold text-[#142d44] mb-2">
                  Undergraduate (MBBS)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  A comprehensive 5.5-year program including a 1-year mandatory rotating
                  internship.
                </p>
                <span className="inline-block bg-[#0b1e36] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Active Program
                </span>
              </div>

              <div className="rounded-2xl border-l-4 border-[#b98b52] bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#142d44] mb-2">
                  Learning Pedagogy
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Our teaching methodology emphasizes early clinical exposure, integrated
                  learning, and competency-based medical education. Students benefit from
                  interactive lectures, small group discussions, problem-based learning,
                  and extensive hands-on clinical training.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ---- RULES & REGULATIONS ---- */}
        {activeTab === "rules-and-regulations" && (
          <div className="space-y-8">
            {/* Intro */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 md:p-10 shadow-sm">
              <p className="text-base leading-8 text-slate-600 md:text-[17px]">
                Our institution maintains strict standards of discipline and professional
                conduct to ensure a safe and conducive learning environment for all
                students.
              </p>
            </div>

            {/* Rules grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {RULES_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-30px_rgba(15,41,66,0.35)]"
                >
                  <span className="absolute left-0 top-8 h-12 w-1.5 rounded-r-full bg-gradient-to-b from-[#234767] to-[#b98b52]" />
                  <h3 className="pl-5 font-display text-lg font-bold text-[#142d44] sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 pl-5 text-[15px] leading-8 text-slate-600">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ---- CAMPUS FACILITIES ---- */}
        {activeTab === "facilities" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FACILITIES_CARDS.map((card) => (
              <article
                key={card.title}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b98b52]/30 hover:shadow-[0_22px_50px_-30px_rgba(15,41,66,0.35)]"
              >
                <span className={`mb-6 block h-1.5 w-9 rounded-full ${card.accent}`} />
                <h3 className="font-serif text-xl text-[#142d44] sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-[15px] leading-8 text-slate-500">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        )}

        {/* ---- COMMITTEES ---- */}
        {activeTab === "committees" &&
          (selectedCommittee ? (
            <div className="space-y-8">
              <button
                type="button"
                onClick={closeCommittee}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#142d44] shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:border-[#b98b52]/50 hover:text-[#a7773f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/40 focus-visible:ring-offset-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    d="M19 12H5M11 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to Committees
              </button>

              <div>
                <h2 className="font-serif text-3xl leading-tight text-[#142d44] tracking-tight md:text-5xl">
                  {selectedCommittee.title}
                </h2>
                <div className="mt-4 h-[3px] w-14 bg-[#b98b52]" />
              </div>

              <CommitteeTable committee={selectedCommittee} />
            </div>
          ) : (
            <div className="space-y-8">
              <p className="text-base text-slate-500 md:text-[17px]">
                Click on a committee to view its members and roles.
              </p>

              <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                {COMMITTEES.map((committee) => (
                  <button
                    key={committee.slug}
                    type="button"
                    onClick={() => openCommittee(committee.slug)}
                    className="group flex w-full items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b98b52]/30 hover:shadow-[0_22px_50px_-30px_rgba(15,41,66,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/40 focus-visible:ring-offset-2"
                  >
                    <span className="h-10 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-b from-[#234767] to-[#b98b52]" />
                    <span className="flex-1 font-display text-[15px] font-bold leading-snug text-[#142d44] sm:text-base">
                      {committee.title}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 flex-shrink-0 text-[#b98b52] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f2f5f7] pt-32 pb-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <span className="text-[#b98b52] font-bold tracking-[0.25em] text-xs uppercase block mb-3">
              Portal
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-[#142d44] tracking-tight">
              Student Resources
            </h1>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#b98b52] to-transparent mt-5" />
          </div>
        </div>
      }
    >
      <StudentResourcesContent />
    </Suspense>
  );
}
