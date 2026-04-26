"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";

/**
 * EditorialHero — pliability-meets-drugs.com.
 *
 * Tagline-first density (drugs.com), pliability-calm whitespace and weight-400
 * H1, prominent rounded search field underneath as the primary action. Single
 * column, max-w-3xl, midnight surface. Sits at the very top of the home page.
 *
 * Voice: lab-notebook, never hype. Tagline reads like a Bloomberg Terminal
 * masthead, not a wellness landing page.
 */
export function EditorialHero({
  eyebrow,
  h1,
  sub,
  searchPlaceholder,
  searchAria,
  searchSubmit,
  pipelineMeta,
  pipelineHref = "/pipeline",
}: {
  eyebrow: string;
  h1: string;
  sub: string;
  searchPlaceholder: string;
  searchAria: string;
  searchSubmit: string;
  pipelineMeta: string;
  pipelineHref?: string;
}) {
  const locale = useLocale() as Locale;

  return (
    <section className="relative border-b border-rule overflow-hidden">
      {/* Subtle aurora layer */}
      <div className="aurora" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-6 pt-20 md:pt-28 pb-16 md:pb-24 text-center">
        <div className="caps-label text-dawn">{eyebrow}</div>

        <h1
          className="mt-6 font-normal text-paper text-balance mx-auto"
          style={{
            fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
            fontSize: "clamp(2.5rem, 6.4vw, 4.25rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.022em",
            maxWidth: "22ch",
          }}
        >
          {h1}
        </h1>

        <p
          className="mt-6 mx-auto text-[1.0625rem] md:text-[1.125rem] text-paper/80"
          style={{ lineHeight: 1.7, maxWidth: "56ch" }}
        >
          {sub}
        </p>

        {/* Search — runrepeat-prominence, goodrx-rounded */}
        <form
          role="search"
          action={`/${locale === "en" ? "" : locale}/guides`}
          className="mt-10 mx-auto max-w-2xl"
        >
          <label className="relative flex items-stretch w-full bg-paper rounded-full overflow-hidden shadow-soft focus-within:ring-2 focus-within:ring-dawn/70">
            <span className="sr-only">{searchAria}</span>
            <span
              aria-hidden
              className="pl-5 pr-2 self-center text-slate-deep flex items-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="search"
              name="q"
              placeholder={searchPlaceholder}
              className="flex-1 bg-transparent text-midnight placeholder:text-slate-deep px-2 h-14 outline-none text-[15px] md:text-base"
              style={{ fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif' }}
            />
            <button
              type="submit"
              className="bg-dawn hover:bg-dawn-deep text-midnight font-semibold px-6 md:px-7 transition-colors"
              style={{ fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif' }}
            >
              {searchSubmit}
            </button>
          </label>
        </form>

        {/* Pipeline meta — small mono caps, links to /pipeline */}
        <Link
          href={pipelineHref}
          className="mt-8 inline-flex items-center gap-2 caps-label text-slate hover:text-dawn transition-colors"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-dawn" />
          <span>{pipelineMeta}</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
