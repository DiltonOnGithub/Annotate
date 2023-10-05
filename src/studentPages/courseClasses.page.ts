import { Page } from "@playwright/test";

export const courseClassesPageStudent = {
   
    backButton: (page: Page) => page.locator('//*[@data-id="XHomePanelToolbar"]//*[@data-id="HamburgerMenu"]'),
    //student page
    
    courseCard: (page: Page) => page.locator('//*[@data-id="StudentHomePanel"]//*[@data-id="XStudentCourseContainerWidget"]//*[@data-id="StudentCourseItem"]'),
    courseThreeDots: (page: Page) => page.locator('//*[@data-id="StudentHomePanel"]//*[@data-id="XStudentCourseContainerWidget"]//*[@data-id="StudentCourseItem"]//*[@data-id="Z"]//*[@data-id="XIconButton"]//*[@data-id="XIcon"]'),
    courseUnenroll: (page: Page) => page.locator('//*[@data-id="Z" and text()="Unenroll"]'),

    //fa
    coursefabButton: (page: Page) => page.locator('//*[@class="widget fab" and @data-id="XFAB"]//*[@data-id="XIconButton"]//div[@data-id="XIcon"]'),
    courseCodeInput: (page: Page) => page.locator('//*[@data-id="AddClassDialog"]//*[@data-id="ZInputWidget"]'),
    addCourseButton: (page: Page) => page.locator('//*[@data-id="AddClassDialog"]//*[@data-id="XDialogFooter"]//*[@data-id="XButton" and text()="Add"]'),
    courseCodeConfirm: (page: Page) => page.locator('//*[@data-id="XMessageBox"]//*[@data-id="XDialogFooter"]//*[@data-id="BUTTON_Confirm"]'),

}