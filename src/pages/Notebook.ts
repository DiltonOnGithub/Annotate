import { BrowserContext, Page, expect } from "@playwright/test";
export default class Notebook {
    page: Page;
    context: BrowserContext;
    constructor() { }
    async createNotebook(context: BrowserContext, page: Page, NotebookName: string) {
        this.page = page;
        this.context = context;
        await this.page.locator('xpath=//div[@data-id="HomePanel"]//div[@class="widget" and @data-id="MyDriveWidget"]//div[@class="widget fab" and @data-id="XFAB"]//div[@data-id="XIconButton"]//div[@class="widget icon icon-plus" and @data-id="XIcon"]').click();
        //const containerBox = this.page.locator('xpath=//div[@class="widget fab-action-container" and @data-id="XFABContainer"]')
        //expect(containerBox);
        await this.page.locator('xpath=//div[@class="widget fab-action-container"]//div[@class="widget clickable fab-action"]//div[@class="widget label" and text()="Notebook"]').click();
        const dialogBox = this.page.locator('xpath=//div[@class="widget xdialog" and @data-id="NewNotebookDialog"]')
        expect(dialogBox).toBeVisible();
        //await this.page.locator('xpath=//div[@class="widget input-widget-container active" and @data-id="XInputWidget"]//input[@class="widget input-widget"]').click();
        await this.page.locator('//*[@data-id="NewNotebookDialog"]//input[@data-id="ZInputWidget"]').fill(NotebookName);
        //await this.page.getByRole('textbox').click();
        //await this.page.getByRole('textbox').fill(NotebookName);
        await this.page.locator('xpath=//div[@class="widget xdialog" and @data-id="NewNotebookDialog"]//div[@class="widget footer" and @data-id="XDialogFooter"]//div[@class="widget clickable button" and text()="Create"]').click();
        expect(this.page.locator('xpath=//div[@class="widget toolbar drawing-toolbar" and @data-id="XNotebookToolbar"]//div[@class="widget label" and @data-id="Z"]')).toHaveText(NotebookName);
        

    }
    async backButton(page: Page){
        this.page = page;
        const bb = this.page.locator('xpath=//div[@class="widget toolbar drawing-toolbar" and @data-id="XNotebookToolbar"]//div[@class="widget clickable icon-button dark" and @data-id="XToolbarButton" and @id="201"]//div[@class="widget icon icon-back"]').click();

}
}