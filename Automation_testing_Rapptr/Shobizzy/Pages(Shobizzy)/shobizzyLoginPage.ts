import { Page } from "@playwright/test";


export default class shobizzyLoginPage {
    constructor(public page: Page) { }

    async shobizzyEmailAddress(Email: string) {
        await this.page.locator("//input[@id='username']").type(Email)
    }

    async shobizzyPassword(Password: string) {
        await this.page.locator("//input[@id='password']").type(Password);
    }

    async shobizzyVerify() {
        await this.page.locator("//button[@name='action']").click();
    }

    async clickShobizzySignupRedirect() {
        await this.page.locator("//a[.='Sign up']").click();
    }

    async continueWithGoogleButton() {
        await this.page.locator("//span[.='Continue with Google']").click();
    }

    async continueWithFacebookButton() {
        await this.page.locator("//span[.='Continue with Facebook']").click();
    }

    async continueWithLinkedinButton() {
        await this.page.locator("//span[.='Continue with LinkedIn']").click();
    }

    async continueWithAppleButton() {
        await this.page.locator("//span[.='Continue with Apple']").click();
    }

    async shobizzyForgotPasswordButton() {
        await this.page.locator("//a[.='Forgot password?']").click();
    }

}