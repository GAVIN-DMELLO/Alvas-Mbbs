// components/footer/FooterContact.tsx

const contactItems = [
  {
    label: "Phone",
    value: "7337731333",
    href: "tel:7337731333",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Admissions",
    value: "admission@aimsarc.org",
    href: "mailto:admission@aimsarc.org",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
  {
    label: "General Enquiries",
    value: "info@aimsarc.org",
    href: "mailto:info@aimsarc.org",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </>
    ),
  },
];

export const FooterContact = () => {
  return (
    <div className="flex flex-col space-y-5">
      <h3 className="font-display text-lg font-bold text-white">Contact Us</h3>
      <ul className="flex flex-col space-y-4">
        {contactItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="group flex items-start gap-3 text-slate-300 transition-colors hover:text-amber-200"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-amber-200/80 transition-colors duration-300 group-hover:border-amber-300/60 group-hover:text-amber-200">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-white">
                  {item.value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
