/**
 * ReviewerStamp — DIFFERENTIATOR. Round 56px reviewer "photo" (initials
 * monogram on dawn-amber gradient since we don't bundle real photos) +
 * name + credentials + last-reviewed date + chronobiology-specific
 * editorial pledge. Sits above prose in articles.
 */
export function ReviewerStamp({
  name,
  credentials,
  reviewedDate,
}: {
  name: string;
  credentials: string;
  reviewedDate: string;
}) {
  const initials = name
    .replace(/^Dr\.\s*/, "")
    .split(/\s+/)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);
  return (
    <aside
      aria-label={`Reviewed by ${name}, ${credentials}`}
      className="rounded-md border border-rule bg-midnight-raised/65 p-4 md:p-5"
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden
          className="shrink-0 w-14 h-14 rounded-full grid place-items-center font-semibold tnum"
          style={{
            background:
              "linear-gradient(140deg, rgba(230,169,64,0.45) 0%, rgba(94,175,201,0.28) 100%)",
            color: "#0B1929",
            fontFamily: '"IBM Plex Mono", ui-monospace, monospace',
            fontSize: "16px",
            letterSpacing: "0.04em",
          }}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-dawn">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Peer Review</span>
          </div>
          <div className="mt-1 text-paper text-[15px] font-semibold leading-snug">
            Reviewed by {name}
          </div>
          <div className="text-paper/75 text-[13.5px] leading-snug">
            {credentials}
          </div>
          <div className="mt-2 font-mono text-[10.5px] tracking-[0.16em] uppercase text-slate tnum-serif">
            Last reviewed {reviewedDate}
          </div>
          <p className="mt-3 text-[13px] leading-snug text-paper/70 max-w-md">
            Independent peer review · No supplement-vendor sponsorship · No coaching upsell.
          </p>
        </div>
      </div>
    </aside>
  );
}
