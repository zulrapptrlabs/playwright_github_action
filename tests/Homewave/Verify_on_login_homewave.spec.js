import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.homewave.io/');
  await page.getByRole('link', { name: 'Sign Up / Login' }).click();
  await page.getByLabel('Email address*').fill('cmcaboy+builder@rapptrlabs.com');
  await page.getByLabel('Email address*').click();
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('AwHfJug@6QqGbiyoyJvg');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  //page.getByRole('heading', { name: 'My Communities' });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Homewave/);
  await page.getByRole('img', { name: 'profile' }).click();
  //await page.getByRole('button', { name: 'Log out of HomeWave' }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Homewave/);
});