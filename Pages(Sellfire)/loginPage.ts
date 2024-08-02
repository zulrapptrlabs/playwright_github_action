import { Page } from "@playwright/test";

export default class loginPage {

    constructor(public page: Page) {

    }

    async enterUserName(Username: string) {
        await this.page.locator("[name='username']").type(Username);

    }
    async enterPassword(Password: string) {
        await this.page.locator("[name='password']").type(Password);

    }
}