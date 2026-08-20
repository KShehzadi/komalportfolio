import React from "react";
import {awards, education} from "../content";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";

export default function Awards() {
  return (
    <section
      className="section shell"
      id="awards"
      aria-labelledby="awards-title"
    >
      <SectionHead
        id="awards"
        eyebrow="Recognition"
        title="Awards & education"
        note="Company awards, certifications, and two degrees from UET Lahore."
      />

      <div className="bento">
        {awards.map((award, i) => (
          <Reveal
            key={`${award.title}-${award.year}`}
            delay={i * 55}
            className={`card card--hover award col-4 award--${award.kind}`}
          >
            <span className="award__icon">
              <i
                className={
                  award.kind === "award"
                    ? "fas fa-trophy"
                    : "fas fa-certificate"
                }
                aria-hidden="true"
              />
            </span>
            <div className="award__body">
              <h3>{award.title}</h3>
              <span className="award__meta">
                {award.issuer} · {award.year}
              </span>
              {award.note && <p className="award__note">{award.note}</p>}
              {award.url && (
                <a
                  className="award__link"
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                  <i className="fas fa-external-link-alt" aria-hidden="true" />
                </a>
              )}
            </div>
          </Reveal>
        ))}

        {education.map((entry, i) => (
          <Reveal
            key={entry.degree}
            delay={i * 70}
            className="card card--hover edu col-6"
          >
            <img
              className="edu__logo"
              src={entry.logo}
              alt={`${entry.school} logo`}
              width="48"
              height="48"
            />
            <div>
              <h3>{entry.degree}</h3>
              <span className="edu__school">{entry.school}</span>
              <span className="edu__period">{entry.period}</span>
              <ul className="edu__points">
                {entry.points.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
