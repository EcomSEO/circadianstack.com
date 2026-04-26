"use client";

import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { hubs, localizeHub } from "@/lib/content/hubs";
import type { Locale } from "@/i18n/routing";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ReadingProgress } from "./editorial/ReadingProgress";

/**
 * Lab-notebook header — left-aligned wordmark, monospace status indicator,
 * thin nav (Stacks · Levers · Phases · Methodology · Pipeline). Search is
 * an icon that expands to an overlay; never the page-dominating rounded
 * input. The secondary strip carries a Bloomberg-Terminal-style status
 * line: version · protocol count · last-updated date.
 *
 * What we deleted: the centered runrepeat search input, the "Stack reviews
 * / Protocol guides" generic copywriting, the rounded amber submit button
 * sitting in the middle of the page.
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const t = useTranslations("header");
  const locale = useLocale() as Locale;

  useEffect(() => {
    if (mobileOpen || searchOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  return (
    <header className="sticky top-0 z-40">
      <ReadingProgress />

      {/* === Status strip — Bloomberg-style line; sits ABOVE the main bar === */}
      <div
        role="note"
        aria-label="Lab-notebook status line"
        className="bg-midnight-deep border-b border-rule"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 h-7 flex items-center justify-between gap-3 overflow-x-auto">
          <div className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate whitespace-nowrap">
            <span aria-hidden className="signal-lost !w-1.5 !h-1.5" />
            <span className="text-paper/80">CIRCADIANSTACK</span>
            <span className="text-rule">·</span>
            <span>{t("statusVersion")}</span>
            <span className="text-rule hidden sm:inline">·</span>
            <span className="hidden sm:inline">{t("statusCount")}</span>
            <span className="text-rule hidden md:inline">·</span>
            <span className="hidden md:inline tnum">{t("statusUpdated")}</span>
          </div>
          <Link
            href="/methodology"
            className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate hover:text-dawn transition-colors whitespace-nowrap"
          >
            {t("statusMethodology")}
          </Link>
        </div>
      </div>

      {/* === Main bar === */}
      <div role="banner" className="bg-midnight border-b border-rule">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center gap-4 md:gap-8 h-12 md:h-14">
            {/* LEFT — wordmark, left-aligned, no central search */}
            <Link
              href="/"
              aria-label={t("logoAria")}
              className="flex items-center gap-2 shrink-0"
            >
              <Mark />
              <span
                className="text-paper text-[15px] md:text-base font-semibold tracking-tight leading-none"
                style={{ fontFamily: '"IBM Plex Mono", ui-monospace, monospace' }}
              >
                circadianstack
              </span>
            </Link>

            {/* CENTER — thin desktop nav (no big search) */}
            <nav className="hidden md:flex items-center gap-6 text-[12.5px] font-mono uppercase tracking-[0.16em]">
              <Link
                href="/"
                className="text-paper/80 hover:text-dawn transition-colors"
              >
                {t("navStacks")}
              </Link>
              <Link
                href="/guides/light-and-zeitgebers"
                className="text-paper/80 hover:text-dawn transition-colors"
              >
                {t("navLevers")}
              </Link>
              <Link
                href="/#phases"
                className="text-paper/80 hover:text-dawn transition-colors"
              >
                {t("navPhases")}
              </Link>
              <Link
                href="/methodology"
                className="text-paper/80 hover:text-dawn transition-colors"
              >
                {t("navMethodology")}
              </Link>
              <Link
                href="/pipeline"
                className="text-paper/80 hover:text-dawn transition-colors"
              >
                {t("navPipeline")}
              </Link>
            </nav>

            {/* RIGHT — utilities */}
            <div className="flex items-center gap-1 md:gap-2 shrink-0 ml-auto">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label={t("searchButton")}
                className="inline-flex items-center justify-center h-9 w-9 rounded-sm text-paper/80 hover:text-dawn hover:bg-midnight-raised transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
              </button>

              <div className="hidden md:inline-flex">
                <LocaleSwitcher />
              </div>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-sm text-paper hover:bg-midnight-raised transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === Search overlay (icon-triggered, both desktop + mobile) === */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-midnight/95 backdrop-blur">
          <div className="mx-auto max-w-3xl px-4 md:px-6 pt-24 md:pt-32">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-slate">
                {t("searchPrompt")}
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="text-paper/80 hover:text-dawn inline-flex items-center justify-center h-9 w-9"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <form
              role="search"
              action={`/${locale === "en" ? "" : locale}/guides`}
              onSubmit={() => setSearchOpen(false)}
              className="border-b-2 border-dawn pb-2 flex items-center gap-3"
            >
              <span aria-hidden className="font-mono text-dawn text-lg">{">"}</span>
              <input
                type="search"
                name="q"
                autoFocus
                placeholder={t("searchPlaceholder")}
                className="flex-1 bg-transparent text-paper placeholder:text-slate-deep outline-none font-mono text-base md:text-lg"
              />
            </form>
            <p className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-slate">
              {t("searchHint")}
            </p>
          </div>
        </div>
      )}

      {/* === Mobile drawer === */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-midnight md:hidden overflow-auto">
          <div className="flex items-center justify-between px-4 h-12 border-b border-rule">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
              <Mark />
              <span
                className="text-paper text-base font-semibold"
                style={{ fontFamily: '"IBM Plex Mono", ui-monospace, monospace' }}
              >
                circadianstack
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-paper inline-flex items-center justify-center h-10 w-10 rounded-sm hover:bg-midnight-raised"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-4 py-6 gap-0">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate mb-3">
              {t("navStacks")}
            </div>
            {hubs.map((hub) => {
              const hl = localizeHub(hub, locale);
              return (
                <Link
                  key={hub.slug}
                  href={`/guides/${hub.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="min-h-[44px] py-2.5 text-[15px] text-paper flex items-center font-mono uppercase tracking-[0.1em] border-t border-rule first:border-t-0"
                >
                  <span aria-hidden className="text-dawn mr-3 text-xs">{">"}</span>
                  {hl.shortName}
                </Link>
              );
            })}
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate mt-8 mb-3">
              {t("navMasthead")}
            </div>
            <Link href="/methodology" onClick={() => setMobileOpen(false)} className="min-h-[40px] py-2 text-paper flex items-center font-mono uppercase tracking-[0.1em] text-[13px]">
              <span aria-hidden className="text-dawn mr-3 text-xs">{">"}</span>
              {t("navMethodology")}
            </Link>
            <Link href="/pipeline" onClick={() => setMobileOpen(false)} className="min-h-[40px] py-2 text-paper flex items-center font-mono uppercase tracking-[0.1em] text-[13px]">
              <span aria-hidden className="text-dawn mr-3 text-xs">{">"}</span>
              {t("navPipeline")}
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="min-h-[40px] py-2 text-paper flex items-center font-mono uppercase tracking-[0.1em] text-[13px]">
              <span aria-hidden className="text-dawn mr-3 text-xs">{">"}</span>
              {t("navAbout")}
            </Link>
            <Link href="/editorial-standards" onClick={() => setMobileOpen(false)} className="min-h-[40px] py-2 text-paper flex items-center font-mono uppercase tracking-[0.1em] text-[13px]">
              <span aria-hidden className="text-dawn mr-3 text-xs">{">"}</span>
              {t("navEditorialStandards")}
            </Link>
            <Link href="/newsletter" onClick={() => setMobileOpen(false)} className="min-h-[40px] py-2 text-paper flex items-center font-mono uppercase tracking-[0.1em] text-[13px]">
              <span aria-hidden className="text-dawn mr-3 text-xs">{">"}</span>
              {t("navNewsletter")}
            </Link>
            <div className="mt-8 pt-6 border-t border-rule">
              <LocaleSwitcher onNavigate={() => setMobileOpen(false)} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* === Pieces === */

function Mark() {
  return (
    <svg
      viewBox="0 0 60 60"
      width="22"
      height="22"
      role="img"
      aria-hidden
      className="shrink-0"
    >
      {/* Lab-notebook bracket + amber dot — terser than the dome */}
      <path d="M 12 8 L 8 8 L 8 52 L 12 52" stroke="#E8E4D9" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <path d="M 48 8 L 52 8 L 52 52 L 48 52" stroke="#E8E4D9" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <circle cx="30" cy="30" r="5.5" fill="#E6A940" />
      <circle cx="30" cy="30" r="11" stroke="#E6A940" strokeWidth="1.4" fill="none" opacity="0.45" />
    </svg>
  );
}
