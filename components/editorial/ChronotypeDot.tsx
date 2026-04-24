"use client";

import { useEffect, useState } from "react";

/**
 * ChronotypeDot — a tiny coloured dot that cycles based on local hour.
 *   05:00–10:59 → amber (morning-light window)
 *   11:00–19:59 → zenith (mid-day alertness peak)
 *   20:00–04:59 → ember (biological evening / night)
 *
 * Decorative. Gentle pulse via Tailwind's `animate-pulse` (disabled
 * implicitly under prefers-reduced-motion by the browser on some
 * engines; we also stop the tint from flipping in that case — it
 * paints once at mount and stays).
 */
export function ChronotypeDot({
  className = "",
  pulse = true,
}: {
  className?: string;
  pulse?: boolean;
}) {
  const [tone, setTone] = useState<"dawn" | "zenith" | "ember" | null>(null);

  useEffect(() => {
    const paint = () => {
      const h = new Date().getHours();
      if (h >= 5 && h < 11) setTone("dawn");
      else if (h >= 11 && h < 20) setTone("zenith");
      else setTone("ember");
    };
    paint();
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const id = window.setInterval(paint, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!tone) {
    // SSR-safe placeholder: neutral slate so layout never jumps.
    return (
      <span
        aria-hidden
        className={`inline-block h-1.5 w-1.5 rounded-full bg-slate/60 ${className}`}
      />
    );
  }

  const bg =
    tone === "zenith"
      ? "bg-zenith"
      : tone === "ember"
      ? "bg-ember"
      : "bg-dawn";

  return (
    <span
      aria-hidden
      title="Chronotype phase indicator"
      className={`inline-block h-1.5 w-1.5 rounded-full ${bg} ${
        pulse ? "animate-pulse" : ""
      } ${className}`}
      style={{
        boxShadow:
          tone === "zenith"
            ? "0 0 8px rgba(94,175,201,0.55)"
            : tone === "ember"
            ? "0 0 8px rgba(201,125,94,0.55)"
            : "0 0 8px rgba(230,169,64,0.6)",
      }}
    />
  );
}
