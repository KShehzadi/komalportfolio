import React, {useEffect, useState} from "react";

const TYPE_MS = 68;
const ERASE_MS = 32;
const HOLD_MS = 1700;

/** Types and erases through `words`. Renders the first word statically when
 *  the visitor prefers reduced motion. */
export default function Typing({label, words = []}) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) {
      return undefined;
    }

    const word = words[index];
    const atEnd = !isErasing && count === word.length;
    const delay = atEnd ? HOLD_MS : isErasing ? ERASE_MS : TYPE_MS;

    const timer = setTimeout(() => {
      if (!isErasing) {
        if (count < word.length) {
          setCount(count + 1);
        } else {
          setIsErasing(true);
        }
      } else if (count > 0) {
        setCount(count - 1);
      } else {
        setIsErasing(false);
        setIndex((index + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [count, isErasing, index, words, prefersReducedMotion]);

  if (words.length === 0) {
    return null;
  }

  const text = prefersReducedMotion ? words[0] : words[index].slice(0, count);

  return (
    // The visible text churns character by character, so it is hidden from
    // assistive tech and the element carries one stable label instead.
    <p
      className="hero__role"
      aria-label={[label, words[0]].filter(Boolean).join(" ")}
    >
      {label && (
        <span className="hero__role-label" aria-hidden="true">
          {label}
        </span>
      )}
      <span className="hero__role-word" aria-hidden="true">
        {text}
      </span>
      {!prefersReducedMotion && (
        <span className="hero__caret" aria-hidden="true" />
      )}
    </p>
  );
}
