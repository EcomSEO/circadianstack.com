import { Eyebrow } from "./editorial/Eyebrow";

export function AuthorBio() {
  return (
    <section className="mt-12 p-6 md:p-7 border border-rule rounded-sm bg-midnight-raised/60">
      <Eyebrow tone="slate">The Author</Eyebrow>
      <h3 className="font-serif text-lg text-paper mt-2 mb-2">
        The CircadianStack Team
      </h3>
      <p className="text-paper/85 leading-relaxed text-[15px]">
        CircadianStack is a small publication of researchers and writers
        focused on the chronobiology literature. We cite primary sources,
        publish protocols as structured cards, and update recommendations
        when new trial data arrives. We don't sell sleep. We publish the
        science of when.
      </p>
    </section>
  );
}
