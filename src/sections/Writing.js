import React, {useEffect, useState} from "react";
import {writingFallback} from "../content";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";

/** Medium's feed returns HTML; pull the first readable paragraph out of it. */
function excerptFrom(html) {
  if (typeof html !== "string") {
    return "";
  }
  const text = html
    .replace(/<figure[\s\S]*?<\/figure>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 220 ? `${text.slice(0, 217)}…` : text;
}

function formatDate(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value.replace(" ", "T"));
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short"
  });
}

export default function Writing() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/blogs.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`blogs.json responded ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (cancelled) {
          return;
        }
        const items = Array.isArray(data.items) ? data.items : [];
        setPosts(
          items.slice(0, 6).map(item => ({
            title: item.title,
            url: item.link,
            date: formatDate(item.pubDate),
            description: excerptFrom(item.content || item.description)
          }))
        );
      })
      .catch(() => {
        if (!cancelled) {
          setPosts(writingFallback);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const list = posts === null ? writingFallback : posts;

  if (list.length === 0) {
    return null;
  }

  return (
    <section
      className="section shell"
      id="writing"
      aria-labelledby="writing-title"
    >
      <SectionHead
        id="writing"
        eyebrow="Writing"
        title="Notes and articles"
        note="Mostly frontend architecture, observability and systems write-ups, published on Medium."
      />

      <div className="bento">
        {list.map((post, i) => (
          <Reveal
            key={post.url}
            delay={i * 60}
            as="article"
            className="card card--hover post col-4"
          >
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              <span className="post__meta">
                <i className="fab fa-medium" aria-hidden="true" />
                {post.date || "Medium"}
              </span>
              <h3>{post.title}</h3>
              {post.description && (
                <p className="post__excerpt">{post.description}</p>
              )}
              <span className="post__more">
                Read
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
