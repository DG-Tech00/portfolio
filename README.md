# 🚀 Portfolio - Douglas Souza

Portfolio profissional desenvolvido com as tecnologias mais modernas do mercado.

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **EmailJS** - Envio de emails
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

## 🚀 Como Executar

```bash
# Instalar dependências
yarn install

# Desenvolvimento
yarn dev

# Build de produção
yarn build

# Executar produção
yarn start
```

## 📝 Configuração

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
NEXT_PUBLIC_SITE_URL=https://seusite.com
```

## 🧪 Testes

### Testes Unitários (Jest + Testing Library)

```bash
# Modo watch (desenvolvimento)
yarn test

# Modo CI (uma vez)
yarn test:ci

# Com cobertura
yarn test:ci --coverage
```

### Testes E2E (Playwright)

```bash
# Rodar todos os testes E2E
yarn test:e2e

# Rodar com interface gráfica
yarn test:e2e:ui

# Rodar em modo debug
yarn test:e2e --debug
```

## 📄 Licença

© 2025 Douglas Souza. Todos os direitos reservados.
