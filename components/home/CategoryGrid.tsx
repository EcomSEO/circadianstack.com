import { Link } from "@/i18n/navigation";

/**
 * CategoryGrid — runrepeat "Reviews" replica, dark midnight variant.
 *
 * 8 image tiles in a 4×2 grid. Each tile is a 1:1 amber/zenith/ember
 * gradient image-slot placeholder above a small caps mono label. Hover
 * tints the border amber.
 */

type Variant = "dawn" | "zenith" | "ember" | "midnight";

const variantBg: Record<Variant, string> = {
  dawn: "linear-gradient(135deg, #C8912F 0%, #E6A940 60%, #F0C678 100%)",
  zenith: "linear-gradient(135deg, #2A4A6A 0%, #3D6A87 60%, #5EAFC9 100%)",
  ember: "linear-gradient(135deg, #2A2A2A 0%, #6F4030 60%, #C97D5E 100%)",
  midnight: "linear-gradient(135deg, #060F1B 0%, #112337 60%, #1E3047 100%)",
};

const cycle: Variant[] = ["dawn", "zenith", "midnight", "ember", "zenith", "dawn", "midnight", "ember"];

export type CategoryTile = {
  href: string;
  label: string;
};

export function CategoryGrid({
  heading,
  tiles,
}: {
  heading: string;
  tiles: CategoryTile[];
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2
          className="font-light text-paper mb-10"
          style={{
            fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
            fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
          {tiles.slice(0, 8).map((tile, i) => (
            <Link
              key={`${tile.href}-${i}`}
              href={tile.href}
              className="group block"
            >
              <div
                role="img"
                aria-label=""
                className="aspect-square w-full border border-rule group-hover:border-dawn transition-colors"
                style={{ backgroundImage: variantBg[cycle[i % cycle.length]] }}
              />
              <div className="mt-3 caps-label text-slate group-hover:text-dawn transition-colors">
                {tile.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
