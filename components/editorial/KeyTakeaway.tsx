import type { ReactNode } from "react";

type Variant = "key-takeaway" | "watch-out" | "method" | "dose-note";

const config: Record<
  Variant,
  { label: string; border: string; bg: string; dot: string; text: string }
> = {
  "key-takeaway": {
    label: "Key takeaway",
    border: "border-dawn",
    bg: "bg-dawn/[0.06]",
    dot: "bg-dawn",
    text: "text-dawn",
  },
  "watch-out": {
    label: "Failure mode",
    border: "border-ember",
    bg: "bg-ember/[0.07]",
    dot: "bg-ember",
    text: "text-ember",
  },
  method: {
    label: "Method note",
    border: "border-zenith",
    bg: "bg-zenith/[0.06]",
    dot: "bg-zenith",
    text: "text-zenith",
  },
  "dose-note": {
    label: "Dose note",
    border: "border-dawn",
    bg: "bg-midnight-raised",
    dot: "bg-dawn",
    text: "text-dawn",
  },
};

export function KeyTakeaway({
  variant = "key-takeaway",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  const c = config[variant];
  return (
    <aside
      className={`my-8 border-l-[3px] ${c.border} ${c.bg} pl-5 pr-5 py-5 rounded-r-sm`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
        <span className={`caps-label ${c.text}`}>{title ?? c.label}</span>
      </div>
      <div className="text-[15.5px] text-paper/90 leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
