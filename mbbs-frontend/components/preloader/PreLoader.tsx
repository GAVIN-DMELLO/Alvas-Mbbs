// components/preloader/PreLoader.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// The preloader is a first-visit experience only. The flag lives in
// sessionStorage, so it plays on the very first load of a session and never
// again on client-side navigations or reloads within that same session.
const PRELOADER_SESSION_KEY = "alvas:preloader-played";

type PreloaderPhase = "pending" | "running" | "finished";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<PreloaderPhase>("pending");
  const [shrinkBox, setShrinkBox] = useState(false);
  const [slideUpLogo, setSlideUpLogo] = useState(false);
  const [progress, setProgress] = useState(0);
  const [rollUpCurtain, setRollUpCurtain] = useState(false);

  const onCompleteRef = useRef(onComplete);
  // React StrictMode runs mount effects twice in development. Guard the
  // one-time decision so the preloader is not skipped on a genuine first visit.
  const decidedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Decide once, on mount: play the animation or skip straight through.
  useEffect(() => {
    if (decidedRef.current) return;
    decidedRef.current = true;

    let alreadyPlayed = false;

    try {
      alreadyPlayed =
        window.sessionStorage.getItem(PRELOADER_SESSION_KEY) === "1";
    } catch {
      alreadyPlayed = false;
    }

    if (alreadyPlayed) {
      setPhase("finished");
      onCompleteRef.current?.();
      window.dispatchEvent(new CustomEvent("preloaderComplete"));
      return;
    }

    try {
      window.sessionStorage.setItem(PRELOADER_SESSION_KEY, "1");
    } catch {
      // Storage unavailable (private mode) - the animation still plays.
    }

    setPhase("running");
  }, []);

  // Step 1, 2, 3: Fade In -> Logo Slide Up -> Progress Fill
  useEffect(() => {
    if (phase !== "running") return;

    document.body.style.overflow = "hidden"; // Lock page scroll while loading

    const fadeInTimer = setTimeout(() => {
      setShrinkBox(true);
    }, 80);

    const logoTimer = setTimeout(() => {
      setSlideUpLogo(true);
    }, 850);

    let fillInterval: ReturnType<typeof setInterval> | undefined;
    const startFillTimer = setTimeout(() => {
      fillInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (fillInterval) clearInterval(fillInterval);
            return 100;
          }
          return prev + 1;
        });
      }, 20);
    }, 1500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(logoTimer);
      clearTimeout(startFillTimer);
      if (fillInterval) clearInterval(fillInterval);
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Step 4: When progress reaches 100%, roll the screen upwards
  useEffect(() => {
    if (phase !== "running" || progress !== 100) return;

    // Pause 300ms at 100% so the user admires the full logo, then roll up
    const rollUpTimer = setTimeout(() => {
      setRollUpCurtain(true);
    }, 300);

    // Remove preloader from DOM after the 1000ms roll-up finishes
    const doneTimer = setTimeout(() => {
      setPhase("finished");
      document.body.style.overflow = ""; // Unlock scrolling on your main site
      onCompleteRef.current?.();
      window.dispatchEvent(new CustomEvent("preloaderComplete"));
    }, 1300);

    return () => {
      clearTimeout(rollUpTimer);
      clearTimeout(doneTimer);
    };
  }, [phase, progress]);

  // Completely unmount once the curtain has rolled off-screen
  if (phase === "finished") return null;

  return (
    <div
      aria-hidden={phase === "pending"}
      className={`fixed inset-0 z-[9999] bg-white transition-opacity duration-300 ${
        phase === "pending" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`flex min-h-screen w-full flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          rollUpCurtain ? "-translate-y-full" : "translate-y-0"
        }`}
      >
      {/* Logo and Text Container */}
      <div
        className={`flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          shrinkBox
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0"
        }`}
      >
        {/* Logo Wrapper */}
        <div
          className={`relative h-[250px] w-[250px] shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            slideUpLogo ? "translate-y-0" : "translate-y-[800px]"
          }`}
        >
          {/* 1. Base Layer: White Silhouette */}
          <Image
            src="/logo_home.png"
            alt="Logo Base"
            fill
            priority
            sizes="250px"
            className="object-contain grayscale brightness-200"
          />

          {/* 2. Animated Fill Layer: Original Colors rising from bottom to top */}
          <Image
            src="/logo_home.png"
            alt="Logo Fill"
            fill
            priority
            sizes="250px"
            className="object-contain transition-[clip-path] duration-75 ease-linear"
            style={{
              clipPath: `inset(${100 - progress}% 0 0 0)`,
            }}
          />
        </div>

        {/* Institute Name */}
        <div
          className={`mt-8 text-center transition-opacity duration-700 w-full px-4 ${
            slideUpLogo ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 font-serif tracking-tight">
            ALVA&apos;S INSTITUTE OF MEDICAL SCIENCES
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 font-serif tracking-tight mt-1">
            AND RESEARCH CENTRE
          </h2>
          <p className="text-sm text-gray-500 font-sans mt-4 max-w-lg mx-auto text-center">
            Dedicated to excellence in medical education, research, and
            compassionate healthcare.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
