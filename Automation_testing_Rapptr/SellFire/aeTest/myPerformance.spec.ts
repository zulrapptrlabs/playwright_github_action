import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';

let page;

test.beforeAll(async ({ browser }) => {
    // Create a new page
    const page = await browser.newPage();

    // Instantiate the loginPage class
    const login = new loginPage(page);

    // Perform login actions
    await login.navigateTo();
    await login.enterUserName('aetest@rapprtlabs.com');
    await login.enterPassword('xIrYq1szG1sjR7J3TPjo');
    await login.clickLoginButton();

    // Store the page instance for later use in tests
});

test.afterAll(async ({ browser }) => {
    await browser.close();
});


test('Verify date filter shows historical data > 30 days', async () => {

});

test('All dashboard sub categories should show historical data under the tabs REPORTING, COACHING, ACTIVITY, EVENT, PIPELINE, TRANSFER METRICS, TRANSFER QUALITY ', async () => {

});