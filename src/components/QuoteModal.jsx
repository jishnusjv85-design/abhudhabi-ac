import Icon from './Icon'

/**
 * Modal overlay for requesting an engineering proposal / site
 * consultation. Slides in with a fade-in animation.
 */
const QuoteModal = ({ quoteModalOpen, setQuoteModalOpen }) => {
  if (!quoteModalOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      'Proposal request received. Our senior engineer will provide a preliminary estimate within 2 hours.'
    )
    setQuoteModalOpen(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-card max-w-lg w-full rounded-2xl p-6 sm:p-8 border-brand-500/40 relative shadow-2xl animate-fade-in">
        <button
          onClick={() => setQuoteModalOpen(false)}
          className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white rounded-lg"
        >
          <Icon name="x" size={20} />
        </button>

        <div className="flex items-center gap-2 text-brand-400 text-xs font-bold uppercase mb-2">
          <Icon name="clipboard-check" size={16} />
          Abu Dhabi Site Consultation
        </div>
        <h3 className="text-xl font-bold text-white mb-1">
          Request Engineering Proposal
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          Enter specifications for instant engineering review.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Name &amp; Contact Number
            </label>
            <input
              type="text"
              required
              placeholder="Name &amp; +971 Mobile"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-brand-400"
            />
          </div>
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Project Category
            </label>
            <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-brand-400">
              <option>Commercial Chiller Overhaul / Maintenance</option>
              <option>VRV/VRF Multi-Split Supply &amp; Installation</option>
              <option>Ductwork Fabrication &amp; Airflow Balancing</option>
              <option>Annual Maintenance Contract (AMC)</option>
              <option>District Cooling ETS Station Service</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Estimated Tonnage or Area (sq.ft)
            </label>
            <input
              type="text"
              placeholder="e.g. 50 TR or 6,000 sq.ft in Musaffah"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-brand-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-sm transition-all mt-2"
          >
            Send Engineering Scope
          </button>
        </form>
      </div>
    </div>
  )
}

export default QuoteModal
