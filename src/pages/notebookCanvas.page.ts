import { Page } from "@playwright/test";


export const notebookCanvaspage = {
    notebookToolbar: (page: Page) => page.locator('//*[@data-id="XNotebookToolbar"]'),
    notebookName: (page: Page) => page.locator('//*[@data-id="XNotebookToolbar"]//*[@data-id="Z" and text()]'),
    backArrowButton: (page: Page) => page.locator('//*[@data-id="XNotebookToolbar"]//*[@id="201"]//div[@data-id="XIcon"]'),
}
