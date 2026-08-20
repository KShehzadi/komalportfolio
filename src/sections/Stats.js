import React from "react";
import {stats} from "../content";
import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";

export default function Stats() {
  return (
    <section className="shell stats" aria-label="Career at a glance">
      <div className="bento">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 70}
            className="card card--hover stat reveal--scale"
          >
            <CountUp className="stat__figure" value={stat.figure} />
            <span className="stat__label">{stat.label}</span>
            {stat.detail && <span className="stat__detail">{stat.detail}</span>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
