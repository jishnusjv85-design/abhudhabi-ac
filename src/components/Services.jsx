import { useState } from 'react'
import Icon from './Icon'

const serviceTabs = [
  { id: 'all', label: 'All Services' },
  { id: 'chiller', label: 'Chiller Plants' },
  { id: 'vrf', label: 'VRV / VRF' },
  { id: 'airside', label: 'AHU & Ducting' },
  { id: 'district', label: 'District Cooling' },
  { id: 'marine', label: 'Offshore & Marine' },
  { id: 'amc', label: 'AMC & IoT' },
]

const services = [
  {
    id: 'chillers',
    category: 'chiller',
    title: 'Industrial & Commercial Chiller Plants',
    arabic: 'محطات التبريد المركزية والصناعية',
    desc: 'Overhaul, compressor rebuilding, magnetic bearing chillers (Centrifugal, Screw, Scroll), condenser tube descaling, and Tabreed / District cooling heat exchanger stations.',
    tags: ['York', 'Trane', 'Carrier', 'Daikin', 'District Cooling'],
    badge: 'Heavy Mechanical',
    icon: 'snowflake',
  },
  {
    id: 'vrf-systems',
    category: 'vrf',
    title: 'VRV / VRF Inverter Multi-Split Systems',
    arabic: 'أنظمة تدفق وسيط التبريد المتغير VRF',
    desc: 'Design, engineering, refrigerant R410A/R32 leak pinpointing, inverter PCB diagnostics, and multi-tenant high-rise heat recovery zoning solutions.',
    tags: ['MHI', 'LG Multi-V', 'Samsung DVM', 'Energy Saving'],
    badge: 'Estidama 3-Pearl Compliant',
    icon: 'cpu',
  },
  {
    id: 'ahu-ducting',
    category: 'airside',
    title: 'AHU, FAHU & Cleanroom Ductwork Fabrication',
    arabic: 'وحدات مناولة الهواء وتصنيع مجاري الهواء',
    desc: 'Custom GI & PIR duct fabrication (SMACNA standards), heat recovery wheels, HEPA hospital surgical suite air filtration, and VAV airflow balancing.',
    tags: ['SMACNA Spec', 'HEPA 99.97%', 'Acoustic Attenuation'],
    badge: 'Custom Fabrication',
    icon: 'wind',
  },
  {
    id: 'amc-maintenance',
    category: 'amc',
    title: '24/7 Mechanical AMC & Remote IoT Monitoring',
    arabic: 'عقود الصيانة السنوية والمراقبة الذكية',
    desc: 'Guaranteed 15-minute emergency dispatch in Abu Dhabi, predictive vibration analysis, oil analysis, BMS integration, and chilled water chemical balancing.',
    tags: ['15-Min SLA', 'Musaffah Hub', 'Quarterly Overhauls'],
    badge: 'Emergency Ready',
    icon: 'shield-alert',
  },
  {
    id: 'marine-offshore',
    category: 'marine',
    title: 'Marine & Offshore Platform HVAC-R',
    arabic: 'أنظمة التكييف البحرية وحقول النفط',
    desc: 'Explosion-proof ATEX certified AC units, seawater cupro-nickel condenser retrofits, offshore rig cooling, and ICAD/Mussafah maritime dock refits.',
    tags: ['ATEX Certified', 'Cu-Ni Condensers', 'Offshore Rig Rated'],
    badge: 'ADNOC Approved Standards',
    icon: 'anchor',
  },
  {
    id: 'district-cooling',
    category: 'district',
    title: 'District Cooling ETS & Plate Heat Exchangers',
    arabic: 'محطات نقل طاقة التبريد المركزي ETS',
    desc: 'Energy Transfer Station (ETS) maintenance, Alfa Laval/Sondex plate descaling, delta-T optimization, BTU metering validation, and Abu Dhabi DoE compliance.',
    tags: ['Tabreed Approved', 'Delta-T Fix', 'Plate Heat Exchangers'],
    badge: 'DoE Abu Dhabi Regulated',
    icon: 'gauge',
  },
]

/**
 * Services section with category filter tabs and a responsive
 * grid of service cards.
 */
const Services = ({ setQuoteModalOpen }) => {
  const [activeServiceTab, setActiveServiceTab] = useState('all')

  const filteredServices =
    activeServiceTab === 'all'
      ? services
      : services.filter((s) => s.category === activeServiceTab)

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-400 text-xs font-extrabold tracking-wider uppercase bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Comprehensive Mechanical Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Full-Spectrum AC &amp; HVAC Engineering Services
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Specialized mechanical contracting tailored for residential towers,
            industrial factories in Musaffah &amp; ICAD, luxury villas, data
            centers, and offshore assets.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveServiceTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeServiceTab === tab.id
                    ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={24} />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-brand-300 border border-slate-700">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 arabic-font font-medium mt-1 mb-3">
                  {service.arabic}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/70 mb-5">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-brand-500 text-slate-300 hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 border border-slate-800 hover:border-transparent"
                >
                  Request Engineering Proposal
                  <Icon name="arrow-right" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
