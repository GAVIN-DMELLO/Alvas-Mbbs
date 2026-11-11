// components/header/Header.tsx
"use client";

import { Navbar } from '@/components/header/Navbar';

export const Header = ({ isReady = true }: { isReady?: boolean }) => {
  return (
    <header className="w-full sticky top-0 z-50 overflow-x-clip">
      {/* Main navigation and brand bar */}
      <Navbar isReady={isReady} />
    </header>
  );
};
