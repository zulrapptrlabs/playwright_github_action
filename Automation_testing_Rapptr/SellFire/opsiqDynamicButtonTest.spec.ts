//const { test, chromium } = require('@playwright/test');
import { test, expect, chromium } from '@playwright/test';

test('dynamic button names test', async () => {
  const browser = await chromium.launch({
    headless: false,  // Run in headful mode to see the browser
    slowMo: 500,
  });
  try {
    const context = await browser.newContext({
      permissions: ['microphone']  // Granting microphone access
    });
    const page = await context.newPage();
    await page.goto('https://staging.opsiq.ai/login/');

    // Your login sequence
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('aetest@rapptrlabs.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('xIrYq1szG1sjR7J3TPjo');
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
    await page.waitForTimeout(10000);

    // Check for different button names and click accordingly
    if (await page.getByRole('button', { name: 'CALL PRIMARY' }).isVisible()) {
      await page.getByRole('button', { name: 'CALL PRIMARY' }).click();
      await page.getByRole('button', { name: 'Hang up' }).click();
      await page.getByRole('button', { name: 'No Contact', exact: true }).click();
      await page.getByRole('button', { name: 'Log Other Call Result' }).click();
      await page.getByRole('button', { name: 'Left Voicemail A voicemail' }).click();
      await page.getByRole('button', { name: 'Confirm Call Option' }).click();
      await page.locator('#logout-text').click();

    }
    else if (await page.getByRole('button', { name: 'COMPOSE EMAIL' }).isVisible()) {
      await page.getByRole('button', { name: 'COMPOSE EMAIL' }).click();
      await page.getByPlaceholder('Provide a subject line').click();
      await page.getByPlaceholder('Provide a subject line').fill('automated test');
      await page.locator('.ql-editor').click();
      await page.locator('.ql-editor').fill('automated test');
      await page.getByRole('button', { name: 'Cancel' }).click();
      await page.locator('#logout-text').click();

    }
    else if (await page.getByRole('button', { name: 'COMPOSE SMS' }).isVisible()) {
      await page.getByRole('button', { name: 'Compose SMS' }).click();
      await page.locator('.ql-editor').click();
      await page.locator('.ql-editor').fill('automated testing sms');
      await page.getByRole('button', { name: 'Send SMS' }).click();
    }
    else {
      console.log('Relevant button not found');
      // Handle the case where neither button is found, perhaps log or throw an error
    }
  }
  finally {
    await browser.close(); // Ensure the browser closes properly after all operations
  }
});
