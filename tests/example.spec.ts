import { test, expect } from '@playwright/test';

test.describe('testing login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');
  })
  
  test('test successful login', async ({ page }) => {
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('practice');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
    expect(page.locator('#flash').filter({ hasText: 'You logged into a secure area!' })).toBeTruthy();
  });

  test('test invalid username', async ({ page }) => {
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('asd');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
    expect(page.locator('#flash').filter({ hasText: 'Your username is invalid!' })).toBeTruthy();
  })

  test('test invalid password', async ({ page }) => {
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('practice');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('asd');
    await page.getByRole('button', { name: 'Login' }).click();
    expect(page.locator('#flash').filter({ hasText: 'Your password is invalid!' })).toBeTruthy();
  })
  
})
