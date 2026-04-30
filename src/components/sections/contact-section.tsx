"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "./contact-form";
import { portfolioData } from "@/data/portfolio-data";
import { Mail, Github, Linkedin, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <MessageSquare className="h-4 w-4" />
              <span>Contato</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Vamos construir algo{" "}
              <span className="text-primary">incrível</span>?
            </h2>
            <p className="text-lg text-foreground/60">
              Estou sempre aberto a novas oportunidades, colaborações ou apenas
              para bater um papo sobre tecnologia.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 items-start">
          {/* Informações de Contato */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Informações de Contato
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  Sinta-se à vontade para me enviar uma mensagem. Responderei o
                  mais rápido possível.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-4">
              <FadeIn delay={0.2}>
                <Link
                  href={`mailto:${portfolioData.personal.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/40">
                      Email
                    </p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {portfolioData.personal.email}
                    </p>
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Link
                  href="tel:+5511950592791"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/40">
                      Telefone
                    </p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      (11) 95059-2791
                    </p>
                  </div>
                </Link>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="pt-6">
                <h4 className="mb-4 font-bold text-foreground">Siga-me</h4>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <Linkedin className="h-5 w-5" />,
                      href: portfolioData.social.linkedin,
                      label: "LinkedIn",
                    },
                    {
                      icon: <Github className="h-5 w-5" />,
                      href: portfolioData.social.github,
                      label: "GitHub",
                    },
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-foreground/60 transition-all hover:border-primary hover:text-primary hover:shadow-md"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.5}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
