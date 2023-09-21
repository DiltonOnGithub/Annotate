import { Page } from "@playwright/test";
export default class LoginPage {

    constructor(public page: Page) { }
    async login(email: string, password: string) {
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