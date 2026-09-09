import { useState } from 'react'
import Icon from './Icon'

/**
 * Sticky header with logo, desktop nav links, desktop action buttons,
 * and a collapsible mobile menu.
 */
const Navbar = ({ setQuoteModalOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-400 to-brand-800 p-0.5 shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Icon name="snowflake" size={24} className="text-brand-400 animate-spin-slow" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white">COOLTECH</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 font-mono font-bold">
                MECH
              </span>
            </div>
            <p className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
              Abu Dhabi Mechanical Engineering
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-brand-400 transition-colors">Mechanical Services</a>
          <a href="#calculator" className="hover:text-brand-400 transition-colors">Tonnage Calculator</a>
          <a href="#projects" className="hover:text-brand-400 transition-colors">Abu Dhabi Projects</a>
          <a href="#amc" className="hover:text-brand-400 transition-colors">AMC Contracts</a>
          <a
            href="#emergency"
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-400 font-semibold"
          >
            <Icon name="zap" size={16} />
            24/7 Breakdown
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/971501234567?text=Hello%20CoolTech%20Abu%20Dhabi,%20I%20need%20an%20urgent%20AC%20Engineering%20consultation"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-2 text-sm font-semibold shadow-sm"
          >
            <Icon name="message-circle" size={16} />
            WhatsApp Engineering
          </a>
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-500 to-cyan-600 hover:from-brand-400 hover:to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all flex items-center gap-2"
          >
            <Icon name="file-text" size={16} />
            Book Site Audit
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
        >
          <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 border-b border-slate-800 px-6 py-5 space-y-4">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-200 py-1 font-medium">
            Mechanical Services
          </a>
          <a href="#calculator" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-200 py-1 font-medium">
            UAE Tonnage Calculator
          </a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-200 py-1 font-medium">
            Abu Dhabi Projects
          </a>
          <a href="#amc" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-200 py-1 font-medium">
            AMC Contracts
          </a>
          <a
            href="#emergency"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-amber-400 py-1 font-semibold flex items-center gap-2"
          >
            <Icon name="zap" size={16} />
            24/7 Breakdown Dispatch
          </a>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                setQuoteModalOpen(true)
              }}
              className="w-full py-3 rounded-lg bg-brand-500 text-slate-950 font-bold text-center"
            >
              Request Engineering Quote
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
