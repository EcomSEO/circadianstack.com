import type { Locale } from "@/i18n/routing";

export type HubI18n = {
  name: string;
  shortName: string;
  oneLiner: string;
  thesis: string;
};

export type Hub = HubI18n & {
  slug: string;
  i18n?: Partial<Record<Locale, HubI18n>>;
};

export const hubs: Hub[] = [
  {
    slug: "light-and-zeitgebers",
    name: "Light & Zeitgebers",
    shortName: "Light",
    oneLiner:
      "Morning sunlight, lux dose, blue light, red light, dawn simulators — with the research.",
    thesis:
      "Light is the primary circadian zeitgeber. Dose, timing, wavelength, and the buying guides for tools that deliver the right light at the right time.",
    i18n: {
      de: {
        name: "Licht & Zeitgeber",
        shortName: "Licht",
        oneLiner:
          "Morgensonne, Lux-Dosis, Blaulicht, Rotlicht, Tageslichtwecker — mit der Studienlage.",
        thesis:
          "Licht ist der wichtigste Zeitgeber. Dosis, Timing, Wellenlänge — und die Kaufberatung für Geräte, die die richtige Lichtdosis zur richtigen Zeit liefern.",
      },
      fr: {
        name: "Lumière & zeitgebers",
        shortName: "Lumière",
        oneLiner:
          "Lumière matinale, dose de lux, lumière bleue, rouge, simulateurs d'aube — avec la recherche.",
        thesis:
          "La lumière est le zeitgeber circadien principal. Dose, timing, longueur d'onde, et les guides d'achat des outils qui délivrent la bonne lumière au bon moment.",
      },
      it: {
        name: "Luce & zeitgeber",
        shortName: "Luce",
        oneLiner:
          "Luce mattutina, dose in lux, luce blu, rossa, simulatori di alba — con i dati.",
        thesis:
          "La luce è il principale zeitgeber circadiano. Dose, tempi, lunghezza d'onda — e le guide all'acquisto degli strumenti che la portano nel momento giusto.",
      },
      es: {
        name: "Luz y zeitgebers",
        shortName: "Luz",
        oneLiner:
          "Luz matinal, dosis de lux, luz azul, roja, simuladores de amanecer — con la investigación.",
        thesis:
          "La luz es el principal zeitgeber circadiano. Dosis, momento, longitud de onda — y las guías de compra de herramientas que entregan la luz correcta en el momento correcto.",
      },
      nl: {
        name: "Licht & zeitgebers",
        shortName: "Licht",
        oneLiner:
          "Ochtendlicht, lux-dosis, blauw licht, rood licht, dageraadsimulatoren — met het onderzoek.",
        thesis:
          "Licht is de eerste circadiane zeitgeber. Dosis, timing, golflengte — en koopgidsen voor apparaten die het juiste licht op het juiste moment geven.",
      },
      pl: {
        name: "Światło i zeitgebery",
        shortName: "Światło",
        oneLiner:
          "Poranne słońce, dawka luksów, niebieskie, czerwone światło, symulatory świtu — z badaniami.",
        thesis:
          "Światło to główny zeitgeber dobowy. Dawka, czas, długość fali — oraz przewodniki zakupowe po narzędziach, które dostarczają odpowiednie światło o właściwej porze.",
      },
      sv: {
        name: "Ljus & zeitgebers",
        shortName: "Ljus",
        oneLiner:
          "Morgonljus, luxdos, blått ljus, rött ljus, soluppgångs-simulatorer — med forskningen.",
        thesis:
          "Ljuset är den främsta dygnsklocksställaren. Dos, timing, våglängd — och köpguiderna till verktyg som levererar rätt ljus vid rätt tid.",
      },
      pt: {
        name: "Luz e zeitgebers",
        shortName: "Luz",
        oneLiner:
          "Luz matinal, dose de lux, luz azul, vermelha, simuladores de amanhecer — com a investigação.",
        thesis:
          "A luz é o principal zeitgeber circadiano. Dose, momento, comprimento de onda — e os guias de compra das ferramentas que entregam a luz certa na altura certa.",
      },
      ro: {
        name: "Lumină și zeitgeberi",
        shortName: "Lumină",
        oneLiner:
          "Soare de dimineață, doză de lux, lumină albastră, roșie, simulatoare de răsărit — cu cercetarea.",
        thesis:
          "Lumina este principalul zeitgeber circadian. Doză, sincronizare, lungime de undă — și ghidurile pentru instrumentele care livrează lumina potrivită la momentul potrivit.",
      },
      cs: {
        name: "Světlo a zeitgebery",
        shortName: "Světlo",
        oneLiner:
          "Ranní slunce, dávka v luxech, modré, červené světlo, simulátory svítání — s výzkumem.",
        thesis:
          "Světlo je hlavní cirkadiánní zeitgeber. Dávka, načasování, vlnová délka — a nákupní průvodci k nástrojům, které dodají správné světlo ve správný čas.",
      },
      no: {
        name: "Lys & zeitgebere",
        shortName: "Lys",
        oneLiner:
          "Morgensol, luxdose, blått lys, rødt lys, soloppgangs-simulatorer — med forskningen.",
        thesis:
          "Lys er den fremste døgnrytme-stilleren. Dose, timing, bølgelengde — og kjøpsguidene til verktøyene som leverer riktig lys til rett tid.",
      },
    },
  },
  {
    slug: "sleep-architecture",
    name: "Sleep Architecture",
    shortName: "Sleep",
    oneLiner:
      "Stages, cycles, sleep debt, napping protocols, why you wake at 3am.",
    thesis:
      "Sleep isn't a monolith. Architecture, timing, duration, and consistency are separable variables. Protocols target specific problems.",
    i18n: {
      de: {
        name: "Schlafarchitektur",
        shortName: "Schlaf",
        oneLiner:
          "Stadien, Zyklen, Schlafschuld, Nickerchen-Protokolle, warum man um 3 Uhr aufwacht.",
        thesis:
          "Schlaf ist kein Monolith. Architektur, Timing, Dauer und Konstanz sind getrennte Variablen. Protokolle zielen auf konkrete Probleme.",
      },
      fr: {
        name: "Architecture du sommeil",
        shortName: "Sommeil",
        oneLiner:
          "Stades, cycles, dette de sommeil, sieste, pourquoi on se réveille à 3 heures.",
        thesis:
          "Le sommeil n'est pas un monolithe. Architecture, timing, durée et régularité sont des variables séparables. Les protocoles ciblent des problèmes précis.",
      },
      it: {
        name: "Architettura del sonno",
        shortName: "Sonno",
        oneLiner:
          "Stadi, cicli, debito di sonno, sonnellini, perché ci si sveglia alle 3 di notte.",
        thesis:
          "Il sonno non è un monolite. Architettura, tempi, durata e costanza sono variabili separate. I protocolli puntano a problemi specifici.",
      },
      es: {
        name: "Arquitectura del sueño",
        shortName: "Sueño",
        oneLiner:
          "Fases, ciclos, deuda de sueño, siestas, por qué se despierta a las 3.",
        thesis:
          "El sueño no es un monolito. Arquitectura, momento, duración y constancia son variables separables. Los protocolos atacan problemas concretos.",
      },
      nl: {
        name: "Slaaparchitectuur",
        shortName: "Slaap",
        oneLiner:
          "Stadia, cycli, slaapschuld, dutprotocollen, waarom u om 3 uur wakker wordt.",
        thesis:
          "Slaap is geen monoliet. Architectuur, timing, duur en regelmaat zijn los te bekijken. Protocollen richten zich op concrete problemen.",
      },
      pl: {
        name: "Architektura snu",
        shortName: "Sen",
        oneLiner:
          "Fazy, cykle, dług snu, protokoły drzemek, dlaczego budzisz się o 3 nad ranem.",
        thesis:
          "Sen to nie monolit. Architektura, czas, długość i regularność są osobnymi zmiennymi. Protokoły celują w konkretne problemy.",
      },
      sv: {
        name: "Sömnens arkitektur",
        shortName: "Sömn",
        oneLiner:
          "Stadier, cykler, sömnskuld, tupp-protokoll, varför du vaknar klockan 3.",
        thesis:
          "Sömn är inte en monolit. Arkitektur, timing, längd och regelbundenhet är åtskilda variabler. Protokollen siktar på konkreta problem.",
      },
      pt: {
        name: "Arquitetura do sono",
        shortName: "Sono",
        oneLiner:
          "Estádios, ciclos, dívida de sono, protocolos de sesta, por que acorda às 3 da manhã.",
        thesis:
          "O sono não é um monólito. Arquitetura, momento, duração e regularidade são variáveis separáveis. Os protocolos atacam problemas concretos.",
      },
      ro: {
        name: "Arhitectura somnului",
        shortName: "Somn",
        oneLiner:
          "Stadii, cicluri, datoria de somn, protocoale de pui de somn, de ce te trezești la 3 noaptea.",
        thesis:
          "Somnul nu e un monolit. Arhitectura, momentul, durata și regularitatea sunt variabile separate. Protocoalele țintesc probleme concrete.",
      },
      cs: {
        name: "Architektura spánku",
        shortName: "Spánek",
        oneLiner:
          "Fáze, cykly, spánkový dluh, protokoly šlofíků, proč se budíte ve 3 ráno.",
        thesis:
          "Spánek není monolit. Architektura, načasování, délka a pravidelnost jsou oddělitelné proměnné. Protokoly míří na konkrétní problémy.",
      },
      no: {
        name: "Søvnens arkitektur",
        shortName: "Søvn",
        oneLiner:
          "Stadier, sykluser, søvngjeld, lur-protokoller, hvorfor du våkner klokka 3.",
        thesis:
          "Søvn er ikke en monolitt. Arkitektur, timing, varighet og regelmessighet er egne variabler. Protokollene tar tak i konkrete problemer.",
      },
    },
  },
  {
    slug: "chronotype",
    name: "Chronotype & Personalization",
    shortName: "Chronotype",
    oneLiner:
      "Not everyone has the same circadian phase. Protocols that assume 7am wake time fail for late chronotypes.",
    thesis:
      "Handle personalization with the Chronotype Quiz (MCTQ-short) and personalized Protocol cards.",
    i18n: {
      de: {
        name: "Chronotyp & Personalisierung",
        shortName: "Chronotyp",
        oneLiner:
          "Nicht jeder hat dieselbe Schlafphase. Protokolle, die 7 Uhr Aufwachzeit voraussetzen, scheitern bei Spät-Chronotypen.",
        thesis:
          "Personalisierung läuft über den Chronotyp-Test (MCTQ-Kurz) und personalisierte Protokoll-Karten.",
      },
      fr: {
        name: "Chronotype & personnalisation",
        shortName: "Chronotype",
        oneLiner:
          "Tout le monde n'a pas la même phase circadienne. Les protocoles qui supposent un réveil à 7 heures échouent chez les chronotypes tardifs.",
        thesis:
          "La personnalisation passe par le test de chronotype (MCTQ-court) et des fiches protocole sur mesure.",
      },
      it: {
        name: "Cronotipo & personalizzazione",
        shortName: "Cronotipo",
        oneLiner:
          "Non tutti hanno la stessa fase circadiana. I protocolli che presumono sveglia alle 7 falliscono con i cronotipi tardivi.",
        thesis:
          "La personalizzazione passa dal test del cronotipo (MCTQ-short) e da schede protocollo su misura.",
      },
      es: {
        name: "Cronotipo y personalización",
        shortName: "Cronotipo",
        oneLiner:
          "No todos tienen la misma fase circadiana. Los protocolos que asumen despertar a las 7 fallan con cronotipos tardíos.",
        thesis:
          "La personalización va por el test de cronotipo (MCTQ-corto) y fichas de protocolo a medida.",
      },
      nl: {
        name: "Chronotype & personalisatie",
        shortName: "Chronotype",
        oneLiner:
          "Niet iedereen heeft dezelfde circadiane fase. Protocollen die om 7 uur opstaan veronderstellen falen bij late chronotypes.",
        thesis:
          "Personalisatie loopt via de chronotype-test (MCTQ-kort) en op maat gemaakte protocolkaarten.",
      },
      pl: {
        name: "Chronotyp i personalizacja",
        shortName: "Chronotyp",
        oneLiner:
          "Nie wszyscy mają tę samą fazę dobową. Protokoły zakładające pobudkę o 7 zawodzą u późnych chronotypów.",
        thesis:
          "Personalizacja przechodzi przez test chronotypu (MCTQ-krótki) i spersonalizowane karty protokołów.",
      },
      sv: {
        name: "Kronotyp & personalisering",
        shortName: "Kronotyp",
        oneLiner:
          "Alla har inte samma dygnsfas. Protokoll som utgår från att vakna 07 funkar inte för sena kronotyper.",
        thesis:
          "Personalisering sker via kronotyp-testet (MCTQ-short) och personaliserade protokollkort.",
      },
      pt: {
        name: "Cronotipo e personalização",
        shortName: "Cronotipo",
        oneLiner:
          "Nem todos têm a mesma fase circadiana. Protocolos que assumem despertar às 7 falham com cronotipos tardios.",
        thesis:
          "A personalização passa pelo teste de cronotipo (MCTQ-curto) e por cartões de protocolo adaptados.",
      },
      ro: {
        name: "Cronotip și personalizare",
        shortName: "Cronotip",
        oneLiner:
          "Nu toată lumea are aceeași fază circadiană. Protocoalele care presupun trezirea la 7 dau greș la cronotipurile târzii.",
        thesis:
          "Personalizarea trece prin testul de cronotip (MCTQ-scurt) și prin fișe de protocol pe măsură.",
      },
      cs: {
        name: "Chronotyp a personalizace",
        shortName: "Chronotyp",
        oneLiner:
          "Ne každý má stejnou fázi cirkadiánu. Protokoly počítající s buzením v 7 selhávají u pozdních chronotypů.",
        thesis:
          "Personalizace jde přes test chronotypu (MCTQ-krátký) a personalizované karty protokolů.",
      },
      no: {
        name: "Kronotype og personalisering",
        shortName: "Kronotype",
        oneLiner:
          "Ikke alle har samme døgnfase. Protokoller som forutsetter at man våkner kl. 7 svikter for sene kronotyper.",
        thesis:
          "Personaliseringen går via kronotype-testen (MCTQ-kort) og personaliserte protokollkort.",
      },
    },
  },
  {
    slug: "interventions-and-tools",
    name: "Interventions & Tools",
    shortName: "Tools",
    oneLiner:
      "Light therapy lamps, sleep masks, sunrise alarms, blue-blockers, trackers — all dose-tested.",
    thesis:
      "The commercial hub. Every product reviewed shows the actual dose it delivers (lux at distance, measured).",
    i18n: {
      de: {
        name: "Werkzeuge & Geräte",
        shortName: "Werkzeuge",
        oneLiner:
          "Lichttherapielampen, Schlafmasken, Tageslichtwecker, Blaulicht-Filter, Tracker — alle dosismessgenau geprüft.",
        thesis:
          "Der kommerzielle Bereich. Jedes Produkt zeigt die tatsächlich gemessene Dosis (Lux im realistischen Abstand).",
      },
      fr: {
        name: "Outils & dispositifs",
        shortName: "Outils",
        oneLiner:
          "Lampes de luminothérapie, masques, simulateurs d'aube, lunettes filtrantes, trackers — tous mesurés à la dose.",
        thesis:
          "La rubrique commerciale. Chaque produit affiche la dose réellement délivrée (lux à la distance d'usage, mesuré).",
      },
      it: {
        name: "Strumenti & dispositivi",
        shortName: "Strumenti",
        oneLiner:
          "Lampade per fototerapia, mascherine, sveglie con alba, lenti blue-blocker, tracker — tutti testati alla dose.",
        thesis:
          "La sezione commerciale. Ogni prodotto mostra la dose effettiva erogata (lux a distanza, misurati).",
      },
      es: {
        name: "Herramientas y dispositivos",
        shortName: "Herramientas",
        oneLiner:
          "Lámparas de luminoterapia, antifaces, despertadores con amanecer, gafas filtrantes, trackers — todos medidos a la dosis.",
        thesis:
          "La sección comercial. Cada producto muestra la dosis real entregada (lux a distancia, medida).",
      },
      nl: {
        name: "Tools & apparaten",
        shortName: "Tools",
        oneLiner:
          "Lichttherapielampen, slaapmaskers, wake-up lights, bluelight-blockers, trackers — allemaal op dosis getest.",
        thesis:
          "De commerciële rubriek. Elk product toont de werkelijke dosis (lux op afstand, gemeten).",
      },
      pl: {
        name: "Narzędzia i sprzęt",
        shortName: "Narzędzia",
        oneLiner:
          "Lampy fototerapeutyczne, maski, budziki ze świtem, okulary blue-blocker, trackery — każdy zmierzony.",
        thesis:
          "Dział komercyjny. Każdy produkt pokazuje rzeczywistą dawkę (luksy z odległości, zmierzone).",
      },
      sv: {
        name: "Verktyg & utrustning",
        shortName: "Verktyg",
        oneLiner:
          "Ljusterapilampor, sömnmasker, soluppgångsväckare, bluelight-blockers, trackers — alla dostestade.",
        thesis:
          "Den kommersiella avdelningen. Varje produkt visar den verkliga dosen (lux på avstånd, uppmätt).",
      },
      pt: {
        name: "Ferramentas e equipamento",
        shortName: "Ferramentas",
        oneLiner:
          "Lâmpadas de luminoterapia, máscaras, despertadores com amanhecer, óculos blue-blocker, trackers — todos medidos.",
        thesis:
          "A secção comercial. Cada produto mostra a dose real entregue (lux à distância, medido).",
      },
      ro: {
        name: "Instrumente și dispozitive",
        shortName: "Instrumente",
        oneLiner:
          "Lămpi de fototerapie, măști, ceasuri cu răsărit, ochelari blue-blocker, trackere — toate măsurate.",
        thesis:
          "Secțiunea comercială. Fiecare produs arată doza reală livrată (lux la distanță, măsurat).",
      },
      cs: {
        name: "Nástroje a zařízení",
        shortName: "Nástroje",
        oneLiner:
          "Lampy pro fototerapii, masky, budíky se simulací svítání, blue-blockery, trackery — vše proměřeno.",
        thesis:
          "Komerční sekce. Každý produkt ukazuje skutečnou dávku (luxy ze vzdálenosti, naměřené).",
      },
      no: {
        name: "Verktøy & utstyr",
        shortName: "Verktøy",
        oneLiner:
          "Lysterapilamper, søvnmasker, soloppgangs-vekkere, blueblock-briller, trackere — alle dosetestet.",
        thesis:
          "Kommersiell avdeling. Hvert produkt viser den faktiske dosen (lux på avstand, målt).",
      },
    },
  },
  {
    slug: "edge-cases",
    name: "Edge Cases",
    shortName: "Edge Cases",
    oneLiner:
      "Jet lag, shift work, parenthood, perimenopause, ADHD — where generic advice fails.",
    thesis:
      "Bespoke protocols for specific contexts where generic circadian advice doesn't work.",
    i18n: {
      de: {
        name: "Sonderfälle",
        shortName: "Sonderfälle",
        oneLiner:
          "Jetlag, Schichtarbeit, Eltern­alltag, Perimenopause, ADHS — wo generische Tipps versagen.",
        thesis:
          "Maßgeschneiderte Protokolle für Situationen, in denen pauschale Circadian-Tipps nicht funktionieren.",
      },
      fr: {
        name: "Cas particuliers",
        shortName: "Cas particuliers",
        oneLiner:
          "Décalage horaire, travail posté, parentalité, périménopause, TDAH — là où les conseils génériques échouent.",
        thesis:
          "Des protocoles taillés pour les contextes où les conseils circadiens génériques ne fonctionnent pas.",
      },
      it: {
        name: "Casi limite",
        shortName: "Casi limite",
        oneLiner:
          "Jet lag, lavoro a turni, genitorialità, perimenopausa, ADHD — dove i consigli generici non bastano.",
        thesis:
          "Protocolli su misura per contesti in cui i consigli circadiani generici non funzionano.",
      },
      es: {
        name: "Casos límite",
        shortName: "Casos límite",
        oneLiner:
          "Jet lag, trabajo por turnos, paternidad, perimenopausia, TDAH — donde los consejos genéricos fallan.",
        thesis:
          "Protocolos a medida para contextos donde los consejos circadianos generales no funcionan.",
      },
      nl: {
        name: "Randgevallen",
        shortName: "Randgevallen",
        oneLiner:
          "Jetlag, ploegendienst, ouderschap, perimenopauze, ADHD — waar generiek advies sneuvelt.",
        thesis:
          "Protocollen op maat voor situaties waarin algemene circadiane adviezen niet werken.",
      },
      pl: {
        name: "Przypadki graniczne",
        shortName: "Przypadki graniczne",
        oneLiner:
          "Jet lag, praca zmianowa, rodzicielstwo, perimenopauza, ADHD — tam, gdzie ogólne porady zawodzą.",
        thesis:
          "Protokoły szyte na miarę kontekstów, w których ogólne porady dobowe nie działają.",
      },
      sv: {
        name: "Specialfall",
        shortName: "Specialfall",
        oneLiner:
          "Jetlag, skiftarbete, föräldraskap, perimenopaus, ADHD — där generiska råd inte räcker.",
        thesis:
          "Skräddarsydda protokoll för sammanhang där generiska dygnsråd inte fungerar.",
      },
      pt: {
        name: "Casos-limite",
        shortName: "Casos-limite",
        oneLiner:
          "Jet lag, trabalho por turnos, parentalidade, perimenopausa, PHDA — onde os conselhos genéricos falham.",
        thesis:
          "Protocolos à medida para contextos em que os conselhos circadianos genéricos não funcionam.",
      },
      ro: {
        name: "Cazuri-limită",
        shortName: "Cazuri-limită",
        oneLiner:
          "Jet lag, muncă în ture, parenting, perimenopauză, ADHD — acolo unde sfaturile generice eșuează.",
        thesis:
          "Protocoale făcute pe măsură pentru contextele în care sfaturile circadiene generice nu funcționează.",
      },
      cs: {
        name: "Hraniční případy",
        shortName: "Hraniční případy",
        oneLiner:
          "Jetlag, směnný provoz, rodičovství, perimenopauza, ADHD — kde obecné rady selhávají.",
        thesis:
          "Protokoly šité na míru kontextům, v nichž obecné cirkadiánní rady nefungují.",
      },
      no: {
        name: "Spesialtilfeller",
        shortName: "Spesialtilfeller",
        oneLiner:
          "Jetlag, skiftarbeid, foreldreskap, perimenopause, ADHD — der generiske råd ikke holder.",
        thesis:
          "Skreddersydde protokoller for situasjoner der generiske døgnråd ikke fungerer.",
      },
    },
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}

/**
 * Resolve hub display strings for a given locale, with English fallback.
 */
export function localizeHub(hub: Hub, locale: Locale): HubI18n {
  const tr = hub.i18n?.[locale];
  if (!tr) {
    return {
      name: hub.name,
      shortName: hub.shortName,
      oneLiner: hub.oneLiner,
      thesis: hub.thesis,
    };
  }
  return tr;
}
