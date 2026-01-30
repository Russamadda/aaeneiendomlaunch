"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  images: string[];
  startIndex: number;
  onClose: () => void;
};

export const Lightbox = ({ images, startIndex, onClose }: Props) => {
  const [index, setIndex] = useState(startIndex);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setIndex(startIndex), [startIndex]);

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  });

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const image = images[index] ?? images[0];

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] bg-black/70 flex items-center justify-center p-4"
      role="dialog"
      aria-label="Bildegalleri"
      onClick={onClose}
    >
      <div
        className="relative z-10 w-full max-w-5xl rounded-2xl bg-neutral-950/80 ring-1 ring-white/10 shadow-2xl p-4 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 z-20 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 flex items-center justify-center text-white"
          aria-label="Lukk"
        >
          <span className="block leading-none text-2xl -mt-[1px] select-none">×</span>
        </button>

        <button
          onClick={prev}
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 pointer-events-auto h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 flex items-center justify-center text-white text-2xl"
          aria-label="Forrige"
        >
          ‹
        </button>
        <button
          onClick={next}
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-auto h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 flex items-center justify-center text-white text-2xl"
          aria-label="Neste"
        >
          ›
        </button>

        <div className="relative w-full h-[75vh] max-h-[75vh]">
          <Image
            src={image}
            alt="Prosjektbilde"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <div className="mt-3 text-center text-white/70 text-sm">
          {index + 1}/{images.length}
        </div>
      </div>
    </div>,
    document.body
  );
};
