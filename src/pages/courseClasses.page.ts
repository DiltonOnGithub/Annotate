import { Page } from "@playwright/test";

export const courseClassesPage = {
    //create course
    fabButton: (page: Page) => page.locator('//*[@data-id="CourseContainerWidget"]//*[@class="widget fab" and @data-id="XFAB"]//*[@data-id="XIconButton"]//div[@data-id="XIcon"]'),
    createCoursebutton: (page: Page) => page.locator('//*[@data-id="XFABContainer"]//*[@id="1409"]//*[@data-id="Z" and text()="New Course"]'),
    createCourseInput: (page: Page) => page.locator('//*[@data-id="XAddGroupDialog"]//input[@data-id="ZInputWidget" and @placeholder="Course name(required)"]'),
    createNotebookButton: (page: Page) => page.locator('//*[@data-id="XAddGroupDialog"]//*[@data-id="XButton" and text()="Create"]'),

}