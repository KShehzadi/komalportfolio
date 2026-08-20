import React, {useEffect, useRef, useState} from "react";

/**
 * Fades and lifts its children in the first time they scroll into view.
 *
 * Replaces the old react-reveal dependency, which relied on
 * ReactDOM.findDOMNode and is unmaintained. This is ~20 lines, has no deps,
 * and degrades to "always visible" when IntersectionObserver is missing or
 * the visitor prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {rootMargin: "0px 0px -8% 0px", threshold: 0.06}
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      // merge, so a caller-supplied style cannot silently drop the delay
      style={delay ? {"--reveal-delay": `${delay}ms`, ...style} : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
