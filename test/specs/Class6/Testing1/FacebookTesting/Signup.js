const { expect } = require("chai");
const { it } = require("mocha");


describe('Class 6 Homework', () => {


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


it('Verify empty messenger login flow', async () => {
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

})





});
