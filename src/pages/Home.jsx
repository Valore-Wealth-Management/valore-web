import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import TypeWriter from '../components/TypeWriter'
import { useInView } from '../hooks/useInView'
import dashboardImg from '../assets/dashboard.png'

const highlights = [
  {
    title: 'Multi-bank consolidation',
    description:
      'Import statements from any custodian via PDF or XLSX. All positions in one place, regardless of institution.',
  },
  {
    title: 'Local-first. Offline by design.',
    description:
      'No data ever leaves your machine. No cloud dependency, no connectivity requirement — full control remains with you.',
  },
  {
    title: 'Compliance & KYC tracking',
    description:
      'Monitor regulatory obligations, document status, and client risk profiles across your entire book.',
  },
]

const pillars = [
  { label: 'No data uploaded',  sub: 'Fully local'        },
  { label: 'All custodians',    sub: 'PDF & XLSX import'  },
  { label: '7 languages',       sub: 'EN FR ES DE IT PT'  },
]

function RevealSection({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal ${delay} ${inView ? 'in-view' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const [screenshotRef, screenshotInView] = useInView({ threshold: 0.05 })

  return (
    <>
      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="bg-bg-deep hero-glow">
        <div className="container-content pt-28 pb-0">

          <p className="text-accent text-xs font-medium uppercase tracking-[0.22em] mb-7">
            Wealth Management System
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] font-semibold text-fg mb-6 max-w-3xl leading-none tracking-tight">
            Wealth, consolidated.
            <br />
            <span className="text-accent">Privately.</span>
          </h1>

          <p className="text-fg-dim text-xl font-light leading-relaxed max-w-xl mb-3">
            Valore brings together positions across all custodians into one
            unified dashboard — built for independent wealth managers and
            private banks who demand discretion.
          </p>

          <p className="text-muted text-base font-light mb-10 h-6">
            <TypeWriter />
          </p>

          <div className="flex flex-row gap-4 items-center mb-16">
            <Link
              to="/questionnaire"
              className="inline-flex items-center px-7 py-3 rounded bg-accent hover:bg-accent-hover text-bg-deep text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              Request Early Access
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center gap-1.5 text-fg-dim hover:text-fg text-sm font-medium transition-colors"
            >
              Explore the product
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
            <img
              src={dashboardImg}
              alt="Valore dashboard"
              className="w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ─── Pillars strip ───────────────────────────────────────────── */}
      <section className="bg-surface border-y border-border">
        <div className="container-content py-0">
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-border">
            {pillars.map(({ label, sub }, i) => (
              <RevealSection
                key={label}
                delay={`reveal-delay-${i + 1}`}
                className="flex-1 px-8 py-6 text-center"
              >
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
                The #1 priority
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg mb-5 leading-tight">
                No data ever leaves
                <br />your machine.
              </h2>
              <p className="text-fg-dim font-light leading-relaxed">
                Your clients' positions, portfolios, and personal information are
                processed and stored exclusively on your device. Valore requires
                no internet connection to function and maintains no servers,
                accounts, or telemetry. What is private remains private.
              </p>
            </RevealSection>

            <RevealSection className="md:w-1/2 flex flex-col gap-4 md:pt-16" delay="reveal-delay-2">
              {[
                'No account required to use the application',
                'No outbound network requests during operation',
                'Data stored locally in an encrypted, portable format',
                'Works fully offline — air-gapped environments supported',
              ].map((item) => (
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
              Core capabilities
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg max-w-xl leading-tight">
              Everything a professional desk requires.
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
            <Link
              to="/product"
              className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
            >
              View all features →
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ─── Large quote / statement ─────────────────────────────────── */}
      <section className="bg-bg-deep border-t border-border">
        <div className="container-content py-28">
          <RevealSection>
            <p className="font-serif text-3xl md:text-5xl font-semibold text-fg leading-snug max-w-4xl">
              <span className="text-accent">Private wealth</span> deserves
              private software — not a cloud subscription managed by someone
              else's infrastructure.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── CTA band ────────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border">
        <div className="container-content py-24">
          <RevealSection>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg mb-4 max-w-xl">
              Built for professionals who can't compromise.
            </h2>
            <p className="text-fg-dim font-light mb-8 max-w-md">
              Join the waitlist and be among the first wealth managers to access
              Valore when it opens to new clients.
            </p>
            <Link
              to="/questionnaire"
              className="inline-flex items-center px-8 py-3.5 rounded bg-accent hover:bg-accent-hover text-bg-deep text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              Request Early Access
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
