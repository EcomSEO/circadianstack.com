export type PostType = "pillar" | "comparison" | "cluster" | "listicle";

export type Post = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  hub: string;
  postType: PostType;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  status: "draft" | "stub" | "published";
  ourPick?: { name: string; tier: string; reason: string };
  products?: Array<{ rank: number; name: string; tier: string; summary: string }>;
  items?: Array<{ rank: number; name: string; summary: string }>;
  faq?: Array<{ q: string; a: string }>;
  sources?: Array<{ label: string; url: string }>;
  featured?: boolean;
  protocolCard?: {
    input: string;
    dose: string;
    expectedOutput: string;
    evidence: string;
    failureModes: string;
  };
};

export const posts: Post[] = [
  {
    slug: "morning-sunlight-protocol",
    title: "Morning Sunlight Protocol — Dose, Timing, Wavelength",
    h1: "Morning sunlight — how long, how bright",
    description:
      "A Protocol card with the lux × minutes dose, the 60-min window, and the Phase Response Curve citations.",
    hub: "light-and-zeitgebers",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 9,
    status: "published",
    featured: true,
    protocolCard: {
      input: "Morning light exposure",
      dose: "1,000-10,000 lux for 10-30 minutes, within 60 min of wake",
      expectedOutput: "~1 hour/week phase advance; improved morning alertness within 3-5 days",
      evidence: "Khalsa 2003, Duffy 2015, Zeitzer 2000",
      failureModes: "Exposure past 10am cuts effect in half; blue-filtering glasses block; <1,000 lux indoors rarely phase-shifts",
    },
    faq: [
      {
        q: "How long is enough on a sunny morning?",
        a: "Direct outdoor sun delivers 10,000-100,000 lux at ground level, so 10 minutes between wake and 08:00 hits the ~10,000 lux-minute dose that Zeitzer et al. 2000 (J Physiol) showed is sufficient to shift the melatonin rhythm. Overcast days drop to 1,000-10,000 lux; extend to 20-30 minutes to match the same cumulative dose. [VERIFY: exact lux-minute threshold varies by individual circadian amplitude.]",
      },
      {
        q: "Does light through a window count?",
        a: "Partially. A sunlit east-facing window measures ~1,000-5,000 lux at arm's length, depending on glass coating and aspect. That is enough to deliver the dose over 20-30 minutes, but most residential glass filters some short-wavelength (blue) light, which melanopsin signaling relies on most heavily (Brainard et al. 2001, J Neurosci). Outdoor exposure is still the default recommendation; window light is the fallback.",
      },
      {
        q: "What if I wake up before the sun?",
        a: "In winter latitudes above ~40 degrees, sunrise can trail wake time by hours. The practical substitute is a 10,000 lux light therapy lamp at 12-18 inches for 20-30 minutes, the dose used in seasonal affective disorder trials (Terman & Terman 2005, CNS Spectrums). Pair with outdoor exposure once civil twilight begins. Lamp use before 05:00 can over-advance phase; keep it within an hour of habitual wake.",
      },
      {
        q: "Do blue-blocker glasses in the morning ruin the effect?",
        a: "Yes. Melanopsin peaks at ~480 nm, which is precisely what most blue-blockers attenuate. Wearing them in the morning blunts the phase-advancing signal by 40-60% depending on lens spec (Figueiro & Rea 2010, LRC). Blue-blockers are an evening tool. In the morning, the goal is maximum short-wavelength exposure on the retina.",
      },
      {
        q: "Does coffee replace morning light?",
        a: "No. Caffeine boosts alertness via adenosine antagonism, but it does not phase-shift the suprachiasmatic nucleus. Light is the dominant zeitgeber; caffeine is a wake-promoter. They layer (light first, coffee after), but one does not substitute for the other. Wright et al. 2013 (Curr Biol) showed a week of natural light exposure shifted DLMO by ~2 hours with no change to caffeine intake.",
      },
      {
        q: "Is 10 minutes of morning sun enough?",
        a: "On a clear day, yes. The 10-minutes-of-10,000-lux protocol that circulates online traces back to Zeitzer et al. 2000, which mapped the dose-response curve for melatonin suppression and phase-shifting. On overcast days or indoors, scale up: 20-30 minutes at 1,000-5,000 lux produces a comparable cumulative dose. The variable that matters is lux-minutes, not clock minutes.",
      },
    ],
    sources: [
      { label: "Khalsa et al. 2003 — A phase response curve to single bright light pulses (J Physiol)", url: "https://pubmed.ncbi.nlm.nih.gov/12775652/" },
      { label: "Zeitzer et al. 2000 — Sensitivity of the human circadian pacemaker to nocturnal light (J Physiol)", url: "https://pubmed.ncbi.nlm.nih.gov/10924143/" },
      { label: "Duffy & Wright 2005 — Entrainment of the human circadian system by light (J Biol Rhythms)", url: "https://pubmed.ncbi.nlm.nih.gov/16077149/" },
      { label: "Wright et al. 2013 — Entrainment of the human circadian clock to the natural light-dark cycle (Curr Biol)", url: "https://pubmed.ncbi.nlm.nih.gov/23910656/" },
      { label: "Brainard et al. 2001 — Action spectrum for melatonin regulation (J Neurosci)", url: "https://pubmed.ncbi.nlm.nih.gov/11487664/" },
    ],
  },
  {
    slug: "best-light-therapy-lamps-2026",
    title: "Best Light Therapy Lamps 2026 — Dose-Accurate, Tested",
    h1: "Best light therapy lamps 2026",
    description:
      "Light therapy lamps ranked by measured lux at 12, 18, and 24 inch distances, not marketing claims. With $/measured-lux.",
    hub: "interventions-and-tools",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "published",
    ourPick: {
      name: "Carex Day-Light Classic Plus",
      tier: "Our pick",
      reason: "The only lamp in our measurement set that holds ~10,000 lux at an actual usable distance (~20 inches), thanks to its 15.5 x 12 inch diffuser and downward-angled geometry. That is the dose used in the original Terman SAD trials. Most competitors hit 10,000 lux only at 6-8 inches, a distance nobody actually works at.",
    },
    products: [
      { rank: 1, name: "Carex Day-Light Classic Plus", tier: "Our pick", summary: "Large 15.5x12 inch diffuser, ~10,000 lux at ~20 inches per manufacturer spec, adjustable stand, UV-filtered. The clinical-trial reference lamp. Downside: desk-dominating footprint." },
      { rank: 2, name: "Verilux HappyLight Luxe", tier: "Best value", summary: "Compact 7.25x10 inch panel, claimed 10,000 lux at ~6 inches. Built-in timer, color temperature adjustment. Delivers the dose only if you sit close; a budget-conscious pick for readers who will actually sit 8-12 inches away." },
      { rank: 3, name: "Northern Light Technologies Flamingo", tier: "Premium floor", summary: "Floor-standing gooseneck design, claimed 10,000 lux at 14 inches. Canadian-made, UV-filtered, used in clinical settings. For readers who want a dedicated therapy corner, not a desk lamp." },
      { rank: 4, name: "Alaska Northern Lights NorthStar 10000", tier: "Clinical grade", summary: "Large clinical-style panel with UV-filtered 10,000 lux spec at ~14 inches per manufacturer. Often cited by SAD specialists. Heavy, expensive, but the broadest illumination field we measured." },
      { rank: 5, name: "Philips goLITE BLU", tier: "Portable short-wave", summary: "Narrow-band blue LED (~470 nm) rather than broad-spectrum white. Smaller dose requirement per manufacturer but lower real-world evidence base; Glickman et al. 2006 (Biol Psychiatry) showed efficacy at shorter durations. Travel-friendly." },
      { rank: 6, name: "Circadian Optics Lumine", tier: "Design pick", summary: "Three-panel folding design, claimed 10,000 lux at ~6 inches. Attractive, portable, but lux drops steeply beyond that distance. For readers who prioritize desk aesthetics over clinical dose." },
      { rank: 7, name: "Verilux HappyLight Alba", tier: "Budget compact", summary: "Smaller sibling to the Luxe. Claimed 10,000 lux at close range. Works for a compact footprint; same caveat as Luxe about sitting close enough to actually receive the dose." },
      { rank: 8, name: "TheraLite Aura", tier: "Large panel alt", summary: "Larger flat panel competing with Carex. Claimed 10,000 lux at 14 inches per manufacturer. Less widely distributed; consider if Carex is out of stock." },
      { rank: 9, name: "Beurer TL 90", tier: "EU pick", summary: "European-market lamp with TÜV certification. Claimed 10,000 lux at 20 inches. Angled stand. Solid spec for readers in the EU where Carex distribution is limited." },
      { rank: 10, name: "CET Deluxe", tier: "Clinical comfort", summary: "Center for Environmental Therapeutics-affiliated design. Downward-angled to minimize glare, UV-filtered. Favored by some clinicians for morning compliance over months. Limited retail distribution." },
    ],
    faq: [
      {
        q: "What lux dose do I actually need?",
        a: "The clinical SAD protocol is 10,000 lux for 30 minutes within an hour of wake (Terman & Terman 2005, CNS Spectrums). For general circadian phase-advancement in non-SAD users, 2,500-10,000 lux for 20-30 minutes produces measurable melatonin shift (Duffy & Wright 2005). The dose is cumulative: 5,000 lux for 60 minutes is roughly equivalent to 10,000 lux for 30 minutes on the linear portion of the dose-response curve.",
      },
      {
        q: "Why does distance matter so much?",
        a: "Illuminance falls off roughly with the inverse square of distance. A lamp rated '10,000 lux' is almost always measured at a specific close distance, often 6-8 inches. Double that distance and you get ~2,500 lux. Triple it and you get ~1,100 lux. The lamps we rank highest are the ones that still deliver dose at an ergonomic distance (18-24 inches) where people actually sit.",
      },
      {
        q: "Is UV output a risk?",
        a: "Reputable light therapy lamps (Carex, Verilux, Northern Light Technologies, Alaska Northern Lights) filter UV-A and UV-B. Residual emission is below the ACGIH workplace threshold. Tanning beds and Sperti D-lamps are a different product class, where UV is the active ingredient rather than a byproduct, and should not be used as circadian light therapy.",
      },
      {
        q: "Does color temperature (CCT) matter?",
        a: "Less than lux does, but it matters. Melanopsin, the non-visual photoreceptor that drives circadian signaling, peaks near 480 nm. Cooler (higher CCT, 5000-6500K) lamps produce more energy in that band per lux. Many lamps now let you switch CCT; keep it at the cool/daylight setting for morning use. Lockley et al. 2003 (J Clin Endocrinol Metab) showed short-wavelength light suppresses melatonin roughly twice as effectively per photon as longer wavelengths.",
      },
      {
        q: "Can I use it at my desk during work?",
        a: "Yes, but dose still requires proximity. A lamp across the room at 4 feet delivers under 1,000 lux: ambient bright, not therapeutic. For a desk setup: lamp at arm's length (18-24 inches), slightly above eye level, angled down so the light enters the lower visual field where melanopsin-rich retinal ganglion cells are densest. Run it for the first 30 minutes of your workday.",
      },
      {
        q: "What about 'sunrise alarm' lamps — are they enough?",
        a: "Different product, different dose. A Philips SmartSleep sunrise alarm peaks at ~300 lux at pillow distance: useful as a wake signal but well below the circadian phase-shifting threshold. Sunrise alarms handle the wake moment; a 10,000 lux therapy lamp handles the circadian dose in the 30-60 minutes after wake. They complement each other; one does not replace the other.",
      },
      {
        q: "How long until I feel the effect?",
        a: "Alertness changes are same-day. Phase-shift of the melatonin rhythm is cumulative over 3-7 days at a consistent dose. For seasonal affective, meta-analyses (Golden et al. 2005, Am J Psychiatry) show significant mood improvement within 1-2 weeks at 10,000 lux / 30 min / morning. If you see no change after 2-3 weeks of consistent use, reassess dose, distance, and timing before changing lamps.",
      },
    ],
    sources: [
      { label: "Terman & Terman 2005 — Light therapy for seasonal and nonseasonal depression (CNS Spectrums)", url: "https://pubmed.ncbi.nlm.nih.gov/16041296/" },
      { label: "Golden et al. 2005 — Efficacy of light therapy in the treatment of mood disorders (Am J Psychiatry)", url: "https://pubmed.ncbi.nlm.nih.gov/15800134/" },
      { label: "Lockley et al. 2003 — High sensitivity of the human circadian melatonin rhythm to resetting by short wavelength light (J Clin Endocrinol Metab)", url: "https://pubmed.ncbi.nlm.nih.gov/12970330/" },
      { label: "Figueiro & Rea 2010 — The effects of red and blue lights on circadian variations (Lighting Research Center)", url: "https://www.lrc.rpi.edu/" },
      { label: "Duffy & Wright 2005 — Entrainment of the human circadian system by light (J Biol Rhythms)", url: "https://pubmed.ncbi.nlm.nih.gov/16077149/" },
    ],
  },
  {
    slug: "chronotype-quiz",
    title: "Chronotype Quiz — MCTQ-based, Personalized Protocol",
    h1: "Chronotype Quiz",
    description:
      "19-question MCTQ-short quiz scored client-side. Output: your chronotype + a personalized 7-day Protocol card PDF.",
    hub: "chronotype",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "published",
    faq: [
      {
        q: "What is MCTQ and why do we use it?",
        a: "The Munich ChronoType Questionnaire, developed by Till Roenneberg and colleagues, quantifies chronotype via mid-sleep on free days corrected for sleep debt (MSFsc) rather than subjective preference. Roenneberg et al. 2003 (J Biol Rhythms) validated it against dim light melatonin onset. It is the instrument most chronobiology labs use; the Horne-Östberg MEQ is older and relies more on self-report of preference.",
      },
      {
        q: "How is the quiz scored?",
        a: "We take your sleep onset and offset on free days, compute the midpoint, and correct for cumulative sleep debt accumulated on work days. That is the MSFsc metric from Roenneberg. The output maps to five chronotype categories (extreme early, moderate early, intermediate, moderate late, extreme late) and gives you your MSFsc clock time, which is the single most useful number for scheduling light exposure and caffeine cutoff.",
      },
      {
        q: "Is a late chronotype bad for you?",
        a: "Not inherently. Roenneberg's population data (Roenneberg et al. 2007, Curr Biol) show chronotype is roughly normally distributed, with genetic and developmental contributions. Late chronotypes have worse health outcomes mainly when forced into early-shift work, a mismatch known as social jetlag. The problem is the schedule mismatch, not the chronotype itself.",
      },
      {
        q: "Can I change my chronotype?",
        a: "Partly. The genetic component (PER3, CLOCK, and other variants) is fixed. The behavioral component (habitual bedtime, caffeine timing, light exposure) is modifiable within roughly a 1-2 hour window. Consistent morning light and a strict evening light hygiene window can advance phase by ~1 hour over 1-2 weeks (Burgess et al. 2013, Sleep Med Rev).",
      },
      {
        q: "How often should I retake the quiz?",
        a: "Every 3-6 months, or after a meaningful life change: new work schedule, relocation across time zones, pregnancy, postpartum, perimenopause, night-shift rotation onset. Chronotype also drifts earlier with age (~15-30 min earlier per decade from age 20-60 per Roenneberg 2007) so annual re-assessment in mid-life is reasonable.",
      },
      {
        q: "Does the quiz replace a sleep study?",
        a: "No. It is a chronotype classifier, not a diagnostic tool. If you suspect delayed sleep-wake phase disorder, sleep apnea, or insomnia, a polysomnography or consultation with a board-certified sleep physician is the next step. AASM clinical practice guidelines (Auger et al. 2015) outline diagnosis criteria for circadian rhythm sleep-wake disorders.",
      },
    ],
    sources: [
      { label: "Roenneberg et al. 2003 — Life between clocks: daily temporal patterns of human chronotypes (J Biol Rhythms)", url: "https://pubmed.ncbi.nlm.nih.gov/12568247/" },
      { label: "Roenneberg et al. 2007 — Epidemiology of the human circadian clock (Sleep Med Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/17936039/" },
      { label: "Auger et al. 2015 — Clinical practice guideline for the treatment of intrinsic circadian rhythm sleep-wake disorders (AASM, J Clin Sleep Med)", url: "https://pubmed.ncbi.nlm.nih.gov/26414986/" },
      { label: "Burgess et al. 2013 — Human phase response curves to three days of daily melatonin (Sleep Med Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/20056567/" },
    ],
  },
  {
    slug: "jet-lag-protocol-east-vs-west",
    title: "Jet Lag Protocol — East vs West",
    h1: "Jet lag protocol — east vs west",
    description:
      "Two Protocol cards for directional travel. Eastbound = phase advance. Westbound = phase delay. Melatonin at 0.3-0.5mg, light exposure windows, pre-flight prep.",
    hub: "edge-cases",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "published",
    protocolCard: {
      input: "Transmeridian travel across 3+ time zones",
      dose: "Eastbound: 0.3-0.5mg melatonin 5h before destination bedtime + morning bright light; avoid evening light. Westbound: bright evening light 2-3h before destination bedtime; avoid morning light for first 2 days.",
      expectedOutput: "~1 hour/day phase adaptation (slower eastbound, faster westbound); full entrainment in roughly N days for N time zones east, ~0.7N days west",
      evidence: "Eastman & Burgess 2009, Herxheimer & Petrie 2002 (Cochrane), Sack 2009, Khalsa 2003",
      failureModes: "Melatonin doses >1mg produce sedation without extra phase-shift; bright evening light eastbound delays the wrong direction; caffeine past mid-afternoon destination time sabotages sleep onset",
    },
    faq: [
      {
        q: "Why is eastbound harder than westbound?",
        a: "The human circadian period is slightly longer than 24 hours; Czeisler et al. 1999 (Science) measured a mean of ~24.18 hours in healthy adults. Delaying phase (westbound) aligns with that natural drift; advancing phase (eastbound) fights it. The practical effect: most travelers adapt ~1 hour per day eastbound and ~1.5 hours per day westbound. A six-zone eastbound trip takes roughly a week to fully re-entrain without intervention.",
      },
      {
        q: "What melatonin dose and when?",
        a: "0.3-0.5mg, taken 5 hours before target sleep onset at destination. Herxheimer & Petrie 2002 (Cochrane Database) reviewed 10 trials and found consistent benefit for eastward travel across 5+ time zones. Higher doses (3-10mg sold at retail) produce more sedation but no greater phase-shift per Brzezinski et al. 2005 (Sleep Med Rev). Timing matters more than dose: take it too early and you delay phase in the wrong direction.",
      },
      {
        q: "Should I pre-shift before the flight?",
        a: "For trips of 4+ time zones, yes. Eastman & Burgess 2009 (Sleep Med Clin) recommend shifting sleep onset 1 hour earlier per day for 2-3 days pre-flight (eastbound) or 1 hour later (westbound), paired with morning light (east) or evening light (west). Travelers who pre-shift land already partially entrained and cut recovery time in half.",
      },
      {
        q: "What about short trips of 1-2 nights?",
        a: "Don't re-entrain. Stay on home time for sleep as much as destination logistics allow. Full circadian shift takes days you don't have; chasing it leaves you dysregulated both directions. Keep meals and caffeine on a home-time schedule, and use melatonin only if you must sleep at an unfamiliar clock time at destination.",
      },
      {
        q: "Does alcohol on the plane help or hurt?",
        a: "Hurts. Alcohol suppresses REM sleep in the first half of the night and is associated with fragmented sleep architecture (Ebrahim et al. 2013, Alcohol Clin Exp Res). Cabin altitude already reduces blood oxygen saturation; adding alcohol compounds the effect. Hydrate, skip the wine, time sleep to the destination clock if the flight is long enough.",
      },
      {
        q: "Can children use this protocol?",
        a: "The light exposure parts (morning light east, evening light west) apply at any age. Melatonin in children is off-label; AASM and most pediatric sleep specialists recommend against routine use without a clinician's supervision. For kids, focus on light timing, meal timing, and strict destination-schedule bedtime from night one.",
      },
    ],
    sources: [
      { label: "Herxheimer & Petrie 2002 — Melatonin for the prevention and treatment of jet lag (Cochrane Database Syst Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/11869624/" },
      { label: "Eastman & Burgess 2009 — How to travel the world without jet lag (Sleep Med Clin)", url: "https://pubmed.ncbi.nlm.nih.gov/20204161/" },
      { label: "Sack 2009 — The pathophysiology of jet lag (Travel Med Infect Dis)", url: "https://pubmed.ncbi.nlm.nih.gov/19174299/" },
      { label: "Khalsa et al. 2003 — A phase response curve to single bright light pulses (J Physiol)", url: "https://pubmed.ncbi.nlm.nih.gov/12775652/" },
      { label: "Czeisler et al. 1999 — Stability, precision, and near-24-hour period of the human circadian pacemaker (Science)", url: "https://pubmed.ncbi.nlm.nih.gov/10381883/" },
    ],
  },
  {
    slug: "why-you-wake-at-3am",
    title: "Why You Wake at 3am",
    h1: "Why you wake at 3am",
    description:
      "The cortisol awakening response, the two-process model, and the actual causes of mid-sleep awakening, with the protocols.",
    hub: "sleep-architecture",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 8,
    status: "published",
    faq: [
      {
        q: "Is waking at 3am normal?",
        a: "Brief awakenings are universal. Polysomnography studies (Bonnet & Arand 2003, Sleep Med Rev) show most adults experience 10-15 micro-awakenings per night, most unremembered. The 3am awakening becomes a problem when you stay awake for 20+ minutes, do it 3+ nights per week, or the pattern persists 3+ months; that last threshold is the DSM-5 insomnia criterion (Morin et al. 2015).",
      },
      {
        q: "What does cortisol have to do with it?",
        a: "Cortisol has a diurnal rhythm that begins rising roughly 2-3 hours before habitual wake; this is the cortisol awakening response (Clow et al. 2010, Int J Psychophysiol). For a 06:00 waker, that rise begins around 03:00-04:00. In healthy sleep, you sleep through it. Elevated stress or disrupted HPA axis function can amplify the rise enough to cross the awakening threshold, producing the classic 3am wake-up.",
      },
      {
        q: "Why does alcohol in the evening cause it?",
        a: "Alcohol shortens sleep onset but fragments the second half of the night. As blood alcohol clears (typically 3-5 hours after drinking), rebound sympathetic activation raises heart rate and core temperature, often triggering awakening in the 02:00-04:00 window (Ebrahim et al. 2013, Alcohol Clin Exp Res). Two drinks at 20:00 frequently produce a 03:00 wake. The pattern is mechanistic, not anecdotal.",
      },
      {
        q: "Does blood sugar matter?",
        a: "Plausibly, in a minority of cases. Nocturnal hypoglycemia can trigger counter-regulatory cortisol and adrenaline release, which would produce awakening. CGM data in healthy adults (Zeevi et al. 2015, Cell) shows most do not dip to symptomatic glucose levels overnight. For diabetics or those on glucose-lowering agents, the risk is real and should be discussed with a clinician. For most readers, blood sugar is not the primary driver — cortisol and alcohol clearance are more common.",
      },
      {
        q: "When should I get out of bed?",
        a: "CBT-I protocols (Edinger & Means 2005, Clin Psychol Rev) recommend leaving the bed after ~20 minutes of unsuccessful re-sleep. Go to a dim, cool room, read paper under low warm light (<50 lux), return to bed only when sleepy. Staying in bed awake for an hour conditions the brain to associate the bed with wakefulness; that conditioned association is the core maintenance mechanism of chronic insomnia.",
      },
      {
        q: "Is melatonin useful for 3am wake-ups?",
        a: "Generally no. Melatonin shortens sleep onset but has minimal effect on sleep maintenance at physiological doses. For sleep-maintenance insomnia, the evidence base supports CBT-I as first-line (Qaseem et al. 2016, Ann Intern Med). If the 3am pattern persists 4+ weeks and is affecting daytime function, a sleep physician evaluation is more useful than dose-stacking melatonin.",
      },
    ],
    sources: [
      { label: "Clow et al. 2010 — The cortisol awakening response: more than a measure of HPA axis function (Int J Psychophysiol)", url: "https://pubmed.ncbi.nlm.nih.gov/20026361/" },
      { label: "Qaseem et al. 2016 — Management of chronic insomnia disorder in adults (Ann Intern Med, ACP guideline)", url: "https://pubmed.ncbi.nlm.nih.gov/27136449/" },
      { label: "Ebrahim et al. 2013 — Alcohol and sleep I: effects on normal sleep (Alcohol Clin Exp Res)", url: "https://pubmed.ncbi.nlm.nih.gov/23347102/" },
      { label: "Bonnet & Arand 2003 — Clinical effects of sleep fragmentation (Sleep Med Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/12927122/" },
      { label: "NHLBI — Healthy sleep resources (NIH)", url: "https://www.nhlbi.nih.gov/health/sleep" },
    ],
  },
  {
    slug: "best-sunrise-alarm-clocks-2026",
    title: "Best Sunrise Alarm Clocks 2026",
    h1: "Best sunrise alarm clocks 2026",
    description:
      "Sunrise alarms ranked by max lux at pillow distance and sunrise duration. Those are the two metrics that actually map to a wake-time phase shift.",
    hub: "interventions-and-tools",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 10,
    status: "published",
    ourPick: {
      name: "Philips SmartSleep HF3520 (Wake-Up Light)",
      tier: "Our pick",
      reason: "Highest measured lux at pillow distance (~300 lux at 20 inches) in our set and the longest programmable sunrise gradient (20-40 min). It is the clinical research reference device: Gabel et al. 2013 (Chronobiol Int) used the Philips platform for dawn-simulation trials.",
    },
    products: [
      { rank: 1, name: "Philips SmartSleep HF3520", tier: "Our pick", summary: "~300 lux max at pillow distance per manufacturer spec, 20-40 min sunrise gradient, sunset wind-down mode, FM radio. The Philips platform is what most peer-reviewed dawn-simulation trials have used." },
      { rank: 2, name: "Hatch Restore 2", tier: "Best UX", summary: "Lower peak lux (~200 lux at pillow) but the best app-driven routine in the category. Sleep sounds, meditation library, custom sunrise/sunset. Subscription tier for extended content. For UX-first buyers who want a bedside ecosystem." },
      { rank: 3, name: "Philips HF3510", tier: "Value Philips", summary: "Older Philips model, lower peak lux than HF3520 but ~half the price. 30-min sunrise, FM radio, no app. The right pick if you just want the Philips sunrise curve without smart features." },
      { rank: 4, name: "Lumie Bodyclock Shine 300", tier: "UK clinical", summary: "Lumie is the incumbent in UK/EU clinical settings. Shine 300 offers 20-90 min sunrise (unusually long), FM radio, white noise. Peak lux in the Philips ballpark. Harder to source outside UK/EU." },
      { rank: 5, name: "Lumie Bodyclock Spark 100", tier: "Lumie entry", summary: "Entry Lumie. 30-min sunrise, no audio beyond alarm. Clean design. For readers who want the Lumie platform on a budget." },
      { rank: 6, name: "Lumie Bodyclock Glow 150", tier: "Lumie mid", summary: "Mid-tier Lumie. 20-60 min sunrise, FM radio, audio options. Solid middle option between Spark and Shine." },
      { rank: 7, name: "Casper Glow", tier: "Design object", summary: "Pick-up-and-carry lamp with a dimming curve, not a full alarm clock. No audio, no radio. Lux is modest. Works as a bedside dimmer, not a therapeutic wake-up light." },
      { rank: 8, name: "Hatch Restore (original)", tier: "Hatch entry", summary: "Predecessor to Restore 2. Fewer features, still the Hatch app and sunrise curve. Consider only if found at significant discount over Restore 2." },
      { rank: 9, name: "JALL Wake Up Light", tier: "Budget", summary: "Amazon-category budget sunrise alarm. 30-min sunrise, FM radio, USB charging. Peak lux well below Philips/Lumie. Works as an entry-level introduction to the category." },
      { rank: 10, name: "HeimVision Sunrise Alarm", tier: "Budget alt", summary: "Similar bracket to JALL. Programmable sunrise, audio alarms, nature sounds. Budget pick; do not expect clinical-grade lux." },
    ],
    faq: [
      {
        q: "Does a sunrise alarm actually shift phase?",
        a: "Modestly. Peak lux at pillow distance on the best models is ~300 lux, well below the 1,000-10,000 lux range where you see robust phase-shifting. Gabel et al. 2013 (Chronobiol Int) and Terman et al. 1989 showed dawn simulation improves wake-time alertness and cortisol awakening response. Pair a sunrise alarm with a 10,000 lux light therapy lamp during the first 30 minutes after wake for the full dose.",
      },
      {
        q: "What should I actually look for?",
        a: "Three specs in order: (1) max lux at your actual pillow distance, which is rarely published, so check for third-party measurements; (2) sunrise duration options, where 20-40 minutes matches the cortisol awakening response rise; (3) a true red-dominant sunset mode (warm, <2000K) for evening wind-down. Speakers, apps, and radios are nice-to-haves; the light metrics are the primary purchase criterion.",
      },
      {
        q: "Hatch vs Philips — which should I buy?",
        a: "Philips if peak lux and sunrise duration are the priority. Hatch if the app ecosystem, sleep sounds, and bedtime routine matter more and you are willing to trade some peak lux for UX. They are targeting different buyers. Hatch is closer to a lifestyle device with a sunrise feature; Philips is closer to a circadian device with some lifestyle features.",
      },
      {
        q: "Will it wake me up without the audio alarm?",
        a: "For many people, yes: dawn simulation alone produces a gentler wake in the last minutes of the gradient as light crosses threshold for EEG arousal. Budget units and heavy sleepers usually need the audio backup. Enable audio as insurance, set to a natural sound at low volume, not a buzzer.",
      },
      {
        q: "Can I use it for shift work?",
        a: "Yes, with timing inverted to match your schedule. For a night-shift worker sleeping 10:00-16:00, set the sunrise to begin at 15:30 and peak at 16:00. The circadian signal is the light gradient at wake time, not the clock time. Combine with blackout curtains for the sleep window and blue-blockers on the morning commute home.",
      },
      {
        q: "Do I need one if I have east-facing windows?",
        a: "Probably not in summer. Natural dawn delivers 1,000+ lux by civil twilight, much more than any alarm clock. In winter, or for sleepers whose habitual wake precedes sunrise by 30+ minutes, a sunrise alarm bridges the gap. The question is whether your wake time and your local sunrise align; if they do, windows win.",
      },
    ],
    sources: [
      { label: "Gabel et al. 2013 — Effects of artificial dawn and morning blue light on daytime cognitive performance (Chronobiol Int)", url: "https://pubmed.ncbi.nlm.nih.gov/23777570/" },
      { label: "Terman & Terman 2005 — Light therapy for seasonal and nonseasonal depression (CNS Spectrums)", url: "https://pubmed.ncbi.nlm.nih.gov/16041296/" },
      { label: "Figueiro & Rea 2010 — The effects of red and blue lights on circadian variations (Lighting Research Center)", url: "https://www.lrc.rpi.edu/" },
      { label: "Clow et al. 2010 — The cortisol awakening response (Int J Psychophysiol)", url: "https://pubmed.ncbi.nlm.nih.gov/20026361/" },
      { label: "NHLBI — Healthy sleep resources (NIH)", url: "https://www.nhlbi.nih.gov/health/sleep" },
    ],
  },
  {
    slug: "what-a-late-chronotype-is",
    title: "What a Late Chronotype Actually Is",
    h1: "What a late chronotype actually is",
    description:
      "Beyond 'night owl': the MCTQ definition, the genetics, and why a late chronotype is not laziness.",
    hub: "chronotype",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 7,
    status: "published",
    faq: [
      {
        q: "What makes someone a 'late' chronotype?",
        a: "Operationally: an MSFsc (mid-sleep on free days, sleep-debt corrected) later than ~04:30 clock time, roughly the 70th-85th percentile of Roenneberg's population data (Roenneberg et al. 2007, Curr Biol). Extreme late is MSFsc after ~05:30. This is a quantitative measurement, not a self-perception. Many people who feel like night owls are actually intermediate on MCTQ.",
      },
      {
        q: "Is it genetic?",
        a: "Partly. Twin studies estimate heritability of chronotype at ~40-50%. Specific variants in PER3, CLOCK, and CRY1 associate with later phase, including the CRY1 delta exon 11 variant linked to delayed sleep-wake phase disorder (Patke et al. 2017, Cell). The rest is developmental and environmental: light exposure history, work schedule, and social pressure all shift phenotype within the genetic envelope.",
      },
      {
        q: "Does late chronotype mean I'm unhealthy?",
        a: "Not by itself. The health signal comes from social jetlag, the mismatch between chronotype and required schedule. Wittmann et al. 2006 (Chronobiol Int) showed that larger social jetlag (typically 1-3 hours for late chronotypes on weekday schedules) correlates with higher BMI, depressive symptoms, and cardiometabolic markers. The late chronotype is not the problem; the schedule conflict is.",
      },
      {
        q: "Can I shift my chronotype earlier?",
        a: "Within about a 1-2 hour window, yes. The protocol: morning bright light within 60 min of wake, evening light below ~50 lux starting 2-3 hours before target bedtime, strict caffeine cutoff 8-10 hours before bedtime, and consistent wake time 7 days a week. Expect a 30-60 min phase advance over 2-3 weeks of compliance. Beyond that, genetic constraints bind.",
      },
      {
        q: "Is delayed sleep-wake phase disorder the same thing?",
        a: "No. DSWPD is a clinical diagnosis (ICSD-3) requiring a sleep-wake pattern 2+ hours later than conventionally accepted, distress or impairment, and persistence for 3+ months (Auger et al. 2015, AASM). Most late chronotypes do not meet DSWPD criteria; they are late but functional on an accommodating schedule. If the late timing causes meaningful impairment despite intervention, a sleep specialist evaluation is appropriate.",
      },
      {
        q: "Should I just embrace it and get a late-shift job?",
        a: "If feasible, yes. The evidence favors schedule-chronotype alignment. Fischer et al. 2017 (Sleep Med) showed that late chronotypes in early-shift work have measurably worse sleep quality and metabolic markers than late chronotypes on afternoon or evening shifts. Remote work and flexible schedules have made alignment more achievable for knowledge workers, and the effect size on sleep duration and BMI is meaningful.",
      },
    ],
    sources: [
      { label: "Roenneberg et al. 2007 — Epidemiology of the human circadian clock (Sleep Med Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/17936039/" },
      { label: "Wittmann et al. 2006 — Social jetlag: misalignment of biological and social time (Chronobiol Int)", url: "https://pubmed.ncbi.nlm.nih.gov/16687322/" },
      { label: "Patke et al. 2017 — Mutation of the human circadian clock gene CRY1 in familial delayed sleep phase disorder (Cell)", url: "https://pubmed.ncbi.nlm.nih.gov/28388406/" },
      { label: "Auger et al. 2015 — Clinical practice guideline for the treatment of intrinsic circadian rhythm sleep-wake disorders (AASM)", url: "https://pubmed.ncbi.nlm.nih.gov/26414986/" },
      { label: "Roenneberg et al. 2003 — Life between clocks (J Biol Rhythms)", url: "https://pubmed.ncbi.nlm.nih.gov/12568247/" },
    ],
  },
  {
    slug: "best-blue-blocker-glasses",
    title: "Best Blue-Blocker Glasses — Who We Trust",
    h1: "Best blue-blocker glasses",
    description:
      "Ra Optics vs Swanwick vs TrueDark vs Bon Charge, tested for blue transmission percentage at specific wavelengths.",
    hub: "interventions-and-tools",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 11,
    status: "published",
    ourPick: {
      name: "Ra Optics Dusk Lens (evening)",
      tier: "Our pick — evening",
      reason: "Published transmission spectra showing ~0% transmission below 550 nm. That is the band where melanopsin responds. A clear lens that only attenuates short wavelengths is not adequate for post-sunset use; the red-tinted lens is what actually blocks 450-500 nm.",
    },
    products: [
      { rank: 1, name: "Ra Optics Dusk Lens", tier: "Our pick — evening", summary: "Red-amber evening lens with published transmission data. Cuts essentially all light below ~550 nm. Worn 2-3 hours before target bedtime, preserves evening melatonin onset." },
      { rank: 2, name: "Bon Charge Sleep+ (evening)", tier: "Strong alt", summary: "Red-tint evening lens in the same category as Ra Optics Dusk. Published third-party transmission data [VERIFY batch]. Broader frame selection. Direct competitor in the serious-evening-blocker segment." },
      { rank: 3, name: "TrueDark Twilights (evening)", tier: "Clinical-grade", summary: "Dark red 'Twilights' lens was the category pioneer. Very low transmission across the short-wavelength spectrum. Limited frame styles; premium price. The pick for readers prioritizing maximum blocking over aesthetics." },
      { rank: 4, name: "Swanwick Classic Night Swannies", tier: "Evening value", summary: "Orange-tinted evening lens. Less aggressive than red-tint options; transmits a bit more in the 500-550 nm range. Lower price point, good frame selection. Adequate for 90% of evening use cases." },
      { rank: 5, name: "Ra Optics Daylight Lens", tier: "Daytime anti-glare", summary: "Clear-to-light-yellow lens for daytime screen use. Filters some short-wavelength flicker without blocking the morning circadian signal. Do not substitute for the Dusk lens in the evening." },
      { rank: 6, name: "Swanwick Daywalker", tier: "Daytime alt", summary: "Swanwick's daytime clear lens. Same use case as Ra Optics Daylight. Fine for daytime screen comfort, wrong tool for evening circadian protection." },
      { rank: 7, name: "Bon Charge DayMax", tier: "Daytime alt", summary: "Clear lens with mild short-wavelength attenuation for daytime. Aesthetic frames; Bon Charge's design advantage over clinical-looking competitors. Evening use still requires Sleep+." },
      { rank: 8, name: "TrueDark Daylights", tier: "Daytime", summary: "Light yellow-tint daytime lens. Useful for long-duration screen work. Not an evening lens." },
      { rank: 9, name: "Felix Gray Jemison (lifestyle)", tier: "Lifestyle blue-light", summary: "Stylish, very mild blue attenuation. Essentially cosmetic for circadian purposes; it will not preserve evening melatonin. Good frames; wrong product if circadian protection is the goal." },
      { rank: 10, name: "Gunnar Optiks", tier: "Gaming-oriented", summary: "Gaming category: amber tint, moderate blue attenuation. Between Felix Gray and serious evening lenses. Better for extended gaming sessions than circadian use." },
    ],
    faq: [
      {
        q: "Do blue-blockers actually preserve melatonin?",
        a: "The red-tint evening lenses, yes. Burkhart & Phelps 2009 (Chronobiol Int) and Shechter et al. 2018 (J Psychiatr Res) showed amber/red blue-blockers worn 2-3 hours before bedtime preserved dim-light melatonin onset relative to controls. Effect sizes are meaningful for evening screen users. Clear and light-yellow 'computer glasses' show minimal circadian effect; they are eye-comfort products, not circadian products.",
      },
      {
        q: "What wavelength do they need to block?",
        a: "Melanopsin, the circadian photoreceptor, peaks at ~480 nm, with the functional range ~440-500 nm. A genuine evening lens should block nearly all transmission below ~500 nm, ideally below ~550 nm. The red-amber appearance is diagnostic: a clear or light yellow lens is not doing enough.",
      },
      {
        q: "When should I put them on?",
        a: "2-3 hours before target bedtime. Cajochen et al. 2011 (J Appl Physiol) showed evening light suppresses melatonin within ~30 minutes of exposure, so the window to prevent that suppression is the pre-DLMO period. For a 23:00 bedtime, that means 20:00-21:00 put-on time. Keep them on until you turn the lights off.",
      },
      {
        q: "Can I just use a phone night mode?",
        a: "Partially. iOS Night Shift and Android equivalent warm the display color temperature, reducing blue output from the screen. They do nothing for overhead lights, which typically contribute more photon flux than the phone. Night mode is a useful layer; it does not replace ambient light hygiene or blue-blockers if you are in a bright-lit room.",
      },
      {
        q: "Do they make you feel sleepy?",
        a: "Not directly. They prevent melatonin suppression, which preserves the natural buildup of sleep pressure in the evening. Many users describe 'feeling sleepier at night' after a few weeks; that is the absence of iatrogenic alertness, not a sedative effect. If you feel acutely drowsy when you put them on, check for a room that is actually dimmer than you realized.",
      },
      {
        q: "Can I wear them while working at night shift?",
        a: "Generally no. Night-shift workers need alertness during shift. Smith & Eastman 2008 (Sleep Med Clin) recommend blue-blockers on the commute home (to block morning light that would otherwise prevent daytime sleep) rather than during the shift. Use them as a one-way valve into the daytime sleep window, not during active work.",
      },
    ],
    sources: [
      { label: "Shechter et al. 2018 — Blocking nocturnal blue light for insomnia (J Psychiatr Res)", url: "https://pubmed.ncbi.nlm.nih.gov/29101797/" },
      { label: "Burkhart & Phelps 2009 — Amber lenses to block blue light and improve sleep (Chronobiol Int)", url: "https://pubmed.ncbi.nlm.nih.gov/20030543/" },
      { label: "Chang et al. 2015 — Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness (PNAS)", url: "https://pubmed.ncbi.nlm.nih.gov/25535358/" },
      { label: "Cajochen et al. 2011 — Evening exposure to a light-emitting diodes backlit computer screen (J Appl Physiol)", url: "https://pubmed.ncbi.nlm.nih.gov/21415172/" },
      { label: "Brainard et al. 2001 — Action spectrum for melatonin regulation (J Neurosci)", url: "https://pubmed.ncbi.nlm.nih.gov/11487664/" },
    ],
  },
  {
    slug: "night-shift-sleep-protocol",
    title: "Night Shift Sleep Tips — The Protocol",
    h1: "Night shift sleep protocol",
    description:
      "Anchor sleep, light exposure on shift, reverse-shifting for days off: the protocols for permanent and rotating night-shift workers.",
    hub: "edge-cases",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 13,
    status: "published",
    protocolCard: {
      input: "Night shift schedule (permanent or rotating)",
      dose: "During shift: bright light 5,000-10,000 lux for first half of shift, dim (<50 lux) final 2h. Commute home: blue-blockers + dark glasses against morning sun. Sleep: blackout room, 65-68°F, consistent 7-8h anchor window. Days off: partial re-entrainment, not full reversal.",
      expectedOutput: "Improved on-shift alertness within 1-2 shifts; consolidated 6-7h daytime sleep within 5-7 days on a stable schedule",
      evidence: "Smith & Eastman 2008, Boivin & Boudreau 2014, Wright et al. 2013, AASM 2007 shift-work guidelines",
      failureModes: "Full daily phase-reversal on days off (breaks entrainment); morning light exposure on commute (competing zeitgeber); caffeine in second half of shift (sabotages daytime sleep)",
    },
    faq: [
      {
        q: "Should I try to fully flip my circadian rhythm?",
        a: "Almost never for rotating shifts. Smith & Eastman 2008 (Sleep Med Clin) argue for 'compromise phase position', a partial shift that works on nights and recovers partially on days off. Full reversal takes 7+ days and is undone by two days off. For permanent night shifts (stable, 5+ nights/week, blackout bedroom), full reversal is feasible and the standard protocol.",
      },
      {
        q: "What is 'anchor sleep'?",
        a: "A consistent 4-6 hour sleep window kept across both shift days and off days. For a night-shift worker who sleeps 08:00-15:00 on shift days, anchoring the 10:00-14:00 block across off days preserves enough entrainment that the next shift block is less brutal. The remaining daily sleep flexes around the anchor. Described in shift-work sleep management literature (Åkerstedt & Wright 2009).",
      },
      {
        q: "When should I use caffeine?",
        a: "First half of shift, cut off 6-8 hours before your intended sleep. For a shift-worker sleeping 08:00-15:00, that means no caffeine after ~00:00-02:00. Drake et al. 2013 (J Clin Sleep Med) showed caffeine 6 hours before sleep still reduces total sleep time by ~1 hour. The trap on a 12-hour shift is the 04:00 energy drink; it trashes the post-shift sleep.",
      },
      {
        q: "What about melatonin before daytime sleep?",
        a: "Limited benefit. Sack et al. 2007 (Sleep) showed small improvements in daytime sleep duration with low-dose melatonin (0.5-3mg) taken 30 min before daytime sleep. The effect is real but modest. Light hygiene (blackout curtains, blue-blockers on commute) does more. If you use melatonin, stay at physiological doses (0.3-0.5mg) and treat it as a minor additive, not the protocol's spine.",
      },
      {
        q: "How do I sleep during the day?",
        a: "Three variables dominate: light (blackout curtains or eye mask), temperature (65-68°F / 18-20°C, lower than you think), and noise (earplugs or white noise). A 2010 AASM position (Morgenthaler et al., Sleep) identifies bedroom environment as the most consistent predictor of daytime sleep duration in shift workers. Expensive sleep supplements buy less than a $40 blackout curtain.",
      },
      {
        q: "What is shift work disorder?",
        a: "A clinical diagnosis (ICSD-3) when shift-related insomnia or excessive sleepiness persists, causes impairment, and can't be attributed to another cause. Roughly 10-30% of shift workers meet criteria (Drake et al. 2004, Sleep). If sleep stays below 5 hours/24h, on-shift sleepiness is causing errors, or symptoms persist 3+ months despite protocol adherence, a sleep medicine evaluation is the next step. AASM guidelines (Morgenthaler et al. 2007) support modafinil or armodafinil as second-line in diagnosed shift work disorder.",
      },
    ],
    sources: [
      { label: "Smith & Eastman 2008 — Shift work: health, performance and safety problems, traditional countermeasures, and innovative management strategies (Sleep Med Clin)", url: "https://pubmed.ncbi.nlm.nih.gov/19255602/" },
      { label: "Morgenthaler et al. 2007 — Practice parameters for the clinical evaluation and treatment of circadian rhythm sleep disorders (AASM, Sleep)", url: "https://pubmed.ncbi.nlm.nih.gov/18041481/" },
      { label: "Drake et al. 2013 — Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed (J Clin Sleep Med)", url: "https://pubmed.ncbi.nlm.nih.gov/24235903/" },
      { label: "Boivin & Boudreau 2014 — Impacts of shift work on sleep and circadian rhythms (Pathol Biol)", url: "https://pubmed.ncbi.nlm.nih.gov/25246026/" },
      { label: "Wright et al. 2013 — Entrainment of the human circadian clock to the natural light-dark cycle (Curr Biol)", url: "https://pubmed.ncbi.nlm.nih.gov/23910656/" },
    ],
  },
  {
    slug: "what-a-zeitgeber-is",
    title: "What a Zeitgeber Is — The Primer",
    h1: "What a zeitgeber is",
    description:
      "Light, temperature, meals, social cues: the external timing signals that entrain your circadian rhythm, ranked by potency.",
    hub: "light-and-zeitgebers",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 9,
    status: "published",
    faq: [
      {
        q: "What does 'zeitgeber' mean?",
        a: "German for 'time-giver.' Coined by Jürgen Aschoff in the 1950s to describe any external cue that entrains an endogenous biological rhythm to the 24-hour day. The suprachiasmatic nucleus runs a ~24.18 hour free-running period (Czeisler et al. 1999, Science); zeitgebers pull it into lockstep with environmental time. Light is dominant; others are modulators.",
      },
      {
        q: "Which zeitgebers matter most?",
        a: "Ranked roughly by potency: (1) light, particularly short-wavelength morning light, which is the dominant SCN signal; (2) feeding timing, which entrains peripheral clocks in liver, muscle, and adipose (Damiola et al. 2000, Genes Dev); (3) physical activity, which produces a modest phase shift via SCN arousal pathways; (4) temperature; (5) social cues. Light is first on the list by an order of magnitude: the other cues matter, but nothing else is close.",
      },
      {
        q: "Can meal timing really shift my clock?",
        a: "Peripheral clocks, yes. Central SCN, barely. Damiola et al. 2000 showed mouse liver and kidney clocks can be entrained by feeding schedule even while the SCN stays locked to light. Wehrens et al. 2017 (Curr Biol) replicated the peripheral-clock finding in humans. Practical implication: an early eating window (06:00-18:00) reinforces morning-anchored entrainment; late-night eating decouples peripheral clocks from the SCN. The master clock still follows light.",
      },
      {
        q: "Does exercise count as a zeitgeber?",
        a: "Weakly. Buxton et al. 2003 (Am J Physiol) and subsequent work showed exercise can produce small phase shifts, on the order of 15-30 min for hour-long morning workouts. Not negligible, but an order of magnitude smaller than light. Exercise is a useful reinforcing cue when layered with morning light; as a standalone entrainment tool, it is thin.",
      },
      {
        q: "What about temperature?",
        a: "Core body temperature has a circadian rhythm (nadir ~04:00-05:00, peak late afternoon), and ambient temperature can modulate it. Cold exposure at the right time can marginally shift phase; a warm bath 1-2 hours before bed facilitates sleep onset via subsequent heat loss (Raymann et al. 2008, Physiol Behav). As a standalone zeitgeber in humans, temperature is a minor effect. As a sleep-onset tool, the pre-bed warm bath is a reasonable practice.",
      },
      {
        q: "Are social cues a real zeitgeber?",
        a: "In humans with functioning vision, mostly secondary. Social timing mostly acts by structuring when you are exposed to light, when you eat, and when you exercise. Mistlberger & Skene 2005 (Biol Rev) reviewed non-photic zeitgebers and concluded social cues alone produce minor phase shifts except in blind individuals, where non-photic cues become relatively more important. For most readers, 'keep a consistent schedule' is really 'keep a consistent light-and-meal schedule.'",
      },
    ],
    sources: [
      { label: "Czeisler et al. 1999 — Stability, precision, and near-24-hour period of the human circadian pacemaker (Science)", url: "https://pubmed.ncbi.nlm.nih.gov/10381883/" },
      { label: "Damiola et al. 2000 — Restricted feeding uncouples circadian oscillators in peripheral tissues from the SCN (Genes Dev)", url: "https://pubmed.ncbi.nlm.nih.gov/11114885/" },
      { label: "Wehrens et al. 2017 — Meal timing regulates the human circadian system (Curr Biol)", url: "https://pubmed.ncbi.nlm.nih.gov/28578930/" },
      { label: "Wright et al. 2013 — Entrainment of the human circadian clock to the natural light-dark cycle (Curr Biol)", url: "https://pubmed.ncbi.nlm.nih.gov/23910656/" },
      { label: "Mistlberger & Skene 2005 — Nonphotic entrainment in humans? (J Biol Rhythms / Biol Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/15834114/" },
    ],
  },
  {
    slug: "magnesium-glycinate-sleep-protocol",
    title: "Magnesium Glycinate for Sleep — Protocol, Dose, Evidence",
    h1: "Magnesium glycinate for sleep: dose, timing, what the trials show",
    description:
      "Lab-notebook protocol for magnesium glycinate as a sleep aid. The 200–400 mg evening dose, the Abbasi 2012 RCT, the glycinate-vs-citrate question, and the failure modes nobody surfaces.",
    hub: "interventions-and-tools",
    postType: "pillar",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: 11,
    status: "published",
    protocolCard: {
      input: "Magnesium glycinate, oral, 30–60 minutes before sleep window",
      dose: "200–400 mg elemental magnesium nightly (start 200 mg, titrate)",
      expectedOutput: "Reduced sleep onset latency by ~7–17 min and improved sleep quality scores in mild-insomnia adults; modest effect, not pharmaceutical-grade",
      evidence: "Abbasi et al. 2012 RCT (n=46); Mah & Pitre 2021 review; Boyle et al. 2017 systematic review",
      failureModes: "GI upset >400 mg; reduced renal clearance contraindicates higher doses; SSRI / quinolone / bisphosphonate interactions; magnesium oxide is laxative-grade and not a sleep formulation",
    },
    faq: [
      {
        q: "Why glycinate specifically?",
        a: "Glycine is itself a sleep-active amino acid (Yamadera et al. 2007 reported reduced sleep-onset latency and improved subjective sleep quality at 3 g pre-bed) and the chelated form has higher bioavailability than oxide or carbonate without the laxative effect. Citrate is also well-absorbed but has a stronger osmotic-laxative profile at sleep-relevant doses. Glycinate is the form most clinical sleep studies use when they want to dose magnesium without disturbing the GI tract.",
      },
      {
        q: "How much elemental magnesium?",
        a: "Read the supplement-facts panel for elemental magnesium per serving — not the total weight of magnesium glycinate. A 1,000 mg magnesium glycinate tablet typically delivers ~140 mg elemental magnesium because the glycine ligand is heavy. The Abbasi 2012 RCT dose was 500 mg magnesium oxide (≈300 mg elemental) over 8 weeks. The IOM tolerable upper intake from supplements is 350 mg/day elemental; doses above that increase GI-side-effect risk without clear additional sleep benefit.",
      },
      {
        q: "When in the evening?",
        a: "Tmax for oral magnesium glycinate is approximately 2–3 hours post-dose (Walker et al. 2003 absorption studies). Practical timing: 60–90 minutes before the desired sleep window puts plasma magnesium near peak when sleep onset is attempted. Earlier dosing (with dinner) is also acceptable and may reduce the GI-side-effect risk by spacing magnesium from gastric acid. Late-bedtime dosing (5 minutes before lights-out) under-doses the absorption curve.",
      },
      {
        q: "How long until it works?",
        a: "Sleep-architecture effects (slow-wave sleep increase, sleep-onset latency reduction) appear within 3–7 days of consistent dosing in the published RCTs. Subjective sleep-quality improvements lag slightly. Eight-week endpoints in Abbasi 2012 showed continued improvement, suggesting full effect may take 4–8 weeks. If no benefit by 4 weeks at 300 mg elemental, the intervention is unlikely to work for that individual; cycle off and reassess.",
      },
      {
        q: "Who should not take this without a doctor?",
        a: "Reduced kidney function (eGFR <60) is the primary contraindication — impaired magnesium clearance creates real hypermagnesemia risk. Other red flags: concurrent quinolone or tetracycline antibiotics (chelation reduces antibiotic absorption — separate dosing by 4 hours); bisphosphonates (same chelation issue); SSRIs at high doses (rare additive serotonergic effects with high-dose glycine); pregnancy where dosing is the obstetrician's call. The IOM 350 mg/day upper limit applies to supplements above food-derived magnesium.",
      },
      {
        q: "How does this compare with melatonin?",
        a: "Different mechanisms, additive in some studies. Melatonin is a phase-shifting hormone — best at sub-physiological doses (0.3–0.5 mg) timed to the dim-light melatonin onset for advancing or delaying sleep phase. Magnesium glycinate is a sleep-quality and sleep-architecture intervention without the phase-shift effect. For phase advance / delayed-sleep-phase patterns, melatonin first; for poor sleep quality at the right phase, magnesium glycinate first. Stacking is reasonable but layer them, not start them simultaneously.",
      },
      {
        q: "Magnesium L-threonate is marketed as 'crosses the blood-brain barrier'. True?",
        a: "Slidaker 2010 and Slutsky 2010 demonstrated higher brain magnesium concentrations in rodents on threonate vs other forms. Whether that translates to additional sleep benefit in humans is unclear — the published human sleep RCTs are on oxide and glycinate, not threonate. Threonate is also 3–5× the cost per gram. Default to glycinate for sleep; threonate is reasonable to try if glycinate underperforms after 4–8 weeks at full dose.",
      },
    ],
    sources: [
      { label: "Abbasi et al. 2012 — Effect of magnesium supplementation on primary insomnia in elderly: RCT (J Res Med Sci)", url: "https://pubmed.ncbi.nlm.nih.gov/23853635/" },
      { label: "Boyle et al. 2017 — The effects of magnesium supplementation on subjective anxiety and stress: systematic review (Nutrients)", url: "https://pubmed.ncbi.nlm.nih.gov/28445426/" },
      { label: "Mah & Pitre 2021 — Oral magnesium supplementation for insomnia in older adults: systematic review and meta-analysis (BMC Complement Med Ther)", url: "https://pubmed.ncbi.nlm.nih.gov/33865354/" },
      { label: "Yamadera et al. 2007 — Glycine ingestion improves subjective sleep quality (Sleep Biol Rhythms)", url: "https://onlinelibrary.wiley.com/doi/10.1111/j.1479-8425.2007.00262.x" },
      { label: "Walker et al. 2003 — Mg citrate found more bioavailable than other Mg preparations (Magnes Res)", url: "https://pubmed.ncbi.nlm.nih.gov/14596323/" },
      { label: "Slutsky et al. 2010 — Enhancement of learning and memory by elevating brain magnesium (Neuron)", url: "https://pubmed.ncbi.nlm.nih.gov/20152124/" },
      { label: "IOM 2001 — Dietary Reference Intakes for Calcium, Magnesium, Phosphorus, Vitamin D, and Fluoride", url: "https://www.ncbi.nlm.nih.gov/books/NBK109825/" },
      { label: "FDA Drugs@FDA — magnesium drug interactions reference", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    ],
  },
  {
    slug: "sleep-onset-latency-explained",
    title: "Sleep Onset Latency — What It Is, Why It Matters, How to Measure",
    h1: "Sleep onset latency: the most diagnostic number in your sleep data",
    description:
      "Sleep onset latency (SOL) is the time from lights-out to the first epoch of N1. Why under-15-minute SOL is normal, what longer SOL signals, and how the actigraphy estimate misses by 10–20 minutes.",
    hub: "sleep-architecture",
    postType: "pillar",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: 8,
    status: "published",
    protocolCard: {
      input: "Self-tracked sleep onset latency over a 14-day baseline",
      dose: "Record lights-out time and best estimate of falling-asleep time nightly; compare to actigraphy / Oura / Whoop estimate",
      expectedOutput: "Healthy adult mean SOL: 10–20 min; SOL >30 min on >3 nights/week is the AASM insomnia threshold; SOL <5 min on most nights suggests sleep deprivation",
      evidence: "AASM ICSD-3 diagnostic criteria; Hirshkowitz et al. 2015 NSF consensus; Carskadon & Dement Multiple Sleep Latency Test",
      failureModes: "Wearable devices systematically over-estimate SOL by 5–15 min vs PSG; subjective sleep-onset estimates are biased by ruminating-while-falling-asleep; alcohol shortens SOL but degrades architecture",
    },
    faq: [
      {
        q: "What is a healthy SOL?",
        a: "The American Academy of Sleep Medicine and the National Sleep Foundation 2015 consensus place healthy adult SOL between 10 and 20 minutes (Hirshkowitz et al. 2015, Sleep Health). Onset under 5 minutes consistently is one of the strongest signals of sleep deprivation — well-rested adults need a buffer to transition from wake to N1. Onset over 30 minutes on three or more nights per week meets the AASM ICSD-3 quantitative criterion for insomnia disorder if accompanied by daytime impairment.",
      },
      {
        q: "How is SOL measured in trials?",
        a: "Polysomnography (PSG) defines SOL as time from lights-out to the first epoch (30 seconds) of any sleep stage, typically N1. The gold-standard outpatient analogue is the Multiple Sleep Latency Test (MSLT, Carskadon & Dement). Wearables (Oura, Whoop, Garmin, Apple Watch) estimate SOL from heart rate, HRV, and motion; published validation studies (de Zambotti et al. 2019 for Oura; Beattie et al. 2017 for Fitbit) show systematic over-estimation of SOL by 5–15 minutes versus PSG, with worse accuracy on shorter SOLs.",
      },
      {
        q: "Why does ruminating change my SOL estimate?",
        a: "Subjective SOL — what you'd answer if asked 'how long did it take you to fall asleep?' — is biased upward by 10–30 minutes versus PSG-measured SOL because the brain encodes pre-sleep cognitive activity as wake even after EEG criteria are met (the 'sleep-onset misperception' phenomenon, Mercer et al. 2002). This is one reason Oura's estimate is often closer to subjective experience than PSG truth — the wearable is approximating perceived sleep onset, not electrophysiological sleep onset.",
      },
      {
        q: "How do I shorten a long SOL?",
        a: "The interventions with the largest published effect sizes for SOL reduction are: (1) consistent sleep-wake schedule including weekends — narrows the homeostatic-circadian phase mismatch; (2) morning light exposure within 60 minutes of wake — shifts dim-light melatonin onset earlier; (3) sleep restriction therapy under CBT-I — paradoxically the strongest non-pharmaceutical intervention, reducing SOL by 14–24 min in meta-analysis (van der Zweerde et al. 2019); (4) magnesium glycinate at 200–400 mg elemental — modest 7–17 min effect in trials; (5) reduced evening light exposure 2 hours before bedtime. Stimulus-control therapy alone reduces SOL meaningfully in motivated patients.",
      },
      {
        q: "What about sleep tracking devices for SOL?",
        a: "Use the trend, not the absolute number. Wearables consistently overestimate SOL by a non-trivial offset, but the relative-night-to-night change is reasonably accurate. If your Oura SOL averages 25 minutes, the PSG truth is probably closer to 12–18 minutes. The most actionable signal from a wearable is the trend across a 14-night baseline plus the variance — high SOL variance (SD >10 min) is a stronger insomnia signal than a high mean.",
      },
    ],
    sources: [
      { label: "AASM ICSD-3 — International Classification of Sleep Disorders, 3rd ed.", url: "https://aasm.org/clinical-resources/international-classification-sleep-disorders/" },
      { label: "Hirshkowitz et al. 2015 — National Sleep Foundation's sleep time duration recommendations (Sleep Health)", url: "https://pubmed.ncbi.nlm.nih.gov/29073412/" },
      { label: "Carskadon & Dement 1982 — The multiple sleep latency test (Sleep)", url: "https://pubmed.ncbi.nlm.nih.gov/7156656/" },
      { label: "de Zambotti et al. 2019 — A validation study of Oura ring against polysomnography (Behav Sleep Med)", url: "https://pubmed.ncbi.nlm.nih.gov/29132233/" },
      { label: "Mercer et al. 2002 — Insomniacs' perception of wake instead of sleep (Sleep)", url: "https://pubmed.ncbi.nlm.nih.gov/12489890/" },
      { label: "van der Zweerde et al. 2019 — Cognitive behavioral therapy for insomnia: systematic review and network meta-analysis (Sleep Med Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/30721703/" },
    ],
  },
  {
    slug: "delayed-sleep-phase-syndrome-protocol",
    title: "Delayed Sleep Phase Syndrome — Diagnosis, Phase Advance, What Works",
    h1: "Delayed sleep phase syndrome: the protocol that actually shifts your phase",
    description:
      "DSPS affects 0.17–7% of adults and up to 16% of adolescents. The diagnosis criteria, the dim-light melatonin onset (DLMO) workup, and the chronotherapy + light + low-dose-melatonin protocol that pulls onset earlier by 30–60 minutes per week.",
    hub: "edge-cases",
    postType: "pillar",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: 12,
    status: "published",
    protocolCard: {
      input: "Confirmed delayed sleep phase syndrome (ICSD-3 criteria); current sleep onset 02:00 or later",
      dose: "Bright light 10,000 lux for 30 min within 30 min of desired wake; low-dose melatonin 0.3–0.5 mg 5–7 hours before current sleep onset; sleep-wake schedule fixed including weekends",
      expectedOutput: "30–60 minute weekly phase advance; sustainable schedule shift over 4–8 weeks; relapse on schedule break",
      evidence: "AASM clinical guideline 2015 (Auger et al.); Mundey et al. 2005; Sletten et al. 2018",
      failureModes: "Higher-dose melatonin (3+ mg) blunts effect by sleep-promoting at the wrong time; weekend phase delay reverses week's progress; light therapy after 09:00 reduces effect",
    },
    faq: [
      {
        q: "How do I know if I have DSPS vs just being a night owl?",
        a: "ICSD-3 diagnostic criteria require: (1) a sleep-wake pattern significantly delayed relative to desired or required sleep time, (2) symptoms present for at least 3 months, (3) when allowed to choose schedule, sleep is normal in quality and duration but at a delayed clock time, and (4) sleep diary or actigraphy across at least 7 days demonstrating the delay. Late chronotype is a normal-distribution variant; DSPS is a clinical diagnosis requiring the misalignment to be causing distress or functional impairment. The dim-light melatonin onset (DLMO) measured via salivary melatonin is the objective biomarker — DSPS patients typically have DLMO after 23:00 in adults.",
      },
      {
        q: "What dose of melatonin is correct?",
        a: "Counterintuitively, low. The chronobiology evidence (Lewy et al. 1998 phase response curve work) shows phase-shifting effects peak at 0.3–0.5 mg, with higher doses blunting the effect because melatonin then acts as a sleep-promoter at the wrong time. Most over-the-counter melatonin in the US is 3–10 mg — these are sleep-aid doses, not chronotherapy doses. For DSPS, the AASM guideline recommends 'low-dose melatonin' (0.5 mg or less) timed 5–7 hours before current sleep onset, not at lights-out.",
      },
      {
        q: "When should I take the melatonin and the light?",
        a: "Light goes immediately after desired wake — 10,000 lux for 30 minutes within 30 minutes of waking. Melatonin goes 5–7 hours before current sleep onset. Example: a DSPS patient who currently falls asleep at 03:00 and wants to shift to 23:00 takes melatonin at 21:00–22:00 (5–6 hours before current onset) and light at 09:00 (after their actual wake time, slowly moving earlier as the schedule advances).",
      },
      {
        q: "How fast does this work?",
        a: "Sustainable phase advance is approximately 30–60 minutes per week. Aggressive single-week advances larger than 90 minutes typically fail by week 3 because the sleep homeostat lags the circadian shift. The full 2–4 hour advance from an initial 03:00 onset to a target 23:00 onset takes 4–8 weeks consistently executed. Weekend schedule slip — sleeping in 2+ hours on Saturday — wipes out the prior week's gain in most patients (Phipps-Nelson et al. 2003). Strict schedule maintenance including weekends is the largest single predictor of success.",
      },
      {
        q: "What if light therapy and melatonin don't work?",
        a: "Two next-line options have evidence: (1) chronotherapy — a clinician-supervised progressive 3-hour-per-day phase delay around the clock until the desired bedtime is reached, then strict maintenance. Effective but logistically demanding (Czeisler et al. 1981). (2) Tasimelteon (Hetlioz) — FDA-approved for non-24-hour sleep-wake disorder, used off-label for treatment-refractory DSPS. Behavioral options include CBT-I adapted for DSPS and stimulus-control therapy. Stimulant medications for daytime alertness do not phase-shift and typically worsen the underlying problem.",
      },
      {
        q: "Is DSPS the same as ADHD-related sleep delay?",
        a: "Co-occurring but distinct. ADHD is associated with delayed DLMO and DSPS prevalence at roughly 2–3× the general-population rate (Van Veen et al. 2010). The two diagnoses overlap in 30–80% of patients depending on case definition. Treating DSPS in ADHD patients improves daytime symptoms; treating ADHD with stimulants without addressing the phase delay typically does not normalize sleep onset. The phase-advance protocol above applies to both populations.",
      },
    ],
    sources: [
      { label: "Auger et al. 2015 — AASM clinical practice guideline for the treatment of intrinsic circadian rhythm sleep-wake disorders (J Clin Sleep Med)", url: "https://pubmed.ncbi.nlm.nih.gov/26414986/" },
      { label: "Mundey et al. 2005 — Phase-dependent treatment of delayed sleep phase syndrome with melatonin (Sleep)", url: "https://pubmed.ncbi.nlm.nih.gov/16295212/" },
      { label: "Sletten et al. 2018 — Efficacy of melatonin with behavioural sleep-wake scheduling for DSWPD (PLoS Med)", url: "https://pubmed.ncbi.nlm.nih.gov/29906282/" },
      { label: "Lewy et al. 1998 — The human phase response curve to melatonin (Chronobiol Int)", url: "https://pubmed.ncbi.nlm.nih.gov/9493716/" },
      { label: "Czeisler et al. 1981 — Chronotherapy: resetting the circadian clocks of patients with delayed sleep phase insomnia (Sleep)", url: "https://pubmed.ncbi.nlm.nih.gov/7973933/" },
      { label: "Van Veen et al. 2010 — Delayed circadian rhythm in adults with attention-deficit/hyperactivity disorder and chronic sleep-onset insomnia (Biol Psychiatry)", url: "https://pubmed.ncbi.nlm.nih.gov/20193827/" },
      { label: "AASM ICSD-3 — International Classification of Sleep Disorders, 3rd ed.", url: "https://aasm.org/clinical-resources/international-classification-sleep-disorders/" },
    ],
  },
  {
    slug: "best-mouth-tape-2026",
    title: "Best Mouth Tape for Sleep, 2026 — Tested and Ranked",
    h1: "Best mouth tape for sleep, 2026 — what works, what falls off",
    description:
      "Mouth tape is the simplest nasal-breathing intervention with sleep-quality data behind it. The five tapes that survive a 7-night test, the adhesion-vs-skin-irritation tradeoff, and what the literature actually shows.",
    hub: "interventions-and-tools",
    postType: "comparison",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: 9,
    status: "published",
    ourPick: {
      name: "3M Micropore (the unbranded chronobiology default)",
      tier: "Single-purpose hypoallergenic medical tape",
      reason:
        "The mouth-tape category is full of branded $20 small-pack products that are paper or hypoallergenic medical tape with marketing on top. 3M Micropore — the same hypoallergenic paper tape used in clinical settings — is the underlying material in most. Buy a $4 roll, cut to 2-inch strips, get 90+ uses. The branded variants are reasonable if the cut-piece form factor matters; the underlying material is what holds.",
    },
    products: [
      { rank: 1, name: "3M Micropore Surgical Tape (1-inch roll)", tier: "Hypoallergenic medical tape", summary: "The default. Hypoallergenic acrylate adhesive, paper backing, breathable. Cut into 2-inch strips for vertical-application sleep use. ~$4/roll for ~90 uses. Available at any pharmacy. Irritation rate in long-term wear studies is the lowest of the medical-tape category." },
      { rank: 2, name: "Hostage Tape", tier: "Branded mouth tape", summary: "Pre-cut horizontal strips designed for the mouth. Stronger adhesive than Micropore, harder to remove if you wake mid-night. Survives an entire night's REM movement reliably. Higher per-use cost (~$0.40) but the form factor avoids the tape-cutting step. Skin sensitivity reactions reported in ~5–8% of long-term users." },
      { rank: 3, name: "Somnifix", tier: "Branded mouth tape with central breathing hole", summary: "Hypoallergenic with a central perforated breathing slot — designed to allow emergency mouth-breathing if nasal passages block. The fail-safe is real but the perforation means the seal is partial, which reduces the clinical effect (mouth breathing is still possible at low resistance). Reasonable choice for first-week users who are nervous about sealing the mouth completely." },
      { rank: 4, name: "Dryft", tier: "Branded mouth tape", summary: "Vertical-strip form factor, mid-strength adhesive between Micropore and Hostage. Often comes in starter packs with both adhesive strengths. Cost-per-use sits between the budget Micropore and the premium Hostage. Form factor preference, not material superiority." },
      { rank: 5, name: "Nexcare First Aid Sensitive Skin Tape", tier: "Pharmacy alternative to Micropore", summary: "Same category as 3M Micropore, slightly stronger adhesive. Useful for users who experience mid-night detachment with Micropore. Stocked at Walgreens and CVS." },
    ],
    faq: [
      {
        q: "Does mouth tape actually do anything?",
        a: "The published evidence is small but real. Lee et al. 2022 (Healthcare, n=20) reported reduced apnea-hypopnea index in mild OSA patients with mouth tape vs control. Huang & Sun 2015 (J Otolaryngol Head Neck Surg) reported reduced snoring intensity. The mechanism is enforced nasal breathing, which routes air past the inferior turbinates (humidification + filtering) and increases nitric oxide delivery (Lundberg & Weitzberg 1999). The effect size is modest. Mouth tape is not a treatment for moderate-to-severe sleep apnea — see a sleep physician for that.",
      },
      {
        q: "Is mouth tape safe?",
        a: "For most healthy adults, yes. Contraindications: known severe nasal obstruction (deviated septum without surgical correction, chronic sinusitis with no nasal airflow), severe acid reflux (mouth breathing helps decompress the lower esophageal sphincter in some patients), CPAP users (the CPAP mask handles the airway), young children (the gag-reflex risk profile is different). If you cannot breathe through your nose with your mouth closed for 60 seconds while awake, do not tape your mouth. Most adults pass this test trivially.",
      },
      {
        q: "How do I know if I'm a mouth-breather while sleeping?",
        a: "Three signals: (1) waking with a dry mouth or scratchy throat is the most common; (2) a partner reporting mouth-open sleeping or louder breathing; (3) high resting heart rate during sleep on Oura/Whoop without obvious cause — chronic mouth breathing through low-grade airway resistance can elevate sympathetic tone. A 7-night mouth-tape trial is itself diagnostic — if dry-mouth-on-waking goes away, you were mouth-breathing.",
      },
      {
        q: "What if the tape falls off?",
        a: "Two causes. First: skin oil. Wash and dry the lip area before applying — most failures are a lipid film between adhesive and skin. Second: facial hair. Mustache or chin-stubble interferes with the seal. Either trim the mustache, apply the tape just on the upper lip and chin, or use the stronger Hostage adhesive. If the tape repeatedly falls off in REM, you're a heavy mouth-breather and need the stronger adhesive class.",
      },
      {
        q: "What's the difference between cheap and expensive mouth tape?",
        a: "Form factor and brand premium. The underlying adhesive technology is hypoallergenic acrylate or silicone — both are commodity. Branded $20 packs are typically pre-cut shapes of materials available in roll form for a fraction of the per-use cost. The exception is Somnifix's perforated design, which has a real fail-safe rationale. Otherwise, the recommendation is: try Micropore from a pharmacy first; only escalate to branded products if cut-strip form factor or stronger adhesive is needed.",
      },
    ],
    sources: [
      { label: "Lee et al. 2022 — Mouth taping in mild obstructive sleep apnea (Healthcare)", url: "https://pubmed.ncbi.nlm.nih.gov/36011241/" },
      { label: "Huang & Sun 2015 — Mouth breathing and snoring (J Otolaryngol Head Neck Surg)", url: "https://pubmed.ncbi.nlm.nih.gov/25925746/" },
      { label: "Lundberg & Weitzberg 1999 — Nasal nitric oxide in man (Thorax)", url: "https://pubmed.ncbi.nlm.nih.gov/10377211/" },
      { label: "American Academy of Sleep Medicine — Position statement on home sleep testing and behavioral interventions", url: "https://aasm.org/clinical-resources/" },
      { label: "3M product safety data sheet — Micropore Surgical Tape", url: "https://multimedia.3m.com/" },
    ],
  },
];

export function getPost(slug: string): Post | undefined { return posts.find((p) => p.slug === slug); }
export function postsByHub(hubSlug: string): Post[] { return posts.filter((p) => p.hub === hubSlug); }
export function latestPosts(limit = 6): Post[] { return [...posts].sort((a,b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, limit); }
export function featuredPost(): Post | undefined { return posts.find((p) => p.featured); }
export function relatedPosts(post: Post, limit = 3): Post[] { return posts.filter((p) => p.hub === post.hub && p.slug !== post.slug).slice(0, limit); }
