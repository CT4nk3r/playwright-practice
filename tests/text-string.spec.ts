import { test, expect } from "@playwright/test";

test.describe('testing text input', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/elements/input/simple')
    })
    
    test('with no text entered', async ({ page }) => {
        await page.locator('#id_text_string').click();
        await page.keyboard.press('Enter');
        const text_field = page.locator('#id_text_string')
        const validationMessage = await text_field.evaluate((element) => {
            const input = element as HTMLInputElement
            return input.validationMessage
        })
        expect(validationMessage.toLowerCase()).toContain('fill');
    })
    
    test('with less than 5 characters', async ({ page }) => {
        let input = 'a'
        await page.locator('#id_text_string').fill(input);
        await page.keyboard.press('Enter')
        // expect((await page.locator('#error_1_id_text_string').innerText()).includes('Please enter 2 or more characters')).toBeTruthy();
        expect(await page.locator('#error_1_id_text_string').innerText()).toContain("Please enter 2 or more characters");
    })

    test('with more than 25 characters', async ({ page }) => {
        let input = 'abcdefghijklmnopqrstuvwzxy123'
        await page.locator('#id_text_string').fill(input);
        await page.keyboard.press('Enter')
        expect((await page.locator('#error_1_id_text_string').innerText()).includes('Please enter no more than 25 characters')).toBeTruthy();

    })
    
    test('with good input', async ({ page }) => {
        let input = 'goodinput'
        await page.locator('#id_text_string').fill(input);
        await page.keyboard.press('Enter');
        expect((await page.locator('#result').innerText()).includes('Your input was:')).toBeTruthy();
        expect((await page.locator('#result-text').innerText()).includes(input)).toBeTruthy();
    })
    
})
