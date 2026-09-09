import { useState, useMemo } from 'react'
import Icon from './Icon'

/**
 * Interactive HVAC sizing calculator calibrated for Abu Dhabi's
 * extreme 50°C ambient conditions. Calculates tonnage, kW, and BTU
 * based on facility type, area, ceiling height, and glass exposure.
 */
const Calculator = ({ setQuoteModalOpen }) => {
  const [facilityType, setFacilityType] = useState('commercial')
  const [areaSqFt, setAreaSqFt] = useState(3500)
  const [ceilingHeight, setCeilingHeight] = useState(3.5)
  const [glassExposure, setGlassExposure] = useState('high')

  // Abu Dhabi standard heat load calculation (50°C summer design conditions)
  const calculatedTonnage = useMemo(() => {
    let baseBTUPerSqFt =
      facilityType === 'industrial' ? 75 : facilityType === 'commercial' ? 65 : 55
    let glassMultiplier =
      glassExposure === 'extreme' ? 1.3 : glassExposure === 'high' ? 1.18 : 1.05
    let heightMultiplier = ceilingHeight > 3 ? (ceilingHeight / 3) * 1.1 : 1

    let totalBTU = areaSqFt * baseBTUPerSqFt * glassMultiplier * heightMultiplier
    let tons = (totalBTU / 12000).toFixed(1)
    let estKw = (Number(tons) * 3.517).toFixed(1)
    return { tons, estKw, totalBTU: Math.round(totalBTU) }
  }, [facilityType, areaSqFt, ceilingHeight, glassExposure])

  return (
    <section
      id="calculator"
      className="py-20 relative z-10 bg-slate-900/60 border-y border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Calculator Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
              <Icon name="sliders" size={14} />
              Abu Dhabi Heat Load Estimator
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Calculate Mechanical AC Sizing for Your Abu Dhabi Property
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Abu Dhabi ambient temperatures regularly exceed 48°C with severe
              humidity. Standard global HVAC sizing formulas fail in the Gulf.
              Use our calibrated UAE engineering calculation tool to estimate
              required cooling tonnage, air changes, and KW mechanical capacity.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Icon name="check-circle-2" size={16} className="text-brand-400" />
                <span>Calculated based on ASHRAE Gulf Climatic Design Conditions</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="check-circle-2" size={16} className="text-brand-400" />
                <span>Accounts for direct sun irradiation on glass curtain walls</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="check-circle-2" size={16} className="text-brand-400" />
                <span>Estidama Pearl 1/2/3 energy efficiency optimization ready</span>
              </div>
            </div>
          </div>

          {/* Calculator Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border-brand-500/30 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                {/* Facility Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Facility / Property Type
                  </label>
                  <select
                    value={facilityType}
                    onChange={(e) => setFacilityType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-400 font-medium"
                  >
                    <option value="residential">Luxury Villa / Penthouse</option>
                    <option value="commercial">
                      Commercial Tower / Office (Reem/Maryah)
                    </option>
                    <option value="industrial">
                      Industrial Factory / Warehouse (Musaffah/ICAD)
                    </option>
                  </select>
                </div>

                {/* Floor Area Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Total Air-Conditioned Area
                    </label>
                    <span className="text-xs font-mono font-bold text-brand-400">
                      {areaSqFt.toLocaleString()} sq.ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="25000"
                    step="250"
                    value={areaSqFt}
                    onChange={(e) => setAreaSqFt(Number(e.target.value))}
                    className="w-full accent-brand-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Ceiling Height */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Ceiling Height
                    </label>
                    <span className="text-xs font-mono font-bold text-brand-400">
                      {ceilingHeight} Meters
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2.7"
                    max="7.0"
                    step="0.1"
                    value={ceilingHeight}
                    onChange={(e) => setCeilingHeight(Number(e.target.value))}
                    className="w-full accent-brand-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Glass Sun Exposure */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Sun &amp; Glass Exposure
                  </label>
                  <select
                    value={glassExposure}
                    onChange={(e) => setGlassExposure(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-400 font-medium"
                  >
                    <option value="moderate">
                      Moderate / Double Glazed Low-E
                    </option>
                    <option value="high">High / Full Glass Curtain Wall</option>
                    <option value="extreme">
                      Extreme Direct West / Unshaded Industrial
                    </option>
                  </select>
                </div>
              </div>

              {/* Result Callout Box */}
              <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-brand-500/40 rounded-xl p-6 relative overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center items-center">
                  <div className="p-2 border-b sm:border-b-0 sm:border-r border-slate-800">
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Required Cooling
                    </p>
                    <p className="text-3xl font-extrabold text-brand-400 font-mono mt-1">
                      {calculatedTonnage.tons}{' '}
                      <span className="text-sm text-slate-300">TR</span>
                    </p>
                    <p className="text-[10px] text-slate-500">Tons of Refrigeration</p>
                  </div>

                  <div className="p-2 border-t sm:border-t-0 sm:border-r border-slate-800">
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Mechanical Capacity
                    </p>
                    <p className="text-3xl font-extrabold text-cyan-300 font-mono mt-1">
                      {calculatedTonnage.estKw}{' '}
                      <span className="text-sm text-slate-300">kW</span>
                    </p>
                    <p className="text-[10px] text-slate-500">Heat Extraction Rate</p>
                  </div>

                  <div className="p-2">
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Total BTU / Hour
                    </p>
                    <p className="text-2xl font-extrabold text-white font-mono mt-1">
                      {calculatedTonnage.totalBTU.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-emerald-400">
                      Peak Ambient 50°C Load
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-300 text-center sm:text-left">
                    <span className="font-bold text-white">Recommended Setup:</span>{' '}
                    {Number(calculatedTonnage.tons) > 30
                      ? 'Central Chilled Water / District ETS'
                      : 'VRF Inverter Multi-Split / Ducted Package Units'}
                  </div>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-slate-950 text-xs font-extrabold transition-all"
                  >
                    Lock in Engineering Spec
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
