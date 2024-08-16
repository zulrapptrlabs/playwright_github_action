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

test('Validate bulk action can claim multiple leads', async () => {

});

test('Validate that filtering using special characters Do not cause errors ', async () => {

});

test('Test as an OllyOlly account, apply multiple filters to all leads page, validate total leads are correct and filters apply. Validate response times for data and dashboard ', async () => {

});

test('Verify that No errors occur when attempting to filter leads ', async () => {

});

test('Verify no visual glitches when editing columns ', async () => {

});