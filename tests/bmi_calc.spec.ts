import { test, expect } from "@playwright/test";

[
    { gender: 'Male', age: '20', height: '180', weight: '70', expected: '21.6' },
    { gender: 'Male', age: '23', height: '190', weight: '100', expected: '27.7' },
    { gender: 'Female', age: '25', height: '180', weight: '120', expected: '37.0' },
].forEach(({ gender, age, height, weight, expected }) => {
test.beforeEach(async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/bmi');
})
  
test.skip(`testing with ${weight}`, async ({ page }) => {
  await page.locator('#gender').selectOption(gender);
  await page.locator('#age').fill(age);
  await page.locator('#height').fill(height);
  await page.locator('#weight').fill(weight);
  await page.locator('.btn-primary').click();
  expect(page.getByText(`BMI = ${expected}`)).toBeTruthy();
  expect(page.getByText(`Your BMI is ${expected}`)).toBeTruthy();
  });
});
