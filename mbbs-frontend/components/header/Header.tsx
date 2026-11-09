// components/header/Header.tsx
"use client";

import { Navbar } from '@/components/header/Navbar';

export const Header = ({ isReady = false }: { isReady?: boolean }) => {
  return (
    <header className="w-full sticky top-0 z-50">
      {/* Main navigation and brand bar */}
      <Navbar isReady={isReady} />
    </header>
  );
};
