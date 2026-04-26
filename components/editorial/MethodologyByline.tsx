import { Link } from "@/i18n/navigation";

/**
 * MethodologyByline — sits between the article subhead and the hero image.
 *
 * Layout: a small monogram circle (amber on midnight), then "By {author}",
 * a "Reviewed {date}" stamp, optional reading time, and a "Methodology v1.2"
 * link. All text is mono caps 11px slate. Pliability puts reading time near
 * the byline; we mirror that.
 */
export function MethodologyByline({
  author = "The CircadianStack Editorial Team",
  monogram = "CS",
  reviewedOn,
  readingTime,
}: {
  author?: string;
  monogram?: string;
  reviewedOn?: string;
  readingTime?: number;
}) {
  const formatted = reviewedOn
    ? new Date(reviewedOn).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="mt-6 flex items-center gap-3">
      <span
        aria-hidden
        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-dawn text-midnight text-[10px] font-medium tracking-wider font-mono"
      >
        {monogram}
      </span>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 caps-label text-slate">
        <span>By {author}</span>
        {formatted && (
          <>
            <span aria-hidden className="text-rule">·</span>
            <span>Reviewed {formatted}</span>
          </>
        )}
        {typeof readingTime === "number" && readingTime > 0 && (
          <>
            <span aria-hidden className="text-rule">·</span>
            <span className="tnum">{readingTime} min read</span>
          </>
        )}
        <span aria-hidden className="text-rule">·</span>
        <Link
          href="/methodology"
          className="hover:text-dawn transition-colors underline decoration-slate/40 underline-offset-2"
        >
          Methodology v1.2 <span aria-hidden>↗</span>
        </Link>
      </div>
    </div>
  );
}
