import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
