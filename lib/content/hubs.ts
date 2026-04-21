export type Hub = {
  slug: string;
  name: string;
  shortName: string;
  oneLiner: string;
  thesis: string;
};

export const hubs: Hub[] = [
  {
    slug: "light-and-zeitgebers",
    name: "Light & Zeitgebers",
    shortName: "Light",
    oneLiner: "Morning sunlight, lux dose, blue light, red light, dawn simulators — with the research.",
    thesis: "Light is the primary circadian zeitgeber. Dose, timing, wavelength, and the buying guides for tools that deliver the right light at the right time.",
  },
  {
    slug: "sleep-architecture",
    name: "Sleep Architecture",
    shortName: "Sleep",
    oneLiner: "Stages, cycles, sleep debt, napping protocols, why you wake at 3am.",
    thesis: "Sleep isn't a monolith. Architecture, timing, duration, and consistency are separable variables. Protocols target specific problems.",
  },
  {
    slug: "chronotype",
    name: "Chronotype & Personalization",
    shortName: "Chronotype",
    oneLiner: "Not everyone has the same circadian phase. Protocols that assume 7am wake time fail for late chronotypes.",
    thesis: "Handle personalization with the Chronotype Quiz (MCTQ-short) and personalized Protocol cards.",
  },
  {
    slug: "interventions-and-tools",
    name: "Interventions & Tools",
    shortName: "Tools",
    oneLiner: "Light therapy lamps, sleep masks, sunrise alarms, blue-blockers, trackers — all dose-tested.",
    thesis: "The commercial hub. Every product reviewed shows the actual dose it delivers (lux at distance, measured).",
  },
  {
    slug: "edge-cases",
    name: "Edge Cases",
    shortName: "Edge Cases",
    oneLiner: "Jet lag, shift work, parenthood, perimenopause, ADHD — where generic advice fails.",
    thesis: "Bespoke protocols for specific contexts where generic circadian advice doesn't work.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
