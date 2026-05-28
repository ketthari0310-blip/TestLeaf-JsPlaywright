import test from '@playwright/test';

test('Edit a Lead', async ({page}) => {
    await page.goto(' https://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('democsr');
    await page.locator('[name="PASSWORD"]').fill('crmsfa');
    await page.locator('input[class="decorativeSubmit"]').click();
    await page.waitForTimeout(5000);
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();
    await page.locator('//a[contains(text(),"Leads")]').click();
    await page.locator('//a[contains(text(),"Create Lead")]').click();
    await page.locator('#createLeadForm_companyName').fill('TestLeafPlaywright');
    await page.locator('input[name="firstName"]').last().fill('Murugan');
    await page.locator('input[name="lastName"]').last().fill('Sivan');
    await page.locator('input[name="firstNameLocal"]').fill('Ketthari');
    await page.locator('input[name="lastNameLocal"]').fill('Thandapani');
    await page.locator('input[name="submitButton"]').click();
    await page.waitForTimeout(5000);
    const title = await page.title();
    console.log("The title of the Page is:" + title); 
    await page.locator('//a[contains(text(),"Edit")]').click();
    await page.locator('input[name="companyName"]').last().fill('All is well Company');
    await page.locator('input[value="Update"]').click();
    const editPageTitle = await page.title();
    console.log("The title of the Page is:" + editPageTitle);
})

test('Create a Lead salesforce', async ({page}) => {
    await page.goto('https://login.salesforce.com');
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('[name="pw"]').fill('TestLeaf@2025');
    await page.locator('input[name="Login"]').click();
    await page.waitForTimeout(5000);
    await page.locator('//div/span[contains(text(),"App Launcher")]').click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.waitForTimeout(5000);
    await page.locator('//a//span//p[contains(text(),"Sales")]').nth(1).click();
    await page.waitForTimeout(2000);
    await page.locator('//a/span[contains(text(),"Leads")]').first().click();
    await page.locator('//div[@title="New"]').click(); 
    await page.locator('//button[@name="salutation"]').click();
    await page.getByText('Mr.').click();
    await page.locator('//input[@placeholder="Last Name"]').fill('Murugan');
    await page.locator('//input[@name="Company"]').fill('TestLeafPlaywright');
    await page.locator('//button[@name="SaveEdit"]').click();
    
})

test('Create a Individuals', async ({page}) => {
    await page.goto('https://login.salesforce.com');
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('[name="pw"]').fill('TestLeaf@2025');
    await page.locator('input[name="Login"]').click();
    await page.waitForTimeout(5000);
    await page.locator('//div/span[contains(text(),"App Launcher")]').click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.waitForTimeout(5000);
    await page.locator('//a//span//p[contains(text(),"Individuals")]').click();
    await page.waitForTimeout(2000);
    await page.locator('//a//span[contains(text(),"Individuals List")]').click();
    await page.waitForTimeout(1000);
    await page.locator('//a//span[contains(text(),"New Individual")]').click(); 
    await page.locator('//input[@placeholder="Last Name"]').fill('Individualname');
    await page.locator('//button/span[contains(text(),"Save")]').last().click();   
})

test.only('Edit Individuals', async ({page}) => {
    await page.goto('https://login.salesforce.com');
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('[name="pw"]').fill('TestLeaf@2025');
    await page.locator('input[name="Login"]').click();
    await page.waitForTimeout(5000);
    await page.locator('//div/span[contains(text(),"App Launcher")]').click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.waitForTimeout(5000);
    await page.locator('//a//span//p[contains(text(),"Individuals")]').click();
    await page.waitForTimeout(2000);
    await page.locator('//a//span[contains(text(),"Individuals")]').first().click();
    await page.waitForTimeout(1000);
    await page.locator('//input[@type="search"]').last().fill('Individualname');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.locator('//a//span[contains(text(),"Individualname")]').first().click();
    await page.waitForTimeout(1000);
    await page.locator('//a[@title="Edit"]').click();
    await page.waitForTimeout(1000);
    await page.locator('//a[contains(text(),"None")]').first().click();
   // await page.locator('//a[contains(text(),"None")]').first().click();
    await page.getByText('Mrs.').click();
    await page.locator('//input[@placeholder="First Name"]').fill('Vetrivel');
    await page.locator('//button/span[contains(text(),"Save")]').last().click();   
})

