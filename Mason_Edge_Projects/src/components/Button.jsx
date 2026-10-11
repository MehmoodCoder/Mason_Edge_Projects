import { Link } from 'react-router-dom'

function Button({ children, to, href, variant = 'primary', size = 'medium', className = '', ...props }) {
  const classes = `button button-${variant} button-${size} ${className}`.trim()
  if (to) {
    return <Link className={classes} to={to} {...props}>{children}</Link>
  }
  if (href) {
    return <a className={classes} href={href} {...props}>{children}</a>
  }
  return <button className={classes} {...props}>{children}</button>
}

export default Button
