"use client";

import { useState } from "react";

/** Numbered references list. PMID-tagged entries get a "PubMed" pill. */
export function SourcesAccordion({
  sources,
  heading = "Sources",
}: {
  sources: { label: string; url: string }[];
  heading?: string;
}) {
  const [open, setOpen] = useState(true);
  if (!sources.length) return null;
  return (
    <section id="sources" className="mt-12 rounded-md border border-rule bg-midnight-raised/55">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn">
            CITATIONS
          </span>
          <span
            className="text-paper font-semibold"
            style={{ fontSize: "18px", letterSpacing: "-0.012em" }}
          >
            {heading} ({sources.length})
          </span>
        </div>
        <span aria-hidden className="text-paper/70 font-mono text-[14px]">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <ol className="px-4 md:px-5 pb-5 space-y-3 text-[14px]">
          {sources.map((s, i) => {
            const isPubmed = /pubmed|ncbi/i.test(s.url);
            return (
              <li key={i} className="grid grid-cols-[auto_1fr] gap-3 items-baseline">
                <span className="font-mono text-[11px] tracking-[0.16em] text-slate tnum-serif">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <div>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                    className="text-paper hover:text-dawn underline decoration-dawn/40 underline-offset-2 break-words"
                  >
                    {s.label}
                  </a>
                  {isPubmed && (
                    <span
                      className="ml-2 inline-flex items-center font-mono text-[9px] tracking-[0.18em] uppercase rounded-sm px-1.5 py-0.5"
                      style={{
                        backgroundColor: "rgba(94, 175, 201, 0.14)",
                        color: "#5EAFC9",
                      }}
                    >
                      PubMed
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
