/**
 * StackScore — circadianstack's confidence score for a chronobiology
 * protocol. NOT a product-quality rating.
 *
 * Composition (5 weighted dimensions, sum to 100%):
 *   - Trial strength          35%   Multi-arm RCT + meta-analysis = high; single trial limited = mid; preclinical = low
 *   - Mechanism plausibility  20%   Receptor / photopigment pathway proven = high; hypothetical = low
 *   - Reproducibility         15%   Independent replication exists vs single-trial
 *   - Practicality            15%   Fits a real reader's day vs lab-only
 *   - Safety                  15%   Risk profile well-characterized vs poorly described
 *
 * Tier mapping (circadianstack palette):
 *    90-100  HIGH CONFIDENCE  midnight bg / dawn text
 *    80-89   STRONG           dawn bg / midnight text
 *    70-79   MODERATE         zenith bg / midnight text
 *    60-69   LIMITED          ember bg / midnight text
 *     0-59   PRELIMINARY      slate bg / paper text
 *
 * Render: a squared rectangle (border-radius 2px). IBM Plex Mono numerics,
 * lab-notebook register.
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

const tierStyles: Record<
  StackTier,
  { bg: string; text: string; chip: string }
> = {
  "HIGH CONFIDENCE": {
    bg: "bg-midnight-deep border border-dawn/40",
    text: "text-dawn",
    chip: "text-dawn/80",
  },
  STRONG: {
    bg: "bg-dawn",
    text: "text-midnight",
    chip: "text-midnight/75",
  },
  MODERATE: {
    bg: "bg-zenith",
    text: "text-midnight",
    chip: "text-midnight/75",
  },
  LIMITED: {
    bg: "bg-ember",
    text: "text-midnight",
    chip: "text-midnight/75",
  },
  PRELIMINARY: {
    bg: "bg-slate",
    text: "text-paper",
    chip: "text-paper/80",
  },
};

type Props = {
  score?: number;
  dimensions?: StackDimensions;
  size?: "sm" | "lg";
  showLabel?: boolean;
  className?: string;
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
  const styles = tierStyles[tier];

  if (size === "lg") {
    return (
      <div
        role="img"
        aria-label={`Stack Score ${value} out of 100, ${tier.toLowerCase()}`}
        className={[
          "inline-flex flex-col items-center justify-center",
          "w-[88px] h-[64px] rounded-[2px] px-2",
          styles.bg,
          styles.text,
          className,
        ].join(" ")}
      >
        <span
          className="font-mono font-semibold leading-none tnum-serif"
          style={{ fontSize: "30px", fontVariantNumeric: "tabular-nums" }}
        >
          {value}
        </span>
        {showLabel && (
          <span
            className={[
              "mt-0.5 font-mono font-semibold tracking-[0.14em] uppercase leading-none",
              styles.chip,
            ].join(" ")}
            style={{ fontSize: "8.5px" }}
          >
            {tier}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Stack Score ${value} out of 100, ${tier.toLowerCase()}`}
      className={[
        "inline-flex items-center gap-1.5 rounded-[2px] px-2 py-1",
        styles.bg,
        styles.text,
        className,
      ].join(" ")}
    >
      <span
        className="font-mono font-semibold leading-none"
        style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums" }}
      >
        {value}
      </span>
      {showLabel && (
        <span
          className={[
            "font-mono font-semibold tracking-[0.12em] uppercase leading-none",
            styles.chip,
          ].join(" ")}
          style={{ fontSize: "9px" }}
        >
          {tier}
        </span>
      )}
    </div>
  );
}
