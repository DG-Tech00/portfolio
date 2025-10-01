import { FadeIn } from "@/components/ui/fade-in";
import { OptimizedImage } from "@/components/ui/optimized-image";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";
import { portfolioData } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
            Sobre Mim
          </h2>
        </FadeIn>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="left">
            <div className="relative mx-auto max-w-md">
              <OptimizedImage
                src="/images/foto_perfil.jpg"
                alt={`Foto de ${portfolioData.personal.name}`}
                width={400}
                height={400}
                className="rounded-2xl shadow-xl"
                priority
              />
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn direction="right" delay={0.2}>
              <h3 className="text-2xl font-semibold text-foreground">
                Olá, eu sou{" "}
                <span className="text-primary">
                  {portfolioData.personal.name}
                </span>
              </h3>
              <h4 className="text-xl font-medium text-foreground/80">
                {portfolioData.personal.role}
              </h4>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <p className="text-lg text-foreground/80">
                {portfolioData.personal.bio}
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <p className="text-lg text-foreground/80">
                {portfolioData.personal.description}
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.5}>
              <div className="pt-6">
                <h4 className="mb-4 text-xl font-semibold text-foreground">
                  Minhas Habilidades:
                </h4>
                <StaggerContainer staggerDelay={0.05}>
                  <div className="flex flex-wrap gap-3">
                    {portfolioData.skills.map((skill) => (
                      <StaggerItem key={skill.name}>
                        <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:scale-105">
                          {skill.name}
                        </span>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
