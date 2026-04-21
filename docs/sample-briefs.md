# CircadianStack — Sample Briefs

Five anchor briefs anchoring the Protocol-card format across the site's 5 hubs.

**Source data:** DataForSEO April 2026, via `docs/circadianstack-research.md` §4.

---

## Brief 1: Morning Sunlight — How Long, How Bright (protocol pillar, Hub 1)

```markdown
---
slug: morning-sunlight-protocol
site: circadianstack
hub: light-and-zeitgebers
post_type: protocol_pillar
target_keyword: morning sunlight
target_keyword_volume: 1600
target_keyword_difficulty: 19
secondary_keywords:
  - morning sunlight routine (590, kd 11)
  - how long in morning sun (390, kd 9)
  - morning sunlight 10 minutes (trending +220% YoY)
  - morning light circadian (320, kd 13)
search_intent: how_to
word_count_target: 2200
schema_types: [Article, HowTo, FAQPage]
has_protocol_card: true
internal_links:
  - light-and-zeitgebers/what-a-zeitgeber-is
  - light-and-zeitgebers/best-light-therapy-lamps
  - sleep-architecture/sleep-debt
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
---

## The opportunity
1,600/mo at KD 19. Top 10: Healthline, Mindbodygreen, Huberman-adjacent blogs, "morning routine" lifestyle content. None show dose tables (lux × minutes). None cite the Phase Response Curve properly. Our wedge: Protocol card with exact lux-minutes dose + PRC walk-through + cross-links to LIGHT THERAPY LAMPS (commercial hub) for readers in dark climates.

## Required structure
- H1
- 60-word direct answer with the dose
- **Protocol card (above the fold):**
  - Input: morning light exposure
  - Dose: 1,000-10,000 lux for 10-30 minutes, within 60 min of wake
  - Expected output: phase advance of ~1 hour over 1-2 weeks; improved sleep onset; improved morning alertness
  - Evidence: Khalsa 2003 (PRC, *J Physiol*), Duffy 2015 (dose-response, *J Biol Rhythms*), Zeitzer 2000 (intensity, *J Physiol*)
  - Failure modes: exposure too late in the morning (after 10am cuts effect in half); blue-filtering goggles block the effective wavelengths; sub-1,000-lux exposure rarely phase-shifts at practical durations
- H2: Why morning light phase-shifts (the SCN and the PRC explained)
- H2: Dose — the lux × minutes table
- H2: Timing — the 60-minute window + why it matters
- H2: What counts as "morning sunlight" (outdoor vs window vs lamp)
- H2: Wavelengths — why cloudy still works
- H2: When you can't get outside (the light therapy lamp fallback, cross-link to buying guide)
- H2: Failure modes & common mistakes
- H2: FAQ (schema-marked)
- Sources

## Editor notes
- Khalsa PRC is THE foundational citation. Do not skip.
- The lux × minutes table is the Pinterest artifact. Design it to screenshot clean.
- Cross-link aggressively to Best Light Therapy Lamps for the readers-can't-get-outside scenario.
```

---

## Brief 2: Best Light Therapy Lamps 2026 (commercial pillar, Hub 4)

```markdown
---
slug: best-light-therapy-lamps-2026
site: circadianstack
hub: interventions-and-tools
post_type: comparison
target_keyword: best light therapy lamp
target_keyword_volume: 12100
target_keyword_difficulty: 22
secondary_keywords:
  - best light therapy lamp 2026 (720, kd 8)
  - light therapy lamp (27100, kd 35)
  - 10000 lux lamp (880, kd 16)
  - verilux happylight review (480, kd 13)
  - carex day light review (390, kd 12)
search_intent: commercial_investigation
word_count_target: 3500
schema_types: [Article, ItemList, Review, FAQPage]
has_affiliate_links: true
internal_links:
  - light-and-zeitgebers/light-therapy-lamp-dose-accurate-guide
  - light-and-zeitgebers/morning-sunlight-protocol
  - light-and-zeitgebers/verilux-vs-carex
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
---

## The opportunity
12,100/mo at KD 22. Top 10: Wirecutter, Good Housekeeping, Verywell, SleepFoundation, Forbes, TIME. NONE distinguish **10,000 lux at what distance** — the actual delivered dose. Our wedge: dose-accurate testing. Each lamp tested at 12", 18", and 24" with a lux meter. Pinterest-shareable dose chart.

## Required structure
- H1 with primary keyword
- Affiliate disclosure
- 80-word intro: the metric that actually matters is lux-at-your-eye during your actual use, not marketing claims
- **Our pick** card (winner + lux-at-eye + price)
- **Dose-accurate comparison table:** lamp, claimed max lux, measured lux @ 12" / 18" / 24", CCT (color temperature), price, $/measured-lux
- Ranked list of 10-12 lamps, each with:
  - Name + price (dated)
  - Measured lux at practical distances
  - Size, portability, design
  - Who it's for
  - Affiliate link with proper rel attributes
- Methodology section — how we tested (lux meter model, distances, daylight control)
- What to look for (5-7 criteria with explanations)
- FAQ (schema-marked)

## Lamps to review
- Verilux HappyLight (series)
- Carex Day-Light Classic Plus
- Northern Light Technologies Flamingo
- TheraLite Aura
- Philips SmartSleep Sleep & Wake-Up Light (hybrid)
- Beurer TL 90
- Aura Day Light Therapy
- Circadian Optics Lumine
- Sperti Vitamin D + UV Lamp (caveat — this is UV, different product)
- CET Deluxe

## Editor notes
- Measured lux at distance is the differentiator. Wirecutter doesn't do this.
- The $/measured-lux table is the screenshot artifact — shareable on Reddit r/seasonaldepression, r/DSPD.
- Verilux HappyLight is likely top pick (good at 12" distance, reasonable price, widely available).
- Don't recommend UV-inclusive lamps as the default — they're a different use case.
```

---

## Brief 3: Chronotype Quiz (tool + lead magnet, Hub 3)

```markdown
---
slug: chronotype-quiz
site: circadianstack
hub: chronotype
post_type: interactive_quiz
target_keyword: chronotype quiz
target_keyword_volume: 5400
target_keyword_difficulty: 31
secondary_keywords:
  - what is my chronotype (2400, kd 25)
  - chronotype test (1600, kd 22)
  - morningness eveningness questionnaire (720, kd 17)
search_intent: tool_use
schema_types: [Article, WebApplication, FAQPage]
is_lead_magnet: true
internal_links:
  - chronotype/late-chronotype
  - chronotype/owl-vs-lark
  - light-and-zeitgebers/morning-sunlight-protocol
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
---

## The opportunity
5,400/mo at KD 31. The quiz itself is the primary lead magnet for the entire site. Competing quizzes: Dr. Michael Breus's chronotype quiz (dog-based metaphor, weak science), SleepFoundation's quiz (too clinical), random Buzzfeed-tier quizzes. Our wedge: MCTQ-short (peer-reviewed instrument from Roenneberg), scored client-side, outputs a true chronotype classification + a personalized 7-day protocol PDF.

## Required structure
- H1
- 60-word intro: what the quiz does, how long it takes (3-5 min), what they get at the end
- **The quiz itself in the first screen** — 19 questions from MCTQ-short, one at a time or paginated, client-side scoring
- Scoring output: chronotype classification (extreme early / moderate early / intermediate / moderate late / extreme late) + mid-sleep on free days (the MCTQ metric)
- **Email capture step:** "Email me my personalized 7-day protocol PDF" (optional — results are visible even without email)
- PDF content: 3 Protocol cards tailored to chronotype (light exposure timing, evening routine timing, optimal caffeine cutoff time)
- H2: About MCTQ (Roenneberg et al. methodology)
- H2: What your chronotype means
- H2: What this quiz doesn't tell you (limits of self-report)
- H2: Related reading — cross-links to Hub 3 deep-dives

## Editor notes
- Use the validated MCTQ-short question set. Do not invent questions.
- Scoring formula is straightforward — implement as a pure function with unit tests.
- Email capture is optional to reduce friction; we get most subscribers anyway because they want the PDF.
- PDF is generated server-side (Beehiiv + a serverless function) with the personalized protocol content.
- This is THE site's flywheel. Every post cross-links to the quiz. Every newsletter signup goes through it.
```

---

## Brief 4: Jet Lag Protocol — East vs West (pillar, Hub 5)

```markdown
---
slug: jet-lag-protocol-east-vs-west
site: circadianstack
hub: edge-cases
post_type: protocol_pillar
target_keyword: jet lag
target_keyword_volume: 49500
target_keyword_difficulty: 56
secondary_keywords:
  - how to get over jet lag (8100, kd 28)
  - how to get over jet lag fast (6600, kd 30)
  - eastbound jet lag (480, kd 18)
  - jet lag melatonin (2900, kd 32)
search_intent: how_to
word_count_target: 3000
schema_types: [Article, HowTo, FAQPage]
has_protocol_card: true
internal_links:
  - edge-cases/chronotherapy
  - light-and-zeitgebers/morning-sunlight-protocol
  - sleep-architecture/melatonin-dosing
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
---

## The opportunity
49,500/mo at KD 56 — saturated head, but the directional variants (eastbound, westbound) are accessible. The "how to get over jet lag fast" variant at 6,600/KD 30 is directly rankable. Our wedge: two distinct Protocol cards (east vs west, because they require different interventions), plus a time-zone-delta calculator.

## Required structure
- H1
- 60-word direct answer: east = phase advance (harder) = morning light + evening melatonin; west = phase delay (easier) = evening light + morning darkness
- **TWO Protocol cards (side by side on desktop):**
  - **Westbound (phase delay):**
    - Input: westbound travel across N time zones
    - Dose: bright evening light 2-3 hours before target bedtime at destination; avoid morning light for first 2 days
    - Expected output: ~1 hour/day phase delay; full adaptation in N days
    - Evidence: Eastman 1995, Boulos 1995, Mitchell 2015
    - Failure modes: napping too early; drinking alcohol (disrupts REM)
  - **Eastbound (phase advance):**
    - Input: eastbound travel across N time zones
    - Dose: 0.3-0.5mg melatonin 5h before target bedtime; bright morning light at destination; avoid evening light
    - Expected output: ~1 hour/day phase advance; full adaptation in ~N days (eastbound is slower)
    - Evidence: Khalsa 2003, Sack 2007, Herxheimer 2002 (Cochrane)
    - Failure modes: overdosing melatonin (>0.5mg); bright screens in the evening; caffeine past 2pm destination time
- H2: Why east is harder (the phase response curve + forward-shifting asymmetry)
- H2: Pre-flight preparation (start shifting 2-3 days before)
- H2: In-flight strategy (when to sleep, when to eat, whether to drink coffee)
- H2: First 48 hours at destination (the critical window)
- H2: Melatonin — the 0.3mg question
- H2: Short trips (1-2 nights) — the case for not re-entraining
- H2: Business travel patterns (the every-week traveler)
- H2: Kids and jet lag
- H2: FAQ (schema-marked)

## Editor notes
- The two Protocol cards side-by-side are the artifact. Pinterest-shareable, screenshot-shareable.
- Melatonin guidance must be careful: 0.3-0.5mg, not the 3-10mg supplement bottles sell. Cite Herxheimer 2002 Cochrane.
- Include a "your trip calculator" embed — 2 inputs (origin UTC, destination UTC, departure date), output: the full pre-flight + in-flight + post-flight schedule.
```

---

## Brief 5: Best Sunrise Alarm Clocks 2026 (commercial, Hub 4)

```markdown
---
slug: best-sunrise-alarm-clocks-2026
site: circadianstack
hub: interventions-and-tools
post_type: comparison
target_keyword: best sunrise alarm clock
target_keyword_volume: 5400
target_keyword_difficulty: 20
secondary_keywords:
  - sunrise alarm clock (9900, kd 25)
  - philips sunrise alarm review (720, kd 15)
  - hatch restore review (1300, kd 18)
  - dawn simulator clock (480, kd 14)
search_intent: commercial_investigation
word_count_target: 2800
schema_types: [Article, ItemList, Review, FAQPage]
has_affiliate_links: true
internal_links:
  - interventions-and-tools/best-light-therapy-lamps
  - light-and-zeitgebers/dawn-simulators
  - sleep-architecture/sleep-stages
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
---

## The opportunity
5,400/mo at KD 20 — highly accessible. Top 10: Wirecutter, Good Housekeeping, NYMag Strategist. All evaluate on lifestyle criteria (look, sound, alarm features). None evaluate on the actual circadian metric (sunrise duration + maximum lux). Our wedge: test-based reviews focusing on circadian impact.

## Required structure
- H1
- Affiliate disclosure
- 80-word intro: the sunrise alarm question is about two things — max lux at the pillow + sunrise duration
- Our pick card
- Testing methodology (how we measured max lux and sunrise gradient)
- Comparison table: alarm, max lux @ pillow distance, sunrise duration range, audio features, price
- Ranked list of 10 products with:
  - Philips SmartSleep HF3520 (the flagship)
  - Hatch Restore / Restore 2
  - Philips HF3510
  - Casper Glow
  - Lumie Bodyclock Glow / Spark / Shine
  - Jall Wake Up Light
  - HeimVision Sunrise Alarm
  - Homelabs Sunrise Alarm
  - Loftie (different product — audio-first, but cover for comparison)
  - Coulax Sunrise Alarm (budget)
- Methodology section
- What to look for
- FAQ

## Editor notes
- Max lux at pillow distance is the differentiator.
- Philips flagship typically wins on lux but Hatch Restore wins on UX. Make that tradeoff explicit.
- Budget picks matter — not everyone needs $200 alarm.
- Cross-link to light therapy lamp buying guide for readers who need higher doses.
```
