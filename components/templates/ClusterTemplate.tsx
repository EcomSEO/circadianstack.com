import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { Breadcrumbs } from "../Breadcrumbs";
import { ReviewStamp } from "../ReviewStamp";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { ArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, LabRule } from "../editorial/DotRule";
import { KeyTakeaway } from "../editorial/KeyTakeaway";
import { ProtocolCard } from "../editorial/ProtocolCard";

export function ClusterTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#issue-contents" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

  return (
    <>
      <ArticleJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      {post.faq && <FaqJsonLd faq={post.faq} />}

      <ArticleShell>
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="zenith">The Explainer</Eyebrow>
          {hub && (
            <span className="caps-label text-slate">· {hub.shortName}</span>
          )}
        </div>

        <h1 className="display-headline mt-4 text-[2.1rem] md:text-[2.75rem] leading-[1.07]">
          {post.h1}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <ReviewStamp
            updatedAt={post.updatedAt}
            readingTime={post.readingTime}
          />
        </div>

        <LabRule className="mt-7" />

        <p className="drop-cap mt-9 text-[1.08rem] leading-[1.75] text-paper/90">
          {post.description}
        </p>

        {post.protocolCard && <ProtocolCard post={post} />}

        <KeyTakeaway variant="key-takeaway" title="The short answer">
          The direct answer sits here for readers who need it fast. The rest
          of the page earns it with citations, dose-specifics, and the
          disagreements we noted in the literature.
        </KeyTakeaway>

        {post.faq && post.faq.length > 0 && (
          <section className="mt-12">
            <Eyebrow tone="dawn">The FAQ</Eyebrow>
            <h2 className="font-serif text-2xl md:text-[1.75rem] text-paper mt-2 mb-5 leading-tight">
              What people ask us next.
            </h2>
            <dl className="divide-y divide-rule border-y border-rule">
              {post.faq.map((f, i) => (
                <div key={i} className="py-5 first:pt-0 last:pb-0">
                  <dt className="font-serif text-lg text-paper leading-snug mb-2">
                    {f.q}
                  </dt>
                  <dd className="text-[15.5px] text-paper/85 leading-relaxed">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <DotRule className="my-12" />

        <SourcesList sources={post.sources ?? []} />
        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-12">
          <EmailCapture variant="end-of-article" />
        </div>
      </ArticleShell>
    </>
  );
}
