"use client";

import { useEffect, useRef } from "react";

/**
 * ReadingProgress — a thin amber rail at the top of the masthead that
 * fills as the user scrolls. Positioned absolutely at the top of the
 * header (parent must be position-relative). Uses rAF-throttled scroll
 * to avoid layout thrash. Respects prefers-reduced-motion by skipping
 * the rAF loop entirely (rail stays at 0; CSS transition is also cut).
 */
export function ReadingProgress({ className = "" }: { className?: string }) {
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollable = doc.scrollHeight - doc.clientHeight;
        const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        el.style.width = `${Math.min(100, Math.max(0, pct))}%`;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className={`reading-progress ${className}`}>
      <div ref={fillRef} className="reading-progress__fill" />
    </div>
  );
}
