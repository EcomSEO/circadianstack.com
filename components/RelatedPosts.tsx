import type { Post } from "@/lib/content/posts";
import { PostCard } from "./PostCard";
import { Eyebrow } from "./editorial/Eyebrow";

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-20 pt-12 border-t border-rule">
      <Eyebrow tone="zenith">Related stories</Eyebrow>
      <h2
        className="text-paper mt-3 mb-8 font-normal"
        style={{
          fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
          fontSize: "clamp(1.5rem, 2.6vw, 1.875rem)",
          lineHeight: 1.2,
          letterSpacing: "-0.012em",
        }}
      >
        What to read next.
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
