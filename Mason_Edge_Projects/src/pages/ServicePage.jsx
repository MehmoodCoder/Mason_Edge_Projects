import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '../components/Button'
import ContactCTA from '../components/ContactCTA'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'

function ServicePage({ service }) {
  const Icon = service.icon
  return (
    <main>
      <Hero
        compact
        badge="OUR SERVICES"
        title={<>{service.title}<br /><span>delivered with purpose.</span></>}
        subtitle={service.description}
        image={service.image}
        primaryCta={{ label: 'Discuss your project', to: '/contact' }}
      />
      <section className="service-detail content-width">
        <div className="service-detail-heading">
          <span className="service-icon service-icon-large"><Icon size={26} strokeWidth={1.7} /></span>
          <span className="eyebrow">A CLEARER PATH FORWARD</span>
          <h2>Expertise that meets you where your project is.</h2>
        </div>
        <div className="service-detail-copy">
          <p>{service.detail}</p>
          <p>We tailor our involvement to your goals, bringing the right expertise and a practical perspective to each stage of the work.</p>
          <Button to="/contact" variant="text">Talk to our team <ArrowRight size={17} /></Button>
        </div>
      </section>
      <section className="service-includes">
        <div className="content-width service-includes-inner">
          <div className="service-includes-intro">
            <span className="eyebrow eyebrow-light">HOW WE CAN HELP</span>
            <h2>Practical support.<br />From start to finish.</h2>
            <p>Clear scope, considered advice and experienced delivery—shaped around your project.</p>
          </div>
          <div className="service-list">
            {service.highlights.map((highlight) => (
              <div key={highlight}><CheckCircle2 size={19} /><span>{highlight}</span></div>
            ))}
          </div>
        </div>
      </section>
      <section className="other-services content-width">
        <SectionHeader badge="CONNECTED EXPERTISE" title="More ways we can support you." />
        <div className="other-service-links">
          <Button to="/services/property-developer" variant="outline">Property development <ArrowRight size={16} /></Button>
          <Button to="/services/commercial-builder" variant="outline">Commercial building <ArrowRight size={16} /></Button>
          <Button to="/services/construction-management" variant="outline">Construction management <ArrowRight size={16} /></Button>
          <Button to="/services/quantity-surveying-and-estimating" variant="outline">Quantity surveying & estimating <ArrowRight size={16} /></Button>
        </div>
      </section>
      <ContactCTA title="Let’s talk about your project." />
    </main>
  )
}

export default ServicePage
