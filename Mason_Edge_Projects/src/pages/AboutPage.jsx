import { ArrowRight, Eye, Handshake, Target, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContactCTA from "../components/ContactCTA";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";

const company = {
  name: "Mason Edge Projects Pty Ltd",
  address: "136 Eaststone Ave, Wollert VIC 3750",
  email: "masonedgeprojects@gmail.com",
  phone: "0450147335",
  phoneDisplay: "0450 147 335",
};

const values = [
  {
    title: "Clarity",
    description:
      "We communicate openly, set expectations early and make the next steps easy to understand.",
    icon: Eye,
  },
  {
    title: "Partnership",
    description:
      "We respect the people behind every project and work collaboratively toward shared outcomes.",
    icon: Handshake,
  },
  {
    title: "Accountability",
    description:
      "We take ownership of the details, follow through on commitments and stay focused on quality.",
    icon: Target,
  },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Hero
        compact
        badge="ABOUT MASON EDGE"
        title={
          <>
            A better way to
            <br />
            <span className="text-slate-300">bring projects to life.</span>
          </>
        }
        subtitle="We connect design, engineering, construction and project management to help clients move from concept to completion."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90"
        primaryCta={{ label: "Talk with our team", to: "/contact" }}
      />

      {/* Who We Are & Experience Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-28">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Who we are
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Experience that brings the whole picture into focus.
          </h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-slate-600 sm:pt-8 sm:text-base">
          <p>
            {company.name} brings together the thinking and experience needed to
            move a project forward with confidence. Our work spans property
            development, commercial building, construction management, quantity
            surveying and estimating.
          </p>
          <p>
            We support residential housing, commercial buildings and
            multiple-occupancy developments, bringing the brief and delivery
            requirements into focus from the early planning stages. Whether a
            project calls for steel, timber, cladding, tilt-up or precast
            construction, decisions are considered in context—not in isolation.
          </p>
          <p>
            Our work is grounded in a simple belief: the best results come from
            clear expectations, good people and thoughtful decisions made at the
            right time. We stay alongside our clients from concept through
            construction and handover, keeping details connected to the bigger
            picture.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="text">
              Start a conversation <ArrowRight size={17} />
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To provide exceptional design, building, and project management
                services that expertly manage developments from concept through
                construction and completion, ensuring the highest standards of
                quality, transparency, and client satisfaction.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To be the preferred and trusted building partner for property
                developers, investors, and business leaders, recognized for
                technical expertise, reliable execution, and creating enduring
                long-term value through built environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Guides Us / Values Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What guides us"
            title="The values behind every decision."
            subtitle="The way we work matters as much as the work itself."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 space-y-4"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* From Concept to Completion Banner */}
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              From concept to completion
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Connected expertise.
              <br />
              Considered outcomes.
            </h2>
          </div>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            From design and engineering coordination to construction and project
            management, we help keep people, information and decisions moving in
            the same direction. Our involvement is shaped around your brief and
            the practical demands of your project.
          </p>
        </div>
      </section>

      {/* Direct Call Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Want a seamless and hassle-free building experience?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Partner with us to bring your building vision to life.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3.5 rounded-2xl border border-slate-700 transition"
            >
              <PhoneCall size={18} /> Call {company.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold px-5 py-3.5 rounded-2xl shadow-lg transition"
            >
              Contact Details <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ContactCTA title="Let’s build something worthwhile." />
      </div>
    </main>
  );
}

export default AboutPage;
