import { test, expect } from '@playwright/test';

test('Verify on login ', async ({ page }) => {
  await page.goto('https://alter-web-staging-git-awd-406-rapptr-labs.vercel.app/');
  await page.getByRole('button', { name: 'profile' }).click();
  await page.getByText('Email').click();
  await page.getByLabel('Email').fill('mdixon@rapptrlabs.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByLabel('Password').fill('Alter123!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://alter-web-staging-git-awd-406-rapptr-labs.vercel.app/account');
  await page.getByRole('link', { name: 'Edit Personal Information' }).click();
  await page.getByRole('button', { name: 'Back to Dashboard' }).click();
  await page.getByRole('button', { name: 'link Log Out' }).click();
});