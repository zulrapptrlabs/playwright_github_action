import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shobizzy-dev.vercel.app/');
  await page.getByRole('link', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //await page.getByText('Check Your Email').click();
  //await page.getByText('Please check the email').click();
});