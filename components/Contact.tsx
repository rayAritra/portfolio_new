"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./SocialIcons";
import TerminalWindow from "./TerminalWindow";
import { useFadeUp } from "./useFadeUp";

const EMAIL = "aritra.sohan@gmail.com";

export default function Contact() {
  const ref = useFadeUp();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      style={{ padding: "80px 24px 120px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <div ref={ref} className="fade-up">
        <div className="section-heading">contact.sh</div>

        <TerminalWindow filename="contact.sh">
          {/* Prompt */}
          <div className="prompt-line" style={{ marginBottom: "20px" }}>
            <span className="prompt-user">user</span>
            <span className="prompt-sep">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-sep">:~$</span>
            <span className="prompt-dollar" />
            <span className="prompt-command">./contact.sh --help</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
            className="contact-grid"
          >
            {/* Left: info */}
            <div>
              <div className="comment" style={{ marginBottom: "12px" }}>
                # Get in touch for collaborations and opportunities
              </div>

              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--accent-cyan)",
                  marginBottom: "8px",
                }}
              >
                ## Let&apos;s Work Together
              </div>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                I&apos;m open to full-time roles, internships, freelance projects, or just
                a conversation about full-stack development, real-time systems, or
                building things that scale.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Email */}
                <div
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    padding: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Mail size={14} style={{ color: "var(--accent-cyan)" }} />
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-secondary)" }}>
                        Email
                      </div>
                      <a
                        href={`mailto:${EMAIL}`}
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-primary)",
                          textDecoration: "none",
                        }}
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: copied ? "var(--accent-green)" : "var(--text-secondary)",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                    }}
                    aria-label="Copy email"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone */}
                <div
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    padding: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Phone size={14} style={{ color: "var(--accent-green)" }} />
                  <div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-secondary)" }}>
                      Phone
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-primary)" }}>
                      +91 9732811889
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    padding: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <MapPin size={14} style={{ color: "var(--accent-yellow)" }} />
                  <div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-secondary)" }}>
                      Location
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-primary)" }}>
                      Kolkata, West Bengal, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: social links */}
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--accent-yellow)",
                  marginBottom: "16px",
                }}
              >
                $ ls social/
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  {
                    Icon: GithubIcon,
                    label: "GitHub",
                    handle: "github.com/rayAritra",
                    href: "https://github.com/rayAritra",
                    color: "var(--text-primary)",
                  },
                  {
                    Icon: LinkedinIcon,
                    label: "LinkedIn",
                    handle: "linkedin.com/in/aritra-ray",
                    href: "https://linkedin.com/in/aritra-ray",
                    color: "var(--accent-cyan)",
                  },
                  {
                    Icon: ExternalLink,
                    label: "Live Work",
                    handle: "airedify.in",
                    href: "https://airedify.in",
                    color: "var(--accent-green)",
                  },
                ].map(({ Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "8px",
                      padding: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      textDecoration: "none",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = color;
                      (e.currentTarget as HTMLElement).style.background = `${color}08`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
                      (e.currentTarget as HTMLElement).style.background = "var(--bg-tertiary)";
                    }}
                  >
                    <Icon size={14} style={{ color }} />
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-secondary)" }}>
                        {label}
                      </div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-primary)" }}>
                        {handle}
                      </div>
                    </div>
                    <ExternalLink
                      size={12}
                      style={{ color: "var(--text-secondary)", marginLeft: "auto" }}
                    />
                  </a>
                ))}
              </div>

              {/* Terminal output style availability */}
              <div
                style={{
                  marginTop: "20px",
                  padding: "14px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  borderLeft: "3px solid var(--accent-green)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "4px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--accent-green)",
                      animation: "blink 2s ease infinite",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--accent-green)",
                      fontWeight: 600,
                    }}
                  >
                    Available for opportunities
                  </span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                  Open to full-time, internship &amp; freelance roles
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
