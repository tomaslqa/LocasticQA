import { test, expect } from '@playwright/test';
import{LoginPage} from '../pages/login_page';

//variables//
let url='https://qa-task-fe.vercel.app/login'
let linkTxt='Nemaš korisnički račun? Klikni ovdje'
//

test('TC01', async ({ page },testInfo) => {
  
const login= new LoginPage(page);

  await test.step('Step 1. Go To LogIn page', async () => {
    login.openPage(url);
  });
    await test.step('Step 2. Verify Create Account link is visible', async () => {
    await expect(login.createAccountLink).toBeVisible();
  });
  await test.step('Step 3. Verify Create Account link text, capture screenshot', async () => {
  await expect(login.createAccountLink).toContainText(linkTxt);
});
const screenshot = await page.screenshot();
  await testInfo.attach('TC01_Step3', {
    body: screenshot,
    contentType: 'image/png',
  });
});