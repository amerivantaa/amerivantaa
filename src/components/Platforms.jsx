import { SiGooglecloud, SiHubspot, SiShopify, SiSap } from 'react-icons/si'
import { FaAws, FaSalesforce } from 'react-icons/fa'
import { TbBrandAzure } from 'react-icons/tb'
import { Grid2x2 } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { platforms } from '../data/content'

const iconMap = {
  'AWS': FaAws,
  'Microsoft Azure': TbBrandAzure,
  'Google Cloud': SiGooglecloud,
  'Salesforce': FaSalesforce,
  'Microsoft 365': Grid2x2,
  'HubSpot': SiHubspot,
  'Shopify': SiShopify,
  'SAP': SiSap,
}

export default function Platforms() {
  const ref = useReveal()

  return (
    <section className="py-20 md:py-28 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-primary">{platforms.eyebrow}</p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink max-w-2xl">{platforms.title}</h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {platforms.items.map((item) => {
            const Icon = iconMap[item] || Grid2x2
            return (
              <div
                key={item}
                className="card-lift flex items-center gap-3 border border-border rounded-lg px-5 py-4 bg-surface"
              >
                <Icon size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-primary-dark">{item}</span>
              </div>
            )
          })}
        </div>

        <p className="mt-6 text-xs text-muted max-w-xl">{platforms.note}</p>
      </div>
    </section>
  )
}
