import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium, Page, ElementHandle } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';
import dialerPage from '../Pages(Sellfire)/dialerPage';
import confirmAccountDetails from '../Pages(Sellfire)/confirmAccountDetailsPage';
import salePage from '../Pages(Sellfire)/salePage';

test.describe("All the functions on the dialer screen", () => {
    //This function opens the page and keeps it open for all the tests
    test.use({
        page: async ({ browser }, use) => {

            const browserInstance = await chromium.launch({
                headless: false,
                slowMo: 1000,
            });

            // Create a new context with permissions
            const context = await browserInstance.newContext(microphonePermission);
            const page = await context.newPage();


            // Perform login actions
            const login = new loginPage(page);


            await login.navigateTo();
            await login.enterUserName('aetest@rapptrlabs.com');
            await login.enterPassword('xIrYq1szG1sjR7J3TPjo');
            await login.clickLoginButton();

            // Use the page in the tests
            await use(page);

            // Cleanup: Close the browser context after the tests
            await context.close();
        }
    });

    test('Make a call ', async ({ page }) => {

        await page.goto('https://staging.opsiq.ai/dash');
        const dialer = new dialerPage(page)

        await dialer.callButton();

        // Go through the call flow
        await page.locator("//img[@alt='Hang up']").click();
        await page.getByRole('button', { name: 'No Contact', exact: true }).click();
        await page.getByRole('button', { name: 'Log Other Call Result' }).click();
        await page.getByText("Left Voicemail").click();
        await page.getByRole('button', { name: 'Confirm Call Option' }).click();




    });

    test('Schedule an event', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');
        const dialer = new dialerPage(page)

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

    });


    test('Make a sale', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');
        const dialer = new dialerPage(page)
        const account = new confirmAccountDetails(page)
        const sale = new salePage(page)


        await dialer.callButton();

        // Go through the call flow
        await page.locator("//img[@alt='Hang up']").click();

        //Begin Sale flow 
        await page.getByRole('button', { name: 'Decision Maker', exact: true }).click();
        await page.getByRole('button', { name: 'Make Sale' }).click();
        await page.getByRole('button', { name: 'Next', exact: true }).click();

        //Fill out all account details
        await account.enterAddress("1234 regression ave");
        await account.enterBusinessName("AutoRegression test");
        await account.enterCity("regression city");
        await account.enterEmail("testopsiq@gmail.com");
        await account.enterPhoneNumber();
        await account.enterSaleNote("This is an automation");
        await account.enterZipCode("07123");
        await account.enterFirstName("Automatic");
        await account.enterLastName("Regression");
        await page.getByRole('button', { name: 'Next', exact: true }).click();
        //await page.pause();

        //Fill out all sale details

        //await sale.contractDuration();
        //await sale.paymentTerms();
        await sale.openProductDropdown();
        await sale.productDropdownOption();
        await sale.quantityAdd();
        await sale.paymentTermsOpen();
        await sale.paymentTermsSelect();
        await sale.leadSourceDropdownOpen();
        await sale.leadSourceDropdownSelect();
        // await sale.priceTextBox("100");
        await sale.mmrTextBox();
        await page.getByRole('button', { name: 'Next', exact: true }).click();

        //Confirm sale
        await page.getByRole('button', { name: 'Confirm Sale' }).click();

    });

    test('Transfer an active call to another Rep', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');

    });

    test('Verify that leads can be added to Next Action', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');

        await page.locator('#upcoming-scroll-div').getByRole('button', { name: 'MAKE NEXT ACTION' }).first().click();
        await expect(page.getByText('Task Added Manually Undo')).toBeVisible();


    });

    test('Verify Inbound calls are working as expected ', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');

    });

    test('Verify Outbound calls are working as expected ', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');
        const dialer = new dialerPage(page)
        await dialer.callButton();
        await expect(page.getByText('My Current Call Notes')).toBeVisible();


    });

    test('Verify that incoming calls only ring on one tab ', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');

    });

    test('Ensure that leads are not repeating in your Custom Queue ', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');

    });

    test('Make a call and hang up (less than 1 sec) - validate status of rep switches back to available ', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');
        const dialer = new dialerPage(page)

        await dialer.callButton();
        await page.locator("//img[@alt='Hang up']").click();
        await expect(page.getByText('Available')).toBeVisible();


    });

    test('Verify that sets from associate contacts appear on the dashboard', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');

    });

    test('Verify that you can transfer calls without issues', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');

    });

    test('Verify Leads appear in Next action at the correct time of their events', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');

    });

    test('Verify that active calls are not being set to Idle', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');


    });

    test('Verify that schedule callback events do not send invites ', async ({ page }) => {
        await page.goto('https://staging.opsiq.ai/dash/');

    });

});