"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { hubs } from "@/lib/content/hubs";
import { Wordmark } from "./editorial/Wordmark";
import { Dateline } from "./editorial/Dateline";
import { ProtocolLog } from "./editorial/ProtocolLog";
import { ChronotypeDot } from "./editorial/ChronotypeDot";
import { ReadingProgress } from "./editorial/ReadingProgress";

/**
 * CircadianStack masthead — dark, lab-notebook, monospace-adjacent.
 *
 * Top strip: Dateline (Protocol Log · Issue · Month · Domain) on the left,
 * editorial links on the right. Main bar: Wordmark + Guides dropdown +
 * Tools + Newsletter + primary CTA ("Take the Chronotype Quiz"). Mobile
 * collapses to a full-screen midnight menu.
 *
 * Playful nod: a small amber "current protocol window" indicator sits
 * beside the wordmark (see Wordmark.tsx). On the main bar we also show
 * a tiny chronotype pulse showing roughly where the reader is in the
 * 24-hour circadian cycle — amber for the morning-light window, zenith
 * for mid-day, ember for evening. Decorative only.
 */

function circadianWindowLabel(hour: number): {
  label: string;
  tone: "dawn" | "zenith" | "ember" | "slate";
} {
  if (hour >= 5 && hour < 10) return { label: "Morning-light window", tone: "dawn" };
  if (hour >= 10 && hour < 17) return { label: "Mid-day · alertness peak", tone: "zenith" };
  if (hour >= 17 && hour < 21) return { label: "Evening · DLMO approach", tone: "ember" };
  return { label: "Biological night", tone: "slate" };
}

export function Header() {
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hour, setHour] = useState<number | null>(null);

  useEffect(() => {
    setHour(new Date().getHours());
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const t = setInterval(() => setHour(new Date().getHours()), 60_000);
    return () => clearInterval(t);
  }, []);

  // Close Guides dropdown + mobile menu on Escape; lock body scroll when
  // the full-screen mobile menu is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setGuidesOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const cycle = hour == null ? null : circadianWindowLabel(hour);
  const cycleToneClass =
    cycle?.tone === "zenith"
      ? "bg-zenith"
      : cycle?.tone === "ember"
      ? "bg-ember"
      : cycle?.tone === "slate"
      ? "bg-slate"
      : "bg-dawn";

  return (
    <header className="relative bg-midnight/95 backdrop-blur sticky top-0 z-40 border-b border-rule">
      <ReadingProgress />
      {/* Masthead strip — Protocol Log dateline + live observatory clock */}
      <div className="border-b border-rule hidden md:block">
        <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 min-w-0">
            <Dateline />
            <span aria-hidden className="text-rule hidden xl:inline">·</span>
            <span className="hidden xl:inline-flex items-center gap-2">
              <ChronotypeDot />
              <ProtocolLog />
            </span>
          </div>
          <div className="flex items-center gap-5 text-[11px] tracking-[0.14em] uppercase text-slate font-mono">
            <Link href="/editorial-standards" className="nav-link">
              Editorial
            </Link>
            <span aria-hidden className="text-rule">·</span>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <span aria-hidden className="text-rule">·</span>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto max-w-6xl px-6 py-4 md:py-5 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Wordmark size="md" />
          {cycle && (
            <span
              className="hidden lg:inline-flex items-center gap-2 pl-4 border-l border-rule caps-label text-slate"
              title="Current circadian window · decorative"
            >
              <span
                aria-hidden
                className={`h-1.5 w-1.5 rounded-full ${cycleToneClass} animate-pulse`}
              />
              {cycle.label}
            </span>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setGuidesOpen((v) => !v)}
              className="nav-link flex items-center gap-1 cursor-pointer"
              aria-expanded={guidesOpen}
              aria-haspopup="menu"
            >
              Guides
              <span aria-hidden className="text-dawn text-xs">▾</span>
            </button>
            {guidesOpen && (
              <div
                role="menu"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[22rem] bg-midnight-raised border border-rule rounded-sm shadow-card p-3"
              >
                <div className="eyebrow text-slate px-3 pb-2 border-b border-rule mb-2">
                  The five hubs
                </div>
                {hubs.map((hub, i) => (
                  <Link
                    key={hub.slug}
                    href={`/guides/${hub.slug}`}
                    role="menuitem"
                    className="flex items-start gap-3 px-3 py-2.5 hover:bg-dawn/[0.08] rounded-sm group"
                  >
                    <span className="tnum text-dawn/60 group-hover:text-dawn shrink-0 pt-0.5 text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-paper font-medium leading-tight">
                        {hub.name}
                      </div>
                      <div className="text-xs text-slate mt-0.5 leading-snug">
                        {hub.oneLiner}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/chronotype-quiz" className="nav-link">
            Quiz
          </Link>
          <Link href="/newsletter" className="nav-link">
            Dispatch
          </Link>
          <Link
            href="/chronotype-quiz"
            className="btn-primary !py-2.5 !px-4 !text-sm"
          >
            Take the Chronotype Quiz
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-paper inline-flex items-center justify-center h-11 w-11 -mr-2 cursor-pointer"
          aria-label="Open menu"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-midnight md:hidden overflow-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-rule">
            <Wordmark size="sm" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-paper inline-flex items-center justify-center h-11 w-11 -mr-2 cursor-pointer"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            <div className="eyebrow text-slate mb-2">The five hubs</div>
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] py-3 text-lg text-paper font-serif flex items-center gap-3"
              >
                <span className="tnum text-dawn/60 text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {hub.name}
              </Link>
            ))}
            <div className="eyebrow text-slate mt-6 mb-2">Masthead</div>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="min-h-[44px] py-2 text-lg text-paper flex items-center"
            >
              About
            </Link>
            <Link
              href="/editorial-standards"
              onClick={() => setMobileOpen(false)}
              className="min-h-[44px] py-2 text-lg text-paper flex items-center"
            >
              Editorial standards
            </Link>
            <Link
              href="/newsletter"
              onClick={() => setMobileOpen(false)}
              className="min-h-[44px] py-2 text-lg text-paper flex items-center"
            >
              Dispatch
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="min-h-[44px] py-2 text-lg text-paper flex items-center"
            >
              Contact
            </Link>
            <div className="mt-6">
              <Link
                href="/chronotype-quiz"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Take the Chronotype Quiz →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
