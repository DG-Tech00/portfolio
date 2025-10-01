import { portfolioData } from "@/data/portfolio-data";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.role,
    description: portfolioData.personal.bio,
    image: portfolioData.personal.image,
    email: portfolioData.personal.email,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://douglassouza.dev",
    sameAs: [portfolioData.social.github, portfolioData.social.linkedin],
    knowsAbout: portfolioData.skills.map((skill) => skill.name),
    alumniOf: {
      "@type": "Organization",
      name: "Desenvolvedor Full-Stack",
    },
    workExample: portfolioData.projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: project.github,
      keywords: project.tags.join(", "),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
