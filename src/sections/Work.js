import React from "react";
import {work} from "../content";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";
import {useTilt} from "../hooks/useTilt";

/* Alternating widths are what make a bento grid read as a bento rather than a
   plain grid. Each pair sums to 12, so no row is left with an orphan card. */
const SPANS = ["col-8", "col-4", "col-4", "col-8", "col-6", "col-6"];

function WorkCard({item, span, delay}) {
  const tilt = useTilt();

  return (
    <Reveal
      delay={delay}
      className={`tilt-scene ${span}`}
      style={{display: "flex"}}
    >
      <div
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
        className={`card card--hover tilt work-card work-card--${item.accent}`}
        style={{width: "100%"}}
      >
        <div className="work-card__top">
          <span className="work-card__client">{item.client}</span>
          <span className="work-card__period">{item.period}</span>
        </div>

        <h3>{item.title}</h3>
        <p className="work-card__summary">{item.summary}</p>

        <p className="work-card__role">
          <i className="fas fa-code-branch" aria-hidden="true" />
          {item.contribution}
        </p>

        <ul className="chip-row">
          {item.stack.map(tech => (
            <li className="chip" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section className="section shell" id="work" aria-labelledby="work-title">
      <SectionHead
        id="work"
        eyebrow="Selected work"
        title="Products I've built"
        note="Enterprise and public-sector products. Most have no public marketing site, so they are described rather than linked."
      />

      <div className="bento">
        {work.map((item, i) => (
          <WorkCard
            key={item.id}
            item={item}
            span={SPANS[i] || "col-4"}
            delay={i * 60}
          />
        ))}
      </div>
    </section>
  );
}
