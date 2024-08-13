import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium, ElementHandle } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';
import dialerPage from '../Pages(Sellfire)/dialerPage';



test('Schedule a demo', async () => {
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
    const login = new loginPage(page);
    const dialer = new dialerPage(page)


    // Navigate to the login page and perform login
    await login.navigateTo();
    await login.enterUserName('aetest@rapptrlabs.com');
    await login.enterPassword('xIrYq1szG1sjR7J3TPjo');
    await login.clickLoginButton();
    // await page.pause()
    await dialer.callButton();
    //await page.pause()
    await page.locator("//img[@alt='Hang up']").click();
    await page.getByRole('button', { name: 'Decision Maker', exact: true }).click();
    await page.getByRole('button', { name: 'Schedule Next Event' }).click();


    await page.getByRole('button', { name: 'Schedule Demo A 60 minute' }).click();

    //Selecting a random DM call result
    const dmCallResult: ElementHandle[] = await page.$$(
        '#root > div.sc-hFIzcO.cKTziV > div.sc-kCdhpL.hfESOm > div > div > div.sc-cHwTsR.eIXjSi > div > div.sc-qDynd.UZIDe > div > div.sc-bMrnOX.kPSULg'
    );


    if (dmCallResult.length > 0) {

        const randomIndex = Math.floor(Math.random() * dmCallResult.length);
        const randomElement = dmCallResult[randomIndex];


        await randomElement.click();
    }


    await page.locator("//button[@class='sc-laRPJI dbTLNO']").click();
    await page.waitForTimeout(5000);


    //Selecting a random timeslot
    const timeSlot: ElementHandle[] = await page.$$(
        '#root > div.sc-hFIzcO.cKTziV > div.sc-kCdhpL.hfESOm > div > div > div.sc-cHwTsR.eIXjSi > div > div.sc-qDynd.UZIDe > div.sc-iiqTaX.lmMISc > div > div:nth-child(2) > div.sc-jQotyu.bwcPqY'
    );

    // Ensure there are elements to choose from
    if (timeSlot.length > 0) {
        // Randomly pick one element
        const randomIndex = Math.floor(Math.random() * timeSlot.length);
        const randomElement = timeSlot[randomIndex];

        // Perform an action on the randomly picked element, e.g., click
        await randomElement.click();
    }


    await page.locator("//input[@name='primary_email']").fill("testopsiq@gmail.com");
    await page.getByRole('button', { name: 'Next', exact: true }).click();
    await page.getByRole('button', { name: 'CONFIRM SCHEDULE DEMO' }).click();
    // await expect(page.locator('.sc-bmhdWt')).toBeVisible({ timeout: 10000 });
});