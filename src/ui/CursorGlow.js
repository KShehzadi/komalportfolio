import React, {useEffect, useRef} from "react";

/** A soft light that trails the pointer. Pointer devices only. */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }
    if (
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    // eased follow, so the light lags the cursor slightly
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let frame = null;

    const tick = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = window.requestAnimationFrame(tick);
    };

    const onMove = event => {
      targetX = event.clientX;
      targetY = event.clientY;
      node.classList.add("is-active");
    };

    const onLeave = () => node.classList.remove("is-active");

    window.addEventListener("pointermove", onMove, {passive: true});
    document.addEventListener("pointerleave", onLeave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
