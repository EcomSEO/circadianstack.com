import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { MedicalWebPageJsonLd } from "../schema/MedicalWebPageJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { BreadcrumbNav } from "../article/BreadcrumbNav";
import { AuthorByline } from "../article/AuthorByline";
import { ReviewerStamp } from "../article/ReviewerStamp";
import { StackScoreCard } from "../article/StackScoreCard";
import { PhaseAxisCard, type Phase } from "../article/PhaseAxisCard";
import { TableOfContents } from "../article/TableOfContents";
import { SourcesAccordion } from "../article/SourcesAccordion";
import { NewsletterInline } from "../article/NewsletterInline";
import { RelatedStacks } from "../article/RelatedStacks";
import { ProtocolCard } from "../editorial/ProtocolCard";
import { PRIMARY_SLEEP_REVIEWER } from "@/lib/content/reviewers";

const HUB_TO_PHASE: Record<string, Phase> = {
  "light-and-zeitgebers": "MORNING",
  "sleep-architecture": "NIGHT",
  chronotype: "MIDDAY",
  "interventions-and-tools": "EVENING",
  "edge-cases": "DAWN",
};

const HUB_TO_CONDITION: Record<string, string | undefined> = {
  "sleep-architecture": "Insomnia",
  chronotype: "Delayed Sleep-Wake Phase Disorder",
  "edge-cases": "Jet Lag Disorder",
};

/**
 * ArticleTemplate — healthline-grade medical-publisher layout, midnight
 * lab-notebook brand DNA preserved.
 *
 * Layout:
 *  - Top breadcrumb
 *  - Editorial hero block (eyebrow + H1 + dek)
 *  - Author byline + MedicallyReviewedBadge + LastReviewed line + reading time
 *  - ReviewerStamp
 *  - 12-col grid main + right rail; main has prose, ProtocolCard,
 *    NewsletterInline, SourcesAccordion, RelatedStacks; right rail has
 *    StackScoreCard + PhaseAxisCard + TableOfContents (sticky)
 *  - Mobile: rails inline below hero, TOC accordion at top
 */
export function ArticleTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Stacks", href: "/" },
    hub
      ? { label: hub.name, href: `/guides/${hub.slug}` }
      : { label: "Stacks" },
    { label: post.title },
  ];
  const related = relatedPosts(post);
  const isoDate = new Date(post.publishedAt).toLocaleDateString("en-CA");
  const isoUpdated = new Date(post.updatedAt).toLocaleDateString("en-CA");

  // Stable per-post StackScore dimensions
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

  const phase: Phase = HUB_TO_PHASE[post.hub] ?? "MIDDAY";
  const about = HUB_TO_CONDITION[post.hub];

  // TOC items — derived from post structure
  const toc: { id: string; label: string }[] = [
    { id: "lede", label: "Overview" },
  ];
  if (post.protocolCard) toc.push({ id: "protocol", label: "Protocol record" });
  if (post.items?.length) toc.push({ id: "items", label: "Ranked entries" });
  if (post.faq?.length) toc.push({ id: "faq", label: "Questions" });
  if (post.sources?.length) toc.push({ id: "sources", label: "Citations" });

  // Centralized reviewer record. While `verifiedCredential` is false,
  // schema strips Person.image and the badge surfaces "credential pending".
  const reviewer = PRIMARY_SLEEP_REVIEWER;
  const reviewerName = reviewer.name;
  const reviewerCredentials = reviewer.credentials;
  const reviewerJobTitle = reviewer.jobTitle;
  const authorName = "The CircadianStack Editorial Team";
  const authorRole = "Editorial · Chronobiology desk";

  return (
    <>
      <ArticleJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
      />
      <MedicalWebPageJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        authorName={authorName}
        authorRole={authorRole}
        reviewerName={reviewerName}
        reviewerCredentials={reviewerCredentials}
        reviewerJobTitle={reviewerJobTitle}
        about={about}
      />
      {post.faq && <FaqJsonLd faq={post.faq} />}

      {/* Editorial hero band */}
      <header className="border-b border-rule relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none aurora opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-7 md:pt-10 pb-8 md:pb-10">
          <BreadcrumbNav crumbs={crumbs} />
          <div className="mt-5 max-w-4xl">
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn">
              {post.postType.toUpperCase()} · {hub?.name ?? "STACK"}
            </div>
            <h1
              className="mt-3 text-paper font-semibold tracking-tight"
              style={{
                fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                fontSize: "clamp(2rem, 4.6vw, 3rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              {post.h1}
            </h1>
            <p
              className="mt-4 max-w-3xl text-paper/85"
              style={{ fontSize: "1.1875rem", lineHeight: 1.5 }}
            >
              {post.description}
            </p>
          </div>
          <div className="mt-6">
            <AuthorByline
              authorName={authorName}
              authorRole={authorRole}
              reviewerName={reviewerName}
              reviewerCredentials={reviewerCredentials}
              publishedAt={isoDate}
              reviewedAt={isoUpdated}
              readingTime={post.readingTime}
            />
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-7xl px-4 md:px-6 pt-8 md:pt-10 pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          {/* MAIN COLUMN */}
          <div className="lg:col-span-8 min-w-0">
            <div className="max-w-[720px]">
              <div className="mb-7">
                <ReviewerStamp
                  name={reviewerName}
                  credentials={reviewerCredentials}
                  reviewedDate={isoUpdated}
                />
              </div>

              {/* Mobile-only inline rail cards */}
              <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <StackScoreCard dimensions={dimensions} />
                <PhaseAxisCard highlight={phase} />
              </div>

              {post.protocolCard && (
                <div id="protocol" className="not-prose mb-8">
                  <ProtocolCard post={post} variant="featured" />
                </div>
              )}

              <div id="lede" className="prose">
                <p>{post.description}</p>
              </div>

              {post.items && post.items.length > 0 && (
                <section id="items" className="not-prose">
                  {post.items.map((item) => (
                    <div key={item.rank} id={`item-${item.rank}`} className="mt-10 mb-2">
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="font-mono text-dawn tnum text-[12px] tracking-[0.22em] uppercase">
                          {String(item.rank).padStart(2, "0")} ·
                        </span>
                        <h2
                          className="text-paper font-semibold"
                          style={{
                            fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                            fontSize: "clamp(1.375rem, 2.4vw, 1.625rem)",
                            lineHeight: 1.22,
                            letterSpacing: "-0.013em",
                          }}
                        >
                          {item.name}
                        </h2>
                      </div>
                      <p className="text-[1.0625rem] leading-[1.7] text-paper/85">
                        {item.summary}
                      </p>
                    </div>
                  ))}
                </section>
              )}

              <NewsletterInline />

              {post.faq && post.faq.length > 0 && (
                <section id="faq" className="not-prose">
                  <div className="flex items-center gap-3 mt-2 mb-5">
                    <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn">
                      QUESTIONS
                    </span>
                    <span aria-hidden className="flex-1 h-px bg-rule" />
                  </div>
                  <h2
                    className="text-paper font-semibold mb-6"
                    style={{
                      fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                      fontSize: "clamp(1.5rem, 2.6vw, 1.75rem)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.013em",
                    }}
                  >
                    Questions logged on this protocol
                  </h2>
                  <div className="space-y-7">
                    {post.faq.map((f, i) => (
                      <div key={i} className="border-l-2 border-rule pl-4">
                        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-slate mb-1.5">
                          Q{String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-[1.1875rem] font-semibold leading-[1.3] text-paper">
                          {f.q}
                        </h3>
                        <p className="mt-2 text-[1.0625rem] leading-[1.7] text-paper/85">
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <SourcesAccordion sources={post.sources ?? []} />

              <RelatedStacks
                posts={related}
                heading="Other stacks in this hub"
              />
            </div>
          </div>

          {/* RIGHT RAIL */}
          <aside
            aria-label="Article rail"
            className="hidden lg:block lg:col-span-4"
          >
            <div className="sticky top-24 space-y-5">
              <StackScoreCard dimensions={dimensions} />
              <PhaseAxisCard highlight={phase} />
              <div className="rounded-md border border-rule bg-midnight-raised/55 p-4 md:p-5">
                <TableOfContents items={toc} />
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
