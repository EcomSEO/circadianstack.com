import type { Post } from "@/lib/content/posts";

/**
 * The site's signature artifact. Renders a 5-section card above the body
 * on any post with `protocolCard` data. Screenshot-friendly at 1200×630
 * for Twitter sharing.
 */
export function ProtocolCard({ post }: { post: Post }) {
  if (!post.protocolCard) return null;
  const { input, dose, expectedOutput, evidence, failureModes } = post.protocolCard;

  return (
    <aside
      className="my-8 border-l-4 border-dawn bg-paper/5 border-t border-r border-b border-paper/10 rounded-r-lg overflow-hidden"
      aria-label="Protocol card"
    >
      <div className="px-6 py-3 bg-dawn/10 border-b border-paper/10">
        <p className="font-serif text-sm uppercase tracking-widest text-dawn">
          Protocol card
        </p>
      </div>
      <div className="divide-y divide-paper/10">
        <Row label="Input" value={input} />
        <Row label="Dose" value={dose} mono />
        <Row label="Expected output" value={expectedOutput} />
        <Row label="Evidence" value={evidence} mono />
        <Row label="Failure modes" value={failureModes} />
      </div>
    </aside>
  );
}

function Row({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="grid grid-cols-[140px,1fr] gap-4 px-6 py-4">
      <div className="font-mono text-xs uppercase tracking-wider text-dawn pt-0.5">
        {label}
      </div>
      <div className={`text-paper/90 leading-relaxed ${mono ? "font-mono text-sm" : ""}`}>
        {value}
      </div>
    </div>
  );
}
