# circadianstack.com

The science of when — circadian health, light exposure, sleep protocols, chronotype. Next.js 14, dark-mode-first.

Read [CLAUDE.md](./CLAUDE.md) first.

## Local dev
```bash
pnpm install
pnpm dev       # http://localhost:3001
pnpm build
```

## Deploy
Auto-deploys to Vercel on push to `main`. Keep `SITE.launched = false` in `lib/content/site.ts` until the launch checklist (`docs/site-spec.md`) is green.

## Key docs
- `content/brand-book.md` — voice, Jamie persona, dark-mode rationale
- `docs/topical-map.md` — 150 posts + Chronotype Quiz
- `docs/site-spec.md` — IA, 9 templates incl. Protocol card spec
- `docs/sample-briefs.md` — 5 anchor briefs including Morning Sunlight Protocol
- `docs/affiliate-partners.md` — Verilux, Carex, Oura, Whoop, Hatch
- `docs/competitive-analysis.md` — SERP wedge analysis
