import { createFileRoute } from "@tanstack/react-router";
import build from "@/assets/journey-build.jpg";
import validate from "@/assets/journey-validate.jpg";
import deliver from "@/assets/journey-deliver.jpg";
import strategy from "@/assets/strategy-session.jpg";
import { CtaSection } from "@/components/site/CtaSection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: pageMeta(
      "Our Work — Engagements & Outcomes | Amerivantaa",
      "How Amerivantaa engagements come together — modernization, new product builds, cloud migration and quality engineering.",
    ),
  }),
  component: WorkPage,
});

const engagements = [
  {
    tag: "Modernization",
    title: "Modernizing a legacy platform without disrupting the business",
    body: "Incremental re-architecture, careful data migration and parallel running so critical operations never stop.",
    img: strategy,
  },
  {
    tag: "New product",
    title: "Taking a new digital product from concept to launch",
    body: "Discovery, architecture, iterative builds and a launch plan — with one accountable team throughout.",
    img: build,
  },
  {
    tag: "Quality engineering",
    title: "Building confidence into every release",
    body: "Test strategy, automation frameworks and performance testing that shorten release cycles safely.",
    img: validate,
  },
  {
    tag: "Cloud & operations",
    title: "Moving to the cloud with reliability built in",
    body: "Infrastructure as code, CI/CD and observability so teams can deploy often and recover quickly.",
    img: deliver,
  },
];

function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            What an engagement <span className="text-muted-foreground">looks like.</span>
          </>
        }
        description="Below are the kinds of engagements we take on. Detailed client case studies will be published here as client permissions are confirmed."
      />
      <section className="section-y" aria-label="Engagement types">
        <div className="container-site grid gap-x-8 gap-y-16 md:grid-cols-2">
          {engagements.map((e, i) => (
            <Reveal key={e.tag} delay={(i % 2) * 0.08} className={i % 2 === 1 ? "md:mt-24" : undefined}>
              <article className="group">
                <div className="overflow-hidden">
                  <img
                    src={e.img}
                    alt=""
                    width={1200}
                    height={912}
                    loading="lazy"
                    className="photo-grade aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                  />
                </div>
                <p className="caption-mono mt-6 text-accent">
                  0{i + 1} — {e.tag}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">{e.title}</h2>
                <p className="mt-3 max-w-lg text-[0.98rem] leading-relaxed text-muted-foreground">{e.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaSection
        eyebrow="Your project next"
        title="Let's talk about what you're building."
        description="Share your challenge and we'll explain how we'd approach it — honestly and without obligation."
      />
    </>
  );
}
