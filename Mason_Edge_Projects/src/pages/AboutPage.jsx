import { ArrowRight, Check, Eye, Handshake, Target } from 'lucide-react'
import Button from '../components/Button'
import ContactCTA from '../components/ContactCTA'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'

function AboutPage() {
  return (
    <main>
      <Hero
        compact
        badge="ABOUT MASON EDGE"
        title={<>A better way to<br /><span>bring projects to life.</span></>}
        subtitle="We connect design, engineering, construction and project management to help clients move from concept to completion."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90"
        primaryCta={{ label: 'Talk with our team', to: '/contact' }}
      />
      <section className="about-story content-width">
        <div>
          <span className="eyebrow">WHO WE ARE</span>
          <h2>Experience that brings the whole picture into focus.</h2>
        </div>
        <div className="about-story-body">
          <p>Mason Edge Projects brings together the thinking and experience needed to move a project forward with confidence. Our work spans property development, commercial building, construction management, quantity surveying and estimating.</p>
          <p>We support residential housing, commercial buildings and multiple-occupancy developments, bringing the brief and delivery requirements into focus from the early planning stages. Whether a project calls for steel, timber, cladding, tilt-up or precast construction, decisions are considered in context—not in isolation.</p>
          <p>Our work is grounded in a simple belief: the best results come from clear expectations, good people and thoughtful decisions made at the right time. We stay alongside our clients from concept through construction and handover, keeping details connected to the bigger picture.</p>
          <Button to="/contact" variant="text">Start a conversation <ArrowRight size={17} /></Button>
        </div>
      </section>
      <section className="values-section">
        <div className="content-width">
          <SectionHeader badge="WHAT GUIDES US" title="The values behind every decision." subtitle="The way we work matters as much as the work itself." />
          <div className="values-grid">
            <article><span className="value-icon"><Eye /></span><h3>Clarity</h3><p>We communicate openly, set expectations early and make the next steps easy to understand.</p></article>
            <article><span className="value-icon"><Handshake /></span><h3>Partnership</h3><p>We respect the people behind every project and work collaboratively toward shared outcomes.</p></article>
            <article><span className="value-icon"><Target /></span><h3>Accountability</h3><p>We take ownership of the details, follow through on commitments and stay focused on quality.</p></article>
          </div>
        </div>
      </section>
      <section className="about-banner">
        <div className="content-width about-banner-inner">
          <div><span className="eyebrow eyebrow-light">FROM CONCEPT TO COMPLETION</span><h2>Connected expertise.<br />Considered outcomes.</h2></div>
          <p>From design and engineering coordination to construction and project management, we help keep people, information and decisions moving in the same direction. Our involvement is shaped around your brief and the practical demands of your project.</p>
        </div>
      </section>
      <ContactCTA title="Let’s build something worthwhile." />
    </main>
  )
}

export default AboutPage
