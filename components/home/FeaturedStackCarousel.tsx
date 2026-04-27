import { Link } from "@/i18n/navigation";
import type { Post } from "@/lib/content/posts";
import { StackScore } from "@/components/editorial/StackScore";

/**
 * FeaturedStackCarousel — horizontal scroll-snap row of StackCards.
 * Healthline-grade: clean midnight surface, amber category eyebrow, mini
 * StackScore for at-a-glance confidence, scroll-snap mobile.
 */
export function FeaturedStackCarousel({
  heading,
  caption,
  posts,
}: {
  heading: string;
  caption: string;
  posts: Post[];
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="flex items-end justify-between gap-6 mb-6 md:mb-7">
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn">
              FEATURED
            </div>
            <h2
              className="mt-2 text-paper font-semibold"
              style={{
                fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                lineHeight: 1.18,
                letterSpacing: "-0.012em",
              }}
            >
              {heading}
            </h2>
            <p className="mt-2 max-w-2xl text-[15px] text-paper/75 leading-snug">
              {caption}
            </p>
          </div>
        </div>
        <div className="-mx-4 md:-mx-6 px-4 md:px-6 overflow-x-auto snap-x snap-mandatory">
          <div className="grid auto-cols-[80%] sm:auto-cols-[55%] md:auto-cols-[42%] lg:auto-cols-[28%] grid-flow-col gap-4 md:gap-5 pb-2">
            {posts.map((p) => (
              <StackCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StackCard({ post }: { post: Post }) {
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
      className="snap-start group block rounded-md border border-rule bg-midnight-raised/55 hover:border-dawn/45 hover:bg-midnight-raised transition-all overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <CardThumb slug={post.slug} />
      </div>
      <div className="p-4">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-dawn">
          {post.hub.toUpperCase().replace(/-/g, " ")}
        </div>
        <h3
          className="mt-1.5 text-paper font-semibold leading-snug group-hover:text-dawn transition-colors"
          style={{
            fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
            fontSize: "1rem",
            letterSpacing: "-0.01em",
          }}
        >
          {post.title.split(" — ")[0]}
        </h3>
        <p className="mt-1.5 text-[13.5px] leading-snug text-paper/70 line-clamp-2">
          {post.description}
        </p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <StackScore dimensions={dimensions} size="sm" showLabel={false} />
          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate">
            {post.readingTime} MIN
          </span>
        </div>
      </div>
    </Link>
  );
}

function CardThumb({ slug }: { slug: string }) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 17 + slug.charCodeAt(i)) | 0;
  const palettes = [
    ["#1A2840", "#E6A940"],
    ["#142A48", "#5EAFC9"],
    ["#15283D", "#C97D5E"],
    ["#0F1F33", "#7BC97F"],
    ["#1B2A40", "#E6A940"],
  ];
  const [bg, accent] = palettes[Math.abs(h) % palettes.length];
  const id = `card-${slug}`;
  const sunY = 80 + (Math.abs(h) % 40);
  return (
    <svg
      viewBox="0 0 400 250"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bg} />
          <stop offset="100%" stopColor="#0B1929" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="250" fill={`url(#${id})`} />
      <path
        d={`M 30 200 Q 200 ${sunY - 30}, 370 200`}
        stroke={accent}
        strokeOpacity="0.55"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 5"
      />
      <circle cx="200" cy={sunY} r="36" fill={accent} fillOpacity="0.16" />
      <circle cx="200" cy={sunY} r="9" fill={accent} fillOpacity="0.6" />
    </svg>
  );
}
