import { defineRouting } from "next-intl/routing";

/**
 * Locale routing for circadianstack.com.
 *
 * Twelve locales: English (default, root path) plus German, French, Italian,
 * Spanish, Dutch, Polish, Swedish, Portuguese, Romanian, Czech, and
 * Norwegian Bokmål. Adding a new locale = drop another code into `locales`,
 * add a matching dictionary file in `i18n/dictionaries/<code>.json`, and
 * add an entry to `POST_I18N` plus the `i18n` blocks on `site.ts` /
 * `hubs.ts`.
 *
 * Default locale (`en`) renders at the root path; other locales are
 * prefixed — `/de`, `/de/<slug>`, `/fr/guides/<hub>`. Slugs stay in
 * English for phase one. Translated slugs are a later phase.
 */
export const locales = [
  "en",
  "de",
  "fr",
  "it",
  "es",
  "nl",
  "pl",
  "sv",
  "pt",
  "ro",
  "cs",
  "no",
] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});
