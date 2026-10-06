
export const Button = ({ variant = 'primary', className = '', children}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-red-700 text-white hover:bg-red-800 shadow-md"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
};