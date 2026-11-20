import React from "react";
import {aiWork} from "../content";
import CardGrid from "../ui/CardGrid";
import SectionHead from "../ui/SectionHead";

export default function AI() {
  return (
    <section className="section shell" id="ai" aria-labelledby="ai-title">
      <SectionHead
        id="ai"
        eyebrow="AI-enabled engineering"
        title="How the team builds now"
        note="How AI fits into the work, with me deciding, reviewing and testing every step."
      />

      <CardGrid items={aiWork} />
    </section>
  );
}
