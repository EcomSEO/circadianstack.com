/**
 * Per-post StackScoreCard data.
 *
 * Per the 2026-04-29 hard rule (05-circadianstack.md Phase 4): every
 * post on the site renders the StackScoreCard with PER-POST dimensions
 * tied to real citations — never the component default. This manifest
 * is the source of truth.
 *
 * Dimension weights (locked in v1.2 methodology):
 *   - trial:           35
 *   - mechanism:       20
 *   - reproducibility: 15
 *   - practicality:    15
 *   - safety:          15
 *
 * Each dimension carries a published rationale and primary-source URLs.
 * StackScoreCard reads from this manifest by slug; if a slug is not
 * present the component falls back to the legacy default and the
 * audit script flags the post as missing per-post data.
 */

export type StackDimensions = {
  trial: number; // 0-100
  mechanism: number;
  reproducibility: number;
  practicality: number;
  safety: number;
  rationale: {
    trial: string;
    mechanism: string;
    reproducibility: string;
    practicality: string;
    safety: string;
  };
  primarySources: string[];
  /** ISO date this entry was last reviewed by the editorial team. */
  lastReviewed: string;
};

export const STACK_BY_SLUG: Record<string, StackDimensions> = {
  "morning-sunlight-protocol": {
    trial: 82,
    mechanism: 95,
    reproducibility: 78,
    practicality: 70,
    safety: 95,
    rationale: {
      trial:
        "Multiple human chronobiology trials measure morning-light effects on dim-light melatonin onset (DLMO) phase advance — Khalsa et al. 2003 (J Physiol) is the canonical phase-response curve; Wright et al. 2013 (Curr Biol) showed entrainment to natural light cycles within 1 week of consistent morning exposure.",
      mechanism:
        "Direct ipRGC / melanopsin signalling to the suprachiasmatic nucleus (SCN). Berson et al. 2002 (Science) characterised the photopigment; the downstream pathway to circadian phase regulation is among the best-mapped in human physiology.",
      reproducibility:
        "Phase-advance from morning bright-light exposure replicates across labs. Real-world adherence is the cap — outdoor light at sunrise is structurally different from window light, and most field studies show 60-80% of trial effect when participants self-administer.",
      practicality:
        "Requires being outdoors (or near a south-facing window) in the first 30-60 min after waking. High-friction in winter latitudes; low-friction in summer or when commuting outdoors.",
      safety:
        "Direct sun at sunrise is below the threshold for retinal damage. UV index <2 in the first hour after sunrise. The only documented contraindication is bipolar disorder where bright light can trigger mania (screen with clinician).",
    },
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/12717002", // Khalsa 2003 PRC
      "https://pubmed.ncbi.nlm.nih.gov/23910656", // Wright 2013 Curr Biol
      "https://pubmed.ncbi.nlm.nih.gov/11834835", // Berson 2002 Science
    ],
    lastReviewed: "2026-04-29",
  },
  "best-light-therapy-lamps-2026": {
    trial: 88,
    mechanism: 95,
    reproducibility: 80,
    practicality: 65,
    safety: 92,
    rationale: {
      trial:
        "40+ RCTs of bright light therapy in seasonal affective disorder. Golden et al. 2005 (Am J Psychiatry) meta-analysis confirmed effect at 10,000 lux × 30 min within 1 m of face. Lam et al. 2016 (JAMA Psychiatry) extended to non-seasonal MDD.",
      mechanism:
        "Direct ipRGC / melanopsin pathway; suppression of nocturnal melatonin and phase-advance of dim-light melatonin onset. Mechanism is among the most-published in chronobiology.",
      reproducibility:
        "Effects replicate across SAD trials but daily-use real-world adherence drops to ~60% at week 4 (Westrin & Lam 2007 review).",
      practicality:
        "Requires 20-30 min stationary at lamp every morning — high-friction without habit anchoring. The lamps that win on practicality are the ones with desk-friendly form factor.",
      safety:
        "No ocular damage at recommended distances; rare migraine triggers; screen if bipolar (mania risk per Sit et al. 2018).",
    },
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/15800134", // Golden 2005 meta
      "https://pubmed.ncbi.nlm.nih.gov/26580307", // Lam 2016 JAMA Psychiatry
    ],
    lastReviewed: "2026-04-29",
  },
  "jet-lag-protocol-east-vs-west": {
    trial: 78,
    mechanism: 90,
    reproducibility: 72,
    practicality: 68,
    safety: 88,
    rationale: {
      trial:
        "Eastman & Burgess 2009 (Chronobiol Int) is the canonical pre-trip light + melatonin protocol trial. Sack 2010 (NEJM) reviews the evidence base for both directions of travel.",
      mechanism:
        "Eastward travel = required phase advance; westward = phase delay. The phase-response curve to morning light (advance) and evening light (delay) is the operative variable.",
      reproducibility:
        "Effect size replicates in lab simulations of jet lag. Field-study replication is harder because real travel involves sleep deprivation, altitude, and meal timing as confounds.",
      practicality:
        "Requires planning 2-3 days pre-trip with timed light exposure or avoidance. Travellers rarely follow the full protocol; partial adherence still helps.",
      safety:
        "Melatonin 0.3-0.5 mg is the dose with chronobiology-trial support; the 5-10 mg over-the-counter dose overshoots receptor saturation but is not unsafe.",
    },
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/19637238", // Eastman 2009
      "https://pubmed.ncbi.nlm.nih.gov/20164488", // Sack 2010 NEJM
    ],
    lastReviewed: "2026-04-29",
  },
  "best-sunrise-alarm-clocks-2026": {
    trial: 70,
    mechanism: 80,
    reproducibility: 70,
    practicality: 85,
    safety: 95,
    rationale: {
      trial:
        "Smaller trial base than light-therapy lamps. Gabel et al. 2013 (Chronobiol Int) showed dawn-simulator improvements in mood and cognitive performance; Giménez et al. 2010 (Chronobiol Int) showed wake-up cortisol response.",
      mechanism:
        "Gradual luminance increase from <1 lux to 250-300 lux at the pillow over 20-30 min; engages the same ipRGC pathway as bright-light therapy but at a lower intensity.",
      reproducibility:
        "Effect on subjective wake quality replicates; effect on objective sleep architecture is smaller.",
      practicality:
        "Highest practicality of any chronobiology intervention — set once, runs nightly. The friction is bedroom layout (bedside outlet, no curtain blocking).",
      safety:
        "No documented contraindications. The luminance peaks well below the threshold for any bipolar mania concern.",
    },
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/23745757", // Gabel 2013
      "https://pubmed.ncbi.nlm.nih.gov/20180624", // Giménez 2010
    ],
    lastReviewed: "2026-04-29",
  },
  "night-shift-sleep-protocol": {
    trial: 80,
    mechanism: 88,
    reproducibility: 70,
    practicality: 55,
    safety: 80,
    rationale: {
      trial:
        "Folkard 2008 (Chronobiol Int) reviews shift-work sleep disorder and intervention RCTs. Crowley 2003 (J Biol Rhythms) is the canonical timed-light + dark-glasses protocol.",
      mechanism:
        "Engineered phase-shift in the wrong direction (full nocturnal shift = ~12-hour advance/delay). Light exposure during the work shift + dark on the commute home is the lever.",
      reproducibility:
        "Lab replication is high. Real-world rotating-shift workers face confounds the trial protocols don't capture (family schedules, unpredictable rotations).",
      practicality:
        "Hardest practical context in chronobiology. Permanent night shift is more amenable than rotating shift; rotating-shift workers rarely achieve full circadian alignment.",
      safety:
        "Long-term shift work is associated with elevated cardiovascular and metabolic risk per AASM position statements; the intervention reduces but does not eliminate the risk.",
    },
    primarySources: [
      "https://pubmed.ncbi.nlm.nih.gov/18484362", // Folkard 2008
      "https://pubmed.ncbi.nlm.nih.gov/14619852", // Crowley 2003
    ],
    lastReviewed: "2026-04-29",
  },
};

export function getStackDimensions(slug: string): StackDimensions | undefined {
  return STACK_BY_SLUG[slug];
}

export function listScoredSlugs(): string[] {
  return Object.keys(STACK_BY_SLUG);
}
