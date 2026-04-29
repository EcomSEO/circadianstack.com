import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "What CircadianStack stores in your browser, why, and how to clear or block it.",
  path: "/cookies",
});

export default function CookiePolicyPage() {
  return (
    <TrustPageTemplate title="Cookie Policy">
      <p className="text-sm text-charcoal/60">Last updated: April 29, 2026.</p>

      <p>
        CircadianStack uses a small number of cookies and equivalent
        local-storage keys. We never use advertising cookies or third-party
        ad-network trackers. This policy describes what we set, why, and how
        long.
      </p>

      <h2>Strictly necessary</h2>
      <ul>
        <li>
          <strong>cs:cookie-consent</strong> — records your choice on the
          consent banner so we don&apos;t show it again. Local-storage key,
          12 months.
        </li>
        <li>
          <strong>NEXT_LOCALE</strong> — your selected language. First-party
          cookie, 12 months.
        </li>
      </ul>

      <h2>Optional — analytics</h2>
      <p>
        We may set a privacy-respecting first-party analytics cookie (Plausible
        or equivalent — server-side, IP-anonymised, no cross-site tracking)
        when analytics consent is granted via the consent banner. No cookie is
        set if you reject.
      </p>

      <h2>Optional — newsletter</h2>
      <p>
        If you subscribe to the CircadianStack newsletter, the form provider
        (Beehiiv) sets a session cookie to confirm your submission. This is
        not used for tracking outside the subscription flow.
      </p>

      <h2>How to clear or block</h2>
      <p>
        You can clear all CircadianStack storage by clearing site data in your
        browser. To re-prompt the consent banner, clear{" "}
        <code>cs:cookie-consent</code>.
      </p>

      <h2>Your rights</h2>
      <p>
        EU/UK readers have the right under GDPR / UK GDPR to access, correct,
        export, and erase any personal data we hold about them. See the{" "}
        <a href="/privacy">Privacy Policy</a> for the contact path.
      </p>
    </TrustPageTemplate>
  );
}
