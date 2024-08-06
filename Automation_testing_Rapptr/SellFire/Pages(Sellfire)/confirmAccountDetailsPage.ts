import { Page } from "@playwright/test";

export default class confirmAccountDetails {

    constructor(public page: Page) { }


    async enterEmail(Email: string) {
        await this.page.locator("//input[@name='email']").type(Email);

    }
    async enterBusinessName(BusinessName: string) {
        await this.page.locator("//input[@name='business_name']").type(BusinessName);

    }


    async enterFirstName(FirstName: string) {
        await this.page.locator("//input[@name='first_name']").type(FirstName);

    }
    async enterLastName(LastName: string) {
        await this.page.locator("//input[@name='last_name']").type(LastName);

    }


    async enterPhoneNumber(PhoneNumber: string) {
        await this.page.locator("//input[@name='phone_number']").type(PhoneNumber);

    }
    async enterSaleNote(SaleNotes: string) {
        await this.page.locator("//textarea[@class='sc-jUEnpm Bvtrg']").type(SaleNotes);

    }


    async selectCountry() {
        await this.page.locator("//div[@class='sc-hWkxrD edhYwn']//div[@class=' css-aoqas2-control']/div[.='United States (1)']").click();

    }
    async enterAddress(Address: string) {
        await this.page.locator("//input[@name='address']").type(Address);

    }


    async enterCity(City: string) {
        await this.page.locator("//input[@name='city']").type(City);

    }
    async clickNext() {
        await this.page.locator("//button[@class='sc-laRPJI IQbVY']").click();

    }

    async clickBack() {
        await this.page.locator("//button[@class='sc-laRPJI bUJbls']").click();

    }



}