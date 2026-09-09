import Icon from './Icon'

const amcPlans = [
  {
    id: 'bronze',
    title: 'Commercial Standard',
    subtitle: 'For standalone retail & small offices',
    price: 'AED 450',
    priceSuffix: ' / month',
    popular: false,
    badge: '',
    features: [
      '4x Quarterly Deep Mechanical Servicing',
      'Chemical Coil Jet Wash & Disinfection',
      'Refrigerant Pressure & Leak Testing',
      '4-Hour Response Time for Breakdowns',
    ],
    buttonText: 'Select Plan',
    buttonClass:
      'mt-8 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 transition-all',
  },
  {
    id: 'gold',
    title: 'Heavy Plant & Chiller Pro',
    subtitle: 'High-rise towers, hotels & compounds',
    price: 'AED 1,850',
    priceSuffix: ' / month',
    popular: true,
    badge: 'MOST POPULAR IN ABU DHABI',
    badgeClass: 'bg-brand-500',
    features: [
      'Monthly Preventive Mechanical Overhauls',
      '24/7 Priority Emergency (15-Min Response)',
      'Chiller Oil & Spectrochemical Analysis',
      'Laser Shaft Alignment & Vibration Checks',
      'Dedicated Lead Mechanical Engineer',
    ],
    buttonText: 'Select Heavy Plant Plan',
    buttonClass:
      'mt-8 w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-extrabold text-xs transition-all shadow-lg shadow-brand-500/30',
  },
  {
    id: 'bespoke',
    title: 'Industrial & Offshore',
    subtitle: 'Factories, ADNOC sites, data centers',
    price: 'Custom Quote',
    priceSuffix: ' / SLA based',
    popular: false,
    badge: '',
    features: [
      '24/7 On-Site Stationed Mechanical Crew',
      'ATEX Hazardous Area Certified Technicians',
      'Complete Spare Compressor Inventory Staged',
      'District Cooling Delta-T Penalty Protection',
    ],
    buttonText: 'Request Industrial Audit',
    buttonClass:
      'mt-8 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 transition-all',
  },
]

/**
 * Annual Maintenance Contract tier cards.
 */
const AMC = ({ setQuoteModalOpen }) => {
  return (
    <section id="amc" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-400 text-xs font-bold tracking-widest uppercase bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            PEACE OF MIND ALL SUMMER
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Annual Mechanical Maintenance Contracts (AMC)
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Customized preventative maintenance contracts designed for Abu
            Dhabi facilities, commercial buildings, and luxury properties.
            Guaranteed SLAs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amcPlans.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card rounded-2xl p-7 flex flex-col justify-between border-slate-800 ${
                plan.popular ? 'border-brand-500/50 relative shadow-2xl shadow-brand-500/10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-brand-500 text-slate-950 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{plan.subtitle}</p>
                <div className="mt-6 mb-6">
                  <span className="text-3xl font-extrabold text-white font-mono">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400">{plan.priceSuffix}</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Icon name="check" size={16} className="text-brand-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setQuoteModalOpen(true)}
                className={plan.buttonClass}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AMC
