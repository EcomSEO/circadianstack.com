import type { Post } from "@/lib/content/posts";
import { PostCard } from "./PostCard";
import { Eyebrow } from "./editorial/Eyebrow";

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16">
      <Eyebrow tone="zenith">Related in this hub</Eyebrow>
      <h2 className="font-serif text-2xl text-paper mt-2 mb-6">
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
