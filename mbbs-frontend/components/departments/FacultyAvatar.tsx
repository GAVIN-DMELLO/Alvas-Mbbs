"use client";

import { useEffect, useRef, useState } from "react";

type FacultyAvatarProps = {
  name: string;
  image?: string;
};

function PlaceholderAvatar({ name }: { name: string }) {
  return (
    <div
      role="img"
      aria-label={name || "Faculty member"}
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#e9eef4] to-[#d6dfe9]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-12 w-12 text-[#5a6f86]"
      >
        <circle cx="12" cy="8" r="4" fill="currentColor" />
        <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="currentColor" />
      </svg>
    </div>
  );
}

export function FacultyAvatar({ name, image }: FacultyAvatarProps) {
  const [failed, setFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const src = image
    ? image.startsWith("/")
      ? image
      : `/images/faculties/${image}`
    : null;

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
    return <PlaceholderAvatar name={name} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imageRef}
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}
