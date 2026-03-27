"use client";

import TerminalWindow from "./TerminalWindow";
import { useFadeUp } from "./useFadeUp";

const experiences = [
  {
    date: "Jan 2024 – Present",
    category: "Work",
    title: "Full-Stack Developer @ AiRedify (Remote)",
    description:
      "Built AirEdify — a production EdTech platform on Next.js 14, Strapi CMS, and MongoDB serving 500+ students. End-to-end Razorpay integration cut failed transactions ~30%. AWS SES automation eliminated 100% of manual follow-up. ISR reduced page loads by 60% to under 1 second.",
    tags: ["Next.js 14", "Strapi CMS", "MongoDB", "Razorpay", "AWS SES", "ISR"],
  },
  {
    date: "2024",
    category: "Hackathon 🏆",
    title: "Diversion Hackathon — Finalist (Top 10 / 200+ Teams)",
    description:
      "Built ReviewIQ in 24 hours — an AI SaaS where Gemini AI drafts answers and reviewers approve before delivery. Multi-tenant RBAC with Auth0, Prisma + PostgreSQL backend, and full review queue UI. Demoed live to industry judges.",
    tags: ["Next.js 14", "Auth0", "Prisma", "PostgreSQL", "Gemini AI", "RBAC"],
  },
  {
    date: "2024",
    category: "Project",
    title: "Lumio — In-Browser App Builder",
    description:
      "Browser-native IDE using WebContainers API. Users run Node.js and React projects in-browser with zero local setup. AI code generation from prompts in under 3 seconds. Live preview, hot reload, and virtual file tree.",
    tags: ["TypeScript", "Node.js", "React", "WebContainers API", "AI"],
  },
  {
    date: "2024",
    category: "Project",
    title: "Uber Clone — Real-Time Ride Hailing",
    description:
      "Full-stack ride-hailing app with real-time ride updates via Socket.IO (sub-second latency), JWT + RBAC auth securing 10+ API endpoints, and MongoDB geolocation indexing for driver proximity matching.",
    tags: ["Node.js", "Express", "Socket.IO", "MongoDB", "JWT", "React"],
  },
  {
    date: "Ongoing",
    category: "Education",
    title: "B.Tech CSE @ MAKAUT — Top 20% of Department",
    description:
      "Final-year Computer Science & Engineering student. Coursework: Data Structures, DBMS, Operating Systems, Computer Networks, OOP, Software Engineering. Active in tech fests and competitive programming.",
    tags: ["DSA", "DBMS", "OS", "Networks", "OOP"],
  },
];

const categoryColors: Record<string, string> = {
  Work: "var(--accent-green)",
  Project: "var(--accent-cyan)",
  "Hackathon 🏆": "var(--accent-yellow)",
  Education: "var(--accent-purple)",
};

export default function Highlights() {
  const ref = useFadeUp();

  return (
    <section id="highlights" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      <div ref={ref} className="fade-up">
        <div className="section-heading">experiences.json</div>

        <TerminalWindow filename="experiences.json">
          <div className="prompt-line" style={{ marginBottom: "24px" }}>
            <span className="prompt-user">user</span>
            <span className="prompt-sep">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-sep">:~$</span>
            <span className="prompt-dollar" />
            <span className="prompt-command">cat experiences.json</span>
          </div>

          <div style={{ position: "relative", paddingLeft: "40px" }}>
            <div className="timeline-line" />
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {experiences.map((exp, i) => {
                const color = categoryColors[exp.category] || "var(--accent-cyan)";
                return (
                  <div key={i} style={{ position: "relative" }}>
                    <div
                      className="timeline-dot"
                      style={{ position: "absolute", left: "-28px", top: "6px", background: color }}
                    />
                    <div
                      style={{
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "8px",
                        padding: "16px",
                        transition: "border-color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor = color)
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)")
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "8px",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span
                            style={{
                              padding: "2px 8px",
                              borderRadius: "4px",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              color,
                              background: `${color}18`,
                              border: `1px solid ${color}33`,
                            }}
                          >
                            {exp.category}
                          </span>
                          <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                            {exp.title}
                          </span>
                        </div>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                          {exp.date}
                        </span>
                      </div>

                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.65,
                          marginBottom: "12px",
                        }}
                      >
                        {exp.description}
                      </p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
