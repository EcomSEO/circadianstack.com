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
import { WideArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, LabRule } from "../editorial/DotRule";
import { KeyTakeaway } from "../editorial/KeyTakeaway";
import { PullQuote } from "../editorial/PullQuote";
import { ProtocolCard } from "../editorial/ProtocolCard";

export function PillarTemplate({ post }: { post: Post }) {
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

      <WideArticleShell
        aside={
          <nav className="space-y-6">
            <div>
              <Eyebrow tone="slate">On this page</Eyebrow>
              <ul className="mt-3 space-y-2 text-[14px]">
                <li>
                  <a href="#lede" className="text-paper/85 hover:text-dawn">
                    The short answer
                  </a>
                </li>
                {post.protocolCard && (
                  <li>
                    <a
                      href="#protocol"
                      className="text-paper/85 hover:text-dawn"
                    >
                      Protocol card
                    </a>
                  </li>
                )}
                {post.faq && post.faq.length > 0 && (
                  <li>
                    <a href="#faq" className="text-paper/85 hover:text-dawn">
                      FAQ
                    </a>
                  </li>
                )}
                <li>
                  <a href="#sources" className="text-paper/85 hover:text-dawn">
                    Sources
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-rule">
              <Eyebrow tone="slate">The lab</Eyebrow>
              <dl className="mt-3 space-y-2.5 text-[13.5px]">
                <div className="flex justify-between">
                  <dt className="text-slate">Cited</dt>
                  <dd className="text-dawn tnum">
                    {(post.sources ?? []).length} sources
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate">Read time</dt>
                  <dd className="text-dawn tnum">{post.readingTime} min</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate">Last updated</dt>
                  <dd className="text-paper">
                    {new Date(post.updatedAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </dd>
                </div>
                {hub && (
                  <div className="flex justify-between">
                    <dt className="text-slate">Hub</dt>
                    <dd className="text-paper text-right">{hub.shortName}</dd>
                  </div>
                )}
              </dl>
            </div>
          </nav>
        }
      >
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="dawn">Protocol Pillar</Eyebrow>
          {hub && (
            <span className="caps-label text-slate">· {hub.shortName}</span>
          )}
        </div>

        <h1
          id="lede"
          className="display-headline mt-4 text-[2.25rem] md:text-[3.1rem] leading-[1.04]"
        >
          {post.h1}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <ReviewStamp
            updatedAt={post.updatedAt}
            readingTime={post.readingTime}
          />
        </div>

        <LabRule className="mt-8" />

        <p className="drop-cap mt-10 text-[1.12rem] md:text-[1.17rem] leading-[1.7] text-paper/90 max-w-[62ch]">
          {post.description}
        </p>

        {/* Protocol card — the signature artifact, above the fold */}
        {post.protocolCard && (
          <div id="protocol">
            <ProtocolCard post={post} variant="featured" />
          </div>
        )}

        <PullQuote attribution="CircadianStack house view">
          We report doses, not vibes. Every recommendation ships as a Protocol
          card — and every card cites the trial the dose came from.
        </PullQuote>

        <KeyTakeaway variant="key-takeaway" title="What this pillar covers">
          The strongest available evidence, the dose-response range, the
          timing window, and the failure modes — in priority order, with
          every claim sourced to the primary study.
        </KeyTakeaway>

        {post.faq && post.faq.length > 0 && (
          <section id="faq" className="mt-14">
            <Eyebrow tone="dawn">The FAQ</Eyebrow>
            <h2 className="font-serif text-3xl text-paper mt-2 mb-6 leading-tight">
              Questions readers arrive with.
            </h2>
            <dl className="divide-y divide-rule border-y border-rule">
              {post.faq.map((f, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[1fr_2fr] gap-5 py-6 first:pt-0 last:pb-0"
                >
                  <dt className="font-serif text-lg text-paper leading-snug">
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

        <DotRule className="my-14" />

        <div id="sources">
          <SourcesList sources={post.sources ?? []} />
        </div>

        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-14">
          <EmailCapture variant="end-of-article" />
        </div>
      </WideArticleShell>
    </>
  );
}
