"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule, LabRule } from "@/components/editorial/DotRule";
import { SITE } from "@/lib/content/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error to the console so it lands in the server log / dev
    // overlay without being buried. No user-facing stack traces.
    // eslint-disable-next-line no-console
    console.error("[circadianstack] runtime error:", error);
  }, [error]);

  return (
    <main className="border-b border-rule">
      <section className="mx-auto max-w-4xl px-6 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="mb-10">
          <LabRule />
        </div>

        <Eyebrow tone="ember">Error · Signal interrupted</Eyebrow>

        <h1 className="display-headline mt-5 text-[2.4rem] sm:text-5xl md:text-[3.75rem] leading-[1.04] max-w-3xl">
          Something broke on our{" "}
          <span className="text-ember italic font-serif">side.</span>
        </h1>

        <div className="mt-8 max-w-2xl space-y-5 text-paper/85 text-[16.5px] leading-[1.7]">
          <p>
            A rendering step failed before this page reached you. Retry first:
            these are usually transient (a cold edge node, a network blip, a
            data fetch that timed out). If it keeps firing, the report is
            already in our log and we will look at it.
          </p>
          <p>
            You did nothing wrong. The page exists in the logbook; the render
            tripped on the way to you.
          </p>
        </div>

        {error?.digest && (
          <div className="mt-8 inline-flex items-center gap-3 border border-rule bg-midnight-raised/60 px-3.5 py-2 rounded-sm">
            <span className="caps-label text-slate">Error digest</span>
            <span aria-hidden className="text-rule">·</span>
            <code className="font-mono text-[12.5px] text-ember/90">
              {error.digest}
            </code>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="btn-primary"
          >
            Retry protocol
            <span aria-hidden>→</span>
          </button>
          <Link href="/" className="btn-secondary">
            Back to home
          </Link>
        </div>

        <div className="mt-16">
          <DotRule />
          <p className="text-center caps-label text-slate mt-6">
            {SITE.protocolLogPrefix} · {SITE.issue} · Status 500 ·
            {" "}
            {SITE.url.replace(/^https?:\/\//, "")}
          </p>
        </div>
      </section>
    </main>
  );
}
