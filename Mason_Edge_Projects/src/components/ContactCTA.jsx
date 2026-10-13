import { ArrowUpRight } from 'lucide-react'
import Button from './Button'

function ContactCTA({
  badge = 'LET’S GET STARTED',
  title = 'Have a project in mind?',
  subtitle = 'Tell us where you want to go. We’ll help you find a clear way forward.',
}) {
  return (
    <section className="relative mx-auto my-16 flex w-[calc(100%_-_2rem)] max-w-7xl flex-col items-start justify-between gap-7 overflow-hidden rounded-3xl bg-slate-900 px-7 py-9 text-white shadow-xl shadow-slate-900/10 sm:my-20 sm:w-[calc(100%_-_3rem)] sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:px-16">
      <div className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{badge}</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">{subtitle}</p>
      </div>
      <Button to="/contact" variant="light" size="large" className="relative z-10 shrink-0">
        Talk to our team <ArrowUpRight size={18} aria-hidden="true" />
      </Button>
      <span className="pointer-events-none absolute -bottom-32 right-36 text-[22rem] font-black leading-none tracking-tighter text-white/[0.035]" aria-hidden="true">M</span>
    </section>
  )
}

export default ContactCTA
