import {test, expect, BrowserContext, Page } from '@playwright/test';
import notebook from '../pages/Notebook'

export const notebookSteps ={
    exitNotebook: async (page: Page, notebook: notebook) => {
        await test.step('Exit Notebook', async() => {
            await notebook.backButton(page);
        })
    }
}