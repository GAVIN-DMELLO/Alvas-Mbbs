// components/campus-life/GalleryImage.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type GalleryImageProps = {
  src?: string;
  alt: string;
  className?: string;
};

export function GalleryImage({
  src,
  alt,
  className = "",
}: GalleryImageProps) {
  const [failed, setFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  useEffect(() => {
    const element = imageRef.current;
    if (element && element.complete && element.naturalWidth === 0) {
      setFailed(true);
    }
  }, [src]);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#142d44] via-[#10263c] to-[#0b1e36] ${className}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-12 w-12 text-white/35"
        >
          <rect
            x="3"
            y="6"
            width="18"
            height="13"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="9" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M4 17l4.5-4.5a2 2 0 012.8 0L16 17M14 14l1.6-1.6a2 2 0 012.8 0L21 15"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
