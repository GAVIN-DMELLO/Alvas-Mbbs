
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
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Image Placeholder */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/logo.jpg" 
            alt="Institution Logo" 
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-slate-900 font-extrabold text-xs sm:text-sm tracking-tight leading-tight uppercase">
              Alva's Institute of Medical Sciences
            </span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
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
              className="text-[13px] font-semibold tracking-wider uppercase text-slate-800 hover:text-[#234767] transition-all duration-200 hover:-translate-y-0.5 inline-block"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};