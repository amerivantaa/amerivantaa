import { Link2, Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react'
import { company, footer } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
              <Link2 size={18} className="text-accent" strokeWidth={2.5} />
            </span>
            <span className="font-display font-bold text-lg text-white">{company.name}</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">{footer.description}</p>
          <div className="mt-6 flex items-center gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <Icon size={16} className="text-white/70" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white text-sm mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {footer.companyLinks.map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white text-sm mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {footer.serviceLinks.map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2.5"><Mail size={15} className="text-accent flex-shrink-0" /> {company.email}</li>
            <li className="flex items-center gap-2.5"><Phone size={15} className="text-accent flex-shrink-0" /> {company.phone}</li>
            <li className="flex items-start gap-2.5"><MapPin size={15} className="text-accent flex-shrink-0 mt-0.5" /> {company.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  )
}
