import type { Metadata } from "next";
import "./globals.css";
import TerminalCursor from "@/components/TerminalCursor";
import NpxTerminal from "@/components/NpxTerminal";
import ProgressBar from "@/components/ProgressBar";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

export const metadata: Metadata = {
  title: "Aritra Ray — Full-Stack Developer & CS Student",
  description:
    "Portfolio of Aritra Ray — Full-Stack Developer, CS Engineering student at MAKAUT. Building production EdTech platforms, real-time systems, and AI-powered tooling.",
  keywords: [
    "Aritra Ray",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "EdTech",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full">
        <ProgressBar />
        <TerminalCursor />
        <NpxTerminal />
        <KonamiEasterEgg />
        {children}
      </body>
    </html>
  );
}
