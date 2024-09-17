import { Page } from '@playwright/test';

export default class dialerPage {
    constructor(public page: Page) { }


    async callButton() {
        await this.page.locator("//div[@class='sc-lavCsO iDRnjM']//div[3]//div[1]/button[@class='sc-jqnWEz kmZGGf']").click();
    }

    async smsButton() {
        await this.page.locator("//div[@class='sc-gVpmeh gCLILR']/div[2]/button[@class='sc-dGHRBR grNWKb']").click();
    }

    async addAlternateContactButton() {
        await this.page.locator("//button[@class='sc-bUrJUP iksVye']").click();
    }

    async screenSharingButton() {
        await this.page.locator("//div[.='Screen Sharing']").click();
    }

    async associatedContactButton() {
        await this.page.locator("//div[@class='sc-jwBoPJ UvFn']").click();
    }
    async editContactInfoButton() {
        await this.page.locator(".inrmxf .sc-kJJeMD [stroke='currentColor']").click();
    }

    async makeNextActionButton() {
        await this.page.locator("//div[@class='sc-kBciBV ggxhVY']//button[@class='sc-bUrJUP sc-klSzut iksVye cjWSoj']").click();
    }

    async addleadButton() {
        await this.page.locator("//div[@class='sc-kBciBV ggxhVY']//button[@class='sc-bUrJUP sc-klSzut iksVye cjWSoj']").click();
    }

    async scheduleListButton() {
        await this.page.locator("//div[@class='sc-kBciBV ggxhVY']//button[@class='sc-bUrJUP sc-klSzut iksVye cjWSoj']").click();
    }

    async scheduleMissedDemosButton() {
        await this.page.locator("//div[@class='sc-kBciBV ggxhVY']//button[@class='sc-bUrJUP sc-klSzut iksVye cjWSoj']").click();
    }

}
