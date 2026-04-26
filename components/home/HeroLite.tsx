import { Link } from "@/i18n/navigation";

/**
 * HeroLite — runrepeat-inspired minimal hero, dark midnight variant.
 *
 * Single H1 (IBM Plex Sans 400 60px, paper/cream, left-aligned, max-w-3xl)
 * with a single mono caps line below pointing at /pipeline. Optional 40/60
 * hero image-slot placeholder on the right (amber/zenith gradient).
 */

const heroSlotBg =
  "linear-gradient(135deg, #1E3047 0%, #2A4A6A 60%, #5EAFC9 100%)";

export function HeroLite({
  h1,
  metaLine,
  pipelineHref = "/pipeline",
  showImageSlot = true,
}: {
  h1: string;
  metaLine: string;
  pipelineHref?: string;
  showImageSlot?: boolean;
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-14 md:pb-20">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <h1
              className="font-normal text-paper"
              style={{
                fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              {h1}
            </h1>
            <Link
              href={pipelineHref}
              className="mt-6 inline-flex items-center gap-1.5 caps-label text-slate hover:text-dawn transition-colors"
            >
              <span>{metaLine}</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
          {showImageSlot && (
            <div className="md:col-span-5">
              <div
                role="img"
                aria-label=""
                className="aspect-[4/3] w-full border border-rule"
                style={{ backgroundImage: heroSlotBg }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
