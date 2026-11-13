import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: "01",
    title: "You",
    side: "Your side",
    body: "The business owner or stakeholder who understands the challenge, goals, and priorities.",
  },
  {
    n: "02",
    title: "Strategy & Consulting",
    side: "Amerivantaa",
    body: "Our consultants understand your requirements, identify opportunities, and establish the right technology direction.",
  },
  {
    n: "03",
    title: "Architecture & Engineering",
    side: "Amerivantaa",
    body: "Our architects and engineers design, develop, integrate, and test solutions.",
  },
  {
    n: "04",
    title: "Delivery & Support",
    side: "Amerivantaa",
    body: "We deploy, monitor, optimize, and continuously support the technology we deliver.",
  },
];

export function ApproachSection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const progress = active / (steps.length - 1);

  return (
    <section id="approach" className="surface-navy relative isolate scroll-mt-16 overflow-hidden section-y" aria-label="Our approach">
      <div aria-hidden className="dot-grid-dark absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
      <div className="container-site">
        <SectionHeading
          tone="dark"
          layout="split"
          eyebrow="Our approach"
          title="One team. Shared ownership. Meaningful outcomes."
          description="We bring business understanding, technical leadership, and engineering execution together to solve problems from the first conversation through production."
        />

        <Reveal className="mt-16 lg:mt-24">
          {/* Team bracket (desktop) */}
          <div aria-hidden className="mb-6 hidden grid-cols-4 gap-6 lg:grid">
            <span className="caption-mono text-on-navy-muted">Your side</span>
            <div className="col-span-3 flex items-center gap-3">
              <span className="h-3 w-px bg-accent" />
              <span className="h-px flex-1 bg-accent/50" />
              <span className="caption-mono text-accent">Amerivantaa team</span>
              <span className="h-px flex-1 bg-accent/50" />
              <span className="h-3 w-px bg-accent" />
            </div>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div aria-hidden className="absolute left-[1.375rem] right-[calc(25%-1.375rem)] top-[1.375rem] hidden h-px bg-navy-line lg:block">
              <motion.div
                className="h-full origin-left bg-accent"
                animate={{ scaleX: progress }}
                transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            {/* Connecting line (mobile) */}
            <div aria-hidden className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-navy-line lg:hidden" />

            <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
              {steps.map((s, i) => {
                const on = i <= active;
                const current = i === active;
                return (
                  <li key={s.n}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={current}
                      className="group flex w-full gap-6 text-left lg:block"
                    >
                      <span
                        className={cn(
                          "relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono text-[0.8rem] transition-all duration-500",
                          current
                            ? "border-accent bg-accent text-accent-foreground shadow-[0_0_0_6px_color-mix(in_oklab,var(--blue)_22%,transparent)]"
                            : on
                              ? "border-accent bg-navy text-on-navy"
                              : "border-navy-line bg-navy text-on-navy-muted group-hover:border-on-navy-muted",
                        )}
                      >
                        {s.n}
                      </span>
                      <span className="block lg:mt-8">
                        <span className="caption-mono text-on-navy-muted lg:hidden">{s.side}</span>
                        <span
                          className={cn(
                            "mt-1 block text-xl font-semibold tracking-tight transition-colors duration-500 lg:mt-0",
                            current ? "text-on-navy" : "text-on-navy/70",
                          )}
                        >
                          {s.title}
                        </span>
                        <span
                          className={cn(
                            "mt-3 block max-w-xs text-[0.95rem] leading-relaxed transition-colors duration-500",
                            current ? "text-on-navy-muted" : "text-on-navy-muted/60",
                          )}
                        >
                          {s.body}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
