import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageShell } from "@/components/templates/PageShell";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";
import { StackScore } from "@/components/editorial/StackScore";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "methodologyV12" });
  return pageMetadata({
    title: t("h1"),
    description: t("intro"),
    path: "/methodology/v1-2",
    locale,
  });
}

export default async function MethodologyV12Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "methodologyV12" });

  const DIMS = [
    { name: t("dim1Name"), weight: "35%", high: t("dim1High"), mid: t("dim1Mid"), low: t("dim1Low") },
    { name: t("dim2Name"), weight: "20%", high: t("dim2High"), mid: t("dim2Mid"), low: t("dim2Low") },
    { name: t("dim3Name"), weight: "15%", high: t("dim3High"), mid: t("dim3Mid"), low: t("dim3Low") },
    { name: t("dim4Name"), weight: "15%", high: t("dim4High"), mid: t("dim4Mid"), low: t("dim4Low") },
    { name: t("dim5Name"), weight: "15%", high: t("dim5High"), mid: t("dim5Mid"), low: t("dim5Low") },
  ];

  const TIERS = [
    { score: 94, body: t("tier1") },
    { score: 84, body: t("tier2") },
    { score: 74, body: t("tier3") },
    { score: 64, body: t("tier4") },
    { score: 42, body: t("tier5") },
  ];

  return (
    <PageShell>
      <Eyebrow tone="dawn">{t("eyebrow")}</Eyebrow>
      <h1 className="font-serif text-4xl md:text-5xl text-paper mt-3 leading-tight">
        {t("h1")}
      </h1>
      <p className="mt-5 text-paper/85 text-[17px] leading-relaxed max-w-prose">
        {t("intro")} {t("narrativeAt")}{" "}
        <Link
          href="/methodology"
          className="underline decoration-dawn/60 underline-offset-2 hover:decoration-dawn"
        >
          /methodology
        </Link>
        .
      </p>

      <DotRule className="my-10" />

      <section>
        <Eyebrow tone="zenith">{t("dimensionsEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-paper mt-2 mb-6">
          {t("dimensionsTitle")}
        </h2>
        <ol className="space-y-6">
          {DIMS.map((d) => (
            <li
              key={d.name}
              className="border-b border-rule pb-5 last:border-b-0"
            >
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-serif text-xl text-paper">{d.name}</h3>
                <span className="caps-label text-dawn tnum">{d.weight}</span>
              </div>
              <dl className="grid sm:grid-cols-3 gap-3 text-[14px] text-paper/85 leading-relaxed">
                <div>
                  <dt className="caps-label text-slate mb-1">{t("tableHigh")}</dt>
                  <dd>{d.high}</dd>
                </div>
                <div>
                  <dt className="caps-label text-slate mb-1">{t("tableMid")}</dt>
                  <dd>{d.mid}</dd>
                </div>
                <div>
                  <dt className="caps-label text-slate mb-1">{t("tableLow")}</dt>
                  <dd>{d.low}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="dawn">{t("tierEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-paper mt-2 mb-6">
          {t("tierTitle")}
        </h2>
        <ul className="space-y-5">
          {TIERS.map((tier) => (
            <li
              key={tier.score}
              className="grid grid-cols-[88px_1fr] gap-5 items-start"
            >
              <StackScore score={tier.score} size="lg" />
              <p className="text-[15.5px] text-paper/85 leading-relaxed pt-1">
                {tier.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="zenith">{t("reviewersEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-paper mt-2 mb-3">
          {t("reviewersTitle")}
        </h2>
        <p className="text-paper/85 text-[16px] leading-relaxed max-w-prose">
          {t("reviewersBody")}
        </p>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="slate">{t("changeLogEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-paper mt-2 mb-6">
          {t("changeLogTitle")}
        </h2>
        <ul className="space-y-5">
          <li className="border-b border-rule pb-5">
            <div className="caps-label text-dawn mb-2 tnum">{t("cl12date")}</div>
            <p className="text-paper/85 text-[15.5px] leading-relaxed">{t("cl12")}</p>
          </li>
          <li className="border-b border-rule pb-5">
            <div className="caps-label text-slate mb-2 tnum">{t("cl11date")}</div>
            <p className="text-paper/85 text-[15.5px] leading-relaxed">{t("cl11")}</p>
          </li>
          <li className="pb-5">
            <div className="caps-label text-slate mb-2 tnum">{t("cl10date")}</div>
            <p className="text-paper/85 text-[15.5px] leading-relaxed">{t("cl10")}</p>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
