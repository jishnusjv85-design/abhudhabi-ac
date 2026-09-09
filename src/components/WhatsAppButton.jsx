import Icon from './Icon'

/**
 * Floating circular WhatsApp button anchored to the bottom-right
 * corner of the viewport.
 */
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971501234567?text=Hello%20CoolTech%20Abu%20Dhabi,%20I%20need%20AC%20Engineering%20assistance"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all flex items-center justify-center"
      title="Chat with Abu Dhabi HVAC Engineer"
    >
      <Icon name="message-circle" size={26} />
    </a>
  )
}

export default WhatsAppButton
