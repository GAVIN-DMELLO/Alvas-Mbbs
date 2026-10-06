// components/footer/FooterQuickLinks.jsx

export const FooterQuickLinks = () => {
  const links = [
    { name: 'Departments', href: '/departments' },
    { name: 'College', href: '/college' },
    { name: 'Objectives', href: '/objectives' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-white text-lg tracking-wide border-b border-white/10 pb-2">
        Quick Links
      </h3>
      <ul className="flex flex-col space-y-2.5 font-['Outfit'] text-sm">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href}
              className="text-slate-300 hover:text-[#ffddb6] transition-colors inline-block"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};