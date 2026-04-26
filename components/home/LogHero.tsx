import { Link } from "@/i18n/navigation";

/**
 * LogHero — terminal/lab-notebook hero. Replaces the centered serif
 * "The lux, the timing, the research." headline + huge rounded search.
 *
 * Anatomy:
 *   1. `> currently_indexing/` terminal prompt with a rolling line of
 *      the latest research entry (static for SSR, no fake animation).
 *   2. Stark monospace tagline: "47 protocols, 5 evidence dimensions,
 *      0 vendor links."
 *   3. NO search box (it's in the header).
 *   4. A four-up status grid: PROTOCOLS / IN RESEARCH / DIMENSIONS /
 *      LAST INDEXED — all monospace numbers. Bloomberg Terminal vibe.
 *
 * No big serif H1, no centered amber pill, no rounded search input.
 */
export function LogHero({
  prompt,
  latestEntry,
  tagline,
  statProtocols,
  statResearch,
  statDimensions,
  statIndexed,
  labelProtocols,
  labelResearch,
  labelDimensions,
  labelIndexed,
  ctaIndex,
  ctaPipeline,
}: {
  prompt: string;
  latestEntry: string;
  tagline: string;
  statProtocols: string;
  statResearch: string;
  statDimensions: string;
  statIndexed: string;
  labelProtocols: string;
  labelResearch: string;
  labelDimensions: string;
  labelIndexed: string;
  ctaIndex: string;
  ctaPipeline: string;
}) {
  return (
    <section className="relative border-b border-rule bg-midnight">
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-14 pb-10 md:pb-12">
        {/* 1. Terminal prompt with the latest indexed entry */}
        <div className="font-mono text-[12px] md:text-[13px] tracking-wide text-slate flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-dawn">{">"}</span>
          <span className="text-paper/60">{prompt}</span>
          <span className="text-paper/85 truncate max-w-full md:max-w-[60ch]">
            {latestEntry}
          </span>
          <span aria-hidden className="inline-block w-2 h-3.5 align-baseline bg-dawn animate-pulse" />
        </div>

        {/* 2. Big monospace tagline — counts the receipts */}
        <h1
          className="mt-6 md:mt-8 max-w-4xl text-paper font-mono font-medium leading-[1.12] tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.625rem)" }}
        >
          {tagline}
        </h1>

        {/* 3. Status grid — four mono cells, hairline rules */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 border-t border-l border-rule">
          <StatCell value={statProtocols} label={labelProtocols} accent="dawn" />
          <StatCell value={statResearch} label={labelResearch} accent="zenith" />
          <StatCell value={statDimensions} label={labelDimensions} accent="paper" />
          <StatCell value={statIndexed} label={labelIndexed} accent="slate" />
        </div>

        {/* 4. Two utility links — no big rounded buttons */}
        <div className="mt-6 md:mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11.5px] tracking-[0.18em] uppercase">
          <Link href="/" className="text-dawn hover:text-paper transition-colors">
            <span aria-hidden className="mr-2">↳</span>
            {ctaIndex}
          </Link>
          <Link href="/pipeline" className="text-paper/70 hover:text-dawn transition-colors">
            <span aria-hidden className="mr-2">↳</span>
            {ctaPipeline}
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatCell({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: "dawn" | "zenith" | "paper" | "slate";
}) {
  const valueColor =
    accent === "dawn"
      ? "text-dawn"
      : accent === "zenith"
      ? "text-zenith"
      : accent === "slate"
      ? "text-slate"
      : "text-paper";
  return (
    <div className="border-r border-b border-rule px-4 md:px-5 py-4">
      <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate">
        {label}
      </div>
      <div
        className={`mt-1 font-mono ${valueColor} tnum-serif`}
        style={{
          fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </div>
    </div>
  );
}
