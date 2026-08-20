import {useEffect, useState} from "react";

/**
 * Returns the id of the section currently occupying the upper part of the
 * viewport, for highlighting the matching nav link.
 *
 * Uses one IntersectionObserver over all sections rather than a scroll
 * listener doing getBoundingClientRect() per section per frame.
 */
export function useScrollSpy(ids, {offset = "-45% 0px -50% 0px"} = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean);

    if (elements.length === 0 || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        // Pick the intersecting section nearest the top of the viewport.
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {rootMargin: offset, threshold: 0}
    );

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
