import { portfolioData } from "@/data/portfolio-data";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                {portfolioData.personal.name}
              </span>
            </Link>
            <p className="max-w-sm text-foreground/60 leading-relaxed">
              Desenvolvedor Full Stack especializado em construir soluções
              escaláveis e experiências digitais excepcionais.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: <Github className="h-5 w-5" />,
                  href: portfolioData.social.github,
                  label: "GitHub",
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  href: portfolioData.social.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  href: `mailto:${portfolioData.personal.email}`,
                  label: "Email",
                },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border bg-background text-foreground/60 transition-all hover:border-primary hover:text-primary"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#about"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <span className="text-foreground/60">Privacidade</span>
              </li>
              <li>
                <span className="text-foreground/60">Termos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-foreground/40 text-center md:text-left">
            © {currentYear} {portfolioData.personal.name}. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-1 text-sm text-foreground/40">
            <span>Desenvolvido com</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>por Douglas Souza</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
