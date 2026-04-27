import { Link } from "@/i18n/navigation";

/**
 * PhaseAxis — horizontal phase-of-day strip. Six tiles, each one a
 * phase of the circadian day with a count of indexed protocols and the
 * top-rated entry. NOTHING ELSE on the network has this — it is the
 * domain-unique navigational primitive.
 *
 * Order is left-to-right wall-clock: DAWN → MORNING → MIDDAY → AFTERNOON
 * → EVENING → NIGHT. Each tile shows a clock window, a protocol count,
 * and the leading protocol slug for that phase.
 */
export type PhaseTile = {
  phase: string;
  window: string; // e.g. "05:00–07:30"
  count: number;
  topProtocolTitle: string;
  topProtocolHref: string;
  hubHref: string;
};

export function PhaseAxis({
  heading,
  caption,
  tiles,
  topLabel,
}: {
  heading: string;
  caption: string;
  tiles: PhaseTile[];
  topLabel: string;
}) {
  return (
    <section
      id="phases"
      className="border-b border-rule"
      aria-labelledby="phase-axis-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-12 md:pt-14 pb-12 md:pb-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6">
          <div>
            <div
              id="phase-axis-heading"
              className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn"
            >
              {heading}
            </div>
            <p className="mt-2 max-w-2xl text-paper/75 text-[14.5px] leading-snug">
              {caption}
            </p>
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate">
            00:00 – 24:00
          </div>
        </div>

        {/* Sun-arc rail above the strip — purely indicative */}
        <div className="relative mb-2 h-3 hidden md:block" aria-hidden>
          <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <path
              d="M 0 22 Q 600 -28 1200 22"
              stroke="#E6A940"
              strokeWidth="1"
              fill="none"
              strokeDasharray="2 5"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 border-t border-l border-rule">
          {tiles.map((t, i) => (
            <article
              key={t.phase}
              className="border-r border-b border-rule px-3 md:px-4 py-4 md:py-5 group flex flex-col gap-3 hover:bg-midnight-raised transition-colors"
              aria-label={`${t.phase} ${t.window}`}
            >
              <header className="flex items-baseline justify-between gap-2">
                <span
                  className={`font-mono text-[11px] tracking-[0.2em] uppercase ${
                    i === 0
                      ? "text-ember"
                      : i === 1
                      ? "text-dawn"
                      : i === 2
                      ? "text-paper"
                      : i === 3
                      ? "text-paper-dim"
                      : i === 4
                      ? "text-zenith"
                      : "text-slate"
                  }`}
                >
                  {t.phase}
                </span>
                <span className="font-mono tnum text-paper text-[18px] md:text-[20px] leading-none">
                  {String(t.count).padStart(2, "0")}
                </span>
              </header>
              <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate tnum-serif">
                {t.window}
              </div>
              <div className="mt-1">
                <div className="font-mono text-[9.5px] tracking-[0.22em] uppercase text-slate mb-1">
                  {topLabel}
                </div>
                <Link
                  href={t.topProtocolHref}
                  className="text-paper/90 group-hover:text-dawn transition-colors text-[13px] leading-snug block"
                >
                  <span aria-hidden className="text-dawn mr-1">→</span>
                  <span className="line-clamp-2">{t.topProtocolTitle}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
