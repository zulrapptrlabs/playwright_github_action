import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';

test.describe("Making New leads", () => {

  test('Make a new lead', async () => {
    test.setTimeout(120000);
    // Launch a new browser
    const browser = await chromium.launch({
      headless: true,  // Run in headless mode
      slowMo: 1000,
    });

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

    // Begin the Add lead flow
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

});