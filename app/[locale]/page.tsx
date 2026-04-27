import { setRequestLocale, getTranslations } from "next-intl/server";
import { posts, getPost, latestPosts } from "@/lib/content/posts";
import { HeroEditorial } from "@/components/home/HeroEditorial";
import { CategoryTileGrid } from "@/components/home/CategoryTileGrid";
import { FeaturedStackCarousel } from "@/components/home/FeaturedStackCarousel";
import { StackIndex } from "@/components/home/StackIndex";
import { ResearchLog, type LogEntry } from "@/components/home/ResearchLog";
import type { Locale } from "@/i18n/routing";

/**
 * HomePage — healthline-grade redesign. Lab-notebook brand DNA preserved
 * (midnight + amber, IBM Plex Mono accents, log timestamps). Healthline
 * craft layer added: editorial hero, scannable category tile grid,
 * featured stack carousel, then the lab-notebook surface (StackIndex +
 * ResearchLog) as supporting secondary sections.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("homeRR");
  const tH = await getTranslations("homeHero");

  // The featured pillar.
  const featured =
    getPost("morning-sunlight-protocol") ?? posts.find((p) => p.featured) ?? posts[0];
  const trending = latestPosts(4).filter((p) => p.slug !== featured.slug).slice(0, 3);
  const carouselPosts = latestPosts(6);

  // Research log entries — feel-real, not literally a tail file.
  const logEntries: LogEntry[] = [
    { ts: "2026-04-26 09:14", action: "INDEXED", body: t("logEntry1") },
    { ts: "2026-04-25 17:42", action: "REVIEWED", body: t("logEntry2") },
    { ts: "2026-04-24 11:08", action: "REFRESHED", body: t("logEntry3") },
    { ts: "2026-04-23 08:31", action: "DRAFTED", body: t("logEntry4") },
    { ts: "2026-04-22 14:55", action: "QUEUED", body: t("logEntry5") },
    { ts: "2026-04-21 19:03", action: "FLAGGED", body: t("logEntry6") },
    { ts: "2026-04-21 09:12", action: "INDEXED", body: t("logEntry7") },
  ];

  return (
    <main>
      <HeroEditorial
        eyebrow={tH("eyebrow")}
        h1={tH("h1")}
        dek={tH("dek")}
        primaryCta={tH("ctaPrimary")}
        primaryHref={`/${featured.slug}`}
        secondaryCta={tH("ctaSecondary")}
        secondaryHref="/methodology"
        featured={featured}
        trending={trending}
        trendingLabel={tH("trendingLabel")}
        reviewedByLabel={tH("reviewedBy")}
      />

      <CategoryTileGrid
        heading={tH("categoriesHeading")}
        caption={tH("categoriesCaption")}
        postsLabel={tH("postsLabel")}
        locale={locale}
      />

      <FeaturedStackCarousel
        heading={tH("carouselHeading")}
        caption={tH("carouselCaption")}
        posts={carouselPosts}
      />

      {/* Lab-notebook secondary surface — preserved brand register */}
      <StackIndex
        locale={locale}
        heading={t("stackIndexHeading")}
        caption={t("stackIndexCaption")}
        colProtocol={t("colProtocol")}
        colLever={t("colLever")}
        colPhase={t("colPhase")}
        colScore={t("colScore")}
        colReviewed={t("colReviewed")}
        ariaTable={t("ariaStackIndex")}
      />

      <ResearchLog
        heading={t("researchLogHeading")}
        caption={t("researchLogCaption")}
        entries={logEntries}
        footerNote={t("researchLogFooter")}
      />

      {/* Editorial standards strip */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <a href="/methodology" className="group block">
              <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn group-hover:text-paper transition-colors">
                {t("methodologyLink")}
              </div>
              <p className="mt-2 text-[13.5px] text-paper/75 leading-snug">
                {t("editorialMethodology")}
              </p>
            </a>
            <a href="/editorial-standards" className="group block">
              <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn group-hover:text-paper transition-colors">
                {t("editorialLink")}
              </div>
              <p className="mt-2 text-[13.5px] text-paper/75 leading-snug">
                {t("editorialStandardsBlurb")}
              </p>
            </a>
            <a href="/affiliate-disclosure" className="group block">
              <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn group-hover:text-paper transition-colors">
                {t("disclaimerLink")}
              </div>
              <p className="mt-2 text-[13.5px] text-paper/75 leading-snug">
                {t("editorialDisclaimer")}
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
