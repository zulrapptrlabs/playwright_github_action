import { Page } from "@playwright/test";


export default class shobizzyAuthPage {

    constructor(public page: Page) { }

    async navigateTo() {
        await this.page.goto("https://shobizzy-dev.vercel.app/");
    }

    async clickShobizzyLoginButton() {
        await this.page.locator("//a[.='Log In']").click();
    }
    async clickShobizzySignUpButton() {
        await this.page.locator("//a[.='Sign Up']").click();
    }
    async clickShobizzyTermsButton() {
        await this.page.locator("//a[.='Terms & Conditions']").click();
    }
    async clickShobizzyPrivacyButton() {
        await this.page.locator("//a[.='Privacy Policy']").click();
    }

}