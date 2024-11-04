import { test, expect } from "@playwright/test";

[
    { gender: 'Male', age: '20', height: '180', weight: '70', expected: '21.6' },
    { gender: 'Male', age: '23', height: '190', weight: '100', expected: '27.7' },
    { gender: 'Female', age: '25', height: '180', weight: '120', expected: '37.0' },
].forEach(({ gender, age, height, weight, expected }) => {
test.beforeEach(async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/bmi');
})
  
test(`testing with ${weight}`, async ({ page }) => {
    await page.getByLabel('Gender').selectOption(gender);
    await page.getByPlaceholder('35').fill(age);
    await page.getByPlaceholder('190').fill(height);
    await page.getByPlaceholder('70').fill(weight);
    await page.getByRole('button', { name: 'Calculate' }).click();
    await page.getByText(`BMI = ${expected}`).click();
    await page.getByText(`Your BMI is ${expected}`).click();
  });
});
