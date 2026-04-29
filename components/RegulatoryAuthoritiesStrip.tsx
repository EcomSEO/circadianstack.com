"use client";

import { useLocale } from "next-intl";

/**
 * RegulatoryAuthoritiesStrip — small footer strip listing the
 * relevant medicines authority and data-protection authority for the
 * reader's locale.
 *
 * Required posture for an EU-served YMYL site (sleep medicine +
 * supplement affiliates) — the reader needs a one-click path to the
 * authority that regulates the substances we discuss and the authority
 * that handles their data-rights complaint.
 *
 * Light-therapy lamps are class-I medical devices in several EU
 * jurisdictions; melatonin is a prescription medicine in DE/SE/IT.
 * The strip surfaces the relevant body without making the page feel
 * legalistic.
 */

type Authority = { label: string; href: string };

const AUTHORITIES: Record<string, { medicines: Authority; dpa: Authority }> = {
  en: {
    medicines: { label: "MHRA (UK) · FDA (US)", href: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency" },
    dpa: { label: "ICO (UK)", href: "https://ico.org.uk/" },
  },
  de: {
    medicines: { label: "BfArM", href: "https://www.bfarm.de/" },
    dpa: { label: "BfDI", href: "https://www.bfdi.bund.de/" },
  },
  fr: {
    medicines: { label: "ANSM", href: "https://ansm.sante.fr/" },
    dpa: { label: "CNIL", href: "https://www.cnil.fr/" },
  },
  it: {
    medicines: { label: "AIFA", href: "https://www.aifa.gov.it/" },
    dpa: { label: "Garante Privacy", href: "https://www.garanteprivacy.it/" },
  },
  es: {
    medicines: { label: "AEMPS", href: "https://www.aemps.gob.es/" },
    dpa: { label: "AEPD", href: "https://www.aepd.es/" },
  },
  nl: {
    medicines: { label: "CBG-MEB", href: "https://www.cbg-meb.nl/" },
    dpa: { label: "Autoriteit Persoonsgegevens", href: "https://autoriteitpersoonsgegevens.nl/" },
  },
  pl: {
    medicines: { label: "URPL", href: "https://www.urpl.gov.pl/" },
    dpa: { label: "UODO", href: "https://uodo.gov.pl/" },
  },
  sv: {
    medicines: { label: "Läkemedelsverket", href: "https://www.lakemedelsverket.se/" },
    dpa: { label: "IMY", href: "https://www.imy.se/" },
  },
  pt: {
    medicines: { label: "Infarmed", href: "https://www.infarmed.pt/" },
    dpa: { label: "CNPD", href: "https://www.cnpd.pt/" },
  },
  ro: {
    medicines: { label: "ANMDMR", href: "https://www.anm.ro/" },
    dpa: { label: "ANSPDCP", href: "https://www.dataprotection.ro/" },
  },
  cs: {
    medicines: { label: "SÚKL", href: "https://www.sukl.cz/" },
    dpa: { label: "ÚOOÚ", href: "https://www.uoou.cz/" },
  },
  no: {
    medicines: { label: "Legemiddelverket", href: "https://www.legemiddelverket.no/" },
    dpa: { label: "Datatilsynet", href: "https://www.datatilsynet.no/" },
  },
};

export function RegulatoryAuthoritiesStrip() {
  const locale = useLocale();
  const a = AUTHORITIES[locale] ?? AUTHORITIES.en;

  return (
    <div className="border-t border-rule pt-5 mt-6 text-[12px] text-stone">
      <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-stone mb-2">
        Regulatory authorities (your jurisdiction)
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        <span>
          Medicines:{" "}
          <a
            href={a.medicines.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/70 hover:text-dawn underline decoration-stone/30 hover:decoration-dawn"
          >
            {a.medicines.label}
          </a>
        </span>
        <span>
          Data protection:{" "}
          <a
            href={a.dpa.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/70 hover:text-dawn underline decoration-stone/30 hover:decoration-dawn"
          >
            {a.dpa.label}
          </a>
        </span>
      </div>
    </div>
  );
}
