// components/footer/FooterBrand.jsx
import { Text } from '@/components/ui/Text';

export const FooterBrand = () => {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
      <img 
        src="/logo_home.png" 
        alt="Alva's Institute Crest" 
        className="w-24 h-24 object-contain"
        onError={(e) => { e.target.src = "https://placehold.co/100x100?text=Logo"; }}
      />
      <Text variant="subtitle" className="font-['Plus_Jakarta_Sans'] font-semibold text-white text-xs sm:text-sm tracking-wide leading-relaxed uppercase">
        Alva&apos;s Institute of Medical Sciences and Research Centre, <br />
        Dakshina Kannada, Karnataka
      </Text>
    </div>
  );
};