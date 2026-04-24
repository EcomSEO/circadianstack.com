"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CountUp — lab-notebook telemetry number that counts up from 0 to a
 * target value the first time it scrolls into view. Tabular numerals
 * preserve width so layout doesn't jump. Respects prefers-reduced-motion
 * by rendering the final value immediately.
 *
 * Accepts either a raw number OR a string like "10,000" so callers can
 * pass the same formatted spec they'd show statically.
 */
export function CountUp({
  value,
  duration = 1200,
  className = "",
}: {
  value: number | string;
  duration?: number;
  className?: string;
}) {
  const target =
    typeof value === "number"
      ? value
      : Number(String(value).replace(/[^0-9.-]/g, "")) || 0;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(() =>
    typeof value === "string" ? value : String(target),
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || !Number.isFinite(target) || target === 0) {
      setDisplay(typeof value === "string" ? value : String(target));
      return;
    }

    let rafId = 0;
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        const current = Math.round(target * eased);
        setDisplay(current.toLocaleString("en-US"));
        if (p < 1) rafId = requestAnimationFrame(tick);
        else
          setDisplay(
            typeof value === "string" ? value : target.toLocaleString("en-US"),
          );
      };
      rafId = requestAnimationFrame(tick);
    };

    // Start hidden at zero so the animation is observable.
    setDisplay("0");

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
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, value]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {display}
    </span>
  );
}
