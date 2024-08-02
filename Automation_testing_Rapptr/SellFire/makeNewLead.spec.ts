import { test, expect, chromium } from '@playwright/test';


test('Make a new lead', async () => {

  const browser = await chromium.launch();

  // Create a new context with microphone permissions
  const context = await browser.newContext({
    permissions: ['microphone'],  // Granting microphone access
    geolocation: { latitude: 59.95, longitude: 30.31667 }, // Optional: Set geolocation if needed
    locale: 'en-US'  // Optional: Set locale if needed
  });

  // Use the new context to open a new page
  const page = await context.newPage();

  await page.goto('https://staging.opsiq.ai/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('aetest@rapptrlabs.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('xIrYq1szG1sjR7J3TPjo');
  await page.getByRole('button', { name: 'Login' }).click();


  await page.getByRole('button', { name: 'Add Lead' }).click();
  await page.locator('input[name="phone_number"]').click();
  const randomPhoneNumber = (Math.floor(Math.random() * 9000000000) + 1000000000).toString();
  await page.locator('input[name="phone_number"]').fill(randomPhoneNumber);
  await page.locator('input[name="first_name"]').click();
  await page.locator('input[name="first_name"]').fill('Automated REGRESSION');
  await page.locator('input[name="last_name"]').click();
  await page.locator('input[name="last_name"]').fill('automated');
  await page.locator('input[name="business_name"]').click();
  await page.locator('input[name="business_name"]').fill('Regression');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('regression@gmail.com');
  await page.locator('div:nth-child(10) > .sc-kIeTtH > .css-2b097c-container > .css-1ib49zb-control > .css-18y8ppy').click();
  await page.getByText('Inbound Call').nth(0).click();
  await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).first().click();
  await page.getByText('Inbound', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).first().click();
  await page.locator('div:nth-child(20) > .sc-kIeTtH > .css-2b097c-container > .css-1ib49zb-control > .css-18y8ppy').click();
  await page.getByText('Alaska (AK)', { exact: true }).click();
  await page.getByRole('button', { name: 'Create & Claim Lead' }).click();
  await page.getByRole('button', { name: 'MAKE NEXT ACTION' }).first().click();

});