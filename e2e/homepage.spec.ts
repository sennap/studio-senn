import { test, expect } from "@playwright/test"

test.describe("Homepage", () => {
  test("loads and displays hero section", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("text=Pet Photography")).toBeVisible()
    await expect(page.locator("text=Book a Session")).toBeVisible()
  })

  test("displays portfolio photos", async ({ page }) => {
    await page.goto("/")
    const images = page.locator("section").last().locator("img")
    await expect(images.first()).toBeVisible()
  })

  test("navigates to galleries page", async ({ page }) => {
    await page.goto("/")
    await page.click("text=Galleries")
    await expect(page).toHaveURL("/galleries")
  })

  test("navigates to about page", async ({ page }) => {
    await page.goto("/")
    await page.click("text=About")
    await expect(page).toHaveURL("/about")
  })

  test("navigates to contact page", async ({ page }) => {
    await page.goto("/")
    await page.click("text=Contact")
    await expect(page).toHaveURL("/contact")
  })
})

test.describe("Lightbox", () => {
  test("opens on photo click and navigates", async ({ page }) => {
    await page.goto("/")
    const photoButton = page.locator("section").last().locator("button").first()
    await photoButton.click()

    await expect(page.getByLabel("Close lightbox")).toBeVisible()
    await expect(page.locator("text=1 /")).toBeVisible()

    await page.getByLabel("Next photo").click()
    await expect(page.locator("text=2 /")).toBeVisible()

    await page.getByLabel("Close lightbox").click()
    await expect(page.getByLabel("Close lightbox")).not.toBeVisible()
  })
})

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test("hamburger menu works", async ({ page }) => {
    await page.goto("/")
    await page.getByLabel("Toggle menu").click()
    await expect(page.locator("text=Work")).toBeVisible()
  })
})
