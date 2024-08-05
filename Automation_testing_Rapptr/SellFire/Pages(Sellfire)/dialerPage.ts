import { Page } from '@playwright/test';

export default class dialerPage {
    constructor(public page: Page) { }


    async callButton() {
        await this.page.locator('#root > div.sc-kBgaMi.jishmL > div.sc-iHbOXn.ihtWmE > div > div > div.sc-elToUV.jABGzl > div > div:nth-child(2) > div.sc-ezXQAu.pTeTY > div.sc-gJLCiq.kMUfjx > div.sc-kBizdN.gGaVww > div:nth-child(1) > div:nth-child(3) > div.sc-gVpmeh.gCLILR > div:nth-child(1) > button').first().click();
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