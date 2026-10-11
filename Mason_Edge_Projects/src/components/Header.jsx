import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { company, services } from '../data/siteContent'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner content-width">
        <Link className="brand" to="/" onClick={closeMenu} aria-label={`${company.name} home`}>
          <img src="/logo.png" alt="logo" />
          <span className="brand-name">MASON EDGE<span>PROJECTS PTY LTD</span></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About us</NavLink>
          <div
            className={`nav-services ${servicesOpen ? 'nav-services-open' : ''}`}
            onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services <ChevronDown size={15} aria-hidden="true" />
            </button>
            <div className="nav-dropdown">
              {services.map((service) => (
                <NavLink key={service.slug} to={`/services/${service.slug}`} onClick={closeMenu}>
                  {service.navTitle}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/contact" onClick={closeMenu}>Contact us</NavLink>
          <Link className="header-contact" to="/contact" onClick={closeMenu}>Let’s talk <span>↗</span></Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
