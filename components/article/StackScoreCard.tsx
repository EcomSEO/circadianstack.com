"use client";

import { useState } from "react";
import {
  computeStackScore,
  tierFor,
  STACK_WEIGHTS,
  type StackDimensions,
  type StackTier,
} from "@/components/editorial/StackScore";

/**
 * StackScoreCard — DIFFERENTIATOR right-rail card.
 *
 * Shows tier label + numeric overall, then five horizontal mini-bars per
 * dimension (Trial 35% / Mechanism 20% / Reproducibility 15% / Practicality
 * 15% / Safety 15%) with amber gradient fill scaled to score. Hovering a
 * row reveals the weight. "How we score →" link to /methodology at the
 * bottom. ~260 px wide.
 */
export function StackScoreCard({
  dimensions,
  className = "",
}: {
  dimensions: StackDimensions;
  className?: string;
}) {
  const value = computeStackScore(dimensions);
  const tier = tierFor(value);
  return (
    <div
      role="img"
      aria-label={`Stack Score ${value} of 100, ${tier}`}
      className={[
        "rounded-md border bg-midnight-raised/70 p-4 md:p-5",
        className,
      ].join(" ")}
      style={{ borderColor: "#2D4A6B" }}
    >
      <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase">
        <span style={{ color: "#A8B5C5" }}>STACK SCORE</span>
        <TierPill tier={tier} />
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span
          className="font-mono tnum-serif font-semibold"
          style={{ fontSize: "40px", lineHeight: 1, color: "#E6A940", fontVariantNumeric: "tabular-nums" }}
        >
          {value}
        </span>
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase" style={{ color: "#A8B5C5" }}>
          / 100
        </span>
      </div>
      <div className="mt-4 space-y-2.5">
        <Row label="Trial strength" weight={STACK_WEIGHTS.trialStrength} value={dimensions.trialStrength} />
        <Row label="Mechanism" weight={STACK_WEIGHTS.mechanismPlausibility} value={dimensions.mechanismPlausibility} />
        <Row label="Reproducibility" weight={STACK_WEIGHTS.reproducibility} value={dimensions.reproducibility} />
        <Row label="Practicality" weight={STACK_WEIGHTS.practicality} value={dimensions.practicality} />
        <Row label="Safety" weight={STACK_WEIGHTS.safety} value={dimensions.safety} />
      </div>
      <a
        href="/methodology"
        className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.18em] uppercase text-dawn hover:text-paper transition-colors"
      >
        How we score
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

function Row({
  label,
  weight,
  value,
}: {
  label: string;
  weight: number;
  value: number;
}) {
  const [hovered, setHovered] = useState(false);
  const pct = Math.max(4, Math.min(100, value));
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      className="cursor-default outline-none focus-visible:ring-1 focus-visible:ring-dawn rounded-sm px-1 -mx-1"
    >
      <div className="flex items-baseline justify-between gap-2 font-mono text-[10px] tracking-[0.16em] uppercase">
        <span style={{ color: "#A8B5C5" }}>{label}</span>
        <span className="tnum-serif" style={{ color: hovered ? "#E6A940" : "#6B7990" }}>
          {hovered ? `${Math.round(weight * 100)}% wt` : value}
        </span>
      </div>
      <div className="mt-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#0F1F33" }}>
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #C8912F 0%, #E6A940 60%, #F2BC5C 100%)",
          }}
        />
      </div>
    </div>
  );
}

const TIER_COLOR: Record<StackTier, { fg: string; bg: string }> = {
  "HIGH CONFIDENCE": { fg: "#E6A940", bg: "rgba(230,169,64,0.15)" },
  STRONG: { fg: "#F2BC5C", bg: "rgba(230,169,64,0.10)" },
  MODERATE: { fg: "#5EAFC9", bg: "rgba(94,175,201,0.12)" },
  LIMITED: { fg: "#C97D5E", bg: "rgba(201,125,94,0.12)" },
  PRELIMINARY: { fg: "#A8B5C5", bg: "rgba(168,181,197,0.10)" },
};

function TierPill({ tier }: { tier: StackTier }) {
  const c = TIER_COLOR[tier];
  return (
    <span
      className="font-mono text-[9px] tracking-[0.18em] uppercase rounded-sm px-1.5 py-0.5"
      style={{ color: c.fg, backgroundColor: c.bg }}
    >
      {tier}
    </span>
  );
}
