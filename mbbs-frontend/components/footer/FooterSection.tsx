// components/footer/FooterSection.jsx
import { FooterBrand } from './FooterBrand';
import { FooterContact } from './FooterContact';
import { FooterQuickLinks } from './FooterQuickLinks';
import { FooterDirections } from './FooterDirections';

export const FooterSection = () => {
  return (
    <footer className="w-full bg-[#1c1c1c] text-slate-200 py-16 relative border-t-4 border-[#ffddb6] shadow-[0_-5px_20px_rgba(255,221,182,0.25)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <FooterBrand />
        <FooterContact />
        <FooterQuickLinks />
        <FooterDirections />
      </div>
    </footer>
  );
};