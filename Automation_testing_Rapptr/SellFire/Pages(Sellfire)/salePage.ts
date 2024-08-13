import { Page } from "@playwright/test";
import confirmAccountDetails from './confirmAccountDetailsPage';




export default class salePage {

    constructor(public page: Page) { }



    async contractDuration() {
        await this.page.locator("//button[@class='sc-laRPJI IQbVY']").click();

    }

    async paymentTermsOpen() {
        await this.page.locator('div:nth-child(4) > .sc-kIeTtH > .css-2b097c-container > .css-1p3mh5t-control > .css-18y8ppy').click();

    }

    async paymentTermsSelect() {
        await this.page.locator('#react-select-21-option-0').click();

    }

    async openProductDropdown() {
        await this.page.locator('div').filter({ hasText: /^Select a product$/ }).first().click();


    }
    async productDropdownOption() {
        await this.page.locator('#react-select-16-option-0').click();
    }


    async quantityAdd() {
        await this.page.locator("[alt='up'] .injected-svg").click();
    }

    async quantitySubtract() {
        await this.page.locator("//button[@class='sc-laRPJI bUJbls']").click();
    }

    async priceTextBox(Price: string) {
        await this.page.locator("//input[@class='sc-jeGSBP iidKGc']").type(Price);
    }

    async discountDropdown() {
        await this.page.locator("//button[@class='sc-laRPJI bUJbls']").click();
    }

    async addProductButton() {
        await this.page.locator("//button[@class='sc-laRPJI bUJbls']").click();

    }

    async leadSourceDropdownOpen() {
        await this.page.locator('.css-aoqas2-control > .css-18y8ppy').click();
    }

    async leadSourceDropdownSelect() {
        await this.page.locator('#react-select-19-option-0').click();
    }


    async mmrTextBox() {
        await this.page.locator('input[name="mrr"]').fill('100');
    }

    async clickNextButtonSalePage() {
        const Next = new confirmAccountDetails(this.page);
        await Next.clickNext();
        await Next.clickBack();
    }

}