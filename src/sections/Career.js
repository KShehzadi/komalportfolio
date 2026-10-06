import React from "react";
import {m} from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {career, experience} from "../content";
import SectionHead from "../ui/SectionHead";
import {textVariant} from "../utils/motion";

export default function Career() {
  return (
    <section
      className="section shell"
      id="career"
      aria-labelledby="career-title"
    >
      <SectionHead
        id="career"
        eyebrow="Career"
        title="How I got here"
        note={`${experience} years in, almost all of them at Techlogix — across a widening run of roles and client engagements, each with a bigger remit than the last.`}
      />

      <m.div variants={textVariant()} initial="hidden" whileInView="show">
        <VerticalTimeline>
          {career.map(role => (
            <VerticalTimelineElement
              key={`${role.company}-${role.period}`}
              date={role.period}
              /* white disc: the company marks are dark-on-light artwork and
                 vanish against the #151030 card colour */
              icon={
                <div className="tl-icon">
                  {role.logo ? (
                    <img src={role.logo} alt={role.company} />
                  ) : (
                    <i className="fas fa-code" aria-hidden="true" />
                  )}
                </div>
              }
              /* Colours come from app.scss (which uses !important to beat this
                 library's inline styles) so the timeline follows the theme
                 instead of being pinned to the dark palette. */
            >
              <div>
                <h3 className="tl-role">{role.role}</h3>
                <span className="tl-company">{role.company}</span>
                {role.current && <span className="badge-live">Current</span>}
              </div>

              <p className="tl-summary">{role.summary}</p>

              {role.points && (
                <ul className="tl-points">
                  {role.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              {role.clients && (
                <ul className="tl-badges">
                  {role.clients.map(client => (
                    <li className="chip" key={client}>
                      <i className="fas fa-building" aria-hidden="true" />
                      {client}
                    </li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </m.div>
    </section>
  );
}
