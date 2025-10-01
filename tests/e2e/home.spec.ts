import { test, expect } from "@playwright/test";

test.describe("Página Home", () => {
  test("deve carregar e exibir o conteúdo principal", async ({ page }) => {
    await page.goto("/");

    // Verifica título da página
    await expect(page).toHaveTitle(/Douglas Souza/);

    // Verifica se o header está presente
    await expect(page.locator("nav")).toBeVisible();

    // Verifica se as seções principais estão presentes
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("navegação deve funcionar corretamente", async ({ page }) => {
    await page.goto("/");

    // Clica no link "Sobre"
    await page.click('a[href="#about"]');
    await expect(page.locator("#about")).toBeInViewport();

    // Clica no link "Projetos"
    await page.click('a[href="#projects"]');
    await expect(page.locator("#projects")).toBeInViewport();

    // Clica no link "Contato"
    await page.click('a[href="#contact"]');
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("theme toggle deve funcionar", async ({ page }) => {
    await page.goto("/");

    // Pega o botão de theme toggle
    const themeButton = page.locator('[aria-label="Alternar tema"]');
    await expect(themeButton).toBeVisible();

    // Clica no botão de toggle
    await themeButton.click();

    // Verifica se o tema mudou (classe dark ou light no html)
    const html = page.locator("html");
    const classList = await html.getAttribute("class");
    expect(classList).toContain(/dark|light/);
  });

  test("deve ser responsivo", async ({ page }) => {
    await page.goto("/");

    // Testa em mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator("nav")).toBeVisible();

    // Testa em tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator("nav")).toBeVisible();

    // Testa em desktop
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator("nav")).toBeVisible();
  });
});
