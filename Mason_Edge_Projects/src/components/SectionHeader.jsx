import { Building2 } from 'lucide-react'

function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {badge && <span className="eyebrow"><Building2 size={14} aria-hidden="true" />{badge}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
