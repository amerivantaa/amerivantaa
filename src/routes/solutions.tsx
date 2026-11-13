import { createFileRoute } from "@tanstack/react-router";
import office from "@/assets/office-workspace.jpg";
import { CtaSection } from "@/components/site/CtaSection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: pageMeta(
      "Solutions — Software, Cloud, AI & QA | Amerivantaa",
      "Custom software, enterprise systems, AI and automation, cloud and DevOps, data engineering, QA, consulting, staffing and managed IT services.",
    ),
  }),
  component: SolutionsPage,
});

const models = [
  { title: "Project delivery", body: "A defined scope, outcome and timeline — owned end-to-end by our team." },
  { title: "Dedicated team", body: "A stable, cross-functional team working exclusively on your roadmap." },
  { title: "Team augmentation", body: "Skilled engineers who join your team and follow your processes." },
];

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Capabilities that cover <span className="text-muted-foreground">the full lifecycle.</span>
          </>
        }
        description="From strategy and architecture to engineering, testing and ongoing support — choose a single capability or a complete delivery team."
      />

      <section className="section-y" aria-label="Our services">
        <div className="container-site">
          <ol className="border-b border-border">
            {services.map((s, i) => (
              <Reveal as="li" key={s.id}>
                <div id={s.id} className="group grid scroll-mt-24 gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-8 lg:py-12">
                  <span className="caption-mono text-muted-foreground transition-colors group-hover:text-accent md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight md:col-span-5 lg:text-[1.75rem]">{s.title}</h2>
                  <div className="md:col-span-6">
                    <p className="text-[1.02rem] leading-relaxed text-muted-foreground">{s.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.points.map((p) => (
                        <li key={p} className="rounded-sm border border-border px-3 py-1.5 font-mono text-[0.75rem] text-foreground/80">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-secondary" aria-label="Engagement models">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Engagement models"
              title="Work with us in the way that suits you."
              description="Every engagement starts with understanding your goals — then we shape the team around them."
            />
            <dl className="mt-12 space-y-px overflow-hidden border border-border bg-border">
              {models.map((m) => (
                <div key={m.title} className="bg-background p-6">
                  <dt className="font-semibold">{m.title}</dt>
                  <dd className="mt-2 text-[0.92rem] text-muted-foreground">{m.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <img
              src={office}
              alt="A modern technology workspace"
              width={1200}
              height={912}
              loading="lazy"
              className="photo-grade aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
