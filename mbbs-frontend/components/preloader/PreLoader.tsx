// components/preloader/PreLoader.tsx
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

// The preloader belongs to a single document load. A module-level flag lives
// in memory for as long as the page is open, so it survives client-side
// navigation (the user never sees the preloader twice while browsing) but it
// is reset by a hard reload, where the preloader should play again.
let hasPlayedInThisDocument = false;

type PreloaderPhase = "pending" | "running" | "finished";

// Layout effects run before the browser paints, so the "skip" decision is made
// without the curtain ever being visible. useLayoutEffect warns during SSR,
// so fall back to useEffect on the server.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// --- choreography -----------------------------------------------------------
const LOGO_RISE_AT = 100; // logo starts rising almost immediately
const WORDMARK_AT = 450; // wordmark fades in as the logo settles
const FILL_START_AT = 700; // colour fill overlaps the logo's arrival
const FILL_DURATION = 1600; // ms for the logo to fill bottom-to-top
const FILL_HOLD = 350; // pause on the full logo before the curtain rolls up
const ROLL_UP = 1000; // ms for the curtain to slide away

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<PreloaderPhase>("pending");
  const [slideUpLogo, setSlideUpLogo] = useState(false);
  const [showWordmark, setShowWordmark] = useState(false);
  const [fillDone, setFillDone] = useState(false);
  const [rollUpCurtain, setRollUpCurtain] = useState(false);

  const fillRef = useRef<HTMLImageElement>(null);
  const onCompleteRef = useRef(onComplete);
  // React StrictMode runs mount effects twice in development. Guard the
  // one-time decision so the preloader is not skipped on a genuine first visit.
  const decidedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Decide once, on mount: play the animation or skip straight through.
  // Runs as a layout effect so a skip never flashes the curtain.
  useIsomorphicLayoutEffect(() => {
    if (decidedRef.current) return;
    decidedRef.current = true;

    if (hasPlayedInThisDocument) {
      // Already played during this document (client-side navigation back to
      // the home page) - reveal the site immediately.
      setPhase("finished");
      onCompleteRef.current?.();
      window.dispatchEvent(new CustomEvent("preloaderComplete"));
      return;
    }

    hasPlayedInThisDocument = true;
    setPhase("running");
  }, []);

  // Step 1, 2, 3: Logo rises -> wordmark fades in -> colour fill sweeps up.
  useEffect(() => {
    if (phase !== "running") return;

    document.body.style.overflow = "hidden"; // Lock page scroll while loading

    const logoTimer = setTimeout(() => setSlideUpLogo(true), LOGO_RISE_AT);
    const wordmarkTimer = setTimeout(() => setShowWordmark(true), WORDMARK_AT);

    let frame = 0;
    const fillTimer = setTimeout(() => {
      const start = performance.now();

      // requestAnimationFrame drives the fill straight from the clock, so the
      // sweep is perfectly smooth with no transition lag in the middle.
      const tick = (now: number) => {
        const next = Math.min(100, ((now - start) / FILL_DURATION) * 100);

        if (fillRef.current) {
          fillRef.current.style.clipPath = `inset(${100 - next}% 0 0 0)`;
        }

        if (next < 100) {
          frame = requestAnimationFrame(tick);
        } else {
          setFillDone(true);
        }
      };

      frame = requestAnimationFrame(tick);
    }, FILL_START_AT);

    // Safety net: browsers pause requestAnimationFrame in hidden tabs, so make
    // sure the preloader still completes even if the page is in the background.
    const safetyTimer = setTimeout(() => {
      if (fillRef.current) {
        fillRef.current.style.clipPath = "inset(0% 0 0 0)";
      }
      setFillDone(true);
    }, FILL_START_AT + FILL_DURATION + 300);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(wordmarkTimer);
      clearTimeout(fillTimer);
      clearTimeout(safetyTimer);
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Step 4: When the logo is fully filled, roll the whole white curtain up
  useEffect(() => {
    if (phase !== "running" || !fillDone) return;

    // Pause on the full logo, then roll the curtain upwards
    const rollUpTimer = setTimeout(() => {
      setRollUpCurtain(true);
    }, FILL_HOLD);

    // Remove preloader from DOM once the roll-up finishes
    const doneTimer = setTimeout(() => {
      setPhase("finished");
      document.body.style.overflow = ""; // Unlock scrolling on your main site
      onCompleteRef.current?.();
      window.dispatchEvent(new CustomEvent("preloaderComplete"));
    }, FILL_HOLD + ROLL_UP);

    return () => {
      clearTimeout(rollUpTimer);
      clearTimeout(doneTimer);
    };
  }, [phase, fillDone]);

  // Completely unmount once the curtain has rolled off-screen
  if (phase === "finished") return null;

  return (
    // The white curtain itself is what rolls up, carrying the logo and the
    // wordmark with it.
    <div
      aria-hidden={phase === "pending"}
      className={`fixed inset-0 z-[9999] bg-white transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        rollUpCurtain ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
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
            ref={fillRef}
            src="/logo_home.png"
            alt="Logo Fill"
            fill
            priority
            sizes="250px"
            className="object-contain"
            style={{
              clipPath: "inset(100% 0 0 0)",
            }}
          />
        </div>

        {/* Institute Name */}
        <div
          className={`mt-8 text-center transition-opacity duration-700 ease-out w-full px-4 ${
            showWordmark ? "opacity-100" : "opacity-0"
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
  );
}
