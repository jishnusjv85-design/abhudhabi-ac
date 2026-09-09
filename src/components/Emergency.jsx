import { useState } from 'react'
import Icon from './Icon'

/**
 * Emergency dispatch simulator: a live form that simulates
 * paging the nearest Abu Dhabi mechanical response unit.
 */
const Emergency = () => {
  const [selectedEmergencyType, setSelectedEmergencyType] = useState('chiller_trip')
  const [emergencyStatus, setEmergencyStatus] = useState(null)

  const triggerEmergencyDispatch = (e) => {
    e.preventDefault()
    setEmergencyStatus('dispatching')
    setTimeout(() => {
      setEmergencyStatus('dispatched')
    }, 1800)
  }

  return (
    <section id="emergency" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border-amber-500/40 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Emergency Description */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                <Icon name="siren" size={16} className="text-amber-400 animate-bounce" />
                PRIORITY EMERGENCY MECHANICAL RESPONSE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                AC Chiller Trip or Complete Cooling Failure in Abu Dhabi?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Server rooms, industrial freezers, luxury penthouses, and
                commercial offices cannot withstand UAE heat without rapid
                mechanical remediation. Our emergency flying squads arrive with
                portable vacuum pumps, recovery cylinders, nitrogen, and
                replacement compressors.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                  <p className="text-xs text-slate-400">Musaffah / ICAD Zone</p>
                  <p className="text-sm font-bold text-white font-mono">12 - 18 Min SLA</p>
                </div>
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                  <p className="text-xs text-slate-400">Reem / Maryah / Downtown</p>
                  <p className="text-sm font-bold text-white font-mono">15 - 22 Min SLA</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+97126884400"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base transition-all shadow-lg shadow-amber-500/20"
                >
                  <Icon name="phone-call" size={20} />
                  Direct Emergency Hotline: 02 688 4400
                </a>
              </div>
            </div>

            {/* Dispatch Request Form */}
            <div className="lg:col-span-6 bg-slate-950/90 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Icon name="radio" size={18} className="text-amber-400" />
                Live Emergency Service Dispatcher
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Fill immediate problem details for instant technician paging.
              </p>

              {emergencyStatus === 'dispatched' ? (
                <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Icon name="check" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Technician Unit Paged &amp; En Route!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Unit #AD-04 has acknowledged your ticket. ETA is 18 minutes.
                    Our lead HVAC mechanical engineer is calling your number now.
                  </p>
                  <button
                    onClick={() => setEmergencyStatus(null)}
                    className="mt-3 px-4 py-2 rounded bg-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-700"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={triggerEmergencyDispatch} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Issue Type
                    </label>
                    <select
                      value={selectedEmergencyType}
                      onChange={(e) => setSelectedEmergencyType(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="chiller_trip">
                        Chiller Plant Tripped / Compressor High Pressure
                      </option>
                      <option value="water_leak">
                        Chilled Water Pipe Leakage / Flooding
                      </option>
                      <option value="gas_leak">
                        Severe Refrigerant Gas Leak (R410A / R134a)
                      </option>
                      <option value="ahu_motor">
                        AHU Blower Motor Burnout / Belt Snap
                      </option>
                      <option value="server_room">
                        Server Room High Temperature Critical Alert
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Abu Dhabi Location / Sector
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Al Reem Island, Tower 2"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Contact Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 5X XXX XXXX"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={emergencyStatus === 'dispatching'}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                  >
                    {emergencyStatus === 'dispatching' ? (
                      <>
                        <Icon name="loader-2" size={16} className="animate-spin" />
                        Connecting to Abu Dhabi GPS Fleet...
                      </>
                    ) : (
                      <>
                        <Icon name="send" size={16} />
                        Dispatch Nearest Mechanical Team
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Emergency
