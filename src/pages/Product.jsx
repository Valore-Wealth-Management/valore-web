import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import banksImg      from '../assets/banks.png'
import clientImg     from '../assets/client.png'
import complianceImg from '../assets/compliance.png'

const allFeatures = [
  {
    title: 'Multi-bank consolidation',
    description:
      'Import custody statements in PDF or XLSX format from any institution. Valore normalises holdings across custodians into a single, coherent ledger.',
  },
  {
    title: 'Unified portfolio view',
    description:
      'See every position, across every custodian, for every client — aggregated in real time. Allocation, valuation, and exposure at a glance.',
  },
  {
    title: 'Dashboard KPIs',
    description:
      'Track AUM, P&L year-to-date, asset allocation breakdowns, and custodian-level summaries from a single command centre.',
  },
  {
    title: 'Compliance & KYC',
    description:
      'Maintain a structured record of client risk profiles, document expiry, and regulatory obligations. Never miss a review date.',
  },
  {
    title: 'Asset research',
    description:
      'Query cross-client exposure to any security, sector, or geography. Understand concentration risk before it becomes a problem.',
  },
  {
    title: 'Local-first & offline',
    description:
      'All data lives on your machine. No cloud dependency, no internet requirement, no telemetry. Suitable for air-gapped and high-security environments.',
  },
  {
    title: 'Multi-language',
    description:
      'Full interface support for English, French, Spanish, German, Italian, and Portuguese — with consistent terminology across all language variants.',
  },
  {
    title: 'Dark & light theme',
    description:
      'A thoughtfully designed interface in both dark and light modes, optimised for extended daily use across varying display environments.',
  },
]

const detailBlocks = [
  {
    eyebrow: 'Consolidation',
    img: banksImg,
    heading: 'One view across all custodians.',
    body: 'Private clients rarely hold assets with a single institution. Valore accepts custody statements from any bank, broker, or custodian — in PDF or XLSX — and resolves them into a unified ledger. No manual reconciliation. No spreadsheets.',
    bullets: [
      'Automatic position normalisation across statement formats',
      'Historical import for accurate P&L calculation',
      'FX conversion at date-of-record rates',
      'Custodian-level attribution in all reports',
    ],
  },
  {
    eyebrow: 'Privacy',
    img: clientImg,
    heading: 'Private by architecture, not by policy.',
    body: 'Valore processes everything locally. There are no user accounts, no servers, and no outbound connections during operation. Your client data never transits a network you don\'t own. This is not a configuration option — it is the only mode of operation.',
    bullets: [
      'No internet required after installation',
      'Encrypted local data store',
      'No crash reporting, analytics, or telemetry',
      'Works in fully air-gapped environments',
    ],
  },
  {
    eyebrow: 'Compliance',
    img: complianceImg,
    heading: 'Regulatory obligations, organised.',
    body: 'KYC documentation, suitability assessments, and review cycles are tracked per client with automatic expiry notifications. Compliance status is surfaced in the main dashboard, not buried in a separate module.',
    bullets: [
      'Document expiry tracking and alerts',
      'Risk profile versioning',
      'Audit-ready client records',
      'Configurable review cycles per jurisdiction',
    ],
  },
]

export default function Product() {
  return (
    <>
      {/* ─── Page header ─────────────────────────────────────────────── */}
      <section className="bg-bg-deep border-b border-border">
        <div className="container-content pt-20 pb-16">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-5">
            The product
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-fg mb-5 max-w-2xl">
            Precision tools for private wealth.
          </h1>
          <p className="text-fg-dim text-lg font-light leading-relaxed max-w-xl">
            A complete wealth management system for independent advisors and
            private banks — built around consolidation, privacy, and
            professional-grade reporting.
          </p>
        </div>
      </section>

      {/* ─── Detail blocks ───────────────────────────────────────────── */}
      {detailBlocks.map(({ eyebrow, heading, body, bullets, img }, i) => (
        <section
          key={eyebrow}
          className={i % 2 === 0 ? 'bg-bg-deep' : 'bg-card'}
        >
          <div className="container-content py-24">
            <div
              className={`flex flex-col md:flex-row gap-16 items-start ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text */}
              <div className="md:w-1/2 flex flex-col gap-5">
                <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium">
                  {eyebrow}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg leading-tight">
                  {heading}
                </h2>
                <p className="text-fg-dim font-light leading-relaxed">{body}</p>
                <ul className="flex flex-col gap-3 mt-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="text-accent mt-0.5 shrink-0 text-sm">—</span>
                      <span className="text-fg-dim text-sm font-light">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshot */}
              <div className="md:w-1/2">
                <div className="rounded border border-border overflow-hidden bg-surface">
                  <img
                    src={img}
                    alt={heading}
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── Full feature grid ───────────────────────────────────────── */}
      <section className="bg-bg-deep border-t border-border">
        <div className="container-content py-24">
          <div className="mb-14">
            <p className="text-muted text-xs uppercase tracking-[0.2em] font-medium mb-3">
              All capabilities
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg">
              Everything included. Nothing superfluous.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border">
        <div className="container-content py-20 text-center">
          <h2 className="font-serif text-3xl font-semibold text-fg mb-4">
            Ready to consolidate your practice?
          </h2>
          <p className="text-fg-dim font-light mb-8 max-w-md mx-auto">
            Request access and our team will be in touch to arrange
            a private demonstration.
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
