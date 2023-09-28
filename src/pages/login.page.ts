import { Page } from "@playwright/test";


export const loginPage = {
    //staging home page
    loginJoinButton: (page: Page) => page.getByRole('link', { name: 'Login / Join' }),
    //login page
    emailInput: (page: Page) => page.locator('#txtUsername'),
    passwordInput: (page: Page) => page.locator('#txtPassword'),
    rememberMeCheck: (page: Page) => page.getByLabel('Remember me'),
    loginButton: (page: Page) => page.getByRole('button', { name: 'Login' }),
    sessionCheck: (page: Page) => page.getByText('You seem to be already logged in '),
    sessionCheckButton: (page: Page) => page.getByRole('button', { name: 'Yes' }),
    dashboardloader: (page: Page) => page.getByText('Loading resources...')

}