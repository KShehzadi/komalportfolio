import React, {useEffect, useRef} from "react";

/** Reading-progress bar. Writes to a ref so scrolling never re-renders React. */
export default function Progress() {
  const ref = useRef(null);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const node = ref.current;
      if (!node) {
        return;
      }
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      node.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
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
      ref={ref}
      className="progress"
      style={{transform: "scaleX(0)"}}
      aria-hidden="true"
    />
  );
}
