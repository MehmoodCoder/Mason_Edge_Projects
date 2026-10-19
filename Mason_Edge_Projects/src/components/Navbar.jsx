import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { services } from "./ServiceCard";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 8);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(true);
  };

  // Light-themed desktop navigation link styling
  const desktopLinkClass = ({ isActive }) =>
    `py-2 font-semibold transition-colors duration-200 ${
      scrolled
        ? `hover:text-slate-900 ${
            isActive
              ? "text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
              : "text-slate-700"
          }`
        : `hover:text-slate-900 ${
            isActive
              ? "text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
              : "text-slate-800"
          }`
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3 transition-colors ${
      isActive
        ? "bg-slate-900 font-bold text-white shadow-sm"
        : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-out ${
        scrolled
          ? "border-slate-200/80 bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur-md"
          : "border-slate-200/40 bg-white/80 shadow-sm backdrop-blur-sm"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between sm:h-24">
          {/* Logo container */}
          <Link
            className="flex shrink-0 items-center py-2 transition-transform duration-200 hover:scale-[1.02]"
            to="/"
            onClick={closeMenu}
            aria-label="Mason Edge Projects home"
          >
            <img
              src="/logo.png"
              alt="Mason Edge Projects"
              className="h-12 w-auto object-contain transition-all duration-200 sm:h-16 lg:h-20 drop-shadow-sm"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="cursor-pointer rounded-xl border border-slate-300 bg-white p-2.5 text-slate-800 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 lg:hidden"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => {
              setMenuOpen((open) => !open);
              setMobileServicesOpen(true);
            }}
          >
            {menuOpen ? (
              <X size={22} className="text-slate-800" />
            ) : (
              <Menu size={22} className="text-slate-800" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm tracking-wide lg:flex">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={desktopLinkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={desktopLinkClass}
            >
              About us
            </NavLink>

            <div
              className="relative py-2"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1.5 py-2 font-semibold text-slate-800 transition-colors duration-200 hover:text-slate-900"
                aria-expanded={servicesOpen}
                aria-controls="desktop-services"
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="desktop-services"
                className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 py-3 text-slate-800 shadow-xl shadow-slate-900/10 backdrop-blur-md transition-all duration-200 ${
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
                aria-hidden={!servicesOpen}
              >
                {services.map((service) => (
                  <NavLink
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `mx-1 block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 ${
                        isActive
                          ? "bg-slate-100 font-bold text-slate-900"
                          : "text-slate-700"
                      }`
                    }
                  >
                    {service.navTitle}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={desktopLinkClass}
            >
              Contact us
            </NavLink>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-navigation"
          className={`fixed inset-x-4 top-[5.75rem] z-50 space-y-4 rounded-3xl border border-slate-200 bg-white/98 p-6 text-slate-800 shadow-2xl shadow-slate-950/15 backdrop-blur-md transition-all duration-200 lg:hidden ${
            menuOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-[0.98] opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Navigation
            </span>
          </div>

          <div className="flex flex-col space-y-1 text-base font-semibold">
            <NavLink to="/" end onClick={closeMenu} className={mobileLinkClass}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              About us
            </NavLink>

            <div className="py-1">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services"
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id="mobile-services"
                className={`ml-4 mt-2 space-y-1 overflow-hidden border-l-2 border-slate-200 pl-4 transition-all duration-200 ${
                  mobileServicesOpen
                    ? "visible max-h-64 opacity-100"
                    : "invisible max-h-0 opacity-0"
                }`}
                aria-hidden={!mobileServicesOpen}
              >
                {services.map((service) => (
                  <NavLink
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-slate-100 font-bold text-slate-900"
                          : "text-slate-600 hover:text-slate-900"
                      }`
                    }
                  >
                    {service.navTitle}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              Contact us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;