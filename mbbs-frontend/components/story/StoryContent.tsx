// components/story/StoryContent.jsx
import { Text } from '@/components/ui/Text';

export const StoryContent = () => {
  return (
    <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-6">
      {/* Eyebrow Tag */}
      <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs sm:text-sm tracking-widest text-slate-400 uppercase">
        Our Story
      </span>

      {/* Main Heading */}
      <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#234767] tracking-tight leading-tight">
        A Legacy of Care. <br />
        A Future of Excellence.
      </h2>

      {/* Body Paragraph 1 */}
      <Text variant="body" className="text-slate-700 text-base sm:text-lg leading-relaxed">
        Alva&apos;s Institute of Medical Sciences and Research Centre (AIMSRC) was established in 2026 as a proud unit of Alva&apos;s Education Foundation, carrying forward a rich legacy of service, compassion, and academic excellence.
      </Text>

      {/* Body Paragraph 2 */}
      <Text variant="body" className="text-slate-700 text-base sm:text-lg leading-relaxed">
        Our journey is deeply rooted in the remarkable 40-year history of Alva&apos;s Health Centre, a trusted name in healthcare that has served generations with dedication and integrity.
      </Text>

      {/* Action Link / CTA */}
      <div className="pt-2">
        <a 
          href="/about-us" 
          className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] font-semibold text-[#234767] hover:text-[#00d2ff] transition-colors group text-sm sm:text-base tracking-wide"
        >
          Read More 
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </div>
    </div>
  );
};