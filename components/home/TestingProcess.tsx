/**
 * TestingProcess — runrepeat "Testing process" 3-photo strip replica, dark variant.
 *
 * Three image-slot squares with simple numbered captions. Pure visual —
 * no buttons, no lede paragraphs. The captions ARE the copy.
 */

const slotBg: string[] = [
  "linear-gradient(135deg, #C8912F 0%, #E6A940 60%, #F0C678 100%)",
  "linear-gradient(135deg, #2A4A6A 0%, #3D6A87 60%, #5EAFC9 100%)",
  "linear-gradient(135deg, #2A2A2A 0%, #6F4030 60%, #C97D5E 100%)",
];

export function TestingProcess({
  heading,
  steps,
}: {
  heading: string;
  steps: [string, string, string];
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2
          className="font-light text-paper mb-10"
          style={{
            fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
            fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i}>
              <div
                role="img"
                aria-label=""
                className="aspect-square w-full border border-rule"
                style={{ backgroundImage: slotBg[i] }}
              />
              <p className="mt-4 text-paper/90 text-[14px] leading-relaxed">
                <span className="text-dawn tnum mr-2">{String(i + 1).padStart(2, "0")}.</span>
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
