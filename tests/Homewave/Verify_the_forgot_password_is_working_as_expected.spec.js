import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.homewave.io/');
  await page.getByRole('link', { name: 'Sign Up / Login' }).click();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByLabel('Email address*').fill('zazri@rapptrlabs.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Check your email/);
});