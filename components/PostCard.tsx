import { Link } from "@/i18n/navigation";
import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";

const typeLabel: Record<Post["postType"], string> = {
  pillar: "Protocol",
  comparison: "Dose-tested",
  cluster: "Explainer",
  listicle: "Field guide",
};

export function PostCard({
  post,
  variant = "compact",
}: {
  post: Post;
  variant?: "compact" | "feature";
}) {
  const hub = getHub(post.hub);
  if (variant === "feature") {
    return (
      <Link
        href={`/${post.slug}`}
        className="group block p-8 bg-midnight-raised border border-rule rounded-sm hover:border-dawn/50 transition"
      >
        <span className="caps-label text-dawn">
          {hub?.shortName} · {typeLabel[post.postType]}
        </span>
        <h3 className="font-serif text-2xl text-paper mt-2 mb-3 group-hover:text-dawn transition">
          {post.title}
        </h3>
        <p className="text-paper/80 text-[15px] leading-relaxed">
          {post.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-dawn text-sm">
          Read the protocol
          <span aria-hidden>→</span>
        </span>
      </Link>
    );
  }
  return (
    <Link
      href={`/${post.slug}`}
      className="group block p-5 bg-midnight-raised/60 border border-rule rounded-sm hover:border-dawn/40 transition"
    >
      <span className="caps-label text-dawn">
        {hub?.shortName} · {typeLabel[post.postType]}
      </span>
      <h3 className="font-serif text-lg text-paper mt-2 mb-2 leading-snug group-hover:text-dawn transition">
        {post.title}
      </h3>
      <p className="text-sm text-paper/70 line-clamp-2">{post.description}</p>
      <span className="mt-3 inline-block caps-label text-slate">
        {post.readingTime} min read
      </span>
    </Link>
  );
}
