import React, {useEffect, useRef} from "react";

/**
 * Thin reading-progress bar pinned to the top of the viewport.
 * Written with a ref + rAF-throttled scroll listener so it never triggers a
 * React re-render while scrolling.
 */
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const el = barRef.current;
      if (!el) {
        return;
      }
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      el.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    };

    const onScroll = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="mu-scroll-progress"
      style={{transform: "scaleX(0)"}}
      aria-hidden="true"
    />
  );
}
