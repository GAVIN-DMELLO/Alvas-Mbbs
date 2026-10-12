import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  const navLinks = [
    { label: 'About', href: '#About' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Student Portal', href: '#student portal' },
    { label: 'Departments', href: '#departments' },
    { label: 'Hospital', href: '#hospital' },
    { label: 'Happenings@AIMSARC', href: '#happenings' },
    { label: 'Contact Us', href: '#Contact Us' },
  ];

  return (
    <nav className="w-full bg-slate-900/30 backdrop-blur-md border-b border-white/10 px-6 py-4 absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo_home.png"
            alt="Institution Logo"
            className="h-20 w-auto object-contain"
          />

          <div className="flex flex-col">
            <span className="text-white font-extrabold text-base sm:text-xl leading-tight uppercase font-display tracking-[-0.01em]">
              Alva&apos;s Institute of Medical Sciences
            </span>

            {/* FIX: remove the conflicting text sizes and reduce tracking */}
            <span className="text-white/90 text-[12px] sm:text-[13px] font-semibold uppercase font-display tracking-[0.06em]">
              and Research Centre
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold uppercase text-white/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5 inline-block font-display tracking-[0.06em]"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};