import { Page } from "@playwright/test";
import confirmAccountDetails from './confirmAccountDetailsPage';




export default class salePage {

    constructor(public page: Page) { }



    async contractDuration() {
        await this.page.locator("//button[@class='sc-laRPJI IQbVY']").click();

    }

    async paymentTerms() {
        await this.page.locator("//button[@class='sc-laRPJI bUJbls']").click();

    }
    async openProductDropdown() {
        await this.page.locator("#root > div.sc-hFIzcO.cKTziV > div.sc-kCdhpL.hfESOm > div > div > div.sc-cHwTsR.jdRjaa > div > div.sc-qDynd.UZIDe > div > div.sc-kkQtUC.gDkOym > div.sc-eLgOdN.sc-cTmeZk.kjnVLY.bmAsUO > div.sc-eLgOdN.sc-gHxKDd.ifnZSW.dvsNKY > div:nth-child(2) > div > div").click();

    }
    async paymentDropdownOption() {
        await this.page.locator(".sc-gHxKDd > div:nth-of-type(2) .css-11hpibo-singleValue").click();
    }


    async quantityAdd() {
        await this.page.locator("//button[@class='sc-laRPJI bUJbls']").click();
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

    async leadSourceDropdown() {
        await this.page.locator("//button[@class='sc-laRPJI bUJbls']").click();
    }

    async mmrTextBox(MMR: string) {
        await this.page.locator("//input[@name='mrr']").fill(MMR);
    }

    async clickNextButtonSalePage() {
        const Next = new confirmAccountDetails(this.page);
        await Next.clickNext();
        await Next.clickBack();
    }

}