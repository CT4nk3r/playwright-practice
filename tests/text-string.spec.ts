import { test, expect } from "@playwright/test";


test.describe('testing text input', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/elements/input/simple');
    })
    
    test('less than 5 characters', async ({ page }) => {
        
    })

    test('more than 25 characters', async ({ page }) => {
        
    })
    
})
