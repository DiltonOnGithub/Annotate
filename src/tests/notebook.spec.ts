import {test, expect, BrowserContext,Page } from '@playwright/test';
import { notebookSteps } from '../steps/contentLibrary.steps'
import { loginSteps } from '../steps/login.steps';
import data from '../../data.json';

const email = data["email"];
const password = data["password"];
const MyNotebook1 = "New Notebook 2023.13";
const MyNotebook2 = "New Notebook 2023.14";
const MyNotebook3 = "New Notebook 2023.15";

let context: BrowserContext;
let page: Page;

test.describe.serial('Notebook Test Cases', () => {
  test.beforeAll(async ({ browser}) => {
    context = await browser.newContext()
    page = await context.newPage()
    
    await loginSteps.login(page, email, password)
  }) 

  test("Create Notebook", async () => {
      //test.setTimeout(120000)
      await notebookSteps.createNotebook(page, MyNotebook1)
      await notebookSteps.createNotebook(page, MyNotebook2)
      await notebookSteps.createNotebook(page, MyNotebook2)
      await test.step('Assert Notebook', async ()=>{
        await notebookSteps.assertNotebook(page, MyNotebook1)
        await notebookSteps.assertNotebook(page, MyNotebook2)
        await notebookSteps.assertNotebook(page, MyNotebook3)
      })
  })
  test("Delete Notebook", async () => {
    await expect(page).toHaveURL('https://staging.annotate.net/instructor')
    await notebookSteps.softDeleteNotebook(page, MyNotebook1)
    await notebookSteps.softDeleteNotebook(page, MyNotebook2)
    await test.step('Delete Notebook From Trash', async ()=>{
      await notebookSteps.openTrash(page)
      await notebookSteps.hardDeleteNotebook(page, MyNotebook1)
    })
  })
  test("Restore Notebook", async () => {
    await expect(page).toHaveURL('https://staging.annotate.net/instructor')
    await notebookSteps.softDeleteNotebook(page, MyNotebook3)
    await test.step('Restore Notebook From Trash', async ()=>{
      await notebookSteps.openTrash(page)
      await notebookSteps.restoreNotebook(page, MyNotebook3)
    })
  })
  test("Empty Trash", async () => {
    await expect(page).toHaveURL('https://staging.annotate.net/instructor')
    await notebookSteps.emptyTrash(page)
  })
  test("Logout", async () => {
    await expect(page).toHaveURL('https://staging.annotate.net/instructor');
    await page.reload({timeout: 5000})
    await page.click("'Logout'");
    await expect(page).toHaveURL('https://staging.annotate.net/login.php');
  })
  
})