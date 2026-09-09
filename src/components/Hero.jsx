import Icon from './Icon'

/**
 * Hero section: headline, sub-copy, highlight badges, primary CTAs,
 * and a live telemetry widget on the right.
 */
const Hero = ({ setQuoteModalOpen }) => {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/80 border border-brand-500/30 text-brand-300 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              ENGINEERING EXCELLENCE IN 50°C+ EXTREME GULF CLIMATES
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Heavy-Duty <span className="cool-gradient-text">AC &amp; Mechanical</span> Engineering in Abu Dhabi.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              From 5,000-Ton chiller overhauls and Tabreed District Cooling heat exchangers
              to high-rise VRV/VRF multi-splits and offshore marine AC systems. Fully licensed
              by Abu Dhabi Municipality &amp; Estidama certified.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                <Icon name="clock-3" size={16} className="text-brand-400 shrink-0" />
                <span>15-Min Response</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                <Icon name="award" size={16} className="text-amber-400 shrink-0" />
                <span>Estidama Pearl Ready</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg col-span-2 sm:col-span-1">
                <Icon name="check-check" size={16} className="text-emerald-400 shrink-0" />
                <span>ADNOC &amp; DoE Standard</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 via-cyan-400 to-blue-500 hover:from-brand-400 hover:to-blue-400 text-slate-950 font-extrabold text-base shadow-xl shadow-brand-500/25 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
              >
                <Icon name="calculator" size={20} />
                Calculate Load &amp; Get Quote
              </button>
              <a
                href="#emergency"
                className="px-6 py-4 rounded-xl bg-slate-900/90 border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <Icon name="alert-triangle" size={20} className="text-amber-400" />
                Emergency Breakdown Unit
              </a>
            </div>

            {/* Trust markers */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
              <span>Authorized Service Protocols:</span>
              <span className="text-slate-300 font-bold">YORK</span>
              <span className="text-slate-300 font-bold">CARRIER</span>
              <span className="text-slate-300 font-bold">DAIKIN</span>
              <span className="text-slate-300 font-bold">TRANE</span>
              <span className="text-slate-300 font-bold">MITSUBISHI</span>
            </div>
          </div>

          {/* Hero Right Widget: Live Telemetry */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl relative border-brand-500/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                  <h3 className="font-bold text-white text-base">Abu Dhabi Plant Telemetry</h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-500/20 text-brand-300">
                  LIVE SENSORS
                </span>
              </div>

              {/* Telemetry Gauge Cards */}
              <div className="space-y-4">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-400">
                      <Icon name="thermometer-snowflake" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Chilled Water Supply (CHWS)</p>
                      <p className="text-lg font-mono font-bold text-white">
                        5.8 °C <span className="text-xs text-emerald-400 font-normal">Optimal ΔT 6.2°C</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">NORMAL</span>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Icon name="activity" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Compressor Vibration (Musaffah)</p>
                      <p className="text-lg font-mono font-bold text-white">
                        1.82 mm/s <span className="text-xs text-slate-400 font-normal">ISO 10816</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">PASS</span>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                      <Icon name="sun" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Outdoor Ambient (Yas Island)</p>
                      <p className="text-lg font-mono font-bold text-white">
                        46.5 °C <span className="text-xs text-amber-400 font-normal">RH 72%</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded">PEAK LOAD</span>
                </div>
              </div>

              {/* Instant Dispatch Trigger */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-3 font-medium">
                  <span>Technicians on Duty (Abu Dhabi):</span>
                  <span className="text-brand-400 font-mono font-bold">14 Mobile Units Active</span>
                </div>
                <a
                  href="tel:+97126884400"
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-brand-300 hover:text-white border border-brand-500/30 font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Icon name="phone" size={16} />
                  Call Control Center: 02 688 4400
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
