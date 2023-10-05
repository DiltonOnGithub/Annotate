import {test, expect, BrowserContext,Page } from '@playwright/test';
import { contentLibrarySteps } from '../steps/contentLibrary.steps'
import { loginSteps } from '../steps/login.steps';
import data from '../../data.json';

const email = data["email"];
const password = data["password"];


const timestamp = new Date().getTime().toString()
const MyNotebook1 = "New Notebook "+timestamp+" 1";
const MyNotebook2 = "New Notebook "+timestamp+" 2";
const MyNotebook3 = "New Notebook "+timestamp+" 3";

let instructoContext: BrowserContext;
let instructorPage: Page;


test.describe.serial('Notebook Test Cases', () => {
  test.beforeAll(async ({ browser}) => {
    instructoContext = await browser.newContext()
    instructorPage = await instructoContext.newPage()
    await loginSteps.login(instructorPage, email, password)
  }) 

  test("Create Notebook", async () => {
      test.setTimeout(120000)
      await contentLibrarySteps.contentLibraryFrame(instructorPage)
      await contentLibrarySteps.createNotebook(instructorPage, MyNotebook1)
      await contentLibrarySteps.createNotebook(instructorPage, MyNotebook2)
      await contentLibrarySteps.createNotebook(instructorPage, MyNotebook3)
      await test.step('Assert Notebook', async ()=>{
        await contentLibrarySteps.assertNotebook(instructorPage, MyNotebook1)
        await contentLibrarySteps.assertNotebook(instructorPage, MyNotebook2)
        await contentLibrarySteps.assertNotebook(instructorPage, MyNotebook3)
      })
  })

  test("Delete Notebook", async () => {
    await contentLibrarySteps.softDeleteNotebook(instructorPage, MyNotebook1)
    await contentLibrarySteps.softDeleteNotebook(instructorPage, MyNotebook2)
    await test.step('Delete Notebook From Trash', async ()=>{
      await contentLibrarySteps.openTrash(instructorPage)
      await contentLibrarySteps.hardDeleteNotebook(instructorPage, MyNotebook1)
    })
  })

  test("Restore Notebook", async () => {
    await contentLibrarySteps.softDeleteNotebook(instructorPage, MyNotebook3)
    await test.step('Restore Notebook From Trash', async ()=>{
      await contentLibrarySteps.openTrash(instructorPage)
      await contentLibrarySteps.restoreNotebook(instructorPage, MyNotebook3)
    })
  })

  test("Empty Trash", async () => {
    await contentLibrarySteps.emptyTrash(instructorPage)
  })

  test("Logout", async () => {
    await expect(instructorPage).toHaveURL('https://staging.annotate.net/instructor');
    //await page.reload({timeout: 5000})
    await instructorPage.click("'Logout'");
    await expect(instructorPage).toHaveURL('https://staging.annotate.net/login.php');
  })
  
})