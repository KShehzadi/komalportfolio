import React, {useEffect, useState} from "react";

const TYPE_MS = 70;
const ERASE_MS = 35;
const HOLD_MS = 1600;

/**
 * Cycles through `words`, typing and erasing one character at a time.
 * Falls back to plain text when the visitor prefers reduced motion.
 */
export default function Typewriter({prefix = "", words = []}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) {
      return;
    }

    const word = words[wordIndex];
    let delay;

    if (!isErasing && charCount === word.length) {
      delay = HOLD_MS;
    } else {
      delay = isErasing ? ERASE_MS : TYPE_MS;
    }

    const timer = setTimeout(() => {
      if (!isErasing) {
        if (charCount < word.length) {
          setCharCount(charCount + 1);
        } else {
          setIsErasing(true);
        }
      } else if (charCount > 0) {
        setCharCount(charCount - 1);
      } else {
        setIsErasing(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charCount, isErasing, wordIndex, words, prefersReducedMotion]);

  if (words.length === 0) {
    return null;
  }

  const text = prefersReducedMotion
    ? words[0]
    : words[wordIndex].slice(0, charCount);

  return (
    <p className="mu-typewriter">
      {prefix && <span className="mu-typewriter-prefix">{prefix}</span>}
      <span className="mu-typewriter-word">{text}</span>
      {!prefersReducedMotion && <span className="mu-typewriter-caret" />}
    </p>
  );
}
