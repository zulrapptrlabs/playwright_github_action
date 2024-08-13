import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';


test('Log non call activity', async () => {
  test.setTimeout(120000);
  const browser = await chromium.launch({
    headless: false,  // Run in headful mode to see the browser
    slowMo: 1000,
  });
  // Launch a new browser


  const context = await browser.newContext(microphonePermission);

  // Use the new context to open a new page
  const page = await context.newPage();

  // Instantiate the loginPage class
  const login = new loginPage(page);

  // Navigate to the login page and perform login
  await login.navigateTo();
  await login.enterUserName('aetest@rapptrlabs.com');
  await login.enterPassword('xIrYq1szG1sjR7J3TPjo');
  await login.clickLoginButton();

  // Additional test steps
  await page.getByPlaceholder('Search Existing Leads').click();
  await page.getByPlaceholder('Search Existing Leads').fill('regression');
  await page.waitForTimeout(7000);
  await page.locator('div:nth-child(1) > div > div > .sc-gHHTUs > .sc-ezXQAu > .sc-gJLCiq > .sc-frSMQm > .sc-gJNiKh > .sc-kJJeMD > .sc-hHEYXH > button').click();

  // Log non-call activity
  await page.getByRole('button', { name: 'Log Non–Call Activity' }).click();
  await page.getByRole('button', { name: 'No Contact' }).click();
  await page.getByRole('button', { name: 'Log Other Activity' }).click();
  await page.getByRole('button', { name: 'Left Voicemail A voicemail' }).click();
  await page.getByRole('button', { name: 'Confirm Result' }).click();

  // Close the browser
  await browser.close();
});