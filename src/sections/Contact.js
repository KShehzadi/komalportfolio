import React, {useState} from "react";
import {m} from "framer-motion";
import {profile, socials} from "../content";
import SectionHead from "../ui/SectionHead";
import DeferredCanvas from "../three/DeferredCanvas";
import {fadeIn} from "../utils/motion";

/* The reference wires this form to EmailJS. There are no EmailJS credentials
   here, so submitting composes a pre-filled mail in the visitor's client —
   which works with no backend and no keys. Swap in emailjs.send() later if you
   want it to post directly. */
function buildMailto({name, email, message}) {
  const subject = encodeURIComponent(
    `Portfolio enquiry from ${name || "someone"}`
  );
  const body = encodeURIComponent(
    `${message}\n\n—\n${name || ""}${email ? ` <${email}>` : ""}`
  );
  return `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const [form, setForm] = useState({name: "", email: "", message: ""});

  const update = field => event =>
    setForm(current => ({...current, [field]: event.target.value}));

  const onSubmit = event => {
    event.preventDefault();
    window.location.href = buildMailto(form);
  };

  return (
    <section
      className="section shell"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-grid">
        <m.div
          variants={fadeIn("up", "tween", 0.15, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount: 0.2}}
          className="card"
        >
          <SectionHead
            id="contact"
            eyebrow="Get in touch"
            title="Let's build something"
          />

          <p style={{color: "var(--secondary)", lineHeight: 1.85}}>
            Whether it's a frontend architecture problem, a role, or a question
            about the work at {profile.company} — my inbox is open.
          </p>

          {/* the résumé's "Open to" line, so the roles I'm actually looking
              for sit next to the form rather than only inside the PDF */}
          {profile.openTo && profile.openTo.length > 0 && (
            <div style={{marginTop: "1.35rem"}}>
              <span className="section-head__eyebrow">Open to</span>
              <ul className="chip-row">
                {profile.openTo.map(role => (
                  <li className="chip" key={role}>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Your name
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="What should I call you?"
                required
              />
            </label>

            <label>
              Your email
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Your message
              <textarea
                rows={6}
                value={form.message}
                onChange={update("message")}
                placeholder="What would you like to talk about?"
                required
              />
            </label>

            <button type="submit" className="btn btn--primary">
              <i className="fas fa-paper-plane" aria-hidden="true" />
              Send message
            </button>
          </form>

          <div className="hero__socials" style={{marginTop: "1.25rem"}}>
            {socials.map(social => (
              <a
                key={social.key}
                className="icon-btn"
                href={social.url}
                target={social.key === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                <i className={social.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </m.div>

        <m.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount: 0.2}}
        >
          <DeferredCanvas
            className="planet-canvas"
            rootMargin="200px"
            fallback={
              <div className="planet-fallback">
                <span aria-hidden="true" />
              </div>
            }
            load={() => import("../three/PlanetCanvas")}
          />
        </m.div>
      </div>
    </section>
  );
}
