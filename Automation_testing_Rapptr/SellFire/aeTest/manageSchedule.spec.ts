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



test('Validate AE/SDR users can view their calendar events, update or transfer events and delete events. ', async () => {

});

test('Verify that rescheduling a demo only shows the new demo and not the original ', async () => {

});

test('Verify events for associate contacts are scheduled correctly', async () => {

});