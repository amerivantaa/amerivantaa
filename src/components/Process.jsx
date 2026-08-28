import { ClipboardList, ListChecks, MessagesSquare, Rocket } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { process } from '../data/content'

const icons = [ClipboardList, ListChecks, MessagesSquare, Rocket]

export default function Process() {
  const ref = useReveal()

  return (
    <section id="process" className="py-20 md:py-28 bg-surface">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-primary">{process.eyebrow}</p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink max-w-2xl">{process.title}</h2>

        <div className="mt-16 relative grid md:grid-cols-4 gap-10 md:gap-6">
          {/* connecting line across the steps, desktop only */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-border" />

          {process.steps.map((step, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={step.title} className="relative">
                <div className="w-14 h-14 rounded-full bg-white border border-border flex items-center justify-center relative z-10 shadow-card">
                  <Icon size={22} className="text-primary" />
                </div>
                <span className="absolute -top-1 -right-1 md:right-auto md:left-10 w-6 h-6 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center z-10">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display font-semibold text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
