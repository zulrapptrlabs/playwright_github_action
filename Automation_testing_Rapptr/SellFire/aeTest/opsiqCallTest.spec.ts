import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';
import dialerPage from '../Pages(Sellfire)/dialerPage';


test('Call test', async () => {
  test.setTimeout(120000);
  // Launch a new browser
  const browser = await chromium.launch({
    headless: true,  // Run in headful mode to see the browser
    slowMo: 1000,
  });
  const context = await browser.newContext(microphonePermission);

  // Use the new context to open a new page
  const page = await context.newPage();

  // Instantiate the loginPage class
  const login = new loginPage(page)
  const dialer = new dialerPage(page)

  // Navigate to the login page and perform login
  await login.navigateTo();
  await login.enterUserName('aetest@rapptrlabs.com');
  await login.enterPassword('xIrYq1szG1sjR7J3TPjo');
  await login.clickLoginButton();

  // Click on the call button in a lead card
  await dialer.callButton();

  // Go through the call flow
  await page.locator("//img[@alt='Hang up']").click();
  await page.getByRole('button', { name: 'No Contact', exact: true }).click();
  await page.getByRole('button', { name: 'Log Other Call Result' }).click();
  await page.getByText("Left Voicemail").click();
  await page.getByRole('button', { name: 'Confirm Call Option' }).click();
  await page.locator('#logout-text').click(); await page.locator('body').click();

  // Close the browser
  await browser.close();
});
