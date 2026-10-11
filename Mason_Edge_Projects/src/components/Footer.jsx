import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, services } from '../data/siteContent'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main content-width">
        <div className="footer-intro">
          <Link className="brand footer-brand" to="/" aria-label={`${company.name} home`}>
            <img src="/logo.png" alt="" />
          </Link>
          <p>Integrated design, engineering, construction and project management for residential, commercial and multi-occupancy projects.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/about">About us</Link>
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>{service.navTitle}</Link>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <h2>Get in touch</h2>
          <a href={`tel:${company.phone}`}><Phone size={16} aria-hidden="true" />{company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}><Mail size={16} aria-hidden="true" />{company.email}</a>
          <span><MapPin size={16} aria-hidden="true" />{company.address}</span>
          <Link className="footer-contact-link" to="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
      </div>
      <div className="footer-bottom content-width">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Built on integrity. Delivered with care.</span>
      </div>
    </footer>
  )
}

export default Footer
