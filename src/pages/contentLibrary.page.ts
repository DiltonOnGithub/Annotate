import { Page } from "@playwright/test";

export const contentLibraryPage = {
    contentPageLoader: (page: Page) => page.getByText('Loading Data...'),
    contentPageToolbar: (page: Page) => page.locator('//*[@data-id="XHomePanelToolbar"]//*[@data-id="Z" and text()="Content Library"]'),
    //trash Button
    trashButton: (page: Page) => page.locator('//*[@data-id="SubFolderContainer"]//*[@data-id="XSubFolderItem"]//*[@data-id="name" and text()="Trash"]'),
    trashItemNumber: (page: Page) => page.locator('//*[@data-id="SubFolderContainer"]//*[@data-id="XSubFolderItem"]//*[@data-id="SubfolderItemGridView"]//*[@data-id="Z" and contains(.,"items")]'),
    trashTitle: (page: Page) => page.locator('//*[@data-id="XUserDriveInfoBar"]//*[@data-id="ZWidgetClickable" and text()="Trash"]'),
    trashBackbutton: (page: Page) => page.locator('//*[@data-id="XUserDriveInfoBar"]//*[@data-id="XIconButton"]'),
    emptyTrashButton: (page: Page) => page.locator('//*[@data-id="FolderFileClipContainer"]//*[@data-id="XMenuItemWithIconAutoWidth"]//*[@data-id="Z" and text()="Empty Trash now"]'),
    trashNotebookCardRestore: (page: Page) => page.locator('//*[@data-id="TrashMoreOption"]//*[@data-id="XMenuItemWithIcon"]//*[@data-id="Z" and text()="Restore"]'),
    trashNotebookCardDelete: (page: Page) => page.locator('//*[@data-id="TrashMoreOption"]//*[@data-id="XMenuItemWithIcon"]//*[@data-id="Z" and text()="Delete"]'),
    trashConfirmRestoreBox: (page: Page) => page.locator('//*[@data-id="XMessageBox" and contains(.,"Restore Content")]'),
    trashConfirmDeleteBox: (page: Page) => page.locator('//*[@data-id="XMessageBox" and contains(.,"notebook will be permanently deleted.")]'),
    emptyTrashConfirmDeleteBox: (page: Page) => page.locator('//*[@data-id="XMessageBox" and contains(.,"All the items will be deleted permanently")]'),
    trashConfirmRestoreButton: (page: Page) => page.locator('//*[@data-id="XMessageBox"]//*[@data-id="XDialogFooter"]//*[@data-id="BUTTON_Restore" and text()="Restore"]'),
    trashConfirmDeleteButton: (page: Page) => page.locator('//*[@data-id="XMessageBox"]//*[@data-id="XDialogFooter"]//*[@data-id="BUTTON_Delete" and text()="Delete"]'),
    emptytrashConfirmDeleteButton: (page: Page) => page.locator('//*[@data-id="XMessageBox"]//*[@data-id="XDialogFooter"]//*[@data-id="BUTTON_Delete" and text()="Delete"]'),
    trashDeletingLoader: (page: Page) => page.getByText('Deleting Selected Items'),
    trashRestoreloader: (page: Page) => page.getByText('Restoring files'),
    trashEmptyDeletingloader: (page: Page) => page.getByText('Deleting All Items'),
    //Notebook Card
    notebookCardName: (page: Page, notebookName: string) => page.locator(`//*[@data-id="FolderFileClipContainer"]//*[@data-id="LessonListContainer"]//*[@data-id="XLessonListItem"]//*[@data-id="Z"]//*[@data-id="name" and @title="${notebookName}"]`),
    notebookCardDots:  (page: Page, notebookName: string) => page.locator(`//*[@data-id="FolderFileClipContainer"]//*[@data-id="LessonListContainer"]//*[@data-id="XLessonListItem"]//*[@data-id="Z"]//*[@data-id="name" and @title="${notebookName}"]/following-sibling::div[1]//div[1]`),
    notebookCardMenu:  (page: Page) => page.locator('//*[@data-id="LessonMoreOptions"]'),
    notebookCardMenuMoreButton:  (page: Page) => page.locator('//*[@data-id="LessonMoreOptions"]//*[@data-id="XMenuItemWithForm"]//*[@data-id="Z" and text()="More"]'),
    notebookCardMoreMenu:  (page: Page) => page.locator('//*[@data-id="LessonMoreOptionForm2"]'),
    notebookDeleteButton:  (page: Page) => page.locator('//*[@data-id="LessonMoreOptionForm2"]//*[@data-id="XMenuItemWithIcon"]//*[@data-id="Z" and text()="Delete"]'),
    //Fab Button
    fabButton: (page: Page) => page.locator('//*[@data-id="HomePanel"]//*[@data-id="MyDriveWidget"]//*[@class="widget fab" and @data-id="XFAB"]//*[@data-id="XIconButton"]//div[@data-id="XIcon"]'),
    containerFabBox: (page: Page) => page.locator('//*[@data-id="XFABContainer"]'),
    //create notebook fab
    fabNotebook: (page: Page) => page.locator('//*[@data-id="XFABContainer"]//*[@id="1401"]//div[@data-id="Z" and text()="Notebook"]'),
    createbotebookDialogBox: (page: Page) => page.locator('//*[@data-id="NewNotebookDialog"]'),
    createNotebookInput: (page: Page) => page.locator('//*[@data-id="NewNotebookDialog"]//input[@data-id="ZInputWidget"]'),
    createNotebookButton: (page: Page) => page.locator('//*[@data-id="NewNotebookDialog"]//*[@data-id="XButton" and text()="Create"]'),
    notebookLoader1: (page: Page) => page.getByText('Creating notebook...'),
    notebookLoader2: (page: Page) => page.getByText('Loading Notebook...'),
    notebookLoader3: (page: Page) => page.getByText('Parsing Notebook...'),
    

}