# CircadianStack — Site Build Spec

Pairs with `content/circadianstack/brand-book.md`, `docs/topical-maps/circadianstack.md`, `docs/circadianstack-sample-briefs.md`, `docs/circadianstack-affiliate-partners.md`, `docs/circadianstack-competitive-analysis.md`, `docs/circadianstack-research.md`, `CLAUDE.md`.

**Defining features:**
- **Dark-mode-first design** (readable at 6am and 11pm)
- **`<ProtocolCard>` component** — signature artifact, screenshot-shareable
- **Chronotype Quiz** (interactive, client-side scored, email-gated PDF output)
- **Dose-accurate testing** for commercial posts (lux at distance, max lumens)

---

## 1. Information architecture

### URL structure

```
https://circadianstack.com/
https://circadianstack.com/{slug}                    # post at root
https://circadianstack.com/guides/{hub-slug}          # hub
https://circadianstack.com/chronotype-quiz           # primary lead magnet
https://circadianstack.com/about, /editorial-standards, /methodology
https://circadianstack.com/privacy, /terms, /affiliate-disclosure, /contact, /newsletter
https://circadianstack.com/sitemap.xml, /robots.txt, /llms.txt, /feed.xml
```

Hub slugs:
- `guides/light-and-zeitgebers`
- `guides/sleep-architecture`
- `guides/chronotype`
- `guides/interventions-and-tools`
- `guides/edge-cases`

### Canonical, redirect, breadcrumb rules

Same as other sites. Self-canonical, www → apex 301, http → https 301, no trailing slash.

### Global navigation

```
[Logo]  Guides ▾  Tools ▾  About  Newsletter      [Take the Chronotype Quiz]   [🌓 dark/light toggle]

Guides dropdown:
  Light & Zeitgebers, Sleep Architecture, Chronotype, Interventions & Tools, Edge Cases

Tools dropdown:
  Chronotype Quiz, Jet Lag Calculator, Lux Dose Calculator
```

### Footer (4 columns)

Guides (5) | Tools (3) | About (About, Editorial, Methodology, Contact, Newsletter) | Fine print (Privacy, Terms, Affiliate)

Bottom strip: `© 2026 CircadianStack · The science of when · Affiliate disclosure`

---

## 2. Page templates

### A — HomePage (dark-mode)
Hero ("The science of when") → Featured Protocol card (morning light) → 5 hub cards → Chronotype Quiz CTA (large, prominent) → Latest posts → Trust strip → Footer.

### B — HubPage
Hub hero → pillar card → protocol cards grid → everything-else grid → Chronotype Quiz CTA → footer.

### C — ProtocolTemplate (signature for how-to posts)
1. Breadcrumbs + H1
2. Review stamp
3. **Protocol card above the fold** (non-negotiable for how-to posts) — see §3 for spec
4. 60-word direct answer
5. H2s covering: mechanism, dose, timing, wavelengths/conditions, failure modes, when to deviate
6. FAQ (schema-marked)
7. Sources
8. Related protocols
9. Cross-link to Chronotype Quiz
10. Footer

### D — ComparisonTemplate (commercial buying guides)
Standard comparison template + dose-accurate methodology section + `<LuxTestedTable>` component showing measured vs claimed dose.

### E — ConceptPillarTemplate
For conceptual posts (what a zeitgeber is, sleep stages, cortisol awakening response). Long-form explainer with diagrams.

### F — EdgeCaseTemplate
For jet lag, shift work, perimenopause, etc. Protocol-dense. Multiple Protocol cards possible. Time-block schedule tables.

### G — QuizPage (Chronotype Quiz)
Interactive quiz → scoring → chronotype result → email capture for personalized PDF → FAQ → Methodology.

### H — ListiclePage
Standard listicle. Protocol cards for each item where applicable.

### I — TrustPageTemplate
Clean reading layout.

---

## 3. Component inventory

### Signature components
- **`<ProtocolCard>`** — the site's defining artifact. 5 sections: Input / Dose / Expected output / Evidence / Failure modes. Colorcoded header (amber accent rail). Screenshot-friendly at 1200×630. Exportable as PNG for sharing.
- **`<ChronotypeQuiz>`** — 19-question MCTQ-short quiz, client-side scoring, outputs chronotype classification + mid-sleep-on-free-days + personalized 7-day protocol. Integrates with Beehiiv for email delivery.
- **`<LuxTable>`** — sortable table of lux values (products, lighting conditions, times of day). Monospace numerics.
- **`<LuxTestedTable>`** — for light therapy lamp comparisons. Columns: lamp, claimed lux, measured at 12"/18"/24", $/measured-lux.
- **`<PhaseResponseCurve>`** — interactive diagram showing the PRC to light. Hover to see values. Used in morning light pillar.
- **`<JetLagCalculator>`** — inputs: origin UTC, destination UTC, departure date. Output: pre-flight + in-flight + post-flight schedule.
- **`<SleepStageHypnogram>`** — illustrative sleep architecture diagram.
- **`<DarkLightToggle>`** — persistent dark/light mode toggle in header. Default dark.

### Standard schema components
- Article, Breadcrumb, FAQ, ItemList, Review, HowTo, SoftwareApplication (for quiz + calculators), Organization, WebSite.

---

## 4. SEO technical spec

### Meta tag patterns

| Page | Title | Description |
|---|---|---|
| Home | `CircadianStack — The Science of When` | `Light exposure, sleep protocols, chronotype, and the tools that work — cited and dose-accurate. Take the Chronotype Quiz.` |
| Hub | `{Hub name} — CircadianStack` | Hub thesis trimmed |
| Protocol | `{H1} — A Protocol Card | CircadianStack` | Direct-answer + dose |
| Commercial | `{H1} (Dose-Accurate, Tested {year}) | CircadianStack` | "Measured lux, real testing, no marketing claims" |
| Quiz | `Chronotype Quiz — CircadianStack` | Free, 3 min, MCTQ-based, personalized 7-day protocol |

### Schema by template

| Template | Schema |
|---|---|
| Home | Organization + WebSite + SearchAction |
| Hub | CollectionPage + BreadcrumbList |
| Protocol | Article + HowTo + FAQPage + BreadcrumbList |
| Comparison | Article + ItemList + Review + FAQPage |
| Concept pillar | Article + FAQPage |
| Edge case | Article + HowTo + FAQPage |
| Quiz | Article + SoftwareApplication + FAQPage |

### Internal linking
- Every Protocol card links to its source evidence
- Every commercial post links to the underlying protocol post
- Every protocol post links to the Chronotype Quiz
- Every Edge Case post links to the relevant Light hub or Sleep Architecture post
- The Chronotype Quiz links to all 5 hubs in its output screen

### Core Web Vitals
- LCP < 2.0s
- INP < 200ms
- CLS < 0.05
- JS for the Chronotype Quiz < 80KB gzipped

### robots.txt / llms.txt
Standard pattern. AI crawlers explicitly allowed post-launch.

---

## 5. Protocol Card specification

The site's defining component. Must ship on every how-to post.

### Structure (5 sections, in this order)

1. **Input** — what you're doing (e.g., "Morning light exposure")
2. **Dose** — the measurable version (e.g., "1,000-10,000 lux for 10-30 minutes, within 60 min of wake")
3. **Expected output** — what changes and by how much (e.g., "~1 hour/week phase advance with consistent daily exposure; improved morning alertness within 3-5 days")
4. **Evidence** — 2-4 citations (Khalsa 2003, Duffy 2015, etc.) with DOIs where possible
5. **Failure modes** — what breaks the protocol (timing past 10am; blue-filter glasses; <1000 lux indoor exposure)

### Visual design
- Bordered card with amber accent rail on the left edge
- Card title = Protocol name (e.g., "Morning Light Exposure Protocol")
- Each section has a monospace label + paragraph/list content
- IBM Plex Mono for numerics within the card
- Exportable as PNG (1200×630, Twitter-card-ready)

### Copy button
Every card has a "Copy as Markdown" button that outputs the card content in markdown format (for sharing to Discord, Slack, email).

### Schema
Each Protocol card contributes to the post's HowTo schema — the Dose section maps to the HowToSupply / HowToTool, the Expected output maps to the HowToStep results, the Evidence maps to citations.

---

## 6. Chronotype Quiz specification

### Technical

- Client-side React component
- 19 questions from MCTQ-short (Roenneberg et al., validated instrument)
- One question per screen (paginated) OR all questions on one page with progress bar (A/B test)
- Client-side scoring — no server round-trip for scoring itself
- Results stored in localStorage for return visits
- Results displayed immediately (not email-gated)
- Email capture ONLY at the "Email me my personalized 7-day protocol PDF" step (optional)

### Output

1. **Chronotype classification:** extreme early / moderate early / intermediate / moderate late / extreme late
2. **Mid-sleep on free days (MSFsc)** — the MCTQ metric
3. **Personalized 7-day protocol PDF** (email-gated) — 3 Protocol cards tailored to the chronotype:
   - Light exposure timing (morning light window adjusted for chronotype)
   - Evening routine timing (caffeine cutoff, dim light initiation)
   - Sleep window recommendation

### PDF generation
- Triggered server-side (Vercel serverless function) upon email submission
- Delivered via Beehiiv welcome sequence
- PDF includes: chronotype result, MCTQ-based analysis (brief), 3 Protocol cards, cross-links to the 3 most-relevant posts

### Unit tests
- MCTQ scoring function has unit tests covering edge cases
- Each chronotype classification mapped to personalized protocol mapping is tested
- CI enforces test passing before merge

---

## 7. Trust pages — key content

### 7.1 About
Mission: the science of when. What we do (Protocol cards, cited research, dose-accurate testing). What we don't (Huberman-hype, supplement-pushing, commercial-bias). Team voice.

### 7.2 Editorial Standards
- Primary sources only (PubMed, clinicaltrials.gov, peer-reviewed journals)
- Protocol card on every how-to post (non-negotiable)
- Dose-accurate testing for commercial posts (specify: lux meter model, testing distances, methodology)
- No pseudo-science (adrenal fatigue, quantum stuff, grounding, etc.)
- Medical disclaimer on YMYL-adjacent posts (DSPD, melatonin, shift work disorder)
- Corrections policy
- AI tooling disclosure

### 7.3 Methodology
- How we test light therapy products (lux meter, distances, CCT measurements)
- How we evaluate sleep trackers (validation vs polysomnography where data exists)
- How we synthesize evidence for Protocol cards
- How we update content (quarterly review of pillars, annual for Protocol cards)
- How the Chronotype Quiz scoring works

### 7.4 Privacy / Terms / Affiliate / Contact
Standard templates with circadianstack brand + domain swap.

---

## 8. Homepage copy

### Hero
**H1:** The science of when.
**Subhead:** Protocol cards, cited research, and dose-accurate reviews — for morning light, sleep architecture, chronotype, and every other lever that resets a circadian clock.
**Primary CTA:** Take the Chronotype Quiz →
**Secondary CTA:** Browse the guides

### Featured Protocol card
Display the Morning Light Protocol card directly on the homepage. Demonstrate the format.

### Hub grid (5 cards)
Light & Zeitgebers, Sleep Architecture, Chronotype, Interventions & Tools, Edge Cases.

### Trust strip
- **Every protocol cited.** Primary sources. Named researchers.
- **Every product dose-tested.** Lux meters, not marketing claims.
- **Every quiz peer-reviewed.** MCTQ-based. Not Buzzfeed.

---

## 9. Lead magnet — Chronotype Quiz + personalized PDF

See §6 for technical spec.

### Welcome email sequence (3 emails, 7 days)

**Email 1 (instant):** Personalized 7-day protocol PDF attached + "how to use a Protocol card" primer.
**Email 2 (Day 3):** The protocol most aligned with the user's chronotype (e.g., for late chronotypes: morning light dose-up strategy). Link to the full Protocol post.
**Email 3 (Day 7):** Tools recommendation aligned with chronotype (e.g., late chronotype → light therapy lamp + sunrise alarm). Link to the buying guide.

Day 8+: weekly digest — one protocol per week, always a Protocol card.

---

## 10. Launch checklist

- [ ] Domain live, SSL, redirects
- [ ] All 8 trust pages live
- [ ] Home with featured Protocol card
- [ ] Chronotype Quiz functional with client-side scoring + email capture + PDF generation
- [ ] At least 10 posts with real content including Protocol cards
- [ ] Dose-accurate testing completed for at least 5 light therapy lamps + 5 sunrise alarms
- [ ] HowTo schema on every how-to post
- [ ] robots, sitemap, llms.txt
- [ ] Dark mode default + light mode toggle
- [ ] Cookie banner
- [ ] Email capture wired to Beehiiv
- [ ] Welcome sequence tested
- [ ] Analytics (Neon)
- [ ] Core Web Vitals green
- [ ] Search Console + Bing verified

---

## 11. Content at launch (10 posts + 1 quiz)

1. Morning Sunlight — How Long, How Bright (protocol pillar)
2. The Chronotype Quiz (tool)
3. Best Light Therapy Lamps 2026 (commercial)
4. Best Sunrise Alarm Clocks 2026 (commercial)
5. What a Zeitgeber Is (concept pillar)
6. Sleep Stages — The Working Definition
7. Why You Wake at 3am (cluster)
8. Jet Lag Protocol — East vs West (edge case pillar)
9. Red Light at Night — What the Science Actually Says
10. Verilux HappyLight vs Carex Day-Light Classic (comparison)
11. What a Late Chronotype Actually Is (concept)

---

## 12. Handoff to Claude Code

> Read CLAUDE.md + content/circadianstack/brand-book.md + docs/topical-maps/circadianstack.md + docs/circadianstack-sample-briefs.md + docs/circadianstack-affiliate-partners.md + docs/circadianstack-competitive-analysis.md + docs/circadianstack-research.md + docs/circadianstack-site-spec.md. Scaffold standalone Next.js 14 at `~/Developer/active/circadianstack-standalone`, dark-mode-first.
>
> Implement:
> - 9 page templates (Home, Hub, **ProtocolTemplate**, Comparison, ConceptPillar, EdgeCase, Quiz, Listicle, TrustPage)
> - `<ProtocolCard>` signature component (5 sections, colorcoded, exportable PNG, copy-as-markdown)
> - `<ChronotypeQuiz>` interactive (19-question MCTQ-short, client-side scoring, email → PDF)
> - `<LuxTable>`, `<LuxTestedTable>`, `<PhaseResponseCurve>`, `<JetLagCalculator>`, `<SleepStageHypnogram>`
> - Dark/light mode toggle (default dark)
> - robots, sitemap, llms.txt
> - 8 trust pages
> - Homepage with featured Protocol card
> - 10 post stubs + Chronotype Quiz
> - SITE.launched = false
>
> Brand tokens: `midnight #0B1929, dawn-amber #E6A940, zenith-cyan #5EAFC9, ember #C97D5E, paper #E8E4D9`. Fonts: Söhne Breit or IBM Plex Serif (headlines) + Inter (body) + IBM Plex Mono (numerics).
>
> Commit as `feat: initial circadianstack site — protocol cards, chronotype quiz, dark-mode-first`.
