import { test, expect } from "@playwright/test";

test.describe('testing email input', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/elements/input/email')
    })

    test('with correct email', async ({ page }) => {
        await page.locator('#id_email').fill('asd@asd.com')
        await page.keyboard.press('Enter')
        expect(await page.locator('#result').innerText()).toContain("Your input was:")        
    })

    test('with no second-level domain', async ({ page }) => {
        await page.locator('#id_email').fill('asd@.com')
        await page.keyboard.press('Enter')
        expect(await page.locator('#error_1_id_email').innerText()).toContain("Enter a valid email address.")
        
    })

    test('with no top-level domain', async ({ page }) => {
        await page.locator('#id_email').fill('asd@gmail')
        await page.keyboard.press('Enter')
        expect(await page.locator('#error_1_id_email').innerText()).toContain("Enter a valid email address.")
        
    })

    test("testing with no '@' in the email", async ({ page }) => {
        await page.locator('#id_email').fill('asdgmail.com')
        await page.keyboard.press('Enter')
        expect(await page.locator('#error_1_id_email').innerText()).toContain("Enter a valid email address.")
        
    })
        
})

