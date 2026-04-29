import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { IBM_Plex_Sans, IBM_Plex_Mono, IBM_Plex_Serif } from "next/font/google";
import "../globals.css";

/**
 * Per the 2026-04-29 audit-fix sweep: IBM Plex is self-hosted via
 * `next/font/google` so the live site no longer issues runtime requests
 * to `fonts.googleapis.com` / `fonts.gstatic.com`. This eliminates a
 * GDPR exposure (Google receives reader IPs) and improves LCP since
 * fonts are inlined and statically optimised.
 */
const ibmSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-sans",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-ibm-mono",
});

const ibmSerif = IBM_Plex_Serif({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-serif",
});
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Starfield } from "@/components/editorial/Starfield";
import { OrganizationJsonLd } from "@/components/schema/OrganizationJsonLd";
import { SITE, siteTagline, siteDescription } from "@/lib/content/site";
import { robotsMeta, localeUrl } from "@/lib/seo";
import { routing, locales, type Locale } from "@/i18n/routing";

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  it: "it_IT",
  es: "es_ES",
  nl: "nl_NL",
  pl: "pl_PL",
  sv: "sv_SE",
  pt: "pt_PT",
  ro: "ro_RO",
  cs: "cs_CZ",
  no: "no_NO",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1929",
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) return {};
  const locale = raw as Locale;
  const tagline = siteTagline(locale);
  const description = siteDescription(locale);

  // 2026-04-29 lock: hreflang alternates trimmed to en/de/fr/x-default.
  // Other locale routes still resolve (no URL breakage), but only the
  // EN/DE/FR translations are surfaced as hreflang while the chronobiology
  // term-base in cs/no/sv/ro/pl/pt/it doesn't justify the translation
  // cost. Re-evaluate at Gate C.
  const HREFLANG_LOCALES: readonly Locale[] = ["en", "de", "fr"];
  const languages: Record<string, string> = {};
  for (const l of HREFLANG_LOCALES) {
    languages[l] = localeUrl(l, "/");
  }
  languages["x-default"] = localeUrl("en", "/");

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name} — ${tagline}`,
      template: `%s — ${SITE.name}`,
    },
    description,
    alternates: {
      canonical: localeUrl(locale, "/"),
      languages,
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: OG_LOCALE[locale],
      alternateLocale: HREFLANG_LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
    },
    twitter: { card: "summary_large_image" },
    robots: robotsMeta(),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) {
    notFound();
  }
  const locale = raw as Locale;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${ibmSans.variable} ${ibmMono.variable} ${ibmSerif.variable}`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <OrganizationJsonLd />
          <Starfield />
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
