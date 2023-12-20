const { expect } = require("chai");
const { it } = require("mocha");
// const { describe, it } = require("mocha");

describe('Class 3 Homework', () => {
   
// Due date: Aug 16 eod

/** CANT DO THIS ONE DUE TO DARKSKY NOT BEING ACTIVE ANYMORE 
 * Tc-1:
 * https://www.darsky.net
 * Verify feelsLikeTempValue is between lowTempValue and highTempValue
 */
/**TO SOLVE 
 * Got to the weather channel 
 * find the search button
 * Type in the zipcode 10309 
 * select Staten Island From Drop down 
 * Click Search 
 * 
 * Store Hight temp , store low temp and feels like 
 * 
 */
    // it('Verify feelsLikeTempValue is between lowTempValue and highTempValue', async() => {
    //     await browser.url('https://weather.com/')
    //     await browser.pause(3000)



    // });


/**
 * Tc-2: CANT DO THIS ONE DUE TO DARKSKY NOT BEING ACTIVE ANYMORE
 * https://www.darsky.net
 * Verify user can get temperature based on zipcode
 * 
 */



/**
 * Tc-3:
 * https://www.facebook.com
 * 
 * Verify user gets error message when submit empty login form
 * expected error msg -> The email address or mobile number you entered isn't connected to an account.
 */
/** Steps To Solve 
 * 1.) Launch Facebook and pause for 2 seconds 
 * 2.) locate the email box and store it in a variable. -> DONT REALLY NEED THIS FOR THIS CASE 
 * 3.) locate the password box and store it in a variable -> DONT REALLY NEED THIS FOR THIS CASE 
 * 4.) Verify email text box is enabled - create a variable or it then run an expect statement to be true -> DONT REALLY NEED THIS FOR THIS CASE 
 * 5.) Verify password text box is enabled - create a variable or it then run an expect statement to be true -> DONT REALLY NEED THIS FOR THIS CASE 
 * 6.) locate the login button and store it in a variable 
 * 7.) verify that the login button is enabled 
 * 8.) run an expect statement to be true 
 * 9.) click the login button 
 * 10.) locate the error message and store it in a variable then run isDisplayed 
 * 11.) run an expect statement to be true. 
 */

// Clean up the below code after. 
    it('Verify User Gets Error Message When Submitting Empty Form ', async () => {
        await browser.url('https://www.facebook.com') // launch browser 
        await browser.pause(1000)

        const emailInputButton = await $('#email').isEnabled() // Checking the email is enabled returns boolean 
        const pwdInputButton = await $('#pass').isEnabled() // checking the pwd is enabled returns boolean 

        expect(emailInputButton,'Not working' ).to.be.true // running the test 
        expect(pwdInputButton,'Not working' ).to.be.true // running the test 
        await browser.pause(2000)

        const loginButton = await $('button=Log In').isEnabled()
        expect(loginButton, 'not enabled').to.be.true
        await browser.pause(1000)

        await $('button=Log In').click()
        await browser.pause(1000)

        const errorMessageLocation = await $('div*=The email or mobile number you entered is').isDisplayed() // checking if error message is on the page returns boolean 
        expect(errorMessageLocation,'error Message not displayed' ).to.be.true 

    // Clean up the below code after.   
    // 1.) Store the locatros in thier own variables (make code smaller)
    // 2.)     
    });

/**
 * Tc-4:
 * https://www.facebook.com
 * 
 * Verify empty messenger login flow
 * 1. Click Messenger
 * 2. Verify 'Keep me signed in' is not selected
 * 3. Click 'Log In' button
 * 4. Verify link -> "Find your account and log in" is displayed
 * 5. Verify 'Continue' button is enabled
 * 6. Verify 'Keep me signed in' is not selected
 * 
 * 7. Click 'Keep me signed in'
 * 8. Verify 'Keep me signed in' is selected
 */


    it.only('Verify empty messenger login flow', async () => {
        await browser.url('https://www.facebook.com') // launch facebook 
        await browser.pause(200)

        const messangerButtonLocator = await $('=Messenger') // find messanger button 
        const isMessangerButtonEnabled = await messangerButtonLocator.isEnabled() // check that its enabled 
        expect(isMessangerButtonEnabled,'Not enabled' ).to.be.true

        await messangerButtonLocator.click() // Clicking on messanger button 
        await browser.pause(200)

        const keepMeSignedInLocator = await $('span[class=_2qcu]') // find checkbox
        const iskeepMeSignedInLocator = await keepMeSignedInLocator.isSelected() // its not selected 
        expect(iskeepMeSignedInLocator,'keep me signed in is Not enabled' ).to.be.false
        await browser.pause(200)

        // await keepMeSignedInLocator.click() - DEBUGGING 
        // await browser.pause(1000) - DEBUGGING 

        const loginButtonMessangerPage = await $('button=Log in') // finding login button 
        const isLoginButtonMessangerPageDisplayed = await loginButtonMessangerPage.isDisplayed()
        expect(isLoginButtonMessangerPageDisplayed,'Login Button is Not Displayed' ).to.be.true
        await browser.pause(200)

        await loginButtonMessangerPage.click()
        await browser.pause(200)

        const FindYourAccountLocator = await $('=Find your account and log in.')
        const FindYourAccountDisplayed = await FindYourAccountLocator.isDisplayed()
        expect(FindYourAccountDisplayed,'Find account text not displayed' ).to.be.true
        browser.pause(200)

        // await FindYourAccountLocator.click() // DEBUGGING 
        // await browser.pause(1000) // DEBUGGING

        const continueButtonLocator = await $('#loginbutton')
        const iscontinueButtonEnabled = await continueButtonLocator.isEnabled()
        browser.pause(200)
        expect(iscontinueButtonEnabled,'Continue button not enabled' ).to.be.true
        await browser.pause(200)

        //  * 6. Verify 'Keep me signed in' is not selected
        // const keepMeSignedInLocator2 = await $('input[type=checkbox]') 
        const keepMeSignedInLocator2 = await $('label[class=uiInputLabelInput]')
        const isKeepMeSignedIn2Selected = await keepMeSignedInLocator2.isSelected() // should be false
        expect(isKeepMeSignedIn2Selected,'Continue button not enabled' ).to.be.false
        await browser.pause(200)

        // await keepMeSignedInLocator2.click() // DEBUGGING 
        // await browser.pause(15000) // DEBUGGING 

        if (isKeepMeSignedIn2Selected === false) {
            await keepMeSignedInLocator2.click() // the click works 
        }

        // WHY IS THIS STILL SAYING ITS NOT SELECTED WHEN IT WAS SELECTED. 
        await browser.pause(1000)
        const isKeepMeSignedInSelected_AfterClick = await $('label[class=uiInputLabelInput]').isSelected()
        expect(isKeepMeSignedInSelected_AfterClick,'check box still not clicked' ).to.be.true


    // Clean up the below code after.   
    // 1.) Store the locatros in thier own variables (make code smaller)
    // 2.)   

    });



});