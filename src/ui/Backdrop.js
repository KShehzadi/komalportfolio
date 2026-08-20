import React from "react";

/** Fixed atmosphere behind the whole page: drifting orbs, dot grid, grain. */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <span className="backdrop__orb backdrop__orb--1" />
      <span className="backdrop__orb backdrop__orb--2" />
      <span className="backdrop__orb backdrop__orb--3" />
      <span className="backdrop__orb backdrop__orb--4" />
      <span className="backdrop__grid" />
      <span className="backdrop__grain" />
    </div>
  );
}
