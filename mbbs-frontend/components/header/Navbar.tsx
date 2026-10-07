
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
        
        {/* Logo Image Placeholder */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/logo.jpg" 
            alt="Institution Logo" 
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-xs sm:text-sm tracking-tight leading-tight uppercase font-mono">
              Alva's Institute of Medical Sciences
            </span>
            <span className="text-[10px] text-[#b48a55] font-semibold tracking-wider uppercase font-mono">
              and Research Centre
            </span>
          </div>
        </a>

        {/* Navigation Links (mapped from navLinks array) */}
        {/* Navigation Links matched to the official layout style */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold tracking-wider uppercase text-[#b48a55] hover:text-white transition-all duration-200 hover:-translate-y-0.5 inline-block font-mono"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};