// YOU REALLY FUCKED UP THIS CODE!!!! 
const { describe } = require("mocha");
const { expect } = require("chai");// Due - Aug 19 (Friday eod)

/**
 * 
 * Launch darksky.net
 * Get all the timeline data in an array
 * then print array in the console.
 */


/**
 * Verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
 * 
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Aug-20
 * 8. Verify check-out date in Sep-5
 * 
 */


    describe('Hotels Testing', () => {

        it('Verify destination and check-in/ and check-out dates are as user selected', async() => {
            await browser.url('https://www.hotels.com/')
            await browser.pause(5000)

            // locating search bar and typing in "Man"
            const goingToLocator = await $('//button[@aria-label="Going to"]')
            await goingToLocator.click()
            await browser.pause(1000)

            const searchBarDropDown = await $('//input[@id="destination_form_field"]')
            await searchBarDropDown.setValue('Manila')
            await browser.pause(2000)

           // Take the drop down and get all elements then run a loop if === "Manila" then click it. 

            // Wait for the dropdown to appear then select Manila. 
            const dropdown = await $('ul[data-stid="destination_form_field-results"]');
            await dropdown.waitForExist();
            console.log(`all elements of the drop down ${JSON.stringify(dropdown)}`)

            // Click on the first item in the dropdown (assuming 'Manila' is the first result)
            const firstItem = $('li[data-index="0"]');
            await firstItem.waitForExist();
            await firstItem.click();
            await browser.pause(1000)

            await browser.pause(1000);

            const tabledataCallocator = await $('//button[@data-stid="uitk-date-selector-input1-default"]')
            await tabledataCallocator.click()
            await browser.pause(1000)

            const dec23Dates = await $(`//table[@aria-label="December 2023"]//tbody//tr[5]//td[5]`)
            await dec23Dates.click()
            await browser.pause(1000)

            const jan24Dates = await $(`//table[@aria-label="January 2024"]//tbody//tr[3]//td[2]`)
            await jan24Dates.click()
            await browser.pause(1000)

            const doneButtonOnDate = await $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[2]/div[1]/section[1]/footer[1]/div[1]/button[1]')
            await doneButtonOnDate.scrollIntoView()
            await browser.pause(1000)
            await doneButtonOnDate.click()
            await browser.pause(1000)

            const searchButtonLocator = await $(`//button[@id='search_button']`)
            await searchButtonLocator.click()
            await browser.pause(4000)

            const locationButtonAfterSearch = await $(`//button[contains(text(),'Manila, National Capital Region, Philippines')]`)
            const locationInsearchBar = await locationButtonAfterSearch.getText()
            const locationInsearchBarUpper = await locationInsearchBar.toUpperCase()
            await browser.pause(2000)
            console.log(`this is the new text ${locationInsearchBarUpper}`); //this worked 

            // NOW I NEED TO VERIFY THE TEXT CONTAINS Manila
            const doesSearchIncludeTerm = locationInsearchBarUpper.includes('MANILA')
            console.log(`this is the new text 2 ${doesSearchIncludeTerm}`); //this worked 
            expect(doesSearchIncludeTerm, 'Search page does not contain Manila').to.be.true

            // finish this code by verifying the dates selected. 
            await tabledataCallocator.click()
            await browser.pause(1000)

            const dateOnSearchPage = await $(`//button[@data-stid="uitk-date-selector-input1-default"]`)
            const isDateonPageSelected = await dateOnSearchPage.isEnabled()
            console.log(`This is it ${isDateonPageSelected}`);



        });
 
    });