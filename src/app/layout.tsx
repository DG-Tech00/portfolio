import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Douglas Souza - Desenvolvedor Full-Stack",
    template: "%s | Douglas Souza",
  },
  description:
    "Portfolio de Douglas Souza, desenvolvedor full-stack especializado em Node.js, TypeScript, NestJS e React. Mais de 5 anos de experiência.",
  keywords: [
    "desenvolvedor",
    "full-stack",
    "nodejs",
    "typescript",
    "nestjs",
    "react",
    "nextjs",
    "portfolio",
  ],
  authors: [{ name: "Douglas Souza", url: "https://douglassouza.dev" }],
  creator: "Douglas Souza",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://douglassouza.dev"
  ),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://douglassouza.dev",
    title: "Douglas Souza - Desenvolvedor Full-Stack",
    description:
      "Portfolio profissional com projetos e informações de contato.",
    siteName: "Douglas Souza Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Souza - Desenvolvedor Full-Stack",
    description:
      "Portfolio profissional com projetos e informações de contato.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
