const { expect } = require("chai");

describe('Dropdown with non-select tag', () => {

        /**
         * Change the temp-unit in darksky.net
         * 
         * 1. Launch darksky.net
         * 2. Store the current-temp in a variable(fT)
         * 3. using tempConversion formula to convert fT into celsius (cT)
         * 4. Change temp unit to "˚C, mph"
         * 5. Verify the current-temp on web is equals to cT
         * 
         * cT = (fT - 32) × (5/9)
         * 
         */

        it('Change the temp-unit in darksky.net', async() => {
            await browser.url('https://weather.com/')
            await browser.pause(20)
    
            // Locating and verifying the search bar is displayed
            const searchBarLocator = await $('#LocationSearch_input')
            const isDearchBarEnabled = await searchBarLocator.isDisplayed()
            expect(isDearchBarEnabled, "Search Bar Is Not Enabled").to.be.true
            await browser.pause(5000)
    
            // Clicking the search bar and beginning location search 
            await searchBarLocator.click()
            await browser.pause(3000)
    
            // Typing 10309 and selecting Staten Island from drop down 
            await searchBarLocator.setValue('10309') // This is working its showing 10309 in the consol, just made my pauses longer 
            await browser.pause(5000)
    
            const statenIslandLoactor = await $('button=Staten Island, NY') 
            clickingSILocator = await statenIslandLoactor.click() // This is working and taking me to the staten Island page 
            await browser.pause(5000)
    
            // -> DO AN EXPECT HERE THAT THE PAGE FOR STATEN ISLAND APPEARED. 
            const statenIslandNewPage = await $('h1=Staten Island, NY')
            const isstatenIslandNewPageDisplayed = await statenIslandNewPage.isDisplayed()
            expect(isstatenIslandNewPageDisplayed , " Staten Island Page did not open").to.be.true
            await browser.pause(5000)
    
    
        //    //Scrolling to the max/min/feels like section
        //    const maxMinFeelsLikeSection = await $('h2=Weather Today in Staten Island, NY')
        //    await maxMinFeelsLikeSection.scrollIntoView()
        //    await browser.pause(5000)
    
        //    // -> Do an expect here that the text "Weather Today in Staten Island, NY" is displayed 
        //    const weatherInSIBoxLocator = await $('h2=Weather Today in Staten Island, NY')
        //    const weatherInSIBoxDisplayed = await weatherInSIBoxLocator.isDisplayed()
        //    expect(weatherInSIBoxDisplayed , "Weather Today in SI Box is not displayed").to.be.true

           /**
            * grab the F temp and store it in a variable 
            * then change the f temp to c temp using the formula cT = (fT - 32) × (5/9)  & store in a variable 
            *
            * then locate the changer to change the temp from F to C 
            * then wait for the page to refresh 
            * then scroll back down into the temp view 
            * then grab the c temp 
            * the nverify the temp conversion I have is === 
            */
            
        //Getting the Ftemp text value 
            const FtempValue = await $(`//span[@class="CurrentConditions--tempValue--MHmYY"]`).getText()
            await browser.pause(5000)
            console.log(`this is the Ftemp value ${FtempValue}`);

            // converting ftemp to only 2 digits 
            const FtempValJustNum = FtempValue.substring(0,2)
            console.log(`this is the Ftemp value 2 ${FtempValJustNum}`)

            // convertin ftempt to C 
            const myCtempValue = (FtempValJustNum - 32) * (5/9)
            console.log(`my cTEMP Value = ${myCtempValue}`);



        // Finding the drop down locator 
            const dropDownOnHP = await $(`//header[@aria-label="Menu"]/div/div[2]/div[2]/button`)
            const isdropDownOnHPEnabled = await dropDownOnHP.isEnabled()
            expect(isdropDownOnHPEnabled, 'drop down not enabled').to.be.true
            await browser.pause(20000)

            //Clicking the element
            await dropDownOnHP.click()
            await browser.pause(20000)

            //locating the c and clicking it to change the value STUCK HERE as its not clicking C 
            const cTempSelectorLocator = await $(`li[@id='UnitSelectorTabs-tab_1']`) //header[@aria-label="Menu"]/div/div[2]/div[2]/nav/div/div/section/div/ul/li[2]
            const isCTempLocatorEnabled = await cTempSelectorLocator.isEnabled()
            expect(isCTempLocatorEnabled, 'C temp option is not clickable').to.be.true
            await cTempSelectorLocator.click()
            await browser.pause(10000)

        // locating and grabbing the C temp on the site 

        });


});