import React from "react";
import Reveal from "./Reveal";

export default function SectionHead({eyebrow, title, note, id}) {
  return (
    <Reveal className="section-head">
      <div>
        {eyebrow && <span className="section-head__eyebrow">{eyebrow}</span>}
        <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
      </div>
      {note && <p className="section-head__note">{note}</p>}
    </Reveal>
  );
}
