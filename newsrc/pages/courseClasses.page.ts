import { Page } from "@playwright/test";

export const courseClassesPagePO = {
    //Course / Classes buton on left panel
    courseContenPageButton: (page: Page) =>  page.locator('//*[@data-id="HomePanel"]//*[@data-id="XMenuContainerScrollForm"]//*[@data-id="XMenuItemWithIcon"]/*[@data-id="Z" and text()="Courses/ Classes"]'),
    
    //create course locators
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
    courseCardThreeDots: (page: Page, courseName: string) => page.locator(`//*[@data-id="CourseItem" and contains(.,"${courseName}")]//*[@data-id="Z"]//*[@data-id="XIconButton"]//*[@data-id="XIcon"]`),
    courseCardMoreOptionDeleteButton: (page: Page) => page.locator('//*[@data-id="CourseMoreOption"]//*[@data-id="XMenuItemWithIcon"]//*[@data-id="Z" and text()="Delete"]'),
    deleteCourseButton: (page: Page) => page.locator('//*[@data-id="XMessageBox"]//*[@data-id="XDialogFooter"]//*[@data-id="BUTTON_Delete"]'),
    confirmDeletePasswordInput: (page: Page) => page.locator('//*[@data-id="XConfirmPasswordDialog"]//*[@data-id="XInputWidget"]//*[@data-id="ZInputWidget"]'),
    confirmDeleteCourseButton: (page: Page) => page.locator('//*[@data-id="XConfirmPasswordDialog"]//*[@data-id="XDialogFooter"]//*[@data-id="XButton" and text()="Confirm"]'),
    
    //Project
    courseCardProject:  (page: Page, courseName: string) => page.locator(`//*[@data-id="CourseItem" and contains(.,"${courseName}")]//*[@data-id="XUpdateIconButton" and @title="Projects"]//*[@data-id="XIcon"]`),
    projectFabButton: (page: Page) => page.locator('//*[@data-id="HomePanel"]//*[@data-id="XFAB"]//*[@data-id="XIconButton"]//div[@data-id="XIcon"]'),
    projectNameInput: (page: Page) => page.locator('//*[@data-id="XProjectDialog" and contains(.,"New Project")]//*[@data-id="ExtScrollView"]//*[@data-id="ExtScrollForm"]//*[@data-id="XInputWidget" and contains(.,"Project name")]//*[@data-id="ZInputWidget"]'),
    projectDescriptionInput: (page: Page) => page.locator('//*[@data-id="XProjectDialog" and contains(.,"New Project")]//*[@data-id="ExtScrollView"]//*[@data-id="ExtScrollForm"]//*[@data-id="ContentEditableWC"]//div[2]'),
    projectPointsInput: (page: Page) => page.locator('//*[@data-id="XProjectDialog" and contains(.,"New Project")]//*[@data-id="ExtScrollView"]//*[@data-id="ExtScrollForm"]//*[@data-id="XInputWidget" and contains(.,"Points")]//*[@data-id="ZInputWidget"]'),
    optionDropdownMenu: (page: Page) => page.locator('//*[@data-id="XProjectDialog"]//*[@data-id="DropDownList"]//*[@data-id="TwoFoldTextListItem" and contains(.,"A blank notebook")]'),
    optionDropdownMenuAttachedNotebookSelect: (page: Page) => page.locator('//*[@data-id="Z"]//*[@data-id="ListBase"]//*[@data-id="TwoFoldTextListItem" and contains(.,"An attached notebook")]'),
    selectNotebookPlusIcon: (page: Page) => page.locator('//*[@data-id="ExtScrollView"]//*[@data-id="ExtScrollForm"]//*[@data-id="ProjectBlankNotebookWidget"]//*[@data-id="Z" and text()="Click to choose"]'),
    selectNotebookFromList: (page: Page, notebookName: string) => page.locator(`//*[@data-id="FolderFileClipContainer"]//*[@data-id="LessonListContainer"]//*[@data-id="XLessonListItem"]//*[@data-id="XListViewItem"]//*[@data-id="Z" and text()="${notebookName}"]`),
    okButtonAfterNotebookSelect: (page: Page) => page.locator('//*[@data-id="XDialogFooter"]//*[@data-id="XButton" and text()="OK"]'),
    referenceButtonnotebook: (page: Page) => page.locator('//*[@data-id="XIconButton" and @title="Content Library"]'),
    referenceButtonImages: (page: Page) => page.locator('//*[@data-id="XIconButton" and @title="Images"]'),
    referenceButtonLinks: (page: Page) => page.locator('//*[@data-id="XIconButton" and @title="Links"]'),
    dueDataToggleButton: (page: Page) => page.locator('//*[@data-id="XMenuItemWithToggle" and contains(.,"Due date")]//*[@data-id="XToggleButton"]'),
    studentSelectArrow: (page: Page) => page.locator('//*[@data-id="XMenuItemWithFormAndSubtitle"]//*[@data-id="XIcon"]'),
    studentSelectAllButton: (page: Page) => page.locator('//*[@data-id="XMenuItemWithCheckbox" and contains(.,"Select All")]//*[@data-id="XIcon"]'),
    
    publishProjectButton: (page: Page) => page.locator('//*[@data-id="XButton" and text()="Publish"]'),
    
    // Roster
    rosterFabButton: (page: Page) => page.locator('//*[@data-id="HomePanel"]//*[@data-id="XFAB"]//*[@data-id="XIconButton"]//*[@data-id="XIcon"]'),
    rosterFabMenu: (page: Page) => page.locator('//*[@data-id="XFABContainer"]'),
    studentAccountsButton: (page: Page) => page.locator('//*[@data-id="XFABContainer"]//*[@id="0"]//*[@data-id="Z" and contains(.,"Student Accounts")]'),
    searchStudentIcon: (page: Page) => page.locator('//*[@data-id="XAddMyStudentDialog"]//*[@data-id="XDialogHeaderWithSearch"]//*[@data-id="DBH_ACCEPT"]//*[@data-id="XIcon"]'),
    searchBox: (page: Page) => page.locator('//*[@data-id="XAddMyStudentDialog"]//*[@data-id="XDialogHeaderWithSearch"]//*[@data-id="ZInputWidget"]'),
    studentCheckBox: (page: Page, studentName: string) =>page.locator(`//*[@data-id="XAddMyStudentDialog"]//*[@data-id="XExistingStudentListView"]//*[@data-id="ListBase"]//*[@data-id="Z"]//*[@data-id="ExistingStudentListItem" and contains(.,"${studentName}")]//*[@data-id="XCheckButton"]`),
    addMyStudentButton: (page: Page) => page.locator('//*[@data-id="XAddMyStudentDialog"]//*[@data-id="XDialogFooter"]//*[@data-id="XButton" and text()="Add"]'),
        
    backButton: (page: Page) => page.locator('//*[@data-id="XHomePanelToolbar"]//*[@data-id="HamburgerMenu"]'),
}
export const courseClassesPageStudentPO = {
   
    backButton: (page: Page) => page.locator('//*[@data-id="XHomePanelToolbar"]//*[@data-id="HamburgerMenu"]'),
    //student page
    
    courseCard: (page: Page) => page.locator('//*[@data-id="StudentHomePanel"]//*[@data-id="XStudentCourseContainerWidget"]//*[@data-id="StudentCourseItem"]'),
    courseThreeDots: (page: Page) => page.locator('//*[@data-id="StudentHomePanel"]//*[@data-id="XStudentCourseContainerWidget"]//*[@data-id="StudentCourseItem"]//*[@data-id="Z"]//*[@data-id="XIconButton"]//*[@data-id="XIcon"]'),
    courseUnenroll: (page: Page) => page.locator('//*[@data-id="Z" and text()="Unenroll"]'),

    //fa
    coursefabButton: (page: Page) => page.locator('//*[ @data-id="XFAB"]//*[@data-id="XIconButton"]//div[@data-id="XIcon"]'),
    courseCodeInput: (page: Page) => page.locator('//*[@data-id="AddClassDialog"]//*[@data-id="ZInputWidget"]'),
    addCourseButton: (page: Page) => page.locator('//*[@data-id="AddClassDialog"]//*[@data-id="XDialogFooter"]//*[@data-id="XButton" and text()="Add"]'),
    courseCodeConfirm: (page: Page) => page.locator('//*[@data-id="XMessageBox"]//*[@data-id="XDialogFooter"]//*[@data-id="BUTTON_Confirm"]'),

}