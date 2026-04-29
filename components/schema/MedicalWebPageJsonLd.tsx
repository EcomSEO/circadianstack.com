import { SITE } from "@/lib/content/site";
import { canonical } from "@/lib/seo";
import { PRIMARY_SLEEP_REVIEWER } from "@/lib/content/reviewers";
import { JsonLd } from "./JsonLd";

/**
 * MedicalWebPage JSON-LD with reviewedBy Person, lastReviewed,
 * medicalAudience, and an `about` MedicalCondition slot.
 *
 * Per the 2026-04-29 audit-fix sweep, the `reviewedBy.Person` node now
 * carries the full E-E-A-T credentialing graph from
 * `lib/content/reviewers.ts`:
 *
 *   - `hasCredential` → MD + medicalSpecialty + AASM diplomate
 *   - `sameAs` → ORCID, PubMed, license-board lookup, AASM registry
 *   - `image` is OMITTED while `verifiedCredential` is false (no
 *     AI-generated portraits ever surface in JSON-LD).
 */
export function MedicalWebPageJsonLd({
  path,
  headline,
  description,
  datePublished,
  dateModified,
  authorName,
  authorRole,
  reviewerName,
  reviewerCredentials,
  reviewerJobTitle,
  about,
  inLanguage = "en",
}: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorRole: string;
  reviewerName: string;
  reviewerCredentials: string;
  reviewerJobTitle: string;
  about?: string;
  inLanguage?: string;
}) {
  const r = PRIMARY_SLEEP_REVIEWER;

  const reviewerSameAs = [
    r.orcidUrl,
    r.pubmedUrl,
    r.licenseStateBoardUrl,
    r.aasmDiplomateUrl,
  ].filter((x): x is string => Boolean(x));

  const reviewerNode = {
    "@type": "Person",
    "@id": `${SITE.url}/reviewers/${r.slug}#person`,
    name: reviewerName,
    honorificPrefix: "Dr.",
    honorificSuffix: reviewerCredentials,
    jobTitle: reviewerJobTitle,
    medicalSpecialty: r.medicalSpecialty,
    sameAs: reviewerSameAs,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: r.credentials,
        credentialCategory: "license",
        recognizedBy: {
          "@type": "Organization",
          name: r.licenseBoard,
          url: r.licenseStateBoardUrl,
        },
      },
      ...(r.aasmDiplomateUrl
        ? [
            {
              "@type": "EducationalOccupationalCredential",
              name: "AASM Diplomate",
              credentialCategory: "certification",
              recognizedBy: {
                "@type": "Organization",
                name: "American Academy of Sleep Medicine",
                url: r.aasmDiplomateUrl,
              },
            },
          ]
        : []),
    ],
    // image is intentionally omitted while verifiedCredential is false.
    ...(r.verifiedCredential && r.imageUrl
      ? { image: `${SITE.url}${r.imageUrl}` }
      : {}),
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE.url}#org`,
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        url: canonical(path),
        name: headline,
        description,
        datePublished,
        dateModified,
        lastReviewed: dateModified,
        inLanguage,
        medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
        about: about
          ? { "@type": "MedicalCondition", name: about }
          : undefined,
        author: {
          "@type": "Person",
          name: authorName,
          jobTitle: authorRole,
          affiliation: { "@type": "Organization", name: SITE.name, url: SITE.url },
        },
        reviewedBy: reviewerNode,
        publisher: {
          "@type": "Organization",
          "@id": `${SITE.url}#org`,
          name: SITE.name,
          url: SITE.url,
        },
      }}
    />
  );
}
