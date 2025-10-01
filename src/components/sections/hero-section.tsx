import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-muted py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              {portfolioData.personal.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-4 text-2xl font-semibold text-primary sm:text-3xl">
              {portfolioData.personal.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground/70">
              {portfolioData.personal.bio}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#contact">
                <Button size="lg" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Entre em Contato
                </Button>
              </Link>

              <Link
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
              </Link>

              <Link
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
