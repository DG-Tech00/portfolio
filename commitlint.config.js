module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Nova funcionalidade
        "fix", // Correção de bug
        "docs", // Documentação
        "style", // Formatação
        "refactor", // Refatoração
        "perf", // Performance
        "test", // Testes
        "chore", // Manutenção
        "ci", // CI/CD
        "build", // Build
      ],
    ],
  },
};
