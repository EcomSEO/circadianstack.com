/**
 * CircadianStack affiliate registry.
 *
 * Per the 2026-04-29 monetization lock and the brand-DNA hard rules in
 * `CLAUDE.md`, this registry contains:
 *
 *   - Light-therapy lamps (Verilux, Carex, Northern Light Technologies)
 *   - Dawn simulators (Philips, Casper Glow, Hatch)
 *   - Sleep supplements (Thorne magnesium, Pure Encapsulations melatonin,
 *     NOW L-theanine, Designs for Health 5-HTP)
 *   - Sleep tools (mouth tape, sleep masks, blackout curtains)
 *
 * It MUST NOT contain:
 *
 *   - Weight-loss supplement brands (conflicts with sleep brand)
 *   - MLM "biohacking" stacks
 *   - Telehealth GLP-1 prescribers
 *   - Peptide vendors
 *
 * Affiliate revenue does NOT influence StackScoreCard scores. The
 * methodology page must say so explicitly. The pre-commit hook should
 * block edits that introduce a forbidden brand here.
 *
 * Schema follows the network-wide bridge-monetization pattern.
 */

export type AffiliateLink = {
  productKey: string;
  brand: string;
  name: string;
  thirdPartyUrl: string;
  thirdPartyLabel:
    | "Amazon"
    | "Direct"
    | "Verilux"
    | "Carex"
    | "Philips"
    | "Hatch"
    | "Manta"
    | "Thorne";
  /** Populated when the owned shop ships the SKU. */
  ownedShopUrl?: string;
  ownedShopAvailableFromDate?: string;
  category:
    | "light-therapy-lamp"
    | "dawn-simulator"
    | "sleep-supplement"
    | "sleep-tool";
  blurb: string;
  /** Lux output at 12 inches (light-therapy lamp specific). */
  luxAt12in?: number;
};

const AMAZON_TAG = "circadianstack-20";
const amazonUrl = (asin: string) =>
  `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`;

export const AFFILIATES: Record<string, AffiliateLink> = {
  // ── Light-therapy lamps ───────────────────────────────────────────
  "verilux-happylight-luxe": {
    productKey: "verilux-happylight-luxe",
    brand: "Verilux",
    name: "HappyLight Luxe (10,000 lux)",
    thirdPartyUrl: amazonUrl("B07GR1V99F"),
    thirdPartyLabel: "Amazon",
    category: "light-therapy-lamp",
    blurb:
      "10,000 lux at the recommended treatment distance, UV-filtered, 4 brightness levels. Standard SAD-trial dose at the standard distance.",
    luxAt12in: 10000,
  },
  "carex-day-light-classic-plus": {
    productKey: "carex-day-light-classic-plus",
    brand: "Carex",
    name: "Day-Light Classic Plus",
    thirdPartyUrl: amazonUrl("B0017LBINI"),
    thirdPartyLabel: "Carex",
    category: "light-therapy-lamp",
    blurb:
      "10,000 lux at 14 inches (the largest face-area in this class). The lamp the Columbia / NIMH SAD trials used for protocol standardisation.",
    luxAt12in: 10000,
  },
  "northern-light-tech-boxelite": {
    productKey: "northern-light-tech-boxelite",
    brand: "Northern Light Technologies",
    name: "Boxelite (10,000 lux)",
    thirdPartyUrl: "https://northernlighttechnologies.com/products/boxelite/",
    thirdPartyLabel: "Direct",
    category: "light-therapy-lamp",
    blurb:
      "Canadian-built, glare-free diffuser, true 10,000 lux at the recommended distance. The reviewer pick when budget is not the constraint.",
    luxAt12in: 10000,
  },

  // ── Dawn simulators ────────────────────────────────────────────────
  "philips-smartsleep-wake-up": {
    productKey: "philips-smartsleep-wake-up",
    brand: "Philips",
    name: "SmartSleep Wake-Up Light HF3650",
    thirdPartyUrl: amazonUrl("B07HHRY5L8"),
    thirdPartyLabel: "Philips",
    category: "dawn-simulator",
    blurb:
      "30-minute simulated sunrise, 20 brightness steps, 5 alarm sounds. The most-studied dawn simulator in published trials.",
  },
  "hatch-restore-2": {
    productKey: "hatch-restore-2",
    brand: "Hatch",
    name: "Restore 2",
    thirdPartyUrl: amazonUrl("B0BHHGVH37"),
    thirdPartyLabel: "Hatch",
    category: "dawn-simulator",
    blurb:
      "Sunrise alarm + sound machine + reading light. Useful for morning-anchoring without phone-on-nightstand.",
  },

  // ── Sleep supplements ──────────────────────────────────────────────
  "thorne-magnesium-glycinate": {
    productKey: "thorne-magnesium-glycinate",
    brand: "Thorne",
    name: "Magnesium Bisglycinate",
    thirdPartyUrl: amazonUrl("B07KFXSBLD"),
    thirdPartyLabel: "Thorne",
    category: "sleep-supplement",
    blurb:
      "NSF Certified for Sport. The standard-of-care magnesium for sleep when the goal is GABA-A modulation rather than laxative effect.",
  },
  "pure-encapsulations-melatonin-05mg": {
    productKey: "pure-encapsulations-melatonin-05mg",
    brand: "Pure Encapsulations",
    name: "Melatonin 0.5 mg",
    thirdPartyUrl: amazonUrl("B0017OAB6E"),
    thirdPartyLabel: "Amazon",
    category: "sleep-supplement",
    blurb:
      "0.5 mg dose — the physiological range cited in chronobiology trials, not the 5–10 mg over-the-counter default that overshoots receptor saturation.",
  },
  "now-l-theanine-200mg": {
    productKey: "now-l-theanine-200mg",
    brand: "NOW Foods",
    name: "L-Theanine 200 mg",
    thirdPartyUrl: amazonUrl("B0013OXKHC"),
    thirdPartyLabel: "Amazon",
    category: "sleep-supplement",
    blurb:
      "Alpha-wave amplitude lift in EEG studies; the GABAergic supplement the literature actually supports for sleep-onset.",
  },

  // ── Sleep tools ────────────────────────────────────────────────────
  "manta-sleep-mask-pro": {
    productKey: "manta-sleep-mask-pro",
    brand: "Manta",
    name: "Sleep Mask Pro",
    thirdPartyUrl: amazonUrl("B07ZGBFNHP"),
    thirdPartyLabel: "Manta",
    category: "sleep-tool",
    blurb:
      "True-blackout (no light leak at the bridge of the nose), zero pressure on the eyelids. The mask we cite in DSPS protocol cards.",
  },
  "hostage-tape": {
    productKey: "hostage-tape",
    brand: "Hostage Tape",
    name: "Mouth Tape",
    thirdPartyUrl: "https://hostagetape.com/",
    thirdPartyLabel: "Direct",
    category: "sleep-tool",
    blurb:
      "Hypoallergenic adhesive, breath-through perforation. Useful for habitual mouth-breathers; never use if nasal obstruction is undiagnosed.",
  },
};

export function getAffiliate(
  productKey: string,
): { url: string; label: string; isOwned: boolean } | null {
  const a = AFFILIATES[productKey];
  if (!a) return null;
  if (a.ownedShopUrl) {
    return { url: a.ownedShopUrl, label: "CircadianStack Shop", isOwned: true };
  }
  return { url: a.thirdPartyUrl, label: a.thirdPartyLabel, isOwned: false };
}

export function affiliatesByCategory(
  category: AffiliateLink["category"],
): AffiliateLink[] {
  return Object.values(AFFILIATES).filter((a) => a.category === category);
}
