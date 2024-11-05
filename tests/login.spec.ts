import { test, expect } from '@playwright/test';

test.describe('testing login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');
  })
  
  test('test successful login', async ({ page }) => {
    await page.locator('#username').click();
    await page.locator('#username').fill('practice');
    await page.locator('#password').click();
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('.btn-primary').click();
    expect(page.locator('#flash').filter({ hasText: 'You logged into a secure area!' })).toBeTruthy();
  });

  test('test invalid username', async ({ page }) => {
    await page.locator('#username').click();
    await page.locator('#username').fill('asd');
    await page.locator('#password').click();
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('.btn-primary').click();
    expect(page.locator('#flash').filter({ hasText: 'Your username is invalid!' })).toBeTruthy();
  })

  test('test invalid password', async ({ page }) => {
    await page.locator('#username').click();
    await page.locator('#username').fill('practice');
    await page.locator('#password').click();
    await page.locator('#password').fill('asd');
    await page.getByRole('button', { name: 'Login' }).click();
    expect(page.locator('#flash').filter({ hasText: 'Your password is invalid!' })).toBeTruthy();
  })
  
})
