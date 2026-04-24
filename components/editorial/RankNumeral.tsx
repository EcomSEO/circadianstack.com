/**
 * Large monospace rank numeral — amber, tabular, zero-padded to 2 digits.
 * Used on hub indexes, ranked lists, Protocol card row counters.
 */
export function RankNumeral({
  n,
  className = "",
}: {
  n: number;
  className?: string;
}) {
  const display = n.toString().padStart(2, "0");
  return <span className={`rank-numeral tnum ${className}`}>{display}</span>;
}
