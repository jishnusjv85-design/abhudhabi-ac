import Icon from './Icon'

const projects = [
  {
    id: 1,
    category: 'COMMERCIAL TOWER',
    location: 'Al Reem Island',
    title: '3,200 TR Chiller Plant Retrofit',
    subtitle: '4x Trane Centrifugal Chillers Overhaul',
    metrics: [
      { label: 'Energy Savings:', value: '22.4% KW/Ton Reduction', valueClass: 'text-emerald-400' },
      { label: 'Scope:', value: 'Compressor Rewind & BMS Integration', valueClass: 'font-medium' },
      { label: 'Compliance:', value: 'Estidama 2-Pearl Certified', valueClass: 'font-medium' },
    ],
    badgeClass: 'bg-brand-500/20 text-brand-300',
  },
  {
    id: 2,
    category: 'INDUSTRIAL COMPLEX',
    location: 'Musaffah Industrial',
    title: 'Pharmaceutical Cleanroom AHU',
    subtitle: 'ISO Class 6 Ductwork & HEPA Design',
    metrics: [
      { label: 'Air Filtration:', value: '99.99% @ 0.3 Micron', valueClass: 'text-brand-300' },
      { label: 'Scope:', value: '316L Stainless Steel Ducts', valueClass: 'font-medium' },
      { label: 'Standards:', value: 'MOHAP & FDA Compliant', valueClass: 'font-medium' },
    ],
    badgeClass: 'bg-amber-500/20 text-amber-300',
  },
  {
    id: 3,
    category: 'LUXURY RESIDENTIAL',
    location: 'Saadiyat Beach Villas',
    title: 'VRV IV Ultra-Quiet System',
    subtitle: 'Daikin Inverter 45 TR Zoning',
    metrics: [
      { label: 'Acoustics:', value: 'Sub-24 dBA Whisper Silent', valueClass: 'text-emerald-400' },
      { label: 'Control:', value: 'Apple HomeKit & Modbus Smart', valueClass: 'font-medium' },
      { label: 'Warranty:', value: '10-Year Compressor Coverage', valueClass: 'font-medium' },
    ],
    badgeClass: 'bg-cyan-500/20 text-cyan-300',
  },
]

/**
 * Project portfolio grid showcasing signature engineering projects
 * across Abu Dhabi.
 */
const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 relative z-10 bg-slate-900/40 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-brand-400 text-xs font-bold tracking-widest uppercase">
              ENGINEERING TRACK RECORD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Signature Projects Across Abu Dhabi
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Delivering high-performance thermodynamic engineering across iconic
            capital developments, industrial sectors, and marine assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border-slate-800 group hover:border-brand-500/40 transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded ${project.badgeClass} font-bold`}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400">{project.location}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>
              <div className="p-5 text-xs text-slate-300 space-y-2.5">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-slate-500">{metric.label}</span>
                    <span className={metric.valueClass}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
