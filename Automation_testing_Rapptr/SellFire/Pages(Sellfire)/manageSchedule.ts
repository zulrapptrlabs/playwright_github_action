import { Page } from "@playwright/test";

export default class manageSchedule {

    constructor(public page: Page) { }


    async dayButton() {
        await this.page.getByText('Day', { exact: true }).click();

    }

    async weekButton() {
        await this.page.getByText('Week', { exact: true }).click();

    }

    async monthButton() {
        await this.page.getByText('Month', { exact: true }).click();

    }

    async calendarLeftButton() {
        await this.page.locator("[data-src='/static/media/chevron_left.e0507a0f.svg']").click();
    }

    async calendarRightButton() {
        await this.page.locator("[data-src='/static/media/chevron_right.f42c0122.svg']").click();
    }

    async eventFilter() {
        await this.page.locator("").click();
    }
}