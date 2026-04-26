"use client";

import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { hubs, localizeHub } from "@/lib/content/hubs";
import type { Locale } from "@/i18n/routing";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ReadingProgress } from "./editorial/ReadingProgress";

/**
 * Runrepeat-style header — full-width dark midnight bar, big rounded search
 * input dominating the center, "Stack reviews" + "Protocol guides" nav on
 * the right. Secondary strip carries the editorial disclaimer + pipeline
 * counter + methodology link.
 *
 * - Bar: midnight #0B1929 solid, h-14 md:h-16, full-width, sticky top.
 * - Logo: circadianstack wordmark cream, left.
 * - Search: white rounded input + amber #E6A940 submit button.
 * - Nav: Stack reviews · Protocol guides · LocaleSwitcher.
 * - Mobile: search collapses to magnifying-glass; nav into hamburger.
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const t = useTranslations("header");
  const locale = useLocale() as Locale;

  useEffect(() => {
    if (mobileOpen || mobileSearchOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen, mobileSearchOpen]);

  return (
    <header className="sticky top-0 z-40">
      <ReadingProgress />

      {/* === Main bar === */}
      <div role="banner" className="bg-midnight border-b border-rule">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center gap-3 md:gap-5 h-14 md:h-16">
            {/* LEFT — wordmark */}
            <Link
              href="/"
              aria-label={t("logoAria")}
              className="flex items-center gap-2 shrink-0"
            >
              <Mark />
              <span
                className="text-paper text-lg md:text-xl font-semibold tracking-tight leading-none"
                style={{ fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif' }}
              >
                circadianstack
              </span>
            </Link>

            {/* CENTER — search (desktop) */}
            <form
              role="search"
              action={`/${locale === "en" ? "" : locale}/guides`}
              className="hidden md:flex items-center flex-1 max-w-[640px] mx-auto"
            >
              <label className="relative flex w-full items-stretch">
                <span className="sr-only">{t("searchPlaceholder")}</span>
                <input
                  type="search"
                  name="q"
                  placeholder={t("searchPlaceholder")}
                  className="w-full bg-paper rounded-l-sm text-midnight placeholder:text-slate-deep px-4 h-9 md:h-10 outline-none focus:ring-2 focus:ring-dawn/60"
                  style={{ fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif', fontSize: 14 }}
                />
                <button
                  type="submit"
                  aria-label={t("searchButton")}
                  className="inline-flex items-center justify-center bg-dawn hover:bg-dawn-deep text-midnight rounded-r-sm px-4 h-9 md:h-10 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                  </svg>
                </button>
              </label>
            </form>

            {/* RIGHT — nav (desktop) + locale + mobile triggers */}
            <div className="flex items-center gap-3 md:gap-5 shrink-0 ml-auto md:ml-0">
              {/* Reviews + Guides — desktop */}
              <nav className="hidden md:flex items-center gap-5 text-[14px]">
                <Link
                  href="/guides"
                  className="text-paper/85 hover:text-dawn transition-colors font-medium"
                  style={{ fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif' }}
                >
                  {t("navReviews")}
                </Link>
                <Link
                  href="/guides"
                  className="text-paper/85 hover:text-dawn transition-colors font-medium"
                  style={{ fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif' }}
                >
                  {t("navBuyingGuides")}
                </Link>
              </nav>

              {/* Locale switcher — desktop */}
              <div className="hidden md:inline-flex">
                <LocaleSwitcher />
              </div>

              {/* Mobile search trigger */}
              <button
                onClick={() => setMobileSearchOpen(true)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm text-paper hover:bg-paper/10 transition-colors"
                aria-label={t("searchButton")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
              </button>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm text-paper hover:bg-paper/10 transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === Secondary strip — disclaimer + pipeline + methodology + standards === */}
      <div
        role="note"
        aria-label="Editorial standards strip"
        className="border-b border-rule bg-midnight-raised/85 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
          <div className="flex items-center gap-2 text-[10.5px] md:text-[11px] uppercase tracking-[0.16em] text-slate font-mono">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-dawn" />
            <span>{t("secondaryStrip")}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[10.5px] md:text-[11px] uppercase tracking-[0.16em] text-slate font-mono">
            <Link href="/pipeline" className="hover:text-dawn transition-colors">
              {t("pipelineCount")}
            </Link>
            <span aria-hidden className="text-rule">·</span>
            <Link href="/methodology" className="hover:text-dawn transition-colors">
              {t("methodologyVersion")}
            </Link>
            <span aria-hidden className="text-rule">·</span>
            <Link href="/editorial-standards" className="hover:text-dawn transition-colors">
              {t("editorialStandardsLink")}
            </Link>
          </div>
        </div>
      </div>

      {/* === Mobile search overlay === */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 z-50 bg-midnight md:hidden">
          <div className="flex items-center gap-2 px-4 h-14 border-b border-rule">
            <button
              onClick={() => setMobileSearchOpen(false)}
              aria-label="Close search"
              className="text-paper inline-flex items-center justify-center h-10 w-10 rounded-sm hover:bg-paper/10"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <form
              role="search"
              action={`/${locale === "en" ? "" : locale}/guides`}
              className="flex-1 flex items-stretch"
              onSubmit={() => setMobileSearchOpen(false)}
            >
              <input
                type="search"
                name="q"
                autoFocus
                placeholder={t("searchPlaceholder")}
                className="flex-1 bg-paper text-midnight placeholder:text-slate-deep px-4 h-10 outline-none rounded-l-sm"
                style={{ fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif', fontSize: 14 }}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-dawn text-midnight rounded-r-sm px-4 h-10"
                aria-label={t("searchButton")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* === Mobile drawer === */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-midnight md:hidden overflow-auto">
          <div className="flex items-center justify-between px-5 py-4 border-b border-rule">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
              <Mark />
              <span
                className="text-paper text-xl font-semibold"
                style={{ fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif' }}
              >
                circadianstack
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-paper inline-flex items-center justify-center h-11 w-11 rounded-sm hover:bg-paper/10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-5 py-6 gap-1">
            <div className="text-[11px] uppercase tracking-[0.16em] text-slate mb-3 font-medium font-mono">
              {t("navReviews")} & {t("navBuyingGuides")}
            </div>
            {hubs.map((hub) => {
              const hl = localizeHub(hub, locale);
              return (
                <Link
                  key={hub.slug}
                  href={`/guides/${hub.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="min-h-[48px] py-3 text-lg text-paper flex items-center rounded-sm hover:bg-paper/10 px-2 -mx-2"
                >
                  {hl.name}
                </Link>
              );
            })}
            <div className="text-[11px] uppercase tracking-[0.16em] text-slate mt-6 mb-3 font-medium font-mono">
              {t("masthead")}
            </div>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-paper flex items-center px-2 -mx-2 rounded-sm hover:bg-paper/10">
              {t("navAbout")}
            </Link>
            <Link href="/methodology" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-paper flex items-center px-2 -mx-2 rounded-sm hover:bg-paper/10">
              {t("navMethodology")}
            </Link>
            <Link href="/pipeline" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-paper flex items-center px-2 -mx-2 rounded-sm hover:bg-paper/10">
              {t("navPipeline")}
            </Link>
            <Link href="/editorial-standards" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-paper flex items-center px-2 -mx-2 rounded-sm hover:bg-paper/10">
              {t("navEditorialStandards")}
            </Link>
            <Link href="/newsletter" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-paper flex items-center px-2 -mx-2 rounded-sm hover:bg-paper/10">
              {t("navNewsletter")}
            </Link>
            <div className="mt-6 pt-6 border-t border-rule">
              <LocaleSwitcher onNavigate={() => setMobileOpen(false)} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* === Pieces === */

/**
 * CircadianStack brand mark — amber arc + paper micro-dots, evoking the
 * dawn light hitting an observatory dome.
 */
function Mark() {
  return (
    <svg
      viewBox="0 0 60 60"
      width="26"
      height="26"
      role="img"
      aria-hidden
      className="shrink-0"
    >
      {/* Horizon */}
      <path
        d="M 8 36 L 52 36"
        stroke="#E8E4D9"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Sun arc */}
      <path
        d="M 14 36 A 16 16 0 0 1 46 36"
        fill="none"
        stroke="#E6A940"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Sun core */}
      <circle cx="30" cy="36" r="2.6" fill="#E6A940" />
      {/* Stars (paper) */}
      <circle cx="14" cy="20" r="1.2" fill="#E8E4D9" opacity="0.85" />
      <circle cx="46" cy="16" r="1" fill="#E8E4D9" opacity="0.7" />
      <circle cx="22" cy="12" r="0.9" fill="#E8E4D9" opacity="0.55" />
    </svg>
  );
}
