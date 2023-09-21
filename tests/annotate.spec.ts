import {test, expect } from '@playwright/test';
import data from '../data.json';

test("Annotate Login", async ({page}) => {
  
    test.setTimeout(120000);
    
    await page.goto('https://staging.annotate.net/');
    await page.getByRole('link', { name: 'Login / Join' }).click();
    await expect(page).toHaveURL('https://staging.annotate.net/login.php');

    await page.locator('#txtUsername').click();
    await page.locator('#txtUsername').fill(data["email"]);
    await page.locator('#txtPassword').click();
    await page.locator('#txtPassword').fill(data["password"]);
    await page.getByLabel('Remember me').check();
    await page.getByRole('button', { name: 'Login' }).click();

    if(await page.isVisible("text='You seem to be already logged in '")){
      await page.getByRole('button', { name: 'Yes' }).click();
    }

    await expect(page).toHaveURL('https://staging.annotate.net/instructor');
    await page.click("'Logout'");
    await expect(page).toHaveURL('https://staging.annotate.net/login.php');
  });