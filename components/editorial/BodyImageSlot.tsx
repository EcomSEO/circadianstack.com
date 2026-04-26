/**
 * BodyImageSlot — inline image-slot placeholder for pliability-style article bodies.
 *
 * Renders a flat, gradient-tinted rectangle (no decorative SVGs, no logos),
 * full-container width, with optional caption beneath in caps mono 11px slate.
 *
 * Variants pull from the circadianstack dark palette so the placeholder
 * reads editorial-warm without competing with the typography.
 */

type Aspect = "16:10" | "4:5" | "1:1" | "16:9" | "21:9";
type Variant = "dawn" | "zenith" | "ember" | "midnight";

const aspectClass: Record<Aspect, string> = {
  "16:10": "aspect-[16/10]",
  "4:5": "aspect-[4/5]",
  "1:1": "aspect-square",
  "16:9": "aspect-video",
  "21:9": "aspect-[21/9]",
};

const variantBg: Record<Variant, string> = {
  dawn: "linear-gradient(135deg, #C8912F 0%, #E6A940 60%, #F0C678 100%)",
  zenith: "linear-gradient(135deg, #2A4A6A 0%, #3D6A87 60%, #5EAFC9 100%)",
  ember: "linear-gradient(135deg, #2A2A2A 0%, #6F4030 60%, #C97D5E 100%)",
  midnight: "linear-gradient(135deg, #060F1B 0%, #112337 60%, #1E3047 100%)",
};

export function BodyImageSlot({
  aspect = "16:10",
  variant = "dawn",
  caption,
  className = "",
}: {
  aspect?: Aspect;
  variant?: Variant;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`my-12 md:my-16 ${className}`}>
      <div
        role="img"
        aria-label={caption ?? "Editorial illustration"}
        className={`w-full ${aspectClass[aspect]} overflow-hidden rounded-none`}
        style={{ backgroundImage: variantBg[variant] }}
      />
      {caption && (
        <figcaption className="mt-3 caps-label text-slate">{caption}</figcaption>
      )}
    </figure>
  );
}
