/**
 * Stats strip: key engineering credentials and performance metrics
 * displayed as a dark band between the hero and services sections.
 */
const StatsBar = () => {
  const stats = [
    { value: '18+', label: 'Years Engineering UAE HVAC' },
    { value: '4,800+', label: 'Tons Chiller Overhauls Yearly' },
    { value: '15 Min', label: 'Emergency Response SLA' },
    { value: '100%', label: 'ADDC & Estidama Compliant' },
  ]

  return (
    <section className="relative z-20 py-8 bg-slate-900/90 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
