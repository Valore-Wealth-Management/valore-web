import { Link } from 'react-router-dom'
import valoreLogo from '../assets/valore wide.svg'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-content py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <img src={valoreLogo} alt="Valore" className="h-7 w-auto" />
            <p className="text-muted text-sm leading-relaxed font-light">
              Wealth Management System.
              <br />
              Private, consolidated, professional.
            </p>
          </div>

          {/* Nav */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-muted text-xs uppercase tracking-widest font-medium">Product</span>
              <Link to="/product"       className="text-fg-dim hover:text-fg text-sm transition-colors">Features</Link>
              <Link to="/questionnaire" className="text-fg-dim hover:text-fg text-sm transition-colors">Early Access</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-muted text-xs uppercase tracking-widest font-medium">Company</span>
              <Link to="/"             className="text-fg-dim hover:text-fg text-sm transition-colors">About</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Valore. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Built for private banks and independent wealth managers.
          </p>
        </div>
      </div>
    </footer>
  )
}
