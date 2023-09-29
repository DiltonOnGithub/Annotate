import {test, expect, BrowserContext, Page } from '@playwright/test';
import { loginPage } from '../pages/login.page';

export const loginSteps ={
    login: async (page: Page, email: string, password: string) =>{
        await page.goto('https://staging.annotate.net/');
        await loginPage.loginJoinButton(page).click()
        await expect(page).toHaveURL('https://staging.annotate.net/login.php')
        await loginPage.emailInput(page).fill(email)
        await loginPage.passwordInput(page).fill(password)
        await loginPage.rememberMeCheck(page).check()
        await loginPage.loginButton(page).click()
        if(await loginPage.sessionCheck(page).isVisible()){
            await loginPage.sessionCheckButton(page).click()
        }
        await expect(page).toHaveURL('https://staging.annotate.net/instructor')
        //await page.waitForTimeout(10000)
         
        //await expect(loginPage.dashboardloader(page)).toBeVisible()
        await loginPage.dashboardloader(page).waitFor({state: "visible"})
        await loginPage.dashboardloader(page).waitFor({state: "hidden"})
    },
}