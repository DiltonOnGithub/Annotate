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