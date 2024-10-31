import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('practice');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
});