import { useState } from "react";
import { Mail, MapPin, Phone, Send, Copy, Check } from "lucide-react";
import { company } from "../data/siteContent";
import Hero from "../components/Hero";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const subjectText = `Project Enquiry - ${form.name || "New Client"}`;
  const bodyText = `Hi Mason Edge Projects Team,\n\nName: ${form.name}\nEmail: ${form.email}\n\nProject Details:\n${form.project}`;
  const mailtoUrl = `mailto:${company.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoUrl;
  }

  function handleCopyDetails() {
    navigator.clipboard.writeText(
      `To: ${company.email}\nSubject: ${subjectText}\n\n${bodyText}`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <main>
      <Hero
        compact
        badge="CONTACT MASON EDGE"
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
      <section className="contact-section content-width">
        <div className="contact-details">
          <span className="eyebrow">WE’RE HERE TO HELP</span>
          <h2>Good things start with a conversation.</h2>
          <p>
            Whether you’re at the first feasibility conversation or preparing to
            start on site, we can help you understand the next steps. Call,
            email or send us a short outline of your plans.
          </p>
          <div className="contact-detail-list">
            <a href={`tel:${company.phone}`}>
              <span>
                <Phone size={19} />
              </span>
              <span>
                <small>CALL US</small>
                {company.phoneDisplay}
              </span>
            </a>
            <a href={`mailto:${company.email}`}>
              <span>
                <Mail size={19} />
              </span>
              <span>
                <small>EMAIL</small>
                {company.email}
              </span>
            </a>
            <div>
              <span>
                <MapPin size={19} />
              </span>
              <span>
                <small>FIND US</small>
                {company.address}
              </span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Tell us about your project</h2>
          <p>
            Share the essentials and we’ll prepare an email draft for our team.
          </p>

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
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            placeholder="you@example.com"
          />

          <label htmlFor="contact-project">A little about your project</label>
          <textarea
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

          <button className="button button-primary button-large" type="submit">
            Send Enquiry <Send size={17} />
          </button>

          {submitted && (
            <div
              className="form-success"
              style={{
                marginTop: "16px",
                padding: "16px",
                borderRadius: "12px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  marginBottom: "8px",
                  color: "#0f172a",
                }}
              >
                Enquiry prepared!
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#475569",
                  marginBottom: "12px",
                }}
              >
                If your email app didn't open automatically, copy your inquiry
                details below or send directly to{" "}
                <strong>{company.email}</strong>.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a
                  href={mailtoUrl}
                  className="button button-outline button-small"
                >
                  Open Email Draft <Mail size={15} />
                </a>
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="button button-outline button-small"
                >
                  {copied ? (
                    <>
                      Copied! <Check size={15} color="#16a34a" />
                    </>
                  ) : (
                    <>
                      Copy Details <Copy size={15} />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
