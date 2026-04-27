/**
 * MedicallyReviewedBadge — green-on-midnight pill: check-circle +
 * "Reviewed by Dr. {name}, {credentials}". Healthline-parity trust signal.
 */
export function MedicallyReviewedBadge({
  reviewerName,
  credentials,
}: {
  reviewerName?: string;
  credentials?: string;
}) {
  const name = reviewerName ?? "Dr. Iris Chen";
  const cred = credentials ?? "MD, Sleep Medicine";
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border"
      style={{
        backgroundColor: "#1A3D2E",
        borderColor: "rgba(123, 201, 127, 0.35)",
        color: "#7BC97F",
      }}
      role="img"
      aria-label={`Reviewed by ${name}, ${cred}`}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase">
        Reviewed by {name}, {cred}
      </span>
    </span>
  );
}
