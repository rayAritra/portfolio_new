"use client";

import { ExternalLink } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
import { useFadeUp } from "./useFadeUp";

const impactStats = [
  { label: "Active Users Served", value: "500+", color: "var(--accent-cyan)" },
  { label: "Page Load Reduction", value: "60%", color: "var(--accent-green)" },
  { label: "Emails Automated/Month", value: "1,000+", color: "var(--accent-yellow)" },
  { label: "Fewer Failed Transactions", value: "~30%", color: "var(--accent-orange)" },
  { label: "Major Feature Releases", value: "3+", color: "var(--accent-purple)" },
  { label: "REST API Endpoints", value: "10+", color: "var(--accent-cyan)" },
];

const achievements = [
  {
    icon: "🏆",
    title: "Diversion Hackathon Finalist",
    sub: "Top 10 / 200+ Participants · 2024",
    href: "https://diversion-hackaut.vercel.app",
    linkLabel: "View Demo",
    color: "var(--accent-yellow)",
  },
  {
    icon: "🎓",
    title: "B.Tech CSE — Top 20% of Department",
    sub: "MAKAUT · Expected Apr 2027",
    href: undefined as string | undefined,
    linkLabel: undefined as string | undefined,
    color: "var(--accent-purple)",
  },
  {
    icon: "🚀",
    title: "Production Deployment — AirEdify",
    sub: "500+ Users · Live at airedify.in",
    href: "https://airedify.in",
    linkLabel: "Visit Site",
    color: "var(--accent-green)",
  },
  {
    icon: "⚡",
    title: "60% Page Load Improvement",
    sub: "via Next.js ISR · AirEdify (2024)",
    href: undefined as string | undefined,
    linkLabel: undefined as string | undefined,
    color: "var(--accent-cyan)",
  },
  {
    icon: "📧",
    title: "1,000+ Emails/Month Automated",
    sub: "AWS SES Integration · AirEdify (2024)",
    href: undefined as string | undefined,
    linkLabel: undefined as string | undefined,
    color: "var(--accent-orange)",
  },
];

export default function Achievements() {
  const ref = useFadeUp();

  return (
    <section id="achievements" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      <div ref={ref} className="fade-up">
        <div className="section-heading">cat achievements.json</div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
          className="achievements-grid"
        >
          {/* Column 1: Impact Stats */}
          <TerminalWindow filename="stats.json">
            <div className="prompt-line" style={{ marginBottom: "16px" }}>
              <span className="prompt-user">user</span>
              <span className="prompt-sep">@</span>
              <span className="prompt-host">portfolio</span>
              <span className="prompt-sep">:~$</span>
              <span className="prompt-dollar" />
              <span className="prompt-command">cat stats.json</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {impactStats.map(({ label, value, color }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    padding: "12px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                    {label}
                  </span>
                  <span style={{ fontSize: "1rem", fontWeight: 700, color }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </TerminalWindow>

          {/* Column 2: GitHub Activity */}
          <TerminalWindow filename="github_activity.sh">
            <div className="prompt-line" style={{ marginBottom: "16px" }}>
              <span className="prompt-user">user</span>
              <span className="prompt-sep">@</span>
              <span className="prompt-host">portfolio</span>
              <span className="prompt-sep">:~$</span>
              <span className="prompt-dollar" />
              <span className="prompt-command">open github_contributions</span>
            </div>

            <a
              href="https://github.com/rayAritra"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginBottom: "16px", width: "100%", justifyContent: "center", fontSize: "0.78rem" }}
            >
              <ExternalLink size={12} />
              View GitHub →
            </a>

            <div
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "16px",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/7dcfff/rayAritra"
                alt="GitHub Contribution Graph"
                style={{ width: "100%", borderRadius: "4px", display: "block" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                { label: "Status", value: "Active", color: "var(--accent-green)" },
                { label: "Commits", value: "Daily", color: "var(--accent-cyan)" },
                { label: "Open Source", value: "✓", color: "var(--accent-purple)" },
                { label: "Contributor", value: "Public", color: "var(--accent-orange)" },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "6px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color }}>{value}</div>
                  <div style={{ fontSize: "0.68rem", color: "var(--text-secondary)" }}>{label}</div>
                </div>
              ))}
            </div>
          </TerminalWindow>

          {/* Column 3: Achievements */}
          <TerminalWindow filename="achievements.json">
            <div className="prompt-line" style={{ marginBottom: "16px" }}>
              <span className="prompt-user">user</span>
              <span className="prompt-sep">@</span>
              <span className="prompt-host">portfolio</span>
              <span className="prompt-sep">:~$</span>
              <span className="prompt-dollar" />
              <span className="prompt-command">ls achievements/</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {achievements.map((a, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    padding: "12px",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = a.color)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)")
                  }
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>{a.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-primary)",
                          fontWeight: 600,
                          marginBottom: "2px",
                        }}
                      >
                        {a.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--text-secondary)",
                          marginBottom: a.href ? "6px" : "0",
                        }}
                      >
                        {a.sub}
                      </div>
                      {a.href && (
                        <a
                          href={a.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.68rem",
                            color: a.color,
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          <ExternalLink size={10} />
                          {a.linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .achievements-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .achievements-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
