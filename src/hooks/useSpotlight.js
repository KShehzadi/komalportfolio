import {useEffect} from "react";

/**
 * One document-level pointer listener that writes the cursor position into the
 * `--mx` / `--my` custom properties of whichever `.card` is under the pointer.
 *
 * Deliberately global rather than a listener per card: with ~25 cards on the
 * page that would be 25 listeners all firing on the same events.
 */
export function useSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      return undefined;
    }

    let frame = null;
    let latest = null;

    const apply = () => {
      frame = null;
      if (!latest) {
        return;
      }
      const {card, x, y} = latest;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
    };

    const onPointerMove = event => {
      const card = event.target.closest && event.target.closest(".card");
      if (!card) {
        return;
      }
      const rect = card.getBoundingClientRect();
      latest = {
        card,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      if (frame === null) {
        frame = window.requestAnimationFrame(apply);
      }
    };

    document.addEventListener("pointermove", onPointerMove, {passive: true});
    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);
}
