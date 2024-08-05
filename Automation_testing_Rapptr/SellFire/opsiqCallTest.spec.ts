import { microphonePermission } from './Pages(Sellfire)/microphonePermission';
import { test, expect, chromium } from '@playwright/test';
import loginPage from './Pages(Sellfire)/loginPage';


test('Call test', async () => {
  // Launch a new browser
  const browser = await chromium.launch();

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
  // await page.pause()
  await page.locator('#root > div.sc-kBgaMi.jishmL > div.sc-iHbOXn.ihtWmE > div > div > div.sc-elToUV.jABGzl > div > div:nth-child(2) > div.sc-ezXQAu.pTeTY > div.sc-gJLCiq.kMUfjx > div.sc-kBizdN.gGaVww > div:nth-child(1) > div:nth-child(3) > div.sc-gVpmeh.gCLILR > div:nth-child(1) > button').first().click();
  //await page.pause()
  await page.getByRole('button', { name: 'Hang up' }).click();
  await page.getByRole('button', { name: 'No Contact', exact: true }).click();
  await page.getByRole('button', { name: 'Log Other Call Result' }).click();
  await page.getByRole('button', { name: 'Left Voicemail A voicemail' }).click();
  await page.getByRole('button', { name: 'Confirm Call Option' }).click();
  await page.locator('#logout-text').click();

  // Close the browser
  await browser.close();
});
