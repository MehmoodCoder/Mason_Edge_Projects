import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function ServiceCard({ icon: Icon, title, description, routeLink, index }) {
  return (
    <Link className="service-card" to={routeLink}>
      <div className="service-card-top">
        <span className="service-icon"><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></span>
        <span className="service-index">0{index + 1}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="service-card-link">Explore service <ArrowUpRight size={17} aria-hidden="true" /></span>
    </Link>
  )
}

export default ServiceCard
