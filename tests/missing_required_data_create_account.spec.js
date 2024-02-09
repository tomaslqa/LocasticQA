import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import { CreateAccount } from '../pages/create_account';

//variables//
let url = 'https://qa-task-fe.vercel.app/register'
//

test('TC06', async ({ page }, testInfo) => {

    const login = new LoginPage(page);
    const registration = new CreateAccount(page);

    await test.step('Step 1. Go To Create Accout page', async () => {
        login.openPage(url);
    });
    await test.step('Step 2. Click Register button, verify user stays on Create Account page', async () => {
        registration.registerButton.click();
        await expect(registration.title).toBeVisible();
    });
    await test.step('Step 3. Verify Warning message for first name field', async () => {
        await expect(registration.nameRequiredWarning).toBeVisible();
        await expect((registration.nameRequiredWarning)).toContainText('Ime je obavezno');
    });
    await test.step('Step 3. Verify Warning message for last name field', async () => {
        await expect(registration.surnameRequiredWarning).toBeVisible();
        await expect(registration.surnameRequiredWarning).toContainText('Prezime je obavezno');
    });
    await test.step('Step 3. Verify Warning message for email field', async () => {
        await expect(registration.emailRequiredWarning).toBeVisible();
        await expect(registration.emailRequiredWarning).toContainText('Obavezno polje');
    });
    await test.step('Step 3. Verify Warning message for password field', async () => {
        await expect(registration.passwordRequiredWarning).toBeVisible();
        await expect(registration.passwordRequiredWarning).toContainText('Obavezno polje');
    });
    await test.step('Step 3. Verify Warning message for confirm password field', async () => {
        await expect(registration.confirPasswordRequiredWarning).toBeVisible();
        await expect(registration.confirPasswordRequiredWarning).toContainText('Obavezno polje');
    });

    await test.step('Step 3. Verify Warning message for date of birth field', async () => {
        await expect(registration.dateOfBirthRequiredWarning).toBeVisible();
        await expect(registration.dateOfBirthRequiredWarning).toContainText('Obavezno polje');
    });
    await test.step('Step 3. Verify Warning message for accept terms field', async () => {
        await expect(registration.termsRequiredWarning).toBeVisible();;
        await expect(registration.termsRequiredWarning).toContainText('Obavezno polje');
    });
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('TC06_Step10', {
        body: screenshot,
        contentType: 'image/png',
    });




});     