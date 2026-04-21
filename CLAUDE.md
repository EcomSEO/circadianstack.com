# CircadianStack — Claude Code Guide

Source of truth for how circadianstack.com is built.

## What this repo is
Next.js 14 site at **circadianstack.com** — circadian health, light exposure, sleep protocols, chronotype. Dark-mode-first. Lab-notebook voice.

## Stack
- Next.js 14 App Router, TypeScript, Tailwind
- Brand tokens: `midnight #0B1929, dawn #E6A940, zenith #5EAFC9, ember #C97D5E, paper #E8E4D9`
- Fonts: IBM Plex Serif (headlines), Inter (body), IBM Plex Mono (numerics)
- Dark-mode-first (readable at 6am and 11pm on a phone)

## Signature components (planned, stubbed)
- `<ProtocolCard>` — 5-section card (Input / Dose / Expected output / Evidence / Failure modes). Screenshot-shareable on Twitter.
- `<ChronotypeQuiz>` — 19-question MCTQ-short, client-side scored, outputs personalized PDF
- `<LuxTable>`, `<LuxTestedTable>`, `<PhaseResponseCurve>`, `<JetLagCalculator>`

Protocol card data for each post lives in `lib/content/posts.ts` under `protocolCard`. Render the component post-launch.

## Voice
Lab-notebook precise. Every sentence carries a number or a named researcher. Primary-source citations only. No Huberman hype. See `content/brand-book.md`.

## Launch flag
`lib/content/site.ts` → `SITE.launched = false` until launch checklist (`docs/site-spec.md`) is green.

## Commands
```bash
pnpm install
pnpm dev       # http://localhost:3001
pnpm build
```

## What not to do
- Flip `SITE.launched` early
- Cite podcast content as evidence (cite the underlying study instead)
- Write in Huberman-hype voice
- Publish protocols without a cited dose
- Recommend melatonin above 0.5mg as a default

## Pointers
- Voice: `content/brand-book.md`
- 150 posts + Chronotype Quiz spec: `docs/topical-map.md`
- Protocol card spec: `docs/site-spec.md` §5
- Affiliate partners: `docs/affiliate-partners.md`
- Sample briefs: `docs/sample-briefs.md`
- SERP wedge: `docs/competitive-analysis.md`
