import {test, expect, BrowserContext, Page } from '@playwright/test';
import { contentLibraryPage } from '../pages/contentLibrary.page'
import { notebookCanvaspage } from '../pages/notebookCanvas.page';
var number;
export const contentLibrarySteps = {

    contentLibraryFrame: async (page: Page) => {
        await contentLibraryPage.contentPageLoader(page).waitFor({state: "visible"})
        await contentLibraryPage.contentPageLoader(page).waitFor({state: "hidden"})
        //await contentLibraryPage.contentPageToolbar(page).waitFor({state: "visible"})
        await expect(contentLibraryPage.contentPageToolbar(page)).toBeVisible()
    },

    contentLibraryFabButton: async (page: Page) => {
        await contentLibraryPage.fabButton(page).waitFor({state: "visible"})
        await expect(contentLibraryPage.fabButton(page)).toBeVisible()
        await contentLibraryPage.fabButton(page).click()
        await expect(contentLibraryPage.containerFabBox(page)).toBeVisible()
    },

    createNotebook: async (page: Page, notebookName: string) =>{
        await contentLibrarySteps.contentLibraryFabButton(page)
        await contentLibraryPage.fabNotebook(page).click()
        await contentLibraryPage.createNotebookInput(page).fill(notebookName)
        await contentLibraryPage.createNotebookButton(page).click()
        // await contentLibraryPage.notebookLoader1(page).waitFor({state: "visible"})
        // await contentLibraryPage.notebookLoader1(page).waitFor({state: "hidden"})
        // await contentLibraryPage.notebookLoader2(page).waitFor({state: "visible"})
        // await contentLibraryPage.notebookLoader2(page).waitFor({state: "hidden"})
        // await contentLibraryPage.notebookLoader3(page).waitFor({state: "visible"})
        // await contentLibraryPage.notebookLoader3(page).waitFor({state: "hidden"})
        await notebookCanvaspage.notebookToolbar(page).waitFor({state: "visible"})
        await expect(notebookCanvaspage.notebookToolbar(page)).toBeVisible()
        await expect(notebookCanvaspage.notebookName(page)).toHaveText(notebookName)
        await contentLibrarySteps.exitNotebook(page, notebookName)
    },

    assertNotebook: async(page: Page, notebookName: string) =>{
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).toBeVisible()
    },

    softDeleteNotebook: async(page: Page, notebookName: string) => {
        await contentLibrarySteps.assertNotebook(page, notebookName)
        await contentLibraryPage.notebookCardDots(page, notebookName).click({ force: true })
        await expect(contentLibraryPage.notebookCardMenu(page)).toBeVisible()
        await contentLibraryPage.notebookCardMenuMoreButton(page).click()
        await expect(contentLibraryPage.notebookCardMoreMenu(page)).toBeVisible()
        await contentLibraryPage.notebookDeleteButton(page).click()
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).not.toBeVisible()
    },

    trashBox: async(page: Page) => {
        await expect(contentLibraryPage.trashButton(page)).toBeVisible()
        number = parseInt((await contentLibraryPage.trashItemNumber(page).innerHTML()).split(' ')[0])
        console.log("Number of items: "+number )
    },

    openTrash: async(page: Page) => {
        await contentLibrarySteps.trashBox(page)
        await contentLibraryPage.trashButton(page).click()
        await expect(contentLibraryPage.trashTitle(page)).toHaveText("Trash")
    },

    hardDeleteNotebook: async(page: Page, notebookName: string) => {
        await contentLibrarySteps.assertNotebook(page, notebookName)
        await contentLibraryPage.notebookCardDots(page, notebookName).click()
        await contentLibraryPage.trashNotebookCardDelete(page).click()
        await expect(contentLibraryPage.trashConfirmDeleteBox(page)).toBeVisible()
        await contentLibraryPage.trashConfirmDeleteButton(page).click()
        // await contentLibraryPage.trashDeletingLoader(page).waitFor({state: "visible"})
        // await contentLibraryPage.trashDeletingLoader(page).waitFor({state: "hidden"})
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).not.toBeVisible()
        await contentLibraryPage.trashBackbutton(page).click()
    },

    emptyTrash: async(page: Page) => {
        await contentLibrarySteps.openTrash(page)
        if(parseInt(number) > 0){
            await expect(contentLibraryPage.emptyTrashButton(page)).toBeVisible()
            await contentLibraryPage.emptyTrashButton(page).click()
            await expect(contentLibraryPage.emptyTrashConfirmDeleteBox(page)).toBeVisible()
            await contentLibraryPage.emptytrashConfirmDeleteButton(page).click()
            if(await contentLibraryPage.trashEmptyDeletingloader(page).isVisible()){
                await contentLibraryPage.trashEmptyDeletingloader(page).waitFor({state: "hidden"})
            }
            await contentLibraryPage.trashBackbutton(page).click()   
        }
        await contentLibrarySteps.trashBox(page)
        console.log("Called empty trash:")
        await expect(number).toEqual(0)
    },
    restoreNotebook: async(page: Page, notebookName: string) => {
        var prevNum = number
        await contentLibraryPage.notebookCardDots(page, notebookName).click()
        await contentLibraryPage.trashNotebookCardRestore(page).click()
        await expect(contentLibraryPage.trashConfirmRestoreBox(page)).toBeVisible()
        await contentLibraryPage.trashConfirmRestoreButton(page).click()
        // await contentLibraryPage.trashRestoreloader(page).waitFor({state: "visible"})
        // await contentLibraryPage.trashRestoreloader(page).waitFor({state: "hidden"})
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).not.toBeVisible()
        await contentLibraryPage.trashBackbutton(page).click()
        await contentLibrarySteps.trashBox(page)
        console.log("Called restore:")
        await expect(number).toEqual(prevNum-1)       
    },
    exitNotebook: async (page: Page, notebookName: string) => {
        await expect(notebookCanvaspage.notebookToolbar(page)).toBeVisible()
        await expect(notebookCanvaspage.notebookName(page)).toHaveText(notebookName)
        await notebookCanvaspage.backArrowButton(page).click()
    }
}

// test('test', async ({ page }) => {
//   await page.goto('https://staging.annotate.net/login.php');
//   await page.locator('#txtUsername').click();
//   await page.locator('#txtUsername').fill('dilton.d\'souza@zeuslearning.com');
//   await page.locator('#txtUsername').press('Tab');
//   await page.locator('#txtPassword').fill('Diltonlovesannotate@1098#');
//   await page.getByLabel('Remember me').check();
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('button', { name: 'Yes' }).click();
//   await page.getByRole('img').nth(1).click();
//   await page.locator('div').filter({ hasText: 'Loading resources...' }).nth(2).click();
//   await page.goto('https://staging.annotate.net/instructor');
//   await page.getByText('Logout').click();
//   await page.locator('.widget > div:nth-child(3) > div:nth-child(3)').first().click();
//   await page.locator('div').filter({ hasText: /^Logout$/ }).first().click();
//   await page.locator('div').filter({ hasText: /^Logout$/ }).first().click();
//   await page.locator('div').filter({ hasText: /^Logout$/ }).first().click();
//   await page.getByText('Logout').click();
//   await page.goto('https://staging.annotate.net/instructor');
//   await page.locator('div').filter({ hasText: 'Creating notebook...' }).nth(2).click();
//   await page.getByText('Creating notebook...').click();
//   await page.locator('div').filter({ hasText: 'Creating notebook...' }).nth(2).click();
//   await page.locator('div').filter({ hasText: 'Creating notebook...' }).nth(2).click({
//     button: 'right'
//   });
//   await page.locator('div:nth-child(3) > div:nth-child(27) > div > div:nth-child(3)').click();
//   await page.locator('div').filter({ hasText: 'Creating notebook...' }).nth(2).click();
//   await page.goto('https://staging.annotate.net/instructor');
//   await page.goto('https://staging.annotate.net/logout.php');
//   await page.goto('https://staging.annotate.net/login.php');
//   await page.goto('https://staging.annotate.net/logout.php');
//   await page.goto('https://staging.annotate.net/login.php');
//   await page.goto('https://staging.annotate.net/instructor');
//   await page.goto('chrome-error://chromewebdata/');
//   await page.goto('https://staging.annotate.net/instructor');
//   await page.locator('div').filter({ hasText: 'Loading Data...' }).nth(2).click();
//   await page.locator('div:nth-child(3) > div:nth-child(27) > div > div > div:nth-child(2)').click();
//   await page.getByText('Trash1 item').click();
//   await page.getByText('Empty FolderEmpty Trash nowFiles').click();
//   await page.goto('https://staging.annotate.net/instructor');
//   await page.locator('div').filter({ hasText: /^More$/ }).first().click();
//   await page.getByText('Moving files to TrashCancel').click();
//   await page.getByText('Trash').click();
// });