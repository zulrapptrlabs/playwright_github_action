import { test, expect } from '@playwright/test';
import shobizzyAuthPage from '../Pages(Shobizzy)/shobizzyAuthPage';
import shobizzyloginPage from '../Pages(Shobizzy)/shobizzyLoginPage';


test('Log into shobizzy account', async ({ page }) => {

  const shobizzyAuth = new shobizzyAuthPage(page)
  const shobizzyLogin = new shobizzyloginPage(page)

  await shobizzyAuth.navigateTo();
  await shobizzyAuth.clickShobizzyLoginButton();

  await shobizzyLogin.shobizzyEmailAddress("froggin@rapptrlabs.com");
  await shobizzyLogin.shobizzyPassword("thisHURT$0");
  await shobizzyLogin.shobizzyVerify();



  //await page.goto('https://shobizzy-dev.vercel.app/');
  //await page.getByRole('link', { name: 'Log In' }).click();
  // await page.getByLabel('Email address*').fill('froggin@rapptrlabs.com');
  // await page.getByLabel('Password*').click();
  //  await page.getByLabel('Password*').fill('thisHURT$0');
  // await page.getByRole('button', { name: 'Continue', exact: true }).click();

  await page.goto('https://shobizzy-dev.vercel.app/feed');
  await page.getByRole('link', { name: 'Grump Srump', exact: true }).click();
  await page.getByRole('link', { name: 'Grump Srump', exact: true }).click();
  await page.close();
});