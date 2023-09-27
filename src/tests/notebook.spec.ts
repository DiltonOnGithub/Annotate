import {test, expect, BrowserContext,Page } from '@playwright/test';
import LoginPage from "../pages/login"
import notebook from '../pages/Notebook';
import data from '../../data.json';
import {notebookSteps} from '../steps/notebook.steps'

const email = data["email"];
const password = data["password"];
const MyNotebook = "Dilton1234567890121";

let context: BrowserContext;
let page: Page;

const login = new LoginPage()
const Notebook = new notebook();

test.describe.serial('Notebook Test Cases', () => {
  test.beforeAll(async ({ browser}) => {
    context = await browser.newContext()
    page = await context.newPage()
    await login.login(context, page, email, password)
  }) 

  test("Create Notebook", async () => {
      await expect(page).toHaveURL('https://staging.annotate.net/instructor');
      await test.step('Create Notebook', async ()=>{
          await Notebook.createNotebook(context, page, MyNotebook);
      });
      await notebookSteps.exitNotebook(page, Notebook);
      await test.step('Logout', async ()=>{
        await expect(page).toHaveURL('https://staging.annotate.net/instructor');
        await page.click("'Logout'");
        await expect(page).toHaveURL('https://staging.annotate.net/login.php');
      })   
  })
})