import { test, expect } from '@playwright/test';

test('PVR Cinemas ticket booking ', async ({page}) => {
    await page.goto("https://www.pvrcinemas.com/");

    page.once('dialog', async alertType => {
    // Handle the alert
    const alrttype = alertType.type();
    console.log(alrttype);
    const alertMessage = alertType.message();
    console.log(alertMessage);
    await alertType.accept();

})

   await page.locator("//span[contains(text(),'Chennai')]").first().click();
    await page.waitForTimeout(2000);
    await page.locator("//span[contains(text(),'Cinema')]").first().click();
    await page.locator("//span[contains(text(),'Select Cinema')]").first().click();
    await page.locator('//li[@class="p-dropdown-item"]//span[contains(text(),"INOX National")]').click();
 
  await page.waitForTimeout(2000);

await page.locator('//span[contains(text(),"Tomorrow")]').click();
 
     await page.waitForTimeout(2000);
 await page.locator("//span[contains(text(),'Select Movie')]").first().dblclick();
 
 await page.locator('//ul[@role="listbox"]//li[@class="p-dropdown-item" and .//span[normalize-space(.)="KARUPPU"]]').click();


     await page.waitForTimeout(2000);

await page.getByText('09:05 AM', { exact: true }).click();

 await page.waitForTimeout(2000);
 await page.getByLabel("Submit").click();
 
 await page.waitForTimeout(2000);
await page.locator("//button[text()='Accept']").click();

 await page.locator("//span[@id='SL.SILVER|F:11']").click();
  const seatselected = await page.locator("//span[@id='SL.SILVER|F:11']").getAttribute('id');
  expect(seatselected).not.toBeNull();

  const seatNumber = seatselected!.split('|')[1].replace(':', '');
  const seatInSummary = await page.locator('.seat-number p').innerText();

  expect(seatInSummary).toBe(seatNumber);
 console.log(`Selected seat number: ${seatNumber}`);

  const movieTitle = await page.locator("//div[@class='summary-movies-content']//h5").innerText();
  expect(movieTitle).toBe("KARUPPU");
  console.log(`Selected movie title: ${movieTitle}`);

 const grandTotal = await page.locator("//div[@class='grand-total']//h6").innerText();
 const Totalprice = await page.locator("//div[@class='grand-prices']//h6").innerText();
  expect(Totalprice).not.toBeNull();

  console.log(`Grand total: ${Totalprice}`);

  await page.locator("//button[text()='Proceed']").click();
})

