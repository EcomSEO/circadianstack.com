"use client";

import { useEffect, useState } from "react";

/**
 * ProtocolLog — a monospace live timestamp for the masthead.
 *
 * Displays "Protocol Log · HH:MM:SS · UTC" in tracked-out caps. Ticks
 * once per second on the client. If the user prefers reduced motion,
 * the timestamp freezes at its first render (no interval).
 *
 * The first paint is deliberately a stable "--:--:--" so server- and
 * client-rendered markup match — we hydrate the real time on mount.
 */
export function ProtocolLog({
  className = "",
  zone = "UTC",
}: {
  className?: string;
  zone?: "UTC" | "local";
}) {
  const [stamp, setStamp] = useState<string>("--:--:--");
  const [tone, setTone] = useState<"dawn" | "zenith" | "ember">("dawn");

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const tick = () => {
      const d = new Date();
      const hh = String(
        zone === "UTC" ? d.getUTCHours() : d.getHours(),
      ).padStart(2, "0");
      const mm = String(
        zone === "UTC" ? d.getUTCMinutes() : d.getMinutes(),
      ).padStart(2, "0");
      const ss = String(
        zone === "UTC" ? d.getUTCSeconds() : d.getSeconds(),
      ).padStart(2, "0");
      setStamp(`${hh}:${mm}:${ss}`);

      // Chronotype phase tint — the tick color follows the local hour
      const h = d.getHours();
      if (h >= 5 && h < 11) setTone("dawn");
      else if (h >= 11 && h < 20) setTone("zenith");
      else setTone("ember");
    };

    tick();
    if (prefersReduced) return;
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [zone]);

  const toneClass =
    tone === "zenith"
      ? "text-zenith"
      : tone === "ember"
      ? "text-ember"
      : "text-dawn";

  return (
    <span className={`protocol-log ${className}`} title="Observatory clock">
      <span className="text-slate">Protocol Log</span>
      <span aria-hidden className="text-rule mx-2">·</span>
      <span className={`protocol-log__tick ${toneClass}`}>{stamp}</span>
      <span aria-hidden className="text-rule mx-2">·</span>
      <span className="text-slate">{zone}</span>
    </span>
  );
}
