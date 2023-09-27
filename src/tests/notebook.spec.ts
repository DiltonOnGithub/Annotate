import {test, expect, BrowserContext,Page } from '@playwright/test';
import { notebookSteps } from '../steps/notebook.steps'
import { loginSteps } from '../steps/login.steps';
import data from '../../data.json';

const email = data["email"];
const password = data["password"];
const MyNotebook = "New Notebook 2023.2";

let context: BrowserContext;
let page: Page;

test.describe.serial('Notebook Test Cases', () => {
  test.beforeAll(async ({ browser}) => {
    context = await browser.newContext()
    page = await context.newPage()
    
    await loginSteps.login(page, email, password)
  }) 

  test("Create Notebook", async () => {
      test.setTimeout(120000)
      await expect(page).toHaveURL('https://staging.annotate.net/instructor')
      await notebookSteps.createNotebook(page, MyNotebook)
      await test.step('Assert Notebook', async ()=>{
        await notebookSteps.exitNotebook(page, MyNotebook)
        await notebookSteps.assertNotebook(page, MyNotebook)
      })
  })
  test("Delete Notebook", async () => {

  })
  test("Logout", async () => {
    await expect(page).toHaveURL('https://staging.annotate.net/instructor');
    await page.click("'Logout'");
    await expect(page).toHaveURL('https://staging.annotate.net/login.php');
  })
})