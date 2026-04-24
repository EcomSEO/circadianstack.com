type Tier =
  | "Our pick"
  | "Best value"
  | "Premium"
  | "Clinical grade"
  | "Skip"
  | "Editor's pick"
  | string;

function classFor(tier: string): string {
  const t = tier.toLowerCase();
  if (t.includes("skip") || t.includes("avoid")) return "tier-badge tier-badge-skip";
  if (t.includes("budget") || t.includes("value")) return "tier-badge tier-badge-zenith";
  if (t.includes("premium") || t.includes("clinical") || t.includes("flagship"))
    return "tier-badge tier-badge-ember";
  return "tier-badge";
}

export function TierBadge({ tier }: { tier: Tier }) {
  return <span className={classFor(tier)}>{tier}</span>;
}
