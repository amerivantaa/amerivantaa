import useReveal from '../hooks/useReveal'
import { about } from '../data/content'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-20 md:py-28 bg-surface">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-primary">{about.eyebrow}</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink leading-tight">
            {about.title}
          </h2>
          {about.body.map((p, i) => (
            <p key={i} className="mt-5 text-muted leading-relaxed">{p}</p>
          ))}
        </div>

        <ul className="space-y-4">
          {about.points.map((point) => (
            <li key={point} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4">
              <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">✓</span>
              <span className="text-ink text-sm md:text-base">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
