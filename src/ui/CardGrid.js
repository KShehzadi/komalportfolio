import React from "react";
import Reveal from "./Reveal";

/* The card grid shared by the AI and Practice sections. It deliberately reuses
   the .work-card styles from the Work section: same accent rail, same
   eyebrow/title/summary/chip rhythm, so all three grids read as one system.
   Cards sit two per row; an odd count gives the first card a full row instead
   of leaving the last one alone. */
export default function CardGrid({items}) {
  return (
    <div className="bento">
      {items.map((item, i) => (
        <Reveal
          key={item.id}
          delay={i * 60}
          className={`card card--hover work-card work-card--${item.accent} ${
            i === 0 && items.length % 2 ? "col-12" : "col-6"
          }`}
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
  );
}
