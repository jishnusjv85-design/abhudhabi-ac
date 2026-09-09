import Icon from './Icon'

/**
 * Contact section with Abu Dhabi HQ info and an on-site
 * engineering audit scheduling form.
 */
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      'Thank you. Our Abu Dhabi mechanical engineering team has received your inspection request and will call you within 15 minutes.'
    )
  }

  return (
    <section
      id="contact"
      className="py-20 relative z-10 bg-slate-900/80 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">
              ABU DHABI HEADQUARTERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Book an On-Site Mechanical Engineering Audit
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our certified senior mechanical engineers carry thermal imaging
              cameras, airflow anemometers, and ultrasonic refrigerant detectors
              for thorough site diagnostics.
            </p>

            <div className="space-y-4 pt-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-brand-500/10 text-brand-400 mt-1">
                  <Icon name="map-pin" size={18} />
                </div>
                <div>
                  <p className="font-bold text-white">Engineering HQ &amp; Workshop:</p>
                  <p className="text-slate-400 text-xs">
                    Sector M-14, Musaffah Industrial Area, Abu Dhabi, UAE
                  </p>
                  <p className="text-slate-400 text-xs">
                    Branch: Al Reem Island, Sky Tower Commercial Plaza
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-brand-500/10 text-brand-400 mt-1">
                  <Icon name="phone" size={18} />
                </div>
                <div>
                  <p className="font-bold text-white">Phone &amp; Emergency Dispatch:</p>
                  <p className="text-slate-400 text-xs font-mono">
                    +971 2 688 4400 / +971 50 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-brand-500/10 text-brand-400 mt-1">
                  <Icon name="mail" size={18} />
                </div>
                <div>
                  <p className="font-bold text-white">Engineering Inquiries:</p>
                  <p className="text-slate-400 text-xs font-mono">
                    projects@cooltech-abudhabi.ae
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6">
                Schedule Engineering Inspection
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eng. Tariq Al Mansoori"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-brand-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company / Property Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Al Sahel Tower Management"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-brand-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Direct UAE Mobile
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 5X XXX XXXX"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-brand-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Location in Abu Dhabi
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ICAD II / Al Maryah Island"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-brand-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Scope of Mechanical Work
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe current AC issue, chiller model, tonnage requirements, or AMC request..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-brand-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-brand-500/25"
                >
                  Submit Inspection Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
