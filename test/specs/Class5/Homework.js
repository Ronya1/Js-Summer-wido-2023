
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
 * 
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
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
            // -> Just chropath suggestion -> Manila path //body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/ul[1]/li[7]/div[1]/div[1]/button[1]
            // -> My finding -> //button[@aria-label="Manila National Capital Region, Philippines"]

            // Wait for the dropdown to appear then select Manila. 
            const dropdown = await $('ul[data-stid="destination_form_field-results"]');
            await dropdown.waitForExist();
            console.log(`all elements of the drop down ${JSON.stringify(dropdown)}`)

            // Click on the first item in the dropdown (assuming 'Manila' is the first result)
            const firstItem = $('li[data-index="0"]');
            await firstItem.waitForExist();
            await firstItem.click();
            await browser.pause(3000)

            await browser.pause(3000);

            //Selecting the dates - THIS IS NOT WORKING 
            const allDecDates2 = await $$('//span[text()="December 2023"]/following-sibling::table//tbody');
                for (const dateSelected of allDecDates2){
                    const date = await dateSelected.getAttribute('data-day');
                    if(date.localeCompare('28') === 0){
                        await dateSelected.click();
                        break;
                    }
                }
                await browser.pause(2000)



        });
        
    });