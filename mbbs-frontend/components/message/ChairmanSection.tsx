// components/chairman/ChairmanSection.jsx
import { ChairmanImage } from './ChairmanImage';
import { ChairmanContent } from './ChairmanContent';

export const ChairmanSection = () => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Chairman Portrait */}
        <ChairmanImage />

        {/* Right Column: Heading, Message, Signature & CTA */}
        <ChairmanContent />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <hr className="w-full border-t-2 border-slate-300" />
      </div>
    </section>
  );
};