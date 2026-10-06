// components/hero/HeroContent.jsx
import { Text } from '@/components/ui/Text';

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 mt-2 mb-8">
      {/* Main Headline */}
      <Text 
        variant="h1" 
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
      >
        A Centre of Excellence in Medical Education, Research & Healthcare Delivery
      </Text>

      {/* Descriptive Paragraph */}
      <Text 
        variant="subtitle" 
        className="mt-4 text-slate-200 text-sm sm:text-base max-w-2xl font-normal leading-relaxed"
      >
        Nurturing compassionate medical practitioners, cutting-edge biomedical innovators, and providing tertiary clinical care across a 1000+ bed teaching hospital in Moodubidire, Karnataka.
      </Text>
    </div>
  );
};