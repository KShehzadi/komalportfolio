import React, {useEffect, useRef, useState} from "react";
import {ReactComponent as ToonArt} from "../assets/images/komal-toon.svg";

/* Eye centres in the artwork's viewBox (400 × 400), and how far an iris may
   travel inside its eye before it would leave the white. */
const EYES = [
  {cx: 165, cy: 185},
  {cx: 235, cy: 185}
];
const MAX_X = 9;
const MAX_Y = 4;
/* Groups in the artwork carry data-depth; each shifts toward the pointer by
   this much times its depth, so the features move further than the head
   outline and the face appears to turn. */
const FACE_CENTRE = {cx: 200, cy: 185};
const TURN = {x: 1.6, y: 1.1};
/* Everything eases toward full travel over this many CSS pixels of pointer
   distance, so a pointer resting near the face does not snap the eyes. */
const FULL_REACH_PX = 170;

const translate = (x, y) => `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;

/**
 * The illustrated hero portrait (src/assets/images/komal-toon.svg). The eyes
 * follow the pointer, or the last tap on touch screens, and the face turns
 * slightly toward it. A toggle swaps in the original photo.
 *
 * Tracking writes transforms straight to the DOM once per animation frame
 * rather than through React state, so moving the mouse never re-renders.
 */
export default function ToonPortrait({photo, alt}) {
  const svgRef = useRef(null);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) {
      return undefined;
    }
    const irises = Array.from(svg.querySelectorAll(".toon__iris"));
    const movers = Array.from(svg.querySelectorAll("[data-depth]"));
    let pointer = null;
    let frame = null;

    // direction from a viewBox point toward the pointer, eased by distance
    const aim = (box, scale, point) => {
      if (!pointer) {
        return {x: 0, y: 0};
      }
      const dx = pointer.x - (box.left + point.cx * scale);
      const dy = pointer.y - (box.top + point.cy * scale);
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Math.min(dist / FULL_REACH_PX, 1);
      return {x: (dx / dist) * reach, y: (dy / dist) * reach};
    };

    const look = () => {
      frame = null;
      const box = svg.getBoundingClientRect();
      const scale = box.width / 400;

      irises.forEach((iris, i) => {
        const v = aim(box, scale, EYES[i] || FACE_CENTRE);
        iris.style.transform = translate(v.x * MAX_X, v.y * MAX_Y);
      });

      const turn = aim(box, scale, FACE_CENTRE);
      movers.forEach(group => {
        const depth = Number(group.dataset.depth) || 1;
        group.style.transform = translate(
          turn.x * TURN.x * depth,
          turn.y * TURN.y * depth
        );
      });
    };

    const schedule = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(look);
      }
    };

    const onPointer = event => {
      pointer = {x: event.clientX, y: event.clientY};
      schedule();
    };

    // the page scrolls under a still cursor, so the angle changes anyway
    const onScroll = () => pointer && schedule();

    // cursor left the window: look straight ahead again
    const onLeave = () => {
      pointer = null;
      schedule();
    };

    window.addEventListener("pointermove", onPointer, {passive: true});
    window.addEventListener("pointerdown", onPointer, {passive: true});
    window.addEventListener("scroll", onScroll, {passive: true});
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <>
      <div className="toon-frame">
        <ToonArt
          ref={svgRef}
          className={`toon${showPhoto ? " is-hidden" : ""}`}
          role="img"
          aria-label={`Illustration of ${alt}`}
          aria-hidden={showPhoto}
        />

        <img
          className={`toon-photo${showPhoto ? "" : " is-hidden"}`}
          src={photo}
          alt={alt}
          aria-hidden={!showPhoto}
          width="300"
          height="300"
        />
      </div>

      <button
        type="button"
        className="toon-toggle"
        aria-pressed={showPhoto}
        onClick={() => setShowPhoto(shown => !shown)}
      >
        <i
          className={showPhoto ? "fas fa-pencil-alt" : "fas fa-camera"}
          aria-hidden="true"
        />
        {showPhoto ? "Show illustration" : "Show photo"}
      </button>
    </>
  );
}
