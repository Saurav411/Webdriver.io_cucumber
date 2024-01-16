const { Given, When, Then } = require('@wdio/cucumber-framework');
const TimelineReporter = require('wdio-timeline-reporter').default;

Given(/^I am on the PremierInn Home page$/, async () => {
  console.log("Navigating to Premier Inn Home Page.")
  await browser.url('https://www.premierinn.com/gb/en/home.html')
   await browser.pause(3000)
  })

  Given(/^I am on the PremierInn Home Sign up page$/, async () => {
    console.log("Navigating to Premier Inn Home Page.")
    await browser.url('https://secure2.premierinn.com/gb/en/account/register.html')
  await browser.pause(3000)
    })


When(/^Accept Cookies if any$/, async () => {
  console.log("Accepting the cookies")
  const inputElement = await browser.$('#accept-all-cookies-button');
  await inputElement.click();
  console.log("cookies accepted.")
  await browser.pause(30000)
  })


 Then(/^Verify PremierInn Home Page Title$/, async () => {
  console.log("Verifying Page Title")
  await expect(browser).toHaveTitleContaining("Premier Inn hotels")
  console.log("Page title Verified.")
  await browser.pause(2000)

})

Then(/^Verify PremierInn Home srp Page Title$/, async () => {
  console.log("Verifying srp Page Title")
  await expect(browser).toHaveTitleContaining("Search results | Premier Inn")
  console.log("Page title Verified.")
})

Then(/^Verify PremierInn New Registration Page Title$/, async () => {
  console.log("Verifying Page Title")
  await expect(browser).toHaveTitleContaining("Create a My Premier Inn account")
  console.log("Sign up Page title Verified.")
})


When(/^Entering Location or Hotel Name to Search (.*)$/, async (Hotel_or_Location) => {
  console.log("Entering Hotel name")
  await browser.$("//input[@placeholder='Enter place, postcode or hotel']").setValue(Hotel_or_Location)
  await browser.pause(2000)
//  uncomment if req from 52-65
//   await browser.waitUntil(async () => {
//     const suggestions = await browser.$$("//search-suggestion[@class='search-suggestions']");
//     return suggestions.length > 0;
// }, 5000, 'Suggestions not visible within 5 seconds');

//       await browser.$$("(//search-suggestion[@class='search-suggestions']/ul//li)[1]").click
//       console.log("Suggested_Hotel Selected.")
//   })

//   When(/^Select No of Guests and RoomType$/, async () => {
//     console.log("Entering Hotel name")
//     await browser.$('.room-picker-button').click();
//     await browser.pause(2000)
//     await browser.$('.room-picker-button').click();


    // await browser.$('.wb-btn wb-btn--tertiary wb-btn--tertiary--large').click();
  })

When('Clicking on Search button', async() => {
  console.log("Clicking on Search Button")
  // const searchBtn = await browser.$('#search-console__form-button');
 const searchBtn = await browser.$('.search-button__text');
 await searchBtn.waitForClickable();
 await browser.pause(3000)

//  await browser.keys(['Tab']);
//  await browser.keys(['Enter']);

 await searchBtn.click();
  await browser.pause(30000)
  console.log("Search Button clicked.")
  await browser.keys(['Enter']);
})

When('Clearing Cookies', async() => {
    // Output cookies before clearing
  const cookiesBeforeClear = await browser.getCookies();
  console.log('Cookies before clearing:', cookiesBeforeClear);

  // Clear all cookies
  await browser.deleteCookies();

  // Output cookies after clearing
  const cookiesAfterClear = await browser.getCookies();
  console.log('Cookies after clearing:', cookiesAfterClear);

})

When(/^Redirecting to srp page$/, async () => {
  var srp ="https://www.premierinn.com/gb/en/search.html?searchModel.searchTerm=Holborn,%20London,%20UK&PLACEID=ChIJA7_adjUbdkgR_XPGaE3twAI&ARRdd=21&ARRmm=12&ARRyyyy=2023&NIGHTS=1&ROOMS=1&ADULT1=1&CHILD1=0&COT1=0&INTTYP1=DB&BOOKINGCHANNEL=WEB&SORT=1&VIEW=2"
  console.log("Navigating to srp Page.")
  await browser.newWindow(srp);
  await browser.pause(3000)
  })
  
  Then(/^Choose a Hotel from srp page$/, async () => {
  console.log("Selecting the Hotel")
  await browser.$("(//div[@data-testid='SRP-hotel-card']//div[@data-testid='SRP-hotel-button'])[1]").click
  await browser.pause(10000)
    })

    When(/^Accept srp Cookies if any$/, async () => {
      console.log("Accepting srp cookies")
      // const inputElement = await browser.$("//button[@data-testid='CookiePoliciesModal-AcceptAllButton']");
      const inputElement = await browser.$('.chakra-button css-t7po2p');
      await inputElement.click();
      console.log("cookies accepted.")
      })
  

When('Clicking on Sign in button', async () => {
  console.log("Scrolling Down Till last and Clicking on Sign up button.")
  // Smooth scroll to the bottom of the page using browser.execute
  await browser.execute(() => {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });

 // Wait for a moment after scrolling
  await browser.pause(2000);
  console.log("Clicking on Sign up Button");
  await browser.$("//button[@id='signup-btn']").click();
  await browser.pause(3000);
});

When('Clicking on Log in button and Selecting Sign up here', async () => {
  console.log("Clicking on Log in button")
  await browser.$("//button[@id='log-in']").click();
  await browser.pause(3000);
  await browser.url('https://secure2.premierinn.com/gb/en/account/register.html')
  await browser.pause(3000)
});


When(/^Entering details for Sign in (.*) (.*) (.*)$/, async (firstname, lastname, email) => {
  console.log("Entering Sign up details in the Form.")
  await browser.$("//input[@aria-label='First Name:']").setValue(firstname)
  await browser.pause(3000);
  await browser.$("//input[@aria-label='Last Name:']").setValue(lastname)
  await browser.pause(3000);
  console.log("First Name & Last Name Entered.");
  await browser.$("//input[@aria-label='Email: ']").setValue(email)
  await browser.pause(3000);
  console.log("Email ID Entered.");
  await browser.pause(3000);
  await browser.$("//button[@class='newsletter-sign-up-modal__button wb-btn--primary wb-btn']").click();
  console.log("Sign up Button Clicked.");
  await browser.pause(3000);
  await browser.$("//modal-close[@class='newsletter-sign-up-modal__button newsletter-sign-up-modal__confirmation-button wb-btn--primary wb-btn']").click();
  console.log("Sign up Completed, Please check your Inbox.");
});

When(/^Entering details for New User Registration (.*) (.*) (.*)$/, async (firstname, lastname, email) => {
  TimelineReporter.addContext({
    title: 'Entering details for New User Registration',
    value: 'Entering Sign up details in the Form.',
  });

  console.log("Entering Sign up details in the Form.")
  const TitleDrpDwn= await browser.$("//select[@data-auto-id='register-title']")
  TitleDrpDwn.selectByVisibleText("Mr")

  await browser.$("//input[@data-auto-id='register-firstName']").setValue(firstname)
  await browser.pause(3000);
  await browser.$("//input[@data-auto-id='register-lastName']").setValue(lastname)
  await browser.pause(3000);
  console.log("First Name & Last Name Entered.");
  

  await browser.$("//input[@data-auto-id='register-email']").setValue(email)
  console.log("Email ID Entered.");
  await browser.pause(5000);

  await browser.$("//input[@data-auto-id='register-password']").setValue("Abcd@1234")
  await browser.$("//input[@data-auto-id='register-confirm-password']").setValue("Abcd@1234")
  console.log("Password & Confirm Password Entered.");
  await browser.pause(3000);

  await browser.$("//input[@data-auto-id='register-mobile']").setValue("123456789")
  console.log("Phone number Entered.");
  await browser.pause(2000);

  await browser.$("//input[@data-auto-id='register-postcode']").setValue("E1W 2RG")
  console.log("Pincode & Address Entered.");
  await browser.$("//button[@data-ng-click='addressLookup(postCodeLookup);']").click();
  await browser.pause(2000);

  console.log("Selecting the Address from the Drop Down.")
  const addressSelect= await browser.$("//select[@name='addressSelect']")
  addressSelect.selectByVisibleText("1 Eluna Apartments, 4 Wapping Lane, LONDON E1W 2RG")
  await browser.pause(30000);
  // Smooth scroll to the bottom of the page using browser.execute
  await browser.execute(() => {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });

  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

 // Wait for a moment after scrolling
  await browser.pause(30000);

  console.log("Selecting the Checkbox for Terms & Conditions.")
  const TnC_Checkbox= await browser.$("//input[@name='checkboxPrivacy']")
  // const TnC_Checkbox= await browser.$("//label[@for='singleCheckboxError']")
  TnC_Checkbox.click()

  await browser.pause(10000);
  console.log("Selecting the Checkbox for Google Captcha")
  const GoogleCaptcha= await browser.$("//span[@id='recaptcha-anchor']")
  GoogleCaptcha.click()

  // await browser.$("//div[@class='recaptcha-checkbox-borderAnimation']").click();
  console.log("Clicking on Create an Account Button");
  await browser.$("//button[@data-auto-id='registerButton']").click();
  await browser.pause(10000);
});


