import {useCallback, useRef} from "react";

const MAX_DEG = 7;

/**
 * Pointer-driven 3D tilt. Returns props to spread onto the tilting element.
 * Writes rotation into CSS variables so the transform stays in the stylesheet.
 */
export function useTilt() {
  const ref = useRef(null);
  const frame = useRef(null);

  const onPointerMove = useCallback(event => {
    const node = ref.current;
    if (!node || window.matchMedia("(hover: none)").matches) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = node.getBoundingClientRect();
    // -0.5 … 0.5 from the centre of the card
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    if (frame.current !== null) {
      window.cancelAnimationFrame(frame.current);
    }
    frame.current = window.requestAnimationFrame(() => {
      frame.current = null;
      node.classList.add("is-tilting");
      node.style.setProperty("--ry", `${px * MAX_DEG * 2}deg`);
      node.style.setProperty("--rx", `${-py * MAX_DEG * 2}deg`);
    });
  }, []);

  const onPointerLeave = useCallback(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    if (frame.current !== null) {
      window.cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    node.classList.remove("is-tilting");
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
  }, []);

  return {ref, onPointerMove, onPointerLeave};
}
