import { test, expect } from '@playwright/test';
import{LoginPage} from '../pages/login_page';
import {CreateAccount} from '../pages/create_account';

//variables//
let url='https://qa-task-fe.vercel.app/login'
//

test('TC02', async ({ page },testInfo) => {
    
    const login = new LoginPage(page);
    const registration = new CreateAccount(page);

  await test.step('Step 1. Go To LogIn page', async () => {
    login.openPage(url);
  });
    await test.step('Step 2. Click registration link and verify Create Account Page opens, capture screenshot', async () => {
    login.clickCreateAccountLink();
    await expect(registration.title).toBeVisible();
  });
const screenshot = await page.screenshot();
  await testInfo.attach('TC02_Step2', {
    body: screenshot,
    contentType: 'image/png',
  });
});