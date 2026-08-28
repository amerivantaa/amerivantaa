import { useState } from 'react'
import { company } from '../data/content'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const hasEmailBackend = Boolean(company.formEndpoint)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!hasEmailBackend) return // let the mailto: form action handle it

    setStatus('sending')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(company.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="bg-surface border border-border rounded-xl2 p-8 md:p-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-ink">Have a gap to fill?</h2>
            <p className="mt-3 text-muted">Tell us the role and timeline — we'll come back with a plan, not a sales pitch.</p>

            <div className="mt-8 space-y-3 font-medium text-primary-dark">
              <p>{company.email}</p>
              <p>{company.phone}</p>
              <p className="text-muted text-sm">{company.location}</p>
            </div>

            {!hasEmailBackend && (
              <p className="mt-6 text-xs text-muted bg-white border border-border rounded-lg p-3">
                Form submissions currently open your email client. Connect a
                Formspree endpoint in <code>src/data/content.js</code>
                (<code>company.formEndpoint</code>) to send submissions
                straight to your inbox instead — see the README.
              </p>
            )}
          </div>

          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center text-center border border-primary/20 bg-primary/5 rounded-xl p-10">
              <span className="text-3xl">✓</span>
              <h3 className="mt-3 font-display font-semibold text-ink">Message sent</h3>
              <p className="mt-2 text-sm text-muted">Thanks — we'll get back to you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-5 text-sm font-semibold text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              action={hasEmailBackend ? undefined : `mailto:${company.email}`}
              method="post"
              encType={hasEmailBackend ? undefined : 'text/plain'}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Work email"
                required
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                name="role"
                placeholder="Role you need (e.g. Senior React Developer)"
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="A few lines about the project and timeline"
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-colors"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'error' && (
                <p className="text-xs text-red-600 text-center">
                  Something went wrong — please email us directly at {company.email}
                </p>
              )}
              <p className="text-xs text-muted text-center">
                Or email us directly at {company.email}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
