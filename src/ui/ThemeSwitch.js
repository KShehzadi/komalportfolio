import React from "react";
import {THEMES} from "../hooks/useTheme";

const META = {
  dark: {icon: "fas fa-moon", label: "Dark theme"},
  day: {icon: "fas fa-sun", label: "Day theme"},
  purple: {icon: "fas fa-palette", label: "Purple theme"}
};

/**
 * Three-way segmented control. Implemented as a radiogroup rather than a
 * cycling button so the current choice is visible and each theme is one click
 * away, and so screen readers announce which is selected.
 */
export default function ThemeSwitch({theme, onChange}) {
  return (
    <div className="theme-switch" role="radiogroup" aria-label="Colour theme">
      {THEMES.map(name => {
        const meta = META[name];
        const isActive = theme === name;
        return (
          <button
            key={name}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={meta.label}
            title={meta.label}
            className={`theme-switch__btn${isActive ? " is-active" : ""}`}
            onClick={() => onChange(name)}
          >
            <i className={meta.icon} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
