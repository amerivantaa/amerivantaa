import { useState, useEffect } from 'react'
import { Menu, X, Link2 } from 'lucide-react'
import { company, nav } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur border-b transition-shadow ${
        scrolled ? 'border-border shadow-[0_1px_0_rgba(11,79,156,0.06)]' : 'border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-[72px]">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Link2 size={18} className="text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display font-bold text-lg text-primary-dark">{company.name}</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-medium text-ink hover:text-primary transition-colors">
            {company.phone}
          </a>
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-[0_4px_14px_rgba(30,127,224,0.3)]"
          >
            Get a free consultation
          </a>
        </div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-white px-5 pb-6">
          <ul className="flex flex-col gap-4 pt-5 text-sm font-medium text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block text-center bg-accent text-white font-semibold px-5 py-2.5 rounded-lg"
          >
            Get a free consultation
          </a>
        </div>
      )}
    </header>
  )
}
