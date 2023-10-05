import { Page } from "@playwright/test";

export const courseClassesPage = {
    courseContenPageButton: (page: Page) =>  page.locator('//*[@data-id="HomePanel"]//*[@data-id="XMenuContainerScrollForm"]//*[@data-id="XMenuItemWithIcon"]/*[@data-id="Z" and text()="Courses/ Classes"]'),
    //create course
    fabButton: (page: Page) => page.locator('//*[@data-id="CourseContainerWidget"]//*[@class="widget fab" and @data-id="XFAB"]//*[@data-id="XIconButton"]//div[@data-id="XIcon"]'),
    createCourseFabButton: (page: Page) => page.locator('//*[@data-id="XFABContainer"]//*[@id="1409"]//*[@data-id="Z" and text()="New Course"]'),
    createCourseInput: (page: Page) => page.locator('//*[@data-id="XAddGroupDialog"]//*[@data-id="ExtScrollView"]//*[@data-id="XInputWidget"]//*[@data-id="Z" and text()="Course Name"]/following-sibling::input'),
    createCourseButton: (page: Page) => page.locator('//*[@data-id="XAddGroupDialog"]//*[@data-id="XButton" and text()="Create"]'),
    courseCode: (page: Page) => page.locator('//*[@data-id="HomePanel"]//*[@data-id="CourseView"]//*[@data-id="CourseInnerView"]//*[@data-id="XLabel" and contains(.,"Course Code")]/following-sibling::div[1]//div[1]'),

    //Course card
    courseCard: (page: Page, courseName: string) => page.locator(`//*[@data-id="CourseItem" and contains(.,"${courseName}")]`),
    courseCardRoster:  (page: Page, courseName: string) => page.locator(`//*[@data-id="CourseItem" and contains(.,"${courseName}")]//*[@data-id="XUpdateIconButton" and @title="Roster"]//*[@data-id="XIcon"]`),
    studentBar: (page: Page, studentName: string) => page.locator(`//*[@data-id="StudentDataTableListItem" and contains(.,"${studentName}")]`),
    acceptStudentButton: (page: Page, studentName: string) => page.locator(`//*[@data-id="StudentDataTableListItem" and contains(.,"${studentName}")]//*[@data-id="XButton" and text()="Accept"]`),

    backButton: (page: Page) => page.locator('//*[@data-id="XHomePanelToolbar"]//*[@data-id="HamburgerMenu"]'),
}