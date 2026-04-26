/**
 * SourcesList — numbered list of primary sources for a protocol page.
 *
 * Re-styled for the lab-notebook system: mono throughout, tabular
 * numerals for the markers, a "citations density" header that reports
 * the count + composition (primary trials vs. reviews vs. guidelines).
 *
 * Heuristic: a label containing "Cochrane", "review", "Sleep Med Rev",
 * "Curr Biol" with "review" semantics, or "AASM" guideline phrasing
 * counts as review/guideline. Everything else is treated as primary.
 * It is a vibe heuristic, not a citation-graph parse — but it is honest
 * enough to render a real-feeling density block.
 */

function classifyDensity(sources: Array<{ label: string; url: string }>) {
  let review = 0;
  let guideline = 0;
  for (const s of sources) {
    const l = s.label.toLowerCase();
    if (
      l.includes("cochrane") ||
      l.includes("aasm") ||
      l.includes("clinical practice guideline") ||
      l.includes("guideline") ||
      l.includes("acp guideline") ||
      l.includes("position")
    ) {
      guideline += 1;
    } else if (
      l.includes("review") ||
      l.includes("sleep med rev") ||
      l.includes("rev,") ||
      l.includes("biol rev")
    ) {
      review += 1;
    }
  }
  const primary = sources.length - review - guideline;
  return { primary, review, guideline };
}

export function SourcesList({
  sources,
  heading,
  densityLabel,
  primaryLabel,
  reviewLabel,
  guidelineLabel,
}: {
  sources: Array<{ label: string; url: string }>;
  heading?: string;
  densityLabel?: string;
  primaryLabel?: string;
  reviewLabel?: string;
  guidelineLabel?: string;
}) {
  if (!sources || sources.length === 0) return null;
  const d = classifyDensity(sources);
  return (
    <section
      id="sources"
      aria-labelledby="sources-heading"
      className="mt-12 pt-8 border-t border-rule"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-4">
        <div>
          <div
            id="sources-heading"
            className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn"
          >
            {heading ?? "Citations"}
          </div>
          <div className="mt-1 font-mono text-[11.5px] tracking-[0.04em] uppercase text-slate tnum-serif">
            {sources.length} {densityLabel ?? "sources"}
            {" · "}
            {d.primary} {primaryLabel ?? "primary"}
            {d.review > 0 ? ` · ${d.review} ${reviewLabel ?? "review"}` : ""}
            {d.guideline > 0
              ? ` · ${d.guideline} ${guidelineLabel ?? "guideline"}`
              : ""}
          </div>
        </div>
      </div>
      <ol className="space-y-2.5 font-mono text-[12.5px]">
        {sources.map((s, i) => (
          <li
            key={i}
            className="grid grid-cols-[2.25rem_1fr] gap-2 items-baseline"
          >
            <span className="text-slate tnum-serif tabular-nums">
              [{String(i + 1).padStart(2, "0")}]
            </span>
            <a
              href={s.url}
              rel="noopener"
              target="_blank"
              className="text-paper/90 hover:text-dawn underline underline-offset-2 decoration-rule hover:decoration-dawn transition leading-relaxed break-words"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
