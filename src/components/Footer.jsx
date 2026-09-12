import Icon from './Icon'

/**
 * Site-wide footer with company branding, quick links,
 * coverage areas, and accreditation info.
 */
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base mb-3">
              <Icon name="snowflake" size={18} className="text-brand-400" />
              COOLTECH ABU DHABI
            </div>
            <p className="text-slate-400 leading-relaxed">
              Abu Dhabi's trusted mechanical engineering contractor for heavy
              chillers, district cooling, VRF systems, AHU ducting, and 24/7
              critical cooling maintenance.
            </p>
          </div>

          {/* Core Engineering */}
          <div>
            <h4 className="text-white font-semibold mb-3">Core Engineering</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-brand-300">
                  Chiller Plant Overhaul
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-300">
                  District Cooling & ETS Valves
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-300">
                  VRV / VRF Diagnostics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-300">
                  Cleanroom AHU & PIR Ducts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-300">
                  Marine & Offshore HVAC
                </a>
              </li>
            </ul>
          </div>

          {/* Coverage Areas */}
          <div>
            <h4 className="text-white font-semibold mb-3">Coverage Areas</h4>
            <ul className="space-y-2">
              <li>Musaffah Industrial & ICAD I/II/III</li>
              <li>Al Reem Island & Maryah Island</li>
              <li>Yas Island & Saadiyat Island</li>
              <li>Khalifa City & Mohammed Bin Zayed</li>
              <li>Al Ain & Western Region (Al Dhafra)</li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h4 className="text-white font-semibold mb-3">Accreditations</h4>
            <p className="text-slate-400 mb-2">
              Abu Dhabi Municipality (ADM) Certified Grade 1 MEP Mechanical
              Contractor.
            </p>
            <p className="text-brand-400 font-mono text-[11px]">
              ISO 9001:2015 | ASHRAE UAE Chapter Member | Estidama Qualified
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} CoolTech Mechanical Engineering
            LLC - Abu Dhabi, UAE. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#services" className="hover:text-white">
              Terms of Engineering
            </a>
            <a href="#services" className="hover:text-white">
              Safety Charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
