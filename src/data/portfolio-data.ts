export const portfolioData = {
  personal: {
    name: "Douglas Souza",
    role: "Desenvolvedor Full-Stack",
    bio: "Sou Desenvolvedor Full Stack com mais de 5 anos de experiência em engenharia de software, especializado em Node.js com TypeScript. Ao longo da minha trajetória, tenho atuado na construção de microserviços escaláveis, integração de sistemas complexos e desenvolvimento de soluções robustas para ambientes de alta performance. Tenho domínio em arquitetura de software, aplicando princípios como SOLID e Clean Architecture para garantir manutenibilidade e escalabilidade. Minha stack principal inclui NestJS no backend, bancos de dados relacionais (PostgreSQL, MySQL) e NoSQL (MongoDB), além de sistemas de mensageria como RabbitMQ e Redis. Atualmente, atuo como Desenvolvedor Full Stack Pleno, liderando revisões de código, promovendo boas práticas de desenvolvimento e acelerando a evolução técnica da equipe por meio de Pair Programming e mentoria. Tenho forte atuação na automação de processos e na entrega contínua de valor em ambientes ágeis.",
    description:
      "Entrego soluções escaláveis e de alta qualidade, com foco em arquitetura limpa, integração de sistemas e automação de processos. Lidero revisões de código e apoio o crescimento técnico da equipe por meio de Pair Programming e mentoria ativa.",
    image: "/images/foto_perfil.jpg",
    email: "douglasalvessouza0@gmail.com",
    github: "https://github.com/Douglas-00",
    linkedin: "https://www.linkedin.com/in/douglas-alves-de-souza-b3b901179/",
  },

  skills: [
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "NestJS", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "RabbitMQ", category: "Tools" },
    { name: "Redis", category: "Tools" },
    { name: "Docker", category: "DevOps" },
    { name: "Jest", category: "Testing" },
    { name: "Swagger", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "Python", category: "Language" },
    { name: "PHP", category: "Language" },
  ],

  projects: [
    {
      id: 1,
      title: "API-Transacoes-bancarias",
      description:
        "Este é um projeto de API de um sistema bancário desenvolvido com NestJS e Sequelize, projetado para gerenciar transações bancárias, incluindo depósito, saque e transferência entre contas. Ele suporta múltiplas transações concorrentes, garantindo a integridade do saldo das contas.",
      image: "/images/gateway_img.webp",
      tags: ["NestJS", "Prisma", "PostgreSQL"],
      github: "https://github.com/Douglas-00/API-Transacoes-bancarias",
      demo: null,
    },
    {
      id: 2,
      title: "Api-Pesquisa",
      description:
        "API para gerenciar pesquisas de satisfação de clientes com funcionalidades de criação de pesquisas, perguntas, respostas e exportação de respostas em CSV.",
      image: "/images/gateway_img.webp",
      tags: ["NestJS", "Prisma", "PostgreSQL"],
      github: "https://github.com/Douglas-00/Api-Pesquisa.git",
      demo: null,
    },
    {
      id: 3,
      title: "URL Shortener API",
      description:
        "Este é um serviço de encurtamento de URL com funcionalidade de contabilização de cliques, autenticação de usuários e gerenciamento de URLs encurtadas. O serviço foi implementado com Node.js, utilizando PostgreSQL para o armazenamento de dados e Redis para contabilizar os cliques.",
      image: "/images/gateway_img.webp",
      tags: ["NestJS", "Prisma", "PostgreSQL", "Redis"],
      github: "https://github.com/Douglas-00/Api-EncurtadorURLS.git",
      demo: null,
    },
    {
      id: 4,
      title: "Api-Gerenciador-de-Usuarios",
      description:
        "API de Gerenciamento de Usuários e Arquivos. Esta API foi desenvolvida usando o Node.js e o ORM Prisma. Ela oferece recursos para gerenciar usuários e arquivos, incluindo a criação, exclusão, atualização e listagem de usuários, consulta de informações de usuário na API pública do GitHub.",
      image: "/images/gateway_img.webp",
      tags: ["NestJS", "Prisma", "PostgreSQL"],
      github: "https://github.com/Douglas-00/ApiRest.git",
      demo: null,
    },
  ],

  social: {
    github: "https://github.com/Douglas-00",
    linkedin: "https://www.linkedin.com/in/douglas-alves-de-souza-b3b901179/",
  },
};

export type PortfolioData = typeof portfolioData;
export type Project = (typeof portfolioData.projects)[0];
export type Skill = (typeof portfolioData.skills)[0];
