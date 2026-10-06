// components/chairman/ChairmanContent.jsx
import { Text } from '@/components/ui/Text';

export const ChairmanContent = () => {
  return (
    <div className="w-full lg:w-7/12 flex flex-col justify-between">
      <div>
        {/* Section Heading */}
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl text-[#234767] mb-6 tracking-tight">
          Message From The Chairman
        </h2>

        {/* Message Body using standard Text variant styling */}
        <Text variant="body" className="text-slate-700 text-base sm:text-lg mb-6 leading-relaxed">
          Knowledge is power and education is a path to imbibe it. Alva&apos;s Education Foundation (AEF) purports to do exactly the same that is, transform education into knowledge. It is knowledge that will empower the youth of today to understand the information explosions taking place in the rapidly globalizing world. Personal integrity and ethics can be maintained only with a strong mind and a mind can become strong only with knowledge.
        </Text>

        {/* Signature Metadata */}
        <div className="mb-8">
          <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[#234767] text-lg">
            Dr. Mohan Alva
          </h4>
          <p className="font-['Outfit'] text-slate-500 text-sm mt-0.5">
            Chairman, Alva&apos;s Education Foundation.
          </p>
        </div>
      </div>

      {/* Action Button - Transparent with Blue Border and Blue Text, Inverts on Hover */}
      <div>
        <a
          href="/chairman-message"
          className="inline-flex items-center justify-center bg-transparent border-2 border-[#234767] text-[#234767] hover:bg-[#234767] hover:text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-7 rounded transition-all duration-300 shadow-sm"
        >
          Read Full Message
        </a>
      </div>
    </div>
  );
};