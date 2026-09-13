import { useState, useEffect } from 'react'
import Icon from './components/Icon'
import AirFlowCanvas from './components/AirFlowCanvas'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import Calculator from './components/Calculator'
import EnhancedCalculator from './components/EnhancedCalculator'
import Emergency from './components/Emergency'
import Projects from './components/Projects'
import AMC from './components/AMC'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import QuoteModal from './components/QuoteModal'

/**
 * Root application component.
 * Composes all page sections and manages global modal state.
 */
function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    document.title =
      'CoolTech Engineering Abu Dhabi - Precision HVAC & AC Mechanical Engineering'
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 bg-grid-pattern selection:bg-brand-500 selection:text-black">
      <AirFlowCanvas />

      {/* Top Bar */}
      <TopBar />

      {/* Navigation */}
      <Navbar setQuoteModalOpen={setQuoteModalOpen} />

      {/* Page Sections */}
      <Hero setQuoteModalOpen={setQuoteModalOpen} />
      <StatsBar />
      <Services setQuoteModalOpen={setQuoteModalOpen} />
      <EnhancedCalculator setQuoteModalOpen={setQuoteModalOpen} />
      <Emergency />
      <Projects />
      <AMC setQuoteModalOpen={setQuoteModalOpen} />
      <Contact />
      <Footer />

      {/* Floating Elements */}
      <WhatsAppButton />
      <QuoteModal quoteModalOpen={quoteModalOpen} setQuoteModalOpen={setQuoteModalOpen} />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 flex items-center justify-center hover:bg-emerald-700 transition-all duration-200 animate-fade-in"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App
