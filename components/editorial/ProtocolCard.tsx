import type { Post } from "@/lib/content/posts";
import { RankNumeral } from "./RankNumeral";

/**
 * ProtocolCard — CircadianStack's signature artifact.
 *
 * 5 sections: Input / Dose / Expected output / Evidence / Failure modes.
 * Dark midnight surface, amber accent rail on the left edge, monospace
 * labels, tabular numerals in the values. Screenshot-friendly at
 * ~1200×630 (Twitter-card ready).
 *
 * Accepts either a full Post (pulls .protocolCard) or explicit data via
 * the `card` prop so callers can render protocols inline without a post.
 */

type ProtocolCardData = {
  input: string;
  dose: string;
  expectedOutput: string;
  evidence: string;
  failureModes: string;
};

export function ProtocolCard({
  post,
  card,
  title,
  variant = "default",
}: {
  post?: Post;
  card?: ProtocolCardData;
  title?: string;
  variant?: "default" | "featured";
}) {
  const data: ProtocolCardData | undefined = card ?? post?.protocolCard;
  if (!data) return null;
  const displayTitle =
    title ?? (post ? `${post.h1} — Protocol Card` : "Protocol Card");

  const rows: Array<{
    n: number;
    label: string;
    value: string;
    mono?: boolean;
  }> = [
    { n: 1, label: "Input", value: data.input },
    { n: 2, label: "Dose", value: data.dose, mono: true },
    { n: 3, label: "Expected output", value: data.expectedOutput },
    { n: 4, label: "Evidence", value: data.evidence, mono: true },
    { n: 5, label: "Failure modes", value: data.failureModes },
  ];

  const outerClass =
    variant === "featured"
      ? "protocol-card shadow-card"
      : "protocol-card";

  return (
    <aside
      className={`${outerClass} my-8`}
      aria-label="Protocol card"
      data-protocol-card
    >
      {/* Header strip — dateline-adjacent, monospace */}
      <header className="flex items-center justify-between gap-4 px-6 md:px-8 pt-5 pb-4 border-b border-rule">
        <div className="flex items-center gap-3 min-w-0">
          <span className="h-1.5 w-1.5 rounded-full bg-dawn shrink-0" />
          <span className="caps-label text-dawn tracking-[0.2em]">
            Protocol Card
          </span>
          <span aria-hidden className="text-rule">·</span>
          <span className="font-serif text-paper text-lg md:text-xl leading-tight truncate">
            {displayTitle}
          </span>
        </div>
        <span className="caps-label text-slate hidden sm:inline shrink-0 tnum">
          5 / 5
        </span>
      </header>

      {/* Five sections */}
      <dl className="divide-y divide-rule">
        {rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_160px_1fr] gap-4 md:gap-6 px-6 md:px-8 py-4 md:py-5"
          >
            <span className="tnum text-dawn text-sm pt-0.5 hidden md:inline">
              {String(r.n).padStart(2, "0")}
            </span>
            <div className="col-span-1 md:col-auto">
              <span className="caps-label text-dawn">
                <span className="tnum text-dawn text-[10px] mr-2 md:hidden">
                  {String(r.n).padStart(2, "0")}
                </span>
                {r.label}
              </span>
            </div>
            <dd
              className={`text-paper/90 leading-relaxed ${
                r.mono ? "font-mono text-[14.5px] tnum-serif" : "text-[15.5px]"
              }`}
            >
              {r.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Footer stamp — attribution, echoes lab-notebook */}
      <footer className="flex items-center justify-between gap-3 px-6 md:px-8 py-3 bg-midnight-deep/50 border-t border-rule">
        <span className="caps-label text-slate">
          CircadianStack · The science of when
        </span>
        <span className="caps-label text-slate hidden sm:inline">
          circadianstack.com
        </span>
      </footer>
    </aside>
  );
}

/**
 * Small helper: render a numeric step header for a Protocol card-style
 * section outside the card (useful in pillar bodies).
 */
export function ProtocolStepHeader({
  n,
  title,
}: {
  n: number;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4 mt-10 mb-4">
      <RankNumeral n={n} className="!text-2xl" />
      <h3 className="font-serif text-xl md:text-2xl text-paper leading-tight">
        {title}
      </h3>
    </div>
  );
}
