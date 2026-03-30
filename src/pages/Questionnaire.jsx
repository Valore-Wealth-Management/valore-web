import { useState } from 'react'

const FORMSPREE = import.meta.env.VITE_FORMSPREE_URL

const aumOptions = [
  'Under $10M',
  '$10M – $50M',
  '$50M – $250M',
  '$250M – $1B',
  'Over $1B',
  'Prefer not to say',
]

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-fg-dim text-xs uppercase tracking-widest font-medium">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'bg-bg-deep border border-border rounded px-4 py-3 text-fg text-sm font-light placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200'

export default function Questionnaire() {
  const [form, setForm]       = useState({ name: '', firm: '', email: '', role: '', aum: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | loading | success | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <section className="bg-bg-deep border-b border-border">
        <div className="container-content pt-20 pb-12">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-5">
            Early access
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-fg mb-4 max-w-xl">
            Request access to Valore.
          </h1>
          <p className="text-fg-dim font-light leading-relaxed max-w-lg">
            We are onboarding a limited number of wealth management
            professionals. Complete the form below and our team will be in
            touch to arrange a private demonstration.
          </p>
        </div>
      </section>

      {/* ─── Form ────────────────────────────────────────────────────── */}
      <section className="bg-bg-deep">
        <div className="container-content py-16 max-w-2xl">

          {status === 'success' ? (
            <div className="bg-card border border-border rounded p-10 text-center">
              <div className="w-8 h-px bg-accent mx-auto mb-6" />
              <h2 className="font-serif text-2xl font-semibold text-fg mb-3">
                Thank you.
              </h2>
              <p className="text-fg-dim font-light leading-relaxed">
                Your request has been received. We will review it and be in
                touch shortly to arrange a private demonstration.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded p-8 md:p-10 flex flex-col gap-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Full name" required>
                  <input
                    name="name"
                    type="text"
                    placeholder="Jean Dupont"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </Field>

                <Field label="Firm" required>
                  <input
                    name="firm"
                    type="text"
                    placeholder="Dupont & Associés"
                    required
                    value={form.firm}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Work email" required>
                  <input
                    name="email"
                    type="email"
                    placeholder="j.dupont@firm.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </Field>

                <Field label="Role / Title">
                  <input
                    name="role"
                    type="text"
                    placeholder="Portfolio Manager"
                    value={form.role}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Assets under management">
                <select
                  name="aum"
                  value={form.aum}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="">Select a range</option>
                  {aumOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </Field>

              <Field label="Anything you'd like us to know">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Number of clients, custodians you work with, specific requirements…"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </Field>

              {status === 'error' && (
                <p className="text-negative text-sm font-light">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <p className="text-muted text-xs font-light max-w-xs">
                  Your information is handled with strict confidentiality and
                  will not be shared with third parties.
                </p>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center px-7 py-3 rounded bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-bg-deep text-sm font-semibold tracking-wide transition-colors duration-200 shrink-0 ml-6"
                >
                  {status === 'loading' ? 'Sending…' : 'Submit request'}
                </button>
              </div>

            </form>
          )}

        </div>
      </section>
    </>
  )
}
