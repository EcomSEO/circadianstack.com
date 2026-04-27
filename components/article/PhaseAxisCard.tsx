/**
 * PhaseAxisCard — DIFFERENTIATOR right-rail companion card.
 * Chronobiology-domain unique: horizontal Dawn/Morning/Midday/Afternoon/
 * Evening/Night strip with sun-arc rail. Relevant phase highlighted in
 * amber. Below: "Optimal application: {phase}" caption.
 */
export type Phase = "DAWN" | "MORNING" | "MIDDAY" | "AFTERNOON" | "EVENING" | "NIGHT";

const PHASES: { code: Phase; window: string; x: number }[] = [
  { code: "DAWN", window: "05:00–07:30", x: 50 },
  { code: "MORNING", window: "07:30–11:00", x: 130 },
  { code: "MIDDAY", window: "11:00–15:00", x: 210 },
  { code: "AFTERNOON", window: "15:00–18:30", x: 290 },
  { code: "EVENING", window: "18:30–22:00", x: 370 },
  { code: "NIGHT", window: "22:00–05:00", x: 450 },
];

export function PhaseAxisCard({
  highlight,
  className = "",
}: {
  highlight: Phase;
  className?: string;
}) {
  const active = PHASES.find((p) => p.code === highlight) ?? PHASES[1];
  return (
    <aside
      aria-label="Phase of day"
      className={[
        "rounded-md border bg-midnight-raised/70 p-4 md:p-5",
        className,
      ].join(" ")}
      style={{ borderColor: "#2D4A6B" }}
    >
      <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase">
        <span style={{ color: "#A8B5C5" }}>PHASE OF DAY</span>
        <span style={{ color: "#E6A940" }}>{highlight}</span>
      </div>

      <svg viewBox="0 0 500 130" width="100%" height="auto" className="mt-3" aria-hidden>
        <defs>
          <linearGradient id="phase-arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5EAFC9" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#E6A940" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3D4A6B" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Sun arc */}
        <path
          d="M 30 105 Q 250 -10, 470 105"
          fill="none"
          stroke="url(#phase-arc)"
          strokeWidth="1.4"
          strokeDasharray="3 4"
        />
        {/* Phase ticks */}
        {PHASES.map((p) => {
          const isActive = p.code === highlight;
          // Compute Y on arc: y = 105 - 115 * 4 * (x-30)/(440) * (1 - (x-30)/(440))
          const t = (p.x - 30) / 440;
          const y = 105 - 115 * 4 * t * (1 - t);
          return (
            <g key={p.code}>
              <line
                x1={p.x}
                y1={y}
                x2={p.x}
                y2={120}
                stroke={isActive ? "#E6A940" : "#2D4A6B"}
                strokeWidth={isActive ? 1.6 : 1}
              />
              <circle
                cx={p.x}
                cy={y}
                r={isActive ? 6 : 3}
                fill={isActive ? "#E6A940" : "#2D4A6B"}
                opacity={isActive ? 1 : 0.85}
              />
              {isActive && (
                <circle cx={p.x} cy={y} r={11} fill="#E6A940" fillOpacity={0.18} />
              )}
            </g>
          );
        })}
        {/* Baseline */}
        <line x1="20" y1="120" x2="480" y2="120" stroke="#1F3148" strokeWidth="1" />
      </svg>

      <div className="mt-2 grid grid-cols-6 gap-1 font-mono text-[8.5px] tracking-[0.1em] uppercase">
        {PHASES.map((p) => (
          <span
            key={p.code}
            className="text-center"
            style={{ color: p.code === highlight ? "#E6A940" : "#6B7990" }}
          >
            {p.code.slice(0, 3)}
          </span>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t" style={{ borderColor: "#1F3148" }}>
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "#A8B5C5" }}>
          OPTIMAL APPLICATION
        </div>
        <div className="mt-1 text-paper text-[14px] font-semibold">
          {labelForPhase(highlight)}
        </div>
        <div className="mt-0.5 font-mono text-[10.5px] tnum-serif" style={{ color: "#6B7990" }}>
          {active.window}
        </div>
      </div>
    </aside>
  );
}

function labelForPhase(p: Phase) {
  switch (p) {
    case "DAWN": return "Dawn — civil twilight to sunrise";
    case "MORNING": return "Morning — peak SCN entrainment window";
    case "MIDDAY": return "Midday — alertness plateau";
    case "AFTERNOON": return "Afternoon — wake-maintenance zone";
    case "EVENING": return "Evening — pre-DLMO wind-down";
    case "NIGHT": return "Night — sleep architecture window";
  }
}
