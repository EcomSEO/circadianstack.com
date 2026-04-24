import Link from "next/link";
import type { Metadata } from "next";
import { hubs } from "@/lib/content/hubs";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule, LabRule } from "@/components/editorial/DotRule";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "404 — Protocol not found",
  description:
    "The URL you followed isn't in our logbook. Pick a hub to find the protocol you were after.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="border-b border-rule">
      <section className="mx-auto max-w-5xl px-6 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="mb-10">
          <LabRule />
        </div>

        <Eyebrow tone="dawn">404 · Protocol not found</Eyebrow>

        <h1 className="display-headline mt-5 text-[2.4rem] sm:text-5xl md:text-[3.75rem] leading-[1.04] max-w-3xl">
          This URL isn&apos;t in our{" "}
          <span className="text-dawn italic font-serif">logbook.</span>
        </h1>

        <div className="mt-8 max-w-2xl space-y-5 text-paper/85 text-[16.5px] leading-[1.7]">
          <p>
            Either the path was mistyped, the slug changed when a Protocol card
            was re-shelved into a different hub, or the page never existed.
            Nothing here to cite, nothing to dose — just a dead reference.
          </p>
          <p>
            The five hubs below contain every protocol on CircadianStack, each
            tagged with its primary sources (Khalsa, Zeitzer, Roenneberg,
            Duffy, Wright, Czeisler) and its dose-accurate reviews. Pick the
            hub that matches what you were looking for.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-rule">
          <div className="eyebrow text-slate mb-5">The five hubs</div>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-1">
            {hubs.map((hub, i) => (
              <li key={hub.slug}>
                <Link
                  href={`/guides/${hub.slug}`}
                  className="group flex items-start gap-4 py-4 border-b border-rule"
                >
                  <span className="rank-numeral !text-[1.75rem] text-dawn/70 group-hover:text-dawn shrink-0 pt-1 transition">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-serif text-lg text-paper group-hover:text-dawn leading-tight transition">
                      {hub.name}
                    </div>
                    <div className="text-sm text-paper/65 mt-1 leading-snug">
                      {hub.oneLiner}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back to the front page
            <span aria-hidden>→</span>
          </Link>
          <Link href="/chronotype-quiz" className="btn-secondary">
            Take the Chronotype Quiz
          </Link>
        </div>

        <div className="mt-16">
          <DotRule />
          <p className="text-center caps-label text-slate mt-6">
            {SITE.protocolLogPrefix} · {SITE.issue} · Status 404 ·
            {" "}
            {SITE.url.replace(/^https?:\/\//, "")}
          </p>
        </div>
      </section>
    </main>
  );
}
