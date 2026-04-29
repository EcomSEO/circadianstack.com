/**
 * Per-post PhaseAxisCard mapping.
 *
 * Per the 2026-04-29 hard rule (05-circadianstack.md Phase 5): every
 * phase-relevant post renders the Dawn → Night sun-arc with the
 * relevant phases highlighted. The PhaseAxisCard component reads from
 * this manifest by slug.
 */

export type Phase =
  | "pre-dawn"
  | "dawn"
  | "morning"
  | "midday"
  | "afternoon"
  | "evening"
  | "dusk"
  | "night"
  | "late-night";

export const PHASE_LABELS: Record<Phase, string> = {
  "pre-dawn": "Pre-dawn (4–6 am)",
  dawn: "Dawn (sunrise ± 30 min)",
  morning: "Morning (6–10 am)",
  midday: "Midday (10 am – 2 pm)",
  afternoon: "Afternoon (2–6 pm)",
  evening: "Evening (6–9 pm)",
  dusk: "Dusk (sunset ± 30 min)",
  night: "Night (9 pm – 12 am)",
  "late-night": "Late night (12–4 am)",
};

export const PHASE_BY_SLUG: Record<string, Phase[]> = {
  "morning-sunlight-protocol": ["dawn", "morning"],
  "best-light-therapy-lamps-2026": ["dawn", "morning"],
  "jet-lag-protocol-east-vs-west": ["dawn", "morning", "evening", "dusk"],
  "why-you-wake-at-3am": ["late-night"],
  "best-sunrise-alarm-clocks-2026": ["pre-dawn", "dawn"],
  "what-a-late-chronotype-is": ["evening", "dusk", "night"],
  "best-blue-blocker-glasses": ["evening", "dusk", "night"],
  "night-shift-sleep-protocol": [
    "evening",
    "night",
    "late-night",
    "pre-dawn",
    "dawn",
  ],
  "chronotype-quiz": [],
};

export function getPhasesFor(slug: string): Phase[] {
  return PHASE_BY_SLUG[slug] ?? [];
}
