"use client";

import Image from "next/image";
import TerminalWindow from "./TerminalWindow";
import { useFadeUp } from "./useFadeUp";

const skillCategories = [
  {
    title: "Languages & Frontend",
    color: "var(--accent-cyan)",
    skills: [
      "JavaScript (ES2022+)", "TypeScript", "React 18", "Next.js 14",
      "Tailwind CSS", "Shadcn/UI", "Vite", "Redux Toolkit", "HTML5", "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    color: "var(--accent-green)",
    skills: [
      "Node.js", "Express.js", "Strapi CMS", "REST API Design",
      "Webhooks", "Socket.IO", "WebSockets", "WebContainers API",
    ],
  },
  {
    title: "Databases & ORM",
    color: "var(--accent-yellow)",
    skills: ["MongoDB", "PostgreSQL", "Prisma ORM", "Schema Design & Indexing"],
  },
  {
    title: "Cloud, Auth & Tools",
    color: "var(--accent-purple)",
    skills: [
      "AWS SES", "Docker", "Vercel", "JWT", "Auth0",
      "Razorpay", "RBAC", "Git", "Postman", "ESLint",
    ],
  },
];

const bioParagraphs = [
  `I'm a final-year Computer Science & Engineering student at Maulana Abul Kalam
Azad University of Technology, West Bengal — and a Full-Stack Developer with
1+ year of production experience building and shipping real products.`,
  `I currently work at AiRedify, where I built AirEdify — an EdTech platform
serving 500+ students with Next.js 14, Strapi CMS, MongoDB, and Razorpay.
I reduced page load times by 60% using ISR and automated 1,000+ emails/month
via AWS SES.`,
  `I love building systems that solve real problems — from real-time ride-hailing
clones with Socket.IO to browser-native app builders using WebContainers API.
I'm passionate about clean architecture, great developer experience, and
shipping things that actually work at scale.`,
  `Diversion Hackathon Finalist (Top 10 out of 200+ teams) — built ReviewIQ,
an AI SaaS with multi-tenant RBAC, Gemini AI, and a full review queue system
in 24 hours.`,
];

export default function About() {
  const ref = useFadeUp();

  return (
    <section id="about" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      <div ref={ref} className="fade-up">
        <div className="section-heading">about_me.sh</div>

        <TerminalWindow filename="about_me.sh">
          <div className="prompt-line" style={{ marginBottom: "24px" }}>
            <span className="prompt-user">user</span>
            <span className="prompt-sep">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-sep">:~$</span>
            <span className="prompt-dollar" />
            <span className="prompt-command">cat about.md</span>
          </div>

          {/* Outer 2-col: [photo card] | [bio + skills] */}
          <div
            style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "32px", alignItems: "start" }}
            className="about-outer-grid"
          >
            {/* ── Left: Profile photo card ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Photo */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "2px solid var(--border-color)",
                  background: "var(--bg-tertiary)",
                  boxShadow: "0 0 24px rgba(125,207,255,0.08)",
                }}
              >
                <Image
                  src="/aritra.jpg"
                  alt="Aritra Ray"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="220px"
                  priority
                />
              </div>

              {/* Name / title card */}
              <div
                style={{
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  padding: "12px",
                }}
              >
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--accent-cyan)", marginBottom: "2px" }}>
                  Aritra Ray
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--accent-green)", marginBottom: "8px" }}>
                  Full-Stack Developer
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {[
                    { icon: "📍", text: "West Bengal, India" },
                    { icon: "🎓", text: "MAKAUT · Final Year" },
                    { icon: "💼", text: "AiRedify · Remote" },
                  ].map(({ icon, text }) => (
                    <div key={text} style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <span style={{ fontSize: "0.7rem" }}>{icon}</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status badge */}
              <div
                style={{
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  borderLeft: "3px solid var(--accent-green)",
                  borderRadius: "8px",
                  padding: "10px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--accent-green)",
                    animation: "blink 2s ease infinite",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "0.72rem", color: "var(--accent-green)" }}>
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* ── Right: bio + skills ── */}
            <div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-cyan)", marginBottom: "4px" }}>
                # About Me
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                # Full-Stack Developer &amp; System Builder
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--accent-green)", marginBottom: "12px" }}>
                #!/bin/bash
              </div>

              {bioParagraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "0.82rem",
                    marginBottom: "12px",
                    lineHeight: 1.7,
                    whiteSpace: "pre-line",
                  }}
                >
                  {para}
                </p>
              ))}

              {/* Skills grid — 2 cols */}
              <div style={{ marginTop: "20px" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--accent-yellow)", marginBottom: "14px" }}>
                  $ ls skills/
                </div>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}
                  className="skills-grid"
                >
                  {skillCategories.map((cat) => (
                    <div key={cat.title}>
                      <div
                        style={{ fontSize: "0.78rem", color: cat.color, marginBottom: "8px", fontWeight: 600 }}
                      >
                        [{cat.title}]
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {cat.skills.map((skill) => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-outer-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
