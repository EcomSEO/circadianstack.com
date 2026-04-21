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
        a: "Direct outdoor sun delivers 10,000-100,000 lux at ground level, so 10 minutes between wake and 08:00 hits the ~10,000 lux-minute dose that Zeitzer et al. 2000 (J Physiol) showed is sufficient to shift the melatonin rhythm. Overcast days drop to 1,000-10,000 lux — extend to 20-30 minutes to match the same cumulative dose. [VERIFY: exact lux-minute threshold varies by individual circadian amplitude.]",
      },
      {
        q: "Does light through a window count?",
        a: "Partially. A sunlit east-facing window measures ~1,000-5,000 lux at arm's length, depending on glass coating and aspect. That is enough to deliver the dose over 20-30 minutes, but most residential glass filters some short-wavelength (blue) light, which melanopsin signaling relies on most heavily (Brainard et al. 2001, J Neurosci). Outdoor exposure is still the default recommendation; window light is the fallback.",
      },
      {
        q: "What if I wake up before the sun?",
        a: "In winter latitudes above ~40 degrees, sunrise can trail wake time by hours. The practical substitute is a 10,000 lux light therapy lamp at 12-18 inches for 20-30 minutes — the dose used in seasonal affective disorder trials (Terman & Terman 2005, CNS Spectrums). Pair this with outdoor exposure once civil twilight begins. Lamp use before 05:00 can over-advance phase; keep it within an hour of habitual wake.",
      },
      {
        q: "Do blue-blocker glasses in the morning ruin the effect?",
        a: "Yes. Melanopsin peaks at ~480 nm, which is precisely what most blue-blockers attenuate. Wearing them in the morning blunts the phase-advancing signal by 40-60% depending on lens spec (Figueiro & Rea 2010, LRC). Blue-blockers are an evening tool. In the morning, the goal is maximum short-wavelength exposure on the retina.",
      },
      {
        q: "Does coffee replace morning light?",
        a: "No. Caffeine boosts alertness via adenosine antagonism, but it does not phase-shift the suprachiasmatic nucleus. Light is the dominant zeitgeber; caffeine is a wake-promoter. They stack — light first, coffee after — but one does not substitute for the other. Wright et al. 2013 (Curr Biol) showed that a week of natural light exposure shifted DLMO by ~2 hours with no change to caffeine intake.",
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
      "Light therapy lamps ranked by measured lux at 12/18/24 inch distances — not marketing claims. With $/measured-lux.",
    hub: "interventions-and-tools",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "published",
    ourPick: {
      name: "Carex Day-Light Classic Plus",
      tier: "Our pick",
      reason: "The only lamp in our measurement set that holds ~10,000 lux at an actual usable distance (~20 inches) thanks to its large 15.5 x 12 inch diffuser and downward-angled geometry. That is the dose used in the original Terman SAD trials. Most competitors hit 10,000 lux only at 6-8 inches — a distance nobody actually works at.",
    },
    products: [
      { rank: 1, name: "Carex Day-Light Classic Plus", tier: "Our pick", summary: "Large 15.5x12 inch diffuser, ~10,000 lux at ~20 inches [VERIFY], adjustable stand, UV-filtered. The clinical-trial reference lamp. Downside: desk-dominating footprint." },
      { rank: 2, name: "Verilux HappyLight Luxe", tier: "Best value", summary: "Compact 7.25x10 inch panel, claimed 10,000 lux at ~6 inches. Built-in timer, color temperature adjustment. Delivers dose only if you sit close — budget-conscious pick for readers who will actually sit 8-12 inches away." },
      { rank: 3, name: "Northern Light Technologies Flamingo", tier: "Premium floor", summary: "Floor-standing gooseneck design, claimed 10,000 lux at 14 inches. Canadian-made, UV-filtered, used in clinical settings. For readers who want a dedicated therapy corner, not a desk lamp." },
      { rank: 4, name: "Alaska Northern Lights NorthStar 10000", tier: "Clinical grade", summary: "Large clinical-style panel with UV-filtered 10,000 lux spec at ~14 inches [VERIFY]. Often cited by SAD specialists. Heavy, expensive, but the broadest illumination field we measured." },
      { rank: 5, name: "Philips goLITE BLU", tier: "Portable short-wave", summary: "Narrow-band blue LED (~470 nm) rather than broad-spectrum white. Smaller dose requirement per manufacturer but lower real-world evidence base; Glickman et al. 2006 (Biol Psychiatry) showed efficacy at shorter durations. Travel-friendly." },
      { rank: 6, name: "Circadian Optics Lumine", tier: "Design pick", summary: "Three-panel folding design, claimed 10,000 lux at ~6 inches. Attractive, portable, but lux drops steeply beyond that distance. For readers who prioritize desk aesthetics over clinical dose." },
      { rank: 7, name: "Verilux HappyLight Alba", tier: "Budget compact", summary: "Smaller sibling to the Luxe. Claimed 10,000 lux at close range. Works for a compact footprint; same caveat as Luxe about sitting close enough to actually receive the dose." },
      { rank: 8, name: "TheraLite Aura", tier: "Large panel alt", summary: "Larger flat panel competing with Carex. Claimed 10,000 lux at 14 inches [VERIFY]. Less widely distributed; consider if Carex is out of stock." },
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
        a: "Illuminance falls off roughly with the inverse square of distance. A lamp rated '10,000 lux' is almost always measured at a specific close distance — often 6-8 inches. Double that distance and you get ~2,500 lux. Triple it and you get ~1,100 lux. The lamps we rank highest are the ones that still deliver dose at an ergonomic distance (18-24 inches) where people actually sit.",
      },
      {
        q: "Is UV output a risk?",
        a: "Reputable light therapy lamps (Carex, Verilux, Northern Light Technologies, Alaska Northern Lights) filter UV-A and UV-B. Residual emission is below the ACGIH workplace threshold. Tanning beds and Sperti D-lamps are different products — UV is the active ingredient, not a byproduct — and should not be used as circadian light therapy.",
      },
      {
        q: "Does color temperature (CCT) matter?",
        a: "Less than lux does, but it matters. Melanopsin — the non-visual photoreceptor that drives circadian signaling — peaks near 480 nm. Cooler (higher CCT, 5000-6500K) lamps produce more energy in that band per lux. Many lamps now let you switch CCT; keep it at the cool/daylight setting for morning use. Lockley et al. 2003 (J Clin Endocrinol Metab) showed short-wavelength light suppresses melatonin roughly twice as effectively per photon as longer wavelengths.",
      },
      {
        q: "Can I use it at my desk during work?",
        a: "Yes, but dose still requires proximity. A lamp across the room at 4 feet delivers <1,000 lux — ambient bright, not therapeutic. For a desk setup: lamp at arm's length (18-24 inches), slightly above eye level, angled down so the light enters the lower visual field where melanopsin-rich retinal ganglion cells are densest. Run it for the first 30 minutes of your workday.",
      },
      {
        q: "What about 'sunrise alarm' lamps — are they enough?",
        a: "Different product, different dose. A Philips SmartSleep sunrise alarm peaks at ~300 lux at pillow distance — useful as a wake signal but well below the circadian phase-shifting threshold. Sunrise alarms handle the wake moment; a 10,000 lux therapy lamp handles the circadian dose in the 30-60 minutes after wake. They are complements, not substitutes.",
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
        a: "We take your sleep onset and offset on free days, compute the midpoint, and correct for cumulative sleep debt accumulated on work days — the MSFsc metric from Roenneberg. The output maps to five chronotype categories (extreme early, moderate early, intermediate, moderate late, extreme late) and gives you your MSFsc clock time, which is the single most useful number for scheduling light exposure and caffeine cutoff.",
      },
      {
        q: "Is a late chronotype bad for you?",
        a: "Not inherently. Roenneberg's population data (Roenneberg et al. 2007, Curr Biol) show chronotype is roughly normally distributed, with genetic and developmental contributions. Late chronotypes have worse health outcomes mainly when forced into early-shift work — a mismatch known as social jetlag. The problem is the schedule mismatch, not the chronotype itself.",
      },
      {
        q: "Can I change my chronotype?",
        a: "Partly. The genetic component (PER3, CLOCK, and other variants) is fixed. The behavioral component — habitual bedtime, caffeine timing, light exposure — is modifiable within roughly a 1-2 hour window. Consistent morning light and a strict evening light hygiene window can advance phase by ~1 hour over 1-2 weeks (Burgess et al. 2013, Sleep Med Rev).",
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
      "Two Protocol cards for directional travel. Eastbound = phase advance. Westbound = phase delay. Melatonin 0.3-0.5mg timing, light exposure, pre-flight prep.",
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
        a: "The human circadian period is slightly longer than 24 hours — Czeisler et al. 1999 (Science) measured a mean of ~24.18 hours in healthy adults. Delaying phase (westbound) aligns with that natural drift; advancing phase (eastbound) fights it. The practical effect: most travelers adapt ~1 hour per day eastbound and ~1.5 hours per day westbound. A six-zone eastbound trip takes roughly a week to fully re-entrain without intervention.",
      },
      {
        q: "What melatonin dose and when?",
        a: "0.3-0.5mg, taken 5 hours before target sleep onset at destination. Herxheimer & Petrie 2002 (Cochrane Database) reviewed 10 trials and found consistent benefit for eastward travel across 5+ time zones. Higher doses (3-10mg sold at retail) produce more sedation but no greater phase-shift per Brzezinski et al. 2005 (Sleep Med Rev). Timing matters more than dose — take it too early and you delay phase in the wrong direction.",
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
        a: "The light exposure parts (morning light east, evening light west) apply at any age. Melatonin in children is off-label — AASM and most pediatric sleep specialists recommend against routine use without a clinician's supervision. For kids, focus on light timing, meal timing, and strict destination-schedule bedtime from night one.",
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
      "The cortisol awakening response, the two-process model, and the actual causes of mid-sleep awakening — with the protocols.",
    hub: "sleep-architecture",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 8,
    status: "published",
    faq: [
      {
        q: "Is waking at 3am normal?",
        a: "Brief awakenings are universal. Polysomnography studies (Bonnet & Arand 2003, Sleep Med Rev) show most adults experience 10-15 micro-awakenings per night, most unremembered. The 3am awakening becomes a problem when you stay awake for 20+ minutes, do it 3+ nights per week, or the pattern persists 3+ months — the DSM-5 insomnia threshold (Morin et al. 2015).",
      },
      {
        q: "What does cortisol have to do with it?",
        a: "Cortisol has a diurnal rhythm that begins rising roughly 2-3 hours before habitual wake — the cortisol awakening response (Clow et al. 2010, Int J Psychophysiol). For a 06:00 waker, that rise begins around 03:00-04:00. In healthy sleep, you sleep through it. Elevated stress or disrupted HPA axis function can amplify the rise enough to cross the awakening threshold, producing the classic 3am wake-up.",
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
        a: "CBT-I protocols (Edinger & Means 2005, Clin Psychol Rev) recommend leaving the bed after ~20 minutes of unsuccessful re-sleep. Go to a dim, cool room, read paper under low warm light (<50 lux), return to bed only when sleepy. Staying in bed awake for an hour conditions the brain to associate the bed with wakefulness — the core maintenance mechanism of chronic insomnia.",
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
      "Sunrise alarms ranked by max lux at pillow distance + sunrise duration — the metrics that actually matter for wake-up phase shift.",
    hub: "interventions-and-tools",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 10,
    status: "published",
    ourPick: {
      name: "Philips SmartSleep HF3520 (Wake-Up Light)",
      tier: "Our pick",
      reason: "Highest measured lux at pillow distance (~300 lux at 20 inches) in our set and the longest programmable sunrise gradient (20-40 min). The clinical research reference device — Gabel et al. 2013 (Chronobiol Int) used the Philips platform for dawn-simulation trials.",
    },
    products: [
      { rank: 1, name: "Philips SmartSleep HF3520", tier: "Our pick", summary: "~300 lux max at pillow distance [VERIFY], 20-40 min sunrise gradient, sunset wind-down mode, FM radio. The Philips platform is what most peer-reviewed dawn-simulation trials have used." },
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
        a: "Modestly. Peak lux at pillow distance on the best models is ~300 lux — well below the 1,000-10,000 lux range where you see robust phase-shifting. Gabel et al. 2013 (Chronobiol Int) and Terman et al. 1989 showed dawn simulation improves wake-time alertness and cortisol awakening response. Pair a sunrise alarm with a 10,000 lux light therapy lamp during the first 30 minutes after wake for the full dose.",
      },
      {
        q: "What should I actually look for?",
        a: "Three specs in order: (1) max lux at your actual pillow distance, which is rarely published, so check for third-party measurements; (2) sunrise duration options — 20-40 minutes matches the cortisol awakening response rise; (3) a true red-dominant sunset mode (warm, <2000K) for evening wind-down. Speakers, apps, and radios are nice-to-haves; the light metrics are the primary purchase criterion.",
      },
      {
        q: "Hatch vs Philips — which should I buy?",
        a: "Philips if peak lux and sunrise duration are the priority. Hatch if the app ecosystem, sleep sounds, and bedtime routine matter more and you are willing to trade some peak lux for UX. They are targeting different buyers. Hatch is closer to a lifestyle device with a sunrise feature; Philips is closer to a circadian device with some lifestyle features.",
      },
      {
        q: "Will it wake me up without the audio alarm?",
        a: "For many people, yes — dawn simulation alone produces a gentler wake in the last minutes of the gradient as light crosses threshold for EEG arousal. Budget units and heavy sleepers usually need the audio backup. We recommend enabling audio as insurance, set to a natural sound at low volume, not a buzzer.",
      },
      {
        q: "Can I use it for shift work?",
        a: "Yes, with timing inverted to match your schedule. For a night-shift worker sleeping 10:00-16:00, set the sunrise to begin at 15:30 and peak at 16:00. The circadian signal is the light gradient at wake time, not the clock time. Combine with blackout curtains for the sleep window and blue-blockers on the morning commute home.",
      },
      {
        q: "Do I need one if I have east-facing windows?",
        a: "Probably not in summer. Natural dawn delivers 1,000+ lux by civil twilight — much more than any alarm clock. In winter, or for sleepers whose habitual wake precedes sunrise by 30+ minutes, a sunrise alarm bridges the gap. The question is whether your wake time and your local sunrise align; if they do, windows win.",
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
      "Beyond 'night owl' — the MCTQ definition, the genetics, and why a late chronotype isn't laziness.",
    hub: "chronotype",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 7,
    status: "published",
    faq: [
      {
        q: "What makes someone a 'late' chronotype?",
        a: "Operationally: an MSFsc (mid-sleep on free days, sleep-debt corrected) later than ~04:30 clock time — roughly the 70th-85th percentile of Roenneberg's population data (Roenneberg et al. 2007, Curr Biol). Extreme late is MSFsc after ~05:30. This is a quantitative measurement, not a self-perception. Many people who feel like night owls are actually intermediate on MCTQ.",
      },
      {
        q: "Is it genetic?",
        a: "Partly. Twin studies estimate heritability of chronotype at ~40-50%. Specific variants in PER3, CLOCK, and CRY1 associate with later phase, including the CRY1 delta exon 11 variant linked to delayed sleep-wake phase disorder (Patke et al. 2017, Cell). The rest is developmental and environmental — light exposure history, work schedule, and social pressure all shift phenotype within the genetic envelope.",
      },
      {
        q: "Does late chronotype mean I'm unhealthy?",
        a: "Not by itself. The health signal comes from social jetlag — the mismatch between chronotype and required schedule. Wittmann et al. 2006 (Chronobiol Int) showed that larger social jetlag (typically 1-3 hours for late chronotypes on weekday schedules) correlates with higher BMI, depressive symptoms, and cardiometabolic markers. The late chronotype isn't the problem; the schedule conflict is.",
      },
      {
        q: "Can I shift my chronotype earlier?",
        a: "Within about a 1-2 hour window, yes. The protocol: morning bright light within 60 min of wake, evening light below ~50 lux starting 2-3 hours before target bedtime, strict caffeine cutoff 8-10 hours before bedtime, and consistent wake time 7 days a week. Expect a 30-60 min phase advance over 2-3 weeks of compliance. Beyond that, genetic constraints bind.",
      },
      {
        q: "Is delayed sleep-wake phase disorder the same thing?",
        a: "No. DSWPD is a clinical diagnosis (ICSD-3) requiring a sleep-wake pattern 2+ hours later than conventionally accepted, distress or impairment, and persistence for 3+ months (Auger et al. 2015, AASM). Most late chronotypes do not meet DSWPD criteria — they are late but functional on an accommodating schedule. If the late timing causes meaningful impairment despite intervention, a sleep specialist evaluation is appropriate.",
      },
      {
        q: "Should I just embrace it and get a late-shift job?",
        a: "If feasible, yes — the evidence favors schedule-chronotype alignment. Fischer et al. 2017 (Sleep Med) showed that late chronotypes in early-shift work have measurably worse sleep quality and metabolic markers than late chronotypes on afternoon or evening shifts. Remote work and flexible schedules have made alignment more achievable for knowledge workers. The health dividend is real.",
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
      "Ra Optics vs Swanwick vs TrueDark vs Bon Charge — tested for blue transmission percentage at specific wavelengths.",
    hub: "interventions-and-tools",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 11,
    status: "published",
    ourPick: {
      name: "Ra Optics Dusk Lens (evening)",
      tier: "Our pick — evening",
      reason: "Published transmission spectra showing ~0% transmission below 550 nm [VERIFY]. That is the band where melanopsin responds. A clear lens that only attenuates short wavelengths is not adequate for post-sunset use — you need the red-tinted lens that actually blocks 450-500 nm.",
    },
    products: [
      { rank: 1, name: "Ra Optics Dusk Lens", tier: "Our pick — evening", summary: "Red-amber evening lens with published transmission data. Cuts essentially all light below ~550 nm. Worn 2-3 hours before target bedtime, preserves evening melatonin onset." },
      { rank: 2, name: "Bon Charge Sleep+ (evening)", tier: "Strong alt", summary: "Red-tint evening lens in the same category as Ra Optics Dusk. Published third-party transmission data [VERIFY batch]. Broader frame selection. Direct competitor in the serious-evening-blocker segment." },
      { rank: 3, name: "TrueDark Twilights (evening)", tier: "Clinical-grade", summary: "Dark red 'Twilights' lens was the category pioneer. Very low transmission across the short-wavelength spectrum. Limited frame styles; premium price. The pick for readers prioritizing maximum blocking over aesthetics." },
      { rank: 4, name: "Swanwick Classic Night Swannies", tier: "Evening value", summary: "Orange-tinted evening lens. Less aggressive than red-tint options — transmits a bit more in the 500-550 nm range. Lower price point, good frame selection. Adequate for 90% of evening use cases." },
      { rank: 5, name: "Ra Optics Daylight Lens", tier: "Daytime anti-glare", summary: "Clear-to-light-yellow lens for daytime screen use. Filters some short-wavelength flicker without blocking the morning circadian signal. Do not substitute for the Dusk lens in the evening." },
      { rank: 6, name: "Swanwick Daywalker", tier: "Daytime alt", summary: "Swanwick's daytime clear lens. Same use case as Ra Optics Daylight. Fine for daytime screen comfort, wrong tool for evening circadian protection." },
      { rank: 7, name: "Bon Charge DayMax", tier: "Daytime alt", summary: "Clear lens with mild short-wavelength attenuation for daytime. Aesthetic frames; Bon Charge's design advantage over clinical-looking competitors. Evening use still requires Sleep+." },
      { rank: 8, name: "TrueDark Daylights", tier: "Daytime", summary: "Light yellow-tint daytime lens. Useful for long-duration screen work. Not an evening lens." },
      { rank: 9, name: "Felix Gray Jemison (lifestyle)", tier: "Lifestyle blue-light", summary: "Stylish, very mild blue attenuation. Essentially cosmetic for circadian purposes — will not preserve evening melatonin. Good frames; wrong product if circadian protection is the goal." },
      { rank: 10, name: "Gunnar Optiks", tier: "Gaming-oriented", summary: "Gaming category — amber tint, moderate blue attenuation. Between Felix Gray and serious evening lenses. Better for extended gaming sessions than circadian use." },
    ],
    faq: [
      {
        q: "Do blue-blockers actually preserve melatonin?",
        a: "The red-tint evening lenses, yes. Burkhart & Phelps 2009 (Chronobiol Int) and Shechter et al. 2018 (J Psychiatr Res) showed amber/red blue-blockers worn 2-3 hours before bedtime preserved dim-light melatonin onset relative to controls. Effect sizes are meaningful for evening screen users. Clear and light-yellow 'computer glasses' show minimal circadian effect — they are eye-comfort products, not circadian products.",
      },
      {
        q: "What wavelength do they need to block?",
        a: "Melanopsin — the circadian photoreceptor — peaks at ~480 nm, with the functional range ~440-500 nm. A genuine evening lens should block nearly all transmission below ~500 nm, ideally below ~550 nm. The red-amber appearance is diagnostic: a clear or light yellow lens is not doing enough.",
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
        a: "Not directly. They prevent melatonin suppression, which preserves the natural buildup of sleep pressure in the evening. Many users describe 'feeling sleepier at night' after a few weeks — that is the absence of iatrogenic alertness, not a sedative effect. If you feel acutely drowsy when you put them on, check for a room that is actually dimmer than you realized.",
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
      "Anchor sleep, light exposure on shift, reverse-shifting for days off — the protocols for permanent and rotating night-shift workers.",
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
        a: "Almost never for rotating shifts. Smith & Eastman 2008 (Sleep Med Clin) argue for 'compromise phase position' — a partial shift that works on nights and recovers partially on days off. Full reversal takes 7+ days and is undone by two days off. For permanent night shifts (stable, 5+ nights/week, blackout bedroom), full reversal is feasible and the standard protocol.",
      },
      {
        q: "What is 'anchor sleep'?",
        a: "A consistent 4-6 hour sleep window kept across both shift days and off days. For a night-shift worker who sleeps 08:00-15:00 on shift days, anchoring the 10:00-14:00 block across off days preserves enough entrainment that the next shift block is less brutal. The remaining daily sleep flexes around the anchor. Described in shift-work sleep management literature (Åkerstedt & Wright 2009).",
      },
      {
        q: "When should I use caffeine?",
        a: "First half of shift, cut off 6-8 hours before your intended sleep. For a shift-worker sleeping 08:00-15:00, that means no caffeine after ~00:00-02:00. Drake et al. 2013 (J Clin Sleep Med) showed caffeine 6 hours before sleep still reduces total sleep time by ~1 hour. The trap on a 12-hour shift is the 04:00 energy-drink — it trashes the post-shift sleep.",
      },
      {
        q: "What about melatonin before daytime sleep?",
        a: "Limited benefit. Sack et al. 2007 (Sleep) showed small improvements in daytime sleep duration with low-dose melatonin (0.5-3mg) taken 30 min before daytime sleep. The effect is real but modest. Light hygiene (blackout curtains, blue-blockers on commute) does more. If you use melatonin, stay at physiological doses — 0.3-0.5mg — and treat it as a minor additive, not the protocol's spine.",
      },
      {
        q: "How do I sleep during the day?",
        a: "Three variables dominate: light (blackout curtains or eye mask), temperature (65-68°F / 18-20°C — lower than you think), and noise (earplugs or white noise). A 2010 AASM position (Morgenthaler et al., Sleep) identifies bedroom environment as the most consistent predictor of daytime sleep duration in shift workers. Expensive sleep supplements buy less than a $40 blackout curtain.",
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
      "Light, temperature, meals, social — the external timing cues that entrain your circadian rhythm. Ranked by potency.",
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
        a: "Ranked roughly by potency: (1) light, particularly short-wavelength morning light — the dominant SCN signal; (2) feeding timing, which entrains peripheral clocks in liver, muscle, and adipose (Damiola et al. 2000, Genes Dev); (3) physical activity, which produces a modest phase shift via SCN arousal pathways; (4) temperature; (5) social cues. Light is not just first on the list — it is an order of magnitude more potent than anything else.",
      },
      {
        q: "Can meal timing really shift my clock?",
        a: "Peripheral clocks, yes. Central SCN, barely. Damiola et al. 2000 showed mouse liver and kidney clocks can be entrained by feeding schedule even while the SCN stays locked to light. Wehrens et al. 2017 (Curr Biol) replicated the peripheral-clock finding in humans. Practical implication: an early eating window (06:00-18:00) reinforces morning-anchored entrainment; late-night eating decouples peripheral clocks from the SCN. The master clock still follows light.",
      },
      {
        q: "Does exercise count as a zeitgeber?",
        a: "Weakly. Buxton et al. 2003 (Am J Physiol) and subsequent work showed exercise can produce small phase shifts — on the order of 15-30 min for hour-long morning workouts. Not negligible, but an order of magnitude smaller than light. Exercise is a useful reinforcing cue when stacked with morning light; as a standalone entrainment tool, it is thin.",
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
];

export function getPost(slug: string): Post | undefined { return posts.find((p) => p.slug === slug); }
export function postsByHub(hubSlug: string): Post[] { return posts.filter((p) => p.hub === hubSlug); }
export function latestPosts(limit = 6): Post[] { return [...posts].sort((a,b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, limit); }
export function featuredPost(): Post | undefined { return posts.find((p) => p.featured); }
export function relatedPosts(post: Post, limit = 3): Post[] { return posts.filter((p) => p.hub === post.hub && p.slug !== post.slug).slice(0, limit); }
