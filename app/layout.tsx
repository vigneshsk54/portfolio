import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vigneshkumars.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Vignesh Kumar S",
    "Full Stack Developer",
    "AI Engineer",
    "Software Engineer Portfolio",
    "React Developer",
    "Next.js Developer",
    "Phishing Detection Research",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    siteName: profile.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    url: siteUrl,
    sameAs: [profile.linkedin, profile.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sri Shakthi Institute of Engineering and Technology",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-void text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
