import {test, expect, BrowserContext, Page } from '@playwright/test';
import { courseClassesPage } from '../pages/courseClasses.page';
var code: string;
export const courseClassesSteps = {
    createCourse: async (page: Page, courseName: string) => {
        await courseClassesPage.courseContenPageButton(page).click()
        await courseClassesPage.fabButton(page).click()
        await courseClassesPage.createCourseFabButton(page).click()
        await courseClassesPage.createCourseInput(page).fill(courseName)
        await courseClassesPage.createCourseButton(page).click()
        code = await courseClassesPage.courseCode(page).innerHTML()
        return code
    },
    enrollToCourse: async (page: Page, courseCode: string) => {
        await courseClassesPage.coursefabButton(page).click()
        await courseClassesPage.courseCodeInput(page).fill(courseCode)
        await courseClassesPage.addCourseButton(page).click()
        await courseClassesPage.courseCodeConfirm(page).click()
    },
    acceptStudent: async (page: Page, courseName: string, studentName: string) => {
        await expect(courseClassesPage.courseCardName(page, courseName)).toBeVisible()
        await courseClassesPage.courseCardRoster(page, courseName).click()
        await courseClassesPage.acceptStudentButton(page, studentName).click()
    }
    
}
