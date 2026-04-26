import { Link } from "@/i18n/navigation";

/**
 * ScrollRow — runrepeat "Latest reviews" / "Popular guides" replica, dark variant.
 *
 * Horizontal-scroll row of N cards. Each card = a 4:3 gradient image-slot
 * placeholder above a title + small mono date line. Flips to overflow-x
 * scroll on narrow viewports.
 */

type Variant = "dawn" | "zenith" | "ember" | "midnight";

const variantBg: Record<Variant, string> = {
  dawn: "linear-gradient(135deg, #C8912F 0%, #E6A940 60%, #F0C678 100%)",
  zenith: "linear-gradient(135deg, #2A4A6A 0%, #3D6A87 60%, #5EAFC9 100%)",
  ember: "linear-gradient(135deg, #2A2A2A 0%, #6F4030 60%, #C97D5E 100%)",
  midnight: "linear-gradient(135deg, #060F1B 0%, #112337 60%, #1E3047 100%)",
};

const cycle: Variant[] = ["dawn", "zenith", "midnight", "ember", "zenith", "dawn", "midnight"];

export type ScrollRowCard = {
  href: string;
  title: string;
  meta: string;
};

export function ScrollRow({
  heading,
  cards,
}: {
  heading: string;
  cards: ScrollRowCard[];
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
        <div
          className="grid grid-flow-col auto-cols-[70%] sm:auto-cols-[40%] md:auto-cols-[calc((100%-1.5rem*6)/7)] gap-4 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {cards.slice(0, 7).map((card, i) => (
            <Link
              key={`${card.href}-${i}`}
              href={card.href}
              className="group block"
              style={{ scrollSnapAlign: "start" }}
            >
              <div
                role="img"
                aria-label=""
                className="aspect-[4/3] w-full border border-rule group-hover:border-dawn transition-colors"
                style={{ backgroundImage: variantBg[cycle[i % cycle.length]] }}
              />
              <h3 className="mt-3 text-paper text-[14px] font-semibold leading-snug group-hover:text-dawn transition-colors line-clamp-2">
                {card.title}
              </h3>
              <div className="mt-1.5 caps-label text-slate">{card.meta}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
