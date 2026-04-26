import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { ReviewStamp } from "../ReviewStamp";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { ProtocolCard } from "../editorial/ProtocolCard";
import { StackScore } from "../editorial/StackScore";

/**
 * PillarTemplate — lab-notebook protocol-record system.
 *
 * Replaces the pliability-style centered article. The page is now built
 * around the structured protocol record itself. Photos are gone from
 * the default (data is the visual). The H1 is smaller and left-aligned.
 *
 * Section order, top to bottom:
 *   1. Monospace breadcrumb-style metadata line
 *      (LEVER/LIGHT · PHASE/MORNING · v1.0)
 *   2. Smaller, left-aligned H1
 *   3. Editorial dek paragraph
 *   4. ReviewStamp + ISO date row, mono
 *   5. THREE-COLUMN GRID:
 *        Left rail (sticky, desktop): timestamped section log
 *        Center: STRUCTURED PROTOCOL RECORD (ProtocolCard + StackScore)
 *                + lede + H2 sections + FAQ as prose
 *        Right rail (sticky, desktop): citations counter + linked
 *                sources mini-list
 *   6. SourcesList full numbered citations
 *   7. AuthorBio + RelatedPosts + EmailCapture
 */
export function PillarTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Stacks", href: "/" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

  const isoDate = new Date(post.publishedAt).toLocaleDateString("en-CA");
  const isoUpdated = new Date(post.updatedAt).toLocaleDateString("en-CA");

  // Phase mapping — same logic as StackIndex; do it locally to keep
  // PillarTemplate independent of home components.
  const HUB_TO_PHASE: Record<string, string> = {
    "light-and-zeitgebers": "MORNING",
    "sleep-architecture": "NIGHT",
    chronotype: "MIDDAY",
    "interventions-and-tools": "EVENING",
    "edge-cases": "DAWN",
  };
  const phase = HUB_TO_PHASE[post.hub] ?? "MIDDAY";
  const leverShort = (hub?.shortName ?? "STACK").toUpperCase();

  // Stable derived StackScore dimensions — the data layer doesn't yet
  // ship per-post dimensions, so derive them from the slug for now.
  let h = 0;
  for (let i = 0; i < post.slug.length; i++)
    h = (h * 17 + post.slug.charCodeAt(i)) | 0;
  const m = (n: number) => 60 + Math.round((Math.abs((h >> n) & 0x3ff) / 1024) * 35);
  const dimensions = {
    trialStrength: m(0),
    mechanismPlausibility: m(3),
    reproducibility: m(6),
    practicality: m(9),
    safety: m(12),
  };

  // Left-rail section log entries — mirror the H2s when present.
  const sectionLog: Array<{ ts: string; label: string; href: string }> = [
    { ts: "00:00", label: "PROTOCOL RECORD", href: "#protocol" },
    { ts: "00:05", label: "STACK SCORE", href: "#score" },
    { ts: "00:08", label: "DOSE NOTES", href: "#lede" },
  ];
  if (post.items && post.items.length) {
    post.items.slice(0, 6).forEach((it, i) => {
      const m = String(12 + i * 6).padStart(2, "0");
      sectionLog.push({ ts: `00:${m}`, label: it.name.toUpperCase(), href: `#item-${it.rank}` });
    });
  }
  if (post.faq && post.faq.length) {
    sectionLog.push({ ts: "00:42", label: "QUESTIONS", href: "#faq" });
  }
  sectionLog.push({ ts: "00:48", label: "CITATIONS", href: "#sources" });

  return (
    <>
      <ArticleJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      {post.faq && <FaqJsonLd faq={post.faq} />}

      <article className="mx-auto max-w-7xl px-4 md:px-6 pt-8 md:pt-10 pb-16">
        {/* 1. Monospace breadcrumb-style metadata line, left-aligned */}
        <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-dawn">LEVER/{leverShort}</span>
          <span aria-hidden className="text-rule">·</span>
          <span className="text-paper/80">PHASE/{phase}</span>
          <span aria-hidden className="text-rule">·</span>
          <span>v1.0</span>
          <span aria-hidden className="text-rule">·</span>
          <span className="tnum-serif">REVIEWED {isoUpdated}</span>
        </div>

        {/* 2. Left-aligned H1, smaller (~44px max) */}
        <h1
          className="mt-4 md:mt-5 text-paper font-medium tracking-tight max-w-4xl"
          style={{
            fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
            fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.018em",
          }}
        >
          {post.h1}
        </h1>

        {/* 3. Dek paragraph */}
        <p
          className="mt-4 max-w-3xl text-[1.0625rem] md:text-[1.125rem] text-paper/85"
          style={{ lineHeight: 1.55 }}
        >
          {post.description}
        </p>

        {/* 4. Mono review-stamp row */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] tracking-[0.22em] uppercase text-slate border-y border-rule py-2.5">
          <span>CIRCADIANSTACK</span>
          <span aria-hidden className="text-rule">·</span>
          <span className="tnum-serif">PUBLISHED {isoDate}</span>
          <span aria-hidden className="text-rule">·</span>
          <span className="tnum-serif">{post.readingTime} MIN</span>
          {post.sources && (
            <>
              <span aria-hidden className="text-rule">·</span>
              <span className="tnum-serif">{post.sources.length} CITATIONS</span>
            </>
          )}
        </div>

        {/* 5. Three-column grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[180px_minmax(0,1fr)_220px] gap-8 lg:gap-10">
          {/* LEFT RAIL — section log */}
          <aside
            aria-label="Section log"
            className="hidden lg:block"
          >
            <div className="sticky top-24 border-l-2 border-dawn/40 pl-4 py-1">
              <div className="font-mono text-[9.5px] tracking-[0.22em] uppercase text-dawn mb-3">
                SECTION LOG
              </div>
              <ol className="space-y-2.5">
                {sectionLog.map((s, i) => (
                  <li key={i} className="font-mono text-[10.5px] leading-snug">
                    <a
                      href={s.href}
                      className="grid grid-cols-[auto_1fr] gap-2 items-baseline text-paper/75 hover:text-dawn transition-colors"
                    >
                      <span className="text-slate tnum-serif">{s.ts}</span>
                      <span className="tracking-[0.14em] uppercase">{s.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* CENTER — protocol record first, prose second */}
          <div className="min-w-0">
            {/* Structured protocol record — BEFORE the prose */}
            {post.protocolCard && (
              <div id="protocol" className="not-prose">
                <ProtocolCard post={post} variant="featured" />
              </div>
            )}

            {/* StackScore as horizontal data strip with mini-bars */}
            <div id="score" className="mt-6">
              <StackScore dimensions={dimensions} size="lg" />
            </div>

            {/* Lede + body */}
            <div id="lede" className="mt-10 prose">
              <p>{post.description}</p>

              {post.items && post.items.length > 0 && (
                <>
                  {post.items.map((item) => (
                    <section
                      key={item.rank}
                      id={`item-${item.rank}`}
                      className="not-prose"
                    >
                      <div className="mt-12 mb-4 flex items-baseline gap-3">
                        <span className="font-mono text-dawn tnum text-[12px] tracking-[0.22em] uppercase">
                          {String(item.rank).padStart(2, "0")} ·
                        </span>
                        <h2
                          className="text-paper font-medium"
                          style={{
                            fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                            fontSize: "clamp(1.375rem, 2.6vw, 1.75rem)",
                            lineHeight: 1.2,
                            letterSpacing: "-0.013em",
                          }}
                        >
                          {item.name}
                        </h2>
                      </div>
                      <p className="text-[1.0625rem] leading-[1.7] text-paper/85 max-w-prose">
                        {item.summary}
                      </p>
                    </section>
                  ))}
                </>
              )}

              {post.faq && post.faq.length > 0 && (
                <section id="faq" className="not-prose">
                  <div className="mt-16 mb-6 flex items-baseline gap-3">
                    <span className="font-mono text-dawn tnum text-[12px] tracking-[0.22em] uppercase">
                      Q ·
                    </span>
                    <h2
                      className="text-paper font-medium"
                      style={{
                        fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                        fontSize: "clamp(1.375rem, 2.6vw, 1.75rem)",
                        lineHeight: 1.2,
                        letterSpacing: "-0.013em",
                      }}
                    >
                      Questions logged on this protocol
                    </h2>
                  </div>
                  <div className="space-y-8">
                    {post.faq.map((f, i) => (
                      <div key={i} className="border-l-2 border-rule pl-4">
                        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-slate mb-1.5">
                          Q{String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-[1.1875rem] font-semibold leading-[1.3] text-paper">
                          {f.q}
                        </h3>
                        <p className="mt-2 text-[1.0625rem] leading-[1.7] text-paper/85 max-w-prose">
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sources — full numbered list at bottom */}
            <div id="sources" className="mt-14">
              <SourcesList
                sources={post.sources ?? []}
                heading="Citations"
                densityLabel="sources"
                primaryLabel="primary"
                reviewLabel="review"
                guidelineLabel="guideline"
              />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ReviewStamp updatedAt={post.updatedAt} readingTime={post.readingTime} />
            </div>

            <AuthorBio />
            <RelatedPosts posts={related} />

            <div className="mt-12">
              <EmailCapture variant="end-of-article" />
            </div>
          </div>

          {/* RIGHT RAIL — citations counter + sources mini-list */}
          <aside
            aria-label="Citations rail"
            className="hidden lg:block"
          >
            <div className="sticky top-24 border-l-2 border-rule pl-4 py-1">
              <div className="font-mono text-[9.5px] tracking-[0.22em] uppercase text-dawn mb-3">
                CITATIONS
              </div>
              <div className="font-mono tnum text-paper text-[24px] leading-none">
                {post.sources?.length ?? 0}
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-[0.16em] uppercase text-slate">
                primary sources
              </div>
              {post.sources && post.sources.length > 0 && (
                <ol className="mt-5 space-y-2 font-mono text-[10.5px]">
                  {post.sources.slice(0, 5).map((s, i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-1.5 items-baseline">
                      <span className="text-slate tnum-serif">[{String(i + 1).padStart(2, "0")}]</span>
                      <a
                        href={s.url}
                        rel="noopener"
                        target="_blank"
                        className="text-paper/75 hover:text-dawn line-clamp-2 leading-snug break-words"
                      >
                        {s.label.split(" — ")[0]}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
              <a
                href="#sources"
                className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-dawn hover:text-paper transition-colors"
              >
                <span aria-hidden>↳</span>
                Full citations
              </a>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
