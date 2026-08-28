import { Zap, Unlock, SearchCheck, Compass } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { whyUs } from '../data/content'

const icons = [Zap, Unlock, SearchCheck, Compass]

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-primary">{whyUs.eyebrow}</p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink max-w-2xl">{whyUs.title}</h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {whyUs.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={item.title} className="card-lift border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
