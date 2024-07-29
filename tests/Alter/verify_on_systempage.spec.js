import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://alter-web-staging-git-awd-406-rapptr-labs.vercel.app/');
  await page.getByRole('link', { name: 'System' }).click();
  await page.getByRole('button', { name: 'previous' }).first().click();
  await page.getByRole('button', { name: 'previous' }).nth(1).click();
  await page.getByRole('button', { name: 'previous' }).nth(2).click();
  await page.getByRole('button', { name: 'close' }).nth(2).click();
  await page.getByRole('button', { name: 'previous' }).nth(3).click();
  await page.getByRole('button', { name: 'close' }).nth(3).click();
});