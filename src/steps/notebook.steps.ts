import {test, expect, BrowserContext, Page } from '@playwright/test';
import { contentLibraryPage } from '../pages/contentLibrary.page'
import { notebookCanvaspage } from '../pages/notebookCanvas.page';

export const notebookSteps ={
    createNotebook: async (page: Page, notebookName: string) =>{
        await page.waitForTimeout(10000)
        await expect(contentLibraryPage.contentPageToolbar(page)).toBeVisible()
        await contentLibraryPage.fabButton(page).click()
        await expect(contentLibraryPage.containerFabBox(page)).toBeVisible()
        await contentLibraryPage.fabNotebook(page).click()
        await expect(contentLibraryPage.createbotebookDialogBox(page)).toBeVisible()
        await contentLibraryPage.createNotebookInput(page).fill(notebookName)
        await contentLibraryPage.createNotebookButton(page).click()
        await expect(notebookCanvaspage.notebookToolbar(page)).toBeVisible()
        await expect(notebookCanvaspage.notebookName(page)).toHaveText(notebookName)
    },
    assertNotebook: async(page: Page, notebookName: string) =>{
        await expect(contentLibraryPage.contentPageToolbar(page)).toBeVisible()
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).toBeVisible()
    },
    softdeleteNotebook: async(page: Page, notebookName: string) => {
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).toBeVisible()
        await contentLibraryPage.notebookCardDots(page, notebookName).click()
        await expect(contentLibraryPage.notebookCardMenu(page)).toBeVisible()
        await contentLibraryPage.notebookCardMenuMoreButton(page).click()
        await expect(contentLibraryPage.notebookCardMoreMenu(page)).toBeVisible()
        await contentLibraryPage.notebookDeleteButton(page).click()
        await expect(contentLibraryPage.notebookCardName(page, notebookName).count()).toEqual(0);
    },
    harddeleteNotebook: async(page: Page, notebookName: string) => {
        await expect(contentLibraryPage.notebookCardName(page, notebookName)).toBeVisible()
        await contentLibraryPage.notebookCardDots(page, notebookName).click()
        await expect(contentLibraryPage.notebookCardMenu(page)).toBeVisible()
        await contentLibraryPage.notebookCardMenuMoreButton(page).click()
        await expect(contentLibraryPage.notebookCardMoreMenu(page)).toBeVisible()
        await contentLibraryPage.notebookDeleteButton(page).click()
        await expect(contentLibraryPage.notebookCardName(page, notebookName).count()).toEqual(0);
    },
    exitNotebook: async (page: Page, notebookName: string) => {
        await expect(notebookCanvaspage.notebookToolbar(page)).toBeVisible()
        await expect(notebookCanvaspage.notebookName(page)).toHaveText(notebookName)
        await notebookCanvaspage.backArrowButton(page).click()
    }
}