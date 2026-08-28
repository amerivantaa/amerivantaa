import { Users, ShieldCheck, Clock3, ArrowUpRight, BadgeCheck } from 'lucide-react'
import { hero, company } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-20 md:pt-20 md:pb-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] bg-glow rounded-full" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink">
            {hero.title}
          </h1>

          <p className="mt-5 text-sm font-semibold text-primary-dark flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span>Engagements live in days</span>
            <span className="text-border">|</span>
            <span>NDA + IP assignment before day one</span>
            <span className="text-border">|</span>
            <span>Full U.S. business-hours overlap</span>
          </p>

          <p className="mt-5 text-lg text-muted max-w-xl leading-relaxed">{hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors shadow-[0_10px_30px_rgba(30,127,224,0.28)]"
            >
              {hero.primaryCta.label}
              <ArrowUpRight size={18} />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="border border-border hover:border-primary bg-white text-ink font-medium px-7 py-3.5 rounded-lg transition-colors"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
            {['No long-term lock-in', 'Pre-vetted engineers', 'You manage day-to-day'].map((label) => (
              <span key={label} className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-dark bg-primary/5 border border-primary/15 rounded-full px-3.5 py-1.5">
                <BadgeCheck size={13} className="text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Visual panel: an "engagement snapshot" card, not fabricated stats — 
            just a concrete illustration of what a live engagement looks like */}
        <div className="relative">
          <div className="rounded-2xl border border-border bg-white shadow-[0_30px_60px_-15px_rgba(11,79,156,0.25)] p-6 md:p-8">
            <div className="flex items-center justify-between pb-5 border-b border-border">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Active engagement</p>
                <p className="mt-1 font-display font-semibold text-ink">Senior React Engineer</p>
              </div>
              <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">Embedded</span>
            </div>

            <div className="mt-5 space-y-4">
              {[
                { label: 'Shortlist delivered', value: 'Day 3', icon: Clock3 },
                { label: 'Interviews scheduled', value: 'Day 5', icon: Users },
                { label: 'Onboarded & shipping', value: 'Day 9', icon: ShieldCheck },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between rounded-lg bg-surface px-4 py-3">
                  <span className="flex items-center gap-3 text-sm text-ink">
                    <row.icon size={16} className="text-primary" />
                    {row.label}
                  </span>
                  <span className="text-sm font-semibold text-primary-dark">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block absolute -bottom-6 -left-8 bg-primary-dark text-white rounded-xl px-5 py-4 shadow-xl">
            <p className="text-xs text-white/60">Reporting line</p>
            <p className="font-display font-semibold text-sm mt-0.5">Directly to your team</p>
          </div>
        </div>
      </div>
    </section>
  )
}
