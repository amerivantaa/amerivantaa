import collab from "@/assets/global-collab.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const pillars = [
  { title: "Remote collaboration", body: "Distributed teams that work as one, with shared tools and rituals." },
  { title: "Flexible engagement", body: "Project, dedicated-team, or augmentation models that fit your needs." },
  { title: "Dedicated communication", body: "A named point of contact and a predictable communication rhythm." },
  { title: "Transparent delivery", body: "Clear progress, honest reporting, and visibility at every stage." },
];

/** Decorative wireframe globe — intentionally shows no locations. */
function WireGlobe({ className }: { className?: string }) {
  const meridians = [0.18, 0.42, 0.66, 0.88];
  const parallels = [-0.66, -0.33, 0, 0.33, 0.66];
  return (
    <svg viewBox="-110 -110 220 220" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        <circle r="100" strokeOpacity="0.5" />
        {meridians.map((m) => (
          <ellipse key={m} rx={100 * m} ry="100" strokeOpacity="0.28" />
        ))}
        {parallels.map((p) => {
          const y = p * 100;
          const r = Math.sqrt(100 * 100 - y * y);
          return <ellipse key={p} cy={y} rx={r} ry={r * 0.12} strokeOpacity="0.28" />;
        })}
        <ellipse rx="140" ry="36" transform="rotate(-18)" strokeOpacity="0.55" strokeDasharray="2 5" className="text-accent" stroke="currentColor">
          <animateTransform attributeName="transform" type="rotate" from="-18" to="342" dur="60s" repeatCount="indefinite" />
        </ellipse>
      </g>
    </svg>
  );
}

export function GlobalCollab() {
  return (
    <section className="relative isolate overflow-hidden section-y bg-secondary" aria-label="Global collaboration">
      <WireGlobe className="absolute -left-48 top-0 -z-10 h-[40rem] w-[40rem] text-slate opacity-30" />
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Working with you, wherever you are"
            title="Great partnerships have no boundaries."
            description="We collaborate with organizations across locations and time zones, combining flexible engagement models with transparent communication and reliable delivery."
          />
          <dl className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="bg-background p-6 transition-colors duration-500 hover:bg-blue-soft/40">
                <dt className="flex items-center gap-3 font-semibold">
                  <span className="caption-mono text-accent">0{i + 1}</span>
                  {p.title}
                </dt>
                <dd className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">{p.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
        <Reveal delay={0.1} className="relative lg:col-span-6">
          <div className="print-frame corner-marks relative"><div className="relative overflow-hidden">
            <img
              src={collab}
              alt="A consultant on a video call with a distributed project team"
              width={1408}
              height={1008}
              loading="lazy"
              decoding="async"
              className="photo-grade aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-navy/80 px-5 py-3 backdrop-blur-sm">
              <span className="caption-mono text-on-navy-muted">Fig. — Across time zones</span>
              <span className="caption-mono text-on-navy">Remote collaboration</span>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
