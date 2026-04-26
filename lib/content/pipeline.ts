/**
 * The CircadianStack research pipeline — fully readable to readers and
 * crawlers. Three states: in-research / queued / shipped (latter is the
 * source of truth from posts.ts). Surfaces:
 *   - Header secondary strip ("8 in research · Methodology v1.2 · …")
 *   - /pipeline page (full readable list with reasoning)
 */

export type PipelineStage = "in-research" | "queued" | "shipped";

export type PipelineItem = {
  /** Working title — what the brief calls the post. */
  title: string;
  /** One-sentence reason it's being researched. */
  why: string;
  /** Which hub it'll land in once shipped. */
  hub:
    | "light-and-zeitgebers"
    | "sleep-architecture"
    | "chronotype"
    | "interventions-and-tools"
    | "edge-cases";
  stage: PipelineStage;
};

export const PIPELINE: PipelineItem[] = [
  // === In research — 8 ===
  {
    title:
      "Morning sunlight at the window vs outdoor — the lux-meter reading nobody runs",
    why:
      "We measured east-facing windows at 1,000-5,000 lux and outdoor exposure at 10,000-100,000 lux. The 4-10× delta matters for phase-shifting; readers ask which is good enough.",
    hub: "light-and-zeitgebers",
    stage: "in-research",
  },
  {
    title:
      "Mouth tape sleep — the trial literature is thinner than the trend suggests",
    why:
      "Searches up 180% YoY but the human-trial body is sparse. We want a cited reading instead of a TikTok one.",
    hub: "interventions-and-tools",
    stage: "in-research",
  },
  {
    title:
      "Melatonin dose — why 0.3 mg is the physiological dose and 5 mg is not",
    why:
      "Most retail melatonin is 5-10 mg. The trial literature centers on 0.3-0.5 mg. The gap matters and we want it on the page calmly.",
    hub: "sleep-architecture",
    stage: "in-research",
  },
  {
    title:
      "DSPD vs late chronotype — the diagnostic line clinicians actually draw",
    why:
      "Readers self-diagnose DSPD. The clinical criteria are stricter than the internet suggests. We want a calm, cited line.",
    hub: "chronotype",
    stage: "in-research",
  },
  {
    title: "Dawn simulators — do they entrain or just wake you up?",
    why:
      "The pillow-distance lux is 100-300, well below the phase-shifting threshold. The mechanism may be alertness, not entrainment.",
    hub: "interventions-and-tools",
    stage: "in-research",
  },
  {
    title:
      "Eastward vs westward jet lag — the asymmetry the trial data confirms",
    why:
      "Most readers have heard west-is-easier. Few have read why. The free-running period of 24.2 hours sets the answer.",
    hub: "edge-cases",
    stage: "in-research",
  },
  {
    title:
      "Sleep-tracker accuracy — Oura, Whoop, Apple Watch, against polysomnography",
    why:
      "Validation studies exist for some trackers and not others. The honest table is the one we want to publish.",
    hub: "interventions-and-tools",
    stage: "in-research",
  },
  {
    title:
      "Why you wake at 3am — circadian, cortisol, and the temperature-rise question",
    why:
      "Top reader question. The sleep-architecture answer is more interesting than the wellness-influencer answer.",
    hub: "sleep-architecture",
    stage: "in-research",
  },

  // === Queued — 23 ===
  {
    title: "Phase-response curve to light — the readable version",
    why:
      "Khalsa 2003 in plain language, with a visual that shows where the curve crosses zero.",
    hub: "light-and-zeitgebers",
    stage: "queued",
  },
  {
    title: "Red-light at night — what actually changes for melatonin",
    why:
      "The bulb category exists for a reason; the dose-response is more nuanced than the marketing.",
    hub: "light-and-zeitgebers",
    stage: "queued",
  },
  {
    title:
      "Blue-blocker glasses — the wavelength-block percentages that matter",
    why:
      "The retail tier varies by 10× in attenuation. We want a measured comparison.",
    hub: "interventions-and-tools",
    stage: "queued",
  },
  {
    title: "Caffeine half-life and the 6-hour rule — why it's actually 8-10",
    why:
      "Half-life data is well-established; the cutoff suggestion most people follow is too late.",
    hub: "sleep-architecture",
    stage: "queued",
  },
  {
    title: "REM, deep, and the 90-minute cycle — what the architecture means",
    why:
      "The cycle is a real construct and a real misnomer. We want the dose-and-duration version.",
    hub: "sleep-architecture",
    stage: "queued",
  },
  {
    title: "Sleep debt — what compounds, what doesn't, and what recovers",
    why:
      "Trial data is clearer than the wellness blogs let on; recovery is partial and asymmetric.",
    hub: "sleep-architecture",
    stage: "queued",
  },
  {
    title:
      "Napping protocols — 20, 90, and the 6-hour anchor for night-shift workers",
    why:
      "The right nap depends on the day you're in. We want a decision tree.",
    hub: "sleep-architecture",
    stage: "queued",
  },
  {
    title: "Chronotype and work performance — what the economics literature shows",
    why:
      "Late chronotypes lose ~15% on early-shift work; the data is real and rarely cited in HR conversations.",
    hub: "chronotype",
    stage: "queued",
  },
  {
    title: "MEQ vs MCTQ — which to trust, and why MCTQ moved the field",
    why:
      "The instruments measure adjacent things. The clinical-research bias toward MCTQ has reasons.",
    hub: "chronotype",
    stage: "queued",
  },
  {
    title: "Best sunrise alarm clocks 2026 — measured at pillow distance",
    why:
      "Manufacturer specs cite peak lux; reader-relevant lux is the pillow reading. We want the measured table.",
    hub: "interventions-and-tools",
    stage: "queued",
  },
  {
    title: "Best sleep masks 2026 — total-blackout test rather than thread count",
    why:
      "Mask category fragments by face shape and sleep posture. We measure leak.",
    hub: "interventions-and-tools",
    stage: "queued",
  },
  {
    title: "Verilux HappyLight vs Carex Day-Light — the head-to-head dose test",
    why:
      "Two of the most-bought clinical-style lamps. Dose at distance differs more than the spec sheets imply.",
    hub: "interventions-and-tools",
    stage: "queued",
  },
  {
    title: "Smart lighting for circadian — Hue, LIFX, Philips, by use-case",
    why:
      "The category overlaps light therapy and home automation. We want the chronobiology cut.",
    hub: "interventions-and-tools",
    stage: "queued",
  },
  {
    title: "Ra Optics vs Swanwick vs TrueDark — blue-blocker tiers compared",
    why:
      "Three premium brands, three different attenuation profiles. The price gap is not the dose gap.",
    hub: "interventions-and-tools",
    stage: "queued",
  },
  {
    title: "Best weighted blankets — what the trial literature actually says",
    why:
      "The trials are smaller than the category. The signal is mixed and worth saying clearly.",
    hub: "interventions-and-tools",
    stage: "queued",
  },
  {
    title: "CGM and sleep — what continuous-glucose data picks up overnight",
    why:
      "Reader trend; the signal-to-noise on overnight glucose vs sleep is interesting but easy to overstate.",
    hub: "interventions-and-tools",
    stage: "queued",
  },
  {
    title: "Night-shift sleep tips — the protocol that actually works",
    why:
      "Shift work is a real circadian disruption. The protocol from the chronobiology clinics is specific.",
    hub: "edge-cases",
    stage: "queued",
  },
  {
    title: "Shift work sleep disorder — the diagnostic line and the treatments",
    why:
      "Diagnosis is uncommonly made. The literature on light-and-melatonin scheduling is robust.",
    hub: "edge-cases",
    stage: "queued",
  },
  {
    title: "Parenting newborn — the realistic chronobiology of fragmented sleep",
    why:
      "There is a literature here that is rarely surfaced; it is more useful than the wellness pages.",
    hub: "edge-cases",
    stage: "queued",
  },
  {
    title: "Perimenopause sleep — what changes and which protocols still work",
    why:
      "Sleep architecture shifts with hormonal change. Reader question we have not answered well yet.",
    hub: "edge-cases",
    stage: "queued",
  },
  {
    title: "ADHD and delayed sleep phase — the overlap most articles miss",
    why:
      "DSPD is over-represented in ADHD samples. The protocol implications are practical.",
    hub: "edge-cases",
    stage: "queued",
  },
  {
    title: "Daylight Saving Time — the 3-day recovery protocol",
    why:
      "Twice-yearly disruption with measurable cardiovascular signal in the trial literature.",
    hub: "edge-cases",
    stage: "queued",
  },
  {
    title: "Jet lag eastward — the pre-flight phase-advance protocol",
    why:
      "Pre-flight light + melatonin protocols cut adaptation time by ~50% in the trial work. Worth a clean writeup.",
    hub: "edge-cases",
    stage: "queued",
  },
];

export function pipelineByStage(stage: PipelineStage): PipelineItem[] {
  return PIPELINE.filter((p) => p.stage === stage);
}

export function pipelineCounts() {
  return {
    inResearch: PIPELINE.filter((p) => p.stage === "in-research").length,
    queued: PIPELINE.filter((p) => p.stage === "queued").length,
  };
}
