import Link from "next/link";
import { hubs, getHub } from "@/lib/content/hubs";
import { featuredPost, latestPosts, posts } from "@/lib/content/posts";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule, LabRule } from "@/components/editorial/DotRule";
import { RankNumeral } from "@/components/editorial/RankNumeral";
import { ProtocolCard } from "@/components/editorial/ProtocolCard";
import { LuxBadge } from "@/components/editorial/LuxBadge";
import { EmailCapture } from "@/components/EmailCapture";

const typeLabel: Record<string, string> = {
  pillar: "Protocol",
  comparison: "Dose-tested",
  cluster: "Explainer",
  listicle: "Field guide",
};

export default function HomePage() {
  const featured = featuredPost();
  const recent = latestPosts(6);
  const comparisons = posts.filter((p) => p.postType === "comparison").slice(0, 3);
  const explainers = posts.filter((p) => p.postType === "cluster").slice(0, 3);

  return (
    <main>
      {/* ============================================================
          HERO — dark, ambitious, protocol-first
          ============================================================ */}
      <section className="border-b border-rule relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            background:
              "radial-gradient(circle at 85% 20%, rgba(230,169,64,0.18) 0, transparent 45%), radial-gradient(circle at 15% 85%, rgba(94,175,201,0.12) 0, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-8 fade-up">
              <Eyebrow tone="dawn">
                Issue No. 01 &nbsp;·&nbsp; The Launch Edition
              </Eyebrow>
              <h1 className="display-headline mt-5 text-[2.6rem] sm:text-5xl md:text-[4.2rem] leading-[1.02]">
                The lux, the timing,
                <br className="hidden md:inline" />
                {" "}
                <span className="text-dawn italic font-serif">the research.</span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-paper/85 max-w-2xl leading-[1.55]">
                CircadianStack publishes Protocol cards, cited research, and
                dose-accurate reviews for morning light, sleep architecture,
                chronotype, and every other lever that resets a circadian
                clock. <span className="text-dawn">Protocols, not vibes.</span>
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/chronotype-quiz" className="btn-primary">
                  Take the Chronotype Quiz
                  <span aria-hidden>→</span>
                </Link>
                <Link href="#issue-contents" className="btn-secondary">
                  Browse the guides
                </Link>
              </div>

              {/* Quick-spec strip — monospace, lab-data register */}
              <dl className="mt-10 grid grid-cols-3 gap-0 max-w-lg border-t border-rule">
                <div className="border-r border-rule pr-4 pt-4">
                  <dt className="caps-label text-slate">Cited</dt>
                  <dd className="tnum text-dawn text-2xl mt-1">
                    {posts.flatMap((p) => p.sources ?? []).length}
                  </dd>
                  <dd className="caps-label text-slate/70 mt-0.5">
                    primary sources
                  </dd>
                </div>
                <div className="border-r border-rule px-4 pt-4">
                  <dt className="caps-label text-slate">Tested</dt>
                  <dd className="tnum text-dawn text-2xl mt-1">
                    {posts.flatMap((p) => p.products ?? []).length}
                  </dd>
                  <dd className="caps-label text-slate/70 mt-0.5">
                    lamps + alarms
                  </dd>
                </div>
                <div className="pl-4 pt-4">
                  <dt className="caps-label text-slate">Published</dt>
                  <dd className="tnum text-dawn text-2xl mt-1">
                    {String(posts.length).padStart(2, "0")}
                  </dd>
                  <dd className="caps-label text-slate/70 mt-0.5">
                    wave-one posts
                  </dd>
                </div>
              </dl>
            </div>

            {/* In-this-issue sidebar */}
            <aside className="md:col-span-4 md:pl-8 md:border-l md:border-rule fade-up-delay-1">
              <div className="eyebrow text-slate mb-4">In this issue</div>
              <ul className="space-y-4">
                {[featured, ...comparisons.filter((c) => c.slug !== featured?.slug)]
                  .slice(0, 4)
                  .filter((p): p is NonNullable<typeof p> => Boolean(p))
                  .map((p, i) => {
                    const hub = getHub(p.hub);
                    return (
                      <li key={p.slug} className="flex gap-3">
                        <span className="tnum text-dawn/60 text-base shrink-0 pt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <Link
                            href={`/${p.slug}`}
                            className="font-serif text-[17px] leading-snug text-paper hover:text-dawn transition block"
                          >
                            {p.title}
                          </Link>
                          <div className="caps-label text-slate mt-1">
                            {hub?.shortName} · {p.readingTime} min
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>

              <div className="mt-8 pt-6 border-t border-rule">
                <div className="eyebrow text-slate mb-2">Morning light — the dose</div>
                <div className="flex flex-wrap gap-2">
                  <LuxBadge spec="10,000" unit="lux" at="10 min" />
                  <LuxBadge
                    spec="1,000"
                    unit="lux"
                    at="30 min"
                    tone="zenith"
                  />
                </div>
                <p className="text-[12px] text-slate mt-3 leading-relaxed">
                  Zeitzer 2000 · Khalsa 2003. The window: within 60 min of wake.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROTOCOL OF THE ISSUE — the signature artifact, above the fold
          ============================================================ */}
      {featured?.protocolCard && (
        <section className="border-b border-rule bg-midnight-deep/50">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-4">
                <Eyebrow tone="dawn">Protocol of the Issue</Eyebrow>
                <h2 className="font-serif text-3xl md:text-4xl text-paper mt-4 leading-[1.1]">
                  The card that answers the question most readers arrive with.
                </h2>
                <p className="mt-5 text-paper/75 text-[15px] leading-relaxed">
                  Every how-to post on CircadianStack ships with a five-section
                  Protocol card — Input, Dose, Expected output, Evidence,
                  Failure modes. Screenshot-friendly. Dose-specific. Cited.
                </p>
                <Link
                  href={`/${featured.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-dawn hover:text-zenith transition text-sm font-medium"
                >
                  Read the full pillar
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="md:col-span-8">
                <ProtocolCard post={featured} variant="featured" />
                <div className="mt-4 flex flex-wrap items-center gap-3 caps-label text-slate">
                  <span className="text-dawn">Featured</span>
                  <span aria-hidden>·</span>
                  <span>{featured.readingTime} min read</span>
                  <span aria-hidden>·</span>
                  <span>{(featured.sources ?? []).length} primary sources</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          HUB INDEX — amber rank numerals, table-of-contents feel
          ============================================================ */}
      <section id="issue-contents" className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="zenith">The Hubs</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-paper mt-3 leading-tight">
                Five hubs. One hundred and fifty protocols on the way.
              </h2>
            </div>
            <Link
              href="/about"
              className="text-dawn hover:text-zenith text-sm font-medium"
            >
              Why we built it this way →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-rule">
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                className="group relative flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-rule last:border-r-0 hover:bg-midnight-raised/60 transition"
              >
                <span className="rank-numeral text-dawn/70 group-hover:text-dawn mb-3 !text-[2.5rem] transition">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-paper leading-tight mb-2">
                  {hub.name}
                </h3>
                <p className="text-sm text-paper/70 leading-relaxed flex-1">
                  {hub.oneLiner}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-dawn group-hover:text-zenith caps-label">
                  Open hub
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          LATEST — two-column editorial feed
          ============================================================ */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="dawn">The Latest</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-paper mt-3 leading-tight">
                Freshly cited, freshly dose-tested.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10">
            {recent[0] && (
              <article className="md:col-span-7">
                <Link href={`/${recent[0].slug}`} className="group block">
                  <div className="aspect-[16/9] bg-midnight-raised rounded-sm mb-5 relative overflow-hidden border border-rule">
                    {/* Decorative phase-response-curve svg */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 400 225"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient id="prc" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0" stopColor="#E6A940" stopOpacity="0.05" />
                          <stop offset="0.5" stopColor="#E6A940" stopOpacity="0.9" />
                          <stop offset="1" stopColor="#5EAFC9" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      {Array.from({ length: 9 }).map((_, i) => (
                        <line
                          key={i}
                          x1={i * 50}
                          y1={0}
                          x2={i * 50}
                          y2={225}
                          stroke="#1E3047"
                          strokeWidth="1"
                        />
                      ))}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <line
                          key={i}
                          x1={0}
                          y1={i * 56}
                          x2={400}
                          y2={i * 56}
                          stroke="#1E3047"
                          strokeWidth="1"
                        />
                      ))}
                      <path
                        d="M 0 180 C 60 180, 100 60, 160 60 S 260 190, 320 190 S 400 100, 400 100"
                        stroke="url(#prc)"
                        strokeWidth="2.5"
                        fill="none"
                      />
                    </svg>
                    <div className="absolute bottom-4 left-5">
                      <span className="caps-label text-paper bg-midnight-deep/90 border border-rule px-2 py-1 rounded-sm">
                        {typeLabel[recent[0].postType]}
                      </span>
                    </div>
                    <div className="absolute top-4 right-5 caps-label text-slate font-mono">
                      Fig. 01 · Phase Response Curve
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-paper leading-[1.12] group-hover:text-dawn transition">
                    {recent[0].title}
                  </h3>
                  <p className="mt-3 text-paper/75 text-[15.5px] leading-relaxed line-clamp-3">
                    {recent[0].description}
                  </p>
                  <div className="mt-4 caps-label text-slate">
                    {getHub(recent[0].hub)?.shortName} · {recent[0].readingTime}{" "}
                    min read
                  </div>
                </Link>
              </article>
            )}

            <div className="md:col-span-5 space-y-0">
              {recent.slice(1, 5).map((p) => (
                <article
                  key={p.slug}
                  className="py-5 border-b border-rule first:border-t first:pt-5"
                >
                  <Link href={`/${p.slug}`} className="group block">
                    <div className="caps-label text-slate mb-1.5">
                      {typeLabel[p.postType]} · {getHub(p.hub)?.shortName}
                    </div>
                    <h3 className="font-serif text-lg text-paper leading-snug group-hover:text-dawn transition">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] text-paper/65 leading-snug line-clamp-2">
                      {p.description}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CREDO — "How we report" in protocol-framing
          ============================================================ */}
      <section className="border-b border-rule bg-midnight-deep relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 relative">
          <div className="absolute top-8 left-6 right-6">
            <LabRule />
          </div>
          <Eyebrow tone="dawn">How We Report</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-[1.15] text-paper">
            <span className="text-dawn">We publish</span> Protocol cards, not
            lifestyle content. Every claim has a dose. Every dose has a
            citation.
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div>
              <div className="rank-numeral text-dawn mb-2">01</div>
              <h3 className="font-serif text-xl text-paper mb-2">
                Primary sources only.
              </h3>
              <p className="text-paper/75 text-[14.5px] leading-relaxed">
                Khalsa 2003 for phase response curves. Roenneberg 2007 for
                chronotype. Peer-reviewed journals, regulatory filings, clinical
                trials. Podcasts are not sources.
              </p>
            </div>
            <div>
              <div className="rank-numeral text-dawn mb-2">02</div>
              <h3 className="font-serif text-xl text-paper mb-2">
                Real doses, real distances.
              </h3>
              <p className="text-paper/75 text-[14.5px] leading-relaxed">
                Light therapy lamps tested with a lux meter at 12, 18, and 24
                inches. Sunrise alarms measured at pillow distance. Melatonin at
                physiological doses (0.3–0.5 mg) as the default.
              </p>
            </div>
            <div>
              <div className="rank-numeral text-dawn mb-2">03</div>
              <h3 className="font-serif text-xl text-paper mb-2">
                Failure modes documented.
              </h3>
              <p className="text-paper/75 text-[14.5px] leading-relaxed">
                Every protocol ships with a Failure modes section — who it's
                wrong for, when evidence is mixed, what breaks the dose-response
                relationship. Protocols aren't magic.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-rule">
            <Link
              href="/editorial-standards"
              className="inline-flex items-center gap-1.5 text-dawn hover:text-zenith text-sm font-medium"
            >
              Read our full editorial standards
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          EXPLAINERS
          ============================================================ */}
      {explainers.length > 0 && (
        <section className="border-b border-rule">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div>
                <Eyebrow tone="zenith">The Explainers</Eyebrow>
                <h2 className="font-serif text-3xl text-paper mt-3 leading-tight">
                  Terms you keep seeing, defined in a paragraph.
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-0 border-t border-rule">
              {explainers.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="group p-6 border-b md:border-b-0 md:border-r border-rule last:border-r-0 hover:bg-midnight-raised/60 transition"
                >
                  <RankNumeral n={i + 1} />
                  <h3 className="font-serif text-xl text-paper leading-tight mt-3 group-hover:text-dawn transition">
                    {p.title}
                  </h3>
                  <p className="text-sm text-paper/70 mt-2 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          DISPATCH NEWSLETTER
          ============================================================ */}
      <section className="bg-midnight-raised/50 border-b border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center mb-8">
            <Eyebrow tone="dawn">The Dispatch</Eyebrow>
            <h2 className="font-serif text-3xl md:text-[2.5rem] text-paper mt-3 leading-[1.1] max-w-2xl mx-auto">
              One Protocol card. One Tuesday morning. Every week.
            </h2>
            <p className="mt-5 text-paper/75 text-[15.5px] max-w-xl mx-auto leading-relaxed">
              One protocol we verified or changed our mind about — delivered
              with the five-section card, the citations, and the failure modes.
              Plus the Chronotype Quiz personalized output when you subscribe.
            </p>
          </div>
          <EmailCapture />
        </div>
      </section>

      {/* Closing dateline */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <DotRule />
          <p className="text-center caps-label text-slate mt-6">
            Issue No. 01 · Last updated ·{" "}
            {new Date().toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>
    </main>
  );
}
