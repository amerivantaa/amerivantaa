import type { ReactNode } from "react";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";

/** Editorial page intro used on inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div aria-hidden className="dot-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="container-site grid gap-12 pb-20 pt-16 lg:grid-cols-12 lg:pb-28 lg:pt-24">
        <Reveal className="lg:col-span-8">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display-xl mt-6">{title}</h1>
          <p className="lede mt-8 max-w-2xl text-muted-foreground">{description}</p>
        </Reveal>
        {aside && (
          <Reveal delay={0.15} className="lg:col-span-4 lg:self-end">
            {aside}
          </Reveal>
        )}
      </div>
    </section>
  );
}
