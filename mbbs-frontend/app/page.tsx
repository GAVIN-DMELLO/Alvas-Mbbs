'use client';

import { useState } from 'react';
import { Header } from '../components/header/Header';
import { HeroSection } from '@/components/hero/HeroSection';
import { ChairmanSection } from '@/components/message/ChairmanSection';
import { FooterSection } from '@/components/footer/FooterSection';
import { StorySection } from '@/components/story/StorySection';
import { DepartmentsSection } from '@/components/departments/DepartmentsSection';
import Preloader from '@/components/preloader/PreLoader';

export default function Home() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setIsPreloaderDone(true)} />
      <Header isReady={isPreloaderDone} />
      <HeroSection isReady={isPreloaderDone} />
      <ChairmanSection />
      <StorySection />
      <DepartmentsSection />
      <FooterSection />
    </>
  );
}
