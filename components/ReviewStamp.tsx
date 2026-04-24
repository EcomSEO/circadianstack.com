export function ReviewStamp({
  updatedAt,
  readingTime,
  author = "The CircadianStack Team",
}: {
  updatedAt: string;
  readingTime: number;
  author?: string;
}) {
  const formatted = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <p className="text-[12px] uppercase tracking-[0.14em] text-slate font-mono">
      <span className="text-paper/85">By {author}</span>
      <span aria-hidden className="mx-2 text-rule">·</span>
      <span>Updated {formatted}</span>
      <span aria-hidden className="mx-2 text-rule">·</span>
      <span className="text-dawn tnum-serif">{readingTime} min read</span>
    </p>
  );
}
