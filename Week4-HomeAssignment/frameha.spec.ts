import { test, expect } from '@playwright/test'


test("iFrame Handling in Leafground", async ({page}) => {
    await page.goto("https://leafground.com/frame.xhtml")
    const frCount= page.frames()
    const frameValue= frCount.length
    console.log("Total frame value is: "+frameValue)

    const TextContent = frCount[1].locator("(//button[@id='Click'])[1]") //First frame
    await TextContent.click()
    await page.waitForTimeout(2000)
    await expect(TextContent).toHaveText("Hurray! You Clicked Me.")

    const NestedFrame= page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click") //nested frame
    await NestedFrame.click()
    await expect(NestedFrame).toHaveText("Hurray! You Clicked Me.")

})