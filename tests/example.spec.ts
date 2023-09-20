import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Quora Title', async({ page })=>{
  await page.goto('https://www.quora.com/about');

  await expect(page).toHaveTitle(/About/);
});

test('Quora About', async({ page })=>{
  await page.goto('https://www.quora.com');

  await page.getByRole('link', { name: 'About' }).click();
});

test('Quora Login', async({ page })=>{
  await page.goto('https://www.quora.com');
  await page.getByRole('textbox',{ name : 'email'}).fill('diltondsouza1@gmail.com');
  await page.getByRole('textbox',{ name : 'password'}).fill('Diltonlovesquora@1098#');
  await page.getByRole('button',{ name : 'Login'}).hover();
  await page.getByRole('button',{ name : 'Login'}).click();
  await page.getByRole('link',{name:'Following'}).hover();
  await page.getByRole('link',{name:'Following'}).click();
  await page.getByRole('link',{name:'Notifications'}).hover();
  await page.getByRole('link',{name:'Notifications'}).click();
  await page.getByRole('combobox',{ name : 'search'}).fill('Elon Musk')
  await page.keyboard.press('Enter');
  await page.getByRole('link',{name:'Following'}).hover();
});

test('Annotate Home', async ({ page }) => {
  await page.goto('https://staging.annotate.net/');
  await page.getByRole('link', { name: 'Features' }).click();
  await page.getByRole('link', { name: 'Tour' }).click();
  await page.getByRole('link', { name: 'Pricing' }).click();
  await page.getByRole('link', { name: 'Downloads' }).click();
  await page.locator('#menu').getByRole('link', { name: 'Tutorials' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('features');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByRole('link', { name: 'Beta Annotate Logo' }).click();
  await page.getByRole('link', { name: 'Free Signup' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Free Signup' }).click();
  await page.locator('#user-sel-educator').click();
  await page.getByRole('img', { name: 'back' }).click();
  await page.locator('#user-sel-non-educator').click();
  await page.getByRole('img', { name: 'back' }).click();
  await page.locator('#user-sel-student').click();
  await page.getByRole('img', { name: 'back' }).click();
});
test('Annotate Logout', async ({ page }) => {
  await page.goto('https://staging.annotate.net/instructor');
  await page.getByRole('button', { name: 'Logout' }).click();
});

test('Annotate Login', async ({ page }) => {
  await page.goto('https://staging.annotate.net/');
  await page.getByRole('link', { name: 'Login / Join' }).click();
  await page.locator('#txtUsername').click();
  await page.locator('#txtUsername').fill('dilton.d\'souza@zeuslearning.com');
  await page.locator('#txtPassword').click();
  await page.locator('#txtPassword').fill('Diltonlovesannotate@1098#');
  await page.getByLabel('Remember me').check();
  await page.getByRole('button', { name: 'Login' }).click();
});