import { Link } from "@/i18n/navigation";

/**
 * MethodologyTeaser — two-column credibility block linking to /methodology
 * and /pipeline. Left: "How we score stacks" — explains the Stack Score in
 * one paragraph and links to the v1.2 spec. Right: "What we're researching
 * now" — explains the public pipeline. Borders are thin, midnight-raised
 * surface, mono caps eyebrow on each side.
 */

export function MethodologyTeaser({
  scoreEyebrow,
  scoreTitle,
  scoreBody,
  scoreCta,
  scoreHref = "/methodology",
  pipelineEyebrow,
  pipelineTitle,
  pipelineBody,
  pipelineCta,
  pipelineHref = "/pipeline",
}: {
  scoreEyebrow: string;
  scoreTitle: string;
  scoreBody: string;
  scoreCta: string;
  scoreHref?: string;
  pipelineEyebrow: string;
  pipelineTitle: string;
  pipelineBody: string;
  pipelineCta: string;
  pipelineHref?: string;
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
          <Link
            href={scoreHref}
            className="group block bg-midnight p-8 md:p-10 hover:bg-midnight-raised/60 transition-colors"
          >
            <div className="caps-label text-dawn">{scoreEyebrow}</div>
            <h3
              className="mt-4 text-paper font-normal"
              style={{
                fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                fontSize: "clamp(1.5rem, 2.6vw, 1.875rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.012em",
              }}
            >
              {scoreTitle}
            </h3>
            <p className="mt-4 text-[15px] text-paper/75 leading-[1.7] max-w-prose">
              {scoreBody}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 caps-label text-slate group-hover:text-dawn transition-colors">
              <span>{scoreCta}</span>
              <span aria-hidden>→</span>
            </span>
          </Link>
          <Link
            href={pipelineHref}
            className="group block bg-midnight p-8 md:p-10 hover:bg-midnight-raised/60 transition-colors"
          >
            <div className="caps-label text-zenith">{pipelineEyebrow}</div>
            <h3
              className="mt-4 text-paper font-normal"
              style={{
                fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                fontSize: "clamp(1.5rem, 2.6vw, 1.875rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.012em",
              }}
            >
              {pipelineTitle}
            </h3>
            <p className="mt-4 text-[15px] text-paper/75 leading-[1.7] max-w-prose">
              {pipelineBody}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 caps-label text-slate group-hover:text-zenith transition-colors">
              <span>{pipelineCta}</span>
              <span aria-hidden>→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
