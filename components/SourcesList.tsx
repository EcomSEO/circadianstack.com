import { Eyebrow } from "./editorial/Eyebrow";

export function SourcesList({
  sources,
}: {
  sources: Array<{ label: string; url: string }>;
}) {
  if (!sources || sources.length === 0) return null;
  return (
    <section className="mt-12 pt-8 border-t border-rule">
      <Eyebrow tone="dawn">Primary Sources</Eyebrow>
      <h2 className="font-serif text-xl text-paper mt-2 mb-4">
        What the claims in this post trace back to.
      </h2>
      <ol className="list-decimal pl-5 space-y-2 text-sm text-paper/85 marker:text-dawn marker:font-mono">
        {sources.map((s, i) => (
          <li key={i} className="pl-1">
            <a
              href={s.url}
              rel="noopener"
              target="_blank"
              className="text-dawn hover:text-zenith underline underline-offset-2 decoration-dawn/50 hover:decoration-zenith transition"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
