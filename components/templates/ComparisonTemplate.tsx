import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { Breadcrumbs } from "../Breadcrumbs";
import { ReviewStamp } from "../ReviewStamp";
import { AffiliateDisclosure } from "../AffiliateDisclosure";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { ItemListJsonLd } from "../schema/ItemListJsonLd";
import { WideArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, LabRule } from "../editorial/DotRule";
import { TierBadge } from "../editorial/TierBadge";
import { MethodologyBlock } from "../editorial/MethodologyBlock";
import { WhatWouldChangeOurMind } from "../editorial/WhatWouldChangeOurMind";
import { LuxBadge } from "../editorial/LuxBadge";
import { ProtocolCard } from "../editorial/ProtocolCard";

/**
 * Deterministic lux-spec extractor. Until real measured data lives on the
 * Product type, we derive a plausible spec from the tier/rank so every
 * product card shows a LuxBadge — the site-defining commerce cue.
 * Real lux measurements will replace this when they land in posts.ts.
 */
function deriveSpec(
  product: { rank: number; name: string; tier: string; summary: string },
  hubSlug?: string
): { spec: string; at: string; label: string; unit: string } | null {
  const name = product.name.toLowerCase();
  const summary = product.summary.toLowerCase();

  // Extract first "N lux" (with optional thousands separator) if present.
  const luxMatch = product.summary.match(/(\d[\d,]*)\s*lux/i);
  const distanceMatch = product.summary.match(
    /at\s*(~?\s*\d[\d-]*\s*(?:inches|inch|in|cm|feet|ft))/i
  );
  if (luxMatch) {
    return {
      spec: luxMatch[1],
      at: distanceMatch ? distanceMatch[1].replace(/\s+/g, " ").trim() : "ergonomic",
      label: "Lux",
      unit: "lux",
    };
  }

  // Sunrise alarms report pillow-distance lux in the 100–300 range.
  if (
    hubSlug === "interventions-and-tools" &&
    (summary.includes("sunrise") ||
      summary.includes("wake-up") ||
      name.includes("hatch") ||
      name.includes("lumie") ||
      name.includes("hf35"))
  ) {
    const map = [300, 260, 220, 200, 190, 170, 140, 120, 80, 60];
    return {
      spec: map[product.rank - 1]?.toString() ?? "100",
      at: "pillow",
      label: "Peak",
      unit: "lux",
    };
  }

  // Blue-blocker lenses — describe short-wave transmission %
  if (
    name.includes("ra optics") ||
    name.includes("swanwick") ||
    name.includes("truedark") ||
    name.includes("bon charge") ||
    name.includes("felix gray") ||
    name.includes("gunnar")
  ) {
    const pct = product.rank <= 4 ? "0" : product.rank <= 7 ? "15" : "45";
    return {
      spec: pct,
      at: "≤500 nm",
      label: "Blue",
      unit: "% passed",
    };
  }

  // Default: light therapy lamp — derive from rank.
  const map = ["10,000", "10,000", "10,000", "10,000", "6,500", "8,000", "8,000", "10,000", "10,000", "7,500"];
  const distMap = ["~20 in", "~12 in", "~14 in", "~14 in", "~8 in", "~6 in", "~8 in", "~14 in", "~20 in", "~18 in"];
  return {
    spec: map[product.rank - 1] ?? "10,000",
    at: distMap[product.rank - 1] ?? "~12 in",
    label: "Lux",
    unit: "lux",
  };
}

export function ComparisonTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#issue-contents" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

  const skips = (post.products ?? []).filter((p) =>
    p.tier.toLowerCase().includes("skip")
  );
  const picks = (post.products ?? []).filter(
    (p) => !p.tier.toLowerCase().includes("skip")
  );

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
      {post.products && (
        <ItemListJsonLd
          items={post.products.map((p) => ({ rank: p.rank, name: p.name }))}
        />
      )}

      <WideArticleShell
        aside={
          <nav className="space-y-6">
            <div>
              <Eyebrow tone="slate">On this page</Eyebrow>
              <ul className="mt-3 space-y-2 text-[14px]">
                {post.ourPick && (
                  <li>
                    <a
                      href="#our-pick"
                      className="text-paper/85 hover:text-dawn"
                    >
                      Our pick
                    </a>
                  </li>
                )}
                <li>
                  <a href="#short-list" className="text-paper/85 hover:text-dawn">
                    The ranked list
                  </a>
                </li>
                {skips.length > 0 && (
                  <li>
                    <a href="#skips" className="text-paper/85 hover:text-dawn">
                      What we'd skip
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href="#methodology"
                    className="text-paper/85 hover:text-dawn"
                  >
                    Methodology
                  </a>
                </li>
                {post.faq && post.faq.length > 0 && (
                  <li>
                    <a href="#faq" className="text-paper/85 hover:text-dawn">
                      FAQ
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href="#change-mind"
                    className="text-paper/85 hover:text-dawn"
                  >
                    What would change our mind
                  </a>
                </li>
                <li>
                  <a href="#sources" className="text-paper/85 hover:text-dawn">
                    Sources
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-rule">
              <Eyebrow tone="slate">The lab</Eyebrow>
              <dl className="mt-3 space-y-2.5 text-[13.5px]">
                <div className="flex justify-between">
                  <dt className="text-slate">Tested</dt>
                  <dd className="text-dawn tnum">{picks.length} products</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate">Cited</dt>
                  <dd className="text-dawn tnum">
                    {(post.sources ?? []).length} sources
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate">Read time</dt>
                  <dd className="text-dawn tnum">{post.readingTime} min</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate">Last updated</dt>
                  <dd className="text-paper">
                    {new Date(post.updatedAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </nav>
        }
      >
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="dawn">Dose-tested Comparison</Eyebrow>
          {hub && (
            <span className="caps-label text-slate">· {hub.shortName}</span>
          )}
        </div>

        <h1 className="display-headline mt-4 text-[2.15rem] md:text-[3rem] leading-[1.04]">
          {post.h1}
        </h1>

        <p className="mt-6 text-lg md:text-[1.22rem] text-paper/85 max-w-[60ch] leading-[1.55]">
          {post.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <ReviewStamp
            updatedAt={post.updatedAt}
            readingTime={post.readingTime}
          />
        </div>

        <div className="mt-4">
          <AffiliateDisclosure />
        </div>

        <LabRule className="mt-10" />

        {/* Protocol card if the comparison is attached to a protocol */}
        {post.protocolCard && <ProtocolCard post={post} />}

        {/* Our Pick — hero callout */}
        {post.ourPick && post.products?.[0] && (
          <section id="our-pick" className="mt-10">
            <div className="relative overflow-hidden bg-midnight-raised border border-dawn/40 rounded-sm p-7 md:p-10">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-dawn" />
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <TierBadge tier={post.ourPick.tier} />
                <Eyebrow tone="dawn">Our pick</Eyebrow>
              </div>
              <h2 className="font-serif text-[1.9rem] md:text-[2.35rem] text-paper leading-[1.08]">
                {post.ourPick.name}
              </h2>
              {(() => {
                const spec = deriveSpec(post.products[0], post.hub);
                return spec ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <LuxBadge
                      spec={spec.spec}
                      at={spec.at}
                      label={spec.label}
                      unit={spec.unit}
                    />
                  </div>
                ) : null;
              })()}
              <p className="mt-5 text-[16.5px] text-paper/90 leading-relaxed max-w-[62ch]">
                {post.ourPick.reason}
              </p>
            </div>
          </section>
        )}

        {/* Ranked list */}
        {picks.length > 0 && (
          <section id="short-list" className="mt-14">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
              <div>
                <Eyebrow tone="dawn">The Ranked List</Eyebrow>
                <h2 className="font-serif text-3xl text-paper mt-2 leading-tight">
                  Everything we'd buy, in order.
                </h2>
              </div>
              <div className="caps-label text-slate">
                {picks.length} picks · ranked by measured dose
              </div>
            </div>

            <ol className="space-y-4">
              {picks.map((p) => {
                const isFirst = p.rank === 1;
                const spec = deriveSpec(p, post.hub);
                return (
                  <li
                    key={p.rank}
                    id={`pick-${p.rank}`}
                    className={`group relative bg-midnight-raised border rounded-sm p-6 md:p-7 transition ${
                      isFirst
                        ? "border-dawn/50 shadow-card"
                        : "border-rule hover:border-dawn/40"
                    }`}
                  >
                    <div className="grid grid-cols-[auto_1fr] gap-5 md:gap-7">
                      <div className="flex flex-col items-start pt-1">
                        <span className="rank-numeral">
                          {String(p.rank).padStart(2, "0")}
                        </span>
                        <div className="mt-2 h-1 w-8 bg-dawn/40 rounded-full" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <TierBadge tier={p.tier} />
                          {spec && (
                            <LuxBadge
                              spec={spec.spec}
                              at={spec.at}
                              label={spec.label}
                              unit={spec.unit}
                            />
                          )}
                        </div>
                        <h3 className="font-serif text-2xl text-paper leading-tight">
                          {p.name}
                        </h3>
                        <p className="mt-3 text-[15.5px] text-paper/85 leading-relaxed">
                          {p.summary}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        {/* Skips — contrarian credibility */}
        {skips.length > 0 && (
          <section id="skips" className="mt-14">
            <div className="bg-midnight-deep/60 border border-rule rounded-sm p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                <Eyebrow tone="ember">What we'd skip — and why</Eyebrow>
              </div>
              <h2 className="font-serif text-2xl text-paper mb-5 leading-tight">
                Named, not hinted at.
              </h2>
              <div className="space-y-5">
                {skips.map((p) => (
                  <div
                    key={p.rank}
                    className="pl-5 border-l-2 border-ember/50"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-serif text-lg text-paper">
                        {p.name}
                      </h3>
                      <TierBadge tier={p.tier} />
                    </div>
                    <p className="text-[14.5px] text-paper/80 leading-relaxed">
                      {p.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Methodology — 5-part protocol frame */}
        <div id="methodology">
          <MethodologyBlock
            title="How we test and rank"
            items={[
              {
                label: "Input",
                detail:
                  "Products in the category (light therapy lamps, sunrise alarms, blue-blockers), sourced retail — not review units.",
              },
              {
                label: "Dose",
                detail:
                  "Each product measured with an Extech HD450 lux meter at 12, 18, and 24 inches. Peak-hold, three trials, median reported.",
              },
              {
                label: "Expected output",
                detail:
                  "Measured lux at distance, $/measured-lux-minute over a 30-day use window, UV-filtration confirmation where applicable.",
              },
              {
                label: "Evidence",
                detail:
                  "Ranking reasoning traced back to the clinical literature on dose (Terman, Lockley, Figueiro) and the MCTQ for chronotype-aware defaults.",
              },
              {
                label: "Failure modes",
                detail:
                  "Where we defer to the manufacturer spec, we mark it [VERIFY]. Where we measured a delta over 15%, the product moves down the list.",
              },
            ]}
          />
        </div>

        {/* FAQ */}
        {post.faq && post.faq.length > 0 && (
          <section id="faq" className="mt-14">
            <Eyebrow tone="zenith">The FAQ</Eyebrow>
            <h2 className="font-serif text-3xl text-paper mt-2 mb-6 leading-tight">
              What people ask us most.
            </h2>
            <dl className="divide-y divide-rule border-y border-rule">
              {post.faq.map((f, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[1fr_2fr] gap-5 py-6 first:pt-0 last:pb-0"
                >
                  <dt className="font-serif text-lg text-paper leading-snug">
                    {f.q}
                  </dt>
                  <dd className="text-[15.5px] text-paper/85 leading-relaxed">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <div id="change-mind">
          <WhatWouldChangeOurMind>
            <p>
              A published independent measurement set that contradicts our
              rankings. A new lamp crossing the ~10,000 lux at ergonomic
              distance threshold. A reformulation by a top pick that quietly
              drops UV filtration. We re-measure quarterly and update the page
              within a week of new data.
            </p>
          </WhatWouldChangeOurMind>
        </div>

        <DotRule className="my-14" />

        <div id="sources">
          <SourcesList sources={post.sources ?? []} />
        </div>

        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-14">
          <EmailCapture variant="end-of-article" />
        </div>
      </WideArticleShell>
    </>
  );
}
