import type { Locale } from "@/i18n/routing";

/**
 * Site-level constants for circadianstack.com. The `launched` flag drives
 * the pre-launch noindex defaults in `lib/seo.ts` and `app/robots.ts`.
 *
 * `i18n` carries native-register copy for the masthead tagline and the
 * meta description in every supported locale. Voice target stays the same
 * across languages — lab-notebook precise, dose-accurate, chronobiology
 * literate, no Huberman-hype, no commercial bias — but each translation
 * reads as if a native science journalist at a respected outlet wrote it.
 */
export const SITE = {
  name: "CircadianStack",
  url: "https://circadianstack.com",
  tagline: "The science of when.",
  shortTagline: "Protocols, not vibes.",
  description:
    "Protocol cards, cited research, and dose-accurate reviews — for morning light, sleep architecture, chronotype, and every other lever that resets a circadian clock.",
  author: "The CircadianStack Team",
  email: "hello@circadianstack.com",
  launched: true,

  // Editorial masthead — lab-notebook framing
  volume: "Vol. 01",
  issue: "Issue No. 01",
  issueTitle: "The Launch Edition",
  protocolLogPrefix: "Protocol Log",

  i18n: {
    en: {
      tagline: "The science of when.",
      description:
        "Protocol cards, cited research, and dose-accurate reviews — for morning light, sleep architecture, chronotype, and every other lever that resets a circadian clock.",
    },
    de: {
      tagline: "Die Wissenschaft des Wann.",
      description:
        "Protokoll-Karten, belegte Forschung und dosismessgenaue Reviews — für Morgenlicht, Schlafarchitektur, Chronotyp und jeden anderen Hebel, der die innere Uhr neu stellt.",
    },
    fr: {
      tagline: "La science du quand.",
      description:
        "Fiches protocole, recherche sourcée et tests dosés — pour la lumière matinale, l'architecture du sommeil, le chronotype et tous les autres leviers qui recalent une horloge circadienne.",
    },
    it: {
      tagline: "La scienza del quando.",
      description:
        "Schede protocollo, ricerca documentata e test dosati — per la luce mattutina, l'architettura del sonno, il cronotipo e ogni altra leva che ricalibra l'orologio circadiano.",
    },
    es: {
      tagline: "La ciencia del cuándo.",
      description:
        "Fichas de protocolo, investigación citada y pruebas con dosis — para la luz matinal, la arquitectura del sueño, el cronotipo y cualquier otra palanca que reajuste un reloj circadiano.",
    },
    nl: {
      tagline: "De wetenschap van wanneer.",
      description:
        "Protocolkaarten, onderbouwd onderzoek en dosisnauwkeurige reviews — voor ochtendlicht, slaaparchitectuur, chronotype en elke andere hefboom die een circadiane klok bijstelt.",
    },
    pl: {
      tagline: "Nauka „kiedy”.",
      description:
        "Karty protokołów, udokumentowane badania i precyzyjne pomiary dawek — dla porannego światła, architektury snu, chronotypu i każdej innej dźwigni, która resetuje zegar dobowy.",
    },
    sv: {
      tagline: "Vetenskapen om när.",
      description:
        "Protokollkort, källbelagd forskning och dosnoga tester — för morgonljus, sömnens arkitektur, kronotyp och varje annan spak som ställer om en dygnsklocka.",
    },
    pt: {
      tagline: "A ciência do quando.",
      description:
        "Cartões de protocolo, investigação citada e análises com dose precisa — para a luz da manhã, a arquitetura do sono, o cronotipo e qualquer outra alavanca que ajusta o relógio circadiano.",
    },
    ro: {
      tagline: "Știința lui când.",
      description:
        "Fișe de protocol, cercetare cu surse și măsurători de doză precise — pentru lumina dimineții, arhitectura somnului, cronotip și orice altă pârghie care recalibrează ceasul circadian.",
    },
    cs: {
      tagline: "Věda o tom kdy.",
      description:
        "Karty protokolů, citovaný výzkum a recenze s přesnými dávkami — pro ranní světlo, architekturu spánku, chronotyp a každou další páku, která přestavuje cirkadiánní hodiny.",
    },
    no: {
      tagline: "Vitenskapen om når.",
      description:
        "Protokollkort, kildebelagt forskning og dosenøyaktige tester — for morgenlys, søvnens arkitektur, kronotype og hver annen spak som stiller om døgnrytmen.",
    },
  } satisfies Record<Locale, { tagline: string; description: string }>,
} as const;

export function siteTagline(locale: Locale): string {
  return SITE.i18n[locale]?.tagline ?? SITE.tagline;
}

export function siteDescription(locale: Locale): string {
  return SITE.i18n[locale]?.description ?? SITE.description;
}
