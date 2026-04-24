import type { ReactNode } from "react";

type Tone = "dawn" | "zenith" | "ember" | "slate" | "paper";

export function Eyebrow({
  children,
  tone = "dawn",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const toneClass =
    tone === "zenith"
      ? "text-zenith"
      : tone === "ember"
      ? "text-ember"
      : tone === "slate"
      ? "text-slate"
      : tone === "paper"
      ? "text-paper"
      : "text-dawn";
  return (
    <span className={`eyebrow ${toneClass} ${className}`}>{children}</span>
  );
}
