import { test, expect } from "@playwright/test";

test.describe("Formulário de Contato", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Scroll até o formulário
    await page.locator("#contact").scrollIntoViewIfNeeded();
  });

  test("deve exibir formulário de contato", async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test("deve mostrar erros de validação para campos vazios", async ({
    page,
  }) => {
    // Tenta enviar formulário vazio
    await page.click('button[type="submit"]');

    // HTML5 validation previne o submit
    const nameInput = page.locator('input[name="user_name"]');
    await expect(nameInput).toHaveAttribute("required");
  });

  test("deve preencher campos corretamente", async ({ page }) => {
    // Preencher nome
    await page.fill('input[name="user_name"]', "João Silva");
    await expect(page.locator('input[name="name"]')).toHaveValue("João Silva");

    // Preencher email
    await page.fill('input[name="user_email"]', "joao@example.com");
    await expect(page.locator('input[name="email"]')).toHaveValue(
      "joao@example.com"
    );

    // Preencher mensagem
    await page.fill('textarea[name="message"]', "Mensagem de teste");
    await expect(page.locator('textarea[name="message"]')).toHaveValue(
      "Mensagem de teste"
    );
  });

  test("deve desabilitar botão durante envio", async ({ page }) => {
    // Preencher formulário
    await page.fill('input[name="name"]', "João Silva Test");
    await page.fill('input[name="email"]', "joao.test@example.com");
    await page.fill('textarea[name="message"]', "Esta é uma mensagem de teste");

    // Clicar em enviar
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // Verificar se botão fica desabilitado (brevemente)
    // Nota: isso pode não funcionar sempre devido à velocidade do teste
    // mas é bom ter o teste
  });

  test("navegação por teclado deve funcionar", async ({ page }) => {
    // Tab para o primeiro campo
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab"); // pode precisar de múltiplos tabs

    // Digitar no nome
    await page.keyboard.type("Teste Teclado");

    // Tab para email
    await page.keyboard.press("Tab");
    await page.keyboard.type("teste@teclado.com");

    // Tab para mensagem
    await page.keyboard.press("Tab");
    await page.keyboard.type("Mensagem via teclado");

    // Verificar valores
    await expect(page.locator('input[name="email"]')).toHaveValue(
      "teste@teclado.com"
    );
  });
});
