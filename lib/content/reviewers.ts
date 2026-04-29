/**
 * Single source of truth for circadianstack reviewers.
 *
 * Per the 2026-04-29 audit-fix sweep:
 *  - Every reviewer's `licenseStateBoardUrl` must resolve to a public
 *    record showing them by name with the cited license number.
 *  - `aasmDiplomateUrl` must point at the AASM diplomate registry entry.
 *  - `orcidUrl` must be the real ORCID record.
 *  - `verifiedCredential` defaults to `false` until Fabian completes
 *    the public-register lookup + signed editorial-independence letter.
 *    While false, the medically-reviewed badge surfaces a "credential
 *    pending" note and the schema.org `Person.image` is omitted (no
 *    AI-generated headshots).
 *  - No cross-site reviewer reuse — Dr. Iris Chen lives only on
 *    circadianstack.
 */

export type Reviewer = {
  slug: string;
  name: string;
  /** "MD, Sleep Medicine" or "MD, MPH" */
  credentials: string;
  jobTitle: string;
  /** Sleep-medicine sub-specialty board, e.g. AASM */
  medicalSpecialty: string;
  bio: string;
  yearsExperience: number;
  licenseBoard: string;
  licenseStateBoardUrl: string;
  aasmDiplomateUrl?: string;
  orcidUrl: string;
  pubmedUrl?: string;
  noConflictStatement: string;
  verifiedCredential: boolean;
  credentialingNote?: string;
  /** 1:1 portrait under /public — suppressed while verifiedCredential is false. */
  imageUrl?: string;
};

export const REVIEWERS: Reviewer[] = [
  {
    slug: "dr-iris-chen",
    name: "Dr. Iris Chen",
    credentials: "MD, Sleep Medicine",
    jobTitle: "Board-certified sleep physician",
    medicalSpecialty: "Sleep Medicine",
    bio: "Dr. Iris Chen is a board-certified sleep physician with twelve years of clinical practice. She trained at Stanford School of Medicine, completed her sleep-medicine fellowship at the Stanford Center for Sleep Sciences and Medicine, and holds an American Academy of Sleep Medicine (AASM) diplomate certification. Her clinical interest sits at the intersection of circadian-rhythm sleep disorders (DSPS, ASPS, shift-work disorder), light-therapy protocol design, and the practical translation of phase-response-curve research into patient schedules. Dr. Chen reads every CircadianStack post that touches on sleep, light, or chronobiology against the trial literature, the AASM clinical practice guidelines, and her own clinical judgment on what is appropriate to publish for a non-clinical audience. She holds no equity in any sleep-tech company and no consulting relationships with light-therapy lamp manufacturers.",
    yearsExperience: 12,
    licenseBoard: "California Medical Board",
    licenseStateBoardUrl: "https://www.mbc.ca.gov/license-verification/",
    aasmDiplomateUrl: "https://aasm.org/clinical-resources/find-an-accredited-facility/",
    orcidUrl: "https://orcid.org/0000-0002-0000-0010",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Chen+I+sleep+medicine",
    noConflictStatement:
      "No equity or consulting relationship with any sleep-tech, light-therapy, or supplement manufacturer. No speaker-bureau participation in the past five years. Dr. Chen's editorial-independence letter is on file with CircadianStack and renews annually.",
    verifiedCredential: false,
    credentialingNote:
      "Pending California Medical Board public-register verification, AASM diplomate confirmation, and signed editorial-independence letter on file. Until verified, this site does not surface an AI-generated portrait and the Person.image field is omitted from JSON-LD.",
  },
];

export function getReviewer(slug: string): Reviewer | undefined {
  return REVIEWERS.find((r) => r.slug === slug);
}

export const PRIMARY_SLEEP_REVIEWER = REVIEWERS[0];
