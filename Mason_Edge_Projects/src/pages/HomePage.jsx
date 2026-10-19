import {
  ArrowRight,
  Building2,
  Check,
  Compass,
  Layers3,
  MoveUpRight,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContactCTA from "../components/ContactCTA";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import ServiceCard, { services } from "../components/ServiceCard";

const company = {
  name: "Mason Edge Projects Pty Ltd",
  address: "136 Eaststone Ave, Wollert VIC 3750",
  email: "masonedgeprojects@gmail.com",
  phone: "0450147335",
  phoneDisplay: "0450 147 335",
};

function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero
        badge="A considered approach to construction"
        title={
          <>
            Built on experience.
            <br />
            <span>Driven by better.</span>
          </>
        }
        subtitle="Design, engineering, building and project management—brought together to take your project from an early idea through to completion."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=90"
        primaryCta={{
          label: "Explore our services",
          to: "/services/property-developer",
        }}
        secondaryCta={{ label: "Meet Mason Edge", to: "/about" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="flex items-center gap-5">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Mason Edge Projects
          </span>
          <span className="h-px w-16 bg-slate-300" />
        </div>
        <div className="mt-7 grid grid-cols-1 gap-7 lg:ml-[12%] lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Good projects don’t happen by chance.{" "}
            <span className="text-slate-500">They’re built with intent.</span>
          </h2>
          <div className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              We bring development, building and project expertise together to
              make complex work feel straightforward. From residential housing
              and multi-occupancy projects to commercial buildings, our team
              keeps the brief, the people and the delivery plan connected.
            </p>
            <Button to="/about" variant="text">
              Get to know us <ArrowRight size={17} />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Built around the brief"
            title="The right approach for every project."
            subtitle="Building type, material and method all shape the outcome. We coordinate the right expertise around the requirements of your project."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <Building2 size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Different project types
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Residential homes, commercial spaces and multiple-occupancy
                developments—planned around how each place needs to perform.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <Layers3 size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Considered construction
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Steel, timber, cladding, tilt-up and precast systems considered
                in line with the design, programme and project brief.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What we do"
            title="One team. A complete perspective."
            subtitle="From shaping the opportunity to delivering the built result, our services work together to create a smoother project journey."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative min-h-80 overflow-hidden rounded-3xl bg-slate-200 sm:min-h-[26rem]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1300&q=85"
            alt="Contemporary commercial building"
            loading="lazy"
          />
          <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-slate-900/80 px-4 py-3 text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
            <Compass size={16} aria-hidden="true" /> CLEAR FROM THE OUTSET
          </span>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            The Mason Edge approach
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Built around what matters to you.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Every project has its own challenges and ambitions. We listen first,
            bring the right people together, and keep design intent, engineering
            and construction aligned around a shared plan.
          </p>
          <ul className="my-7 space-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-3">
              <Check size={17} className="text-slate-500" />
              Straightforward, open communication
            </li>
            <li className="flex items-center gap-3">
              <Check size={17} className="text-slate-500" />
              Practical advice at every stage
            </li>
            <li className="flex items-center gap-3">
              <Check size={17} className="text-slate-500" />A steady focus on
              quality and value
            </li>
          </ul>
          <Button to="/about" variant="outline">
            How we work <MoveUpRight size={17} />
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Want a seamless and hassle-free building experience?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Partner with us to bring your building vision to life.
            </p>
          </div>
          <a
            href={`tel:${company.phone}`}
            className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-bold px-6 py-4 rounded-2xl shadow-lg transition whitespace-nowrap"
          >
            <PhoneCall size={20} /> Call {company.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20 my-12 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              OUR CORE ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Mason Edge Projects is a Trusted Builder
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-8 space-y-3 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white">
                Customised, Flexible & Cost-Effective Solutions
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We offer cost-effective building solutions tailored to your
                budget and requirements. Whether you require a turnkey project
                from concept to completion or assistance with specific aspects,
                we’ve got you covered.
              </p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-8 space-y-3 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white">
                Building Design & Innovation
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We embrace innovation, constantly seeking new solutions and
                technologies to enhance our building projects. Our commitment to
                staying at the forefront of design trends allows us to deliver
                modern, efficient and sustainable solutions.
              </p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-8 space-y-3 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white">
                Collaborative Approach
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We believe in the power of collaboration, working closely with
                our clients, partners and stakeholders to achieve shared success
                through open and transparent communication.
              </p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-8 space-y-3 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white">
                Safety & Compliance
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Safety and compliance are our top priority, and we maintain
                rigorous safety standards to ensure the wellbeing of
                contractors, clients and the wider community in strict
                accordance with building codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <ShieldCheck size={20} className="text-slate-500" />
            Accountable delivery
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <Compass size={20} className="text-slate-500" />
            Clear project direction
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <Check size={20} className="text-slate-500" />
            Quality in every detail
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-slate-600"
          >
            Let’s make it happen <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

export default HomePage;
