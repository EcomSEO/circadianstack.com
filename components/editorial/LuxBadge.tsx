/**
 * LuxBadge — CircadianStack's site-unique spec pill.
 *
 * Displays a measured lux value at a specific distance, e.g.
 *   10,000 lux @ 18 in   or   2,500 lux @ 24 in
 *
 * Used on ComparisonTemplate rank cards (light therapy lamps,
 * sunrise alarms), in Protocol cards, and anywhere the site needs to
 * foreground dose-accurate product data. Monospace numerals in amber.
 *
 * `spec` + `at` render the classic "10,000 lux @ 18 in" pattern.
 * Pass `label` to reuse the pill for adjacent specs (wavelength, CCT).
 */
export function LuxBadge({
  spec,
  at,
  label = "Lux",
  unit = "lux",
  tone = "dawn",
  className = "",
}: {
  spec: string | number;
  at?: string;
  label?: string;
  unit?: string;
  tone?: "dawn" | "zenith" | "ember";
  className?: string;
}) {
  const toneClass =
    tone === "zenith"
      ? "text-zenith border-zenith/30 bg-zenith/[0.07]"
      : tone === "ember"
      ? "text-ember border-ember/30 bg-ember/[0.07]"
      : "text-dawn border-dawn/30 bg-dawn/[0.08]";

  const displaySpec =
    typeof spec === "number" ? spec.toLocaleString("en-US") : spec;

  return (
    <span
      className={`lux-badge ${toneClass} ${className}`}
      aria-label={`${label}: ${displaySpec} ${unit}${at ? ` at ${at}` : ""}`}
    >
      <span className="lux-unit" aria-hidden>
        {label}
      </span>
      <span className="font-semibold tracking-tight">
        {displaySpec}
        <span className="lux-unit ml-1.5" aria-hidden>
          {unit}
        </span>
      </span>
      {at && (
        <>
          <span className="text-slate/70 mx-0.5" aria-hidden>
            @
          </span>
          <span className="font-medium">{at}</span>
        </>
      )}
    </span>
  );
}
