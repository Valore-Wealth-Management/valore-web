import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FeatureCard from '../components/FeatureCard'
import TypeWriter from '../components/TypeWriter'
import { useInView } from '../hooks/useInView'
import dashboardImg from '../assets/dashboard.png'

function RevealSection({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal ${delay} ${inView ? 'in-view' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation()
  const [screenshotRef, screenshotInView] = useInView({ threshold: 0.05 })

  const highlights = [
    { title: t('features.consolidation.title'), description: t('features.consolidation.description') },
    { title: t('features.offline.title'),       description: t('features.offline.description')       },
    { title: t('features.compliance.title'),    description: t('features.compliance.description')    },
  ]

  const pillars = [
    { label: t('home.pillars.local'),      sub: t('home.pillars.localSub')       },
    { label: t('home.pillars.custodians'), sub: t('home.pillars.custodiansSub')  },
    { label: t('home.pillars.languages'),  sub: t('home.pillars.languagesSub')   },
  ]

  const privacyBullets = [
    t('home.privacy.bullet1'),
    t('home.privacy.bullet2'),
    t('home.privacy.bullet3'),
    t('home.privacy.bullet4'),
  ]

  return (
    <>
      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="bg-bg-deep hero-glow">
        <div className="container-content pt-28 pb-0">

          <p className="text-accent text-xs font-medium uppercase tracking-[0.22em] mb-7">
            {t('home.eyebrow')}
          </p>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-fg mb-6 leading-none tracking-tight">
            {t('home.headline1')}
            <br />
            <span className="text-accent">{t('home.headline2')}</span>
          </h1>

          <p className="text-fg-dim text-xl font-light leading-relaxed max-w-xl mb-3">
            {t('home.subtext')}
          </p>

          <p className="text-muted text-base font-light mb-10 h-6">
            <TypeWriter />
          </p>

          <div className="flex flex-row gap-4 items-center mb-16">
            <Link
              to="/questionnaire"
              className="inline-flex items-center px-7 py-3 rounded bg-accent hover:bg-accent-hover text-bg-deep text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {t('home.cta')}
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center gap-1.5 text-fg-dim hover:text-fg text-sm font-medium transition-colors"
            >
              {t('home.explore')}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Full-bleed screenshot */}
        <div
          ref={screenshotRef}
          className={`reveal ${screenshotInView ? 'in-view' : ''} container-content`}
        >
          <div className="rounded-t-lg border border-b-0 border-border overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>
            <img src={dashboardImg} alt="Valore dashboard" className="w-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* ─── Pillars strip ───────────────────────────────────────────── */}
      <section className="bg-surface border-y border-border">
        <div className="container-content py-0">
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-border">
            {pillars.map(({ label, sub }, i) => (
              <RevealSection key={label} delay={`reveal-delay-${i + 1}`} className="flex-1 px-8 py-6 text-center">
                <p className="text-fg text-sm font-semibold">{label}</p>
                <p className="text-muted text-xs mt-0.5 font-light">{sub}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Local-first callout ─────────────────────────────────────── */}
      <section className="bg-bg-deep">
        <div className="container-content py-28">
          <div className="flex flex-col md:flex-row gap-16 items-start">

            <RevealSection className="md:w-1/2">
              <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-5">
                {t('home.privacy.eyebrow')}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg mb-5 leading-tight">
                {t('home.privacy.heading')}
              </h2>
              <p className="text-fg-dim font-light leading-relaxed">
                {t('home.privacy.body')}
              </p>
            </RevealSection>

            <RevealSection className="md:w-1/2 flex flex-col gap-4 md:pt-16" delay="reveal-delay-2">
              {privacyBullets.map((item) => (
                <div key={item} className="flex items-start gap-3 pb-4 border-b border-border last:border-0">
                  <span className="text-positive mt-0.5 shrink-0 text-sm">✓</span>
                  <p className="text-fg-dim text-sm font-light">{item}</p>
                </div>
              ))}
            </RevealSection>

          </div>
        </div>
      </section>

      {/* ─── Feature highlights ──────────────────────────────────────── */}
      <section className="bg-card border-t border-border">
        <div className="container-content py-28">

          <RevealSection className="mb-16">
            <p className="text-muted text-xs uppercase tracking-[0.2em] font-medium mb-4">
              {t('home.features.eyebrow')}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg max-w-xl leading-tight">
              {t('home.features.heading')}
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((f, i) => (
              <RevealSection key={f.title} delay={`reveal-delay-${i + 1}`}>
                <FeatureCard {...f} />
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-10" delay="reveal-delay-2">
            <Link to="/product" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors">
              {t('home.features.viewAll')}
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ─── Quote ───────────────────────────────────────────────────── */}
      <section className="bg-bg-deep border-t border-border">
        <div className="container-content py-28">
          <RevealSection>
            <p className="font-serif text-3xl md:text-5xl font-semibold text-fg leading-snug max-w-4xl">
              <span className="text-accent">{t('home.quote').split('—')[0]}</span>
              {t('home.quote').includes('—') ? `— ${t('home.quote').split('—')[1]}` : ''}
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── CTA band ────────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border">
        <div className="container-content py-24">
          <RevealSection>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg mb-4 max-w-xl">
              {t('home.ctaBand.heading')}
            </h2>
            <p className="text-fg-dim font-light mb-8 max-w-md">
              {t('home.ctaBand.sub')}
            </p>
            <Link
              to="/questionnaire"
              className="inline-flex items-center px-8 py-3.5 rounded bg-accent hover:bg-accent-hover text-bg-deep text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {t('home.ctaBand.cta')}
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
