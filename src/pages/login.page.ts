import { Page } from "@playwright/test";


export const loginPage = {
    //staging home page
    loginJoinButton: (page: Page) => page.getByRole('link', { name: 'Login / Join' }),
    //login page
    emailInput: (page: Page) => page.locator('#txtUsername'),
    passwordInput: (page: Page) => page.locator('#txtPassword'),
    rememberMeCheck: (page: Page) => page.getByLabel('Remember me'),
    backArrowButton: (page: Page) => page.locator('//*[@data-id="XNotebookToolbar"]//*[@id="201"]//div[@data-id="XIcon"]'),
    loginButton: (page: Page) => page.getByRole('button', { name: 'Login' }),
}