"use client";

import { useEffect, useState } from "react";

/**
 * TableOfContents — sticky right rail w/ IntersectionObserver scroll-spy.
 * Active section highlighted amber. Pure client; cheap.
 */
export function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.5, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Table of contents" className="text-[13.5px]">
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-dawn mb-3">
        On this page
      </div>
      <ol className="space-y-1.5">
        {items.map((it) => {
          const isActive = it.id === active;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={[
                  "block border-l-2 pl-3 py-1 leading-snug transition-colors",
                  isActive
                    ? "border-dawn text-dawn"
                    : "border-rule text-paper/70 hover:text-paper",
                ].join(" ")}
              >
                {it.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
