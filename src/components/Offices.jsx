import { MapPin } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { offices } from '../data/content'

export default function Offices() {
  const ref = useReveal()

  return (
    <section className="py-20 md:py-28 bg-primary-light">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-primary">Where we operate</p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink max-w-2xl">
          A global delivery footprint, one point of contact
        </h2>
        <p className="mt-4 text-muted max-w-xl">
          Delivery centers across India, a regional hub in the UAE, and a client-facing presence in the
          U.S. — so the U.S.-hours overlap we promise is backed by an actual team, not a single time zone.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {offices.map((office) => (
            <div key={office.city} className="card-lift bg-white border border-border rounded-xl p-6 text-left">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </span>
              <h3 className="mt-4 font-display font-semibold text-ink">{office.city}</h3>
              {office.country && <p className="text-xs text-muted">{office.country}</p>}
              <p className="mt-2 text-xs font-semibold text-primary uppercase tracking-wide">{office.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
