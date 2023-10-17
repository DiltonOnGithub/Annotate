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
    removeStudentFromCourse: async (page: Page, courseName: string, studentName: string) => {
        await courseClassesPagePO.courseContenPageButton(page).click()
        await courseClassesPagePO.courseCardRoster(page, courseName).click()
        await courseClassesPagePO.removeStudentTrashIcon(page, studentName).click()
        await courseClassesPagePO.removeStudentButton(page).click()
        await courseClassesPagePO.backButton(page).click()
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
    studentUnenrollsFromCourse: async (page: Page, courseName: string) => {
        await courseClassesPageStudentPO.courseThreeDots(page, courseName).click()
        await courseClassesPageStudentPO.courseUnenroll(page).click()
        
    },
    acceptStudentUnenrollment: async (page: Page, courseName: string, studentName: string) => {
        await courseClassesPagePO.courseContenPageButton(page).click()
        await courseClassesPagePO.courseCardRoster(page, courseName).click()
        await courseClassesPagePO.acceptStudentButton(page, studentName).click()
        await expect(courseClassesPagePO.studentBar(page, studentName)).not.toBeVisible()
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
export const projectSteps ={
    createProject: async (page: Page, courseName: string, projectName: string, projectDescription: string, projectPoints: string, notebookName: string, refNotebookName: string, refImageName: string, refLink: string) => {
        await courseClassesPagePO.courseContenPageButton(page).click()
        await courseClassesPagePO.courseCardProject(page, courseName).click()
        await courseClassesPagePO.projectFabButton(page).click()
        await courseClassesPagePO.projectNameInput(page).fill(projectName)
        await courseClassesPagePO.projectDescriptionInput(page).fill(projectDescription)
        await courseClassesPagePO.projectPointsInput(page).fill(projectPoints)
        await courseClassesPagePO.optionDropdownMenu(page).click()
        await courseClassesPagePO.optionDropdownMenuAttachedNotebookSelect(page).click()
        await courseClassesPagePO.selectNotebookPlusIcon(page).click()
        await courseClassesPagePO.selectNotebookFromList(page, notebookName).click()
        await courseClassesPagePO.okButtonAfterNotebookSelect(page).click()
        //await courseClassesPagePO.dueDataToggleButton(page).click()
        await courseClassesPagePO.publishProjectButton(page).click()
    },
    deleteProject: async (page: Page, courseName: string, projectName: string) => {
        await courseClassesPagePO.courseContenPageButton(page).click()
        await courseClassesPagePO.courseCardProject(page, courseName).click()
        await courseClassesPagePO.projectCardThreeDots(page, projectName).click()
        await courseClassesPagePO.deleteProjectButton(page).click()
        await courseClassesPagePO.deleteProjectConfirmButton(page).click()
    }
}
