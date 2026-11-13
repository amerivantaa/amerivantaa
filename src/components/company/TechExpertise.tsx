import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const techCategories = [
  { name: "Software Engineering", items: ["Java", "Spring Boot", "Python", "JavaScript", "React", "Node.js"] },
  { name: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD"] },
  { name: "Data & Integration", items: ["SQL", "PostgreSQL", "MySQL", "Kafka", "Redis", "API Integrations"] },
  {
    name: "AI & Automation",
    items: ["Artificial Intelligence", "Machine Learning", "Intelligent Automation", "Workflow Automation"],
  },
  {
    name: "Quality Engineering",
    items: ["Manual Testing", "Automation Testing", "API Testing", "Performance Testing"],
  },
];

export function TechExpertise() {
  return (
    <section className="section-y" aria-label="Our technology expertise">
      <div className="container-site">
        <SectionHeading eyebrow="Built on the right technology" title="Technology that moves businesses forward." />
        <div className="mt-16 border-b border-border lg:mt-20">
          {techCategories.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="group grid gap-5 border-t border-border py-8 transition-colors duration-500 hover:bg-secondary/60 md:grid-cols-12 md:items-center md:gap-8 md:px-4 lg:py-10">
                <div className="flex items-baseline gap-5 md:col-span-4">
                  <span className="caption-mono text-muted-foreground transition-colors group-hover:text-accent">0{i + 1}</span>
                  <h3 className="text-xl font-semibold tracking-tight lg:text-2xl">{c.name}</h3>
                </div>
                <ul className="flex flex-wrap gap-2 md:col-span-8">
                  {c.items.map((t) => (
                    <li
                      key={t}
                      className="rounded-sm border border-border bg-background px-3 py-1.5 font-mono text-[0.78rem] text-foreground/80 transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
