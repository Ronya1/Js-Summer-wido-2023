const { expect } = require("chai");
const { it } = require("mocha");
const commands = require(`../../Commands`)
const FBHomePage = require(`../../POM/Facebook/FBHomepage`)

const c1 = new commands
const hP1 = new FBHomePage



describe('Class 6 Homework', () => {

// THIS IS THE ORIGINAL CODE 
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

// Clean up the below code after. // THIS IS THE ORIGINAL NON POM CODE 
it('Verify User Gets Error Message When Submitting Empty Form ', async () => {
    await browser.url('https://www.facebook.com') // launch browser 
    await browser.pause(2000)

    const emailInputButton = await $('#email').isEnabled() // Checking the email is enabled returns boolean 
    const pwdInputButton = await $('#pass').isEnabled() // checking the pwd is enabled returns boolean 

    expect(emailInputButton,'Not working' ).to.be.true // running the test 
    expect(pwdInputButton,'Not working' ).to.be.true // running the test 
    await browser.pause(2000)

    const loginButton = await $('button=Log In').isEnabled()
    expect(loginButton, 'not enabled').to.be.true
    await browser.pause(2000)

    await $('button=Log In').click()
    await browser.pause(2000)

    const errorMessageLocation = await $('div*=The email or mobile number you entered is').isDisplayed() // checking if error message is on the page returns boolean 
    expect(errorMessageLocation,'error Message not displayed' ).to.be.true 

// Clean up the below code after.   
// 1.) Store the locatros in thier own variables (make code smaller)
// 2.)     
})







//BELOW IS MY 1ST ATTEMPT AT POM. 
it.only('Verify User Gets Error Message When Submitting Empty Form ', async () => {
    await browser.url('https://www.facebook.com') // launch browser 
    await browser.pause(2000)

    // const emailInputButton = await $('#email').isEnabled() // Checking the email is enabled returns boolean 
    const emailInputButton = await hP1.isLoginEmailFieldEnabled()

    // const pwdInputButton = await $('#pass').isEnabled() // checking the pwd is enabled returns boolean 
    const pwdInputButton = await hP1.isLoginPwdFieldEnabled()

    expect(emailInputButton,'Not working' ).to.be.true // running the test 
    expect(pwdInputButton,'Not working' ).to.be.true // running the test 
    await browser.pause(2000)

    // const loginButton = await $('button=Log In').isEnabled()
    const loginButton = await hP1.isLoginBtnEnabled()

    expect(loginButton, 'not enabled').to.be.true
    await browser.pause(2000)

        // LEFT OFF HERE!!!!!


    await $('button=Log In').click()
    await browser.pause(2000)

    const errorMessageLocation = await $('div*=The email or mobile number you entered is').isDisplayed() // checking if error message is on the page returns boolean 
    expect(errorMessageLocation,'error Message not displayed' ).to.be.true 

    // I ADDED THE BELOW 2 LINES TO VERIFY WHAT ERROR MESSAGE APPEARS. 
    const loginErrorMessage = await $('div*=The email or mobile number you entered is').getText()
    console.log(`THIS IS THE ERROR MESSAGE ${loginErrorMessage}`);

// Clean up the below code after.   
// 1.) Store the locatros in thier own variables (make code smaller)
// 2.)     
})















});
