import { ArrowRight, Building2, Check, Compass, Layers3, MoveUpRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/siteContent'
import Button from '../components/Button'
import ContactCTA from '../components/ContactCTA'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'

function HomePage() {
  return (
    <main>
      <Hero
        badge="A considered approach to construction"
        title={<>Built on experience.<br /><span>Driven by better.</span></>}
        subtitle="Design, engineering, building and project management—brought together to take your project from an early idea through to completion."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=90"
        primaryCta={{ label: 'Explore our services', to: '/services/property-developer' }}
        secondaryCta={{ label: 'Meet Mason Edge', to: '/about' }}
      />

      <section className="intro-section content-width">
        <div className="intro-label"><span className="eyebrow">MASON EDGE PROJECTS</span><span className="intro-line" /></div>
        <div className="intro-copy">
          <h2>Good projects don’t happen by chance. <span>They’re built with intent.</span></h2>
          <div className="intro-text">
            <p>We bring development, building and project expertise together to make complex work feel straightforward. From residential housing and multi-occupancy projects to commercial buildings, our team keeps the brief, the people and the delivery plan connected.</p>
            <Button to="/about" variant="text">Get to know us <ArrowRight size={17} /></Button>
          </div>
        </div>
      </section>

      <section className="project-scope-section">
        <div className="content-width">
          <SectionHeader
            badge="BUILT AROUND THE BRIEF"
            title="The right approach for every project."
            subtitle="Building type, material and method all shape the outcome. We coordinate the right expertise around the requirements of your project."
          />
          <div className="project-scope-grid">
            <article><span><Building2 size={22} /></span><h3>Different project types</h3><p>Residential homes, commercial spaces and multiple-occupancy developments—planned around how each place needs to perform.</p></article>
            <article><span><Layers3 size={22} /></span><h3>Considered construction</h3><p>Steel, timber, cladding, tilt-up and precast systems considered in line with the design, programme and project brief.</p></article>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="content-width">
          <SectionHeader
            badge="WHAT WE DO"
            title="One team. A complete perspective."
            subtitle="From shaping the opportunity to delivering the built result, our services work together to create a smoother project journey."
          />
          <div className="service-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.description}
                routeLink={`/services/${service.slug}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section content-width">
        <div className="approach-image" role="img" aria-label="Contemporary building under construction">
          <span className="image-note"><Compass size={16} /> CLEAR FROM THE OUTSET</span>
        </div>
        <div className="approach-copy">
          <span className="eyebrow">THE MASON EDGE APPROACH</span>
          <h2>Built around what matters to you.</h2>
          <p>Every project has its own challenges and ambitions. We listen first, bring the right people together, and keep design intent, engineering and construction aligned around a shared plan.</p>
          <ul className="approach-points">
            <li><Check size={16} />Straightforward, open communication</li>
            <li><Check size={16} />Practical advice at every stage</li>
            <li><Check size={16} />A steady focus on quality and value</li>
          </ul>
          <Button to="/about" variant="outline">How we work <MoveUpRight size={17} /></Button>
        </div>
      </section>

      <section className="values-strip">
        <div className="content-width values-inner">
          <div><ShieldCheck size={21} /><span>Accountable delivery</span></div>
          <div><Compass size={21} /><span>Clear project direction</span></div>
          <div><Check size={21} /><span>Quality in every detail</span></div>
          <Link to="/contact">Let’s make it happen <ArrowRight size={17} /></Link>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

export default HomePage
