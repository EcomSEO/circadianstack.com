"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PhaseResponseCurve — a lab-notebook SVG of the circadian phase
 * response curve to light. Peaks around hour 6-9 (morning advance),
 * dips around hour 20-24 (evening delay). When the component scrolls
 * into view, the path draws itself in via stroke-dashoffset.
 *
 * Based on Khalsa 2003 / Duffy & Wright 2005 — decorative but honest
 * to the shape. 24-hour x-axis, amber stroke, slate grid.
 */
export function PhaseResponseCurve({
  className = "",
  height = 140,
  showAxis = true,
}: {
  className?: string;
  height?: number;
  showAxis?: boolean;
}) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 24-hour x axis (0..480), y centred on 70 (range ~30..110).
  // Sine-like curve: peak advance near hour 7, trough delay near hour 22.
  const path =
    "M 0 70 " +
    "C 40 70, 70 35, 140 32 " + // morning peak (advance)
    "S 240 100, 300 108 " + // afternoon crossover descending
    "S 380 118, 420 110 " + // evening trough (delay)
    "S 470 82, 480 70";

  return (
    <svg
      ref={ref}
      viewBox="0 0 480 140"
      width="100%"
      height={height}
      className={className}
      aria-label="Phase response curve to light (Khalsa 2003, Duffy & Wright 2005)"
      role="img"
    >
      <defs>
        <linearGradient id="prcStroke" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#E6A940" stopOpacity="0.3" />
          <stop offset="0.35" stopColor="#E6A940" stopOpacity="1" />
          <stop offset="0.65" stopColor="#5EAFC9" stopOpacity="0.8" />
          <stop offset="1" stopColor="#C97D5E" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {showAxis && (
        <>
          {/* Grid — 6hr tick marks */}
          {[0, 120, 240, 360, 480].map((x) => (
            <line
              key={x}
              x1={x}
              y1={10}
              x2={x}
              y2={130}
              stroke="#1E3047"
              strokeWidth="1"
            />
          ))}
          {/* Baseline — phase shift = 0 */}
          <line
            x1={0}
            y1={70}
            x2={480}
            y2={70}
            stroke="#1E3047"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
          {/* Axis labels */}
          <text x="4" y="20" className="fill-slate" fontSize="8" fontFamily="IBM Plex Mono, monospace" letterSpacing="1.5">
            Advance
          </text>
          <text x="4" y="128" className="fill-slate" fontSize="8" fontFamily="IBM Plex Mono, monospace" letterSpacing="1.5">
            Delay
          </text>
          {[
            { x: 0, label: "00" },
            { x: 120, label: "06" },
            { x: 240, label: "12" },
            { x: 360, label: "18" },
            { x: 470, label: "24" },
          ].map((t) => (
            <text
              key={t.label}
              x={t.x}
              y={138}
              className="fill-slate"
              fontSize="7"
              fontFamily="IBM Plex Mono, monospace"
              letterSpacing="1"
            >
              {t.label}
            </text>
          ))}
        </>
      )}

      <path
        d={path}
        stroke="url(#prcStroke)"
        strokeWidth="1.75"
        fill="none"
        className={`prc-path ${visible ? "is-visible" : ""}`}
        strokeLinecap="round"
      />

      {/* Tick dots: morning peak + evening trough */}
      <circle cx="140" cy="32" r="2.5" fill="#E6A940" opacity={visible ? 1 : 0} style={{ transition: "opacity 0.6s ease 1.6s" }} />
      <circle cx="420" cy="110" r="2.5" fill="#C97D5E" opacity={visible ? 1 : 0} style={{ transition: "opacity 0.6s ease 1.8s" }} />
    </svg>
  );
}
