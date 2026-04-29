# Circadianstack — Content Upload Runbook

**Audience:** anyone adding a new pillar / comparison / cluster / listicle to circadianstack without touching React, schema, or routing.

**Premise:** the data layer is the source of truth. Edit a TypeScript object, commit, push. Vercel rebuilds, the page goes live, sitemap updates, internal links wire up.

---

## The file you'll edit

**`lib/content/posts.ts`** — every post on circadianstack lives here as a `Post` object.

The `[slug]` route (`app/[locale]/[slug]/page.tsx`) reads from this file at build time. No MDX compilation. No CMS. No database migration. Append an object → push → Vercel deploys → page is live.

---

## Adding a new post

### 1. Open `lib/content/posts.ts`

### 2. Append a new entry to the `posts` array (before the closing `];`)

Copy this template, fill in every field, paste before `];`:

```ts
{
  slug: "new-post-slug",                         // kebab-case, becomes URL
  title: "Full SEO Title — Lab-Notebook Voice",
  h1: "On-page H1 (often shorter than title)",
  description: "150–160 char description with primary keyword.",
  hub: "interventions-and-tools",                // see hub list below
  postType: "pillar",                             // pillar | comparison | cluster | listicle
  publishedAt: "2026-MM-DD",
  updatedAt: "2026-MM-DD",
  readingTime: 10,                                // estimate
  status: "published",                            // draft | stub | published
  protocolCard: {                                 // OPTIONAL — pillar posts
    input: "What the protocol acts on",
    dose: "Specific number-bearing dose",
    expectedOutput: "What changes, by how much, when",
    evidence: "Author YYYY citation list (short)",
    failureModes: "What ruins the effect / who shouldn't",
  },
  ourPick: {                                      // OPTIONAL — comparison posts
    name: "Product name",
    tier: "Category tag",
    reason: "Why this is the pick, 80–150 words.",
  },
  products: [                                     // OPTIONAL — comparison posts
    { rank: 1, name: "Product 1", tier: "Tier", summary: "150-word summary." },
    { rank: 2, name: "Product 2", tier: "Tier", summary: "150-word summary." },
  ],
  faq: [                                          // 5–7 questions
    { q: "Question 1?", a: "Answer 1, 75–150 words, cited where possible." },
    { q: "Question 2?", a: "Answer 2." },
  ],
  sources: [                                      // 5+ peer-reviewed sources
    { label: "Author YYYY — Title (Journal)", url: "https://pubmed.ncbi.nlm.nih.gov/PMID/" },
    { label: "AASM ICSD-3", url: "https://aasm.org/clinical-resources/..." },
  ],
  featured: false,
},
```

### 3. Verify

```bash
pnpm typecheck       # must pass
pnpm audit:claims    # must pass — no forbidden-claim words
```

### 4. Commit + push

```bash
git add lib/content/posts.ts
git commit -m "content(posts): add {slug}"
git push
```

Vercel auto-deploys. Page goes live in ~2 minutes across all 10 locales (or 12 once `sv` and `ro` dictionaries are added).

---

## Hub slugs

Pick one when filling `hub:`:

| Slug | Topic |
|---|---|
| `light-and-zeitgebers` | Morning sun, lux dose, blue / red / dawn light |
| `sleep-architecture` | REM/NREM, sleep cycles, SOL, sleep efficiency |
| `chronotype` | Morning lark / night owl / DSPS / shift work |
| `interventions-and-tools` | Light therapy lamps, sunrise alarms, blue blockers, melatonin, magnesium, mouth tape, weighted blankets |
| `edge-cases` | DSPS, ASPS, non-24, insomnia, SAD, shift work disorder |

---

## Post types and templates

| `postType` | When to use | Required fields |
|---|---|---|
| `pillar` | Deep-dive on a single topic; ranks for a head term | `protocolCard` (recommended), `faq`, `sources` |
| `comparison` | "Best X" / "X vs Y" — ranks products | `ourPick`, `products`, `faq`, `sources` |
| `cluster` | Specific question post supporting a pillar | `faq`, `sources` |
| `listicle` | Numbered ranking ("12 zeitgebers", etc) | `items`, `sources` |

The `app/[locale]/[slug]/page.tsx` route auto-renders the right template based on `postType`.

---

## Lab-notebook voice rules (per CLAUDE.md + brand book)

The voice is the moat. If the writing drifts, the moat closes.

### Required

- **Every sentence carries a number or a named researcher.** "Khalsa et al. 2003 mapped a phase response curve" beats "studies show light shifts the clock."
- **Primary-source citations only.** PubMed, Lancet, NEJM, AASM, FDA, Cochrane. Never cite Huberman / Attia / Sleep Foundation as evidence — cite the underlying study.
- **Specific over generic.** "10,000 lux for 30 minutes within 60 min of wake" beats "morning light."
- **Failure modes, always.** What ruins the effect. Who shouldn't do it. What the trial didn't measure.
- **Refresh `updatedAt`** when you edit an existing entry.

### Forbidden

- **Huberman-style hype.** No "powerful," "game-changing," "optimize," "biohack."
- **Podcast quotes as evidence.** Cite the underlying paper.
- **Dosing prescriptions without a citation.** Every dose is sourced.
- **Melatonin recommendations above 0.5 mg as a default.** Higher doses are sleep-aid, not chronotherapy.
- **Words flagged by `pnpm audit:claims`** — `treats`, `cures`, `heals`, `prevents disease`, `prevents cancer` (English + 11 EU language equivalents). Add an `// audit-claims:allow — explanation` comment if a word is genuinely idiomatic, not a medical claim.

---

## Citation density requirement

**Pillar posts: ≥ 5 peer-reviewed sources.** Comparison posts: ≥ 4. Cluster posts: ≥ 3. Listicles: ≥ 3.

Sources go in the `sources` array as `{label, url}` objects. PubMed PMID URLs preferred. FDA, EMA, AASM, USP guidelines accepted. Wikipedia is not a source.

---

## Examples in the repo

The 4 posts shipped in `feat/seo-readiness-2026-04` are the canonical templates:

- **Pillar with ProtocolCard:** `magnesium-glycinate-sleep-protocol`
- **Pillar with diagnostic framing:** `sleep-onset-latency-explained`
- **Pillar (clinical):** `delayed-sleep-phase-syndrome-protocol`
- **Comparison:** `best-mouth-tape-2026`

Read those entries before writing your first post. They establish the voice, the citation density, and the structural pattern.

---

## Slug conventions

- kebab-case always
- Match the highest-volume target keyword where reasonable
- For comparisons: `best-{thing}-{year}` (annual refresh) or `{x}-vs-{y}`
- For protocols: `{topic}-protocol` (e.g. `morning-sunlight-protocol`, `jet-lag-protocol-east-vs-west`)
- For explainers: `{topic}-explained` (e.g. `sleep-onset-latency-explained`)
- Never include date stamps in slugs (use `updatedAt` for freshness)

---

## What you don't have to do

- Write JSON-LD schema → emitted automatically based on `postType`
- Update the sitemap → regenerated from `posts.ts` on build
- Add the post to hub indexes → `postsByHub()` returns it once the `hub` field matches
- Update `relatedPosts()` → derived from same hub at build time
- Translate the post to 10 locales → handled by `posts-i18n.ts` separately when localisation is prioritised; not blocking publication

---

## Translation roadmap (next quarter)

Translations live in `lib/content/posts-i18n.ts` and `i18n/dictionaries/{locale}.json`. Currently the post body is EN-only and the locale-prefixed routes (`/de/...`, `/fr/...`) render the EN content. This is acceptable for the initial post launch — Google handles cross-language ranking better than it used to — but the next major content push should include native translations of the top 10 highest-traffic posts.

When that push happens: add a `i18n: { de: {...}, fr: {...} }` field to each `Post` object, and the `[slug]` route will pick up the locale-appropriate variant automatically.

---

## Don't forget

- **No telehealth vendor links.** Anywhere.
- **No before/after imagery.** Anywhere.
- **No weight-loss numbers in titles.** Network rule from CLAUDE.md.
- **Generic + brand on first mention** for any drug or compound.
- **Citations or cut.**
- **One original sentence per H2 section** (methodology requirement from network humanizer rules).
- **Refresh `updatedAt`** when you edit an existing entry.
- **Never link to other sites in the network publicly.** plasticfreelab, peptips, injectcompass, larderlab, pepvise, thatcleanchef stay strictly separate.

---

## Pointers

- Brand book: `content/brand-book.md`
- Network constitution: `~/Developer/active/health-network/CLAUDE.md`
- Topical map: `~/Developer/active/health-network/docs/topical-maps/circadianstack.md`
- Q2 keyword priority: `docs/research/circadianstack-keyword-priority-2026-q2.md`
- Launch blockers: `docs/launch-blockers.md`
- Humanizer rules: `~/Library/Application Support/Claude/.../health-network-seo-prompts/_shared/humanizer-rules.md`
