import { test, expect, chromium } from '@playwright/test';



test('Make a call', async () => {
  // Launch a new browser
  const browser = await chromium.launch();

  // Create a new context with microphone permissions
  const context = await browser.newContext({
    permissions: ['microphone'],  // Granting microphone access
    geolocation: { latitude: 59.95, longitude: 30.31667 }, // Optional: Set geolocation if needed
    locale: 'en-US'  // Optional: Set locale if needed
  });

  // Use the new context to open a new page
  const page = await context.newPage();

  // Navigate to the site
  await page.goto('https://staging.opsiq.ai/login/');

  // Continue with your test steps
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('aetest@rapptrlabs.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('xIrYq1szG1sjR7J3TPjo');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');

  await page.getByRole('button', { name: 'CALL PRIMARY' }).click();
  await page.getByRole('button', { name: 'Hang up' }).click();
  await page.getByRole('button', { name: 'No Contact', exact: true }).click();
  await page.getByRole('button', { name: 'Log Other Call Result' }).click();
  await page.getByRole('button', { name: 'Left Voicemail A voicemail' }).click();
  await page.getByRole('button', { name: 'Confirm Call Option' }).click();
  await page.locator('#logout-text').click();

  // Close the browser
  await browser.close();
});
