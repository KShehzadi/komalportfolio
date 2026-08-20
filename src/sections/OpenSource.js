import React, {useEffect, useState} from "react";
import {socials} from "../content";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";

const githubUrl =
  (socials.find(social => social.key === "github") || {}).url ||
  "https://github.com/kshehzadi";

export default function OpenSource() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let cancelled = false;

    fetch("/profile.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`profile.json responded ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (cancelled) {
          return;
        }
        const edges =
          (((data.data || {}).user || {}).pinnedItems || {}).edges || [];
        setRepos(edges.map(edge => edge && edge.node).filter(Boolean));
      })
      .catch(() => {
        /* the section simply does not render if the feed is unavailable */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (repos.length === 0) {
    return null;
  }

  return (
    <section className="section shell" aria-labelledby="oss-title">
      <SectionHead
        id="oss"
        eyebrow="Open source"
        title="Pinned repositories"
        note="Pulled live from my pinned GitHub repositories."
      />

      <div className="bento">
        {repos.map((repo, i) => (
          <Reveal
            key={repo.id}
            delay={i * 55}
            className="card card--hover repo col-4"
          >
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              <span className="repo__name">
                <i className="fas fa-book" aria-hidden="true" />
                {repo.name}
              </span>
              {repo.description && (
                <p className="repo__desc">{repo.description}</p>
              )}
              <span className="repo__foot">
                {repo.primaryLanguage && (
                  <span className="repo__lang">
                    <span
                      className="repo__dot"
                      style={{background: repo.primaryLanguage.color}}
                    />
                    {repo.primaryLanguage.name}
                  </span>
                )}
                <span>
                  <i className="fas fa-star" aria-hidden="true" />{" "}
                  {(repo.stargazers || {}).totalCount || 0}
                </span>
                <span>
                  <i className="fas fa-code-branch" aria-hidden="true" />{" "}
                  {repo.forkCount || 0}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={120}
        style={{display: "flex", justifyContent: "center", marginTop: "1.6rem"}}
      >
        <a
          className="btn btn--ghost"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" aria-hidden="true" />
          More on GitHub
        </a>
      </Reveal>
    </section>
  );
}
