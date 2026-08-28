import { Clock3, Globe2, FileCheck2, ShieldCheck } from 'lucide-react'
import { differentiators } from '../data/content'

const icons = [Clock3, Globe2, FileCheck2, ShieldCheck]

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-primary-dark">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {differentiators.map((d, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div key={d.label} className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                <Icon size={20} className="text-accent" />
              </span>
              <p className="font-display font-bold text-white text-2xl md:text-3xl leading-none">{d.value}</p>
              <p className="text-xs text-white/50 mt-2 uppercase tracking-wide">{d.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
