import { BrowserContext, Page, expect } from "@playwright/test";

export default class LoginPage {
    page: Page;
    context: BrowserContext;
    constructor() {
        
    }
    async login(context: BrowserContext, page: Page, email: string, password: string) {
        this.page = page;
        this.context = context;
        await this.page.goto('https://staging.annotate.net/');
        await this.page.getByRole('link', { name: 'Login / Join' }).click();
        await expect(this.page).toHaveURL('https://staging.annotate.net/login.php');
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.RememberMe();
        await this.clickLoginBtn();
    }

    async enterEmail(emailaddress: string) {
        await this.page.locator('#txtUsername').click();
        await this.page.locator('#txtUsername').fill(emailaddress);
    }

    async enterLoginPassword(password: string) {
        await this.page.locator('#txtPassword').click();
        await this.page.locator('#txtPassword').fill(password);
    }
    async RememberMe(){
        await this.page.getByLabel('Remember me').check();
    }
    async clickLoginBtn() {
        await Promise.all([
            this.page.getByRole('button', { name: 'Login' }).click()
        ]);
        if(await this.page.isVisible("text='You seem to be already logged in '")){
            await this.page.getByRole('button', { name: 'Yes' }).click();
        }
    }
}