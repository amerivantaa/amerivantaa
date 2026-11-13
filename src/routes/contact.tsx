import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact/ContactForm";
import { Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { contact } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta(
      "Contact — Let's Talk | Amerivantaa",
      "Tell Amerivantaa about your project. Share your challenge and our team will help you find the right approach.",
    ),
  }),
  component: ContactPage,
});

const nextSteps = [
  "We review your inquiry and the challenge you've described.",
  "A member of our team reaches out to schedule an introductory conversation.",
  "We propose an approach, team and engagement model that fit your goals.",
];

function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="contact-title">
      <div aria-hidden className="dot-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
      <div className="container-site grid gap-16 pb-24 pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-24">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Let's talk</Eyebrow>
          <h1 id="contact-title" className="display-xl mt-6">
            Tell us what you're <span className="text-muted-foreground">building.</span>
          </h1>
          <p className="lede mt-8 max-w-md text-muted-foreground">
            Whether it's a new product, a modernization effort or extra engineering capacity, we'd like to
            hear about it.
          </p>

          <div className="mt-12 border-t border-border pt-8">
            <h2 className="caption-mono text-muted-foreground">What happens next</h2>
            <ol className="mt-6 space-y-5">
              {nextSteps.map((s, i) => (
                <li key={s} className="flex gap-4 text-[0.95rem]">
                  <span className="caption-mono mt-0.5 text-accent">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <h2 className="caption-mono text-muted-foreground">Email</h2>
            {contact.email ? (
              <a href={`mailto:${contact.email}`} className="link-underline mt-3 inline-block text-lg font-medium">
                {contact.email}
              </a>
            ) : (
              <p className="mt-3 text-[0.95rem] text-muted-foreground">Business email coming soon.</p>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="border border-border bg-background p-6 shadow-soft sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
