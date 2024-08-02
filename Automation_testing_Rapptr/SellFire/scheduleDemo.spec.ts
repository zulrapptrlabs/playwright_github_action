import { test, expect, chromium } from '@playwright/test';



test('Log non call activity', async () => {
    // Launch a new browser
    const browser = await chromium.launch();

    // Create a new context with microphone permissions
    const context = await browser.newContext({
        permissions: ['microphone'],  // Granting microphone access
        geolocation: { latitude: 59.95, longitude: 30.31667 }, // Optional: Set geolocation if needed
        locale: 'en-US'  // Optional: Set locale if needed
    });

    // Use the new context to open a new page
    const page = await context.newPage();

    // Navigate to the site
    await page.goto('https://staging.opsiq.ai/login/');

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('aetest@rapptrlabs.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('xIrYq1szG1sjR7J3TPjo');
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
    // await page.pause()
    await page.locator('#root > div.sc-kBgaMi.jishmL > div.sc-iHbOXn.ihtWmE > div > div > div.sc-elToUV.jABGzl > div > div:nth-child(2) > div.sc-ezXQAu.pTeTY > div.sc-gJLCiq.kMUfjx > div.sc-kBizdN.gGaVww > div:nth-child(1) > div:nth-child(3) > div.sc-gVpmeh.gCLILR > div:nth-child(1) > button').first().click();
    //await page.pause()
    await page.getByRole('button', { name: 'Hang up' }).click();
    await page.getByRole('button', { name: 'Decision Maker', exact: true }).click();
    await page.getByRole('button', { name: 'Schedule Next Event' }).click();
    await page.getByRole('button', { name: 'Schedule Demo A 60 minute' }).click();
    await page.getByRole('button', { name: 'Schedule Demo w/ DM A demo' }).click();
    await page.getByRole('button', { name: '6:30 PM' }).click();
    await page.getByRole('button', { name: 'Next', exact: true }).click();
    await page.getByRole('button', { name: 'CONFIRM SCHEDULE DEMO' }).click();
    await expect(page.locator('.sc-bmhdWt')).toBeVisible();
});