// components/story/StorySection.jsx
import { StoryImage } from './StoryImage';
import { StoryContent } from './StoryContent';

export const StorySection = () => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Campus Image Card */}
        <StoryImage />

        {/* Right Column: Heading, Text & CTA */}
        <StoryContent />
      </div>
    </section>
  );
};