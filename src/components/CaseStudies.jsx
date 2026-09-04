import { FolderClock, ArrowUpRight } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { caseStudies } from '../data/content'

export default function CaseStudies() {
  const ref = useReveal()

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-surface">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-primary">{caseStudies.eyebrow}</p>

        <div className="mt-6 bg-white border border-border rounded-xl2 p-8 md:p-12 flex flex-col md:flex-row items-start gap-8">
          <span className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <FolderClock size={26} className="text-primary" />
          </span>
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-ink">{caseStudies.title}</h2>
            <p className="mt-4 text-muted leading-relaxed max-w-2xl">{caseStudies.body}</p>
            <a
              href={caseStudies.cta.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              {caseStudies.cta.label}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
