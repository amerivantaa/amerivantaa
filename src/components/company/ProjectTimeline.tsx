import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import understandImg from "@/assets/journey-understand.jpg";
import planImg from "@/assets/strategy-session.jpg";
import buildImg from "@/assets/journey-build.jpg";
import validateImg from "@/assets/journey-validate.jpg";
import deliverImg from "@/assets/journey-deliver.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

const days = [
  {
    day: "Monday",
    short: "Mon",
    title: "Understand",
    body: "We understand the client's business challenges, requirements, and expectations.",
    img: understandImg,
    alt: "A consultant listening to client stakeholders during a discovery workshop",
    focus: ["Stakeholder interviews", "Goals & constraints", "Success criteria"],
    who: "Consultants · Stakeholders",
  },
  {
    day: "Tuesday",
    short: "Tue",
    title: "Plan",
    body: "We define the solution architecture, technology stack, roadmap, and delivery priorities.",
    img: planImg,
    alt: "An architect mapping a system design on a whiteboard",
    focus: ["Solution architecture", "Technology stack", "Roadmap & priorities"],
    who: "Architects · Tech leads",
  },
  {
    day: "Wednesday",
    short: "Wed",
    title: "Build",
    body: "Our engineering team develops the solution using modern technologies and best practices.",
    img: buildImg,
    alt: "Two engineers pair-programming at a monitor",
    focus: ["Iterative development", "Code review", "Continuous integration"],
    who: "Engineers · DevOps",
  },
  {
    day: "Thursday",
    short: "Thu",
    title: "Validate",
    body: "We perform quality assurance, testing, security checks, and stakeholder reviews.",
    img: validateImg,
    alt: "A QA engineer reviewing test results with a colleague",
    focus: ["Functional & automated tests", "Security checks", "Stakeholder review"],
    who: "QA engineers · Stakeholders",
  },
  {
    day: "Friday",
    short: "Fri",
    title: "Deliver & Improve",
    body: "We deploy the solution, monitor performance, and continue improving it based on real-world feedback.",
    img: deliverImg,
    alt: "An engineering team reviewing live performance dashboards",
    focus: ["Deployment", "Performance monitoring", "Feedback-driven iteration"],
    who: "Whole team",
  },
];

const STEP_MS = 6500;
const ease = [0.22, 1, 0.36, 1] as const;

function Panel({ i }: { i: number }) {
  const d = days[i]!;
  const reduce = useReducedMotion();
  return (
    <motion.div
      key={i}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease }}
      className="grid gap-10 lg:grid-cols-12 lg:gap-14"
    >
      <div className="relative overflow-hidden lg:col-span-7">
        <motion.img
          src={d.img}
          alt={d.alt}
          width={1200}
          height={912}
          loading="lazy"
          decoding="async"
          initial={reduce ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease }}
          className="photo-grade aspect-[16/10] w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-background px-4 py-3">
          <span className="caption-mono text-accent">0{i + 1}</span>
          <span className="caption-mono text-foreground">{d.day}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:col-span-5">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          <p className="caption-mono text-muted-foreground">Step 0{i + 1} of 05</p>
          <h3 className="display-lg mt-4">{d.title}</h3>
          <p className="lede mt-5 text-muted-foreground">{d.body}</p>
          <dl className="mt-10 grid grid-cols-[7rem_1fr] gap-y-3 border-t border-border pt-6 text-[0.92rem]">
            <dt className="caption-mono pt-0.5 text-muted-foreground">Who</dt>
            <dd>{d.who}</dd>
            <dt className="caption-mono pt-0.5 text-muted-foreground">Focus</dt>
            <dd>
              <ul className="space-y-2">
                {d.focus.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span aria-hidden className="h-1 w-3 bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ProjectTimeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.35 });
  const reduce = useReducedMotion();
  const playing = !reduce && !paused && !hovering && inView;

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % days.length), STEP_MS);
    return () => window.clearTimeout(t);
  }, [playing, active]);

  const go = (n: number) => setActive((n + days.length) % days.length);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    let next = active;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % days.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (active - 1 + days.length) % days.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = days.length - 1;
    else return;
    e.preventDefault();
    setPaused(true);
    setActive(next);
    tabs.current[next]?.focus();
  };

  const select = (i: number) => {
    setPaused(true);
    setActive(i);
  };

  return (
    <section id="journey" className="section-y scroll-mt-16 bg-secondary" aria-label="A project journey">
      <div className="container-site" ref={sectionRef}>
        <SectionHeading
          layout="split"
          eyebrow="From ideas to execution"
          title="See how we turn a business challenge into a working solution."
          description="Every successful project follows a thoughtful process. We bring the right people together, make informed decisions, and focus on measurable outcomes."
        />

        {/* Desktop: horizontal timeline */}
        <Reveal className="mt-16 hidden md:block lg:mt-24">
          <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <div role="tablist" aria-label="Project journey" className="grid grid-cols-5 border-t border-border">
              {days.map((d, i) => {
                const current = i === active;
                const done = i < active;
                return (
                  <button
                    key={d.day}
                    ref={(el) => {
                      tabs.current[i] = el;
                    }}
                    role="tab"
                    id={`journey-tab-${i}`}
                    aria-selected={current}
                    aria-controls="journey-panel"
                    tabIndex={current ? 0 : -1}
                    onClick={() => select(i)}
                    onKeyDown={onKey}
                    className="group relative pb-6 pr-6 pt-7 text-left"
                  >
                    {/* progress track */}
                    <span aria-hidden className="absolute -top-px left-0 right-0 h-0.5 overflow-hidden">
                      {current ? (
                        <motion.span
                          key={`${active}-${playing}`}
                          className="block h-full origin-left bg-accent"
                          initial={{ scaleX: playing ? 0 : 1 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: playing ? STEP_MS / 1000 : 0.3, ease: "linear" }}
                        />
                      ) : (
                        <span className={cn("block h-full bg-foreground/80 transition-transform duration-500", done ? "scale-x-100" : "scale-x-0")} style={{ transformOrigin: "left" }} />
                      )}
                    </span>
                    <span className={cn("caption-mono block transition-colors", current ? "text-accent" : "text-muted-foreground")}>
                      0{i + 1} — {d.day}
                    </span>
                    <span
                      className={cn(
                        "mt-3 block text-xl font-semibold tracking-tight transition-colors duration-300",
                        current ? "text-foreground" : "text-muted-foreground/70 group-hover:text-foreground",
                      )}
                    >
                      {d.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id="journey-panel"
              role="tabpanel"
              aria-labelledby={`journey-tab-${active}`}
              aria-live="polite"
              className="mt-10"
            >
              <AnimatePresence mode="wait">
                <Panel key={active} i={active} />
              </AnimatePresence>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
              <p className="caption-mono text-muted-foreground">
                <span className="text-foreground">0{active + 1}</span> / 05
              </p>
              <div className="flex items-center gap-2">
                {!reduce && (
                  <button
                    type="button"
                    onClick={() => setPaused((p) => !p)}
                    aria-label={paused ? "Play timeline" : "Pause timeline"}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-foreground"
                  >
                    {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setPaused(true);
                    go(active - 1);
                  }}
                  aria-label="Previous step"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-foreground"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPaused(true);
                    go(active + 1);
                  }}
                  aria-label="Next step"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-accent"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mobile: vertical timeline */}
        <ol className="relative mt-12 md:hidden">
          <span aria-hidden className="absolute bottom-2 left-[0.4375rem] top-2 w-px bg-border" />
          {days.map((d, i) => {
            const current = i === active;
            return (
              <li key={d.day} className="relative pb-8 pl-10 last:pb-0">
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-1 block h-3.5 w-3.5 rounded-full border-2 transition-all duration-500",
                    current
                      ? "border-accent bg-accent shadow-[0_0_0_5px_color-mix(in_oklab,var(--blue)_18%,transparent)]"
                      : i < active
                        ? "border-accent bg-background"
                        : "border-input bg-background",
                  )}
                />
                <button
                  type="button"
                  aria-expanded={current}
                  aria-controls={`journey-m-${i}`}
                  onClick={() => setActive(i)}
                  className="block w-full text-left"
                >
                  <span className={cn("caption-mono block", current ? "text-accent" : "text-muted-foreground")}>
                    0{i + 1} — {d.day}
                  </span>
                  <span className={cn("mt-1 block text-lg font-semibold tracking-tight", !current && "text-muted-foreground")}>
                    {d.title}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {current && (
                    <motion.div
                      id={`journey-m-${i}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <img
                        src={d.img}
                        alt={d.alt}
                        width={1200}
                        height={912}
                        loading="lazy"
                        className="photo-grade mt-4 aspect-[16/10] w-full object-cover"
                      />
                      <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{d.body}</p>
                      <p className="caption-mono mt-3 text-foreground">{d.who}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
