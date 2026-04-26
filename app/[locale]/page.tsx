import { Link } from "@/i18n/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { hubs, localizeHub } from "@/lib/content/hubs";
import { latestPosts, posts } from "@/lib/content/posts";
import { localizePost } from "@/lib/content/posts-i18n";
import { EditorialHero } from "@/components/home/EditorialHero";
import { TrendingChips, type TrendingChip } from "@/components/home/TrendingChips";
import { SignatureTeasers, type SignatureTeaser } from "@/components/home/SignatureTeasers";
import { BrowseByLever, type LeverTile } from "@/components/home/BrowseByLever";
import { MethodologyTeaser } from "@/components/home/MethodologyTeaser";
import { CategoryGrid, type CategoryTile } from "@/components/home/CategoryGrid";
import { GuidesGrid, type GuideTile } from "@/components/home/GuidesGrid";
import { ScrollRow, type ScrollRowCard } from "@/components/home/ScrollRow";
import { TestingProcess } from "@/components/home/TestingProcess";
import { PressBar } from "@/components/home/PressBar";
import type { Locale } from "@/i18n/routing";

// Primary-source registries that CircadianStack actually reads from
// (instead of media outlets — fits the lab-notebook register).
const PRESS_OUTLETS = [
  "PUBMED",
  "CLINICALTRIALS.GOV",
  "J PHYSIOL",
  "J BIOL RHYTHMS",
  "CHRONOBIOL INT",
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tRR = await getTranslations("homeRR");
  const tHeader = await getTranslations("header");

  // Category tiles: 5 hubs + 3 chronobiology-appropriate expansion tiles.
  const hubTiles: CategoryTile[] = hubs.map((hub) => {
    const hl = localizeHub(hub, locale);
    return {
      href: `/guides/${hub.slug}`,
      label: hl.shortName,
    };
  });
  const expansionTiles: CategoryTile[] = [
    { href: "/guides", label: tRR("catProtocolCards") },
    { href: "/guides", label: tRR("catDose") },
    { href: "/chronotype-quiz", label: tRR("catQuiz") },
  ];
  const categoryTiles: CategoryTile[] = [...hubTiles, ...expansionTiles].slice(0, 8);

  // In-depth guides (8): pillars first, then comparisons, then cluster/listicle.
  const indepth = [
    ...posts.filter((p) => p.postType === "pillar"),
    ...posts.filter((p) => p.postType === "comparison"),
    ...posts.filter((p) => p.postType === "cluster"),
    ...posts.filter((p) => p.postType === "listicle"),
  ];
  const indepthTiles: GuideTile[] = indepth.slice(0, 8).map((p) => {
    const i18n = localizePost(p.slug, locale, {
      title: p.title,
      h1: p.h1,
      description: p.description,
    });
    return {
      href: `/${p.slug}`,
      title: i18n.title ?? p.title,
      caption: i18n.description ?? p.description,
    };
  });

  // Latest field notes (7).
  const latest = latestPosts(7);
  const latestCards: ScrollRowCard[] = latest.map((p) => {
    const i18n = localizePost(p.slug, locale, { title: p.title, h1: p.h1, description: p.description });
    return {
      href: `/${p.slug}`,
      title: i18n.title ?? p.title,
      meta: new Date(p.publishedAt).toLocaleDateString(locale, {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
  });

  // Most-read (7) — featured first, then by reading-time desc as proxy.
  const popular = [...posts]
    .sort((a, b) => {
      const af = a.featured ? 1 : 0;
      const bf = b.featured ? 1 : 0;
      if (af !== bf) return bf - af;
      return b.readingTime - a.readingTime;
    })
    .slice(0, 7);
  const popularCards: ScrollRowCard[] = popular.map((p) => {
    const i18n = localizePost(p.slug, locale, { title: p.title, h1: p.h1, description: p.description });
    return {
      href: `/${p.slug}`,
      title: i18n.title ?? p.title,
      meta: new Date(p.publishedAt).toLocaleDateString(locale, {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
  });

  // Trending protocol chips — voiced as protocols/levers, not products.
  const trendingChips: TrendingChip[] = [
    { label: tRR("trend1"), href: "/morning-sunlight-protocol" },
    { label: tRR("trend2"), href: "/why-you-wake-at-3am" },
    { label: tRR("trend3"), href: "/jet-lag-protocol-east-vs-west" },
    { label: tRR("trend4"), href: "/best-light-therapy-lamps-2026" },
    { label: tRR("trend5"), href: "/night-shift-sleep-protocol" },
    { label: tRR("trend6"), href: "/best-blue-blocker-glasses" },
  ];

  // Three signature teasers — chronobiology framing, never Rx.
  const teasers: SignatureTeaser[] = [
    {
      href: "/why-you-wake-at-3am",
      eyebrow: tRR("teaser1Eyebrow"),
      title: tRR("teaser1Title"),
      blurb: tRR("teaser1Blurb"),
      ctaLabel: tRR("teaserCta"),
      variant: "zenith",
    },
    {
      href: "/morning-sunlight-protocol",
      eyebrow: tRR("teaser2Eyebrow"),
      title: tRR("teaser2Title"),
      blurb: tRR("teaser2Blurb"),
      ctaLabel: tRR("teaserCta"),
      variant: "dawn",
    },
    {
      href: "/guides",
      eyebrow: tRR("teaser3Eyebrow"),
      title: tRR("teaser3Title"),
      blurb: tRR("teaser3Blurb"),
      ctaLabel: tRR("teaserCta"),
      variant: "ember",
    },
  ];

  // Browse by lever — drugs.com utility-tile pattern.
  const leverTiles: LeverTile[] = [
    { href: "/guides/light-and-zeitgebers", label: tRR("leverLight"), sub: tRR("leverLightSub"), icon: "light" },
    { href: "/guides/sleep-architecture", label: tRR("leverTemp"), sub: tRR("leverTempSub"), icon: "temp" },
    { href: "/guides/chronotype", label: tRR("leverMovement"), sub: tRR("leverMovementSub"), icon: "movement" },
    { href: "/guides/interventions-and-tools", label: tRR("leverNutrition"), sub: tRR("leverNutritionSub"), icon: "nutrition" },
  ];

  return (
    <main>
      <EditorialHero
        eyebrow={tRR("heroEyebrow")}
        h1={tRR("heroH1")}
        sub={tRR("heroSub")}
        searchPlaceholder={tHeader("searchPlaceholder")}
        searchAria={tHeader("searchButton")}
        searchSubmit={tRR("heroSearchSubmit")}
        pipelineMeta={tRR("pipelineMeta")}
      />

      <TrendingChips label={tRR("trendingLabel")} chips={trendingChips} />

      <SignatureTeasers
        heading={tRR("signatureHeading")}
        subheading={tRR("signatureSub")}
        teasers={teasers}
      />

      <BrowseByLever heading={tRR("leverHeading")} tiles={leverTiles} />

      <CategoryGrid heading={tRR("guides")} tiles={categoryTiles} />

      <GuidesGrid heading={tRR("inDepth")} tiles={indepthTiles} />

      <ScrollRow heading={tRR("latest")} cards={latestCards} />

      <ScrollRow heading={tRR("popular")} cards={popularCards} />

      <MethodologyTeaser
        scoreEyebrow={tRR("methScoreEyebrow")}
        scoreTitle={tRR("methScoreTitle")}
        scoreBody={tRR("methScoreBody")}
        scoreCta={tRR("methScoreCta")}
        pipelineEyebrow={tRR("methPipelineEyebrow")}
        pipelineTitle={tRR("methPipelineTitle")}
        pipelineBody={tRR("methPipelineBody")}
        pipelineCta={tRR("methPipelineCta")}
      />

      <TestingProcess
        heading={tRR("testing")}
        steps={[tRR("testingStep1"), tRR("testingStep2"), tRR("testingStep3")]}
      />

      {/* Editorial standards — minimal 3-link row */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/methodology" className="group block">
              <div className="caps-label text-slate group-hover:text-dawn transition-colors">
                {tRR("methodologyLink")}
              </div>
              <p className="mt-2 text-[13px] text-paper/75 leading-snug">
                {tRR("editorialMethodology")}
              </p>
            </Link>
            <Link href="/editorial-standards" className="group block">
              <div className="caps-label text-slate group-hover:text-dawn transition-colors">
                {tRR("editorialLink")}
              </div>
              <p className="mt-2 text-[13px] text-paper/75 leading-snug">
                {tRR("editorialStandardsBlurb")}
              </p>
            </Link>
            <Link href="/affiliate-disclosure" className="group block">
              <div className="caps-label text-slate group-hover:text-dawn transition-colors">
                {tRR("disclaimerLink")}
              </div>
              <p className="mt-2 text-[13px] text-paper/75 leading-snug">
                {tRR("editorialDisclaimer")}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <PressBar heading={tRR("pressLabel")} outlets={PRESS_OUTLETS} />
    </main>
  );
}
