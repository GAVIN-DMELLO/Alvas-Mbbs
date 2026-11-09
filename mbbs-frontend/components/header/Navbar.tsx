// components/header/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

export const Navbar = ({ isReady = false }: { isReady?: boolean }) => {
  const [animateReady, setAnimateReady] = useState(isReady);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string>("Admissions");

  useEffect(() => {
    if (isReady) {
      setAnimateReady(true);
    }
  }, [isReady]);

  useEffect(() => {
    const handlePreloaderComplete = () => {
      setAnimateReady(true);
    };

    window.addEventListener("preloaderComplete", handlePreloaderComplete);
    return () => {
      window.removeEventListener("preloaderComplete", handlePreloaderComplete);
    };
  }, []);

  const navLinks: NavLink[] = [
    {
      label: "About",
      href: "#About",
      hasDropdown: true,
      dropdownItems: [
        { label: "About college", href: "/about" },
        { label: "About Alva's", href: "/about/about-alvas" },
        { label: "Chairman Message", href: "/about/chairman-message" },
        { label: "Dean's Message", href: "/about/dean-message" },
        { label: "Superintendent's Message", href: "/about/superintendent-message" },
        { label: "Vision & Mission", href: "/about/vision-mission" },
        { label: "Code of Conduct", href: "/about/code-of-conduct" },
        { label: "Objectives", href: "/about/objectives" },
      ],
    },
    {
      label: "Admissions",
      href: "#admissions",
      hasDropdown: true,
      dropdownItems: [
        { label: "MBBS Program", href: "#mbbs-program" },
        { label: "MD / MS Admissions", href: "#md-ms-admissions" },
        { label: "MD-PhD Program", href: "#md-phd-program" },
        { label: "Master's Degree Programs", href: "#masters-programs" },
        { label: "PhD Degree Programs", href: "#phd-programs" },
        {
          label: "Professional, Corporate, and Continuing Education",
          href: "#continuing-education",
        },
        { label: "Fee Structure & Scholarships", href: "#scholarships" },
        { label: "Registrar", href: "#registrar" },
        { label: "Graduation", href: "#graduation" },
        { label: "Health Info", href: "#health-info" },
      ],
    },
    {
      label: "Student Portal",
      href: "#student-portal",
      hasDropdown: true,
      dropdownItems: [
        { label: "Student LMS Login", href: "#lms-login" },
        { label: "Academic Calendar", href: "#academic-calendar" },
        { label: "Examination & Results", href: "#exam-results" },
        { label: "Digital Library & Journals", href: "#digital-library" },
        { label: "Hostel & Campus Life", href: "#hostel-life" },
        { label: "Student Council & Clubs", href: "#student-council" },
        { label: "Anti-Ragging Cell", href: "#anti-ragging" },
        { label: "Alumni Network", href: "#alumni" },
      ],
    },
    {
      label: "Departments",
      href: "#departments",
      hasDropdown: true,
      dropdownItems: [
        { label: "Pre-Clinical Departments", href: "#pre-clinical" },
        { label: "Para-Clinical Departments", href: "#para-clinical" },
        { label: "General Medicine & Allied", href: "#general-medicine" },
        { label: "General Surgery & Allied", href: "#general-surgery" },
        { label: "Obstetrics & Gynaecology", href: "#obg" },
        { label: "Paediatrics & Neonatology", href: "#paediatrics" },
        { label: "Central Research Lab", href: "#research-lab" },
        { label: "Medical Education Unit", href: "#meu" },
      ],
    },
    {
      label: "Hospital",
      href: "#hospital",
      hasDropdown: true,
      dropdownItems: [
        { label: "Outpatient (OPD) Services", href: "#opd" },
        { label: "Inpatient (IPD) & Wards", href: "#ipd" },
        { label: "24/7 Emergency & Trauma", href: "#emergency" },
        { label: "ICU & Critical Care Units", href: "#critical-care" },
        { label: "Diagnostics & Radiology", href: "#diagnostics" },
        { label: "Blood Bank & Pathology", href: "#blood-bank" },
        { label: "Community Health Outreach", href: "#community-health" },
        { label: "Health Insurance & Schemes", href: "#insurance" },
      ],
    },
    {
      label: "Happenings@AIMSARC",
      href: "#happenings",
      hasDropdown: true,
      dropdownItems: [
        { label: "Latest News & Notices", href: "#news" },
        { label: "CME & Medical Conferences", href: "#conferences" },
        { label: "Workshops & Seminars", href: "#workshops" },
        { label: "Research Publications", href: "#publications" },
        { label: "Annual Cultural & Sports Meet", href: "#cultural-events" },
        { label: "Photo & Video Gallery", href: "#gallery" },
        { label: "Press Releases", href: "#press" },
      ],
    },
    {
      label: "Contact Us",
      href: "#Contact-Us",
      hasDropdown: true,
      dropdownItems: [
        { label: "General Enquiry", href: "#enquiry" },
        { label: "Admissions Office", href: "#admissions-office" },
        { label: "Hospital Helpline", href: "#helpline" },
        { label: "Department Directory", href: "#directory" },
        { label: "Location & Campus Map", href: "#campus-map" },
        { label: "Careers & Faculty Openings", href: "#careers" },
        { label: "Feedback & Grievances", href: "#feedback" },
      ],
    },
  ];

  return (
    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={animateReady ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => {
        setIsNavHovered(false);
        setHoveredLink(null);
      }}
      style={{
        // Seamless sheer white frost on hover vs dark cinematic gradient by default
        background: isNavHovered
          ? "linear-gradient(180deg, rgba(255, 255, 255, 0.68) 0%, rgba(255, 255, 255, 0.38) 68%, rgba(255, 255, 255, 0.0) 100%)"
          : "linear-gradient(180deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.45) 65%, rgba(0, 0, 0, 0.0) 100%)",
        backdropFilter: isNavHovered ? "blur(10px)" : "blur(4px)",
        WebkitBackdropFilter: isNavHovered ? "blur(10px)" : "blur(4px)",
      }}
      className="w-full px-6 py-3 sm:py-3.5 absolute top-0 left-0 z-50 transition-all duration-500 ease-out"
    >
      <div className="max-w-[95rem] mx-auto flex justify-between items-center gap-6 lg:gap-8 w-full">
        {/* Brand Logo & Title */}
        <motion.a
          href="#"
          className="flex items-center gap-3.5 group shrink-0 outline-none focus:outline-none focus:ring-0 select-none"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div
            className="relative flex items-center justify-center p-1 rounded-full shrink-0 transition-all duration-300"
            style={{
              background: isNavHovered
                ? "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)"
                : "radial-gradient(circle, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 70%)",
            }}
          >
            <img
              src="/logo_home.png"
              alt="Institution Logo"
              className="h-[84px] sm:h-[90px] w-auto object-contain transition-all duration-300"
              style={{
                filter: isNavHovered
                  ? "drop-shadow(0px 2px 6px rgba(16, 46, 76, 0.22))"
                  : "drop-shadow(0px 0px 1.5px rgba(255, 255, 255, 0.95)) drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.55))",
              }}
            />
          </div>

          <div className="flex flex-col">
            <span
              className={`font-extrabold text-base sm:text-xl leading-tight uppercase font-display tracking-[-0.01em] transition-all duration-300 ${
                isNavHovered
                ? "text-[#142d44] drop-shadow-[0_1px_8px_rgba(255,255,255,0.95)]"
                : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              }`}
            >
              Alva&apos;s Institute of Medical Sciences
            </span>
            <span
              className={`text-[12px] sm:text-[13px] font-bold uppercase font-display tracking-[0.06em] transition-all duration-300 ${
                isNavHovered
                  ? "text-[#b98b52] drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)]"
                  : "text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
              }`}
            >
              and Research Centre
            </span>
          </div>
        </motion.a>

        {/* Harvard-Style Navigation Links + Dropdowns */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 justify-end w-full">
          {navLinks.map((link, index) => {
            const isHovered = hoveredLink === link.label;
            const isActive = activeLink === link.label;
            const showIndicator = isHovered || isActive;
            // Align last 2 dropdowns to the right edge so they don't overflow off the screen
            const alignRight = index >= navLinks.length - 2;

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className="relative flex items-center gap-2 py-3.5 group cursor-pointer select-none"
                >
                  {/* Link Label */}
                  <span
                    className={`text-[12px] xl:text-[13px] font-bold uppercase font-display tracking-[0.05em] whitespace-nowrap transition-all duration-200 ${
                      isNavHovered
                        ? isHovered
                          ? "text-[#a7773f] drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)]"
                          : "text-[#142d44] drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)]"
                        : "text-white/95 group-hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Harvard-style Circular Chevron Icon */}
                  {link.hasDropdown && (
                    <span
                      className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "border-[#b98b52] text-white bg-[#b98b52] shadow-[0_2px_10px_rgba(185,139,82,0.5)] scale-105"
                          : isNavHovered
                          ? "border-[#142d44]/45 text-[#142d44] bg-white/60"
                          : "border-white/50 text-white/90 bg-black/20"
                      }`}
                    >
                      <svg
                        className={`w-2.5 h-2.5 transition-transform duration-300 ${
                          isHovered ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  )}

                  {/* Snug Harvard-style Bottom Bar Indicator */}
                  <AnimatePresence>
                    {showIndicator && (
                      <motion.span
                        layoutId="harvardNavUnderline"
                        initial={{ opacity: 0, scaleX: 0.7 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0.7 }}
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 32,
                        }}
                        className="absolute bottom-0 left-0 right-0 h-[3.5px] z-20"
                        style={{
                          background: isHovered ? "#b98b52" : "#a7773f",
                        }}
                      />
                    )}
                  </AnimatePresence>
                </a>

                {/* Harvard-Style White Dropdown Menu */}
                <AnimatePresence>
                  {link.hasDropdown &&
                    link.dropdownItems &&
                    isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className={`absolute top-full ${
                          alignRight ? "right-0" : "left-0"
                        } w-[265px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] border border-gray-100 py-5 px-6 z-50`}
                      >
                        <ul className="flex flex-col space-y-3.5">
                          {link.dropdownItems.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                onClick={() => {
                                  setActiveLink(link.label);
                                  setHoveredLink(null);
                                }}
                                className="block text-[15px] font-normal text-[#1e1e1e] hover:text-[#a7773f] hover:underline leading-[1.35] tracking-normal transition-colors duration-150"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};