// lib/campusLife.ts

export type CampusLifeTab = "photoGallery" | "videoGallery" | "newsletter";

export const CAMPUS_LIFE_TABS: { id: CampusLifeTab; label: string }[] = [
  { id: "photoGallery", label: "Photo Gallery" },
  { id: "videoGallery", label: "Video Gallery" },
  { id: "newsletter", label: "Newsletter" },
];

export const SECTION_INTROS: Record<
  CampusLifeTab,
  { title: string; description: string }
> = {
  photoGallery: {
    title: "Photo Gallery",
    description:
      "Explore photographs from academic events, campus life, conferences, and cultural activities at AIMSARC.",
  },
  videoGallery: {
    title: "Video Gallery",
    description:
      "Watch videos showcasing institutional events, academic programs, and student activities.",
  },
  newsletter: {
    title: "Newsletter",
    description:
      "Stay updated with the latest news, achievements, and important announcements through our institutional newsletters.",
  },
};

export type CampusPhoto = {
  id: string;
  title: string;
  caption: string;
  image: string;
};

export const CAMPUS_PHOTOS: CampusPhoto[] = [
  {
    id: "campus-snapshot",
    title: "Campus Snapshot",
    caption:
      "Alva’s Aarohana 2026 — orientation and white coat donning ceremony at AIMSARC.",
    image: "/images/campus-life/campus-snapshot.jpg",
  },
];

export type CampusVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  /** Optional external link for the video; leave empty until the links are published. */
  href?: string;
};

export const CAMPUS_VIDEOS: CampusVideo[] = [
  {
    id: "independence-day",
    title: "Both Independence Day Celebration",
    description:
      "Thousands of students gathered at the Vidyagiri campus to celebrate Independence Day with a massive tricolour formation.",
    thumbnail: "/images/campus-life/independence-day.jpg",
  },
  {
    id: "college-overview",
    title: "AIMSARC College Overview",
    description:
      "A comprehensive look at the state-of-the-art facilities, academic programs, and vibrant student life at AIMSARC.",
    thumbnail: "/images/campus-life/college-overview.jpg",
  },
];

export type CampusNewsletter = {
  id: string;
  title: string;
  issue: string;
  description: string;
  href?: string;
};

export const CAMPUS_NEWSLETTERS: CampusNewsletter[] = [];
