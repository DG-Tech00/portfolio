# Portfolio V2 - Douglas Souza

Portfolio profissional desenvolvido com Next.js 15, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Formulários**: React Hook Form + Zod
- **Email**: EmailJS
- **UI Components**: Radix UI
- **Qualidade de Código**: ESLint, Prettier, Husky, Commitlint

## 📦 Instalação

```bash
# Instalar dependências
yarn install

# ou
npm install
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev

# Build
yarn build

# Produção
yarn start

# Lint
yarn lint

# Formatação
yarn format

# Type Check
yarn type-check
```

## ⚙️ Configuração

1. Copie o arquivo `.env.example` para `.env.local`
2. Preencha as variáveis de ambiente necessárias (EmailJS)

## 📁 Estrutura do Projeto

```
portfolio-v2/
├── src/
│   ├── app/              # App Router (Next.js 15)
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes de UI reutilizáveis
│   │   ├── layout/      # Componentes de layout
│   │   └── sections/    # Seções da página
│   ├── lib/             # Utilitários e configurações
│   ├── providers/       # Context Providers
│   ├── services/        # Serviços (API, email, etc)
│   ├── styles/          # Estilos globais e tokens
│   └── hooks/           # Custom hooks
├── public/              # Arquivos estáticos
└── ...
```

## 🎨 Design System

O projeto utiliza Design Tokens para manter consistência visual:

- Cores (light/dark mode)
- Espaçamentos
- Tipografia
- Sombras
- Border Radius
- Transições

## 📝 Convenções de Commit

Este projeto usa Conventional Commits:

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `perf:` Performance
- `test:` Testes
- `chore:` Manutenção

## 📄 Licença

Este projeto é privado e de uso pessoal.
