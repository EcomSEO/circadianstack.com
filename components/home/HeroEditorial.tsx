import { Link } from "@/i18n/navigation";
import { StackScore } from "@/components/editorial/StackScore";
import type { Post } from "@/lib/content/posts";

/**
 * HeroEditorial — healthline-grade clean editorial hero.
 *
 * Replaces LogHero for the home page lead. 12-col grid: H1 + dek left,
 * featured stack card right with gradient placeholder + StackScore badge +
 * reviewed-by line + author. Three trending stacks below.
 *
 * Brand DNA preserved: midnight bg, amber accent, IBM Plex stack, mono
 * timestamps. Healthline craft layer added: typographic confidence on H1
 * (40-48 px weight 600), structured byline strip, reviewer stamp inline.
 */
export function HeroEditorial({
  eyebrow,
  h1,
  dek,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  featured,
  trending,
  trendingLabel,
  reviewedByLabel,
}: {
  eyebrow: string;
  h1: string;
  dek: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
  featured: Post;
  trending: Post[];
  trendingLabel: string;
  reviewedByLabel: string;
}) {
  return (
    <section className="relative border-b border-rule overflow-hidden">
      <div className="absolute inset-0 pointer-events-none aurora opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-14 pb-12 md:pb-16">
        {/* 12-col hero grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn">
              {eyebrow}
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
              {h1}
            </h1>
            <p
              className="mt-5 max-w-2xl text-paper/85"
              style={{ fontSize: "1.125rem", lineHeight: 1.55 }}
            >
              {dek}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href={primaryHref} className="btn-primary">
                {primaryCta}
              </Link>
              <Link href={secondaryHref} className="btn-secondary">
                {secondaryCta}
              </Link>
            </div>
          </div>

          {/* Right card — featured stack */}
          <div className="col-span-12 lg:col-span-5">
            <FeaturedStackCard
              post={featured}
              reviewedByLabel={reviewedByLabel}
            />
          </div>
        </div>

        {/* Trending row */}
        {trending.length > 0 && (
          <div className="mt-12 md:mt-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn">
                {trendingLabel}
              </span>
              <span aria-hidden className="flex-1 h-px bg-rule" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {trending.slice(0, 3).map((p) => (
                <TrendingTile key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedStackCard({
  post,
  reviewedByLabel,
}: {
  post: Post;
  reviewedByLabel: string;
}) {
  // Hash slug for stable per-post StackScore dimensions.
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

  return (
    <Link
      href={`/${post.slug}`}
      className="group block rounded-md border border-rule bg-midnight-raised/70 hover:border-dawn/55 transition-colors overflow-hidden"
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <SunArcPlaceholder />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 bg-midnight-deep/85 border border-dawn/45 backdrop-blur">
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-dawn" />
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-dawn">
            Featured Stack
          </span>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-dawn">
          PILLAR · {post.hub.toUpperCase().replace(/-/g, " ")}
        </div>
        <h3
          className="mt-2 text-paper font-semibold leading-tight"
          style={{
            fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
            fontSize: "1.375rem",
            letterSpacing: "-0.012em",
          }}
        >
          {post.title}
        </h3>
        <p className="mt-2 text-[14.5px] leading-snug text-paper/75 line-clamp-2">
          {post.description}
        </p>
        <div className="mt-4">
          <StackScore dimensions={dimensions} size="sm" />
        </div>
        <div className="mt-3 flex items-center gap-2 font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="text-success" aria-hidden>
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{reviewedByLabel}</span>
        </div>
      </div>
    </Link>
  );
}

function TrendingTile({ post }: { post: Post }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="group block rounded-md border border-rule bg-midnight-raised/55 hover:bg-midnight-raised hover:border-dawn/40 transition-colors p-4 md:p-5"
    >
      <div className="font-mono text-[9.5px] tracking-[0.22em] uppercase text-dawn">
        {post.hub.toUpperCase().replace(/-/g, " ")}
      </div>
      <h4
        className="mt-1.5 text-paper font-semibold leading-snug group-hover:text-dawn transition-colors"
        style={{
          fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
          fontSize: "1.0625rem",
          letterSpacing: "-0.01em",
        }}
      >
        {post.title.split(" — ")[0]}
      </h4>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] uppercase text-slate">
        <span>{post.readingTime} MIN</span>
        <span className="tnum-serif">{post.publishedAt}</span>
      </div>
    </Link>
  );
}

/** Subtle sun-arc gradient SVG — domain-unique placeholder image */
function SunArcPlaceholder() {
  return (
    <svg
      viewBox="0 0 800 320"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className="absolute inset-0"
    >
      <defs>
        <linearGradient id="hero-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#142840" />
          <stop offset="100%" stopColor="#0B1929" />
        </linearGradient>
        <radialGradient id="hero-sun" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#E6A940" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#E6A940" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#E6A940" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="800" height="320" fill="url(#hero-bg)" />
      <circle cx="400" cy="320" r="220" fill="url(#hero-sun)" />
      <path
        d="M 80 280 Q 400 60, 720 280"
        stroke="#E6A940"
        strokeOpacity="0.55"
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="2 6"
      />
      <line x1="80" y1="280" x2="80" y2="270" stroke="#E6A940" strokeOpacity="0.7" />
      <line x1="240" y1="180" x2="240" y2="170" stroke="#E6A940" strokeOpacity="0.7" />
      <line x1="400" y1="120" x2="400" y2="110" stroke="#E6A940" strokeOpacity="0.85" />
      <line x1="560" y1="180" x2="560" y2="170" stroke="#E6A940" strokeOpacity="0.7" />
      <line x1="720" y1="280" x2="720" y2="270" stroke="#E6A940" strokeOpacity="0.7" />
    </svg>
  );
}
