import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shobizzy-dev.vercel.app/');
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByLabel('Email address*').click();
  await page.getByLabel('Email address*').fill('zazri@rapptrlabs.com');
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('Ij@y921023');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
});