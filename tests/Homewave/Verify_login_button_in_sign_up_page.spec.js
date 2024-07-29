import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.homewave.io/');
  await page.getByRole('link', { name: 'Sign Up / Login' }).click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();

  //  a title "to contain" a substring.
  await expect(page).toHaveTitle(/Log in/);
});