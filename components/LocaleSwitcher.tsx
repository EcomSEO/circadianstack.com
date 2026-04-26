"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

/**
 * LocaleSwitcher — language picker on the dark midnight bar.
 *
 * Twelve locales is too many for an inline toggle, so this uses a styled
 * native <select> that stays compact, ships zero JS for the menu itself,
 * and keeps native-OS picker UX on mobile. Coloring matches the dark bar
 * (paper/cream text, transparent bg, slate hairline border, amber on focus).
 */
export function LocaleSwitcher({
  onNavigate,
}: {
  onNavigate?: () => void;
} = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const active = useLocale() as Locale;
  const t = useTranslations("localeSwitcher");
  const [isPending, startTransition] = useTransition();

  const handleChange = (next: Locale) => {
    if (next === active) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
      onNavigate?.();
    });
  };

  type ShortKey = (typeof locales)[number];
  const shortKey = (l: Locale) => l as ShortKey;
  const fullKey = (l: Locale) => `${l}Full` as `${ShortKey}Full`;

  return (
    <label
      aria-label={t("label")}
      className="relative inline-flex items-center text-[11px] tracking-[0.14em] uppercase"
      data-pending={isPending ? "true" : undefined}
    >
      <span className="sr-only">{t("label")}</span>
      <select
        value={active}
        onChange={(e) => handleChange(e.target.value as Locale)}
        className="appearance-none bg-transparent border border-paper/30 rounded-sm pl-3 pr-7 py-1 text-paper/90 font-medium cursor-pointer hover:border-dawn/70 focus:outline-none focus:ring-1 focus:ring-dawn/60 transition"
        aria-label={t("label")}
      >
        {locales.map((l) => (
          <option key={l} value={l} lang={l} className="text-paper bg-midnight-raised">
            {t(shortKey(l))} — {t(fullKey(l))}
          </option>
        ))}
      </select>
      <span
        aria-hidden
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-paper/60 text-[9px]"
      >
        ▾
      </span>
    </label>
  );
}
