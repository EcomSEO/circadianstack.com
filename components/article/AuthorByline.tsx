import { MedicallyReviewedBadge } from "./MedicallyReviewedBadge";

/**
 * AuthorByline — author avatar + name + reviewed-by badge + date.
 * Compact strip beneath the article hero.
 */
export function AuthorByline({
  authorName,
  authorRole,
  reviewerName,
  reviewerCredentials,
  publishedAt,
  reviewedAt,
  readingTime,
}: {
  authorName: string;
  authorRole: string;
  reviewerName: string;
  reviewerCredentials: string;
  publishedAt: string;
  reviewedAt: string;
  readingTime: number;
}) {
  const initials = authorName
    .split(/\s+/)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 py-4 border-y border-rule">
      <div className="flex items-center gap-3">
        <div
          aria-hidden
          className="w-9 h-9 rounded-full grid place-items-center font-semibold"
          style={{
            background:
              "linear-gradient(140deg, rgba(230,169,64,0.5) 0%, rgba(94,175,201,0.3) 100%)",
            color: "#0B1929",
            fontFamily: '"IBM Plex Mono", ui-monospace, monospace',
            fontSize: "12px",
          }}
        >
          {initials}
        </div>
        <div className="leading-tight">
          <div className="text-paper text-[14px] font-semibold">
            By {authorName}
          </div>
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate">
            {authorRole}
          </div>
        </div>
      </div>
      <span aria-hidden className="hidden md:inline-block w-px h-6 bg-rule" />
      <MedicallyReviewedBadge
        reviewerName={reviewerName}
        credentials={reviewerCredentials}
      />
      <span aria-hidden className="hidden md:inline-block w-px h-6 bg-rule" />
      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="tnum-serif">PUBLISHED {publishedAt}</span>
        <span aria-hidden className="text-rule">·</span>
        <span className="tnum-serif">REVIEWED {reviewedAt}</span>
        <span aria-hidden className="text-rule">·</span>
        <span className="tnum-serif">{readingTime} MIN</span>
      </div>
    </div>
  );
}
