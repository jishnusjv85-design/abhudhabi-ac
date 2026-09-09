import * as LucideIcons from 'lucide-react'

/**
 * Dynamic icon wrapper that renders any lucide-react icon by name.
 * Accepts kebab-case names (e.g. "phone-call") to match the original
 * data-lucide attribute usage.
 */
function toPascalCase(str) {
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
}

const Icon = ({ name, size = 20, className = '' }) => {
  const pascalName = toPascalCase(name)
  const IconComponent = LucideIcons[pascalName]
  if (!IconComponent) return null
  return <IconComponent size={size} className={className} />
}

export default Icon
