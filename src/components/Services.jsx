import { Users, Layers, Compass, Code2 } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { services } from '../data/content'

const icons = [Users, Layers, Compass, Code2]

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide uppercase text-primary">What we do</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink">
            Four ways to close the gap
          </h2>
          <p className="mt-4 text-muted">Pick the model that fits how you work — or mix them as the project changes.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={s.title}
                className={`card-lift rounded-xl2 p-8 border ${
                  s.featured
                    ? 'border-primary bg-gradient-to-b from-primary/5 to-transparent shadow-card'
                    : 'border-border bg-white'
                }`}
              >
                <span className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </span>
                <span className="mt-5 block text-xs font-semibold uppercase tracking-wide text-accent">{s.tag}</span>
                <h3 className="mt-2 font-display font-semibold text-xl text-ink">{s.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
