import { Clock3, FileSignature, MessageSquare, LockKeyhole, Plane, DollarSign } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { usFocus } from '../data/content'

const icons = [Clock3, FileSignature, MessageSquare, LockKeyhole, Plane, DollarSign]

export default function USFocus() {
  const ref = useReveal()

  return (
    <section className="py-20 md:py-28 bg-primary-light">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-primary">{usFocus.eyebrow}</p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink max-w-2xl">{usFocus.title}</h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usFocus.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={item.title} className="card-lift bg-white rounded-xl p-6 border border-border">
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </span>
                <h3 className="mt-4 font-display font-semibold text-ink text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
