import { Building2 } from 'lucide-react'

function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  const alignment =
    align === 'left' ? 'mx-0 text-left' : 'mx-auto text-center'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          <Building2 size={14} aria-hidden="true" />
          {badge}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
