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
  Clock,
  DollarSign,
  TrendingUp,
  MessageSquare,
  ThumbsUp,
  HardHat,
  FileText,
  PieChart,
  Layers,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContactCTA from "../components/ContactCTA";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";

const company = {
  name: "Mason Edge Projects Pty Ltd",
  phone: "0450147335",
  phoneDisplay: "0450 147 335",
};

// 1. Reusable Detailed Capability Card Component
function ServiceDetailCard({ icon: Icon, title, text, image }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1">
      {image && (
        <div className="h-48 w-full overflow-hidden bg-slate-100 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {Icon && (
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-slate-100 flex items-center justify-center shadow-md">
              <Icon size={24} strokeWidth={1.8} />
            </div>
          )}
          <h3 className="text-xl font-bold text-slate-900 leading-snug">
            {title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

// 2. Reusable Dark Value Box Component
function ServiceValueBox({ title, text }) {
  return (
    <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-7 space-y-3 backdrop-blur-sm shadow-md">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
}

// 3. Reusable Media/Blueprint Feature Block
function ServiceMediaBlock({
  badge,
  title,
  description,
  image,
  reversed = false,
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm ${reversed ? "lg:flex-row-reverse" : ""}`}
    >
      <div
        className={`lg:col-span-6 space-y-4 ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        {badge && (
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            {badge}
          </span>
        )}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-slate-600 text-base leading-relaxed">
          {description}
        </p>
        <div className="pt-2">
          <Button to="/contact" variant="outline">
            Learn More <ArrowRight size={17} />
          </Button>
        </div>
      </div>
      <div
        className={`lg:col-span-6 ${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-md w-full h-80 object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ServicePage({ service }) {
  const Icon = service.icon || Building;

  // Complete data matching image references for all 4 routes
  const getDetailedCards = () => {
    switch (service.slug) {
      case "property-developer":
        return [
          {
            icon: Compass,
            title: "Land Acquisitions & Subdivisions – Taking the Stress Out",
            text: "Identifying prime development opportunities, navigating complex land titles, planning regulations, zoning laws, and executing land subdivisions to maximize site potential.",
          },
          {
            icon: Ruler,
            title: "Concept Designs & Feasibility for Developers",
            text: "Exploring possibilities through creative architectural concepts and innovative building techniques accompanied by realistic costings for informed decisions.",
          },
          {
            icon: FileCheck,
            title: "Council Planning & Development Approval",
            text: "Translating your vision into technical drawings and managing local council planning codes directly with certifiers to ensure a smooth, hassle-free approval path.",
          },
          {
            icon: Pickaxe,
            title: "Civil Infrastructure Development",
            text: "Creating essential infrastructure including utility networks, roads, pathways, car parks, water, sewerage, and electrical networks for thriving communities.",
          },
          {
            icon: Building,
            title: "Residential Construction – Uncompromising Quality",
            text: "Delivering high-quality construction that meets or exceeds industry standards with an experienced team executing every detail with precision.",
          },
          {
            icon: ShieldCheck,
            title: "Construction Project Management",
            text: "Meticulous planning, resource allocation, and trade coordination to prevent costly delays and ensure on-time, on-budget property delivery.",
          },
        ];

      case "commercial-builder":
        return [
          {
            icon: Award,
            title: "Exceptional Results Through Expertise & Quality",
            text: "As experienced commercial builders, we understand the unique challenges of commercial construction, delivering exceptional results built to the highest quality standards.",
            image:
              "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
          },
          {
            icon: Compass,
            title: "Building Success Together With a Collaborative Approach",
            text: "Prioritising open communication and teamwork to ensure your vision is translated into reality while keeping all stakeholders informed at every step.",
            image:
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
          },
          {
            icon: Layers,
            title: "Versatile Building Solutions in a Range of Materials",
            text: "Working with concrete, steel, wood, and cladding to create cost-effective building solutions tailored across a wide range of commercial industries.",
            image:
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
          },
          {
            icon: HardHat,
            title: "Expertise in Design & Innovative Materials",
            text: "Exploring innovative structures and quality materials to create impressive, cost-effective spaces tailored precisely to function and aesthetic goals.",
            image:
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
          },
          {
            icon: ShieldCheck,
            title: "Safe & Compliant Commercial Buildings",
            text: "Maintaining strict compliance with building codes, regulations, and workplace safety standards to protect your investment and build a safe environment.",
            image:
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
          },
          {
            icon: Clock,
            title: "On Time, Every Time",
            text: "Protecting your commercial schedule with transparent cost estimates, efficient resource allocation, and meticulous management without compromising quality.",
            image:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
          },
        ];

      case "construction-management":
        return [
          {
            icon: Clock,
            title: "Streamlined Project Execution",
            text: "Overseeing every aspect of your commercial or residential build from concept to completion for an efficient execution.",
          },
          {
            icon: Compass,
            title: "On-Time Completion",
            text: "Planning and coordinating every step to ensure your build is completed and handed over strictly within agreed timeframes.",
          },
          {
            icon: DollarSign,
            title: "Cost Control & Maximised ROI",
            text: "Monitoring costs closely and applying effective cost-control strategies to eliminate unexpected financial setbacks.",
          },
          {
            icon: ShieldCheck,
            title: "Proactive Risk Management",
            text: "Identifying vulnerabilities early to ensure your project progresses smoothly without unnecessary delays or friction.",
          },
          {
            icon: FileCheck,
            title: "Compliance & Regulations",
            text: "Staying up-to-date with building codes and regulations to ensure full compliance and high quality standards.",
          },
          {
            icon: Award,
            title: "Quality Assurance",
            text: "Commitment to excellence in materials selection, health & safety, and trade workmanship throughout.",
          },
          {
            icon: MessageSquare,
            title: "Open & Transparent Communication",
            text: "Keeping you informed at every stage with clear updates, providing full visibility over project progress.",
          },
          {
            icon: ThumbsUp,
            title: "Complete Peace of Mind",
            text: "Handling the complex hurdles of construction so you can rest assured your project is in capable, experienced hands.",
          },
        ];

      case "quantity-surveying-and-estimating":
        return [
          {
            icon: DollarSign,
            title: "Cost Estimates",
            text: "Assessing concept drawings, scope, materials, and labor to establish a realistic initial budget for your project.",
          },
          {
            icon: PieChart,
            title: "Cost Planning & Feasibility Studies",
            text: "Detailed cash flow requirements outlining anticipated costs at different build stages for confident financing.",
          },
          {
            icon: TrendingUp,
            title: "Value Engineering",
            text: "Recommending cost-saving structural and material alternatives to reduce overall spend without sacrificing quality.",
          },
          {
            icon: FileText,
            title: "Bill of Quantities & Material Take-Offs",
            text: "Comprehensive lists for accurate pricing, tendering, and precise material quantities required for site delivery.",
          },
          {
            icon: Pickaxe,
            title: "Pricing & Tendering Support",
            text: "Assisting in preparing tender documents, evaluating builder bids, and selecting the right contractors.",
          },
          {
            icon: ShieldCheck,
            title: "Cash Flow Forecasting & Final Accounts",
            text: "Managing financial planning, variations, and final account settlements for complete cost visibility.",
          },
        ];

      default:
        return [];
    }
  };

  const getValueBoxes = () => {
    switch (service.slug) {
      case "property-developer":
        return [
          {
            title: "Building Services Designed for Developers",
            text: "Break free from roadblocks, zoning issues, and budget overruns. We streamline development lifecycles so you can stay on schedule.",
          },
          {
            title: "Your Trusted Development Partner",
            text: "Years of high-profile residential and commercial experience delivering multi-dwellings, townhouses, and mixed-use builds.",
          },
          {
            title: "Multiple Dwellings Specialist",
            text: "Specialising in duplexes, triplexes, multi-unit townhomes, and apartments up to 3 storeys high to maximize returns.",
          },
        ];

      case "commercial-builder":
        return [
          {
            title: "Your Trusted Commercial Partner",
            text: "Building light commercial structures up to 4 storeys high across offices, retail spaces, medical facilities, and storage units.",
          },
          {
            title: "Turnkey Commercial Solutions",
            text: "A better way to manage commercial projects from initial blueprints through site preparation, construction, and final fit-outs.",
          },
          {
            title: "Build With Confidence",
            text: "Decades of combined site experience ensuring high-quality, well-managed commercial spaces delivered on time and within budget.",
          },
        ];

      default:
        return [];
    }
  };

  const detailedCards = getDetailedCards();
  const valueBoxes = getValueBoxes();

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Dynamic Hero */}
      <Hero
        compact
        badge="OUR SERVICES"
        title={
          <>
            {service.title}
            <br />
            <span className="text-slate-300">
              {service.subtitle || "delivered with purpose."}
            </span>
          </>
        }
        subtitle={service.description}
        image={service.image}
        primaryCta={{ label: "Discuss your project", to: "/contact" }}
      />

      {/* Feature Pills Banner */}
      {service.pills && service.pills.length > 0 && (
        <section className="bg-slate-900 border-y border-slate-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.pills.map((pill) => (
                <div
                  key={pill}
                  className="bg-slate-800/90 border border-slate-700/80 rounded-xl py-3.5 px-4 text-center text-xs sm:text-sm font-semibold text-slate-200 shadow-sm"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Vision Intro Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center justify-center p-4 bg-slate-900 text-slate-100 rounded-2xl shadow-md border border-slate-700">
              <Icon size={32} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block">
              EXPERTISE & DIRECTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {service.title} & Project Excellence
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

      {/* Dark Value Boxes */}
      {valueBoxes.length > 0 && (
        <section className="bg-slate-900 text-white py-20 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valueBoxes.map((block) => (
                <ServiceValueBox
                  key={block.title}
                  title={block.title}
                  text={block.text}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Turnkey Blueprint Media Block (for commercial / quantity surveying) */}
      {(service.slug === "commercial-builder" ||
        service.slug === "quantity-surveying-and-estimating") && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ServiceMediaBlock
            badge="TURNKEY SOLUTIONS"
            title="A Better Way to Manage & Control Building Projects"
            description="Managing a construction project can feel like an uphill battle with constant delays and cost overruns. Our experienced team understands the complexities and meticulously plans every detail to streamline construction and deliver on time and budget."
            image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
          />
        </section>
      )}

      {/* Capabilities Grid */}
      {detailedCards.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            badge="END-TO-END CAPABILITIES"
            title={`High-Quality ${service.title} Solutions`}
            subtitle="Tailored construction and development strategies built around strict quality standards, compliance, and budget requirements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {detailedCards.map((item) => (
              <ServiceDetailCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                text={item.text}
                image={item.image}
              />
            ))}
          </div>
        </section>
      )}

      {/* Highlights List */}
      {service.highlights && service.highlights.length > 0 && (
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
                    <span className="p-1 rounded-full bg-slate-700 text-slate-200 mt-0.5 shrink-0">
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
      )}

      {/* Direct Call Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
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
            href={`tel:${company.phone}`}
            className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-600 font-bold px-6 py-4 rounded-2xl shadow-lg transition whitespace-nowrap"
          >
            <PhoneCall size={20} /> Call {company.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Connected Expertise Buttons */}
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
