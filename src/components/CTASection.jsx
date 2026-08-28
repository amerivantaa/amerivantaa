import { ArrowUpRight } from 'lucide-react'
import { cta } from '../data/content'

export default function CTASection() {
  return (
    <section className="relative bg-primary-dark overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.06]" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">{cta.title}</h2>
          <p className="mt-2 text-white/70">{cta.subtitle}</p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors whitespace-nowrap"
        >
          Start a conversation
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}
