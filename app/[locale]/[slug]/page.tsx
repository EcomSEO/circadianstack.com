import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getPost, posts } from "@/lib/content/posts";
import { PillarTemplate } from "@/components/templates/PillarTemplate";
import { ComparisonTemplate } from "@/components/templates/ComparisonTemplate";
import { ClusterTemplate } from "@/components/templates/ClusterTemplate";
import { ListicleTemplate } from "@/components/templates/ListicleTemplate";
import { TranslationPendingBanner } from "@/components/TranslationPendingBanner";
import { pageMetadata } from "@/lib/seo";
import { localizePost } from "@/lib/content/posts-i18n";
import { type Locale, defaultLocale } from "@/i18n/routing";

// Avoid colliding with /about, /contact, etc — static pages take precedence
// over this dynamic route.
const RESERVED = new Set([
  "about",
  "contact",
  "privacy",
  "terms",
  "affiliate-disclosure",
  "editorial-standards",
  "newsletter",
  "methodology",
  "pipeline",
  "guides",
  "chronotype-quiz",
  "sitemap.xml",
  "robots.txt",
  "llms.txt",
]);

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  if (RESERVED.has(slug)) return {};
  const post = getPost(slug);
  if (!post) return {};
  const li = localizePost(slug, locale, {
    title: post.title,
    h1: post.h1,
    description: post.description,
  });
  const suffix =
    post.postType === "comparison"
      ? ` (Tested ${new Date(post.updatedAt).getFullYear()})`
      : "";
  return pageMetadata({
    title: `${li.title}${suffix}`,
    description: li.description,
    path: `/${post.slug}`,
    locale,
    ogType: "article",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  if (RESERVED.has(slug)) notFound();
  const post = getPost(slug);
  if (!post) notFound();

  // Localize title/h1/description for the article header. Body content
  // remains in English; the TranslationPendingBanner above the body
  // signals that for non-English locales.
  const li = localizePost(slug, locale, {
    title: post.title,
    h1: post.h1,
    description: post.description,
  });
  const localizedPost = { ...post, title: li.title, h1: li.h1, description: li.description };

  const banner =
    locale !== defaultLocale ? <TranslationPendingBanner /> : null;

  switch (post.postType) {
    case "pillar":
      return (
        <>
          {banner}
          <PillarTemplate post={localizedPost} />
        </>
      );
    case "comparison":
      return (
        <>
          {banner}
          <ComparisonTemplate post={localizedPost} />
        </>
      );
    case "listicle":
      return (
        <>
          {banner}
          <ListicleTemplate post={localizedPost} />
        </>
      );
    case "cluster":
    default:
      return (
        <>
          {banner}
          <ClusterTemplate post={localizedPost} />
        </>
      );
  }
}
