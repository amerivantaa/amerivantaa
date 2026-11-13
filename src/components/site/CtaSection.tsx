import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mark from "@/assets/brand/amerivantaa-mark-dark.png.asset.json";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";

type CtaSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CtaSection({
  eyebrow = "Let's build something meaningful",
  title = "Have a challenge worth solving?",
  description = "Whether you're building something new, modernizing existing systems, or looking for a reliable technology partner, let's start a conversation.",
}: CtaSectionProps) {
  return (
    <section className="surface-navy relative isolate overflow-hidden" aria-labelledby="cta-title">
      <div aria-hidden className="line-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_40%,black_10%,transparent_70%)]" />
      <img
        src={mark.url}
        alt=""
        aria-hidden
        width={378}
        height={297}
        loading="lazy"
        className="pointer-events-none absolute -right-24 bottom-[-12%] -z-10 hidden w-[42rem] max-w-none select-none opacity-[0.07] md:block"
      />
      <div className="container-site section-y">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h2 id="cta-title" className="display-xl mt-6">{title}</h2>
          <p className="lede mt-7 max-w-xl text-on-navy-muted">{description}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="onNavy">
              <Link to="/contact">
                Talk to Our Team
                <ArrowUpRight className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outlineOnNavy">
              <Link to="/solutions">
                Explore Our Solutions
                <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
