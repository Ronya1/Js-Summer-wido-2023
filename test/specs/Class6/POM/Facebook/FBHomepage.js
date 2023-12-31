const Commands = require("../../Commands");



class Homepage{

    commands = new Commands();
    emailInputButton = '#email'
    pwdInputButton = '#pass'
    loginButton = 'button=Log In'



    // Functions in order to interact with the web-elements on the Homepage
    /**
     * function to type in email address field
     * Input: locator, data
     *  
     */
    async enterLoginEmail(loginEmail) {
        await this.commands.typeInWebElement(this.emailInputButton, loginEmail);
    }

        /**
     * function to type in password field
     * Input: locator, data
     *  
     */
        async enterLoginPassword(loginPwd) {
            await this.commands.typeInWebElement(this.pwdInputButton, loginPwd);
        }
    
        /**
         * function to click on login button
         * Input: locator
         *  
         */
        async clickLoginButton() {
            await this.commands.clickWebElement(this.loginButton);
        }
    
        /**
         * function to login
         * input: username, password
         */
        async login(username, password) {
            await this.enterLoginEmail(username);
            await this.enterLoginPassword(password);
            await this.clickLoginButton();
        }
    
        /**
         * function to check if login email is enabled
         * Input: -
         * Return type: boolean
         */
        async isLoginEmailFieldEnabled() {
            return await this.commands.isWebElementEnabled(this.emailInputButton);
        }
    
        /**
         * function to check if login password is enabled
         * Input: -
         * Return type: boolean
         */
        async isLoginPwdFieldEnabled() {
            return await this.commands.isWebElementEnabled(this.pwdInputButton);
        }
    
        /**
         * function to check if login email is enabled
         * Input: -
         * Return type: boolean
         */
        async isLoginBtnEnabled() {
            return await this.commands.isWebElementEnabled(this.loginButton);
        }
    
        async isLoginFieldEnabled(fieldName) {
            let isEnabled = false;
            switch (fieldName.toLowerCase()) {
                case 'username':
                    isEnabled = await this.commands.isWebElementEnabled(this.emailInputButton);
                    break;
                case 'password':
                    isEnabled = await this.commands.isWebElementEnabled(this.pwdInputButton);
                    break;
                case 'button':
                    isEnabled = await this.commands.isWebElementEnabled(this.loginButton);
                    break;        
                default:
                    break;
            }
            return isEnabled;
        }
    
        async clickCreateNewAccount() {
            await this.commands.clickWebElement(this.createNewAccountLocator);
        }



} module.exports = Homepage;