// components/ui/Button.tsx
import type { ReactNode } from "react";

type ButtonProps = {
  variant?: string;
  className?: string;
  children?: ReactNode;
};

const variants: Record<string, string> = {
  primary: "bg-red-700 text-white hover:bg-red-800 shadow-md",
};

export const Button = ({
  variant = "primary",
  className = "",
  children,
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2";

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
};
