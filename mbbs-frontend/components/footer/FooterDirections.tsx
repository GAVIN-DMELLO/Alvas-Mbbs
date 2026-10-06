// components/footer/FooterDirections.jsx

export const FooterDirections = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-white text-lg tracking-wide border-b border-white/10 pb-2">
        Directions
      </h3>
      <div className="relative w-full max-w-[260px] h-[150px] rounded overflow-hidden shadow-md border border-white/10 bg-slate-800">
        <iframe
          title="Alvas Medical College Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3846200234!2d74.99!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z🫧QWx2YScsIFNJTVNSQyBNb29kdWJpZGlyZQ!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full object-cover"
        ></iframe>
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-2 left-2 bg-white text-slate-900 px-2.5 py-1 rounded text-xs font-semibold shadow hover:bg-slate-100 transition-colors flex items-center gap-1"
        >
          Maps 
          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};