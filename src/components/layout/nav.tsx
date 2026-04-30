"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { portfolioData } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Menu principal"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white transition-transform group-hover:scale-110">
            <Code2 className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            {portfolioData.personal.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary hover:bg-primary/5 focus-visible:outline-none group"
              >
                {item.label}
                <span className="absolute inset-x-4 bottom-1 h-0.5 scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link href="#contact" className="hidden sm:block">
            <Button size="sm" className="rounded-full px-5">
              Vamos conversar
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden rounded-xl"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
            <span className="sr-only">
              {isOpen ? "Fechar menu" : "Abrir menu"}
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[72px] z-50 bg-background/95 backdrop-blur-lg md:hidden animate-in fade-in slide-in-from-top-4"
        >
          <ul className="flex flex-col items-center justify-center space-y-8 h-full px-4 pb-20">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-3xl font-bold text-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <Button size="lg" className="rounded-full px-8">
                  Vamos conversar
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
