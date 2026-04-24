/**
 * MethodologyBlock — adapted for CircadianStack as the 5-part protocol
 * wedge: Input / Dose / Expected output / Evidence / Failure modes.
 * This is the sibling of the ProtocolCard used for editorial summaries
 * (research-method framing) where ProtocolCard is the screenshot artifact.
 */

type Item = { label: string; detail: string };

const defaultItems: Item[] = [
  {
    label: "Input",
    detail:
      "What the reader is doing (morning light exposure, melatonin dosing, jet-lag pre-shift, etc.). The lever, not the outcome.",
  },
  {
    label: "Dose",
    detail:
      "Quantified. Lux, minutes, milligrams, wavelength in nm, clock time. No claim ships without a number.",
  },
  {
    label: "Expected output",
    detail:
      "What changes and by how much. Phase-shift in hours. Sleep latency in minutes. Melatonin AUC. Citable effect sizes, not vibes.",
  },
  {
    label: "Evidence",
    detail:
      "2-4 primary sources. Khalsa 2003. Duffy 2015. Roenneberg 2007. Podcasts are not sources; the underlying study is.",
  },
  {
    label: "Failure modes",
    detail:
      "What breaks the protocol. Timing past 10am. Blue-blockers in the morning. Doses above the saturation point. Documented, not hidden.",
  },
];

export function MethodologyBlock({
  items = defaultItems,
  title = "How we build a Protocol card",
  eyebrow = "Methodology",
}: {
  items?: Item[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="my-12 bg-midnight-raised border border-rule rounded-sm p-7 md:p-9">
      <div className="flex items-center gap-3 mb-5">
        <span className="h-2 w-2 rounded-full bg-dawn" />
        <span className="caps-label text-dawn">{eyebrow}</span>
      </div>
      <h2 className="font-serif text-2xl text-paper mb-6 leading-tight">
        {title}
      </h2>
      <dl className="grid md:grid-cols-2 gap-x-10 gap-y-5">
        {items.map((item, i) => (
          <div key={item.label} className="grid grid-cols-[auto_1fr] gap-4">
            <span className="tnum text-slate text-xs pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <dt className="eyebrow text-dawn mb-1">{item.label}</dt>
              <dd className="text-[15px] text-paper/85 leading-relaxed">
                {item.detail}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
