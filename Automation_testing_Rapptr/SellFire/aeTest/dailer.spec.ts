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


test('Make a call ', async () => {

});

test('Schedule an event', async () => {

});
test('Make a sale', async () => {

});

test('Transfer an active call to another Rep', async () => {

});

test('Verify that leads can be added to Next Action', async () => {

});

test('Verify Inbound calls are working as expected ', async () => {

});

test('Verify Outbound calls are working as expected ', async () => {

});

test('Verify that incoming calls only ring on one tab ', async () => {

});

test('Ensure that leads are not repeating in your Custom Queue ', async () => {

});

test('Make a call and hang up (less than 1 sec) - validate status of rep switches back to available ', async () => {

});

test('Verify that sets from associate contacts appear on the dashboard', async () => {

});

test('Verify that you can transfer calls without issues', async () => {

});

test('Verify Leads appear in Next action at the correct time of their events', async () => {

});

test('Verify that active calls are not being set to Idle', async () => {

});

test('Verify that schedule callback events do not send invites ', async () => {

});


