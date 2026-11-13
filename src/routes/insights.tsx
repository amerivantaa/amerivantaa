import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/site/CtaSection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: pageMeta(
      "Insights — Perspectives on Technology | Amerivantaa",
      "Perspectives from Amerivantaa on software engineering, cloud, AI, data and technology strategy.",
    ),
  }),
  component: InsightsPage,
});

const topics = [
  { cat: "Engineering", title: "Designing systems that are easy to change" },
  { cat: "Cloud & DevOps", title: "What a healthy delivery pipeline looks like" },
  { cat: "AI & Automation", title: "Finding the automation opportunities that actually pay off" },
  { cat: "Quality", title: "Building a test strategy your team will trust" },
  { cat: "Data", title: "From scattered data to decisions you can defend" },
  { cat: "Advisory", title: "Questions to ask before modernizing a legacy platform" },
];

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Perspectives on <span className="text-muted-foreground">building better technology.</span>
          </>
        }
        description="Practical thinking from our engineers and consultants. Our first articles are in progress — here's what's coming."
      />
      <section className="section-y" aria-label="Upcoming articles">
        <div className="container-site">
          <ul className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {topics.map((t, i) => (
              <Reveal as="li" key={t.title} delay={(i % 3) * 0.06} className="bg-background">
                <article className="flex h-full flex-col p-8 lg:p-10">
                  <div className="flex items-center justify-between">
                    <span className="caption-mono text-accent">{t.cat}</span>
                    <span className="caption-mono rounded-sm bg-secondary px-2 py-1 text-muted-foreground">Coming soon</span>
                  </div>
                  <h2 className="mt-12 flex-1 text-xl font-semibold leading-snug tracking-tight">{t.title}</h2>
                </article>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <Link to="/contact" className="link-underline inline-flex items-center gap-2 font-medium">
              Have a topic you'd like us to cover? Tell us <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
