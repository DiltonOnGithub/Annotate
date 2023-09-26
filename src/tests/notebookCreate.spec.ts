import {test, expect } from '@playwright/test';
import LoginPage from "../pages/login"
import createNotebook from '../pages/dashboard';
import data from '../../data.json';

const email = data["email"];
const password = data["password"];
const MyNotebook = "Loriem1hehe111";


test("Notebook", async ({page}) => {
    //test.setTimeout(120000);
    await page.goto('https://staging.annotate.net/');
    await page.getByRole('link', { name: 'Login / Join' }).click();
    await expect(page).toHaveURL('https://staging.annotate.net/login.php');
    const login = new LoginPage(page);
    await login.login(email, password);
    await expect(page).toHaveURL('https://staging.annotate.net/instructor');
    
    await test.step('Create Notebook', async ()=>{
        const Notebook = new createNotebook(page);
    });
    await test.step('Logout', async ()=>{
      await page.click("'Logout'");
      await expect(page).toHaveURL('https://staging.annotate.net/login.php');
    })   
});
