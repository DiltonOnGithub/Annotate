import {test, expect, BrowserContext, Page } from '@playwright/test';
import { courseClassesPage } from '../pages/courseClasses.page';
import { courseClassesPageStudent } from '../studentPages/courseClasses.page';
var code: string;
export const courseClassesSteps = {
    createCourse: async (page: Page, courseName: string) => {
        await courseClassesPage.courseContenPageButton(page).click()
        await courseClassesPage.fabButton(page).click()
        await courseClassesPage.createCourseFabButton(page).click()
        await courseClassesPage.createCourseInput(page).fill(courseName)
        await courseClassesPage.createCourseButton(page).click()
        code = await courseClassesPage.courseCode(page).innerHTML()
        await courseClassesPage.backButton(page).click()
        return code
    },
    enrollToCourse: async (page: Page, courseCode: string) => {
        await courseClassesPageStudent.coursefabButton(page).click()
        await courseClassesPageStudent.courseCodeInput(page).fill(courseCode)
        await courseClassesPageStudent.addCourseButton(page).click()
        await courseClassesPageStudent.courseCodeConfirm(page).click()
    },
    acceptStudent: async (page: Page, courseName: string, studentName: string) => {
        await courseClassesPage.courseCardRoster(page, courseName).click()
        await courseClassesPage.acceptStudentButton(page, studentName).click()
    }
    
}
