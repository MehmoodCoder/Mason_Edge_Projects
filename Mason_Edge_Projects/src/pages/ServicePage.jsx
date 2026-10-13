import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Compass,
  Ruler,
  FileCheck,
  Pickaxe,
  Building,
  ShieldCheck,
} from "lucide-react";
import Button from "../components/Button";
import ContactCTA from "../components/ContactCTA";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";

function ServicePage({ service }) {
  const Icon = service.icon;

  const detailedCards =
    service.slug === "property-developer"
      ? [
          {
            icon: Compass,
            title: "Site Acquisitions & Strategic Subdivisions",
            text: "Identifying prime development sites, navigating complex land titles, and executing precise subdivisions to unlock maximum value from land assets.",
          },
          {
            icon: Ruler,
            title: "Concept Architecture & Feasibility",
            text: "Detailed preliminary assessments and creative architectural designs crafted to align with strict budgets and realistic construction cost estimates.",
          },
          {
            icon: FileCheck,
            title: "Planning & Council Approvals",
            text: "Managing all technical drawings, local building codes, and municipal permits directly with private certifiers to secure quick council sign-offs.",
          },
          {
            icon: Pickaxe,
            title: "Civil Infrastructure Development",
            text: "Coordinating essential civil works including utility networks, drainage, roads, and power infrastructure required for modern communities.",
          },
          {
            icon: Building,
            title: "Uncompromising Residential Construction",
            text: "Executing builds with high structural integrity and premium finishes that consistently exceed standard Australian building guidelines.",
          },
          {
            icon: ShieldCheck,
            title: "End-to-End Construction Management",
            text: "Continuous site oversight, resource management, and strict quality control to eliminate trade delays and keep delivery on budget.",
          },
        ]
      : [];

  const valueBoxes =
    service.slug === "property-developer"
      ? [
          {
            title: "Built for Property Developers",
            text: "Eliminate project roadblocks, unexpected budget overruns, and zoning hurdles. We streamline the entire development lifecycle so you can stay on schedule and protect your investment margins.",
          },
          {
            title: "Your Trusted Development Partner",
            text: "Our team combines years of residential and commercial experience across multi-dwelling, townhouses, and mixed-use spaces. We handle the heavy lifting from concept through to completion.",
          },
          {
            title: "Multi-Occupancy Expertise",
            text: "Specialized in duplexes, triplexes, multi-unit townhomes, and low-rise apartments designed to optimize land utilization and boost overall asset valuation.",
          },
        ]
      : [];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <Hero
        compact
        badge="OUR SERVICES"
        title={
          <>
            {service.title}
            <br />
            <span className="text-slate-400">
              {service.subtitle || "delivered with purpose."}
            </span>
          </>
        }
        subtitle={service.description}
        image={service.image}
        primaryCta={{ label: "Discuss your project", to: "/contact" }}
      />

      {service.pills && service.pills.length > 0 && (
        <section className="bg-slate-900 border-y border-slate-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.pills.map((pill) => (
                <div
                  key={pill}
                  className="bg-slate-800/90 border border-slate-700/80 rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-semibold text-slate-200 shadow-sm"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center justify-center p-3.5 bg-slate-900 text-slate-200 rounded-2xl shadow-md border border-slate-700">
              <Icon size={32} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block">
              BUILDING YOUR VISION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Building Your Vision & Maximising Success
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-10 pt-6 lg:pt-0">
            <p>{service.detail}</p>
            <div className="pt-2">
              <Button to="/contact" variant="primary">
                Schedule a Consultation <ArrowRight size={17} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {valueBoxes.length > 0 && (
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valueBoxes.map((block) => (
                <div
                  key={block.title}
                  className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6 space-y-3 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-slate-100">
                    {block.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detailedCards.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            badge="END-TO-END CAPABILITIES"
            title="High-Quality Customised Developments"
            subtitle="Tailored construction and development strategies built around strict quality standards and budget requirements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {detailedCards.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 space-y-4 flex flex-col justify-between hover:border-slate-400"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-slate-200 flex items-center justify-center shadow-sm">
                      <ItemIcon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block">
                HOW WE CAN HELP
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Practical support.
                <br />
                From start to finish.
              </h2>
              <p className="text-slate-300 text-base">
                Clear scope, considered advice and experienced delivery—shaped
                around your project.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-800/80 border border-slate-700/70"
                >
                  <span className="p-1 rounded-full bg-slate-700 text-slate-200 mt-0.5">
                    <CheckCircle2 size={20} />
                  </span>
                  <span className="text-slate-200 font-medium text-sm sm:text-base">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Need a streamlined pathway for your build?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Speak directly with our engineering and project development
              specialists.
            </p>
          </div>
          <a
            href="tel:0450147335"
            className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-600 font-bold px-6 py-4 rounded-2xl shadow-lg transition whitespace-nowrap"
          >
            <PhoneCall size={20} /> Call 0450 147 335
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          badge="CONNECTED EXPERTISE"
          title="More ways we can support you."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <Button to="/services/property-developer" variant="outline">
            Property development <ArrowRight size={16} />
          </Button>
          <Button to="/services/commercial-builder" variant="outline">
            Commercial building <ArrowRight size={16} />
          </Button>
          <Button to="/services/construction-management" variant="outline">
            Construction management <ArrowRight size={16} />
          </Button>
          <Button
            to="/services/quantity-surveying-and-estimating"
            variant="outline"
          >
            Quantity surveying & estimating <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ContactCTA title="Let’s talk about your project." />
      </div>
    </main>
  );
}

export default ServicePage;
