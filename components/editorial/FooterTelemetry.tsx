"use client";

import { useEffect, useState } from "react";

/**
 * FooterTelemetry — the tiny live-updating imprint line:
 *
 *   LOCAL TIME · 03:42:17 · HOUR 03/24
 *
 * Monospace caps, amber tint. Ticks once per second. Freezes under
 * prefers-reduced-motion. First paint is a stable dash so SSR/CSR
 * markup match.
 */
export function FooterTelemetry({ className = "" }: { className?: string }) {
  const [stamp, setStamp] = useState<string>("--:--:--");
  const [hour, setHour] = useState<string>("--");

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      setStamp(`${hh}:${mm}:${ss}`);
      setHour(hh);
    };
    tick();
    if (prefersReduced) return;
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      className={`font-mono text-[11px] tracking-[0.18em] uppercase text-dawn/75 ${className}`}
      title="Local observatory time"
    >
      <span className="text-slate">Local time</span>
      <span aria-hidden className="text-rule mx-2">·</span>
      <span className="tnum">{stamp}</span>
      <span aria-hidden className="text-rule mx-2">·</span>
      <span className="text-slate">Hour</span>
      <span className="tnum ml-1.5">{hour}/24</span>
    </span>
  );
}
