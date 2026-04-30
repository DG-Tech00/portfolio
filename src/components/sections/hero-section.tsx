"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8">
              <span>Disponível para novos projetos</span>
              <span className="ml-2 flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
              Building{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Scalable
              </span>{" "}
              Solutions
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-4 text-2xl font-semibold text-foreground/80 sm:text-3xl">
              {portfolioData.personal.name} — {portfolioData.personal.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-foreground/60 leading-relaxed">
              {portfolioData.personal.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#projects">
                <Button size="lg" className="h-12 px-8 rounded-full group">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <div className="flex gap-3">
                <Link
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>

                <Link
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>

                <Link
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-foreground/40 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
