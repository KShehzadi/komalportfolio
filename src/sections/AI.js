import React from "react";
import {aiWork} from "../content";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";

/* Deliberately reuses the .work-card styles from the Work section: same accent
   rail, same eyebrow/title/summary/chip rhythm. The two grids are the same
   kind of object — things built — so they should read as one system. Four
   cards at col-6 fill two clean rows. */
export default function AI() {
  return (
    <section className="section shell" id="ai" aria-labelledby="ai-title">
      <SectionHead
        id="ai"
        eyebrow="AI-enabled engineering"
        title="How the team builds now"
        note="Not a list of models. The tooling, integrations and standards that fold triage, root-cause analysis and delivery into a single loop."
      />

      <div className="bento">
        {aiWork.map((item, i) => (
          <Reveal
            key={item.id}
            delay={i * 60}
            className={`card card--hover work-card work-card--${item.accent} col-6`}
          >
            <div className="work-card__top">
              <span className="work-card__client">{item.kind}</span>
            </div>

            <h3>{item.title}</h3>
            <p className="work-card__summary">{item.summary}</p>

            <ul className="chip-row">
              {item.stack.map(tech => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
