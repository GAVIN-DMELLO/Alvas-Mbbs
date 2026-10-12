'use client';
import {Button} from '../components/ui/Button'
import { Text } from '../components/ui/Text';
import { Header } from '../components/header/Header'
import { HeroSection } from '@/components/hero/HeroSection';
import { ChairmanSection } from '@/components/message/ChairmanSection';
import { FooterSection } from '@/components/footer/FooterSection';
import { StorySection } from '@/components/story/StorySection';
import { DepartmentsSection } from '@/components/departments/DepartmentsSection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ChairmanSection />
      <StorySection />
      <DepartmentsSection />
      <FooterSection />
    </>
  );
}
