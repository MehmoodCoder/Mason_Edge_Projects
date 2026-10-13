import { ArrowRight, Eye, Handshake, Target } from 'lucide-react'
import Button from '../components/Button'
import ContactCTA from '../components/ContactCTA'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'

const values = [
  {
    title: 'Clarity',
    description: 'We communicate openly, set expectations early and make the next steps easy to understand.',
    icon: Eye,
  },
  {
    title: 'Partnership',
    description: 'We respect the people behind every project and work collaboratively toward shared outcomes.',
    icon: Handshake,
  },
  {
    title: 'Accountability',
    description: 'We take ownership of the details, follow through on commitments and stay focused on quality.',
    icon: Target,
  },
]

function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero
        compact
        badge="ABOUT MASON EDGE"
        title={<>A better way to<br /><span>bring projects to life.</span></>}
        subtitle="We connect design, engineering, construction and project management to help clients move from concept to completion."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90"
        primaryCta={{ label: 'Talk with our team', to: '/contact' }}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-28">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Who we are</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Experience that brings the whole picture into focus.
          </h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-slate-600 sm:pt-8 sm:text-base">
          <p>
            Mason Edge Projects brings together the thinking and experience needed to move a project forward with confidence. Our work spans property development, commercial building, construction management, quantity surveying and estimating.
          </p>
          <p>
            We support residential housing, commercial buildings and multiple-occupancy developments, bringing the brief and delivery requirements into focus from the early planning stages. Whether a project calls for steel, timber, cladding, tilt-up or precast construction, decisions are considered in context—not in isolation.
          </p>
          <p>
            Our work is grounded in a simple belief: the best results come from clear expectations, good people and thoughtful decisions made at the right time. We stay alongside our clients from concept through construction and handover, keeping details connected to the bigger picture.
          </p>
          <Button to="/contact" variant="text">
            Start a conversation <ArrowRight size={17} />
          </Button>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What guides us"
            title="The values behind every decision."
            subtitle="The way we work matters as much as the work itself."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">From concept to completion</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Connected expertise.<br />Considered outcomes.
            </h2>
          </div>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            From design and engineering coordination to construction and project management, we help keep people, information and decisions moving in the same direction. Our involvement is shaped around your brief and the practical demands of your project.
          </p>
        </div>
      </section>

      <ContactCTA title="Let’s build something worthwhile." />
    </main>
  )
}

export default AboutPage
