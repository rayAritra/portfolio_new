"use client";

import { useState, useEffect } from "react";
import { Download, FolderOpen, ChevronRight } from "lucide-react";
import TerminalWindow from "./TerminalWindow";

const fullCommand = "aritra@portfolio:~$ whoami";

const specializations = [
  "Full-Stack Development (React, Next.js 14)",
  "Backend APIs (Node.js, Express.js)",
  "Real-Time Systems (Socket.IO, WebSockets)",
  "Cloud & DevOps (AWS SES, Docker, Vercel)",
  "Auth & Payments (JWT, Auth0, Razorpay)",
  "Database Design (MongoDB, PostgreSQL, Prisma)",
  "AI-Powered Tooling",
  "EdTech & SaaS Platforms",
];

const techStack = [
  "TypeScript", "React 18", "Next.js 14", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Socket.IO", "AWS SES", "Docker",
  "JWT", "Auth0", "Razorpay", "Prisma", "Tailwind CSS",
];

const stats = [
  "1+ Year Production Experience",
  "500+ Active Users Served",
  "60% Page Load Reduction Achieved",
  "1,000+ Emails/Month Automated",
  "Diversion Hackathon Finalist (Top 10 / 200+ Teams)",
  "3+ Major Feature Releases Shipped",
];

const featuredProjects = [
  "Lumio — In-Browser App Builder (WebContainers API)",
  "AirEdify — EdTech Platform (500+ Students)",
  "Uber Clone — Real-Time Ride Hailing",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const [visibleSpecs, setVisibleSpecs] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullCommand.length) {
        setTyped(fullCommand.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowOutput(true);
          setTimeout(() => {
            setShowSpecs(true);
          }, 400);
        }, 300);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!showSpecs) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < specializations.length) {
        setVisibleSpecs((v) => v + 1);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [showSpecs]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 24px 60px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          width: "100%",
          alignItems: "start",
        }}
        className="hero-grid"
      >
        {/* Left: Main terminal */}
        <div>
          <TerminalWindow filename="portfolio.sh">
            {/* Typing prompt */}
            <div style={{ marginBottom: "16px" }}>
              <span
                style={{
                  fontFamily: "inherit",
                  fontSize: "0.9rem",
                  color: "var(--text-primary)",
                }}
              >
                {typed}
                {!showOutput && (
                  <span
                    className="cursor-blink"
                    style={{ color: "var(--accent-cyan)" }}
                  >
                    █
                  </span>
                )}
              </span>
            </div>

            {showOutput && (
              <div style={{ animation: "fadeUp 0.4s ease forwards" }}>
                {/* Name + title */}
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "var(--accent-cyan)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.2,
                    }}
                  >
                    Aritra Ray
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      color: "var(--accent-green)",
                      marginTop: "4px",
                    }}
                  >
                    Full-Stack Developer &amp; CS Student
                  </div>
                </div>

                {/* Specializations */}
                {showSpecs && (
                  <div>
                    <div className="comment" style={{ marginBottom: "8px" }}>
                      # Specializing in:
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {specializations.slice(0, visibleSpecs).map((s, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            animation: "fadeUp 0.3s ease forwards",
                          }}
                        >
                          <ChevronRight
                            size={12}
                            style={{ color: "var(--accent-green)", flexShrink: 0 }}
                          />
                          <span style={{ color: "var(--text-primary)", fontSize: "0.85rem" }}>
                            {s}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech stack */}
                {visibleSpecs === specializations.length && (
                  <div style={{ marginTop: "24px", animation: "fadeUp 0.4s ease forwards" }}>
                    <div className="comment" style={{ marginBottom: "10px" }}>
                      $ ls -la tech_stack/
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {techStack.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA buttons */}
                {visibleSpecs === specializations.length && (
                  <div
                    style={{
                      marginTop: "28px",
                      display: "flex",
                      gap: "12px",
                      flexWrap: "wrap",
                      animation: "fadeUp 0.5s ease forwards",
                    }}
                  >
                    <a
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="btn-primary"
                    >
                      <FolderOpen size={14} />
                      ./view_projects
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Download size={14} />
                      wget resume.pdf
                    </a>
                  </div>
                )}
              </div>
            )}
          </TerminalWindow>
        </div>

        {/* Right: Info card */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <TerminalWindow filename="aritra@distro">
            <div className="prompt-line">
              <span className="prompt-user">user</span>
              <span className="prompt-sep">@</span>
              <span className="prompt-host">portfolio</span>
              <span className="prompt-sep">:~$</span>
              <span className="prompt-dollar" />
              <span className="prompt-command">cat skills.txt</span>
            </div>

            <div style={{ marginBottom: "16px" }}>
              {stats.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    marginBottom: "6px",
                    fontSize: "0.82rem",
                    color: "var(--text-primary)",
                  }}
                >
                  <span style={{ color: "var(--accent-green)", flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border-color)",
                paddingTop: "12px",
                marginTop: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--accent-yellow)",
                  marginBottom: "8px",
                }}
              >
                📝 Featured Projects
              </div>
              {featuredProjects.map((p) => (
                <div
                  key={p}
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    marginBottom: "4px",
                    paddingLeft: "8px",
                    borderLeft: "2px solid var(--border-color)",
                  }}
                >
                  • {p}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "12px", fontSize: "0.78rem", color: "var(--accent-cyan)" }}>
              airedify.in
            </div>
          </TerminalWindow>

          {/* Quick stat badges */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {[
              { label: "Production Users", value: "500+" },
              { label: "Load Reduction", value: "60%" },
              { label: "Emails/Month", value: "1,000+" },
              { label: "Hackathon", value: "Top 10" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-cyan)" }}>
                  {value}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
