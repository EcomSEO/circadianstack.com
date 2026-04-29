"use client";

import { useLocale } from "next-intl";

/**
 * AffiliateLabel — visible affiliate-link badge.
 *
 * Required by EU consumer law (UWG §5a in Germany; similar across
 * member states): every commercial link must be labelled as such at
 * the point of impression, not only in a separate disclosure page.
 * Combined with `rel="sponsored nofollow"` on the underlying link,
 * this is the network-wide pattern for compliance.
 *
 * Renders a small caps-mono pill near the link / button.
 */

const LABEL: Record<string, string> = {
  en: "AFFILIATE LINK",
  de: "AFFILIATE-LINK",
  fr: "LIEN AFFILIÉ",
  it: "LINK AFFILIATO",
  es: "ENLACE DE AFILIADO",
  nl: "AFFILIATELINK",
  pl: "LINK AFILIACYJNY",
  sv: "AFFILIATELÄNK",
  pt: "LINK DE AFILIADO",
  ro: "LINK DE AFILIERE",
  cs: "AFILIAČNÍ ODKAZ",
  no: "AFFILIATELENKE",
};

const DESCRIPTION: Record<string, string> = {
  en: "We may earn a small commission at no extra cost to you. Revenue does not influence StackScoreCard scoring.",
  de: "Wir verdienen ggf. eine kleine Provision ohne zusätzliche Kosten für Sie. Einnahmen beeinflussen nicht die StackScoreCard-Bewertung.",
  fr: "Nous pouvons percevoir une petite commission sans frais supplémentaires pour vous. Les revenus n'influencent pas la notation StackScoreCard.",
  it: "Possiamo ricevere una piccola commissione senza costi aggiuntivi. Le entrate non influenzano la valutazione StackScoreCard.",
  es: "Podemos recibir una pequeña comisión sin coste adicional. Los ingresos no influyen en la puntuación StackScoreCard.",
  nl: "We kunnen een kleine commissie ontvangen zonder extra kosten voor u. Inkomsten beïnvloeden de StackScoreCard-score niet.",
  pl: "Możemy otrzymać niewielką prowizję bez dodatkowych kosztów dla Ciebie. Przychody nie wpływają na ocenę StackScoreCard.",
  sv: "Vi kan få en liten provision utan extra kostnad för dig. Intäkter påverkar inte StackScoreCard-betyget.",
  pt: "Podemos receber uma pequena comissão sem custo adicional. As receitas não influenciam a pontuação StackScoreCard.",
  ro: "Putem primi un mic comision fără costuri suplimentare. Veniturile nu influențează scorul StackScoreCard.",
  cs: "Můžeme získat malou provizi bez dodatečných nákladů. Příjmy neovlivňují hodnocení StackScoreCard.",
  no: "Vi kan motta en liten provisjon uten ekstra kostnad for deg. Inntekter påvirker ikke StackScoreCard-vurderingen.",
};

export function AffiliateLabel({
  className = "",
  showDescription = false,
}: {
  className?: string;
  showDescription?: boolean;
}) {
  const locale = useLocale();
  const label = LABEL[locale] ?? LABEL.en;
  const description = DESCRIPTION[locale] ?? DESCRIPTION.en;

  return (
    <span className={`inline-flex flex-col gap-1 ${className}`}>
      <span
        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border font-mono text-[9.5px] tracking-[0.16em] uppercase"
        style={{
          backgroundColor: "rgba(230, 169, 64, 0.08)",
          borderColor: "rgba(230, 169, 64, 0.35)",
          color: "#E6A940",
        }}
        role="note"
        aria-label={label}
      >
        <span aria-hidden>↗</span>
        {label}
      </span>
      {showDescription && (
        <span className="text-[11px] text-stone leading-snug max-w-md">
          {description}
        </span>
      )}
    </span>
  );
}
