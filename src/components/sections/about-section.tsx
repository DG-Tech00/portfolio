"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { portfolioData } from "@/data/portfolio-data";
import { User, Code2, Rocket, Brain } from "lucide-react";
import Image from "next/image";

const infoCards = [
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    title: "Desenvolvimento",
    description: "Sistemas robustos e escaláveis com foco em performance.",
  },
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Arquitetura",
    description: "Aplicação de Clean Architecture e princípios SOLID.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: "Entrega",
    description: "Foco em automação e valor contínuo para o negócio.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <User className="h-4 w-4" />
                <span>Sobre Mim</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Apaixonado por transformar ideias em{" "}
                <span className="text-primary">realidade digital</span>.
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {portfolioData.personal.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                {infoCards.map((card, index) => (
                  <div key={index} className="space-y-2">
                    <div className="mb-4 p-2 w-fit rounded-lg bg-background shadow-sm border border-border">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="relative group">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted border border-border shadow-2xl">
              <Image
                src={portfolioData.personal.image}
                alt={portfolioData.personal.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 p-6 bg-background border border-border rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm font-medium text-foreground/60">
                Anos de Experiência
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
