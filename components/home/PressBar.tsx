/**
 * PressBar — "Sources we read" mono caps band, dark variant.
 *
 * No real press logos until earned. Until then a row of grayscale source
 * names sits in a thin band so the visual rhythm matches runrepeat without
 * making a claim that we cannot back. CircadianStack uses primary-source
 * journals and clinical-trial registries instead of media outlets.
 */

export function PressBar({
  heading,
  outlets,
}: {
  heading: string;
  outlets: string[];
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="flex items-center justify-center mb-6">
          <span className="caps-label text-slate">{heading}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate tracking-[0.1em] uppercase text-[12px] font-medium font-mono">
          {outlets.map((name, i) => (
            <span key={i}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
