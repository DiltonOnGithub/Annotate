import {test, expect, BrowserContext, Page } from '@playwright/test';
import { courseClassesPagePO, courseClassesPageStudentPO } from '../pages';

var code: string;
export const courseClassesSteps = {
    createCourse: async (page: Page, courseName: string) => {
        await courseClassesPagePO.courseContenPageButton(page).click()
        await courseClassesPagePO.fabButton(page).click()
        await courseClassesPagePO.createCourseFabButton(page).click()
        await courseClassesPagePO.createCourseInput(page).fill(courseName)
        await courseClassesPagePO.createCourseButton(page).click()
        code = await courseClassesPagePO.courseCode(page).innerHTML()
        await courseClassesPagePO.backButton(page).click()
        return code
    },
    addStudentToCourse: async (page: Page, courseName: string, studentName: string) => {
        
        await courseClassesPagePO.courseContenPageButton(page).click()
        await courseClassesPagePO.courseCardRoster(page, courseName).click()
        await courseClassesPagePO.rosterFabButton(page).click()
        //await courseClassesPagePO.studentAccountsButton(page).scrollIntoViewIfNeeded()
        //await expect(courseClassesPagePO.studentAccountsButton(page)).toBeVisible()
        await courseClassesPagePO.studentAccountsButton(page).click()
        //await courseClassesPagePO.studentCheckBox(page, studentName).scrollIntoViewIfNeeded()
        await courseClassesPagePO.searchStudentIcon(page).click()
        await courseClassesPagePO.searchBox(page).fill(studentName)
        await courseClassesPagePO.studentCheckBox(page, studentName).click()
        await courseClassesPagePO.addMyStudentButton(page).click()
    },
    enrollToCourse: async (page: Page, courseCode: string) => {
        await courseClassesPageStudentPO.coursefabButton(page).click()
        await courseClassesPageStudentPO.courseCodeInput(page).fill(courseCode)
        await courseClassesPageStudentPO.addCourseButton(page).click()
        await courseClassesPageStudentPO.courseCodeConfirm(page).click()
    },
    acceptStudent: async (page: Page, courseName: string, studentName: string) => {
        await courseClassesPagePO.courseCardRoster(page, courseName).click()
        await courseClassesPagePO.acceptStudentButton(page, studentName).click()
    },
    deleteCourse: async (page: Page, courseName: string, password: string) => {
        await courseClassesPagePO.courseContenPageButton(page).click()
        await courseClassesPagePO.courseCardThreeDots(page, courseName).click()
        await courseClassesPagePO.courseCardMoreOptionDeleteButton(page).click()
        await courseClassesPagePO.deleteCourseButton(page).click()
        await courseClassesPagePO.confirmDeletePasswordInput(page).fill(password)
        await courseClassesPagePO.confirmDeleteCourseButton(page).click()
    }
    
}
