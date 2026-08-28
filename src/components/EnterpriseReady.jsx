import { FileSignature, FileText, LockKeyhole, BadgeCheck, Timer, ShieldCheck } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { enterpriseReady } from '../data/content'

const icons = [FileSignature, FileText, LockKeyhole, BadgeCheck, Timer, ShieldCheck]

export default function EnterpriseReady() {
  const ref = useReveal()

  return (
    <section id="enterprise" className="py-20 md:py-28 bg-primary-dark">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-accent">{enterpriseReady.eyebrow}</p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white max-w-2xl">
          {enterpriseReady.title}
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enterpriseReady.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
                <span className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Icon size={18} className="text-accent" />
                </span>
                <h3 className="mt-4 font-display font-semibold text-white text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-xs text-white/50 max-w-2xl border-t border-white/10 pt-6">
          {enterpriseReady.disclaimer}
        </p>
      </div>
    </section>
  )
}
