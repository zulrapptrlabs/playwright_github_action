import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shobizzy-dev.vercel.app/');
  await page.getByRole('link', { name: 'Log In' }).click();
  await page.getByLabel('Email address*').fill('froggin@rapptrlabs.com');
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('thisHURT$0');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.goto('https://shobizzy-dev.vercel.app/feed');
  await page.getByRole('link', { name: 'Grump Srump', exact: true }).click();
  await page.getByRole('link', { name: 'Grump Srump', exact: true }).click();
});