const { expect } = require("chai");
// const { describe, it } = require("mocha");

describe('Class 3 Homework', () => {
   
// Due date: Aug 16 eod

/** CANT DO THIS ONE DUE TO DARKSKY NOT BEING ACTIVE ANYMORE 
 * Tc-1:
 * https://www.darsky.net
 * Verify feelsLikeTempValue is between lowTempValue and highTempValue
 */

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
 * 
 * 6. Verify 'Keep me signed in' is not selected
 * 7. Click 'Keep me signed in'
 * 8. Verify 'Keep me signed in' is selected
 */

/** Steps To Solve 
 * 1.) Launch Facebook and pause for 2 seconds 
 * 2.) 
 * 3.) 
 * 4.) 
 */

    it.only('Verify empty messenger login flow', async () => {
        await browser.url('https://www.facebook.com') // launch browser 
        await browser.pause(1000)

        const messangerButtonLocator = await $('=Messenger')
        const isMessangerButtonEnabled = await messangerButtonLocator.isEnabled()
        expect(isMessangerButtonEnabled,'Not enabled' ).to.be.true

        await messangerButtonLocator.click()
        browser.pause(2000)

        const keepMeSignedInLocator = await $('input[type=checkbox]')
        const iskeepMeSignedInLocator = await keepMeSignedInLocator.isSelected()
        expect(iskeepMeSignedInLocator,'keep me signed in is Not enabled' ).to.be.false

        const loginButtonMessangerPage = await $('button=Log in').isDisplayed()
        browser.pause(1000) 

        await $('button=Log in').click()
        browser.pause(2000)

        const FindYourAccountLocator = await $('=Find your account and log in.')
        const FindYourAccountDisplayed = await FindYourAccountLocator.isDisplayed()
        expect(FindYourAccountDisplayed,'Find account text not displayed' ).to.be.true
        browser.pause(1000)

        const continueButtonLocator = await $('#loginbutton')
        const iscontinueButtonEnabled = await continueButtonLocator.isEnabled()
        browser.pause(1000)
        expect(iscontinueButtonEnabled,'Continue button not enabled' ).to.be.true
        browser.pause(2000)






    // Clean up the below code after.   
    // 1.) Store the locatros in thier own variables (make code smaller)
    // 2.)   

    });



});