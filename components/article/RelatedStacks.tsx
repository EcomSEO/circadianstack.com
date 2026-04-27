import { StackCard } from "@/components/home/FeaturedStackCarousel";
import type { Post } from "@/lib/content/posts";

export function RelatedStacks({ posts, heading }: { posts: Post[]; heading: string }) {
  if (!posts.length) return null;
  return (
    <section className="mt-14">
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-dawn">
          RELATED STACKS
        </span>
        <span aria-hidden className="flex-1 h-px bg-rule" />
      </div>
      <h2
        className="text-paper font-semibold mb-5"
        style={{
          fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
          fontSize: "1.5rem",
          letterSpacing: "-0.012em",
          lineHeight: 1.2,
        }}
      >
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {posts.slice(0, 3).map((p) => (
          <StackCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
