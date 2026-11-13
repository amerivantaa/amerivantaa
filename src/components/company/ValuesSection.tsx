import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/SectionHeading";

const values = [
  {
    n: "01",
    title: "Client Partnership",
    body: "We believe successful technology begins with understanding people, business goals, and real-world challenges. We work as an extension of our clients' teams.",
  },
  {
    n: "02",
    title: "Engineering Excellence",
    body: "We focus on building reliable, scalable, secure, and maintainable solutions through thoughtful architecture and disciplined engineering.",
  },
  {
    n: "03",
    title: "Transparency",
    body: "We believe in honest communication, clear expectations, and complete visibility throughout every engagement.",
  },
  {
    n: "04",
    title: "Continuous Improvement",
    body: "We don't stop at delivery. We continuously evaluate, improve, and evolve the solutions we build.",
  },
];

export function ValuesSection() {
  return (
    <section id="values" className="section-y scroll-mt-16" aria-labelledby="values-title">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-28">
            <Eyebrow>What we believe</Eyebrow>
            <h2 id="values-title" className="display-lg mt-5">
              How we think. How we work. What we deliver.
            </h2>
          </Reveal>
        </div>
        <ol className="border-b border-border lg:col-span-8 lg:col-start-6">
          {values.map((v, i) => (
            <Reveal as="li" key={v.n} delay={i * 0.05}>
              <div className="group grid gap-4 border-t border-border py-10 transition-colors duration-500 sm:grid-cols-[8rem_1fr] sm:gap-8 lg:py-12">
                <span
                  aria-hidden
                  className="text-6xl font-light leading-none tracking-tighter text-slate/35 transition-colors duration-500 group-hover:text-accent lg:text-7xl"
                >
                  {v.n}
                </span>
                <div>
                  <h3 className="display-md">
                    <span className="sr-only">{v.n} — </span>
                    {v.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
