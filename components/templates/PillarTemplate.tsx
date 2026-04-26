import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { ReviewStamp } from "../ReviewStamp";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { MethodologyByline } from "../editorial/MethodologyByline";
import { BodyImageSlot } from "../editorial/BodyImageSlot";
import { PullQuote } from "../editorial/PullQuote";
import { ProtocolCard } from "../editorial/ProtocolCard";

/**
 * PillarTemplate — pliability-style long-form article shell.
 *
 * Section order (replicates pliability.com/stories anatomy):
 *   1.  Sticky midnight bar (rendered globally in layout)
 *   2.  Editorial strip (rendered in Header)
 *   3.  Article container max-w-3xl
 *   4.  Vertical breathing space pt-16 md:pt-24
 *   5.  Amber tag pill, centered
 *   6.  Centered H1 (IBM Plex Sans 400, clamp 2.25rem - 3.75rem)
 *   7.  Centered subhead
 *   8.  MethodologyByline
 *   9.  Thin rule
 *  10.  Caps "CIRCADIANSTACK · ISO date" meta row
 *  11.  Big hero photo placeholder
 *  12.  Protocol card (signature artifact, when present)
 *  13.  First body paragraph (lede)
 *  14.  Pullquote callout
 *  15.  H2 sections rendered from items[]
 *  16.  Inline image slots between sections
 *  17.  FAQ as readable prose, not bordered cards
 *  18.  SourcesList numbered at bottom
 */
export function PillarTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#guides" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

  const isoDate = new Date(post.publishedAt).toLocaleDateString("en-CA");

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

      <article className="mx-auto max-w-3xl px-6 pt-16 md:pt-24 pb-16">
        {/* 5. Amber tag pill, centered */}
        <div className="flex justify-center">
          <span
            className="inline-flex items-center bg-dawn text-midnight font-mono font-medium tracking-[0.1em] uppercase px-3 py-1.5 rounded-full text-[11px] leading-none"
          >
            {hub ? hub.shortName.toUpperCase() : "PROTOCOL"}
          </span>
        </div>

        {/* 6. Centered H1 — IBM Plex Sans 400, 60px clamp, line-height 1.1 */}
        <h1
          className="mt-6 text-center font-normal text-paper text-balance"
          style={{
            fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {post.h1}
        </h1>

        {/* 7. Centered subhead */}
        <p className="mt-6 mx-auto max-w-2xl text-center text-[1.125rem] md:text-[1.1875rem] leading-[1.5] text-paper/85">
          {post.description}
        </p>

        {/* 8. MethodologyByline */}
        <MethodologyByline reviewedOn={post.updatedAt} />

        {/* 9. Thin rule */}
        <hr className="mt-12 border-0 border-t border-rule" />

        {/* 10. Caps CIRCADIANSTACK · ISO date row */}
        <div className="mt-4 flex items-center justify-between caps-label text-slate">
          <span>CIRCADIANSTACK</span>
          <span className="tnum">{isoDate}</span>
        </div>

        {/* 11. Big hero photo */}
        <BodyImageSlot aspect="16:10" variant="dawn" className="mt-10 !my-0" />

        {/* 12. Protocol card — signature artifact */}
        {post.protocolCard && (
          <div id="protocol" className="mt-12">
            <ProtocolCard post={post} variant="featured" />
          </div>
        )}

        {/* 13. First body paragraph (lede) */}
        <div className="mt-12 prose">
          <p>{post.description}</p>

          {/* 14. Pullquote callout — sits early to break up the lede */}
          <div className="not-prose">
            <PullQuote attribution="CircadianStack house view, methodology v1.2">
              We answer the question you actually asked in the first paragraph.
              Everything that follows is the why — sourced from the trial and
              the dose-response curve, written for someone reading on her phone
              at 6am.
            </PullQuote>
          </div>

          {/* 15. Items rendered as H2 sections — readable prose, not cards */}
          {post.items && post.items.length > 0 && (
            <>
              {post.items.map((item, i) => (
                <section key={item.rank} className="not-prose">
                  <h2
                    className="mt-16 mb-6 font-normal text-paper"
                    style={{
                      fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                      fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.name}
                  </h2>
                  <p className="text-[1.125rem] leading-[1.7] text-paper/85 max-w-prose">
                    {item.summary}
                  </p>
                  {/* Inline image every ~3 items */}
                  {i > 0 && i % 3 === 0 && (
                    <BodyImageSlot
                      aspect="4:5"
                      variant={i % 2 === 0 ? "zenith" : "ember"}
                    />
                  )}
                </section>
              ))}
            </>
          )}

          {/* 17. FAQ rendered as readable prose, not bordered cards */}
          {post.faq && post.faq.length > 0 && (
            <section id="faq" className="not-prose">
              <h2
                className="mt-20 mb-8 font-normal text-paper"
                style={{
                  fontFamily: '"IBM Plex Sans", Inter, system-ui, sans-serif',
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                Frequently asked questions
              </h2>
              <div className="space-y-10">
                {post.faq.map((f, i) => (
                  <div key={i}>
                    <h3 className="text-[1.5rem] font-semibold leading-[1.3] text-paper">
                      {f.q}
                    </h3>
                    <p className="mt-3 text-[1.125rem] leading-[1.7] text-paper/85 max-w-prose">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* 18. Sources — numbered list at bottom */}
        <div id="sources" className="mt-20">
          <SourcesList sources={post.sources ?? []} />
        </div>

        {/* Reading meta — kept compact, no decorative chrome */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <ReviewStamp
            updatedAt={post.updatedAt}
            readingTime={post.readingTime}
          />
        </div>

        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-14">
          <EmailCapture variant="end-of-article" />
        </div>
      </article>
    </>
  );
}
