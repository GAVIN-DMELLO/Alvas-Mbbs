// components/ui/Text.jsx

export const Text = ({ variant = 'body', children, className = '' }) => {
  let styles = "font-['Outfit'] font-normal text-slate-200 text-base leading-relaxed";
  let Component = 'p';

  if (variant === 'h1') {
    // Ultra-modern bold heading with tight letter spacing
    styles = "font-['Plus_Jakarta_Sans'] font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]";
    Component = 'h1';
  } else if (variant === 'subtitle') {
    // Sleek, modern, highly readable subtitle style
    styles = "font-['Outfit'] font-light text-slate-100 text-sm sm:text-base md:text-lg max-w-3xl tracking-wide leading-relaxed";
    Component = 'p';
  } else if (variant === 'body') {
    // Modern standard body text
    styles = "font-['Outfit'] font-normal text-gray-200 text-base leading-relaxed";
    Component = 'p';
  }

  return (
    <Component className={`${styles} ${className}`}>
      {children}
    </Component>
  );
};