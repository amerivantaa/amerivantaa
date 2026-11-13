import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";
import strategy from "@/assets/strategy-session.jpg";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { industries, services } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "Amerivantaa — Technology Solutions, Software & IT Consulting",
      "We help businesses turn ideas into scalable digital solutions — custom software, cloud, AI, data and QA from one dependable technology partner.",
    ),
  }),
  component: Home,
});

const featured = ["software", "enterprise", "ai", "cloud", "data", "qa"];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden" aria-labelledby="home-title">
        <div aria-hidden className="dot-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="container-site pb-14 pt-16 lg:pb-20 lg:pt-24">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow>Technology partner</Eyebrow>
              <h1 id="home-title" className="display-xl mt-6">
                We turn ideas into scalable{" "}
                <span className="text-muted-foreground">digital solutions.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="lede text-muted-foreground">
                Engineering expertise, strategic thinking and modern technology — combined to build
                reliable, secure and future-ready products.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Let's Talk <ArrowUpRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/company">Who we are</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="container-site pb-20 lg:pb-28">
          <Reveal delay={0.15} className="print-frame corner-marks">
            <div className="overflow-hidden">
              <img
                src={heroTeam}
                alt="Amerivantaa engineers collaborating around a shared table"
                width={1600}
                height={1104}
                fetchPriority="high"
                className="photo-grade aspect-[21/9] w-full object-cover"
              />
            </div>
            <div className="caption-mono flex justify-between py-3 text-muted-foreground">
              <span>Engineering, together</span>
              <span className="text-accent">AV — 2026</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-y border-t border-border bg-secondary" aria-label="What we do">
        <div className="container-site">
          <SectionHeading
            layout="split"
            eyebrow="What we do"
            title="End-to-end technology, from first idea to production."
            description="One partner across software, cloud, data, AI and quality — so nothing gets lost between teams."
          />
          <ul className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => featured.includes(s.id))
              .map((s, i) => (
                <li key={s.id} className="bg-background">
                  <Link
                    to="/solutions"
                    hash={s.id}
                    className="group flex h-full flex-col p-8 transition-colors duration-500 hover:bg-navy hover:text-on-navy lg:p-10"
                  >
                    <span className="caption-mono text-accent">0{i + 1}</span>
                    <h3 className="mt-8 text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-muted-foreground transition-colors group-hover:text-on-navy-muted">
                      {s.summary}
                    </p>
                    <ArrowRight className="mt-8 size-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                  </Link>
                </li>
              ))}
          </ul>
          <div className="mt-10">
            <Link to="/solutions" className="link-underline inline-flex items-center gap-2 font-medium">
              View all solutions <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-y" aria-label="Industries we serve">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Industries"
              title="Built for sectors where reliability matters."
              description="We bring domain awareness to industries with high expectations for security, compliance and uptime."
            />
            <Reveal delay={0.1} className="mt-10 hidden overflow-hidden lg:block">
              <img
                src={strategy}
                alt="An architecture planning session at a whiteboard"
                width={1200}
                height={912}
                loading="lazy"
                className="photo-grade aspect-[4/3] w-full object-cover"
              />
            </Reveal>
          </div>
          <ul className="border-b border-border lg:col-span-6 lg:col-start-7">
            {industries.map((ind, i) => (
              <Reveal as="li" key={ind.id} delay={i * 0.04}>
                <Link
                  to="/industries"
                  hash={ind.id}
                  className="group flex items-center justify-between gap-6 border-t border-border py-6"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="caption-mono text-muted-foreground">0{i + 1}</span>
                    <span className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent lg:text-xl">
                      {ind.title}
                    </span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Company teaser */}
      <section className="section-y border-t border-border bg-secondary" aria-label="About Amerivantaa">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Who we are</Eyebrow>
            <p className="display-md mt-6">
              Technology built with purpose.{" "}
              <span className="text-muted-foreground">
                We work as an extension of our clients' teams — with shared ownership, honest
                communication and disciplined engineering.
              </span>
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <Button asChild size="lg" variant="outline">
              <Link to="/company">
                Meet the company <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
