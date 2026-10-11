function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {badge && <span className="eyebrow">{badge}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
