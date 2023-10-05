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
        
    },
    enrollToCourse: async (page: Page, courseCode: string) => {
        
    }
    
}
