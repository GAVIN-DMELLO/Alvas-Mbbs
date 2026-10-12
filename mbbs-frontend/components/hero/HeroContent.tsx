// components/hero/HeroContent.jsx
import { Text } from "@/components/ui/Text";

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-start text-left w-full max-w-5xl px-0 mt-2 mb-6">
      {/* Institution lockup */}
      <div className="mb-5 inline-block">
        {/* Logo aligned LEFT with ALVA'S */}
        <img
          src="/logo_home.png"
          alt="Alva's Institute Logo"
          className="block ml-12 mb-2 w-10 h-10 sm:w-12 sm:h-12 object-contain"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/80x80?text=Logo";
          }}
        />

        <p className="font-display text-white font-semibold uppercase text-3xl sm:text-5xl lg:text-5xl tracking-[0.12em]">
          ALVA&apos;S
        </p>

        <p className="text-white/85 font-medium tracking-[0.12em] uppercase text-sm sm:text-base lg:text-2xl">
          Institute of Medical Sciences &amp; Research Centre
        </p>
      </div>

      {/* keep your main line as you have it */}
      <Text
        variant="h1"
        className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
      >
        A Centre of Excellence in Medical Education, Research &amp; Healthcare Delivery
      </Text>
    </div>
  );
};