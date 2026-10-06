// components/footer/FooterContact.jsx

export const FooterContact = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-white text-lg tracking-wide border-b border-white/10 pb-2">
        Contact Us
      </h3>
      <div className="space-y-3 font-['Outfit'] text-sm">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <span className="text-slate-400 font-medium min-w-[120px]">Phone No:</span>
          <a href="tel:7337731333" className="text-white hover:text-[#ffddb6] transition-colors">
            7337731333
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <span className="text-slate-400 font-medium min-w-[120px]">Admission mail:</span>
          <a href="mailto:admission@aimsarc.org" className="text-white hover:text-[#ffddb6] transition-colors">
            admission@aimsarc.org
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <span className="text-slate-400 font-medium min-w-[120px]">For info/Enquires:</span>
          <a href="mailto:info@aimsarc.org" className="text-white hover:text-[#ffddb6] transition-colors">
            info@aimsarc.org
          </a>
        </div>
      </div>
    </div>
  );
};