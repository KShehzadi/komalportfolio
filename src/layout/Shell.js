import React from "react";
import {LazyMotion, domAnimation} from "framer-motion";
import Nav from "../ui/Nav";
import Progress from "../ui/Progress";
import ToTop from "../ui/ToTop";
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import Work from "../sections/Work";
import Career from "../sections/Career";
import AI from "../sections/AI";
import Stack from "../sections/Stack";
import Awards from "../sections/Awards";
import Writing from "../sections/Writing";
import OpenSource from "../sections/OpenSource";
import Contact from "../sections/Contact";
import DeferredCanvas from "../three/DeferredCanvas";
import {profile, socials} from "../content";
import {useSpotlight} from "../hooks/useSpotlight";
import {useTheme} from "../hooks/useTheme";
import "../styles/app.scss";
import "../styles/fx.scss";

export default function Shell() {
  const year = new Date().getFullYear();
  const {theme, setTheme} = useTheme();

  // one global pointer listener drives the spotlight on every .card
  useSpotlight();

  return (
    /* LazyMotion + the `m` components ship only the animation features this
       site actually uses, instead of the whole framer-motion runtime. `strict`
       makes any stray `motion.*` usage throw at build time rather than quietly
       pulling the full bundle back in. */
    <LazyMotion features={domAnimation} strict>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* WebGL starfield. Deferred: the three.js chunk is only fetched once
          the browser is idle, so it never delays first paint. Until then (and
          forever, if the import fails) the CSS starfield stands in. */}
      <DeferredCanvas
        key={theme}
        className="starfield"
        fallback={<div className="starfield__fallback" />}
        load={() => import("../three/StarsCanvas")}
      />

      <Progress />
      <Nav theme={theme} onThemeChange={setTheme} />

      <main id="main">
        <Hero />
        <Stats />
        <Work />
        <Career />
        <AI />
        <Stack />
        <Awards />
        <Writing />
        <OpenSource />
        <Contact />
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer__inner">
            <span>
              © {year} {profile.name} · {profile.location}
            </span>
            <span className="footer__links">
              {socials.slice(0, 3).map(social => (
                <a
                  key={social.key}
                  className="icon-btn"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={social.icon} aria-hidden="true" />
                </a>
              ))}
            </span>
          </div>

          {/* No credits line: the planet is generated procedurally in
              three/PlanetCanvas.js rather than borrowed, so nothing on this
              page carries an attribution requirement. */}
        </div>
      </footer>

      <ToTop />
    </LazyMotion>
  );
}
