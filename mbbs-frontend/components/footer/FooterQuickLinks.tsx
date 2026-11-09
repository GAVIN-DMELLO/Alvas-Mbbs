// components/footer/FooterQuickLinks.tsx

const links = [
  { name: "Home", href: "#" },
  { name: "Departments", href: "#departments" },
  { name: "About Us", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "News & Media", href: "#news" },
];

export const FooterQuickLinks = () => {
  return (
    <div className="flex flex-col space-y-5">
      <h3 className="font-display text-lg font-bold text-white">Quick Links</h3>
      <ul className="flex flex-col space-y-2.5">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-300 hover:text-amber-200"
            >
              <span className="h-px w-4 bg-slate-500 transition-all duration-300 group-hover:w-6 group-hover:bg-amber-300" />
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
