import { Link } from "@/i18n/navigation";

/**
 * BrowseByLever — drugs.com 4-up utility tile pattern, reframed for
 * chronobiology levers (Light · Temperature · Movement · Nutrition).
 *
 * Compact one-row strip on desktop, 2x2 on mobile. Each tile is a flat
 * midnight-raised card with an amber stroke icon, a 1rem H4 label, a
 * small mono caps sub-line, hover-lifts the border to amber.
 */

export type LeverTile = {
  href: string;
  label: string;
  sub: string;
  icon: "light" | "temp" | "movement" | "nutrition";
};

function Icon({ name }: { name: LeverTile["icon"] }) {
  const stroke = "currentColor";
  const sw = "1.6";
  switch (name) {
    case "light":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" strokeLinecap="round" />
        </svg>
      );
    case "temp":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} aria-hidden>
          <path d="M14 14.76V4a2 2 0 0 0-4 0v10.76a4 4 0 1 0 4 0Z" strokeLinejoin="round" />
        </svg>
      );
    case "movement":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} aria-hidden>
          <circle cx="13" cy="4.5" r="1.5" />
          <path d="M5 21l3-7 4-2 3 4 4 1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 11l-2-3" strokeLinecap="round" />
        </svg>
      );
    case "nutrition":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} aria-hidden>
          <path d="M7 21V8c0-2.8 2.2-5 5-5s5 2.2 5 5v13" />
          <path d="M7 14h10" />
        </svg>
      );
  }
}

export function BrowseByLever({
  heading,
  tiles,
}: {
  heading: string;
  tiles: LeverTile[];
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2
          className="font-normal text-paper mb-8"
          style={{
            fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
            fontSize: "clamp(1.5rem, 2.6vw, 1.875rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.012em",
          }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {tiles.map((t, i) => (
            <Link
              key={`${t.href}-${i}`}
              href={t.href}
              className="group flex flex-col gap-3 p-5 md:p-6 border border-rule bg-midnight-raised/55 hover:border-dawn transition-colors"
            >
              <span className="text-dawn">
                <Icon name={t.icon} />
              </span>
              <div>
                <div
                  className="text-paper text-[15.5px] md:text-base font-medium leading-tight group-hover:text-dawn transition-colors"
                  style={{ fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif' }}
                >
                  {t.label}
                </div>
                <div className="mt-1.5 caps-label text-slate">{t.sub}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
