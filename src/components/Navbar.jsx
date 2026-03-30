import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import valoreLogo from '../assets/valore wide.svg'

const links = [
  { to: '/',              label: 'Home'          },
  { to: '/product',       label: 'Product'       },
  { to: '/questionnaire', label: 'Early Access'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-16 bg-surface transition-all duration-300 ${
        scrolled ? 'border-b border-border shadow-lg shadow-black/20' : ''
      }`}
    >
      <div className="container-content h-full flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={valoreLogo} alt="Valore" className="h-7 w-auto" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.slice(0, 2).map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-fg' : 'text-fg-dim hover:text-fg'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/questionnaire"
          className="inline-flex items-center px-4 py-2 rounded bg-accent hover:bg-accent-hover text-bg-deep text-sm font-semibold tracking-wide transition-colors duration-200"
        >
          Request Access
        </Link>
      </div>
    </nav>
  )
}
