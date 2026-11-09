'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { ImpactStatsSection } from '@/components/impact/ImpactStatsSection';
import { ChairmanSection } from '@/components/message/ChairmanSection';
// import { StorySection } from '@/components/story/StorySection';
import { DepartmentsSection } from '@/components/departments/DepartmentsSection';
import { NewsSection } from '@/components/news/NewsSection';
import Preloader from '@/components/preloader/PreLoader';

export default function Home() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setIsPreloaderDone(true)} />
      <HeroSection isReady={isPreloaderDone} />
      <ImpactStatsSection />
      <ChairmanSection />
      {/* Our Story section commented out as of now
      <StorySection />
      */}
      <DepartmentsSection />
      <NewsSection />
    </>
  );
}
