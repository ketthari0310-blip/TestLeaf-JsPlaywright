import { test, expect } from '@playwright/test';

test('Decathlon sports shopping ', async ({ page }) => {
    await page.goto("https://www.decathlon.in/");

    page.once('dialog', async alertType => {
        // Handle the alert
        const alrttype = alertType.type();
        console.log(alrttype);
        const alertMessage = alertType.message();
        console.log(alertMessage);
        await alertType.accept();

    })
    await page.getByLabel("Decathlon Home").click();
    expect(page.url()).toBe("https://www.decathlon.in/"); // Verify that the URL is correct after clicking the home button
    await page.locator("//input[@type='search']").click();
    const isSearchEnabled = await page.locator("//input[contains(@placeholder,'Search for')]").isEnabled();
    expect(isSearchEnabled).toBe(true); // Verify that the search input is enabled
    const search = page.locator("//input[contains(@placeholder,'Search for')]");
    await search.fill("Shoes");
    await search.press('Enter');
    await page.waitForTimeout(2000);
    // get the page title and verify it contains the word "shoes"
    const productTitle = await page.title();

    console.log("The Product Title is: " + productTitle);
    await expect(page).toHaveTitle("Search | Shoes");// Verify that the page title contains the word "Search | shoes"

    await page.locator("//span[text()='Category']").click();
    await page.locator("//span[text()='Sport shoes']").click();
    await page.locator("//span[text()='Gender']").click()
    await page.locator("(//span[text()='Men'])[2]").click()

    await page.locator("//span[text()='Size']").click()
    await page.locator("//span[text()='Uk 10.5 - eu 45']").click()

    // print the filtered values
    const elements = await page.locator("//span[@class='leading-6 font-medium text-rock-900']").elementHandles();

    for (const el of elements) {
        const text = await el.innerText();
        console.log(text);
    }

    await page.getByAltText("Men Running Shoes Superior Grip Cushioned Upto 20km/week, Jogflow 190.1 - Blue").first().click();
    await page.getByLabel("Select size UK 10.5 - EU 45").click();
    await page.locator("//span[text()='Add to cart']").click();


    //validating popup message after adding the product to the cart

    const cartpopupmsg = await page.locator("//h3[contains(text(),'Prod')]").innerText()
    console.log("after adding to cart", cartpopupmsg);

    const price = await page.locator("data-test-id=cart:cart-checkout-total-cart-value").innerText()
    console.log("The total price is", price)

})
