const Commands = require("../../Commands");



class SignUpPage{

    commands = new Commands();
    messangerButtonLocator = '=Messenger'
    keepMeSignedInLocator = 'span[class=_2qcu]'
    loginButtonMessangerPage = 'button=Log in'
    FindYourAccountLocator = '=Find your account and log in.'
    continueButtonLocator = '#loginbutton'
    keepMeSignedInLocator2 = 'label[class=uiInputLabelInput]'


    async clickButton(locator){
        await locator.click()
    }



} module.exports = SignUpPage;