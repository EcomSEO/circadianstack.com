/**
 * StackScore — circadianstack's confidence score for a chronobiology
 * protocol. NOT a product-quality rating.
 *
 * Composition (5 weighted dimensions, sum to 100%):
 *   - Trial strength          35%
 *   - Mechanism plausibility  20%
 *   - Reproducibility         15%
 *   - Practicality            15%
 *   - Safety                  15%
 *
 * Tier mapping:
 *    90-100  HIGH CONFIDENCE
 *    80-89   STRONG
 *    70-79   MODERATE
 *    60-69   LIMITED
 *     0-59   PRELIMINARY
 *
 * Render — redesigned from a single big number to a horizontal data
 * strip: header line carries the score + tier; below it, five labelled
 * mini-bars per dimension. Reads like a sparkline, not a sticker badge.
 */

export type StackDimensions = {
  trialStrength: number;
  mechanismPlausibility: number;
  reproducibility: number;
  practicality: number;
  safety: number;
};

export const STACK_WEIGHTS = {
  trialStrength: 0.35,
  mechanismPlausibility: 0.2,
  reproducibility: 0.15,
  practicality: 0.15,
  safety: 0.15,
} as const;

export type StackTier =
  | "HIGH CONFIDENCE"
  | "STRONG"
  | "MODERATE"
  | "LIMITED"
  | "PRELIMINARY";

export function computeStackScore(d: StackDimensions): number {
  const raw =
    d.trialStrength * STACK_WEIGHTS.trialStrength +
    d.mechanismPlausibility * STACK_WEIGHTS.mechanismPlausibility +
    d.reproducibility * STACK_WEIGHTS.reproducibility +
    d.practicality * STACK_WEIGHTS.practicality +
    d.safety * STACK_WEIGHTS.safety;
  return Math.round(Math.max(0, Math.min(100, raw)));
}

export function tierFor(score: number): StackTier {
  if (score >= 90) return "HIGH CONFIDENCE";
  if (score >= 80) return "STRONG";
  if (score >= 70) return "MODERATE";
  if (score >= 60) return "LIMITED";
  return "PRELIMINARY";
}

const TIER_TONE: Record<
  StackTier,
  { fg: string; bar: string }
> = {
  "HIGH CONFIDENCE": { fg: "text-dawn", bar: "bg-dawn" },
  STRONG: { fg: "text-dawn", bar: "bg-dawn/80" },
  MODERATE: { fg: "text-zenith", bar: "bg-zenith" },
  LIMITED: { fg: "text-ember", bar: "bg-ember" },
  PRELIMINARY: { fg: "text-slate", bar: "bg-slate" },
};

type Props = {
  score?: number;
  dimensions?: StackDimensions;
  size?: "sm" | "lg";
  showLabel?: boolean;
  className?: string;
};

const DIM_LABELS: Array<keyof StackDimensions> = [
  "trialStrength",
  "mechanismPlausibility",
  "reproducibility",
  "practicality",
  "safety",
];

const DIM_SHORT: Record<keyof StackDimensions, string> = {
  trialStrength: "TRIAL",
  mechanismPlausibility: "MECH",
  reproducibility: "REPRO",
  practicality: "PRAC",
  safety: "SAFE",
};

export function StackScore({
  score,
  dimensions,
  size = "sm",
  showLabel = true,
  className = "",
}: Props) {
  const value =
    typeof score === "number"
      ? score
      : dimensions
      ? computeStackScore(dimensions)
      : 0;
  const tier = tierFor(value);
  const tone = TIER_TONE[tier];

  // Compact form — used in lists, tables, related cards. Single mono
  // line: score · tier · five tiny ticks.
  if (size === "sm") {
    return (
      <span
        role="img"
        aria-label={`Stack Score ${value} out of 100, ${tier.toLowerCase()}`}
        className={[
          "inline-flex items-center gap-2 rounded-[2px] px-2 py-1 bg-midnight-deep border border-rule",
          className,
        ].join(" ")}
      >
        <span
          className={`font-mono font-semibold tnum ${tone.fg}`}
          style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums" }}
        >
          {value}
        </span>
        {showLabel && (
          <span
            className={`font-mono tracking-[0.16em] uppercase ${tone.fg}`}
            style={{ fontSize: "9px" }}
          >
            {tier}
          </span>
        )}
        {dimensions && (
          <span aria-hidden className="flex items-end gap-[2px] h-3 ml-1">
            {DIM_LABELS.map((k) => {
              const v = dimensions[k] ?? 0;
              return (
                <span
                  key={k}
                  className={`w-[3px] ${tone.bar}`}
                  style={{ height: `${Math.max(v, 6)}%` }}
                />
              );
            })}
          </span>
        )}
      </span>
    );
  }

  // Large form — used at the top of pillars / protocol pages. Header
  // line + 5 mini-bars with labels.
  return (
    <div
      role="img"
      aria-label={`Stack Score ${value} out of 100, ${tier.toLowerCase()}`}
      className={[
        "rounded-[2px] border border-rule bg-midnight-raised/60 px-4 md:px-5 py-4 w-full max-w-md",
        className,
      ].join(" ")}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate">
          STACK SCORE
        </span>
        <span aria-hidden className="text-rule">·</span>
        <span
          className={`font-mono font-semibold tnum ${tone.fg}`}
          style={{ fontSize: "26px", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}
        >
          {value}
        </span>
        <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate">
          / 100
        </span>
        <span aria-hidden className="text-rule">·</span>
        <span
          className={`font-mono tracking-[0.18em] uppercase ${tone.fg}`}
          style={{ fontSize: "10px" }}
        >
          {tier}
        </span>
      </div>

      {dimensions && (
        <div className="mt-4 grid grid-cols-5 gap-2">
          {DIM_LABELS.map((k) => {
            const v = dimensions[k] ?? 0;
            return (
              <div key={k} className="flex flex-col gap-1">
                <div className="h-8 bg-midnight-deep border border-rule rounded-[1px] flex items-end overflow-hidden">
                  <div
                    className={`w-full ${tone.bar}`}
                    style={{ height: `${Math.max(v, 4)}%` }}
                    aria-hidden
                  />
                </div>
                <div className="font-mono text-[8.5px] tracking-[0.16em] uppercase text-slate text-center">
                  {DIM_SHORT[k]}
                </div>
                <div className="font-mono text-[10px] tnum text-paper/85 text-center">
                  {v}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
