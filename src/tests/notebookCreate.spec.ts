import {test, expect } from '@playwright/test';
import LoginPage from "../pages/login"
import data from '../../data.json';

const email = data["email"];
const password = data["password"];

const MyNotebook = "Loriem Ipsum";
test("Create Notebook", async ({page}) => {
  
    test.setTimeout(120000);
    
    await page.goto('https://staging.annotate.net/');
    await page.getByRole('link', { name: 'Login / Join' }).click();
    await expect(page).toHaveURL('https://staging.annotate.net/login.php');
    
    const login = new LoginPage(page);
    await login.login(email, password);

    
    await expect(page).toHaveURL('https://staging.annotate.net/instructor');
    //await page.click("'Logout'");
    //await expect(page).toHaveURL('https://staging.annotate.net/login.php');

    await page.locator('xpath=//div[@class="widget" and @data-id="HomePanel"]//div[@class="widget" and @data-id="MyDriveWidget"]//div[@class="widget fab" and @data-id="XFAB"]//div[@class="widget clickable icon-button fab-menu-button" and @data-id="XIconButton"]//div[@class="widget icon icon-plus" and @data-id="XIcon"]').click();
    const newNotebook = page.locator('xpath=//div[@class="widget fab-action-container"]//div[@class="widget label" and @data-id="Z" and text()="Notebook"]')
    expect(newNotebook);
    await newNotebook.click();
    //expect (page.locator('xpath=//div[@class="widget xdialog" and @data-id="NewNotebookDialog"]'));
    //await page.locator('xpath=//div[@class="widget xdialog" and @data-id="NewNotebookDialog"]//input[@class="widget input-widget" and @data-id="ZInputWidget"]').click();
    //await page.locator('xpath=//div[@class="widget xdialog" and @data-id="NewNotebookDialog"]//input[@class="widget input-widget" and @data-id="ZInputWidget"]').fill(MyNotebook);
    
    await page.locator('xpath=//div[@class="widget xdialog" and @data-id="NewNotebookDialog"]//div[@class="widget footer" and @data-id="XDialogFooter"]//div[@class="widget clickable button" and @data-id="XButton" and text() = "Create"]').click();
    const help =  page.locator('xpath=//div[@class="widget icon icon-cross" and @data-id="XIcon"]');
    if(help){
        help.click();
    }
    const title = page.locator('xpath=//div[@class="widget toolbar drawing-toolbar"]//div[@class="widget label"]');
    await expect(title).toHaveText(MyNotebook);
    
  });