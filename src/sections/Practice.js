import React from "react";
import {practice} from "../content";
import CardGrid from "../ui/CardGrid";
import SectionHead from "../ui/SectionHead";

export default function Practice() {
  return (
    <section
      className="section shell"
      id="practice"
      aria-labelledby="practice-title"
    >
      <SectionHead
        id="practice"
        eyebrow="Engineering practice"
        title="How a release earns its way out"
        note="The habits behind the numbers."
      />

      <CardGrid items={practice} />
    </section>
  );
}
