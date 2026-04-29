import { PRIMARY_SLEEP_REVIEWER } from "@/lib/content/reviewers";

/**
 * MedicallyReviewedBadge — green-on-midnight pill: check-circle +
 * "Reviewed by Dr. {name}, {credentials}". Healthline-parity trust signal.
 *
 * Per the 2026-04-29 audit-fix sweep, when the reviewer's
 * `verifiedCredential` is false a small "credential pending" caption
 * renders below the badge so the trust signal does not overstate the
 * E-E-A-T position before the public-register lookup is complete.
 */
export function MedicallyReviewedBadge({
  reviewerName,
  credentials,
}: {
  reviewerName?: string;
  credentials?: string;
}) {
  const name = reviewerName ?? PRIMARY_SLEEP_REVIEWER.name;
  const cred = credentials ?? PRIMARY_SLEEP_REVIEWER.credentials;
  const verified = PRIMARY_SLEEP_REVIEWER.verifiedCredential;
  return (
    <span className="inline-flex flex-col items-start gap-1.5">
      <span
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border"
        style={{
          backgroundColor: verified ? "#1A3D2E" : "#3D2A1A",
          borderColor: verified
            ? "rgba(123, 201, 127, 0.35)"
            : "rgba(230, 169, 64, 0.35)",
          color: verified ? "#7BC97F" : "#E6A940",
        }}
        role="img"
        aria-label={`Reviewed by ${name}, ${cred}${verified ? "" : " (credential verification pending)"}`}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase">
          Reviewed by {name}, {cred}
        </span>
      </span>
      {!verified && (
        <span className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-stone">
          Credential verification pending
        </span>
      )}
    </span>
  );
}
