import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Fan,
  Gauge,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Store,
  ThermometerSnowflake,
  Wind,
  Wrench,
  X,
} from 'lucide-react'

const services = [
  { icon: Sparkles, title: 'AC Deep Cleaning', text: 'Indoor unit, filters, coil area, drain path and accessible dust build-up cleaned for fresher airflow.', image: '/images/service-cleaning.webp' },
  { icon: Wrench, title: 'AC Service & Repair', text: 'Troubleshooting for low cooling, water leakage, unusual noise, electrical faults and common AC issues.', image: '/images/service-repair.webp' },
  { icon: Fan, title: 'Cooling Performance Check', text: 'Airflow and cooling checks to identify performance problems before recommending repair work.', image: '/images/service-maintenance.webp' },
  { icon: Gauge, title: 'Gas / Refrigerant Check', text: 'Cooling and pressure checks where required, including basic leak-related inspection before refill advice.', image: '/images/service-repair.webp' },
  { icon: Wind, title: 'Installation & Re-installation', text: 'Support for AC installation, shifting, removal and re-installation for homes, shops and offices.', image: '/images/service-installation.webp' },
  { icon: ShieldCheck, title: 'Periodic Maintenance', text: 'Regular AC maintenance for homes and commercial spaces to keep units clean and dependable.', image: '/images/service-maintenance.webp' },
]

const acTypes = [
  'Split AC',
  'Inverter Split AC',
  'Non-Inverter Split AC',
  'Window AC',
  'Portable AC',
  'Multi-Split AC',
  '1-Way Cassette AC',
  '2-Way Cassette AC',
  '4-Way Cassette AC',
  'Ceiling Cassette AC',
  'Tower / Floor Standing AC',
  'Ceiling Suspended AC',
  'Ceiling / Floor Convertible AC',
  'Ductable AC',
  'Ducted Split AC',
  'Concealed Duct AC',
  'Package AC',
  'VRF AC',
  'VRV AC',
  'Central AC',
  'Precision AC',
  'Chiller System',
  'FCU - Fan Coil Unit',
  'AHU - Air Handling Unit',
]

const brands = [
  'Daikin', 'LG', 'Samsung', 'Voltas', 'Blue Star', 'Carrier', 'Hitachi',
  'Panasonic', 'O General', 'Mitsubishi Electric', 'Mitsubishi Heavy Industries',
  'Haier', 'Lloyd', 'Godrej', 'Whirlpool', 'Onida', 'IFB', 'TCL', 'Hisense',
  'Toshiba', 'Sharp', 'Kelvinator', 'Croma', 'MarQ', 'Other Brands & Models',
]

const areas = [
  'Kozhikode City', 'Kallai', 'Mavoor Road', 'Nadakkavu', 'Medical College',
  'Beypore', 'Feroke', 'Ramanattukara', 'Pantheerankavu', 'Kunnamangalam',
  'Elathur', 'West Hill', 'Vellimadukunnu', 'Thondayad', 'Palazhi',
  'Across Kozhikode District',
]

// Set VITE_BUSINESS_WHATSAPP to the verified business number in international
// format, digits only (for example, 919876543210). No number is guessed here.
const businessWhatsApp = (import.meta.env.VITE_BUSINESS_WHATSAPP || '').replace(/\D/g, '')
const validWhatsApp = /^[1-9]\d{9,14}$/.test(businessWhatsApp)
// Add only business-approved, genuine image paths placed in public/work/.
const workPhotos = []

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [request, setRequest] = useState('')
  const [copied, setCopied] = useState(false)
  const [showModels, setShowModels] = useState(false)

  useEffect(() => {
    document.title = 'AR Cooling Solutions | AC Service & Cleaning in Kozhikode'
  }, [])

  const openWhatsApp = () => {
    if (validWhatsApp) {
      const text = encodeURIComponent('Hi AR Cooling Solutions, I need AC service in Kozhikode.')
      window.open(`https://wa.me/${businessWhatsApp}?text=${text}`, '_blank', 'noopener,noreferrer')
    } else {
      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const submitBooking = (event) => {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    setRequest([
      'AC service request — AR Cooling Solutions',
      `Name: ${values.get('name')}`,
      `Phone: ${values.get('phone')}`,
      `Service: ${values.get('service')}`,
      `AC type: ${values.get('type') || 'Not specified'}`,
      `Brand: ${values.get('brand') || 'Not specified'}`,
      `Model: ${values.get('model') || 'Not specified'}`,
      `Area: ${values.get('area')}`,
      `Issue: ${values.get('notes') || 'Not specified'}`,
    ].join('\n'))
    setCopied(false)
    setSubmitted(true)
  }

  const copyRequest = async () => {
    try {
      await navigator.clipboard.writeText(request)
      setCopied(true)
    } catch {
      document.getElementById('request-text')?.select()
    }
  }

  const sendRequest = () => {
    if (!validWhatsApp || !request) return
    window.open(`https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(request)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-[#f7fcff] text-slate-900 selection:bg-blue-200">
      <header className="site-header sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-400 text-white shadow-lg shadow-blue-200">
              <Snowflake size={25} />
            </div>
            <div>
              <div className="font-extrabold tracking-tight text-slate-950 sm:text-lg">AR Cooling Solutions</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">AC Service · Kozhikode</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 md:flex">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#models" className="hover:text-blue-700">AC Models</a>
            <a href="#areas" className="hover:text-blue-700">Service Area</a>
            <a href="#book" className="rounded-full bg-blue-700 px-5 py-3 text-white shadow-lg shadow-blue-200 hover:bg-blue-800">Book Service</a>
          </nav>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-900 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-blue-100 bg-white px-4 py-4 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 font-bold text-slate-700">
              <a href="#services" className="rounded-xl bg-blue-50 px-4 py-3" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#models" className="rounded-xl bg-blue-50 px-4 py-3" onClick={() => setMenuOpen(false)}>AC Models</a>
              <a href="#areas" className="rounded-xl bg-blue-50 px-4 py-3" onClick={() => setMenuOpen(false)}>Service Area</a>
              <a href="#book" className="rounded-xl bg-blue-700 px-4 py-3 text-white" onClick={() => setMenuOpen(false)}>Book Service</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-section relative overflow-hidden bg-ice-frost py-16 sm:py-24">
          <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
          <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-xs font-extrabold text-blue-800 shadow-sm">
                <MapPin size={15} /> AC care across Kozhikode
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                Better cooling. <span className="block bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-300 bg-clip-text text-transparent">Better everyday.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                <strong className="text-slate-900">AR Cooling Solutions</strong> provides AC service, repair and professional cleaning for all types, brands and models of air conditioners across Kozhikode — for homes, apartments, shops and offices.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#book" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 py-4 font-extrabold text-white shadow-xl shadow-blue-200 hover:bg-blue-800">
                  <CalendarCheck size={19} /> Book AC Service
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-white px-6 py-4 font-extrabold text-blue-950 shadow-sm hover:bg-blue-50">
                  <Snowflake size={19} /> Explore Services
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-600">
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-blue-600" /> All AC types</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-blue-600" /> All major brands & models</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-blue-600" /> All over Kozhikode</span>
              </div>
            </div>

            <div className="hero-art relative min-h-[500px] overflow-hidden rounded-[2.3rem] border border-blue-100 shadow-2xl shadow-blue-100">
              <img src="/images/hero-home.webp" alt="Comfortable home with a wall-mounted air conditioner" fetchPriority="high" width="1600" height="800" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/85 to-transparent p-7 pt-28 text-white"><span className="text-xs font-bold uppercase tracking-widest text-sky-200">Comfort at home</span><strong className="mt-2 block max-w-xs text-xl font-extrabold">Cooling care for Kerala living.</strong></div>
            </div>
          </div>
        </section>

        {workPhotos.length > 0 && <section className="py-20 sm:py-24" aria-labelledby="work-title"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Our work</div><h2 id="work-title" className="mt-3 text-4xl font-black tracking-tight text-slate-950">Real service, real results.</h2><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{workPhotos.map(({ src, alt, caption }) => <figure key={src} className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm"><img src={src} alt={alt} loading="lazy" className="aspect-[4/3] w-full object-cover" /><figcaption className="p-5 text-sm font-bold text-slate-700">{caption}</figcaption></figure>)}</div></div></section>}

        <section className="pb-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            {[
              ['All AC Types', 'Residential and commercial systems'],
              ['All Major Brands', 'Current and older AC models'],
              ['Kozhikode Wide', 'Service across Kozhikode district'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"><strong className="block text-lg font-extrabold text-blue-950">{title}</strong><span className="text-sm text-slate-500">{text}</span></div>
            ))}
          </div>
        </section>

        <section id="services" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl"><div className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Our services</div><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">Complete AC care, from cleaning to repair.</h2><p className="mt-4 leading-7 text-slate-600">One local service team for routine maintenance, performance issues, deep cleaning and installation-related AC work.</p></div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: ServiceIcon, title, text, image }) => (
                <article key={title} className="overflow-hidden rounded-[1.6rem] border border-blue-100 bg-white shadow-lg shadow-blue-50 transition hover:-translate-y-1 hover:shadow-xl">
                  <img src={image} alt="" loading="lazy" width="1448" height="1086" className="aspect-[16/10] w-full object-cover" />
                  <div className="p-6"><div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><ServiceIcon size={23} /></div>
                  <h3 className="text-lg font-extrabold text-blue-950">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="models" className="bg-gradient-to-b from-[#eaf8ff] to-[#f8fdff] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl"><div className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">All AC models & systems</div><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">All common AC types serviced and cleaned.</h2><p className="mt-4 leading-7 text-slate-600">Residential and commercial air-conditioning systems commonly used across Kerala are covered.</p></div>
            <img src="/images/ac-systems.webp" alt="Commercial interior with cassette, ducted and split air conditioning" loading="lazy" width="1600" height="800" className="mt-10 aspect-[16/7] w-full rounded-[1.8rem] object-cover shadow-xl shadow-blue-100" />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {acTypes.slice(0, showModels ? acTypes.length : 8).map((name) => (
                <div key={name} className="flex min-h-28 flex-col justify-between rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"><Snowflake size={20} className="text-blue-600" /><strong className="mt-5 text-sm text-blue-950">{name}</strong></div>
              ))}
            </div>
            <button type="button" className="mt-6 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-800 hover:bg-blue-50" onClick={() => setShowModels(!showModels)} aria-expanded={showModels}>{showModels ? 'Show fewer AC types' : 'View all AC types'}</button>
            <div className="mt-10 rounded-[1.8rem] border border-blue-100 bg-white p-6 shadow-lg shadow-blue-50 sm:p-8">
              <h3 className="text-2xl font-black text-blue-950">Major AC brands & models we service</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Service support for current and older models from major brands. If your brand or model is not listed, send us the model details.</p>
              <div className="mt-6 flex flex-wrap gap-2.5">{brands.map((brand) => <span key={brand} className="rounded-full border border-sky-100 bg-sky-50 px-3.5 py-2 text-xs font-extrabold text-blue-800">{brand}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="areas" className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
            <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 to-blue-700 p-8 text-white shadow-2xl shadow-blue-200">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-sky-200">Made for Kerala</div>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white">Local AC care for Kozhikode’s climate.</h2>
              <p className="mt-5 leading-7 text-blue-100">Heat, humidity and monsoon weather make regular AC cleaning especially important. AR Cooling Solutions focuses on practical service for Kerala homes and commercial spaces.</p>
              <img src="/images/kozhikode-coverage.webp" alt="Illustrative view of a tropical Kozhikode neighborhood from a balcony" loading="lazy" width="1448" height="1086" className="mt-7 aspect-[16/10] w-full rounded-2xl object-cover" />
              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5"><strong>കോഴിക്കോട് മുഴുവൻ സർവീസ്</strong><div className="mt-1 text-sm text-sky-100">Home · Apartment · Shop · Office · Commercial Space</div></div>
            </div>
            <div className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-xl shadow-blue-50">
              <div className="flex items-center gap-3"><MapPin className="text-blue-700" /><h3 className="text-2xl font-black text-blue-950">Service area: all over Kozhikode</h3></div>
              <p className="mt-3 text-sm leading-7 text-slate-600">We serve Kozhikode city and surrounding areas across the district.</p>
              <div className="mt-6 flex flex-wrap gap-2.5">{areas.map((area) => <span key={area} className="rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-extrabold text-blue-800">{area}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              [CalendarCheck, '1. Choose service', 'Cleaning, repair, installation or regular service.'],
              [MapPin, '2. Share location', 'Tell us your Kozhikode area and AC details.'],
              [ThermometerSnowflake, '3. AC inspection', 'The technician checks the unit and required work.'],
              [CheckCircle2, '4. Service completed', 'Service, cleaning or repair is completed as agreed.'],
            ].map(([StepIcon, title, text]) => <div key={title} className="rounded-2xl border border-blue-100 bg-[#fbfeff] p-5"><StepIcon className="text-blue-700" size={23} /><h3 className="mt-4 font-extrabold text-blue-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}
          </div>
        </section>

        <section id="pricing" className="bg-blue-950 py-16 text-white sm:py-20"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-sky-300">Before you book</div><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Know the cost before work starts.</h2><p className="mt-4 leading-7 text-blue-100">Pricing depends on your AC and the work required. Ask the team to confirm the visit or inspection charge before scheduling.</p></div><div className="grid gap-4 sm:grid-cols-3">{[['01', 'Describe the issue', 'Share the AC details and your area.'], ['02', 'Confirm visit charge', 'Ask about the charge and availability before booking.'], ['03', 'Approve the work', 'Request a repair or service estimate after inspection.']].map(([number, title, detail]) => <div key={number} className="rounded-2xl border border-white/15 bg-white/10 p-5"><span className="text-sm font-black text-sky-300">{number}</span><strong className="mt-5 block text-lg">{title}</strong><p className="mt-2 text-sm leading-6 text-blue-100">{detail}</p></div>)}</div></div></section>

        <section id="book" className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Book a service</div>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">Tell us what your AC needs.</h2>
              <p className="mt-5 leading-7 text-slate-600">Share the service type, AC model and your Kozhikode location. Prepare a message you can copy and send through a verified contact channel.</p>
              <img src="/images/booking-home.webp" alt="Homeowner preparing an AC service enquiry on a phone" loading="lazy" width="960" height="1200" className="mt-7 aspect-[4/3] w-full rounded-[1.8rem] object-cover object-center shadow-lg shadow-blue-100" />
              <div className="mt-7 grid gap-3 text-sm font-bold text-slate-600">
                <span className="flex items-center gap-2"><Home size={17} className="text-blue-600" /> Home & apartment service</span>
                <span className="flex items-center gap-2"><Store size={17} className="text-blue-600" /> Shops & commercial spaces</span>
                <span className="flex items-center gap-2"><Building2 size={17} className="text-blue-600" /> All over Kozhikode</span>
                <span className="flex items-center gap-2"><Clock3 size={17} className="text-blue-600" /> Easy service request</span>
              </div>
            </div>

            <form onSubmit={submitBooking} className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-100 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-xs font-extrabold text-slate-600">Name<input name="name" required autoComplete="name" className="rounded-xl border border-blue-100 bg-[#fbfeff] px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder="Your name" /></label>
                <label className="grid gap-1.5 text-xs font-extrabold text-slate-600">Phone<input name="phone" required type="tel" minLength="7" autoComplete="tel" className="rounded-xl border border-blue-100 bg-[#fbfeff] px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder="Your mobile number" /></label>
                <label className="grid gap-1.5 text-xs font-extrabold text-slate-600">Service<select name="service" required className="rounded-xl border border-blue-100 bg-[#fbfeff] px-4 py-3 text-sm outline-none focus:border-blue-400"><option value="">Choose service</option><option>General AC Service</option><option>Deep AC Cleaning</option><option>AC Repair</option><option>Cooling Issue</option><option>Water Leakage</option><option>Gas / Refrigerant Check</option><option>Installation / Re-installation</option></select></label>
                <label className="grid gap-1.5 text-xs font-extrabold text-slate-600">AC Type<select name="type" defaultValue="" className="rounded-xl border border-blue-100 bg-[#fbfeff] px-4 py-3 text-sm outline-none focus:border-blue-400"><option value="">Select if known</option>{acTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
                <label className="grid gap-1.5 text-xs font-extrabold text-slate-600">Brand<input name="brand" className="rounded-xl border border-blue-100 bg-[#fbfeff] px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder="Example: Daikin / LG / Voltas" /></label>
                <label className="grid gap-1.5 text-xs font-extrabold text-slate-600">Model Number<input name="model" className="rounded-xl border border-blue-100 bg-[#fbfeff] px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder="If available" /></label>
                <label className="grid gap-1.5 text-xs font-extrabold text-slate-600 sm:col-span-2">Area in Kozhikode<input name="area" required className="rounded-xl border border-blue-100 bg-[#fbfeff] px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder="Example: Kallai / Feroke / Kunnamangalam" /></label>
                <label className="grid gap-1.5 text-xs font-extrabold text-slate-600 sm:col-span-2">Problem / Notes<textarea name="notes" rows="4" className="rounded-xl border border-blue-100 bg-[#fbfeff] px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder="Tell us what is happening with the AC" /></label>
              </div>
              <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 py-4 font-extrabold text-white shadow-lg shadow-blue-200 hover:bg-blue-800" type="submit">Prepare Service Request <ArrowRight size={18} /></button>
              <p className="mt-3 text-xs leading-5 text-slate-500">Preparing this request does not send it to the business.</p>
              {submitted && <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950" role="status"><strong className="block text-base">Your request is ready</strong><p className="mt-1">{validWhatsApp ? 'Review the details and open WhatsApp to send your message.' : 'Copy the message below and send it through a verified AR Cooling Solutions contact channel.'}</p><textarea id="request-text" readOnly value={request} rows="9" aria-label="Prepared service request" className="mt-3 w-full rounded-lg border border-blue-200 bg-white p-3 text-sm leading-6" /><div className="mt-2 flex flex-wrap gap-2"><button type="button" onClick={copyRequest} className="rounded-lg bg-blue-800 px-4 py-2 font-bold text-white hover:bg-blue-950">{copied ? 'Copied!' : 'Copy request'}</button>{validWhatsApp && <button type="button" onClick={sendRequest} className="rounded-lg bg-emerald-700 px-4 py-2 font-bold text-white hover:bg-emerald-800">Open WhatsApp</button>}</div></div>}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 py-10 text-blue-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white"><Snowflake size={22} /></div><div><strong className="block text-white">AR Cooling Solutions</strong><span className="text-xs text-sky-200">Kozhikode · Kerala</span></div></div>
            <div className="flex flex-wrap gap-5 text-sm font-bold"><a href="#services">Services</a><a href="#models">AC Models</a><a href="#areas">Service Area</a><a href="#book">Book Service</a></div>
          </div>
          <div className="mt-7 border-t border-white/10 pt-5 text-xs text-blue-300">© 2026 AR Cooling Solutions · AC service, repair and cleaning across Kozhikode. Website images are illustrative.</div>
        </div>
      </footer>

      <button onClick={openWhatsApp} className="fixed bottom-5 right-5 z-[70] flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white shadow-2xl shadow-blue-300 transition hover:-translate-y-1 hover:scale-105 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-4" aria-label={validWhatsApp ? 'Chat on WhatsApp' : 'Go to service request'} title={validWhatsApp ? 'Chat on WhatsApp' : 'Go to service request'}>
        <MessageCircle size={28} /><span className="hidden font-extrabold sm:inline">{validWhatsApp ? 'WhatsApp' : 'Request service'}</span>
      </button>
    </div>
  )
}

export default App
