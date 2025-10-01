import { FadeIn } from "@/components/ui/fade-in";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
            Meus Projetos
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.2}>
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            {portfolioData.projects.map((project) => (
              <StaggerItem key={project.id}>
                <article className="group h-full overflow-hidden rounded-lg border border-border bg-background transition-all hover:border-primary hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-semibold text-foreground">
                      {project.title}
                    </h3>

                    <p className="mb-4 line-clamp-3 text-foreground/70">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full gap-2">
                          <Github className="h-4 w-4" />
                          Código
                        </Button>
                      </Link>

                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button className="w-full gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
