import useReveal from '../hooks/useReveal'
import { industries } from '../data/content'

export default function Industries() {
  const ref = useReveal()

  return (
    <section id="industries" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-primary">{industries.eyebrow}</p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink max-w-2xl">{industries.title}</h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {industries.items.map((item) => (
            <span
              key={item}
              className="text-sm font-medium text-primary-dark bg-primary/5 border border-primary/20 rounded-full px-4 py-2 hover:bg-primary/10 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
