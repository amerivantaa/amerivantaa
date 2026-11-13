import { team } from "@/content/team";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TeamCard } from "./TeamCard";

const groups = [
  { label: "Leadership & direction", members: team.slice(0, 2), offset: 0 },
  { label: "Engineering & delivery", members: team.slice(2), offset: 2 },
];

export function TeamSection() {
  return (
    <section id="people" className="section-y scroll-mt-16 bg-secondary" aria-label="Our people">
      <div className="container-site">
        <SectionHeading
          layout="split"
          eyebrow="The people behind the technology"
          title="Meet the people who turn ideas into reality."
          description="Great technology starts with great people. Our team brings together engineering expertise, business understanding, and a shared commitment to delivering meaningful results."
        />

        <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-20">
          {groups.map((g) => (
            <div key={g.label} className="grid gap-8 lg:grid-cols-12 lg:gap-6">
              <Reveal className="lg:col-span-3">
                <div className="flex items-center gap-4 border-t border-foreground pt-4 lg:block">
                  <h3 className="caption-mono text-foreground">{g.label}</h3>
                  <p className="caption-mono text-muted-foreground lg:mt-2">
                    {String(g.members.length).padStart(2, "0")} people
                  </p>
                </div>
              </Reveal>
              <ul
                className={
                  g.offset === 0
                    ? "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:col-span-6"
                    : "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:col-span-9"
                }
              >
                {g.members.map((m, i) => (
                  <Reveal as="li" key={m.role} delay={(i % 3) * 0.08}>
                    <TeamCard member={m} index={g.offset + i} />
                  </Reveal>
                ))}
              </ul>
              {g.offset === 0 && (
                <Reveal delay={0.15} className="hidden lg:col-span-3 lg:flex lg:flex-col lg:justify-end">
                  <p className="border-l-2 border-accent pl-5 text-[1.05rem] leading-relaxed text-foreground">
                    Every engagement is led by people who stay close to the work — from the first
                    conversation to long after launch.
                  </p>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
