import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "./contact-form";
import { portfolioData } from "@/data/portfolio-data";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
            Entre em Contato
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-foreground/70">
            Fique à vontade para entrar em contato comigo através do formulário
            abaixo ou pelos meios de contato direto.
          </p>
        </FadeIn>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Formulário */}
          <FadeIn delay={0.2}>
            <div className="rounded-lg border border-border bg-muted p-8">
              <ContactForm />
            </div>
          </FadeIn>

          {/* Informações de Contato */}
          <FadeIn delay={0.3}>
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-2xl font-semibold text-foreground">
                  Informações de Contato
                </h3>
                <p className="mb-6 text-foreground/70">
                  Estou sempre aberto a novas oportunidades e colaborações.
                  Entre em contato!
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-foreground/70">
                      {portfolioData.personal.email}
                    </p>
                  </div>
                </Link>

                <Link
                  href="tel:+5511950592791"
                  className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <p className="text-sm text-foreground/70">
                      (11) 95059-2791
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-foreground">
                  Redes Sociais
                </h4>
                <div className="flex gap-4">
                  <Link
                    href={portfolioData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>

                  <Link
                    href={portfolioData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
