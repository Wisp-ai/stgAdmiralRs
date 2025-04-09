import { test, expect, Page } from '@playwright/test';
import { after, afterEach } from 'node:test';
let admiralBet: Page;

test('basic test', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
  await expect(page).toHaveURL('https://stg.admiralbet.rs/registration');
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
});

test('register', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('https://stg.admiralbet.rs/registration');
});

test('check error message in email input field', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
  await page.fill('id=email', 'test');
  await page.locator('id=email').blur();
  await page.waitForSelector('.invalid-feedback.ng-star-inserted');
  await expect(page.locator('.invalid-feedback.ng-star-inserted').first()).toBeVisible();
  await expect(page.locator('.invalid-feedback.ng-star-inserted').first()).toHaveText('Email adresa nije validna');
});

test('check error message in password input field', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
  await expect(page).toHaveURL('https://stg.admiralbet.rs/registration');
  await page.fill('id=password', 'test');
  await page.locator('id=password').blur();
  await page.locator('.invalid-feedback').nth(2).waitFor();
  await expect(page.locator('.invalid-feedback').nth(2)).toBeVisible();
  await expect(page.locator('.invalid-feedback').nth(2)).toHaveText('Lozinka treba da ima 8 karaktera, veliko slovo i broj');
});
test('check error message in confirm password input field', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
  await expect(page).toHaveURL('https://stg.admiralbet.rs/registration');
  await page.fill('id=password', 'test1234');
  await page.fill('id=repeatedPassword', 'test');
  await page.locator('id=repeatedPassword').blur();
  await page.locator('.invalid-feedback').nth(3).waitFor();
  await expect(page.locator('.invalid-feedback').nth(3)).toBeVisible();
  await expect(page.locator('.invalid-feedback').nth(3)).toHaveText('Lozinke se ne poklapaju');
});
test('check error message in first name input field', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
  await expect(page).toHaveURL('https://stg.admiralbet.rs/registration');
  await page.fill('id=firstName', '');
  await page.locator('id=firstName').blur();
  await page.locator('.invalid-feedback').nth(4).waitFor();
  await expect(page.locator('.invalid-feedback').nth(4)).toBeVisible();
  await expect(page.locator('.invalid-feedback').nth(4)).toHaveText('Obavezno polje.');
});
test('check error message in first name input field for other characters', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
  await expect(page).toHaveURL('https://stg.admiralbet.rs/registration');
  await page.fill('id=firstName', 'test1234!@#$%^&*()_+');
  await page.locator('id=firstName').blur();
  await page.locator('.invalid-feedback').nth(4).waitFor();
  await expect(page.locator('.invalid-feedback').nth(4)).toBeVisible();
  await expect(page.locator('.invalid-feedback').nth(4)).toHaveText('Neispravno ime');
});
test('check error message in last name input field', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
  await expect(page).toHaveURL('https://stg.admiralbet.rs/registration');
  await page.fill('id=lastName', '');
  await page.locator('id=lastName').blur();
  await page.locator('.invalid-feedback').nth(5).waitFor();
  await expect(page.locator('.invalid-feedback').nth(5)).toBeVisible();
  await expect(page.locator('.invalid-feedback').nth(5)).toHaveText('Obavezno polje.');
});
test('check error message in last name input field for other characters', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
  await expect(page).toHaveURL('https://stg.admiralbet.rs/registration');
  await page.fill('id=lastName', 'test1234!@#$%^&*()_+');
  await page.locator('id=lastName').blur();
  await page.locator('.invalid-feedback').nth(5).waitFor();
  await expect(page.locator('.invalid-feedback').nth(5)).toBeVisible();
  await expect(page.locator('.invalid-feedback').nth(5)).toHaveText('Neispravno prezime');
});
test('check error message in JMBG input field', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
  await expect(page).toHaveURL('https://stg.admiralbet.rs/registration');
  await page.fill('id=pid', '123');
  await page.locator('id=pid').blur();
  await page.locator('.invalid-feedback').nth(6).waitFor();
  await expect(page.locator('.invalid-feedback').nth(6)).toBeVisible();
  await expect(page.locator('.invalid-feedback').nth(6)).toHaveText('JMBG mora sadržati 13 cifara ');
});
test('check error message in adress input field', async ({ page }) => {
  await page.goto('https://stg.admiralbet.rs/registration');
  await expect(page).toHaveURL('https://stg.admiralbet.rs/registration');
  await page.fill('id=adress', '');
  await page.locator('id=adress').blur();
  await page.locator('.invalid-feedback').nth(7).waitFor();
  await expect(page.locator('.invalid-feedback').nth(7)).toBeVisible();
  await expect(page.locator('.invalid-feedback').nth(7)).toHaveText('Obavezno polje.');
});