import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useInView } from '../hooks/useInView'

function RevealSection({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal ${delay} ${inView ? 'in-view' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default function About() {
  const { t } = useTranslation()

  const missionValues = [
    { title: t('home.mission.value1Title'), desc: t('home.mission.value1Desc') },
    { title: t('home.mission.value2Title'), desc: t('home.mission.value2Desc') },
    { title: t('home.mission.value3Title'), desc: t('home.mission.value3Desc') },
  ]

  const complianceBadges = [
    t('home.complianceBadge.badge1'),
    t('home.complianceBadge.badge2'),
    t('home.complianceBadge.badge3'),
    t('home.complianceBadge.badge4'),
  ]

  return (
    <>
      {/* ─── Page header ─────────────────────────────────────────────── */}
      <section className="bg-bg-deep hero-glow border-b border-border">
        <div className="container-content pt-24 pb-20">
          <RevealSection>
            <p className="text-accent text-xs uppercase tracking-[0.22em] font-medium mb-6">
              {t('home.mission.eyebrow')}
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-fg mb-5 leading-none tracking-tight">
              {t('home.mission.heading')}
            </h1>
            <p className="text-fg-dim text-xl font-light italic leading-snug max-w-xl">
              {t('home.mission.sub')}
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── Story + ANF ─────────────────────────────────────────────── */}
      <section className="bg-bg-deep">
        <div className="container-content py-28">
          <div className="flex flex-col md:flex-row gap-20 items-start">

            <RevealSection className="md:w-1/2">
              <p className="text-fg-dim text-lg font-light leading-relaxed">
                {t('home.mission.body')}
              </p>
            </RevealSection>

            <RevealSection className="md:w-1/2" delay="reveal-delay-2">
              <div className="rounded border border-border bg-surface p-8 card-lift">
                <p className="text-accent text-xs uppercase tracking-[0.18em] font-medium mb-6">
                  {t('home.mission.partnerLabel')}
                </p>
                <div className="flex items-center gap-5 mb-6">
                  <span className="font-serif text-3xl font-semibold text-accent tracking-wide">ANF</span>
                  <div className="w-px h-10 bg-border" />
                  <div>
                    <p className="text-fg font-semibold text-base">{t('home.mission.partnerName')}</p>
                    <p className="text-muted text-sm font-light mt-0.5">{t('home.mission.partnerDesc')}</p>
                  </div>
                </div>
                <p className="text-fg-dim text-sm font-light leading-relaxed border-t border-border pt-5">
                  {t('home.mission.body')}
                </p>
              </div>
            </RevealSection>

          </div>
        </div>
      </section>

      {/* ─── Values ──────────────────────────────────────────────────── */}
      <section className="bg-card border-t border-border">
        <div className="container-content py-28">

          <RevealSection className="mb-14">
            <p className="text-muted text-xs uppercase tracking-[0.2em] font-medium mb-4">
              {t('nav.about')}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg leading-tight">
              {t('home.complianceBadge.heading')}
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {missionValues.map((value, i) => (
              <RevealSection key={value.title} delay={`reveal-delay-${i + 1}`}>
                <div className="p-7 rounded border border-border bg-surface h-full card-lift hover:border-accent/30">
                  <div className="w-8 h-px bg-accent mb-6" />
                  <h3 className="font-serif text-xl font-semibold text-fg mb-3">{value.title}</h3>
                  <p className="text-fg-dim text-sm font-light leading-relaxed">{value.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Compliance readiness ────────────────────────────────────── */}
      <section className="bg-bg-deep border-t border-border">
        <div className="container-content py-28">
          <div className="flex flex-col md:flex-row gap-16 items-start">

            <RevealSection className="md:w-1/2">
              <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-5">
                {t('home.complianceBadge.eyebrow')}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg mb-5 leading-tight">
                {t('home.complianceBadge.heading')}
              </h2>
              <p className="text-fg-dim font-light leading-relaxed mb-5">
                {t('home.complianceBadge.body')}
              </p>
              <p className="text-muted text-sm font-light leading-relaxed">
                {t('home.complianceBadge.sub')}
              </p>
            </RevealSection>

            <RevealSection className="md:w-1/2 md:pt-14" delay="reveal-delay-2">
              <div className="flex flex-wrap gap-3">
                {complianceBadges.map((badge) => (
                  <span
                    key={badge}
                    className="badge-hover inline-flex items-center gap-2 px-5 py-3 rounded border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-wide cursor-default"
                  >
                    <span className="text-positive">✓</span>
                    {badge}
                  </span>
                ))}
              </div>
            </RevealSection>

          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
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
