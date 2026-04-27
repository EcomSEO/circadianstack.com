import { Link } from "@/i18n/navigation";
import type { Post } from "@/lib/content/posts";
import { ProtocolCard } from "@/components/editorial/ProtocolCard";

/**
 * ProtocolOfTheWeek — single full structured protocol record on the
 * home page, rendered with a left-rail timestamp log so the whole thing
 * reads like a notebook entry. NOT a teaser card; the protocol record
 * is fully visible.
 *
 * Anatomy:
 *   - Section header eyebrow
 *   - Two-column grid: timestamp rail (left, mono) + the ProtocolCard
 *     itself (right). The rail has 4-5 log lines that read like an
 *     editor's commit history for this protocol.
 *   - Footer: link to the full pillar, link to the methodology
 */
export function ProtocolOfTheWeek({
  post,
  heading,
  caption,
  log,
  ctaRead,
  ctaMethodology,
}: {
  post: Post;
  heading: string;
  caption: string;
  log: Array<{ ts: string; entry: string }>;
  ctaRead: string;
  ctaMethodology: string;
}) {
  if (!post.protocolCard) return null;
  return (
    <section
      className="border-b border-rule"
      aria-labelledby="potw-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-12 md:pt-14 pb-12 md:pb-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6">
          <div>
            <div
              id="potw-heading"
              className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn"
            >
              {heading}
            </div>
            <p className="mt-2 max-w-2xl text-paper/75 text-[14.5px] leading-snug">
              {caption}
            </p>
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate tnum-serif">
            ENTRY · {new Date(post.updatedAt).toISOString().slice(0, 10)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-0 md:gap-6">
          {/* Left rail — timestamped log entries */}
          <aside
            aria-label="Protocol revision log"
            className="hidden md:block border-l-2 border-dawn/40 pl-4 pr-2 py-2"
          >
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-dawn mb-3">
              REV LOG
            </div>
            <ol className="space-y-3">
              {log.map((l, i) => (
                <li key={i} className="font-mono text-[11px] leading-relaxed">
                  <div className="text-slate tnum-serif">{l.ts}</div>
                  <div className="text-paper/85">{l.entry}</div>
                </li>
              ))}
            </ol>
          </aside>

          {/* Right — the full structured protocol record */}
          <div>
            <ProtocolCard post={post} variant="featured" />
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.18em] uppercase">
              <Link
                href={`/${post.slug}`}
                className="text-dawn hover:text-paper transition-colors"
              >
                <span aria-hidden className="mr-2">↳</span>
                {ctaRead}
              </Link>
              <Link
                href="/methodology"
                className="text-paper/70 hover:text-dawn transition-colors"
              >
                <span aria-hidden className="mr-2">↳</span>
                {ctaMethodology}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
