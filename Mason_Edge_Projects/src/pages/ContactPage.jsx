import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import Hero from "../components/Hero";
import LocationMap from "../components/LocationMap";

const company = {
  address: "136 Eaststone Ave, Wollert VIC 3750",
  email: "masonedgeprojects@gmail.com",
  phone: "0450147335",
  phoneDisplay: "0450 147 335",
};

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState("");

  const subjectText = `Project Enquiry - ${form.name || "New Client"}`;
  const bodyText = `Hi Mason Edge Projects Team,\n\nName: ${form.name}\nEmail: ${form.email}\n\nProject Details:\n${form.project}`;
  const mailtoUrl = `mailto:${company.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setCopyError("");
  }

  async function handleCopyDetails() {
    try {
      await navigator.clipboard.writeText(
        `To: ${company.email}\nSubject: ${subjectText}\n\n${bodyText}`,
      );
      setCopied(true);
      setCopyError("");
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
      setCopyError(
        "Copy was unavailable. You can select and copy the enquiry details from the email draft.",
      );
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Hero
        compact
        badge="Contact Mason Edge"
        title={
          <>
            Let’s start with
            <br />
            <span>a conversation.</span>
          </>
        }
        subtitle="Share a little about what you’re planning. We’ll be glad to hear from you."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=90"
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[.8fr_1fr] lg:gap-24 lg:px-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            We’re here to help
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Good things start with a conversation.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Whether you’re at the first feasibility conversation or preparing to
            start on site, we can help you understand the next steps. Call,
            email or send us a short outline of your plans.
          </p>

          <div className="mt-8 grid gap-4">
            <a
              className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-slate-50"
              href={`tel:${company.phone}`}
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                <Phone size={19} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-slate-900">
                <span className="mb-1 block text-[10px] font-bold tracking-[0.16em] text-slate-500">
                  CALL US
                </span>
                {company.phoneDisplay}
              </span>
            </a>
            <a
              className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-slate-50"
              href={`mailto:${company.email}`}
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                <Mail size={19} aria-hidden="true" />
              </span>
              <span className="break-all text-sm font-medium text-slate-900">
                <span className="mb-1 block text-[10px] font-bold tracking-[0.16em] text-slate-500">
                  EMAIL
                </span>
                {company.email}
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl p-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <MapPin size={19} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-slate-900">
                <span className="mb-1 block text-[10px] font-bold tracking-[0.16em] text-slate-500">
                  FIND US
                </span>
                {company.address}
              </span>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Tell us about your project
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Share the essentials and we’ll prepare an email draft for our team.
          </p>

          <label
            className="mb-2 mt-6 text-sm font-semibold text-slate-700"
            htmlFor="contact-name"
          >
            Your name
          </label>
          <input
            className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-4 focus:ring-slate-200"
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="e.g. Alex Smith"
          />

          <label
            className="mb-2 mt-5 text-sm font-semibold text-slate-700"
            htmlFor="contact-email"
          >
            Email address
          </label>
          <input
            className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-4 focus:ring-slate-200"
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            placeholder="you@example.com"
          />

          <label
            className="mb-2 mt-5 text-sm font-semibold text-slate-700"
            htmlFor="contact-project"
          >
            A little about your project
          </label>
          <textarea
            className="resize-y rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-4 focus:ring-slate-200"
            id="contact-project"
            name="project"
            rows="5"
            required
            value={form.project}
            onChange={(event) =>
              setForm({ ...form, project: event.target.value })
            }
            placeholder="What are you looking to build or achieve?"
          />

          <button
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            type="submit"
          >
            Prepare enquiry <Send size={17} aria-hidden="true" />
          </button>

          {submitted && (
            <div
              className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              role="status"
              aria-live="polite"
            >
              <p className="font-semibold text-slate-900">Enquiry prepared.</p>
              <p className="mb-4 mt-1 text-sm leading-6 text-slate-600">
                Open your email app to review and send it, or copy the enquiry
                details.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={mailtoUrl}
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-slate-900 px-4 text-xs font-semibold text-white transition hover:bg-slate-800"
                >
                  Open email draft <Mail size={15} aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  {copied ? (
                    <>
                      Copied <Check size={15} aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      Copy details <Copy size={15} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
              {copyError && (
                <p className="mt-3 text-sm text-slate-600">{copyError}</p>
              )}
            </div>
          )}
        </form>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <LocationMap address={company.address} />
      </section>
    </main>
  );
}

export default ContactPage;
