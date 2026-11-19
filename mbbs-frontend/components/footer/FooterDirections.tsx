// components/footer/FooterDirections.tsx

export const FooterDirections = () => {
  return (
    <div className="flex flex-col space-y-5">
      <h3 className="font-display text-lg font-bold text-white">
        Find Your Way
      </h3>
      <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg">
        <iframe
          title="Alvas Medical College Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4707.928662359481!2d74.97006163094092!3d13.020080124886903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4ab7d71aaa709%3A0xeb982b8e9454d721!2sAlva%27s%20Institute%20of%20Medical%20Science%20and%20Research%20Center!5e1!3m2!1sen!2sin!4v1787042760720!5m2!1sen!2sin"
          width="100%"
          height="170"
          style={{ border: 0, filter: "grayscale(30%) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/20" />
      </div>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Alva%27s%20Institute%20of%20Medical%20Science%20and%20Research%20Center%2C%20Mijar%2C%20Moodbidri%2C%20Karnataka"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-300/40 bg-amber-300/10 px-4 py-2.5 text-sm font-semibold text-amber-200 transition-all duration-300 hover:bg-amber-300/20"
      >
        Get Directions
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </a>
    </div>
  );
};
