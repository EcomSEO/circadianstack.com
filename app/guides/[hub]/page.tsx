import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getHub, hubs } from "@/lib/content/hubs";
import { postsByHub } from "@/lib/content/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { EmailCapture } from "@/components/EmailCapture";
import { pageMetadata } from "@/lib/seo";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { LabRule, DotRule } from "@/components/editorial/DotRule";
import { RankNumeral } from "@/components/editorial/RankNumeral";

const typeLabel: Record<string, string> = {
  pillar: "Protocol",
  comparison: "Dose-tested",
  cluster: "Explainer",
  listicle: "Field guide",
};

export function generateStaticParams() {
  return hubs.map((h) => ({ hub: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string }>;
}): Promise<Metadata> {
  const { hub: hubSlug } = await params;
  const hub = getHub(hubSlug);
  if (!hub) return {};
  return pageMetadata({
    title: hub.name,
    description: hub.oneLiner,
    path: `/guides/${hub.slug}`,
  });
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ hub: string }>;
}) {
  const { hub: hubSlug } = await params;
  const hub = getHub(hubSlug);
  if (!hub) notFound();

  const hubIndex = hubs.findIndex((h) => h.slug === hub.slug);
  const hubPosts = postsByHub(hub.slug);
  const pillar = hubPosts.find((p) => p.postType === "pillar");
  const comparisons = hubPosts.filter((p) => p.postType === "comparison");
  const explainers = hubPosts.filter((p) => p.postType === "cluster");
  const listicles = hubPosts.filter((p) => p.postType === "listicle");

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#issue-contents" },
    { label: hub.name },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main>
        {/* Hub masthead — dark, lab-notebook framing */}
        <section className="border-b border-rule">
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
            <Breadcrumbs crumbs={crumbs} />

            <div className="mt-8 grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="rank-numeral !text-[3.25rem]">
                    {String(hubIndex + 1).padStart(2, "0")}
                  </span>
                  <Eyebrow tone="dawn">
                    Hub {hubIndex + 1} of {hubs.length}
                  </Eyebrow>
                </div>
                <h1 className="display-headline mt-3 text-[2.4rem] md:text-[3.6rem] leading-[1.02]">
                  {hub.name}
                </h1>
                <p className="mt-6 font-serif italic text-xl md:text-2xl text-paper/85 max-w-2xl leading-[1.4]">
                  {hub.oneLiner}
                </p>
              </div>

              <div className="md:col-span-4 md:pl-6 md:border-l md:border-rule">
                <Eyebrow tone="slate">Our thesis</Eyebrow>
                <p className="mt-3 text-[14.5px] text-paper/85 leading-relaxed">
                  {hub.thesis}
                </p>
                <dl className="mt-5 pt-5 border-t border-rule space-y-2 text-[13px]">
                  <div className="flex justify-between">
                    <dt className="text-slate">Posts live</dt>
                    <dd className="text-dawn tnum">{hubPosts.length}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate">Planned in hub</dt>
                    <dd className="text-dawn tnum">30</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate">Refresh cadence</dt>
                    <dd className="text-paper">Quarterly</dd>
                  </div>
                </dl>
              </div>
            </div>

            <LabRule className="mt-14" />
          </div>
        </section>

        {/* Start here — pillar */}
        {pillar && (
          <section className="border-b border-rule">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <Eyebrow tone="zenith">Start here</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-paper mt-3 mb-8 leading-tight">
                The pillar protocol.
              </h2>
              <Link
                href={`/${pillar.slug}`}
                className="group block bg-midnight-raised border border-rule rounded-sm p-8 md:p-10 hover:border-dawn/50 transition"
              >
                <Eyebrow tone="dawn">Protocol pillar</Eyebrow>
                <h3 className="font-serif text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.08] mt-3">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-paper/80 text-[15.5px] leading-relaxed max-w-[62ch]">
                  {pillar.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-dawn group-hover:text-zenith transition text-sm font-medium">
                  Read the pillar
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </div>
          </section>
        )}

        {/* Comparisons */}
        {comparisons.length > 0 && (
          <section className="border-b border-rule">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
                <div>
                  <Eyebrow tone="dawn">Dose-tested comparisons</Eyebrow>
                  <h2 className="font-serif text-3xl md:text-4xl text-paper mt-3 leading-tight">
                    Lux meters, not marketing claims.
                  </h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-rule">
                {comparisons.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group p-6 border-b md:border-b-0 md:border-r border-rule last:border-r-0 hover:bg-midnight-raised/60 transition"
                  >
                    <RankNumeral n={i + 1} />
                    <h3 className="font-serif text-xl text-paper leading-tight mt-3 group-hover:text-dawn transition">
                      {p.title}
                    </h3>
                    <p className="text-sm text-paper/75 mt-2 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                    <div className="mt-4 caps-label text-slate">
                      {p.readingTime} min read
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Explainers */}
        {explainers.length > 0 && (
          <section className="border-b border-rule">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <Eyebrow tone="zenith">Explainers</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-paper mt-3 mb-8 leading-tight">
                Terms you keep seeing, defined.
              </h2>
              <ul className="divide-y divide-rule border-y border-rule">
                {explainers.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="group grid md:grid-cols-[auto_1fr_auto] gap-5 py-5 items-baseline hover:bg-midnight-raised/50 px-2 transition"
                    >
                      <span className="caps-label text-slate">
                        {typeLabel[p.postType]}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg text-paper group-hover:text-dawn transition leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-sm text-paper/70 mt-1 line-clamp-1">
                          {p.description}
                        </p>
                      </div>
                      <span className="caps-label text-slate tnum whitespace-nowrap">
                        {p.readingTime} min
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Listicles */}
        {listicles.length > 0 && (
          <section className="border-b border-rule">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <Eyebrow tone="ember">Field guides</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-paper mt-3 mb-8 leading-tight">
                Schedule-specific checklists.
              </h2>
              <div className="grid md:grid-cols-2 gap-0 border-t border-rule">
                {listicles.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group p-6 border-b md:border-b-0 md:border-r border-rule last:border-r-0 hover:bg-midnight-raised/60 transition"
                  >
                    <RankNumeral n={i + 1} />
                    <h3 className="font-serif text-xl text-paper leading-tight mt-3 group-hover:text-dawn transition">
                      {p.title}
                    </h3>
                    <p className="text-sm text-paper/75 mt-2 leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {hubPosts.length === 0 && (
          <section className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-paper/70 text-lg">
              Protocol cards land here as they clear peer review. See the{" "}
              <Link href="/" className="text-dawn underline">
                home page
              </Link>{" "}
              for what's live today.
            </p>
          </section>
        )}

        <section className="bg-midnight-raised/50 border-t border-rule">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <EmailCapture />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <DotRule />
        </section>
      </main>
    </>
  );
}
