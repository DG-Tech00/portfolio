import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-foreground/70 md:text-left">
            © {currentYear} {portfolioData.personal.name}. Todos os direitos
            reservados.
          </p>

          <div className="flex gap-6">
            <Link
              href="#about"
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              Sobre
            </Link>
            <Link
              href="#projects"
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              Projetos
            </Link>
            <Link
              href="#contact"
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              Contato
            </Link>
          </div>

          <div className="flex gap-4">
            <Link
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
