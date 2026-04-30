"use client";
import { ReactNode } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolioData } from "@/data/portfolio-data";
import {
  Code2,
  Database,
  Layout,
  Settings,
  Terminal,
  Globe,
} from "lucide-react";

const categoryIcons: Record<string, ReactNode> = {
  Backend: <Database className="h-5 w-5" />,
  Frontend: <Layout className="h-5 w-5" />,
  Language: <Terminal className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Tools: <Settings className="h-5 w-5" />,
  DevOps: <Globe className="h-5 w-5" />,
  Testing: <Code2 className="h-5 w-5" />,
};

export function SkillsSection() {
  const skillsByCategory = portfolioData.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill.name);
      return acc;
    },
    {} as Record<string, string[]>
  );

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-lg text-foreground/60">
              Conjunto de tecnologias e ferramentas que utilizo para construir
              soluções modernas e eficientes.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, skills], index) => (
            <FadeIn key={category} delay={index * 0.1}>
              <div className="h-full p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all hover:shadow-lg group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {categoryIcons[category] || (
                      <Settings className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="font-bold text-lg">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-muted text-foreground/70 text-sm border border-transparent hover:border-primary/30 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
