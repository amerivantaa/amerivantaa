import {
  SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiTypescript,
  SiNodedotjs, SiPython, SiOpenjdk, SiDotnet, SiPhp,
  SiFlutter, SiSwift, SiKotlin,
  SiGooglecloud, SiGithubactions, SiKubernetes,
  SiPostgresql, SiMongodb, SiSelenium,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { TbBrandAzure } from 'react-icons/tb'
import { Database, BarChart3, ClipboardCheck, Gauge } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { techStack } from '../data/content'

const iconMap = {
  'React': SiReact, 'Next.js': SiNextdotjs, 'Vue.js': SiVuedotjs, 'Angular': SiAngular, 'TypeScript': SiTypescript,
  'Node.js': SiNodedotjs, 'Python': SiPython, 'Java': SiOpenjdk, '.NET': SiDotnet, 'PHP': SiPhp,
  'React Native': SiReact, 'Flutter': SiFlutter, 'Swift (iOS)': SiSwift, 'Kotlin (Android)': SiKotlin,
  'AWS': FaAws, 'Azure': TbBrandAzure, 'Google Cloud': SiGooglecloud, 'CI/CD': SiGithubactions, 'Kubernetes': SiKubernetes,
  'SQL / PostgreSQL': SiPostgresql, 'MongoDB': SiMongodb, 'Data Engineering': Database, 'Analytics': BarChart3,
  'Manual Testing': ClipboardCheck, 'Automation': SiSelenium, 'Performance Testing': Gauge,
}

export default function TechStack() {
  const ref = useReveal()

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold tracking-wide uppercase text-primary">{techStack.eyebrow}</p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink max-w-2xl">{techStack.title}</h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.categories.map((cat) => (
            <div key={cat.label} className="card-lift bg-white border border-border rounded-xl p-6">
              <h3 className="font-display font-semibold text-ink mb-5">{cat.label}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => {
                  const Icon = iconMap[item]
                  return (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-primary-dark border border-border rounded-full pl-2.5 pr-3.5 py-1.5 bg-surface"
                    >
                      {Icon && <Icon size={14} />}
                      {item}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
