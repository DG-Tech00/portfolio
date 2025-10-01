import { Metadata } from "next";
import { portfolioData } from "@/data/portfolio-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://douglassouza.dev";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${portfolioData.personal.name} - ${portfolioData.personal.role}`,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description: portfolioData.personal.bio,
  keywords: [
    "desenvolvedor",
    "full-stack",
    "nodejs",
    "typescript",
    "nestjs",
    "react",
    "nextjs",
    "portfolio",
    "backend",
    "frontend",
    "api",
    "microservices",
    ...portfolioData.skills.map((skill) => skill.name.toLowerCase()),
  ],
  authors: [
    {
      name: portfolioData.personal.name,
      url: siteUrl,
    },
  ],
  creator: portfolioData.personal.name,
  publisher: portfolioData.personal.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: `${portfolioData.personal.name} - ${portfolioData.personal.role}`,
    description: portfolioData.personal.bio,
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} - ${portfolioData.personal.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} - ${portfolioData.personal.role}`,
    description: portfolioData.personal.bio,
    images: [`${siteUrl}/images/twitter-image.jpg`],
    creator: "@douglassouza", // Atualize com seu Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};
