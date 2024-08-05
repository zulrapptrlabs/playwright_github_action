import { Page } from "@playwright/test";

export default class loginPage {

    constructor(public page: Page) { }

    async navigateTo() {
        await this.page.goto('https://staging.opsiq.ai/login/');
    }

    async enterUserName(Username: string) {
        await this.page.locator("[name='username']").type(Username);

    }
    async enterPassword(Password: string) {
        await this.page.locator("[name='password']").type(Password);

    }
    async clickLoginButton() {
        await this.page.locator("//button[@id='login-button']").click();
    }
}