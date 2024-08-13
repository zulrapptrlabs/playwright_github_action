import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium, ElementHandle } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';
import dialerPage from '../Pages(Sellfire)/dialerPage';


test('NDM dispositions(random)', async () => {
    test.setTimeout(120000);
    // Launch a new browser
    const browser = await chromium.launch({
        headless: false,  // Run in headful mode to see the browser
        slowMo: 1000,
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

    // Click on the call button in a lead card
    await dialer.callButton();

    // Go through the call flow
    await page.locator("//img[@alt='Hang up']").click();
    await page.getByRole('button', { name: 'Non-Decision Maker' }).click();
    await page.getByRole('button', { name: 'Log Other Call Result' }).click();

    const elements: ElementHandle[] = await page.$$(
        '#root > div.sc-hFIzcO.cKTziV > div.sc-kCdhpL.hfESOm > div > div > div.sc-cHwTsR.eIXjSi > div > div.sc-qDynd.UZIDe > div.sc-dqoMfb.fJeUtb'
    );

    // Ensure there are elements to choose from
    if (elements.length > 0) {
        // Randomly pick one element
        const randomIndex = Math.floor(Math.random() * elements.length);
        const randomElement = elements[randomIndex];

        // Perform an action on the randomly picked element, e.g., click
        await randomElement.click();
    }

    await page.getByRole('button', { name: 'Confirm Call Option' }).click();

    await browser.close();

});

