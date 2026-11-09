// components/story/StorySection.tsx
import { StoryContent } from './StoryContent';

export const StorySection = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#102b43] py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 z-0">
        <img
          src="/banner-7.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f33]/45 via-[#0f2942]/20 to-[#0b1f33]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/35 via-transparent to-[#0b1f33]/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StoryContent />
      </div>
    </section>
  );
};
