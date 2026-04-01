import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import valoreLogo from '../assets/valore wide.png'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-content py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <img src={valoreLogo} alt="Valore" className="h-7 w-auto" />
            <p className="text-muted text-sm leading-relaxed font-light">
              {t('footer.tagline')}
              <br />
              {t('footer.sub')}
            </p>
          </div>

          {/* Nav */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-muted text-xs uppercase tracking-widest font-medium">{t('footer.product')}</span>
              <Link to="/product"       className="text-fg-dim hover:text-fg text-sm transition-colors">{t('footer.features')}</Link>
              <Link to="/questionnaire" className="text-fg-dim hover:text-fg text-sm transition-colors">{t('nav.earlyAccess')}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-muted text-xs uppercase tracking-widest font-medium">{t('footer.company')}</span>
              <Link to="/about" className="text-fg-dim hover:text-fg text-sm transition-colors">{t('footer.about')}</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-muted text-xs">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <p className="text-muted text-xs">{t('footer.built')}</p>
        </div>
      </div>
    </footer>
  )
}
