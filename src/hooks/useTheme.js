import {useCallback, useEffect, useState} from "react";

export const THEMES = ["dark", "day", "purple"];

const KEY = "theme";
const DEFAULT = "dark";

function readInitialTheme() {
  // The inline script in public/index.html has already resolved this and put
  // it on <html>, so read it back rather than recomputing and risking a
  // mismatch between the pre-paint value and React's first render.
  const attr = document.documentElement.getAttribute("data-theme");
  if (THEMES.includes(attr)) {
    return attr;
  }
  try {
    const saved = window.localStorage.getItem(KEY);
    if (THEMES.includes(saved)) {
      return saved;
    }
  } catch (error) {
    /* storage unavailable — fall through */
  }
  return DEFAULT;
}

/** Theme state, persisted and mirrored onto <html data-theme>. */
export function useTheme() {
  const [theme, setThemeState] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(KEY, theme);
    } catch (error) {
      /* the attribute above is what actually styles the page */
    }
  }, [theme]);

  const setTheme = useCallback(next => {
    if (THEMES.includes(next)) {
      setThemeState(next);
    }
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState(current => {
      const i = THEMES.indexOf(current);
      return THEMES[(i + 1) % THEMES.length];
    });
  }, []);

  return {theme, setTheme, cycleTheme};
}
