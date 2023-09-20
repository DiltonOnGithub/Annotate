import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.quora.com/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('diltondsouza1@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('######');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Spaces').getByRole('img').click();
  await page.getByPlaceholder('Search Quora').click();
  await page.getByPlaceholder('Search Quora').fill('Elon Musk');
  await page.getByPlaceholder('Search Quora').press('Enter');
  await page.locator('.q-inlineFlex > div:nth-child(3)').first().click();
  await page.getByText('Logout').click();
});