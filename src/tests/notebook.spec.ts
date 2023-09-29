import {test, expect, BrowserContext,Page } from '@playwright/test';
import { contentLibrarySteps } from '../steps/contentLibrary.steps'
import { loginSteps } from '../steps/login.steps';
import data from '../../data.json';

const email = data["email"];
const password = data["password"];
const MyNotebook1 = "New Notebook 2023.111";
const MyNotebook2 = "New Notebook 2023.222";
const MyNotebook3 = "New Notebook 2023.333";

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
      await contentLibrarySteps.contentLibraryFrame(page)
      await contentLibrarySteps.createNotebook(page, MyNotebook1)
      await contentLibrarySteps.createNotebook(page, MyNotebook2)
      await contentLibrarySteps.createNotebook(page, MyNotebook3)
      await test.step('Assert Notebook', async ()=>{
        await contentLibrarySteps.assertNotebook(page, MyNotebook1)
        await contentLibrarySteps.assertNotebook(page, MyNotebook2)
        await contentLibrarySteps.assertNotebook(page, MyNotebook3)
      })
  })
  test("Delete Notebook", async () => {
    await contentLibrarySteps.softDeleteNotebook(page, MyNotebook1)
    await contentLibrarySteps.softDeleteNotebook(page, MyNotebook2)
    
    await test.step('Delete Notebook From Trash', async ()=>{
      await contentLibrarySteps.openTrash(page)
      await contentLibrarySteps.hardDeleteNotebook(page, MyNotebook1)
    })
  })
  test("Restore Notebook", async () => {
    await contentLibrarySteps.softDeleteNotebook(page, MyNotebook3)
    await test.step('Restore Notebook From Trash', async ()=>{
      await contentLibrarySteps.openTrash(page)
      await contentLibrarySteps.restoreNotebook(page, MyNotebook3)
    })
  })
  test("Empty Trash", async () => {
    await expect(page).toHaveURL('https://staging.annotate.net/instructor')
    await contentLibrarySteps.emptyTrash(page)
  })
  test("Logout", async () => {
    await expect(page).toHaveURL('https://staging.annotate.net/instructor');
    //await page.reload({timeout: 5000})
    await page.click("'Logout'");
    await expect(page).toHaveURL('https://staging.annotate.net/login.php');
  })
  
})