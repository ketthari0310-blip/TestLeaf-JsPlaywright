import test from '@playwright/test';

test('Create a Lead', async ({page}) => {
    await page.goto(' https://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('democsr');
    await page.locator('[name="PASSWORD"]').fill('crmsfa');
    await page.locator('input[class="decorativeSubmit"]').click();
   await page.waitForTimeout(5000);
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();
    await page.locator('//a[contains(text(),"Leads")]').click();
    await page.locator('//a[contains(text(),"Create Lead")]').click();
   // await page.locator('#createLeadForm_companyName').fill('TestLeafPlaywright');
   await page.locator('input[name="companyName"]:last()').fill('TestLeafPlaywright');
    await page.locator('input[name="firstNameLocal"]').fill('Ketthari');
    await page.locator('input[name="lastNameLocal"]').fill('Thandapani');
    await page.locator('input[name="personalTitle"]').fill('Mr');
    await page.locator('input[name="generalProfTitle"]').fill('QA');
    await page.locator('input[name="annualRevenue"]').fill('1000000');
    await page.locator('#createLeadForm_departmentName').fill('Testing');
    await page.locator('#createLeadForm_birthDate').fill('12/12/1990');
    await page.locator('input[name="submitButton"]').click();

    const title = await page.title();
    console.log("The title of the Page is:" + title);
   

})
