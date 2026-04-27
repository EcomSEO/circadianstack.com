import { SITE } from "@/lib/content/site";
import { canonical } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/**
 * MedicalWebPage JSON-LD with reviewedBy Person, lastReviewed,
 * medicalAudience, and an `about` MedicalCondition slot for relevant pages.
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
}) {
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
        inLanguage: "en",
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
        reviewedBy: {
          "@type": "Person",
          name: reviewerName,
          jobTitle: reviewerJobTitle,
          honorificSuffix: reviewerCredentials,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
      }}
    />
  );
}
