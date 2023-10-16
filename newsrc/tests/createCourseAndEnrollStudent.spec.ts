import { test, Page, expect, BrowserContext } from '@playwright/test'
import env from '../fixtures/env'

import { loginPagePO, contentLibraryPagePO, courseClassesPagePO} from '../pages';
import { loginPageSteps, courseClassesSteps } from '../steps';

var courseCode: string;
const moment = require('moment');
const courseName = moment().format('DD-MM-YY HH:mm:ss')
const studentName = "Ben Chang"

let instructorContext: BrowserContext;
let instructorPage: Page;
let studentContext: BrowserContext;
let studentPage: Page;

test.describe.serial('Create Course Test Cases', () => {
  test.beforeAll(async ({ browser}, testInfo) => {
    env.projectName = testInfo.project.name
    instructorContext = await browser.newContext()
    instructorPage = await instructorContext.newPage()
    studentContext = await browser.newContext()
    studentPage = await studentContext.newPage()
    await instructorPage.bringToFront()
    await loginPageSteps.login(instructorContext, instructorPage, 'teacher')
  }) 

  test.afterAll(async () => {
    await instructorContext.close()
    await studentContext.close()
  })

  test("Instructor Creates Course", async () => {
    courseCode = await courseClassesSteps.createCourse(instructorPage, courseName)
    await expect(courseClassesPagePO.courseCard(instructorPage, courseName)).toBeVisible()
  })
  
  test("Instructor Adds student to created Course", async () => {
    await courseClassesSteps.addStudentToCourse(instructorPage, courseName, "Troy Barnes")
    await expect(courseClassesPagePO.studentBar(instructorPage, "Troy Barnes")).toBeVisible()
    await courseClassesPagePO.backButton(instructorPage).click()
  })

  test("Student Enroll to Course Using Course Code", async () => {
    await studentPage.bringToFront()
    await loginPageSteps.login(studentContext, studentPage, 'student')
    await courseClassesSteps.enrollToCourse(studentPage, courseCode)
    await test.step('Instructor accept student to course', async() =>{
        await instructorPage.bringToFront()
        await expect(courseClassesPagePO.courseCard(instructorPage, courseName)).toBeVisible()
        await courseClassesSteps.acceptStudent(instructorPage, courseName, studentName)
        await expect(courseClassesPagePO.studentBar(instructorPage, studentName)).toBeVisible()
        await courseClassesPagePO.backButton(instructorPage).click()
    })
  })

  

  test('Delete Course', async () => {
    await expect(courseClassesPagePO.courseCard(instructorPage, courseName)).toBeVisible()
    await courseClassesSteps.deleteCourse(instructorPage, courseName, env.teacherPassword)
  })

  test('Account logout', async () => {
    //Logout from account and verify page redirects to login.php via checking login button
    await expect (contentLibraryPagePO.logoutbtn(instructorPage)).toBeVisible()
    await contentLibraryPagePO.logoutbtn(instructorPage).click()
    await expect (contentLibraryPagePO.logoutbtn(instructorPage)).not.toBeVisible()
    await expect(loginPagePO.buttonLogin(instructorPage)).toBeVisible()

    await expect (contentLibraryPagePO.logoutbtnstud(studentPage)).toBeVisible()
    await contentLibraryPagePO.logoutbtnstud(studentPage).click()
    await expect (contentLibraryPagePO.logoutbtnstud(studentPage)).not.toBeVisible()
    await expect(loginPagePO.buttonLogin(studentPage)).toBeVisible()
  })
})