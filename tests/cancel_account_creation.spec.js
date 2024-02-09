import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import { CreateAccount } from '../pages/create_account';

//variables//
let url = 'https://qa-task-fe.vercel.app/register'
//

test('TC05', async ({ page }, testInfo) => {

    const login = new LoginPage(page);
    const registration = new CreateAccount(page);

    await test.step('Step 1. Go To Create Account page', async () => {
        login.openPage(url);
    });
    await test.step('Step 2. Verify Cancel button can be selected', async () => {
        await expect(registration.cancelButton).toBeVisible();
        registration.cancelButton.click();
    });
    await test.step('Step 3. Verify user is taken to LogIn page, capture screenshot', async () => {
        await expect(login.title).toBeVisible();
    });
    const screenshot = await page.screenshot();
    await testInfo.attach('TC05_Step3', {
        body: screenshot,
        contentType: 'image/png',
    });
});