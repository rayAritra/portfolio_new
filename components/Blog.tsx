"use client";

import { ExternalLink } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
import { useFadeUp } from "./useFadeUp";

const posts = [
  {
    title: "Learning to Code: Navigating the First Three Months of Engineering",
    url: "https://aritra05.hashnode.dev/learning-to-code-navigating-the-first-three-months-of-engineering",
    date: "Jan 7, 2024",
    readTime: "7 min read",
    views: 205,
    comments: 2,
    description:
      "Documents the experience of a first-year engineering student learning to code from zero — no prior CS background, just curiosity and a lot of debugging.",
    tags: ["journey", "beginner", "engineering"],
  },
  {
    title: "An Introduction to Git and GitHub",
    url: "https://aritra05.hashnode.dev/an-introduction-to-git-and-github",
    date: "Oct 26, 2024",
    readTime: "8 min read",
    views: 78,
    comments: 0,
    description:
      "A beginner-friendly walkthrough of Git version control and GitHub — covering commits, branches, remotes, and collaboration workflows.",
    tags: ["git", "github", "version-control", "tutorial"],
  },
  {
    title: "1st Year Tech Journey",
    url: "https://aritra05.hashnode.dev/1st-year-tech-journey",
    date: "Nov 24, 2024",
    readTime: "5 min read",
    views: 55,
    comments: 0,
    description:
      "Reflecting on my first year in tech as a CSE student — what I built, what broke, and what I learned transitioning from a PCMB background.",
    tags: ["journey", "student", "reflection"],
  },
];

export default function Blog() {
  const ref = useFadeUp();

  return (
    <section id="writing" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      <div ref={ref} className="fade-up">
        <div className="section-heading">cat blog.md</div>

        <TerminalWindow filename="blog.md">
          <div className="prompt-line" style={{ marginBottom: "24px" }}>
            <span className="prompt-user">user</span>
            <span className="prompt-sep">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-sep">:~$</span>
            <span className="prompt-dollar" />
            <span className="prompt-command">
              cat blog.md &nbsp;
              <span style={{ color: "var(--text-secondary)" }}>
                # {posts.length} articles · aritra05.hashnode.dev
              </span>
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    padding: "16px",
                    transition: "border-color 0.2s, background 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-cyan)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(125,207,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-tertiary)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "8px",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: "var(--accent-cyan)",
                        lineHeight: 1.4,
                      }}
                    >
                      {post.title}
                    </span>
                    <ExternalLink
                      size={13}
                      style={{ color: "var(--text-secondary)", flexShrink: 0, marginTop: "2px" }}
                    />
                  </div>

                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: "12px",
                    }}
                  >
                    {post.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.72rem",
                        color: "var(--text-secondary)",
                        flexShrink: 0,
                      }}
                    >
                      <span>{post.date}</span>
                      <span style={{ color: "var(--border-color)" }}>·</span>
                      <span>{post.readTime}</span>
                      <span style={{ color: "var(--border-color)" }}>·</span>
                      <span style={{ color: "var(--accent-yellow)" }}>{post.views} views</span>
                      {post.comments > 0 && (
                        <>
                          <span style={{ color: "var(--border-color)" }}>·</span>
                          <span style={{ color: "var(--accent-green)" }}>
                            {post.comments} comments
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: "24px", textAlign: "center" }}>
            <a
              href="https://hashnode.com/@Aritraray2005"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "inline-flex" }}
            >
              <ExternalLink size={14} />
              open hashnode.com/@Aritraray2005
            </a>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
