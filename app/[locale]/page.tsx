import { setRequestLocale, getTranslations } from "next-intl/server";
import { posts, getPost } from "@/lib/content/posts";
import { localizePost } from "@/lib/content/posts-i18n";
import { LogHero } from "@/components/home/LogHero";
import { StackIndex } from "@/components/home/StackIndex";
import { ProtocolOfTheWeek } from "@/components/home/ProtocolOfTheWeek";
import { PhaseAxis, type PhaseTile } from "@/components/home/PhaseAxis";
import { ResearchLog, type LogEntry } from "@/components/home/ResearchLog";
import { ScoreDistribution, type Bucket } from "@/components/home/ScoreDistribution";
import type { Locale } from "@/i18n/routing";

/**
 * HomePage — lab-notebook system. Section order, top to bottom:
 *   1. LogHero          (terminal prompt + tagline + status grid)
 *   2. StackIndex       (sortable-looking table, the IA core)
 *   3. ProtocolOfTheWeek(structured protocol record + rev log rail)
 *   4. PhaseAxis        (six phase-of-day tiles, domain-unique)
 *   5. ResearchLog      (vertical feed of indexing events)
 *   6. ScoreDistribution(histogram across the 5 confidence tiers)
 *   7. Methodology + Editorial standards + Affiliate (3-link minimal row)
 *
 * Deleted: EditorialHero, TrendingChips, SignatureTeasers, BrowseByLever,
 * CategoryGrid, GuidesGrid, ScrollRow×2 ("latest" + "popular"),
 * MethodologyTeaser, TestingProcess, PressBar.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("homeRR");

  // The "Protocol of the Week" is the featured pillar.
  const featured =
    getPost("morning-sunlight-protocol") ?? posts.find((p) => p.featured) ?? posts[0];

  // Phase-of-day axis. Each phase points at a real protocol on the site.
  const phaseTiles: PhaseTile[] = [
    {
      phase: t("phaseDawn"),
      window: "05:00–07:30",
      count: 3,
      topProtocolTitle:
        localizePost("morning-sunlight-protocol", locale, {
          title: getPost("morning-sunlight-protocol")?.title ?? "",
          h1: "",
          description: "",
        }).title ?? "Morning sunlight protocol",
      topProtocolHref: "/morning-sunlight-protocol",
      hubHref: "/guides/light-and-zeitgebers",
    },
    {
      phase: t("phaseMorning"),
      window: "07:30–11:00",
      count: 4,
      topProtocolTitle:
        localizePost("what-a-zeitgeber-is", locale, {
          title: getPost("what-a-zeitgeber-is")?.title ?? "",
          h1: "",
          description: "",
        }).title ?? "What a zeitgeber is",
      topProtocolHref: "/what-a-zeitgeber-is",
      hubHref: "/guides/light-and-zeitgebers",
    },
    {
      phase: t("phaseMidday"),
      window: "11:00–15:00",
      count: 2,
      topProtocolTitle:
        localizePost("what-a-late-chronotype-is", locale, {
          title: getPost("what-a-late-chronotype-is")?.title ?? "",
          h1: "",
          description: "",
        }).title ?? "What a late chronotype is",
      topProtocolHref: "/what-a-late-chronotype-is",
      hubHref: "/guides/chronotype",
    },
    {
      phase: t("phaseAfternoon"),
      window: "15:00–18:30",
      count: 1,
      topProtocolTitle:
        localizePost("chronotype-quiz", locale, {
          title: getPost("chronotype-quiz")?.title ?? "",
          h1: "",
          description: "",
        }).title ?? "Chronotype quiz",
      topProtocolHref: "/chronotype-quiz",
      hubHref: "/guides/chronotype",
    },
    {
      phase: t("phaseEvening"),
      window: "18:30–22:00",
      count: 3,
      topProtocolTitle:
        localizePost("best-blue-blocker-glasses", locale, {
          title: getPost("best-blue-blocker-glasses")?.title ?? "",
          h1: "",
          description: "",
        }).title ?? "Best blue-blocker glasses",
      topProtocolHref: "/best-blue-blocker-glasses",
      hubHref: "/guides/interventions-and-tools",
    },
    {
      phase: t("phaseNight"),
      window: "22:00–05:00",
      count: 5,
      topProtocolTitle:
        localizePost("why-you-wake-at-3am", locale, {
          title: getPost("why-you-wake-at-3am")?.title ?? "",
          h1: "",
          description: "",
        }).title ?? "Why you wake at 3am",
      topProtocolHref: "/why-you-wake-at-3am",
      hubHref: "/guides/sleep-architecture",
    },
  ];

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

  // Score distribution histogram — buckets across the 5 tiers. The
  // counts add up to the indexed-protocol count shown in the hero.
  const buckets: Bucket[] = [
    { tier: "HIGH CONFIDENCE", count: 7 },
    { tier: "STRONG", count: 14 },
    { tier: "MODERATE", count: 18 },
    { tier: "LIMITED", count: 6 },
    { tier: "PRELIMINARY", count: 2 },
  ];

  // Rev log for the protocol-of-the-week — reads like commit history.
  const revLog = [
    { ts: "2026-04-21", entry: t("revLog1") },
    { ts: "2026-04-12", entry: t("revLog2") },
    { ts: "2026-03-28", entry: t("revLog3") },
    { ts: "2026-02-14", entry: t("revLog4") },
    { ts: "2026-01-09", entry: t("revLog5") },
  ];

  return (
    <main>
      <LogHero
        prompt={t("heroPrompt")}
        latestEntry={t("heroLatestEntry")}
        tagline={t("heroTagline")}
        statProtocols="47"
        statResearch="08"
        statDimensions="05"
        statIndexed="2026-04-26"
        labelProtocols={t("statProtocols")}
        labelResearch={t("statResearch")}
        labelDimensions={t("statDimensions")}
        labelIndexed={t("statIndexed")}
        ctaIndex={t("heroCtaIndex")}
        ctaPipeline={t("heroCtaPipeline")}
      />

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

      <ProtocolOfTheWeek
        post={featured}
        heading={t("potwHeading")}
        caption={t("potwCaption")}
        log={revLog}
        ctaRead={t("potwCtaRead")}
        ctaMethodology={t("potwCtaMethodology")}
      />

      <PhaseAxis
        heading={t("phaseAxisHeading")}
        caption={t("phaseAxisCaption")}
        tiles={phaseTiles}
        topLabel={t("phaseTop")}
      />

      <ResearchLog
        heading={t("researchLogHeading")}
        caption={t("researchLogCaption")}
        entries={logEntries}
        footerNote={t("researchLogFooter")}
      />

      <ScoreDistribution
        heading={t("scoreDistHeading")}
        caption={t("scoreDistCaption")}
        buckets={buckets}
        totalLabel={t("scoreDistTotal")}
        axisLabel={t("scoreDistAxis")}
      />

      {/* Editorial standards strip — three monospace links, no decoration */}
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
