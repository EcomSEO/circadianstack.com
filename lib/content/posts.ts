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
    status: "stub",
    featured: true,
    protocolCard: {
      input: "Morning light exposure",
      dose: "1,000-10,000 lux for 10-30 minutes, within 60 min of wake",
      expectedOutput: "~1 hour/week phase advance; improved morning alertness within 3-5 days",
      evidence: "Khalsa 2003, Duffy 2015, Zeitzer 2000",
      failureModes: "Exposure past 10am cuts effect in half; blue-filtering glasses block; <1,000 lux indoors rarely phase-shifts",
    },
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
    status: "stub",
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
    status: "stub",
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
    status: "stub",
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
    status: "stub",
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
    status: "stub",
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
    status: "stub",
  },
  {
    slug: "best-blue-blocker-glasses",
    title: "Best Blue-Blocker Glasses — Who We Trust",
    h1: "Best blue-blocker glasses",
    description:
      "Ra Optics vs Swanwick vs TrueDark vs BLUblox — tested for blue transmission percentage at specific wavelengths.",
    hub: "interventions-and-tools",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 11,
    status: "stub",
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
    status: "stub",
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
    status: "stub",
  },
];

export function getPost(slug: string): Post | undefined { return posts.find((p) => p.slug === slug); }
export function postsByHub(hubSlug: string): Post[] { return posts.filter((p) => p.hub === hubSlug); }
export function latestPosts(limit = 6): Post[] { return [...posts].sort((a,b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, limit); }
export function featuredPost(): Post | undefined { return posts.find((p) => p.featured); }
export function relatedPosts(post: Post, limit = 3): Post[] { return posts.filter((p) => p.hub === post.hub && p.slug !== post.slug).slice(0, limit); }
