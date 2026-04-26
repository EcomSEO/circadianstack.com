import { Link } from "@/i18n/navigation";

/**
 * TrendingChips — drugs.com "Trending searches" pill row, reframed.
 *
 * Horizontal row of monospace caps chips on the midnight surface. Amber
 * "TRENDING" caps-label sits left, chips trail right. Each chip is a Link
 * to a query-string'd guides search or a hub. Voiced as protocols, not
 * product searches: "morning sunlight", "magnesium glycinate", etc.
 */

export type TrendingChip = {
  label: string;
  href: string;
};

export function TrendingChips({
  label,
  chips,
}: {
  label: string;
  chips: TrendingChip[];
}) {
  return (
    <section
      role="navigation"
      aria-label={label}
      className="border-b border-rule"
    >
      <div className="mx-auto max-w-6xl px-6 py-7 md:py-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
          <span className="caps-label text-dawn shrink-0 mr-2 inline-flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-dawn" />
            {label}
          </span>
          {chips.map((c, i) => (
            <Link
              key={`${c.href}-${i}`}
              href={c.href}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-rule text-paper/85 hover:border-dawn hover:text-dawn transition-colors text-[13px]"
              style={{ fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif' }}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
