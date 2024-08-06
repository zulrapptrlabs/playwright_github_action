import { Page } from "@playwright/test";

export default class systemViewAllLeads {
    constructor(public page: Page) { }


    async navigateToAllLeads() {
        await this.page.goto("https://staging.opsiq.ai/system-view/my-leads");
    }

    async searchAllLeads(Search: string) {
        await this.page.locator("").type("Search");
    }

    async filterAllLeadsbutton() {
        await this.page.locator("").click();

    }

    async manageColumnsButton() {
        await this.page.locator("").click();
    }

    async leadsPerPage50() {
        await this.page.locator("").click();
    }

    async leadsPerPage75() {
        await this.page.locator("").click();
    }

    async leadsPerPage200() {
        await this.page.locator("").click();
    }

    async forwardArrow() {
        await this.page.locator("").click();
    }

    async backArrow() {
        await this.page.locator("").click();
    }

    async bulkActions() {
        await this.page.locator("").click();
    }

    async bulkActionsClaim() {
        await this.page.locator("").click();
    }




}


