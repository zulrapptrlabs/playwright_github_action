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




test('Verify that "NA" does not appear for call types in Lead History ', async () => {

});
test('Verify that Call notes are being saved with accurate times ', async () => {

});

test('Verify that all sales have the relevant data associated with it (Checkmark, and key event)', async () => {

});

test('Verify that reps can see previous reps call notes if the system configuration is set to that ', async () => {

});

test('Verify that when there is no event, the lead details will tell you when the lead will be back in active queue', async () => {

});

test('Verify that updating/adding numbers does not add a extra 1', async () => {

});

test('Verify that there are no scrolling issues on record detail page where there are a lot of fields ', async () => {

});

test('Verify event time tokens are populating the correct data for Email and SMS templates', async () => {

});