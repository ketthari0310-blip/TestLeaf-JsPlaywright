import test, {chromium, webkit} from '@playwright/test';

test('Launch Browser in Edge for Redbus', async () => {

    
  const browser = await chromium.launch({ channel: 'msedge', headless: false}); 
  
  const context = await browser.newContext();
  // newPage() method is used to create a new page, it returns a page instance
  const page = await browser.newPage();

  // goto() method is used to navigate to a URL, it takes the URL as an argument
 const url=  await page.goto('https://www.redbus.in');

  //page.title() method is used to get the title of the page, it returns a string
  const title = await page.title();
  const url1 = page.url();
  console.log("Browserlauncehed successfully in Edge for Redbus");
  console.log("The title of the Page is:" + title);
  console.log("The URL of the Page is:" + url1);
  await browser.close();

 //------------------------------------ Launching WebKit for Flipkart ------------------ ------------------    
  const flipbrowser = await webkit.launch({headless: false}); 
  
  const flipcontext = await flipbrowser.newContext();
  // newPage() method is used to create a new page, it returns a page instance
  const flippage = await flipbrowser.newPage();

  // goto() method is used to navigate to a URL, it takes the URL as an argument
 const flipurl=  await flippage.goto('https://www.flipkart.com');

  //page.title() method is used to get the title of the page, it returns a string
  const fliptitle = await flippage.title();
  const flipurl1 = flippage.url();
  console.log("Browserlauncehed successfully in WebKit for Flipkart");
  console.log("The title of the Page is:" + fliptitle);
  console.log("The URL of the Page is:" + flipurl1);
  await flipbrowser.close();
});
