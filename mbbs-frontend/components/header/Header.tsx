// components/header/Header.tsx
import { UtilityBar } from '@/components/header/UtilityBar';
import { Navbar } from '@/components/header/Navbar';

export const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top contact & accreditation strip */}
      <UtilityBar />

      {/* Main navigation and brand bar */}
      <Navbar />
    </header>
  );
};