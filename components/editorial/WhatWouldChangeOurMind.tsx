import type { ReactNode } from "react";

/**
 * "What would change our mind" — the epistemic-humility block. On
 * CircadianStack this means: a new phase response curve study, a better
 * trial on a melatonin dose, a replication that contradicts current
 * guidance. Ember-accented.
 */
export function WhatWouldChangeOurMind({
  children,
  title = "What would change our mind",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="h-2 w-2 rounded-full bg-ember" />
        <span className="caps-label text-ember">{title}</span>
      </div>
      <div className="pl-5 border-l-2 border-ember/50 max-w-prose text-[15.5px] text-paper/90 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
