import React, {useEffect, useRef, useState} from "react";

/**
 * Counts a figure up when it first scrolls into view.
 *
 * The stat figures are strings like "6+", "3×", "3rd" or "Principal", so the
 * leading integer is animated and any prefix/suffix is preserved verbatim.
 * Figures with no leading number render unchanged.
 */
export default function CountUp({value, duration = 1200, className}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    const node = ref.current;
    const match = /^(\d+)(.*)$/.exec(String(value).trim());

    if (
      !node ||
      !match ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const target = Number(match[1]);
    const suffix = match[2];
    let frame = null;
    let start = null;

    const step = now => {
      if (start === null) {
        start = now;
      }
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(target * eased)}${suffix}`);
      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            setDisplay(`0${suffix}`);
            frame = window.requestAnimationFrame(step);
          }
        });
      },
      {threshold: 0.4}
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display === null ? value : display}
    </span>
  );
}
