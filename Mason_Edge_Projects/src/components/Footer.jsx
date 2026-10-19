import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "./ServiceCard";

const company = {
  name: "Mason Edge Projects Pty Ltd",
  address: "136 Eaststone Ave, Wollert VIC 3750",
  email: "masonedgeprojects@gmail.com",
  phone: "0450147335",
  phoneDisplay: "0450 147 335",
};

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5 space-y-6">
            <Link
              className="inline-block"
              to="/"
              aria-label={`${company.name} home`}
            >
              <img
                src="/logo.png"
                alt={company.name}
                className="h-auto max-h-16 w-40 object-contain brightness-0 invert drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Integrated design, engineering, construction and project
              management for residential, commercial and multi-occupancy
              projects.
            </p>
          </div>

          <div className="md:col-span-3 space-y-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Explore
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/about"
                  className="rounded-sm text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300"
                >
                  About us
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="rounded-sm text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300"
                  >
                    {service.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Get in touch
            </h2>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${company.phone}`}
                className="group flex items-center gap-3 rounded-xl transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300"
              >
                <Phone
                  size={16}
                  className="text-slate-400 transition-colors group-hover:text-slate-200"
                  aria-hidden="true"
                />
                <span>{company.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="group flex items-center gap-3 rounded-xl transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300"
              >
                <Mail
                  size={16}
                  className="text-slate-400 transition-colors group-hover:text-slate-200"
                  aria-hidden="true"
                />
                <span>{company.email}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <span>{company.address}</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-slate-100 underline decoration-slate-600 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300"
                >
                  Start a conversation <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-950/70 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span className=" text-xs font-medium text-slate-400 transition-colors hover:text-slate-200">
            Developed By{" "}
            <a
              href="https://github.com/MehmoodCoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold text-slate-200">MehmoodCoder</span>
            </a>
          </span>{" "}
          <span>Built on integrity. Delivered with care.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
