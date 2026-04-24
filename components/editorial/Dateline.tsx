import { SITE } from "@/lib/content/site";

/**
 * "Protocol Log · Issue N · {date}" — the lab-notebook masthead strip.
 * Monospace, slate, tracked-out caps. Top of the header on desktop.
 */

function currentMonth() {
  const d = new Date();
  return d.toLocaleString("en-US", { month: "long", year: "numeric" });
}

export function Dateline({
  className = "",
  showDomain = true,
}: {
  className?: string;
  showDomain?: boolean;
}) {
  return (
    <div className={`dateline flex items-center gap-3 ${className}`}>
      <span className="text-dawn/80">{SITE.protocolLogPrefix}</span>
      <span aria-hidden className="text-rule">·</span>
      <span>{SITE.issue}</span>
      <span aria-hidden className="text-rule">·</span>
      <span>{currentMonth()}</span>
      {showDomain && (
        <>
          <span aria-hidden className="text-rule">·</span>
          <span>{SITE.url.replace(/^https?:\/\//, "")}</span>
        </>
      )}
    </div>
  );
}
