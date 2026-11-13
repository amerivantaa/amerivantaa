import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: pageMeta("Privacy Policy | Amerivantaa", "How Amerivantaa collects, uses and protects information shared through this website."),
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page is being prepared. The final, legally reviewed version will be published here before launch."
      />
      <section className="section-y">
        <div className="container-site max-w-3xl text-[1rem] leading-relaxed text-muted-foreground">
          <p>
            If you have a question in the meantime, please reach out through our contact page.
          </p>
        </div>
      </section>
    </>
  );
}
