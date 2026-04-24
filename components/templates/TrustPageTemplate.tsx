import { ReactNode } from "react";
import { Breadcrumbs } from "../Breadcrumbs";
import { Eyebrow } from "../editorial/Eyebrow";
import { LabRule } from "../editorial/DotRule";

export function TrustPageTemplate({
  title,
  children,
  eyebrow = "The Masthead",
}: {
  title: string;
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Breadcrumbs
        crumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <Eyebrow tone="dawn" className="mt-6 inline-block">
        {eyebrow}
      </Eyebrow>
      <h1 className="display-headline mt-3 text-[2.25rem] md:text-[3rem] leading-[1.04]">
        {title}
      </h1>
      <LabRule className="mt-8" />
      <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-paper/90 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-paper [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-paper [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_a]:text-dawn [&_a]:underline [&_strong]:text-paper [&_code]:font-mono [&_code]:text-dawn">
        {children}
      </div>
    </article>
  );
}
