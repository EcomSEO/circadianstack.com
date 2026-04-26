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
  const t = await getTranslations({ locale, namespace: "methodologyPage" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/methodology",
    locale,
  });
}

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "methodologyMain" });
  const RULES = [
    { title: t("r1t"), body: t("r1b") },
    { title: t("r2t"), body: t("r2b") },
    { title: t("r3t"), body: t("r3b") },
    { title: t("r4t"), body: t("r4b") },
    { title: t("r5t"), body: t("r5b") },
  ];

  return (
    <PageShell>
      <Eyebrow tone="dawn">{t("eyebrow")}</Eyebrow>
      <h1 className="font-serif text-4xl md:text-5xl text-paper mt-3 leading-tight">
        {t("h1")}
      </h1>
      <p className="mt-5 text-paper/85 text-[17px] leading-relaxed max-w-prose">
        {t("intro")}{" "}
        <Link
          href="/methodology/v1-2"
          className="underline decoration-dawn/60 underline-offset-2 hover:decoration-dawn"
        >
          /methodology/v1-2
        </Link>
        .
      </p>

      <DotRule className="my-10" />

      <section>
        <Eyebrow tone="zenith">{t("rulesEyebrow")}</Eyebrow>
        <ol className="mt-4 space-y-5">
          {RULES.map((r, i) => (
            <li
              key={r.title}
              className="grid grid-cols-[2.2rem_1fr] gap-4 pb-5 border-b border-rule last:border-b-0"
            >
              <span className="rank-numeral !text-xl !text-dawn tnum">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-xl text-paper leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2 text-[15.5px] text-paper/85 leading-relaxed">
                  {r.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="dawn">{t("scoreEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-paper mt-3 mb-3 leading-tight">
          {t("scoreTitle")}
        </h2>
        <p className="text-paper/85 text-[16px] leading-relaxed max-w-prose">
          {t("scoreBody")}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <StackScore score={94} size="lg" />
          <StackScore score={84} size="lg" />
          <StackScore score={74} size="lg" />
          <StackScore score={64} size="lg" />
          <StackScore score={42} size="lg" />
        </div>
        <div className="mt-4">
          <Link
            href="/methodology/v1-2"
            className="text-dawn hover:text-zenith text-sm font-medium"
          >
            {t("readSpec")} →
          </Link>
        </div>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="zenith">{t("reviewersEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-paper mt-3 mb-3 leading-tight">
          {t("reviewersTitle")}
        </h2>
        <p className="text-paper/85 text-[16px] leading-relaxed max-w-prose">
          {t("reviewersBody")}
        </p>
      </section>
    </PageShell>
  );
}
