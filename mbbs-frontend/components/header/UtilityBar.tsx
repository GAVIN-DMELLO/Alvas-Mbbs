// components/header/UtilityBar.tsx
import { Text } from '@/components/ui/Text';

export const UtilityBar = () => {
  return (
    <div className="w-full bg-[#234767] border-b border-[#1b3852] px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
        
        {/* Phone number on the left */}
        <div className="flex items-center gap-2">
          <Text variant="body">
            <a href="tel:+917337731333" className="text-slate-200 hover:text-white transition-colors font-medium">
              +91-7337731333
            </a>
          </Text>
        </div>

        {/* Email on the right */}
        <div className="flex items-center gap-2">
          <Text variant="body">
            <a href="mailto:admission@aimsarc.org" className="text-slate-200 hover:text-white transition-colors font-medium">
              admission@aimsarc.org
            </a>
          </Text>
        </div>

      </div>
    </div>
  );
};