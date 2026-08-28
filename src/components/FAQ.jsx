import { useState, useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import { faq } from '../data/content'

export default function FAQ() {
  const ref = useReveal()
  const [openIndex, setOpenIndex] = useState(null)

  // FAQPage structured data helps FAQ content show up as rich results
  // in search. Injected directly (no extra library) since it's the
  // only dynamic <head> content this site needs.
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <section id="faq" className="py-20 md:py-28 bg-surface">
      <div ref={ref} className="reveal max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-primary">{faq.eyebrow}</p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink">{faq.title}</h2>

        <div className="mt-10 divide-y divide-border border-t border-b border-border">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q}>
                <button
                  className="w-full flex items-center justify-between py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink pr-6">{item.q}</span>
                  <span className="text-primary text-xl flex-shrink-0">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="pb-5 text-muted text-sm leading-relaxed">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
