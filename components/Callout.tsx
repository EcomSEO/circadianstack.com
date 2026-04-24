import { ReactNode } from "react";

type Variant = "note" | "key-takeaway" | "warning" | "source" | "dose";

const variantClass: Record<Variant, string> = {
  note: "border-zenith bg-zenith/[0.06]",
  "key-takeaway": "border-dawn bg-dawn/[0.06]",
  warning: "border-ember bg-ember/[0.07]",
  source: "border-rule bg-midnight-raised",
  dose: "border-dawn bg-midnight-raised",
};

const variantLabel: Record<Variant, string> = {
  note: "Note",
  "key-takeaway": "Key takeaway",
  warning: "Failure mode",
  source: "Source",
  dose: "Dose note",
};

const variantAccent: Record<Variant, string> = {
  note: "text-zenith",
  "key-takeaway": "text-dawn",
  warning: "text-ember",
  source: "text-slate",
  dose: "text-dawn",
};

export function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside
      className={`border-l-[3px] rounded-r-sm px-5 py-4 my-6 ${variantClass[variant]}`}
    >
      <p className={`caps-label mb-1 ${variantAccent[variant]}`}>
        {title ?? variantLabel[variant]}
      </p>
      <div className="text-paper/90 text-[15px] leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
