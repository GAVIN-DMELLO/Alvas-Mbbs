// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Lora, JetBrains_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { FooterSection } from "@/components/footer/FooterSection";

// 1. Initialize all fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alva's Institute of Medical Sciences and Research Centre",
  description: "A Centre of Excellence in Medical Education, Research & Healthcare Delivery",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
