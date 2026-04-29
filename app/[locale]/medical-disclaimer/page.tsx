import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Medical Disclaimer",
  description:
    "CircadianStack publishes editorial coverage of sleep and chronobiology research. Nothing on this site is medical advice.",
  path: "/medical-disclaimer",
});

export default function MedicalDisclaimerPage() {
  return (
    <TrustPageTemplate title="Medical Disclaimer">
      <p className="text-sm text-charcoal/60">Last updated: April 29, 2026.</p>

      <p>
        CircadianStack is an editorial publication that covers sleep medicine,
        chronobiology, light therapy, and the supplements + tools commonly
        discussed in those literatures. <strong>Nothing on this site is
        medical advice.</strong> Sleep is a Your-Money-or-Your-Life topic; the
        cost of a wrong recommendation can be material. We treat it with the
        seriousness that warrants.
      </p>

      <h2>What we do</h2>
      <p>
        Every editorial post is read by our editorial team against the cited
        primary literature, and posts that touch on conditions, dosing
        windows, or device protocols are reviewed by a board-certified sleep
        physician (see <a href="/about">About</a>) before publication. Each
        post emits <code>MedicalWebPage</code> structured data so search
        engines can identify the reviewer and the last-reviewed date.
      </p>

      <h2>What we are not</h2>
      <ul>
        <li>We are not a clinic and do not have a doctor–patient relationship with readers.</li>
        <li>We do not prescribe, diagnose, or treat. Anything that looks like a recommended dose is the dose published in the cited trial — not a prescription.</li>
        <li>We do not replace your sleep physician, your primary-care physician, or your local urgent care.</li>
      </ul>

      <h2>Specific cautions</h2>
      <ul>
        <li>
          <strong>Light therapy lamps</strong> can trigger mania in patients
          with bipolar disorder. Screen with a clinician before daily use.
        </li>
        <li>
          <strong>Melatonin</strong> is a prescription medicine in several
          jurisdictions (DE, SE, IT). Sourcing rules differ by country; we
          describe the published evidence, not a route to obtain it.
        </li>
        <li>
          <strong>Persistent insomnia</strong>, daytime sleep attacks, snoring
          with witnessed apnoeas, or REM-sleep behaviour suggesting acting-out
          dreams are clinical signals. They warrant a physician, not a
          protocol card.
        </li>
        <li>
          <strong>Children, pregnancy, and breastfeeding</strong> are out of
          scope. Defer to a pediatrician / obstetrician.
        </li>
      </ul>

      <h2>Affiliate disclosure</h2>
      <p>
        Some product references on CircadianStack are affiliate links. They
        are labelled with the <code>AFFILIATE LINK</code> badge at the point
        of impression and carry <code>rel=&quot;sponsored nofollow&quot;</code>
        in the HTML. Affiliate revenue does not influence our StackScoreCard
        scoring — see the <a href="/methodology">Methodology</a> page for the
        full statement.
      </p>

      <h2>If something on this site is medically wrong</h2>
      <p>
        Email <a href="mailto:hello@circadianstack.com">hello@circadianstack.com</a>{" "}
        with the post URL and the correction. We publish corrections in the
        <a href="/editorial-standards"> Editorial Standards</a> log.
      </p>
    </TrustPageTemplate>
  );
}
