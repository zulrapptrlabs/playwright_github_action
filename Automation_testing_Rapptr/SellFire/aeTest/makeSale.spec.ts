import { microphonePermission } from '../Pages(Sellfire)/microphonePermission';
import { test, expect, chromium } from '@playwright/test';
import loginPage from '../Pages(Sellfire)/sellfireLoginPage';
import dialerPage from '../Pages(Sellfire)/dialerPage';
import confirmAccountDetails from '../Pages(Sellfire)/confirmAccountDetailsPage';
import salePage from '../Pages(Sellfire)/salePage';




test('Make A Sale', async () => {
    test.setTimeout(120000);
    // Launch a new browser
    const browser = await chromium.launch({
        headless: false,  // Run in headful mode to see the browser
        slowMo: 1000, // slows down the script
    });
    const context = await browser.newContext(microphonePermission);

    // Use the new context to open a new page
    const page = await context.newPage();

    // Instantiate all classes
    const login = new loginPage(page)
    const dialer = new dialerPage(page)
    const account = new confirmAccountDetails(page)
    const sale = new salePage(page)

    // Navigate to the login page and perform login
    await login.navigateTo();
    await login.enterUserName('aetest@rapptrlabs.com');
    await login.enterPassword('xIrYq1szG1sjR7J3TPjo');
    await login.clickLoginButton();

    // Click on the call button in a lead card
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