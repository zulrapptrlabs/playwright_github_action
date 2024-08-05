import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';
import dialerPage from '../Pages(Sellfire)/dialerPage';


test('Call test', async () => {
  // Launch a new browser
  const browser = await chromium.launch();
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
  await page.getByRole('button', { name: 'Hang up' }).click();
  await page.getByRole('button', { name: 'No Contact', exact: true }).click();
  await page.getByRole('button', { name: 'Log Other Call Result' }).click();
  await page.getByRole('button', { name: 'Left Voicemail A voicemail' }).click();
  await page.getByRole('button', { name: 'Confirm Call Option' }).click();
  await page.locator('#logout-text').click();

  // Close the browser
  await browser.close();
});
