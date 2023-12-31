const Commands = require("../Commands");

class Homepage {

    goingToLocator = "//button[@aria-label='Going to']";
    toTypeInGoingToLocator = '#destination_form_field';

    destinationAutoSuggestionLocator = '//div[contains(@class, "truncate")]//strong'; 
    // OG Locator was //div[@class='truncate']//strong"
    // Chat GPT gave this //ul[@class="uitk-action-list no-bullet"]//li[@class="uitk-action-list-item uitk-typeahead-result-item has-subtext uitk-action-list-item-relaxed"]//span/strong
    // and this from GPT  - IT WORKED? //ul[@class="uitk-action-list no-bullet"]//li[@class="uitk-action-list-item uitk-typeahead-result-item has-subtext uitk-action-list-item-relaxed"]//button
    //Instead of the above maybe use this //li[@class="uitk-action-list-item uitk-typeahead-result-item has-subtext uitk-action-list-item-relaxed"]/div/div/div/div/div/span/strong
    // Tried this too from GPT .typeahead-custom-truncate strong
    // Tried this myself too //div[contains(@class, "truncate")]//strong


    calendarButtonLocator = '//button[@data-stid="uitk-date-selector-input1-default"]';
    // Instead of the above maybe use this //button[@data-stid="uitk-date-selector-input1-default"]
    // '#date_form_field-btn';

    monthDatesLocatorStarts = '//h2[text()="'
    monthDatesLocatorEnds = '"]/following-sibling::table//button[not(@disabled)]';

    monthHeadingLocatorStarts = 'h2='
    nextButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[2]";

    commands = new Commands;


    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.toTypeInGoingToLocator, destination)
        await browser.pause(2000);
    }

    async selectDestinationFromAutoSuggestion(selectThis) {
        await this.commands.selectFromAutoSuggestions(this.destinationAutoSuggestionLocator, selectThis);
    }

    async clickOnCalendarButton() {
        await this.commands.clickWebElement(this.calendarButtonLocator);
        await browser.pause(1000);
    }

    async selectCheckInDate(monthName, year, checkInDate) {

        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkInDate)
    }


    async selectCheckOutDate(monthName, year, checkOutDate) {

        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkOutDate)
    }


}
module.exports = Homepage;