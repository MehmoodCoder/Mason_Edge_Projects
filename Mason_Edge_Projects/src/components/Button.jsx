import { Link } from 'react-router-dom'

function Button({ children, to, href, variant = 'primary', size = 'medium', className = '', ...props }) {
  const variantClasses = {
    primary: 'bg-slate-900 text-white shadow-sm hover:bg-slate-800',
    light: 'bg-white text-slate-900 shadow-sm hover:bg-slate-100',
    outlineLight: 'border border-white/40 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white/10',
    outline: 'border border-slate-300 bg-white text-slate-800 hover:border-slate-500 hover:bg-slate-50',
    text: 'bg-transparent px-0 text-slate-900 hover:text-slate-600',
  }
  const sizeClasses = {
    small: 'min-h-9 px-3.5 text-xs',
    medium: 'min-h-11 px-5 text-sm',
    large: 'min-h-13 px-6 text-sm',
  }
  const classes = `inline-flex items-center justify-center gap-2.5 rounded-xl border border-transparent font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant] ?? variantClasses.primary} ${sizeClasses[size] ?? sizeClasses.medium} ${className}`.trim()
  if (to) {
    return <Link className={classes} to={to} {...props}>{children}</Link>
  }
  if (href) {
    return <a className={classes} href={href} {...props}>{children}</a>
  }
  return <button className={classes} {...props}>{children}</button>
}

export default Button
