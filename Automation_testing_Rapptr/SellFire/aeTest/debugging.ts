import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';
import dialerPage from '../Pages(Sellfire)/dialerPage';


test('NDM left Message', async () => {
    // Launch a new browser
    const browser = await chromium.launch({
        headless: false,  // Run in headful mode to see the browser
        slowMo: 500,
    });
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
    await page.pause();
});
