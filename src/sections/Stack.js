import React from "react";
import {m} from "framer-motion";
import {stack, techIcons} from "../content";
import SectionHead from "../ui/SectionHead";
import DeferredCanvas from "../three/DeferredCanvas";
import {fadeIn} from "../utils/motion";

/* Static icon row shown until the WebGL chunk lands — and permanently on
   devices where it never does. */
function TechFallback() {
  return (
    <div className="tech-fallback">
      {techIcons.map((item, i) => (
        <img
          key={item.name}
          src={item.img}
          alt={item.name}
          title={item.name}
          style={{animationDelay: `${i * 140}ms`}}
        />
      ))}
    </div>
  );
}

export default function Stack() {
  return (
    <section className="section shell" id="stack" aria-labelledby="stack-title">
      <SectionHead
        id="stack"
        eyebrow="Toolkit"
        title="What I build with"
        note="Grouped by where it sits in the stack, not rated out of ten. Drag anywhere in the field below to spin the icons."
      />

      <DeferredCanvas
        className="tech-canvas"
        fallback={<TechFallback />}
        load={() => import("../three/TechBallsCanvas")}
        componentProps={{icons: techIcons, perRow: 5}}
      />

      <div className="bento">
        {stack.map((group, i) => (
          <m.div
            key={group.group}
            variants={fadeIn("up", "spring", i * 0.15, 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
            className="card card--hover stack-group col-4"
          >
            <h3>{group.group}</h3>
            <ul className="stack-group__items">
              {group.items.map(item => (
                <li className="stack-pill" key={item.name}>
                  <i className={item.icon} aria-hidden="true" />
                  {item.name}
                </li>
              ))}
            </ul>
          </m.div>
        ))}
      </div>
    </section>
  );
}
