/**
 * ResearchLog — vertical feed of `[YYYY-MM-DD HH:MM] indexed: ...` style
 * entries, rendered as a monospace log. Replaces the generic "what we
 * are researching now" pipeline teaser.
 *
 * Each line has: amber bullet, monospace timestamp, action verb (indexed
 * / queued / refreshed / drafted / reviewed), then the protocol slug or
 * title. Looks like a tail -f, reads like a changelog.
 */
export type LogEntry = {
  ts: string;
  action: "INDEXED" | "QUEUED" | "REFRESHED" | "DRAFTED" | "REVIEWED" | "FLAGGED";
  body: string;
};

const ACTION_TONE: Record<LogEntry["action"], string> = {
  INDEXED: "text-dawn",
  QUEUED: "text-zenith",
  REFRESHED: "text-paper",
  DRAFTED: "text-paper-dim",
  REVIEWED: "text-dawn",
  FLAGGED: "text-ember",
};

export function ResearchLog({
  heading,
  caption,
  entries,
  footerNote,
}: {
  heading: string;
  caption: string;
  entries: LogEntry[];
  footerNote: string;
}) {
  return (
    <section
      className="border-b border-rule bg-midnight-deep/40"
      aria-labelledby="research-log-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-12 md:pt-14 pb-12 md:pb-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6">
          <div>
            <div
              id="research-log-heading"
              className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn"
            >
              {heading}
            </div>
            <p className="mt-2 max-w-2xl text-paper/75 text-[14.5px] leading-snug">
              {caption}
            </p>
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate flex items-center gap-2">
            <span aria-hidden className="signal-lost !w-1.5 !h-1.5" />
            <span>tail · live</span>
          </div>
        </div>

        <ol className="space-y-2 border-l-2 border-rule pl-4 md:pl-5">
          {entries.map((e, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_auto_1fr] gap-x-3 md:gap-x-5 items-baseline font-mono text-[12.5px] leading-relaxed"
            >
              <span className="text-slate tnum-serif tabular-nums">[{e.ts}]</span>
              <span
                className={`${ACTION_TONE[e.action]} tracking-[0.18em] uppercase text-[10.5px]`}
              >
                {e.action}
              </span>
              <span className="text-paper/85">{e.body}</span>
            </li>
          ))}
        </ol>

        <p className="mt-6 font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate">
          {footerNote}
        </p>
      </div>
    </section>
  );
}
