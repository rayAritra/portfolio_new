"use client";

import { ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { GithubIcon } from "./SocialIcons";
import { useFadeUp } from "./useFadeUp";

const projects = [
  {
    filename: "lumio.sh",
    title: "Lumio",
    readme: "Browser-based app builder — run Node.js and React projects entirely in the browser via WebContainers API. AI-driven code generation from prompts in under 3 seconds. Zero local setup required.",
    tags: ["browser-ide", "webcontainers", "ai-codegen", "+4"],
    stack: ["TypeScript", "Node.js", "React", "Tailwind CSS", "WebContainers API", "AI"],
    github: "https://github.com/rayAritra/lumio",
    demo: undefined,
    featured: true,
    highlights: [
      "Eliminated 100% of local setup overhead",
      "AI scaffolding from prompt in <3 seconds",
      "Live preview + hot reload + virtual file tree",
      "Async WebContainer boot sequencing & file system diffing",
    ],
  },
  {
    filename: "airedify.sh",
    title: "AirEdify — EdTech Platform",
    readme: "Production EdTech platform serving 500+ students across 2+ course categories with book sales. Full Razorpay integration (webhooks, orders, verification), AWS SES transactional email, and ISR for sub-1-second page loads.",
    tags: ["edtech", "production", "payments", "+5"],
    stack: ["Next.js 14", "Strapi CMS", "MongoDB", "Razorpay", "AWS SES"],
    github: "https://github.com/rayAritra",
    demo: "https://airedify.in",
    featured: true,
    highlights: [
      "500+ active users, live in production",
      "60% reduction in page load time via ISR",
      "100% elimination of manual follow-up workflows",
      "1,000+ transactional emails dispatched/month",
      "~30% reduction in failed transactions",
    ],
  },
  {
    filename: "uber_clone.sh",
    title: "Uber Clone",
    readme: "Full-stack ride-hailing app covering fare calculation, booking, and trip completion for 2 user roles (rider + driver). Real-time ride updates with Socket.IO, JWT auth with role-based route guards, and MongoDB geolocation indexing.",
    tags: ["real-time", "full-stack", "geolocation", "+4"],
    stack: ["Node.js", "Express", "MongoDB", "React", "Socket.IO", "JWT"],
    github: "https://github.com/rayAritra/uber_new",
    demo: undefined,
    highlights: [
      "Sub-second real-time latency (request → accept → en-route → completed)",
      "10+ secured API endpoints with JWT + RBAC",
      "4+ MongoDB collections with geolocation indexing",
    ],
  },
  {
    filename: "chess_game.sh",
    title: "Chess Game",
    readme: "Multiplayer chess with WebSocket connections for 2 concurrent players per session. Full server-side move validation via chess.js — castling, en passant, check/checkmate — with zero client-side trust.",
    tags: ["multiplayer", "websockets", "game", "+3"],
    stack: ["Node.js", "Express", "Socket.IO", "chess.js"],
    github: "https://github.com/rayAritra/chessGame",
    demo: "https://chess-game-three-snowy.vercel.app",
    highlights: [
      "Server-side validation for all chess rules",
      "Synchronized board state diffs after every validated move",
      "WebSocket sessions for 2 concurrent players",
    ],
  },
  {
    filename: "reviewiq.sh",
    title: "ReviewIQ (Hackathon)",
    readme: "AI SaaS where Gemini drafts answers and human reviewers approve before delivery. Multi-tenant RBAC with Auth0 (Admin & Reviewer roles), Next.js 14 APIs, Prisma + PostgreSQL with multi-tenant data isolation. Built in 24 hours.",
    tags: ["ai-saas", "multi-tenant", "hackathon", "+4"],
    stack: ["Next.js 14", "Auth0", "Prisma", "PostgreSQL", "Gemini AI"],
    github: "https://github.com/rayAritra",
    demo: "https://diversion-hackaut.vercel.app",
    highlights: [
      "Top 10 / 200+ teams at Diversion Hackathon",
      "Multi-tenant RBAC with Auth0",
      "Built & demoed in 24 hours",
    ],
  },
];

export default function Projects() {
  const ref = useFadeUp();

  return (
    <section id="projects" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      <div ref={ref} className="fade-up">
        <div className="section-heading">ls projects/</div>

        <div className="prompt-line" style={{ marginBottom: "28px" }}>
          <span className="prompt-user">user</span>
          <span className="prompt-sep">@</span>
          <span className="prompt-host">portfolio</span>
          <span className="prompt-sep">:~$</span>
          <span className="prompt-dollar" />
          <span className="prompt-command">
            ls projects/ &nbsp;
            <span style={{ color: "var(--text-secondary)" }}># {projects.length} featured repositories</span>
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.filename} project={project} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="https://github.com/rayAritra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: "inline-flex" }}
          >
            <GithubIcon size={14} />
            git clone --all-projects → github.com/rayAritra
          </a>
        </div>
      </div>
    </section>
  );
}
