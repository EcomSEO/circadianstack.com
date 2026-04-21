import { hubs } from "@/lib/content/hubs";
import { featuredPost, latestPosts } from "@/lib/content/posts";
import { HubCard } from "@/components/HubCard";
import { PostCard } from "@/components/PostCard";
import { EmailCapture } from "@/components/EmailCapture";
import Link from "next/link";

export default function HomePage() {
  const featured = featuredPost();
  const recent = latestPosts(6);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] text-paper">
            The science of when.
          </h1>
          <p className="mt-6 text-xl text-paper/80 max-w-2xl leading-relaxed">
            Protocol cards, cited research, and dose-accurate reviews — for
            morning light, sleep architecture, chronotype, and every other lever
            that resets a circadian clock.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/chronotype-quiz"
              className="inline-flex items-center rounded-md bg-dawn px-6 py-3 text-midnight font-semibold hover:bg-ember transition"
            >
              Take the Chronotype Quiz →
            </Link>
            <Link
              href="#hubs"
              className="inline-flex items-center rounded-md border border-paper/30 px-6 py-3 text-paper hover:border-paper transition"
            >
              Browse the guides
            </Link>
          </div>
        </div>
      </section>

      {featured && (
        <section className="mx-auto max-w-6xl px-6 py-14 border-t border-paper/10">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wide text-dawn">
              The Protocol card most readers save first
            </span>
          </div>
          <PostCard post={featured} variant="feature" />
        </section>
      )}

      <section id="hubs" className="mx-auto max-w-6xl px-6 py-16 border-t border-paper/10">
        <h2 className="font-serif text-3xl text-paper mb-8">The guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubs.map((hub) => (<HubCard key={hub.slug} hub={hub} />))}
        </div>
      </section>

      {recent.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 border-t border-paper/10">
          <h2 className="font-serif text-3xl text-paper mb-8">Latest</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recent.map((p) => (<PostCard key={p.slug} post={p} />))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-paper/10">
        <EmailCapture />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-paper/10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-lg text-paper mb-2">Every protocol cited.</h3>
            <p className="text-sm text-paper/70">Primary sources. Named researchers.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-paper mb-2">Every product dose-tested.</h3>
            <p className="text-sm text-paper/70">Lux meters, not marketing claims.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-paper mb-2">Every quiz peer-reviewed.</h3>
            <p className="text-sm text-paper/70">MCTQ-based. Not Buzzfeed.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
