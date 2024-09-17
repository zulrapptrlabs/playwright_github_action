import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';
import dialerPage from '../Pages(Sellfire)/dialerPage';

test.describe("All the functions on the homepage", () => {
    let page;
    test.use({
        page: async ({ browser }, use) => {
            const browserInstance = await chromium.launch({
                headless: true,
                slowMo: 1000,
            });

            // Create a new context with permissions
            const context = await browserInstance.newContext(microphonePermission);
            const page = await context.newPage();

            // Use the page in the tests
            await use(page);

            // Cleanup: Close the browser context after the tests
            await context.close();
        }
    });


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


    test('Add a lead to an AE/SDR account', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');

        const dialer = new dialerPage(page);
        await dialer.addleadButton();
        
        // Add assertions or further actions as needed
    });

    test('Search for newly created lead', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');
    });

    test('Verify Phone number validation for US based leads', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');
    });

    test('Verify that leads already in the system but not claimed show as yellow', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');
    });

    test('Verify that leads that are already in the system and are claimed, show as red', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');
    });

    test('Verify that leads, not in the system show as green', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');
    });

});

