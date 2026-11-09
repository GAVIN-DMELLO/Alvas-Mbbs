// components/message/ChairmanSection.tsx
"use client";

import { ChairmanImage } from "./ChairmanImage";
import { ChairmanContent } from "./ChairmanContent";

export const ChairmanSection = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f2f5f7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#234767]/[0.06] blur-[110px]" />
        <div className="absolute -bottom-48 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#ffddb6]/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_28px_80px_rgba(15,41,66,0.12)] lg:flex-row">
          <ChairmanImage />
          <ChairmanContent />
        </div>
      </div>
    </section>
  );
};
