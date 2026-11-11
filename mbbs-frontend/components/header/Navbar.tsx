// components/header/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileLink, setExpandedMobileLink] = useState<string | null>(
    null,
  );
  const router = useRouter();

  // Lock scrolling and close the mobile menu on Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setExpandedMobileLink(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

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
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "About college",
          href: "/about",
        },
        {
          label: "About Alva's",
          href: "/about/about-alvas",
        },
        {
          label: "Chairman Message",
          href: "/about/chairman-message",
        },
        {
          label: "Dean's Message",
          href: "/about/dean-message",
        },
        {
          label: "Superintendent's Message",
          href: "/about/superintendent-message",
        },
        {
          label: "Vision & Mission",
          href: "/about/vision-mission",
        },
        {
          label: "Code of Conduct",
          href: "/about/code-of-conduct",
        },
        {
          label: "Objectives",
          href: "/about/objectives",
        },
      ],
    },
    {
      label: "Admissions",
      href: "/admissions",
      hasDropdown: false,
    },
    {
      label: "Student Portal",
      href: "/programs?tab=academic",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Academic",
          href: "/programs?tab=academic",
        },
        {
          label: "Rules & Regulations",
          href: "/programs?tab=rules-and-regulations",
        },
        {
          label: "Campus Facilities",
          href: "/programs?tab=facilities",
        },
        {
          label: "Committees",
          href: "/programs?tab=committees",
        },
      ],
    },
    {
      label: "Departments",
      href: "/departments",
      hasDropdown: false,
    },
    {
      label: "Hospital",
      href: "/hospital",
      hasDropdown: false,
    },
    {
      label: "Happenings@AIMSARC",
      href: "/campus-life",
      hasDropdown: false,
    },
    {
      label: "Contact Us",
      href: "/contact",
      hasDropdown: false,
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
          href="/"
          onClick={(event) => {
            event.preventDefault();
            router.push("/");
          }}
          aria-label="Alva's Institute of Medical Sciences and Research Centre — Home"
          className="flex min-w-0 items-center gap-3.5 group outline-none focus:outline-none focus:ring-0 select-none lg:shrink-0"
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
              className="h-[60px] sm:h-[84px] lg:h-[90px] w-auto object-contain transition-all duration-300"
              style={{
                filter: isNavHovered
                  ? "drop-shadow(0px 2px 6px rgba(16, 46, 76, 0.22))"
                  : "drop-shadow(0px 0px 1.5px rgba(255, 255, 255, 0.95)) drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.55))",
              }}
            />
          </div>

          <div className="flex min-w-0 flex-col">
            <span
              className={`font-extrabold text-[12px] sm:text-base lg:text-xl leading-tight uppercase font-display tracking-[-0.01em] transition-all duration-300 ${
                isNavHovered
                ? "text-[#142d44] drop-shadow-[0_1px_8px_rgba(255,255,255,0.95)]"
                : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              }`}
            >
              Alva&apos;s Institute of Medical Sciences
            </span>
            <span
              className={`text-[10px] sm:text-[12px] lg:text-[13px] font-bold uppercase font-display tracking-[0.06em] transition-all duration-300 ${
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
            // Only one item renders the indicator at a time, otherwise two
            // elements share the same layoutId and the underline gets stuck.
            const showIndicator = isActive;
            // Align last 2 dropdowns to the right edge so they don't overflow off the screen
            const alignRight = index >= navLinks.length - 2;

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  setHoveredLink(link.label);
                  // Move the underline to the last hovered link and keep it
                  // there after the pointer leaves.
                  setActiveLink(link.label);
                }}
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
                  {showIndicator && (
                    <motion.span
                      layoutId="harvardNavUnderline"
                      initial={{ opacity: 0, scaleX: 0.7 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 32,
                      }}
                      className="absolute bottom-0 left-0 right-0 h-[3.5px] z-20"
                      style={{
                        background: "#b98b52",
                      }}
                    />
                  )}
                </a>

                {/* Harvard-Style White Dropdown Menu */}
                <AnimatePresence>
                  {link.hasDropdown &&
                    link.dropdownItems &&
                    isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute top-full ${
                          alignRight ? "right-0" : "left-0"
                        } z-50 w-[340px] overflow-hidden rounded-2xl border border-[#b98b52]/25 bg-white shadow-[0_30px_70px_-24px_rgba(11,30,54,0.55)]`}
                      >
                        {/* Panel rows */}
                        <ul className="max-h-[70vh] overflow-y-auto py-1">
                          {link.dropdownItems.map((item, itemIndex) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                onClick={() => {
                                  setActiveLink(link.label);
                                  setHoveredLink(null);
                                }}
                                className={`group flex items-center justify-between gap-4 px-5 py-3 transition-colors duration-200 hover:bg-[#fbf7f1] ${
                                  itemIndex > 0 ? "border-t border-slate-100" : ""
                                }`}
                              >
                                <span className="min-w-0 font-display text-[15px] font-semibold text-[#142d44] transition-colors duration-200 group-hover:text-[#a7773f]">
                                  {item.label}
                                </span>

                                <span
                                  aria-hidden="true"
                                  className="-translate-x-1 shrink-0 text-sm text-[#b98b52] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                >
                                  &rarr;
                                </span>
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

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => {
            setIsMobileMenuOpen((open) => !open);
            setExpandedMobileLink(null);
          }}
          className="lg:hidden grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 backdrop-blur transition-colors duration-200 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b98b52]/60"
        >
          <span aria-hidden="true" className="flex flex-col items-center justify-center gap-[5px]">
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-opacity duration-200 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 h-full w-full cursor-default bg-[#0b1e36]/60 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-x-0 top-full z-50 max-h-[calc(100vh-4.5rem)] overflow-y-auto rounded-b-2xl border-t border-[#b98b52]/20 bg-white shadow-[0_30px_70px_-24px_rgba(11,30,54,0.55)] lg:hidden"
            >
              <nav className="px-3 py-2">
                {navLinks.map((link) => (
                  <div
                    key={link.label}
                    className="border-b border-slate-100 last:border-b-0"
                  >
                    {link.hasDropdown && link.dropdownItems ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={expandedMobileLink === link.label}
                          onClick={() =>
                            setExpandedMobileLink((current) =>
                              current === link.label ? null : link.label,
                            )
                          }
                          className="flex w-full items-center justify-between gap-3 px-3 py-3.5 text-left"
                        >
                          <span className="font-display text-[15px] font-bold uppercase tracking-[0.05em] text-[#142d44]">
                            {link.label}
                          </span>
                          <span
                            className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#234767]/15 text-[#234767] transition-all duration-300 ${
                              expandedMobileLink === link.label
                                ? "rotate-180 border-[#b98b52] bg-[#b98b52] text-white"
                                : ""
                            }`}
                          >
                            <svg
                              className="h-3 w-3"
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
                        </button>

                        <AnimatePresence initial={false}>
                          {expandedMobileLink === link.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              {link.dropdownItems.map((item) => (
                                <li key={item.label}>
                                  <a
                                    href={item.href}
                                    onClick={() => {
                                      setActiveLink(link.label);
                                      setIsMobileMenuOpen(false);
                                    }}
                                    className="block rounded-xl px-3 py-2.5 text-[14px] font-semibold text-[#142d44] transition-colors duration-200 hover:bg-[#fbf7f1]"
                                  >
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => {
                          setActiveLink(link.label);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-between gap-3 px-3 py-3.5"
                      >
                        <span className="font-display text-[15px] font-bold uppercase tracking-[0.05em] text-[#142d44]">
                          {link.label}
                        </span>
                        <span aria-hidden="true" className="text-sm text-[#b98b52]">
                          &rarr;
                        </span>
                      </a>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
