import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { company } from '../data/siteContent'
import Hero from '../components/Hero'

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', project: '' })

  function handleSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nProject details:\n${form.project}`,
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  return (
    <main>
      <Hero
        compact
        badge="CONTACT MASON EDGE"
        title={<>Let’s start with<br /><span>a conversation.</span></>}
        subtitle="Share a little about what you’re planning. We’ll be glad to hear from you."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=90"
      />
      <section className="contact-section content-width">
        <div className="contact-details">
          <span className="eyebrow">WE’RE HERE TO HELP</span>
          <h2>Good things start with a conversation.</h2>
          <p>Whether you’re exploring an opportunity or ready to get moving, reach out and tell us what you have in mind.</p>
          <div className="contact-detail-list">
            <a href={`tel:${company.phone}`}><span><Phone size={19} /></span><span><small>CALL US</small>{company.phoneDisplay}</span></a>
            <a href={`mailto:${company.email}`}><span><Mail size={19} /></span><span><small>EMAIL</small>{company.email}</span></a>
            <div><span><MapPin size={19} /></span><span><small>FIND US</small>{company.address}</span></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Tell us about your project</h2>
          <p>Complete the form and your email app will open with your enquiry ready to send.</p>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="e.g. Alex Smith"
          />
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="you@example.com"
          />
          <label htmlFor="contact-project">A little about your project</label>
          <textarea
            id="contact-project"
            name="project"
            rows="5"
            required
            value={form.project}
            onChange={(event) => setForm({ ...form, project: event.target.value })}
            placeholder="What are you looking to build or achieve?"
          />
          <button className="button button-primary button-large" type="submit">Prepare enquiry <Send size={17} /></button>
        </form>
      </section>
    </main>
  )
}

export default ContactPage
