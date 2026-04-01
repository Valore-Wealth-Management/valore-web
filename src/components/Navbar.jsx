import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import valoreLogo from '../assets/valore wide.svg'

const LANGS = ['EN', 'DE', 'FR', 'PT']

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/',        label: t('nav.home')    },
    { to: '/product', label: t('nav.product') },
    { to: '/about',   label: t('nav.about')   },
  ]

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-16 bg-surface transition-all duration-300 ${
        scrolled ? 'border-b border-border shadow-lg shadow-black/20' : ''
      }`}
    >
      <div className="container-content h-full flex items-center justify-between">

        {/* Logo */}
        <img src={valoreLogo} alt="Valore" className="h-12 w-auto shrink-0" style={{ imageRendering: 'auto' }} />

        {/* Links + lang switcher */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav-underline text-sm font-medium transition-colors ${
                  isActive ? 'text-fg active-link' : 'text-fg-dim hover:text-fg'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 border border-border rounded px-2 py-1">
            {LANGS.map((lang, i) => (
              <span key={lang} className="flex items-center">
                <button
                  onClick={() => i18n.changeLanguage(lang.toLowerCase())}
                  className={`text-xs font-medium px-1 transition-colors ${
                    i18n.resolvedLanguage === lang.toLowerCase()
                      ? 'text-accent'
                      : 'text-muted hover:text-fg-dim'
                  }`}
                >
                  {lang}
                </button>
                {i < LANGS.length - 1 && (
                  <span className="text-border text-xs select-none">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/questionnaire"
          className="inline-flex items-center px-4 py-2 rounded bg-accent hover:bg-accent-hover text-bg-deep text-sm font-semibold tracking-wide transition-colors duration-200"
        >
          {t('nav.requestAccess')}
        </Link>
      </div>
    </nav>
  )
}
