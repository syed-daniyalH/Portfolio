import { expect, test } from "@playwright/test";

test("homepage renders the key portfolio experience", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /building ai automation systems that reduce manual work/i,
    })
  ).toBeVisible();
  await expect(page.getByRole("navigation", { name: /primary/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /download resume/i }).first()).toBeVisible();

  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(page.locator("#contact")).toBeVisible();
  await expect(page.getByText(/let's build an automation system/i)).toBeVisible();
});

test("contact form validates input before submission", async ({ page }) => {
  await page.goto("/");

  await page.locator("#contact").scrollIntoViewIfNeeded();
  await page.getByLabel(/name/i).fill("Syed Muhammad Daniyal Haider");
  await page.getByLabel(/email/i).fill("invalid-email");
  await page.getByLabel(/project type/i).click();
  await page.getByRole("option", { name: "AI Automation" }).click();
  await page.getByLabel(/message/i).fill("Need help automating client operations.");

  await page.getByRole("button", { name: /send message/i }).click();

  await expect(
    page.getByText(/please enter a valid email address\./i)
  ).toBeVisible();
});
