import { ArrowDownRight, ArrowRight } from 'lucide-react'
import Button from './Button'

function Hero({ badge, title, subtitle, image, primaryCta, secondaryCta, compact = false }) {
  return (
    <section
      className={`hero ${compact ? 'hero-compact' : ''}`}
      style={{ '--hero-image': `url("${image}")` }}
    >
      <div className="hero-shade" />
      <div className="hero-content content-width">
        {badge && <span className="hero-badge"><span />{badge}</span>}
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-actions">
          {primaryCta && (
            <Button to={primaryCta.to} variant="light">
              {primaryCta.label}<ArrowRight size={17} aria-hidden="true" />
            </Button>
          )}
          {secondaryCta && (
            <Button to={secondaryCta.to} variant="hero-ghost">
              {secondaryCta.label}<ArrowDownRight size={17} aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>
      {!compact && <div className="hero-caption">BUILDING WITH PURPOSE <span>·</span> MELBOURNE, AUSTRALIA</div>}
    </section>
  )
}

export default Hero
