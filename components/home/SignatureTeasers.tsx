import { Link } from "@/i18n/navigation";

/**
 * SignatureTeasers — goodrx-style large editorial cards, three-up.
 *
 * Each card has a tall gradient image-slot, an amber eyebrow, a 1.5rem H3,
 * a one-line subtitle, and an arrow CTA. Hover lifts border to amber and
 * tints the eyebrow. Cards are framed for chronobiology, not Rx pricing:
 * "The Sleep Stack", "Light Levers", "Supplement Triage".
 */

type Variant = "dawn" | "zenith" | "ember";

const variantBg: Record<Variant, string> = {
  dawn: "linear-gradient(155deg, #2A1B0A 0%, #6F4F1F 45%, #C8912F 100%)",
  zenith: "linear-gradient(155deg, #0B1929 0%, #2A4A6A 45%, #5EAFC9 100%)",
  ember: "linear-gradient(155deg, #1A0F0A 0%, #5A3325 45%, #C97D5E 100%)",
};

const variantNoise =
  "radial-gradient(circle at 22% 18%, rgba(255,255,255,0.08) 0, transparent 22%)," +
  "radial-gradient(circle at 78% 64%, rgba(0,0,0,0.18) 0, transparent 30%)";

export type SignatureTeaser = {
  href: string;
  eyebrow: string;
  title: string;
  blurb: string;
  ctaLabel: string;
  variant: Variant;
};

export function SignatureTeasers({
  heading,
  subheading,
  teasers,
}: {
  heading: string;
  subheading?: string;
  teasers: SignatureTeaser[];
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-12 flex-wrap">
          <div>
            <h2
              className="font-normal text-paper"
              style={{
                fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                fontSize: "clamp(1.75rem, 3.4vw, 2.25rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
              }}
            >
              {heading}
            </h2>
            {subheading && (
              <p className="mt-3 text-[15px] text-paper/70 max-w-prose">
                {subheading}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {teasers.map((t, i) => (
            <Link
              key={`${t.href}-${i}`}
              href={t.href}
              className="group relative flex flex-col border border-rule hover:border-dawn transition-colors overflow-hidden"
            >
              <div
                role="img"
                aria-label=""
                className="aspect-[5/4] w-full"
                style={{
                  backgroundImage: `${variantNoise}, ${variantBg[t.variant]}`,
                }}
              />
              <div className="p-5 md:p-6">
                <div className="caps-label text-dawn group-hover:text-paper transition-colors">
                  {t.eyebrow}
                </div>
                <h3
                  className="mt-3 text-paper font-medium leading-tight"
                  style={{
                    fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                    fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t.title}
                </h3>
                <p className="mt-3 text-[14.5px] text-paper/70 leading-relaxed">
                  {t.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 caps-label text-slate group-hover:text-dawn transition-colors">
                  <span>{t.ctaLabel}</span>
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
