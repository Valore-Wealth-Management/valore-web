import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FeatureCard from '../components/FeatureCard'
import { useInView } from '../hooks/useInView'
import banksImg      from '../assets/banks.png'
import clientImg     from '../assets/client.png'
import complianceImg from '../assets/compliance.png'

function RevealSection({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal ${delay} ${inView ? 'in-view' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default function Product() {
  const { t } = useTranslation()

  const allFeatures = [
    { title: t('features.consolidation.title'), description: t('features.consolidation.description') },
    { title: t('features.portfolio.title'),     description: t('features.portfolio.description')     },
    { title: t('features.kpis.title'),          description: t('features.kpis.description')          },
    { title: t('features.compliance.title'),    description: t('features.compliance.description')    },
    { title: t('features.research.title'),      description: t('features.research.description')      },
    { title: t('features.offline.title'),       description: t('features.offline.description')       },
    { title: t('features.multilang.title'),     description: t('features.multilang.description')     },
    { title: t('features.theme.title'),         description: t('features.theme.description')         },
  ]

  const detailBlocks = [
    {
      eyebrow: t('product.blocks.consolidation.eyebrow'),
      heading: t('product.blocks.consolidation.heading'),
      body:    t('product.blocks.consolidation.body'),
      bullets: [
        t('product.blocks.consolidation.bullet1'),
        t('product.blocks.consolidation.bullet2'),
        t('product.blocks.consolidation.bullet3'),
        t('product.blocks.consolidation.bullet4'),
      ],
      img: banksImg,
    },
    {
      eyebrow: t('product.blocks.privacy.eyebrow'),
      heading: t('product.blocks.privacy.heading'),
      body:    t('product.blocks.privacy.body'),
      bullets: [
        t('product.blocks.privacy.bullet1'),
        t('product.blocks.privacy.bullet2'),
        t('product.blocks.privacy.bullet3'),
        t('product.blocks.privacy.bullet4'),
      ],
      img: clientImg,
    },
    {
      eyebrow: t('product.blocks.compliance.eyebrow'),
      heading: t('product.blocks.compliance.heading'),
      body:    t('product.blocks.compliance.body'),
      bullets: [
        t('product.blocks.compliance.bullet1'),
        t('product.blocks.compliance.bullet2'),
        t('product.blocks.compliance.bullet3'),
        t('product.blocks.compliance.bullet4'),
      ],
      img: complianceImg,
    },
  ]

  return (
    <>
      {/* ─── Page header ─────────────────────────────────────────────── */}
      <section className="bg-bg-deep border-b border-border">
        <div className="container-content pt-20 pb-16">
          <RevealSection>
            <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-5">
              {t('product.eyebrow')}
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-fg mb-5 leading-none tracking-tight">
              {t('product.heading')}
            </h1>
            <p className="text-fg-dim text-lg font-light leading-relaxed max-w-xl">
              {t('product.sub')}
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── Detail blocks ───────────────────────────────────────────── */}
      {detailBlocks.map(({ eyebrow, heading, body, bullets, img }, i) => (
        <section key={eyebrow} className={i % 2 === 0 ? 'bg-bg-deep' : 'bg-card'}>
          <div className="container-content py-24">
            <div className={`flex flex-col md:flex-row gap-16 items-start ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

              <RevealSection className="md:w-1/2 flex flex-col gap-5">
                <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium">{eyebrow}</p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg leading-tight">{heading}</h2>
                <p className="text-fg-dim font-light leading-relaxed">{body}</p>
                <ul className="flex flex-col gap-3 mt-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="text-accent mt-0.5 shrink-0 text-sm">—</span>
                      <span className="text-fg-dim text-sm font-light">{b}</span>
                    </li>
                  ))}
                </ul>
              </RevealSection>

              <RevealSection className="md:w-1/2" delay="reveal-delay-2">
                <div className="rounded border border-border overflow-hidden bg-surface">
                  <img src={img} alt={heading} className="w-full h-auto object-cover object-top" />
                </div>
              </RevealSection>

            </div>
          </div>
        </section>
      ))}

      {/* ─── Video placeholder ──────────────────────────────────────── */}
      <section className="bg-bg-deep border-t border-border">
        <div className="container-content py-24">

          <RevealSection className="mb-10">
            <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
              {t('product.video.eyebrow')}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg leading-tight max-w-xl">
              {t('product.video.heading')}
            </h2>
          </RevealSection>

          <RevealSection delay="reveal-delay-1">
            <div className="relative w-full rounded border border-border overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title={t('product.video.heading')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </RevealSection>

        </div>
      </section>

      {/* ─── Full feature grid ───────────────────────────────────────── */}
      <section className="bg-bg-deep border-t border-border">
        <div className="container-content py-24">
          <RevealSection className="mb-14">
            <p className="text-muted text-xs uppercase tracking-[0.2em] font-medium mb-3">
              {t('product.grid.eyebrow')}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-fg">
              {t('product.grid.heading')}
            </h2>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {allFeatures.map((f, i) => (
              <RevealSection key={f.title} delay={`reveal-delay-${(i % 4) + 1}`} className="h-full">
                <FeatureCard {...f} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border">
        <div className="container-content py-20">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold text-fg mb-4">
              {t('product.cta.heading')}
            </h2>
            <p className="text-fg-dim font-light mb-8 max-w-md">
              {t('product.cta.sub')}
            </p>
            <Link
              to="/questionnaire"
              className="inline-flex items-center px-8 py-3.5 rounded bg-accent hover:bg-accent-hover text-bg-deep text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {t('product.cta.button')}
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
