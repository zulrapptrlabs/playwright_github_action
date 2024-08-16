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


test('Add a lead to an AE/SDR account', async () => {

});

test('Search for newly created lead', async () => {

});

test('Verify Phone number validation for US based leads', async () => {

});

test('Verify that leads already in the system but not claimed show as yellow', async () => {

});

test('Verify that leads that are already in the system and are claimed, show as red', async () => {

});

test('Verify that leads, not in the system show as green', async () => {

});


