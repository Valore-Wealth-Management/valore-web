import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
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
  { label: 'No data uploaded', sub: 'Fully local' },
  { label: 'All custodians',   sub: 'PDF & XLSX import' },
  { label: '7 languages',      sub: 'EN FR ES DE IT PT' },
]

export default function Home() {
  return (
    <>
      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="bg-bg-deep">
        <div className="container-content pt-24 pb-16 text-center">

          <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-6">
            Wealth Management System
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-fg mb-6 max-w-3xl mx-auto">
            Wealth, consolidated.
            <br />
            <span className="text-accent">Privately.</span>
          </h1>

          <p className="text-fg-dim text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Valore brings together positions across all custodians into one
            unified dashboard — built for independent wealth managers and
            private banks who demand discretion and control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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

          {/* Pillars */}
          <div className="flex flex-col sm:flex-row justify-center gap-0 sm:gap-px border border-border rounded overflow-hidden w-fit mx-auto">
            {pillars.map(({ label, sub }) => (
              <div key={label} className="bg-card px-8 py-4 text-center border-b sm:border-b-0 sm:border-r border-border last:border-0">
                <p className="text-fg text-sm font-semibold">{label}</p>
                <p className="text-muted text-xs mt-0.5 font-light">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshot */}
        <div className="container-content pb-0">
          <div className="rounded-t-lg border border-b-0 border-border overflow-hidden bg-card">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>
            <img
              src={dashboardImg}
              alt="Valore dashboard"
              className="w-full object-cover object-top max-h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* ─── Local-first callout ─────────────────────────────────────── */}
      <section className="bg-card border-y border-border">
        <div className="container-content py-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
              The #1 priority
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg mb-4">
              No data ever leaves your machine.
            </h2>
            <p className="text-fg-dim font-light leading-relaxed">
              Your clients' positions, portfolios, and personal information are
              processed and stored exclusively on your device. Valore requires
              no internet connection to function and maintains no servers,
              accounts, or telemetry. What is private remains private.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col gap-4">
            {[
              'No account required to use the application',
              'No outbound network requests during operation',
              'Data stored locally in an encrypted, portable format',
              'Works fully offline — air-gapped environments supported',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-positive mt-0.5 shrink-0 text-sm">✓</span>
                <p className="text-fg-dim text-sm font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Feature highlights ──────────────────────────────────────── */}
      <section className="bg-bg-deep">
        <div className="container-content py-24">
          <div className="text-center mb-14">
            <p className="text-muted text-xs uppercase tracking-[0.2em] font-medium mb-3">
              Core capabilities
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg">
              Everything a professional desk requires.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/product"
              className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
            >
              View all features →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA band ────────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border">
        <div className="container-content py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg mb-4">
            Built for professionals who can't compromise.
          </h2>
          <p className="text-fg-dim font-light mb-8 max-w-xl mx-auto">
            Join the waitlist and be among the first wealth managers to access
            Valore when it opens to new clients.
          </p>
          <Link
            to="/questionnaire"
            className="inline-flex items-center px-8 py-3.5 rounded bg-accent hover:bg-accent-hover text-bg-deep text-sm font-semibold tracking-wide transition-colors duration-200"
          >
            Request Early Access
          </Link>
        </div>
      </section>
    </>
  )
}
