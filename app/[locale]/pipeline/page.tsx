import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/templates/PageShell";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";
import { hubs, getHub, localizeHub } from "@/lib/content/hubs";
import { pipelineByStage, pipelineCounts } from "@/lib/content/pipeline";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pipelinePageExt" });
  return pageMetadata({
    title: t("h1"),
    description: t("intro"),
    path: "/pipeline",
    locale,
  });
}

export default async function PipelinePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pipelinePageExt" });
  const inResearch = pipelineByStage("in-research");
  const queued = pipelineByStage("queued");
  const counts = pipelineCounts();

  return (
    <PageShell>
      <Eyebrow tone="dawn">{t("eyebrow")}</Eyebrow>
      <h1 className="font-serif text-4xl md:text-5xl text-paper mt-3 leading-tight">
        {t("h1")}
      </h1>
      <p className="mt-5 text-paper/85 text-[17px] leading-relaxed max-w-prose">
        {t("intro")}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 caps-label text-slate">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-dawn" />
          {counts.inResearch} {t("inResearchSuffix")}
        </span>
        <span aria-hidden>·</span>
        <span>{counts.queued} {t("queuedSuffix")}</span>
        <span aria-hidden>·</span>
        <span>{t("updatedWeekly")}</span>
      </div>

      <DotRule className="my-10" />

      <section>
        <Eyebrow tone="zenith">{t("inResearchEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-paper mt-2 mb-6">
          {t("inResearchTitle")}
        </h2>
        <ol className="space-y-6">
          {inResearch.map((item, i) => {
            const hub = getHub(item.hub);
            const hl = hub ? localizeHub(hub, locale) : null;
            return (
              <li
                key={item.title}
                className="grid grid-cols-[2.2rem_1fr] gap-4 pb-6 border-b border-rule last:border-b-0"
              >
                <span className="rank-numeral !text-xl !text-dawn tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-paper leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] text-paper/80 leading-relaxed">
                    {item.why}
                  </p>
                  {hl && (
                    <div className="mt-2 caps-label text-slate">
                      {t("landsIn")} {hl.shortName}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="slate">{t("queuedEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-paper mt-2 mb-6">
          {t("queuedTitle")}
        </h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {queued.map((item) => {
            const hub = getHub(item.hub);
            const hl = hub ? localizeHub(hub, locale) : null;
            return (
              <li
                key={item.title}
                className="text-[15px] text-paper leading-snug"
              >
                <span className="block font-serif">{item.title}</span>
                {hl && (
                  <span className="block caps-label text-slate mt-1">
                    {hl.shortName}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="dawn">{t("suggestEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-paper mt-2 mb-3">
          {t("suggestTitle")}
        </h2>
        <p className="text-paper/85 text-[16px] leading-relaxed">
          {t("suggestBody")}{" "}
          <Link
            href="/contact"
            className="underline decoration-dawn/60 underline-offset-2 hover:decoration-dawn"
          >
            {t("sendQuestion")}
          </Link>{" "}
          {t("andItGoes")}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {hubs.map((hub) => {
            const hl = localizeHub(hub, locale);
            return (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                className="inline-flex items-center rounded-sm border border-rule px-3.5 py-1.5 text-[13px] text-paper hover:bg-midnight-raised hover:border-dawn/50 transition"
              >
                {hl.shortName}
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
