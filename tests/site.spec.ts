import { test, expect } from '@playwright/test';

test('first screen says who and what', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/omer mustafa/i);
  await expect(page.getByText('I build, test and deliver software for Canadian teams')).toBeInViewport();
  await expect(page.locator('.hero__action .btn')).toBeInViewport();
});

test('start a project reaches the router', async ({ page }) => {
  await page.goto('/');
  await page.locator('.hero__action .btn').click();
  await expect(page).toHaveURL(/#process$/);
  await expect(page.getByLabel('Describe your project or problem')).toBeVisible();
});

test('every project opens its case notes', async ({ page }) => {
  await page.goto('/');
  const names = page.locator('.work__name');
  const count = await names.count();
  expect(count).toBe(6);
  for (let i = 0; i < count; i++) {
    await names.nth(i).click();
    const dialog = page.locator('dialog.case');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('heading', { name: 'What I did' })).toBeVisible();
    await dialog.getByRole('button', { name: 'Close' }).click();
    await expect(dialog).toBeHidden();
  }
});

test('a brief routes to matching skills', async ({ page }) => {
  await page.goto('/#process');
  const brief = page.getByLabel('Describe your project or problem');
  await brief.fill('We need Playwright automation and our ERP integration keeps dropping orders.');
  const on = page.locator('.router__skill[data-on="true"]');
  await expect(on.filter({ hasText: 'Automation' })).toHaveCount(1);
  await expect(on.filter({ hasText: 'Integrations' })).toHaveCount(1);
  await expect(page.locator('.router__plan li')).not.toHaveCount(0);
});

test('email draft carries the brief', async ({ page }) => {
  await page.goto('/#process');
  await page.getByLabel('Describe your project or problem').fill('Our releases keep breaking before launch.');
  const href = await page.getByRole('link', { name: /send this brief/i }).getAttribute('href');
  expect(href).toMatch(/^mailto:omerbagprog@gmail\.com\?/);
  expect(decodeURIComponent(href!)).toContain('Our releases keep breaking before launch.');
});

test('no horizontal scroll on a phone', async ({ browser }) => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
  await page.close();
});

test('reduced motion keeps all content', async ({ browser }) => {
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  await page.goto('/');
  const hidden = await page.evaluate(
    () => [...document.querySelectorAll('.rv')].filter((e) => getComputedStyle(e).opacity !== '1').length
  );
  expect(hidden).toBe(0);
  await expect(page.getByRole('heading', { name: 'Have a project?' })).toBeAttached();
  await page.close();
});

test('CV, LinkedIn and GitHub links resolve', async ({ page, request }) => {
  await page.goto('/');
  const cv = await page.locator('a[download]').first().getAttribute('href');
  const res = await request.get(new URL(cv!, page.url()).toString());
  expect(res.ok()).toBeTruthy();
  expect(res.headers()['content-type']).toContain('pdf');
  await expect(page.locator('a[href^="https://www.linkedin.com/in/"]').first()).toBeAttached();
  await expect(page.locator('a[href^="https://github.com/omerbag-9"]').first()).toBeAttached();
});
