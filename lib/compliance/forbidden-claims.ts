/**
 * Forbidden-claim phrases that must not appear in published copy.
 *
 * Sleep + chronobiology + light therapy is YMYL. The phrases below are
 * either:
 *   - clinically misleading (a lamp does not "cure" SAD; it palliates it),
 *   - regulator-flagged (Heilmittelwerbegesetz §3 in Germany forbids
 *     "wundermittel", "garantiert geheilt", and unconditional success
 *     claims in advertising of medicinal products / treatments),
 *   - commercial-speech overreach (UWG §5a unfair competition rules
 *     across the EU forbid the kind of "biohacking" hype framing the
 *     CLAUDE.md voice rules already exclude).
 *
 * The `pnpm audit:claims` script greps content/* + lib/content/posts.ts
 * for these phrases and fails the pre-commit hook on any hit. Voice
 * goal: chronobiology-precise, never optimization-bro.
 */

export type ForbiddenPhrase = {
  /** Lowercase substring to match. */
  phrase: string;
  /** Why it's forbidden (rendered in audit:claims output). */
  reason: string;
  /** Locales the rule applies in. `*` = all. */
  locales: "*" | string[];
};

export const FORBIDDEN_CLAIMS: ForbiddenPhrase[] = [
  // Clinical overreach
  { phrase: "cure for insomnia", reason: "Insomnia is a chronic condition; we describe management, not cures.", locales: "*" },
  { phrase: "cures sad", reason: "Light therapy palliates seasonal affective disorder; it does not cure it.", locales: "*" },
  { phrase: "completely safe", reason: "No intervention is unconditionally safe; describe contraindications.", locales: "*" },
  { phrase: "no side effects", reason: "All exposures have potential side effects; specify the documented profile.", locales: "*" },
  { phrase: "doctor approved", reason: "Vague endorsement language; cite the specific reviewer + credential instead.", locales: "*" },
  { phrase: "scientifically proven", reason: "Substitute the cited trial result; 'proven' overstates evidence weight.", locales: "*" },
  { phrase: "guaranteed results", reason: "We do not guarantee outcomes; describe the trial's effect-size + caveats.", locales: "*" },

  // Voice / framing rules from CLAUDE.md
  { phrase: "biohack", reason: "Voice rule: chronobiology, not optimization. Reframe.", locales: "*" },
  { phrase: "biohacker", reason: "Voice rule: chronobiology, not optimization. Reframe.", locales: "*" },
  { phrase: "biohacking", reason: "Voice rule: chronobiology, not optimization. Reframe.", locales: "*" },
  { phrase: "huberman says", reason: "Voice rule: cite the underlying study, not the podcast.", locales: "*" },
  { phrase: "the secret to", reason: "Voice rule: lab-notebook precision, not hype framing.", locales: "*" },
  { phrase: "miracle", reason: "Voice rule: lab-notebook precision, not hype framing.", locales: "*" },
  { phrase: "shocking", reason: "Voice rule: lab-notebook precision, not hype framing.", locales: "*" },

  // German regulatory (HWG §3) — applied to DE locale specifically
  { phrase: "wundermittel", reason: "HWG §3 — unconditional success claim forbidden in DE health advertising.", locales: ["de"] },
  { phrase: "garantiert geheilt", reason: "HWG §3 — unconditional success claim forbidden in DE health advertising.", locales: ["de"] },
  { phrase: "100% wirksam", reason: "HWG §3 — unconditional efficacy claim forbidden in DE health advertising.", locales: ["de"] },

  // French ANSM-aligned rules
  { phrase: "guérit", reason: "ANSM — only authorised medicines may use 'guérit' / 'cures' in marketing.", locales: ["fr"] },
  { phrase: "remède miracle", reason: "ANSM — miracle-cure framing forbidden in FR health advertising.", locales: ["fr"] },
];

/**
 * Returns the forbidden phrases that apply to the given locale.
 */
export function forbiddenForLocale(locale: string): ForbiddenPhrase[] {
  return FORBIDDEN_CLAIMS.filter(
    (p) => p.locales === "*" || p.locales.includes(locale),
  );
}

/**
 * Scan a body of text for forbidden phrases. Used by the
 * `pnpm audit:claims` script and the pre-commit hook.
 */
export function scanForbiddenClaims(
  body: string,
  locale: string,
): ForbiddenPhrase[] {
  const haystack = body.toLowerCase();
  return forbiddenForLocale(locale).filter((p) =>
    haystack.includes(p.phrase),
  );
}
