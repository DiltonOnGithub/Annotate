import { Page } from "@playwright/test";

export const contentLibraryPage = {
    contentPageToolbar: (page: Page) => page.locator('//*[@data-id="XHomePanelToolbar"]//*[@data-id="Z" and text()="Content Library"]'),
    //Notebook Card
    notebookCardName: (page: Page, notebookName: string) => page.locator(`//*[@data-id="FolderFileClipContainer"]//*[@data-id="LessonListContainer"]//*[@data-id="XLessonListItem"]//*[@data-id="Z"]//*[@data-id="name" and text()=${notebookName}]`),
    notebookCardDots:  (page: Page, notebookName: string) => page.locator(`//*[@data-id="FolderFileClipContainer"]//*[@data-id="LessonListContainer"]//*[@data-id="XLessonListItem"]//*[@data-id="Z"]//*[@data-id="name" and text()=${notebookName}]/following-sibling::div[1]//div[1]`),
    notebookCardMenu:  (page: Page) => page.locator('//*[@data-id="LessonMoreOptions"]'),
    notebookCardMenuMoreButton:  (page: Page) => page.locator('//*[@data-id="LessonMoreOptions"]//*[@data-id="XMenuItemWithForm"]//*[@data-id="Z" and text()="More"]'),
    notebookCardMoreMenu:  (page: Page) => page.locator('//*[@data-id="LessonMoreOptionForm2"]'),
    notebookDeleteButton:  (page: Page) => page.locator('//*[@data-id="LessonMoreOptionForm2"]//*[@data-id="XMenuItemWithIcon"]//*[@data-id="Z" and text()="Delete"]'),
    //Fab Button
    fabButton: (page: Page) => page.locator('//*[@data-id="HomePanel"]//*[@data-id="MyDriveWidget"]//*[@data-id="XFAB"]//*[@data-id="XIconButton"]//*[@data-id="XIcon"]'),
    containerFabBox: (page: Page) => page.locator('//*[@data-id="XFABContainer"]'),
    //create notebook fab
    fabNotebook: (page: Page) => page.locator('//*[@data-id="XFABContainer"]//*[@id="1401"]/div[2]//div[@class="widget label" and text()="Notebook"]'),
    createbotebookDialogBox: (page: Page) => page.locator('//*[@data-id="NewNotebookDialog"]'),
    createNotebookInput: (page: Page) => page.locator('//*[@data-id="NewNotebookDialog"]//input[@data-id="ZInputWidget"]'),
    createNotebookButton: (page: Page) => page.locator('//*[@data-id="NewNotebookDialog"]//*[@data-id="XButton" and text()="Create"]'),
}