import React from "react";
import {m} from "framer-motion";
import {profile, socials} from "../content";
import Typing from "../ui/Typing";
import {fadeIn, textVariant} from "../utils/motion";

/* Layout follows the reference hero: a violet dot with a fading vertical rule
   on the left, an oversized name with the first name in accent, and a bouncing
   mouse cue at the bottom. */
export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section className="hero" id="top">
      <div className="hero__wash" aria-hidden="true" />

      <div className="shell hero__grid">
        <div className="hero__rule" aria-hidden="true">
          <span className="hero__rule-dot" />
          <span className="hero__rule-line" />
        </div>

        <m.div
          className="hero__copy"
          variants={{show: {transition: {staggerChildren: 0.12}}}}
          initial="hidden"
          animate="show"
        >
          {profile.openToWork && (
            <m.p
              variants={fadeIn("", "spring", 0, 0.8)}
              className="hero__available"
            >
              <i className="fas fa-circle" aria-hidden="true" />
              Open to opportunities
            </m.p>
          )}

          <m.h1 variants={textVariant()}>
            Hi, I'm <em>{first}</em> {rest.join(" ")}
          </m.h1>

          <m.div variants={fadeIn("up", "spring", 0.1, 0.9)}>
            <Typing label="I'm a" words={profile.titles} />
          </m.div>

          <m.p
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="hero__summary"
          >
            {profile.summary}
          </m.p>

          <m.div
            variants={fadeIn("up", "spring", 0.3, 1)}
            className="hero__actions"
          >
            <a className="btn btn--primary" href="#contact">
              <i className="fas fa-paper-plane" aria-hidden="true" />
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a
                className="btn btn--ghost"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-alt" aria-hidden="true" />
                Résumé
              </a>
            )}
          </m.div>

          <m.div
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="hero__socials"
          >
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
          </m.div>
        </m.div>

        <m.div
          variants={fadeIn("left", "spring", 0.25, 1.1)}
          initial="hidden"
          animate="show"
          className="hero__portrait"
        >
          <img
            src={profile.photo}
            alt={`${profile.name}, ${profile.role}`}
            width="300"
            height="300"
          />
        </m.div>
      </div>

      <div className="shell hero__cue">
        <a href="#work" aria-label="Scroll to work">
          <div className="hero__cue-mouse">
            <m.span
              className="hero__cue-dot"
              animate={{y: [0, 24, 0]}}
              transition={{duration: 1.5, repeat: Infinity, repeatType: "loop"}}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
