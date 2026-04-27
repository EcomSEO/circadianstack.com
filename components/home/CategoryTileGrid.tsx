import { Link } from "@/i18n/navigation";
import { hubs, localizeHub } from "@/lib/content/hubs";
import { postsByHub } from "@/lib/content/posts";
import type { Locale } from "@/i18n/routing";

/**
 * CategoryTileGrid — healthline-grade scannable hub tiles.
 *
 * 4→2→1 col responsive grid. Each tile: 16:10 gradient placeholder with a
 * unique sun/phase-of-day signature, category eyebrow (12px caps tracking
 * 0.05em amber), H3, 2-line dek, post count. Hover lifts.
 */
export function CategoryTileGrid({
  heading,
  caption,
  postsLabel,
  locale,
}: {
  heading: string;
  caption: string;
  postsLabel: string;
  locale: Locale;
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="flex items-end justify-between gap-6 mb-7 md:mb-8">
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn">
              CATEGORIES
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {hubs.map((hub, i) => {
            const local = localizeHub(hub, locale);
            const count = postsByHub(hub.slug).length;
            return (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                className="group block rounded-md border border-rule bg-midnight-raised/55 hover:border-dawn/45 hover:bg-midnight-raised transition-all overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <CategoryArt index={i} />
                </div>
                <div className="p-4 md:p-5">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-dawn">
                    HUB · 0{i + 1}
                  </div>
                  <h3
                    className="mt-1.5 text-paper font-semibold group-hover:text-dawn transition-colors leading-tight"
                    style={{
                      fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                      fontSize: "1.125rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {local.name}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-snug text-paper/70 line-clamp-2">
                    {local.oneLiner}
                  </p>
                  <div className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-slate">
                    {count} {postsLabel}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Per-hub mini-art — five gradient signatures referencing phase-of-day */
function CategoryArt({ index }: { index: number }) {
  // 0 light, 1 sleep, 2 chronotype, 3 tools, 4 edge cases
  const palettes = [
    ["#1A2840", "#E6A940"], // light & zeitgebers — dawn amber
    ["#0B1929", "#3D4A6B"], // sleep architecture — deep night
    ["#142A48", "#5EAFC9"], // chronotype — zenith cyan
    ["#15283D", "#C97D5E"], // tools — ember
    ["#0F1F33", "#7BC97F"], // edge cases — success green
  ];
  const [bg, accent] = palettes[index % palettes.length];
  return (
    <svg
      viewBox="0 0 400 250"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className="block"
    >
      <defs>
        <linearGradient id={`cat-${index}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bg} />
          <stop offset="100%" stopColor="#0B1929" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="250" fill={`url(#cat-${index})`} />
      {/* Sun arc */}
      <path
        d={`M 40 ${190 - index * 5} Q 200 ${40 + index * 8}, 360 ${190 - index * 5}`}
        stroke={accent}
        strokeOpacity="0.6"
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="3 6"
      />
      <circle cx={200} cy={120 - index * 6} r={32 + index * 2} fill={accent} fillOpacity="0.18" />
      <circle cx={200} cy={120 - index * 6} r={10} fill={accent} fillOpacity="0.55" />
      {/* Phase ticks */}
      {[40, 120, 200, 280, 360].map((x, j) => (
        <line
          key={j}
          x1={x}
          y1={210}
          x2={x}
          y2={220}
          stroke={accent}
          strokeOpacity={j === Math.min(index, 4) ? 0.95 : 0.4}
          strokeWidth={j === Math.min(index, 4) ? 2 : 1}
        />
      ))}
    </svg>
  );
}
