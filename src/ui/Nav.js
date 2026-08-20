import React, {useEffect, useState} from "react";
import {nav, profile} from "../content";
import {useScrollSpy} from "../hooks/useScrollSpy";
import ThemeSwitch from "./ThemeSwitch";

const SECTION_IDS = nav.map(item => item.id);

export default function Nav({theme, onThemeChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile sheet on Escape
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }
    const onKeyDown = event => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const firstName = profile.name.split(" ")[0].toLowerCase();

  return (
    <header className={`nav${isStuck ? " is-stuck" : ""}`}>
      <div className="shell nav__inner">
        <a className="nav__brand" href="#top">
          <span>&lt;</span>
          {firstName}
          <span>/&gt;</span>
        </a>

        <nav
          className={`nav__links${isOpen ? " is-open" : ""}`}
          aria-label="Sections"
        >
          {nav.map(item => (
            <a
              key={item.id}
              className={`nav__link${activeId === item.id ? " is-active" : ""}`}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "true" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeSwitch theme={theme} onChange={onThemeChange} />
          <button
            type="button"
            className="icon-btn nav__toggle"
            onClick={() => setIsOpen(open => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <i
              className={isOpen ? "fas fa-times" : "fas fa-bars"}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
