"use client";

import { useEffect, useRef, useState } from "react";

/**
 * LuxBadge — CircadianStack's site-unique spec pill.
 *
 * Displays a measured lux value at a specific distance, e.g.
 *   10,000 lux @ 18 in   or   2,500 lux @ 24 in
 *
 * Used on ComparisonTemplate rank cards (light therapy lamps,
 * sunrise alarms), in Protocol cards, and anywhere the site needs to
 * foreground dose-accurate product data. Monospace numerals in amber.
 *
 * Lab-notebook telemetry: when the badge scrolls into view, the numeric
 * portion counts up from 0 to its true value (~1.2s, easeOutCubic) —
 * first time only. This effect is cut under prefers-reduced-motion.
 */
export function LuxBadge({
  spec,
  at,
  label = "Lux",
  unit = "lux",
  tone = "dawn",
  className = "",
  countUp = true,
}: {
  spec: string | number;
  at?: string;
  label?: string;
  unit?: string;
  tone?: "dawn" | "zenith" | "ember";
  className?: string;
  countUp?: boolean;
}) {
  const toneClass =
    tone === "zenith"
      ? "text-zenith border-zenith/30 bg-zenith/[0.07]"
      : tone === "ember"
      ? "text-ember border-ember/30 bg-ember/[0.07]"
      : "text-dawn border-dawn/30 bg-dawn/[0.08]";

  const targetNumber =
    typeof spec === "number"
      ? spec
      : Number(String(spec).replace(/[^0-9.-]/g, ""));
  const finalDisplay =
    typeof spec === "number" ? spec.toLocaleString("en-US") : spec;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(finalDisplay);

  useEffect(() => {
    if (!countUp) return;
    const el = ref.current;
    if (!el) return;
    if (!Number.isFinite(targetNumber) || targetNumber <= 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(finalDisplay);
      return;
    }

    // Pre-arm: paint 0 before the observer fires so the user sees the
    // count-up begin from the true zero state.
    setDisplay("0");

    let rafId = 0;
    const start = () => {
      const t0 = performance.now();
      const duration = 1200;
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = Math.round(targetNumber * eased);
        setDisplay(current.toLocaleString("en-US"));
        if (p < 1) rafId = requestAnimationFrame(tick);
        else setDisplay(finalDisplay);
      };
      rafId = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
      return () => cancelAnimationFrame(rafId);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            start();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [countUp, targetNumber, finalDisplay]);

  return (
    <span
      ref={ref}
      className={`lux-badge ${toneClass} ${className}`}
      aria-label={`${label}: ${finalDisplay} ${unit}${at ? ` at ${at}` : ""}`}
    >
      <span className="lux-unit" aria-hidden>
        {label}
      </span>
      <span className="font-semibold tracking-tight">
        {display}
        <span className="lux-unit ml-1.5" aria-hidden>
          {unit}
        </span>
      </span>
      {at && (
        <>
          <span className="text-slate/70 mx-0.5" aria-hidden>
            @
          </span>
          <span className="font-medium">{at}</span>
        </>
      )}
    </span>
  );
}
