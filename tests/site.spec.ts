import { test, expect } from '@playwright/test';

// GitHub is fetched in the browser; stub it so the suite does not depend on the network.
test.beforeEach(async ({ page }) => {
  await page.route('https://api.github.com/**', (r) =>
    r.fulfill({
      json: [
        {
          id: 1,
          name: 'Omer-Bag-Portfolio',
          description: 'Portfolio',
          html_url: 'https://github.com/omerbag-9/Omer-Bag-Portfolio',
          homepage: null,
          language: 'TypeScript',
          stargazers_count: 0,
          fork: false,
          pushed_at: new Date().toISOString()
        }
      ]
    })
  );
  await page.route('https://github-contributions-api.jogruber.de/**', (r) => r.fulfill({ status: 503 }));
});

test('first screen says who and what', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/omer mustafa/i);
  await expect(page.getByText(/ISTQB-certified tester and technical delivery manager/).first()).toBeAttached();
  await expect(page.getByRole('link', { name: /start a project/i })).toBeInViewport();
});

test('start a project reaches contact', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /start a project/i }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator('#contact a[href^="mailto:omerbagprog@gmail.com"]')).toBeVisible();
});

test('all six projects are listed', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.project__title')).toHaveCount(6);
});

test('menu opens and navigates', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /open menu/i }).click();
  await page.locator('.sm-panel-item', { hasText: 'Experience' }).click();
  await expect(page).toHaveURL(/#experience$/);
});

test('GitHub repositories load', async ({ page }) => {
  await page.goto('/#github');
  await expect(page.locator('.repo__name').first()).toContainText(/omer bag portfolio/i);
});

test('no horizontal scroll on a phone', async ({ browser }) => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('/');
  await page.waitForTimeout(500);
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
