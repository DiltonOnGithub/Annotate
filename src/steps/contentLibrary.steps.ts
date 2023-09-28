import {test, expect, BrowserContext, Page } from '@playwright/test';
import { contentLibraryPage } from '../pages/contentLibrary.page'
import { notebookCanvaspage } from '../pages/notebookCanvas.page';
var number;
export const contentLibrarySteps = {

    contentLibraryFrame: async (page: Page) => {
        await expect(contentLibraryPage.contentPageToolbar(page)).toBeVisible()
    },

    contentLibraryFabButton: async (page: Page) => {
        await expect(contentLibraryPage.fabButton(page)).toBeVisible()
        await contentLibraryPage.fabButton(page).click()
        await expect(contentLibraryPage.containerFabBox(page)).toBeVisible()
    },

    createNotebook: async (page: Page, notebookName: string) =>{
        await contentLibrarySteps.contentLibraryFrame(page)
        await contentLibrarySteps.contentLibraryFabButton(page)
        await contentLibraryPage.fabNotebook(page).click()
        await contentLibraryPage.createNotebookInput(page).fill(notebookName)
        await contentLibraryPage.createNotebookButton(page).click()
        await expect(notebookCanvaspage.notebookToolbar(page)).toBeVisible({timeout:3000})
        await expect(notebookCanvaspage.notebookName(page)).toHaveText(notebookName)
        await contentLibrarySteps.exitNotebook(page, notebookName)
    },

    assertNotebook: async(page: Page, notebookName: string) =>{
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).toBeVisible()
    },

    softDeleteNotebook: async(page: Page, notebookName: string) => {
        await contentLibrarySteps.assertNotebook(page, notebookName)
        await contentLibraryPage.notebookCardDots(page, notebookName).click()
        await expect(contentLibraryPage.notebookCardMenu(page)).toBeVisible()
        await contentLibraryPage.notebookCardMenuMoreButton(page).click()
        await expect(contentLibraryPage.notebookCardMoreMenu(page)).toBeVisible()
        await contentLibraryPage.notebookDeleteButton(page).click()
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).not.toBeVisible()
    },

    trashBox: async(page: Page) => {
        await expect(contentLibraryPage.trashButton(page)).toBeVisible()
        number = parseInt((await contentLibraryPage.trashItemNumber(page).innerHTML()).split(' ')[0])
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
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).not.toBeVisible()
        await contentLibraryPage.trashBackbutton(page).click()
    },

    emptyTrash: async(page: Page) => {
        await contentLibrarySteps.openTrash(page)
        if(parseInt(number) > 0){
            await contentLibraryPage.trashButton(page).click()
            await expect(contentLibraryPage.trashTitle(page)).toHaveText("Trash")
            await expect(contentLibraryPage.emptyTrashButton(page)).toBeVisible()
            await contentLibraryPage.emptyTrashButton(page).click()
            await expect(contentLibraryPage.emptyTrashConfirmDeleteBox(page)).toBeVisible()
            await contentLibraryPage.emptytrashConfirmDeleteButton(page).click()
            //loader
            await contentLibraryPage.trashBackbutton(page).click()   
        }
        await contentLibrarySteps.trashBox(page)
        await expect(number==0)
    },
    restoreNotebook: async(page: Page, notebookName: string) => {
        var prevNum = number
        
        await contentLibraryPage.notebookCardDots(page, notebookName).click()
        await contentLibraryPage.trashNotebookCardRestore(page).click()
        await expect(contentLibraryPage.trashConfirmRestoreBox(page)).toBeVisible()
        await contentLibraryPage.trashConfirmRestoreButton(page).click()
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).not.toBeVisible()
        await contentLibraryPage.trashBackbutton(page).click()
        await contentLibrarySteps.trashBox(page)
        await expect(number==prevNum-1)       
    },
    exitNotebook: async (page: Page, notebookName: string) => {
        await expect(notebookCanvaspage.notebookToolbar(page)).toBeVisible()
        await expect(notebookCanvaspage.notebookName(page)).toHaveText(notebookName)
        await notebookCanvaspage.backArrowButton(page).click()
        await page.waitForTimeout(3000)
    }
}