import { createFileRoute } from "@tanstack/react-router";
import { ApproachSection } from "@/components/company/ApproachSection";
import { CompanyHero } from "@/components/company/CompanyHero";
import { GlobalCollab } from "@/components/company/GlobalCollab";
import { ProjectTimeline } from "@/components/company/ProjectTimeline";
import { TeamSection } from "@/components/company/TeamSection";
import { TechExpertise } from "@/components/company/TechExpertise";
import { ValuesSection } from "@/components/company/ValuesSection";
import { CtaSection } from "@/components/site/CtaSection";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: pageMeta(
      "Company — Who We Are | Amerivantaa",
      "Meet the people, values and approach behind Amerivantaa — a technology partner built on purpose and long-term partnerships.",
    ),
  }),
  component: CompanyPage,
});

function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <TeamSection />
      <ValuesSection />
      <ApproachSection />
      <ProjectTimeline />
      <TechExpertise />
      <GlobalCollab />
      <CtaSection />
    </>
  );
}
