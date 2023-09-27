import {test, expect, BrowserContext, Page } from '@playwright/test';
import { contentLibraryPage } from '../pages/contentLibrary.page'
import { notebookCanvaspage } from '../pages/notebookCanvas.page';
import { TIMEOUT } from 'dns';

export const notebookSteps ={
    createNotebook: async (page: Page, notebookName: string) =>{
        await expect(contentLibraryPage.contentPageToolbar(page)).toBeVisible({timeout:10000})
        await contentLibraryPage.fabButton(page).click()
        await expect(contentLibraryPage.containerFabBox(page)).toBeVisible()
        await contentLibraryPage.fabNotebook(page).click()
        await expect(contentLibraryPage.createbotebookDialogBox(page)).toBeVisible()
        await contentLibraryPage.createNotebookInput(page).fill(notebookName)
        await contentLibraryPage.createNotebookButton(page).click()

        await expect(notebookCanvaspage.notebookToolbar(page)).toBeVisible({timeout:10000})
        await expect(notebookCanvaspage.notebookName(page)).toHaveText(notebookName)
    },
    assertNotebook: async(page: Page, notebookName: string) =>{
        await expect(contentLibraryPage.contentPageToolbar(page)).toBeVisible()
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).toBeVisible()
    },
    softDeleteNotebook: async(page: Page, notebookName: string) => {
        await expect(contentLibraryPage.contentPageToolbar(page)).toBeVisible()
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).toBeVisible()
        await contentLibraryPage.notebookCardDots(page, notebookName).click()
        await expect(contentLibraryPage.notebookCardMenu(page)).toBeVisible()
        await contentLibraryPage.notebookCardMenuMoreButton(page).click()
        await expect(contentLibraryPage.notebookCardMoreMenu(page)).toBeVisible()
        await contentLibraryPage.notebookDeleteButton(page).click()
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).not.toBeVisible()
    },
    openTrash: async(page: Page) => {
        await expect(contentLibraryPage.contentPageToolbar(page)).toBeVisible()
        await expect(contentLibraryPage.trashButton(page)).toBeVisible()
        await contentLibraryPage.trashButton(page).click()
        await expect(contentLibraryPage.trashTitle(page)).toHaveText("Trash")
    },
    hardDeleteNotebook: async(page: Page, notebookName: string) => {
        await expect(contentLibraryPage.trashTitle(page)).toHaveText("Trash")
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).toBeVisible()
        await contentLibraryPage.notebookCardDots(page, notebookName).click()
        await contentLibraryPage.trashNotebookCardDelete(page).click()
        await expect(contentLibraryPage.trashConfirmDeleteBox(page)).toBeVisible()
        await contentLibraryPage.trashConfirmDeleteButton(page).click()
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).not.toBeVisible()
        await contentLibraryPage.trashBackbutton(page).click()
    },
    emptyTrash: async(page: Page) => {
        await expect(contentLibraryPage.contentPageToolbar(page)).toBeVisible()
        await expect(contentLibraryPage.trashButton(page)).toBeVisible()
        await contentLibraryPage.trashButton(page).click()
        await expect(contentLibraryPage.trashTitle(page)).toHaveText("Trash")
        await expect(contentLibraryPage.emptyTrashButton(page)).toBeVisible()
        await contentLibraryPage.emptyTrashButton(page).click()
        await expect(contentLibraryPage.trashConfirmDeleteBox(page)).toBeVisible()
        await contentLibraryPage.trashConfirmDeleteButton(page).click()
        //loader
        await contentLibraryPage.trashBackbutton(page).click()
    },
    exitNotebook: async (page: Page, notebookName: string) => {
        await expect(notebookCanvaspage.notebookToolbar(page)).toBeVisible()
        await expect(notebookCanvaspage.notebookName(page)).toHaveText(notebookName)
        await notebookCanvaspage.backArrowButton(page).click()
    }
}