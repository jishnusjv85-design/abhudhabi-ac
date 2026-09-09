import Icon from './Icon'

/**
 * Thin strip at the very top with emergency contact info and a
 * 24/7 Abu Dhabi dispatch indicator.
 */
const TopBar = () => {
  return (
    <div className="relative z-30 bg-slate-900/90 border-b border-slate-800 text-xs py-2 px-4 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4 text-slate-300">
          <span className="flex items-center gap-1.5 text-brand-400 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            24/7 Abu Dhabi Emergency Mechanical Dispatch
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">
            ADM &amp; ADDC Approved Mechanical Contractor #ME-49821
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="tel:+97126880000"
            className="flex items-center gap-1.5 text-slate-200 hover:text-brand-300 transition-colors font-mono font-medium"
          >
            <Icon name="phone-call" size={14} className="text-brand-400" />
            +971 2 688 4400 (Abu Dhabi HQ)
          </a>
          <span className="text-slate-400 arabic-font font-medium hidden sm:inline">
            أبوظبي • المصفح • جزيرة الريم • السعديات
          </span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
