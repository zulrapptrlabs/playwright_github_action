import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.homewave.io/');
  await page.getByRole('link', { name: 'Sign Up / Login' }).click();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByRole('button', { name: 'Back to next-app' }).click();
  //await page.getByText('Log in to homewave to').click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Log in | next-app/);
});