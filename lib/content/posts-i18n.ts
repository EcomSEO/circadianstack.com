import type { Locale } from "@/i18n/routing";

/**
 * Translated metadata (title + h1 + description) per post.
 *
 * Phase one ships English copy plus native-register translations for the
 * other eleven supported locales. Body content (faq, products, items,
 * sources) stays in English; non-English locales render the
 * `TranslationPendingBanner` above the article body to signal that the
 * full body translation is in progress.
 *
 * Slugs stay in English. Translated slugs are a later phase.
 */
export type LocalePost = {
  title?: string;
  h1?: string;
  description?: string;
};

export type PostI18n = Partial<Record<Locale, LocalePost>>;

/**
 * Per-slug translations. Add entries as posts get translated. Missing keys
 * fall back to English.
 */
export const POST_I18N: Record<string, PostI18n> = {
  "morning-sunlight-protocol": {
    de: {
      title: "Morgensonne-Protokoll — Dosis, Timing, Wellenlänge",
      h1: "Morgensonne — wie lange, wie hell",
      description:
        "Eine Protokoll-Karte mit Lux × Minuten als Dosis, dem 60-Minuten-Fenster und den Zitaten zur Phasen-Reaktions-Kurve.",
    },
    fr: {
      title: "Protocole lumière matinale — dose, timing, longueur d'onde",
      h1: "Lumière matinale — combien de temps, à quelle intensité",
      description:
        "Une fiche protocole avec la dose en lux × minutes, la fenêtre de 60 minutes et les citations de la courbe de phase.",
    },
    it: {
      title: "Protocollo luce mattutina — dose, tempi, lunghezza d'onda",
      h1: "Luce mattutina — quanto a lungo, quanto intensa",
      description:
        "Una scheda protocollo con la dose in lux × minuti, la finestra di 60 minuti e le citazioni della curva di fase.",
    },
    es: {
      title: "Protocolo de luz matinal — dosis, momento, longitud de onda",
      h1: "Luz matinal — cuánto tiempo, qué intensidad",
      description:
        "Una ficha de protocolo con la dosis en lux × minutos, la ventana de 60 minutos y las citas de la curva de fase.",
    },
    nl: {
      title: "Ochtendlicht-protocol — dosis, timing, golflengte",
      h1: "Ochtendlicht — hoe lang, hoe fel",
      description:
        "Een protocolkaart met de lux × minuten-dosis, het 60-minuten-venster en de fasecurve-citaten.",
    },
    pl: {
      title: "Protokół porannego światła — dawka, czas, długość fali",
      h1: "Poranne światło — jak długo, jak jasno",
      description:
        "Karta protokołu z dawką w luksach × minutach, oknem 60 minut i cytatami z krzywej reakcji fazowej.",
    },
    sv: {
      title: "Morgonljus-protokoll — dos, timing, våglängd",
      h1: "Morgonljus — hur länge, hur starkt",
      description:
        "Ett protokollkort med dosen i lux × minuter, 60-minutersfönstret och citaten från fasrespons-kurvan.",
    },
    pt: {
      title: "Protocolo de luz matinal — dose, tempo, comprimento de onda",
      h1: "Luz matinal — quanto tempo, com que intensidade",
      description:
        "Um cartão de protocolo com a dose em lux × minutos, a janela de 60 minutos e as citações da curva de fase.",
    },
    ro: {
      title: "Protocol lumina dimineții — doză, timp, lungime de undă",
      h1: "Lumina dimineții — cât de mult, cât de puternic",
      description:
        "O fișă de protocol cu doza în lux × minute, fereastra de 60 de minute și citările curbei de fază.",
    },
    cs: {
      title: "Protokol ranní slunce — dávka, načasování, vlnová délka",
      h1: "Ranní slunce — jak dlouho, jak silné",
      description:
        "Karta protokolu s dávkou v luxech × minutách, oknem 60 minut a citacemi křivky fázové odezvy.",
    },
    no: {
      title: "Morgensol-protokoll — dose, timing, bølgelengde",
      h1: "Morgensol — hvor lenge, hvor sterkt",
      description:
        "Et protokollkort med dosen i lux × minutter, 60-minutters-vinduet og siteringene fra fasekurven.",
    },
  },
  "best-light-therapy-lamps-2026": {
    de: {
      title: "Beste Lichttherapie-Lampen 2026 — dosismessgenau geprüft",
      h1: "Beste Lichttherapie-Lampen 2026",
      description:
        "Lichttherapie-Lampen, gerankt nach gemessenen Lux bei 12, 18 und 24 Zoll Abstand — nicht nach Werbeangaben. Mit $/gemessenem Lux.",
    },
    fr: {
      title: "Meilleures lampes de luminothérapie 2026 — testées à la dose",
      h1: "Meilleures lampes de luminothérapie 2026",
      description:
        "Lampes classées d'après les lux mesurés à 12, 18 et 24 pouces — pas d'après les fiches commerciales. Avec coût par lux mesuré.",
    },
    it: {
      title: "Le migliori lampade per fototerapia 2026 — testate alla dose",
      h1: "Le migliori lampade per fototerapia 2026",
      description:
        "Lampade in classifica per i lux misurati a 12, 18 e 24 pollici — non per le promesse di marketing. Con $/lux misurato.",
    },
    es: {
      title: "Mejores lámparas de luminoterapia 2026 — probadas a la dosis",
      h1: "Mejores lámparas de luminoterapia 2026",
      description:
        "Lámparas clasificadas por los lux medidos a 12, 18 y 24 pulgadas — no por la ficha comercial. Con $/lux medido.",
    },
    nl: {
      title: "Beste lichttherapielampen 2026 — op dosis getest",
      h1: "Beste lichttherapielampen 2026",
      description:
        "Lampen geordend op gemeten lux bij 12, 18 en 24 inch — niet op marketingclaims. Met $/gemeten lux.",
    },
    pl: {
      title: "Najlepsze lampy fototerapeutyczne 2026 — z pomiarem dawki",
      h1: "Najlepsze lampy fototerapeutyczne 2026",
      description:
        "Lampy uszeregowane według zmierzonych luksów na 12, 18 i 24 calach — nie według deklaracji marketingowych. Z kosztem na zmierzony luks.",
    },
    sv: {
      title: "Bästa ljusterapilampor 2026 — dostestade",
      h1: "Bästa ljusterapilampor 2026",
      description:
        "Lampor rankade efter uppmätt lux på 12, 18 och 24 tum — inte efter broschyrtext. Med $/uppmätt lux.",
    },
    pt: {
      title: "Melhores lâmpadas de luminoterapia 2026 — testadas à dose",
      h1: "Melhores lâmpadas de luminoterapia 2026",
      description:
        "Lâmpadas ordenadas pelo lux medido a 12, 18 e 24 polegadas — não pelo prospecto. Com $/lux medido.",
    },
    ro: {
      title: "Cele mai bune lămpi de fototerapie 2026 — testate la doză",
      h1: "Cele mai bune lămpi de fototerapie 2026",
      description:
        "Lămpi clasate după lux măsurat la 12, 18 și 24 de țoli — nu după pliant. Cu $/lux măsurat.",
    },
    cs: {
      title: "Nejlepší lampy pro fototerapii 2026 — měřená dávka",
      h1: "Nejlepší lampy pro fototerapii 2026",
      description:
        "Lampy seřazené podle naměřených luxů na 12, 18 a 24 palcích — ne podle marketingu. S cenou na naměřený lux.",
    },
    no: {
      title: "Beste lysterapilamper 2026 — dosetestet",
      h1: "Beste lysterapilamper 2026",
      description:
        "Lamper rangert etter målt lux på 12, 18 og 24 tommer — ikke etter brosjyren. Med $/målt lux.",
    },
  },
};

/**
 * Resolve a per-locale title/h1/description with English fallback.
 */
export function localizePost(
  slug: string,
  locale: Locale,
  fallback: { title: string; h1: string; description: string }
): { title: string; h1: string; description: string } {
  const tr = POST_I18N[slug]?.[locale];
  if (!tr) return fallback;
  return {
    title: tr.title ?? fallback.title,
    h1: tr.h1 ?? fallback.h1,
    description: tr.description ?? fallback.description,
  };
}
