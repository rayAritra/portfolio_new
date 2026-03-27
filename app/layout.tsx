import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
