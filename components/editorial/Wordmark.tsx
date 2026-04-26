import { Link } from "@/i18n/navigation";

/**
 * CircadianStack wordmark. Technical / monospace-adjacent — the site is a
 * lab notebook, not a magazine. The small amber dot after the name is a
 * chronotype nod: it represents the "current protocol window" indicator.
 */
export function Wordmark({
  size = "md",
  asLink = true,
  showDot = true,
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
  showDot?: boolean;
  className?: string;
}) {
  const sizeClass =
    size === "xl"
      ? "text-5xl md:text-6xl"
      : size === "lg"
      ? "text-4xl md:text-5xl"
      : size === "sm"
      ? "text-lg"
      : "text-[1.375rem]";

  const markSize =
    size === "xl"
      ? "h-10 w-10 md:h-12 md:w-12"
      : size === "lg"
      ? "h-9 w-9 md:h-10 md:w-10"
      : size === "sm"
      ? "h-5 w-5"
      : "h-7 w-7 md:h-8 md:w-8";

  const inner = (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/mark.svg"
        alt=""
        aria-hidden
        className={`${markSize} shrink-0`}
      />
      <span className="inline-flex items-baseline gap-0">
        <span
          className={`font-serif ${sizeClass} text-paper font-medium tracking-[-0.01em]`}
        >
          Circadian
        </span>
        <span
          className={`font-serif ${sizeClass} text-dawn font-medium tracking-[-0.01em]`}
        >
          Stack
        </span>
        {showDot && (
          <span
            aria-hidden
            className="ml-1.5 mb-1 h-1.5 w-1.5 rounded-full bg-dawn shadow-[0_0_8px_rgba(230,169,64,0.6)] self-end"
            title="Current protocol window"
          />
        )}
      </span>
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link
      href="/"
      aria-label="CircadianStack — home"
      className="inline-block group"
    >
      {inner}
    </Link>
  );
}
