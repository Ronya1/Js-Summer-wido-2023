// Practice:

const { describe } = require("mocha");
const { expect } = require("chai");

/**
 * Change the temp-unit in darksky.net
 * 
 * 1. Launch darksky.net
 * 2. Change temp unit to "˚C, m/s"
 * 
 * Use Weather Channel now 
 */

describe('TWC Website testing', () => {
    it('Change the temp-unit in from f to c', async() => {
        await browser.url('https://weather.com/')
        await browser.pause(5000)

        // Finding the drop down locator 
        const dropDownOnHP = await $(`//header[@aria-label="Menu"]/div/div[2]/div[2]/button`)
        const isdropDownOnHPEnabled = await dropDownOnHP.isEnabled()
        expect(isdropDownOnHPEnabled, 'drop down not enabled').to.be.true
        await browser.pause(5000)

        //Clicking the element
        await dropDownOnHP.click()
        await browser.pause(5000)

        //locating the c and clicking it to change the value STUCK HERE as its not clicking C 
        const cTempSelectorLocator = await $(`//header[@aria-label="Menu"]/div/div[2]/div[2]/nav/div/div/section/div/ul/li[2]`) // //li[@id='UnitSelectorTabs-tab_1']
        const isCTempLocatorEnabled = await cTempSelectorLocator.isEnabled()
        expect(isCTempLocatorEnabled, 'C temp option is not clickable').to.be.true
        await cTempSelectorLocator.click()
        await browser.pause(5000)



    });
});
