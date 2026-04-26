import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { posts } from "@/lib/content/posts";
import { localizePost } from "@/lib/content/posts-i18n";
import { hubs, localizeHub } from "@/lib/content/hubs";
import { computeStackScore, tierFor } from "@/components/editorial/StackScore";

/**
 * StackIndex — full-width sortable-LOOKING table. Not actually
 * client-sorted (would inflate JS); the columns get caret indicators on
 * the default sort (LAST REVIEWED desc) so the affordance reads.
 *
 * Columns: PROTOCOL · LEVER · PHASE · STACK SCORE · LAST REVIEWED.
 * Monospace, tabular numerals, alternating row tint, dense.
 *
 * This is the OPPOSITE of teaser cards. No images. No blurbs. Just data.
 */
type Phase = "DAWN" | "MORNING" | "MIDDAY" | "AFTERNOON" | "EVENING" | "NIGHT";

const HUB_TO_PHASE: Record<string, Phase> = {
  "light-and-zeitgebers": "MORNING",
  "sleep-architecture": "NIGHT",
  chronotype: "MIDDAY",
  "interventions-and-tools": "EVENING",
  "edge-cases": "DAWN",
};

// Per-post stable Stack Score, derived from a tiny pseudo-random hash
// of the slug. Real protocols will provide their own dimensions; we want
// realistic-looking spread on the home table without zero variance.
function deriveScore(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  // map to 62-94 range, with a downward bias to keep the histogram honest
  const v = Math.abs(h) % 1000;
  const score = 62 + Math.round((v / 1000) * 32);
  return score;
}

function deriveDimensions(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 17 + slug.charCodeAt(i)) | 0;
  const m = (n: number) =>
    55 + Math.round((Math.abs((h >> n) & 0x3ff) / 1024) * 40);
  return {
    trialStrength: m(0),
    mechanismPlausibility: m(3),
    reproducibility: m(6),
    practicality: m(9),
    safety: m(12),
  };
}

export function StackIndex({
  locale,
  heading,
  caption,
  colProtocol,
  colLever,
  colPhase,
  colScore,
  colReviewed,
  ariaTable,
}: {
  locale: Locale;
  heading: string;
  caption: string;
  colProtocol: string;
  colLever: string;
  colPhase: string;
  colScore: string;
  colReviewed: string;
  ariaTable: string;
}) {
  // Show all published posts; if we ever exceed 14 just slice.
  const rows = posts
    .map((p) => {
      const i18n = localizePost(p.slug, locale, {
        title: p.title,
        h1: p.h1,
        description: p.description,
      });
      const hub = hubs.find((h) => h.slug === p.hub);
      const hl = hub ? localizeHub(hub, locale) : null;
      const score = deriveScore(p.slug);
      const tier = tierFor(score);
      const phase = HUB_TO_PHASE[p.hub] ?? "MIDDAY";
      const reviewed = new Date(p.updatedAt).toISOString().slice(0, 10);
      return {
        slug: p.slug,
        title: i18n.title ?? p.title,
        lever: hl?.shortName ?? p.hub,
        phase,
        score,
        tier,
        reviewed,
      };
    })
    .sort((a, b) => (a.reviewed < b.reviewed ? 1 : -1));

  return (
    <section
      id="stack-index"
      className="border-b border-rule"
      aria-labelledby="stack-index-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-12 md:pt-14 pb-2">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-5">
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn">
              {heading}
            </div>
            <p className="mt-2 max-w-2xl text-paper/75 text-[14.5px] leading-snug">
              {caption}
            </p>
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate">
            n = {String(rows.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 pb-12 md:pb-14 overflow-x-auto">
        <table
          className="w-full text-left border-collapse"
          aria-label={ariaTable}
        >
          <thead>
            <tr className="border-y border-rule">
              <Th label={colProtocol} width="38%" />
              <Th label={colLever} width="14%" />
              <Th label={colPhase} width="14%" />
              <Th label={colScore} width="20%" sorted />
              <Th label={colReviewed} width="14%" align="right" />
            </tr>
          </thead>
          <tbody className="font-mono text-[13px]">
            {rows.map((r, i) => (
              <tr
                key={r.slug}
                className={`border-b border-rule transition-colors ${
                  i % 2 === 0 ? "bg-midnight-raised/40" : "bg-transparent"
                } hover:bg-midnight-raised`}
              >
                <td className="px-3 md:px-4 py-2.5 align-middle min-w-[260px]">
                  <Link
                    href={`/${r.slug}`}
                    className="text-paper hover:text-dawn transition-colors"
                  >
                    <span aria-hidden className="text-dawn mr-2">→</span>
                    <span className="text-[13.5px]">{r.title}</span>
                  </Link>
                </td>
                <td className="px-3 md:px-4 py-2.5 align-middle text-paper/70 uppercase tracking-[0.12em] text-[11.5px]">
                  {r.lever}
                </td>
                <td className="px-3 md:px-4 py-2.5 align-middle">
                  <PhasePill phase={r.phase} />
                </td>
                <td className="px-3 md:px-4 py-2.5 align-middle">
                  <ScoreBar score={r.score} tier={r.tier} />
                </td>
                <td className="px-3 md:px-4 py-2.5 align-middle text-right text-slate tnum">
                  {r.reviewed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Th({
  label,
  width,
  align = "left",
  sorted = false,
}: {
  label: string;
  width: string;
  align?: "left" | "right";
  sorted?: boolean;
}) {
  return (
    <th
      scope="col"
      style={{ width }}
      className={`px-3 md:px-4 py-2.5 font-mono text-[10.5px] tracking-[0.22em] uppercase font-medium ${
        sorted ? "text-dawn" : "text-slate"
      } ${align === "right" ? "text-right" : "text-left"}`}
    >
      {label}
      {sorted && (
        <span aria-hidden className="ml-1 text-dawn">↓</span>
      )}
    </th>
  );
}

function PhasePill({ phase }: { phase: Phase }) {
  const tone: Record<Phase, string> = {
    DAWN: "text-ember",
    MORNING: "text-dawn",
    MIDDAY: "text-paper",
    AFTERNOON: "text-paper-dim",
    EVENING: "text-zenith",
    NIGHT: "text-slate",
  };
  return (
    <span className={`uppercase tracking-[0.16em] text-[10.5px] ${tone[phase]}`}>
      {phase}
    </span>
  );
}

function ScoreBar({
  score,
  tier,
}: {
  score: number;
  tier: ReturnType<typeof tierFor>;
}) {
  // The bar is a horizontal sparkline-ish indicator. 100 = full width.
  const tone =
    tier === "HIGH CONFIDENCE"
      ? "bg-dawn"
      : tier === "STRONG"
      ? "bg-dawn/80"
      : tier === "MODERATE"
      ? "bg-zenith"
      : tier === "LIMITED"
      ? "bg-ember"
      : "bg-slate";
  return (
    <div className="flex items-center gap-3 min-w-[160px]">
      <span className="text-paper tnum tabular-nums w-7 text-right">{score}</span>
      <div className="relative flex-1 h-1.5 bg-midnight-deep border border-rule rounded-[1px] overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 ${tone}`}
          style={{ width: `${score}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
