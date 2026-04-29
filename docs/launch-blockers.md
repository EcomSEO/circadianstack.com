# Circadianstack — Launch Blockers (2026-04-29)

What stands between circadianstack today and "leave it alone for 3 months and just upload content."

Status as of branch `feat/seo-readiness-2026-04`.

---

## TL;DR

**Three blockers + one larger compliance gap.**

| Blocker | Owner | Time | Status |
|---|---|---|---|
| 1. Merge `feat/seo-readiness-2026-04` PR | Fabian | 5 min | ❌ open |
| 2. **EU compliance stack — privacy-policy.ts, terms.ts, impressum.ts** | Fabian + lawyer | 2–4 hours | ❌ entirely missing |
| 3. Set Vercel env vars (Beehiiv + Neon) | Fabian | 15 min | ❌ pending |

The big one for circadianstack specifically is blocker #2: unlike pepvise where the legal-page data layer existed (just with `[Operator Name]` placeholders), circadianstack has **zero compliance content layer**. The page routes (`app/[locale]/privacy/`, `terms/`) exist but are empty directories. Without these, the 12-locale routing for EU traffic is technically non-compliant under TTDSG §5 + GDPR Art 13/14.

After those three, circadianstack is in pure content-upload mode. The build, schema, audit:claims gate, and 14-post database are production-ready.

---

## Blocker 1 — Merge the SEO-readiness PR

**Branch:** `feat/seo-readiness-2026-04`
**Last commit:** `7870829`
**PR URL:** https://github.com/EcomSEO/circadianstack.com/pull/new/feat/seo-readiness-2026-04

**What ships on merge:**
- 4 new pillar posts (magnesium glycinate, sleep onset latency, DSPS protocol, mouth tape)
- Q2 2026 keyword priority research (top wedge: 301k/mo magnesium glycinate)
- audit:claims script wired into pnpm
- 40 new static pages (4 posts × 10 locales)

**On deploy:** new pages flip live across all locales. Sitemap auto-regenerates from `posts.ts`.

**Action:** review the PR, merge to main. Vercel auto-deploys.

---

## Blocker 2 — EU compliance stack (entirely missing)

The 12-locale routing means circadianstack is accessible from every EU jurisdiction. Without the compliance content layer, the legal exposure is real (TTDSG §5 in DE specifically; GDPR Art 13/14 across all EU).

### What's currently shipped vs missing

| Component | Status |
|---|---|
| `<CookieBanner>` component | ✅ present in components/ |
| `<AffiliateDisclosure>` component | ✅ present |
| `<AffiliateLink>` component | ✅ present |
| `lib/content/impressum.ts` | ❌ does not exist |
| `lib/content/terms.ts` | ❌ does not exist |
| `lib/content/privacy-policy.ts` | ❌ does not exist |
| `app/[locale]/privacy/page.tsx` | ❌ empty directory |
| `app/[locale]/terms/page.tsx` | ❌ no content |
| Sweden-restricted-compound stubs | ❌ N/A (chronobiology, no peptide compounds) |

### What needs to ship

Refer to `_shared/compliance-gap-fill.md` (519 lines) for the canonical compliance content. The legal-page data layer in pepvise (`lib/content/{impressum,privacy-policy,terms}.ts`) is a working template; the same shape applies to circadianstack with site-specific adjustments:

1. **`lib/content/impressum.ts`** — TTDSG §5 operator disclosure. Must include legal entity name, registered address, contact email, VAT/registration ID. Same template as pepvise; same `[Operator Name]` / `[Address]` placeholders need filling.
2. **`lib/content/privacy-policy.ts`** — GDPR Art 13/14 disclosures. Lists data categories, lawful bases, retention periods, third-party processors (Vercel, Neon, Beehiiv), DSR contact. 12-locale translation matrix.
3. **`lib/content/terms.ts`** — Terms of service. Jurisdiction, governing law, limitation of liability, content licensing.

### Lawyer review

Per `00-master-orchestration.md`: budget $300–800 for a one-time legal review of the privacy + terms + impressum stack before public launch. This is not optional for a YMYL health-information site.

### Recommended path

1. Pull pepvise's `lib/content/{impressum,privacy-policy,terms}.ts` as a structural template (the network's compliance pattern is consistent)
2. Adapt site-specific text (Pepvise → Circadianstack, peptide-research → chronobiology-research scope language, no Sweden compound stubs)
3. Fill the 3 operator placeholders: `[Operator Name]`, `[Address]`, `[Operator's chosen jurisdiction]`
4. Run lawyer review
5. Build `/privacy`, `/terms`, `/impressum` page routes that render the content layer with i18n

Estimate: 2–4 hours of dev work + lawyer turnaround.

---

## Blocker 3 — Vercel environment variables

| Env var | Used by |
|---|---|
| `BEEHIIV_API_KEY` | Newsletter form |
| `BEEHIIV_PUBLICATION_ID` | Newsletter form |
| `NEON_DATABASE_URL` | Per-site analytics + event tracking |

Set in the Vercel dashboard for the `circadianstack` project, production scope.

---

## Not-blocking, but worth knowing

### IBM Plex self-host (Phase 0 of the 05 prompt)

The prompt explicitly flags this as a known gap. Currently fonts load from Google Fonts; self-hosting via `next/font/google` removes a third-party request and improves both performance and EU privacy posture. Replace the current font import in `app/layout.tsx` with the pattern documented in the 05-circadianstack prompt §"Self-host IBM Plex via next/font."

### Gate B content target

The prompt's Gate B target is 40 published posts. Current count: 14 (10 pre-existing + 4 added on this branch). Remaining 26: see `docs/research/circadianstack-keyword-priority-2026-q2.md` for the prioritized backlog. Highest priority next batch:

1. rem-sleep-explained (74,000/mo, KD 48)
2. polyphasic-sleep-explained (4,400/mo, KD 34)
3. best-weighted-blanket-2026 (9,900/mo)
4. seasonal-affective-disorder-protocol (40,500/mo seasonal)
5. melatonin-timing-protocol (210/mo head, much larger cluster)

### 12-locale dictionary completion

Current dictionary count: 10 (cs, de, en, es, fr, it, nl, no, pl, pt). Missing: `sv` (Swedish), `ro` (Romanian). Per master orchestration the network targets 12 locales. Add the two missing dicts before the next major content batch.

### Methodology versioning

Circadianstack does not currently use a versioned scoring methodology like pepvise's v1.2/v1.1 system. The brand voice is lab-notebook-protocol, not Wirecutter-database-of-scores. Methodology versioning is therefore out of scope unless the editorial direction shifts.

### Reviewer credentials (E-E-A-T)

`lib/content/reviewers.ts` does not exist. The `reviewers/[slug]` route may not be wired. Per `_shared/eeat-author-reviewer.md`, every YMYL site needs at least 1 author + 1 reviewer with verifiable credentials. Add this layer in the next session.

### Photography (kie.ai manifest)

Phase 9 photography is not done. Hero + category atmosphere shots per the prompt's manifest are placeholder / generic. Bounded next-session task.

---

## After the 3 blockers are cleared

You're in **append-only content mode**. See `docs/content-upload-runbook.md` for the workflow. TL;DR: edit `lib/content/posts.ts`, push to main, Vercel rebuilds. No MDX compilation, no separate database, no schema migrations.

---

## Pointers

- Content upload workflow: `docs/content-upload-runbook.md`
- Q2 keyword priority: `docs/research/circadianstack-keyword-priority-2026-q2.md`
- Network constitution: `~/Developer/active/health-network/CLAUDE.md`
- Brand book: `content/brand-book.md`
- Topical map: `~/Developer/active/health-network/docs/topical-maps/circadianstack.md`
- Compliance template: `_shared/compliance-gap-fill.md` (in master orchestration package)
- Master orchestration: `~/Library/Application Support/Claude/.../health-network-seo-prompts/00-master-orchestration.md`
