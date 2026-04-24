import Link from "next/link";
import { hubs } from "@/lib/content/hubs";
import { Wordmark } from "./editorial/Wordmark";
import { SITE } from "@/lib/content/site";
import { FooterTelemetry } from "./editorial/FooterTelemetry";

/**
 * Dark editorial masthead footer — hub index with amber rank numerals,
 * imprint strip at the bottom. No stock CTA sprawl.
 */
export function Footer() {
  return (
    <footer className="mt-24 bg-midnight-deep border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-rule">
          <div>
            <Wordmark size="lg" asLink={false} showDot={false} />
            <p className="mt-3 font-serif text-lg text-paper italic max-w-md">
              {SITE.tagline}
            </p>
            <p className="mt-2 caps-label text-dawn">{SITE.shortTagline}</p>
          </div>
          <div className="max-w-md text-sm text-paper/75 leading-relaxed">
            A small publication reading the chronobiology literature and
            publishing the doses. Primary sources. Named researchers. No
            podcast-citation laundering.
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mt-10">
          <div className="md:col-span-5">
            <h4 className="eyebrow text-slate mb-4">The five hubs</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {hubs.map((hub, i) => (
                <li key={hub.slug}>
                  <Link
                    href={`/guides/${hub.slug}`}
                    className="group flex items-center gap-3 text-paper hover:text-dawn transition"
                  >
                    <span className="tnum text-dawn/50 group-hover:text-dawn text-xs w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px]">{hub.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-slate mb-4">Tools</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link
                  href="/chronotype-quiz"
                  className="text-paper hover:text-dawn transition"
                >
                  Chronotype Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/jet-lag-calculator"
                  className="text-paper hover:text-dawn transition"
                >
                  Jet-lag calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/lux-dose-calculator"
                  className="text-paper hover:text-dawn transition"
                >
                  Lux-dose calculator
                </Link>
              </li>
            </ul>

            <h4 className="eyebrow text-slate mb-4 mt-8">Masthead</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link
                  href="/about"
                  className="text-paper hover:text-dawn transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/editorial-standards"
                  className="text-paper hover:text-dawn transition"
                >
                  Editorial standards
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-paper hover:text-dawn transition"
                >
                  Contact &amp; tips
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-paper hover:text-dawn transition"
                >
                  Dispatch newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="eyebrow text-slate mb-4">Fine print</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="text-paper hover:text-dawn transition"
                >
                  Affiliate disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-paper hover:text-dawn transition"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-paper hover:text-dawn transition"
                >
                  Terms of service
                </Link>
              </li>
            </ul>

            <div className="mt-8 p-4 border border-rule rounded-sm bg-midnight-raised/60">
              <div className="caps-label text-dawn mb-1">Medical note</div>
              <p className="text-[13px] text-paper/75 leading-relaxed">
                Nothing on this site is medical advice. For suspected sleep
                disorders, consult a board-certified sleep physician.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Imprint strip */}
      <div className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-[0.14em] uppercase text-slate font-mono">
          <div className="flex items-center gap-3 flex-wrap">
            <span>©&nbsp;{new Date().getFullYear()} CircadianStack</span>
            <span aria-hidden className="text-rule">·</span>
            <span>
              {SITE.volume} · {SITE.issue}
            </span>
            <span aria-hidden className="text-rule">·</span>
            <FooterTelemetry />
          </div>
          <div className="normal-case tracking-normal text-slate/80 text-xs max-w-xl md:text-right leading-relaxed font-sans">
            Commissions on some affiliate links help fund dose testing. They do
            not affect rankings. We update recommendations when new trial data
            arrives.
          </div>
        </div>
      </div>
    </footer>
  );
}
