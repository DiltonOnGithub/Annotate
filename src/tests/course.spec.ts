import {test, expect, BrowserContext,Page } from '@playwright/test';
import { loginSteps } from '../steps/login.steps';
import data from '../../data.json';
import { courseClassesSteps } from '../steps/courseClasses.steps';
import { courseClassesPageStudent } from '../studentPages/courseClasses.page';
import { courseClassesPage } from '../pages/courseClasses.page';
const email = data["email"];
const password = data["password"];

var courseCode: string;
const studentName = "Ben Chang";
const studentEmail = "ben123";
const studentPassword = "Password1";

const courseName = new Date().getTime().toString()


let instructoContext: BrowserContext;
let instructorPage: Page;
let studentContext: BrowserContext;
let studentPage: Page;

test.describe.serial('Course Test Cases', () => {
  test.beforeAll(async ({ browser}) => {
    test.setTimeout(120000)
    instructoContext = await browser.newContext()
    instructorPage = await instructoContext.newPage()
    studentContext = await browser.newContext()
    studentPage = await studentContext.newPage()
    await instructorPage.bringToFront()
    await loginSteps.login(instructorPage, email, password)
  }) 

  // test("Instructor Create Course", async () => {
  //   courseCode = await courseClassesSteps.createCourse(instructorPage, courseName)
  //   await expect(courseClassesPage.courseCard(instructorPage, courseName)).toBeVisible()
  // })

  // test("Student Enroll to Course", async () => {
  //   await studentPage.bringToFront()
  //   await loginSteps.login(studentPage, studentEmail, studentPassword)
  //   await courseClassesSteps.enrollToCourse(studentPage, courseCode)
  //   await test.step('Instructor accept student to course', async() =>{
  //       await instructorPage.bringToFront()
  //       await expect(courseClassesPage.courseCard(instructorPage, courseName)).toBeVisible()
  //       await courseClassesSteps.acceptStudent(instructorPage, courseName, studentName)
  //       await expect(courseClassesPage.studentBar(instructorPage, studentName)).toBeVisible()
  //   })
  // })
//crate project
//student submit project
// student project graded
// student proj rejected
// ask for resubmission
//loop
  test("Instructor Create Project in Course", async () => {
      await courseClassesSteps.createProject(instructorPage, "Real Course", "Demo Project 13", "lorem Ipsum", "75", "Project Annotate", "","","")
    })

  test("Logout", async () => {
    await expect(instructorPage).toHaveURL('https://staging.annotate.net/instructor');
    await instructorPage.click("'Logout'");
    await expect(instructorPage).toHaveURL('https://staging.annotate.net/login.php');
    await studentPage.bringToFront()
    await expect(studentPage).toHaveURL('https://staging.annotate.net/student');
    await studentPage.click("'Logout'");
    await expect(studentPage).toHaveURL('https://staging.annotate.net/login.php');
  })
  
})
//regular instructor
//pro instructor
//paid, free stdnt
//instructed created student -> instrtr upgrades
//district 
