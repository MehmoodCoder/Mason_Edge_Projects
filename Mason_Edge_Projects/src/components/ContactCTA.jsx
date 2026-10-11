import { ArrowUpRight } from 'lucide-react'
import Button from './Button'

function ContactCTA({
  badge = 'LET’S GET STARTED',
  title = 'Have a project in mind?',
  subtitle = 'Tell us where you want to go. We’ll help you find a clear way forward.',
}) {
  return (
    <section className="contact-cta content-width">
      <div>
        <span className="eyebrow eyebrow-light">{badge}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <Button to="/contact" variant="light" size="large">
        Talk to our team <ArrowUpRight size={18} aria-hidden="true" />
      </Button>
      <span className="cta-mark" aria-hidden="true">M</span>
    </section>
  )
}

export default ContactCTA
