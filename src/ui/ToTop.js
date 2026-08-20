import React, {useEffect, useState} from "react";

export default function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${isVisible ? " is-visible" : ""}`}
      onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
