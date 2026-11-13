import { createFileRoute } from "@tanstack/react-router";
import understand from "@/assets/journey-understand.jpg";
import { CtaSection } from "@/components/site/CtaSection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { industries } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: pageMeta(
      "Industries — Banking, Healthcare, FinTech & More | Amerivantaa",
      "Technology solutions for banking and financial services, healthcare, FinTech, insurance, retail and e-commerce, and enterprise technology.",
    ),
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Deep context for <span className="text-muted-foreground">demanding sectors.</span>
          </>
        }
        description="We pair engineering capability with an understanding of the pressures each industry faces — security, compliance, scale and customer expectations."
      />
      <section className="section-y" aria-label="Industries we serve">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:col-span-8">
            {industries.map((ind, i) => (
              <Reveal as="li" key={ind.id} delay={(i % 2) * 0.06} className="bg-background">
                <div id={ind.id} className="group h-full scroll-mt-24 p-8 transition-colors duration-500 hover:bg-secondary lg:p-10">
                  <span className="caption-mono text-accent">0{i + 1}</span>
                  <h2 className="mt-10 text-xl font-semibold tracking-tight lg:text-2xl">{ind.title}</h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{ind.summary}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <img
                src={understand}
                alt="A consultant in a discovery conversation with client stakeholders"
                width={1200}
                height={912}
                loading="lazy"
                className="photo-grade aspect-[4/5] w-full object-cover"
              />
              <p className="caption-mono mt-4 text-muted-foreground">Every engagement starts with listening.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
