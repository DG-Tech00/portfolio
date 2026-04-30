"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { portfolioData } from "@/data/portfolio-data";
import { Github, ExternalLink, FolderCode } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <FolderCode className="h-4 w-4" />
              <span>Projetos em Destaque</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Trabalhos Recentes
            </h2>
            <p className="text-lg text-foreground/60">
              Uma seleção de projetos onde apliquei meus conhecimentos em
              arquitetura e desenvolvimento.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all hover:shadow-2xl hover:-translate-y-1">
                {/* Image / Placeholder */}
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="secondary" className="gap-2">
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                      </Link>
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded-md bg-primary/5 border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm font-medium text-foreground/40">
                      Case Study
                    </span>
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-sm font-semibold text-primary flex items-center gap-1 hover:underline"
                    >
                      Ver detalhes <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <FadeIn delay={0.4}>
            <Link
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="rounded-full">
                Ver mais no GitHub
              </Button>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
