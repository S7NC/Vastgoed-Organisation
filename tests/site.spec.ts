import { expect, test } from "@playwright/test";
import { content, locales } from "../app/data/content";

for (const { code } of locales) {
  const path = code === "nl" ? "/" : `/${code}`;
  const t = content[code];

  test(`${code}: localized page, metadata, images and no browser errors`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "warning" && /hydration/i.test(message.text()))
        errors.push(message.text());
    });
    await page.goto(path);
    await expect(page.locator("html")).toHaveAttribute("lang", code);
    await expect(page).toHaveTitle(t.meta.title);
    await expect(page.locator("h1")).toContainText(t.hero.line1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://vastgoed.org${path}`,
    );
    await expect(page.locator("link[hreflang]")).toHaveCount(5);
    await expect(page.locator(".question")).toHaveCount(9);
    await expect(page.locator(".hero-image")).toBeVisible();
    expect(
      await page
        .locator(".hero-image")
        .evaluate(
          (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
        ),
    ).toBe(true);
    await page.locator(".question").first().locator("summary").click();
    await expect(page.locator(".question").first()).toHaveAttribute("open", "");
    await expect(page.locator(".destination .button")).toHaveAttribute(
      "href",
      "https://vastgoed.net/",
    );
    expect(errors).toEqual([]);
  });

  test(`${code}: mobile layout and navigation`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(path);
    await expect(page.locator(".mobile-toggle")).toBeVisible();
    await page.locator(".mobile-toggle").click();
    await expect(page.locator("#mobile-navigation")).toBeVisible();
    await page.locator('#mobile-navigation a[href="#developers"]').click();
    await expect(page.locator("#mobile-navigation")).toHaveCount(0);
    await expect(page).toHaveURL(
      new RegExp(`${code === "nl" ? "/" : "/" + code}#developers$`),
    );
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });

  test(`${code}: no overflow at phone, tablet and desktop widths`, async ({
    page,
  }) => {
    await page.goto(path);
    for (const width of [320, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `Horizontal overflow at ${width}px`,
      ).toBe(true);
    }
  });
}

test("price simulation updates both sites and resets", async ({ page }) => {
  await page.goto("/en");
  await expect(page.locator(".demo-channels strong").first()).toContainText(
    "395.000",
  );
  await page.getByRole("button", { name: content.en.agents.try }).click();
  await expect(page.locator(".demo-status")).toContainText(
    content.en.agents.updated,
  );
  for (const price of await page.locator(".demo-channels strong").all())
    await expect(price).toContainText("379.000");
  await expect(page.locator(".property-price")).toContainText("379.000");
  await page.getByRole("button", { name: content.en.agents.reset }).click();
  await expect(page.locator(".property-price")).toContainText("395.000");
});

test("language switch preserves section and updates client-side metadata", async ({
  page,
}) => {
  await page.goto("/#agents");
  await page.locator(".language-trigger").click();
  await page
    .locator(".language-options")
    .getByRole("link", { name: "English" })
    .click();
  await expect(page).toHaveURL("/en#agents");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page).toHaveTitle(content.en.meta.title);
  await page.locator(".language-trigger").click();
  await page.keyboard.press("Escape");
  await expect(page.locator(".language-options")).toHaveCount(0);
});

test("JSON examples are valid and copyable", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/en");
  const request = JSON.parse(
    await page.locator(".code-panel code").innerText(),
  );
  expect(request).toEqual(["REQ", "vastgoed", { kinds: [30402], limit: 20 }]);
  await page
    .getByRole("button", { name: content.en.developers.copy, exact: true })
    .click();
  await expect(page.getByRole("status")).toContainText(
    content.en.developers.copied,
  );
  expect(
    JSON.parse(await page.evaluate(() => navigator.clipboard.readText())),
  ).toEqual(request);
  await page
    .getByRole("button", { name: content.en.developers.tabEvent, exact: true })
    .click();
  const event = JSON.parse(await page.locator(".code-panel code").innerText());
  expect(event.kind).toBe(30402);
  expect(event.tags).toContainEqual(["price", "395000", "EUR"]);
});

test("unsupported languages return 404", async ({ page }) => {
  const response = await page.goto("/es");
  expect(response?.status()).toBe(404);
});

test("desktop and narrow mobile visual checks", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: testInfo.outputPath("desktop.png"),
    fullPage: true,
  });
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto("/de");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: testInfo.outputPath("mobile.png"),
    fullPage: true,
  });
});
