/**
 * BodyImageSlot — inline image-slot placeholder for pliability-style bodies.
 *
 * Renders a flat, gradient-tinted rectangle with a subtle noise/grain overlay
 * (radial micro-dots), full-container width, with optional caption beneath
 * in caps mono 11px slate.
 *
 * The grain is the difference between a placeholder that looks like dev work
 * and one that reads as intentional editorial photography. Variants pull from
 * the circadianstack dark palette so the placeholder reads editorial-warm
 * without competing with the typography.
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

// Two-stop dark→accent gradients give the slot a horizon/dawn feeling
// rather than the flat candy-gradient of a typical placeholder.
const variantBg: Record<Variant, string> = {
  dawn: "linear-gradient(160deg, #1A0F02 0%, #4A2F0A 35%, #C8912F 78%, #F0C678 100%)",
  zenith: "linear-gradient(160deg, #060F1B 0%, #1E3047 35%, #3D6A87 70%, #5EAFC9 100%)",
  ember: "linear-gradient(160deg, #0E0707 0%, #2A2A2A 30%, #6F4030 65%, #C97D5E 100%)",
  midnight: "linear-gradient(160deg, #060F1B 0%, #0B1929 45%, #112337 80%, #1E3047 100%)",
};

// Subtle grain — two soft radial highlights + a faint micro-dot pattern give
// the placeholder a film-grain feel without needing an SVG noise filter.
const grainOverlay =
  "radial-gradient(circle at 24% 18%, rgba(255,255,255,0.10) 0, transparent 28%)," +
  "radial-gradient(circle at 76% 70%, rgba(0,0,0,0.22) 0, transparent 38%)," +
  "radial-gradient(1px 1px at 12% 32%, rgba(255,255,255,0.06) 50%, transparent 51%)," +
  "radial-gradient(1px 1px at 64% 22%, rgba(255,255,255,0.05) 50%, transparent 51%)," +
  "radial-gradient(1px 1px at 84% 58%, rgba(0,0,0,0.12) 50%, transparent 51%)," +
  "radial-gradient(1px 1px at 38% 82%, rgba(255,255,255,0.04) 50%, transparent 51%)";

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
        className={`w-full ${aspectClass[aspect]} overflow-hidden rounded-none border border-rule/60`}
        style={{
          backgroundImage: `${grainOverlay}, ${variantBg[variant]}`,
          backgroundSize: "cover, cover, 220px 220px, 260px 260px, 200px 200px, 240px 240px, cover",
        }}
      />
      {caption && (
        <figcaption className="mt-3 caps-label text-slate">{caption}</figcaption>
      )}
    </figure>
  );
}
