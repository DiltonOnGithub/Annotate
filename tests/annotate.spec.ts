import {test, expect } from '@playwright/test';
import LoginPage from "../login"
import data from '../data.json';

const email = data["email"];
const password = data["password"];


test("Annotate Login", async ({page}) => {
  
    test.setTimeout(120000);
    
    await page.goto('https://staging.annotate.net/');
    await page.getByRole('link', { name: 'Login / Join' }).click();
    await expect(page).toHaveURL('https://staging.annotate.net/login.php');
    
    const login = new LoginPage(page);
    await login.login(email, password);

    
    await expect(page).toHaveURL('https://staging.annotate.net/instructor');
    await page.click("'Logout'");
    await expect(page).toHaveURL('https://staging.annotate.net/login.php');
  });