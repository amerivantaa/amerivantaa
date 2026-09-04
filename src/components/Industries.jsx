import {
  HeartPulse, Landmark, ShoppingCart, Truck, Building2,
  Plane, GraduationCap, Layers, ShieldCheck, Factory,
} from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { industries } from '../data/content'

const iconMap = {
  'Healthcare': HeartPulse,
  'FinTech': Landmark,
  'Retail & E-Commerce': ShoppingCart,
  'Logistics & Supply Chain': Truck,
  'Real Estate': Building2,
  'Travel & Hospitality': Plane,
  'EdTech': GraduationCap,
  'SaaS & B2B Software': Layers,
  'Insurance': ShieldCheck,
  'Manufacturing': Factory,
}

export default function Industries() {
  const ref = useReveal()

  return (
    <section id="industries" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-primary">{industries.eyebrow}</p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink max-w-2xl">{industries.title}</h2>
        <p className="mt-4 text-muted max-w-xl">
          The same vetted-engineer delivery model, applied wherever your roadmap needs it.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.items.map((item) => {
            const Icon = iconMap[item] || Layers
            return (
              <div
                key={item}
                className="card-lift flex flex-col items-start gap-3 border border-primary/15 bg-primary/5 rounded-xl px-5 py-5 hover:bg-primary/10 transition-colors"
              >
                <Icon size={20} className="text-primary" />
                <span className="text-sm font-semibold text-primary-dark leading-snug">{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
