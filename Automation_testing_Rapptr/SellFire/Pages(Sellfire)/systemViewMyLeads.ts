import { Page } from "@playwright/test";

export default class systemViewMyLeads {
    constructor(public page: Page) { }


    async searchMyLeads(Search: string) {
        await this.page.locator("").type("Search");
    }

    async filterMyLeadsbutton() {
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

    async bulkActionsFavorite() {
        await this.page.locator("").click();
    }

    async bulkActionsCustomQueue() {
        await this.page.locator("").click();
    }

    async bulkActionsUnassign() {
        await this.page.locator("").click();
    }


}