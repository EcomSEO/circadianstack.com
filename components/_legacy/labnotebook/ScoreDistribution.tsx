/**
 * ScoreDistribution — histogram of the 5 confidence tiers across the
 * indexed protocols. Visible site-wide credibility data: how many
 * protocols are HIGH CONFIDENCE vs PRELIMINARY.
 *
 * Render: 5 stacked vertical bars. Above each bar: count. Below: tier
 * label. Bars are CSS-sized; no charting lib needed.
 *
 * The point: most circadian sites publish bullet lists with no
 * confidence axis. We publish the distribution.
 */
export type Bucket = {
  tier: "HIGH CONFIDENCE" | "STRONG" | "MODERATE" | "LIMITED" | "PRELIMINARY";
  count: number;
};

const TIER_TONE: Record<Bucket["tier"], string> = {
  "HIGH CONFIDENCE": "bg-dawn",
  STRONG: "bg-dawn/70",
  MODERATE: "bg-zenith",
  LIMITED: "bg-ember",
  PRELIMINARY: "bg-slate",
};

export function ScoreDistribution({
  heading,
  caption,
  buckets,
  totalLabel,
  axisLabel,
}: {
  heading: string;
  caption: string;
  buckets: Bucket[];
  totalLabel: string;
  axisLabel: string;
}) {
  const max = Math.max(...buckets.map((b) => b.count), 1);
  const total = buckets.reduce((s, b) => s + b.count, 0);
  return (
    <section
      className="border-b border-rule"
      aria-labelledby="score-distribution-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-12 md:pt-14 pb-12 md:pb-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6">
          <div>
            <div
              id="score-distribution-heading"
              className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn"
            >
              {heading}
            </div>
            <p className="mt-2 max-w-2xl text-paper/75 text-[14.5px] leading-snug">
              {caption}
            </p>
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate tnum-serif">
            {totalLabel}: {total}
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-4 md:gap-6">
          {/* Y-axis tick marks */}
          <div className="hidden md:flex flex-col justify-between text-right font-mono text-[10px] tracking-[0.18em] uppercase text-slate h-[180px] py-1">
            <span>{max}</span>
            <span>{Math.round(max / 2)}</span>
            <span>0</span>
          </div>

          <div className="flex items-end gap-2 md:gap-4 h-[180px] border-b border-rule">
            {buckets.map((b) => {
              const pct = (b.count / max) * 100;
              return (
                <div
                  key={b.tier}
                  className="flex-1 flex flex-col items-center justify-end h-full gap-1.5"
                >
                  <span className="font-mono text-[12px] tnum-serif text-paper">
                    {b.count}
                  </span>
                  <div
                    className={`w-full ${TIER_TONE[b.tier]} border-t border-l border-r border-rule`}
                    style={{ height: `${Math.max(pct, 2)}%` }}
                    aria-label={`${b.tier} ${b.count}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 md:gap-4 pl-0 md:pl-[calc(1.25rem+1rem)]">
          {buckets.map((b) => (
            <div
              key={b.tier}
              className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-slate text-center leading-tight"
            >
              {b.tier}
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate">
          {axisLabel}
        </p>
      </div>
    </section>
  );
}
