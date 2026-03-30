import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const FORMSPREE = import.meta.env.VITE_FORMSPREE_URL

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
  const { t } = useTranslation()
  const [form, setForm]     = useState({ name: '', firm: '', email: '', role: '', aum: '', message: '' })
  const [status, setStatus] = useState('idle')

  const aumOptions = [
    { value: 'under10',  label: t('questionnaire.aum.under10')  },
    { value: '10to50',   label: t('questionnaire.aum.10to50')   },
    { value: '50to250',  label: t('questionnaire.aum.50to250')  },
    { value: '250to1b',  label: t('questionnaire.aum.250to1b')  },
    { value: 'over1b',   label: t('questionnaire.aum.over1b')   },
    { value: 'prefer',   label: t('questionnaire.aum.prefer')   },
  ]

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
            {t('questionnaire.eyebrow')}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-fg mb-4 max-w-xl">
            {t('questionnaire.heading')}
          </h1>
          <p className="text-fg-dim font-light leading-relaxed max-w-lg">
            {t('questionnaire.sub')}
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
                {t('questionnaire.success.heading')}
              </h2>
              <p className="text-fg-dim font-light leading-relaxed">
                {t('questionnaire.success.body')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded p-8 md:p-10 flex flex-col gap-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label={t('questionnaire.fields.name')} required>
                  <input name="name" type="text" required
                    placeholder={t('questionnaire.fields.namePlaceholder')}
                    value={form.name} onChange={handleChange} className={inputClass} />
                </Field>
                <Field label={t('questionnaire.fields.firm')} required>
                  <input name="firm" type="text" required
                    placeholder={t('questionnaire.fields.firmPlaceholder')}
                    value={form.firm} onChange={handleChange} className={inputClass} />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label={t('questionnaire.fields.email')} required>
                  <input name="email" type="email" required
                    placeholder={t('questionnaire.fields.emailPlaceholder')}
                    value={form.email} onChange={handleChange} className={inputClass} />
                </Field>
                <Field label={t('questionnaire.fields.role')}>
                  <input name="role" type="text"
                    placeholder={t('questionnaire.fields.rolePlaceholder')}
                    value={form.role} onChange={handleChange} className={inputClass} />
                </Field>
              </div>

              <Field label={t('questionnaire.fields.aum')}>
                <select name="aum" value={form.aum} onChange={handleChange}
                  className={`${inputClass} appearance-none`}>
                  <option value="">{t('questionnaire.fields.aumDefault')}</option>
                  {aumOptions.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </Field>

              <Field label={t('questionnaire.fields.message')}>
                <textarea name="message" rows={4}
                  placeholder={t('questionnaire.fields.messagePlaceholder')}
                  value={form.message} onChange={handleChange}
                  className={`${inputClass} resize-none`} />
              </Field>

              {status === 'error' && (
                <p className="text-negative text-sm font-light">{t('questionnaire.error')}</p>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <p className="text-muted text-xs font-light max-w-xs">
                  {t('questionnaire.confidentiality')}
                </p>
                <button type="submit" disabled={status === 'loading'}
                  className="inline-flex items-center px-7 py-3 rounded bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-bg-deep text-sm font-semibold tracking-wide transition-colors duration-200 shrink-0 ml-6">
                  {status === 'loading' ? t('questionnaire.submitting') : t('questionnaire.submit')}
                </button>
              </div>

            </form>
          )}
        </div>
      </section>
    </>
  )
}
