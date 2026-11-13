import { motion, useReducedMotion } from "framer-motion";
import heroTeam from "@/assets/hero-team.jpg";
import strategy from "@/assets/strategy-session.jpg";
import office from "@/assets/office-workspace.jpg";
import { Eyebrow } from "@/components/site/SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

function Print({
  src,
  alt,
  caption,
  index,
  className,
  priority,
  delay = 0,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  index: string;
  className?: string;
  priority?: boolean;
  delay?: number;
  width: number;
  height: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease }}
      className={`print-frame group ${className ?? ""}`}
    >
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className="photo-grade aspect-[4/3] h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="caption-mono flex items-center gap-3 py-3 text-muted-foreground">
        <span className="text-accent">{index}</span>
        <span>{caption}</span>
      </figcaption>
    </motion.figure>
  );
}

export function CompanyHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden border-b border-border" aria-labelledby="company-hero-title">
      <div aria-hidden className="dot-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_75%_45%,black_20%,transparent_75%)]" />
      <div className="container-site grid items-center gap-16 pb-20 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20">
        <motion.div
          className="lg:col-span-6"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <Eyebrow>Who we are</Eyebrow>
          <h1 id="company-hero-title" className="display-xl mt-6">
            Technology built with purpose.{" "}
            <span className="text-muted-foreground">Partnerships built to last.</span>
          </h1>
          <p className="lede mt-8 max-w-xl text-muted-foreground">
            We are a team of technology professionals, strategic thinkers, and problem-solvers helping
            businesses build, modernize, and scale digital experiences. We work alongside our clients
            to turn complex challenges into meaningful technology solutions.
          </p>
          <nav aria-label="On this page" className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
            {[
              ["people", "Our people"],
              ["values", "Our values"],
              ["approach", "How we work"],
              ["journey", "Project journey"],
            ].map(([id, label], n) => (
              <a
                key={id}
                href={`#${id}`}
                className="group inline-flex items-baseline gap-2 text-[0.9rem] font-medium text-foreground"
              >
                <span className="caption-mono text-accent">0{n + 1}</span>
                <span className="link-underline">{label}</span>
              </a>
            ))}
          </nav>
        </motion.div>

        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-12 gap-4 sm:gap-5">
            <Print
              src={heroTeam}
              alt="Amerivantaa engineers reviewing code together around a shared table"
              caption="Code review — the studio"
              index="01"
              priority
              width={1600}
              height={1104}
              className="corner-marks col-span-12 sm:col-span-9"
            />
            <div className="col-span-12 grid grid-cols-2 gap-4 sm:col-span-12 sm:grid-cols-12 sm:gap-5">
              <Print
                src={office}
                alt="A calm, modern technology workspace in morning light"
                caption="Workspace"
                index="02"
                delay={0.25}
                width={1200}
                height={912}
                className="col-span-1 sm:col-span-5 sm:col-start-2 sm:-mt-10"
              />
              <Print
                src={strategy}
                alt="An architect sketching a system design on a glass whiteboard with colleagues"
                caption="Architecture session"
                index="03"
                delay={0.4}
                width={1200}
                height={912}
                className="col-span-1 sm:col-span-6 sm:-mt-24"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
