import {test, expect, BrowserContext,Page } from '@playwright/test';
import { contentLibrarySteps } from '../steps/contentLibrary.steps'
import { loginSteps } from '../steps/login.steps';
import data from '../../data.json';
import { courseClassesSteps } from '../steps/courseClasses.steps';

const email = data["email"];
const password = data["password"];
var code: string;
const studentName = "Ben Chang";
const studentEmail = "ben123";
const studentPassword = "Password1";

const timestamp = new Date().toString()
const MyNotebook1 = "New Notebook "+timestamp+" 1";
const MyNotebook2 = "New Notebook "+timestamp+" 2";
const MyNotebook3 = "New Notebook "+timestamp+" 3";

let instructoContext: BrowserContext;
let instructorPage: Page;
let studentContext: BrowserContext;
let studentPage: Page;

test.describe.serial('Notebook Test Cases', () => {
  test.beforeAll(async ({ browser}) => {
    instructoContext = await browser.newContext()
    instructorPage = await instructoContext.newPage()
    studentContext = await browser.newContext()
    studentPage = await studentContext.newPage()
    await loginSteps.login(instructorPage, email, password)
    await loginSteps.login(studentPage, studentEmail, studentPassword)
  }) 

  // test("Create Notebook", async () => {
  //     test.setTimeout(120000)
  //     await contentLibrarySteps.contentLibraryFrame(page)
  //     await contentLibrarySteps.createNotebook(page, MyNotebook1)
  //     await contentLibrarySteps.createNotebook(page, MyNotebook2)
  //     await contentLibrarySteps.createNotebook(page, MyNotebook3)
  //     await test.step('Assert Notebook', async ()=>{
  //       await contentLibrarySteps.assertNotebook(page, MyNotebook1)
  //       await contentLibrarySteps.assertNotebook(page, MyNotebook2)
  //       await contentLibrarySteps.assertNotebook(page, MyNotebook3)
  //     })
  // })

  // test("Delete Notebook", async () => {
  //   await contentLibrarySteps.softDeleteNotebook(page, MyNotebook1)
  //   await contentLibrarySteps.softDeleteNotebook(page, MyNotebook2)
  //   await test.step('Delete Notebook From Trash', async ()=>{
  //     await contentLibrarySteps.openTrash(page)
  //     await contentLibrarySteps.hardDeleteNotebook(page, MyNotebook1)
  //   })
  // })

  // test("Restore Notebook", async () => {
  //   await contentLibrarySteps.softDeleteNotebook(page, MyNotebook3)
  //   await test.step('Restore Notebook From Trash', async ()=>{
  //     await contentLibrarySteps.openTrash(page)
  //     await contentLibrarySteps.restoreNotebook(page, MyNotebook3)
  //   })
  // })

  // test("Empty Trash", async () => {
  //   await contentLibrarySteps.emptyTrash(page)
  // })
  
  test("Instructor Create Course", async () => {
    code = await courseClassesSteps.createCourse(instructorPage, timestamp)
    
  })
  test("Student Enroll to Course", async () => {
    await courseClassesSteps.enrollToCourse(studentPage, code)
    
  })
  test("Instructor accept Student", async () => {
    await courseClassesSteps.acceptStudent(instructorPage, timestamp, studentName)
    
  })
  test("Logout", async () => {
    await expect(instructorPage).toHaveURL('https://staging.annotate.net/instructor');
    await expect(studentPage).toHaveURL('https://staging.annotate.net/student');
    //await page.reload({timeout: 5000})
    await instructorPage.click("'Logout'");
    await expect(instructorPage).toHaveURL('https://staging.annotate.net/login.php');
    await studentPage.click("'Logout'");
    await expect(studentPage).toHaveURL('https://staging.annotate.net/login.php');
  })
  
})