// const sampleTest = require('./sampleTest');
// const { expect , assert } = require("chai");
// const describe  = require('mocha'); -> FUCKING REMOVE THIS!!!!!! WHY THE FUCK IS IT HERE? 

// // describe section : Feature
// describe('Login', () => {
//     // it-block : defines a testcase
//     // it('Verify user can login with valid credentials', () => {
        
//     //     const res = sampleTest.addNumbers(2,5);

//     //     expect(res, "expect - addFunction does not work as expected").to.equal(7);
//     //     assert.equal(res, 7, "assert - addFunction does not work as expected")

//     //     expect(1===1, "fail the testcase").to.be.true;

//     //     expect(1===2, "fail the testcase").to.be.false;

//     // });
//     //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//     before(async () => {git s
//         // This code will run once before any test in this describe block
//         await browser.url('https://www.facebook.com');
//         // You can add any other setup logic here
//         // ...
//     });

//     it('Verify the page title', async () => {
//         /**
//          * To launch a webpage
//          * function: url
//          */
//         //await browser.url('https://www.facebook.com');
//         // before(async () => {
//         //     // This code will run once before any test in this describe block
//         //     await browser.url('https://www.facebook.com');
//         //     // You can add any other setup logic here
//         //     // ...
//         // });

//         /**
//          * To pause the execution
//          * function: pause
//          */
//         // await browser.pause(60000);

//         /**
//          * To get the page title
//          * function: getTitle()
//          */
//         const pageTitle = await browser.getTitle();

//         console.log('\nPage title');
//         console.log(pageTitle);
//         console.log('Page title\n');

//         expectedPageTitle = 'Facebook – log in or sign up';
//         expect(pageTitle, 'Facebook title is not as expected').to.equal(expectedPageTitle);       

//     });

//     it('Verify the correct url launches when we open a webpage', async () => {
//         /**
//          * Steps:
//          *  1. Open webpage
//          *  2. launch the webpage
//          *  3. Verify opened url is equal to url we launched
//          */

//         // 1 and 2
//         const launchUrl = 'https://www.facebook.com/';
//         await browser.url(launchUrl);

//         /**
//          * To get the current url from webpage
//          * function: getUrl()
//          */
//         const launchedUrl = await browser.getUrl();

//         expect(launchedUrl, 'Correct url is NOT launched when we open a webpage').to.equal(launchUrl);

//     });

//     it('Misc functions from browser', async () => {
//         const launchUrl = 'https://www.facebook.com/';
//         await browser.url(launchUrl);

//         /**
//          * To get the windowHandle stored in browser-object
//          * function: getWindowHandle()
//          */
//         const windowHandle = await browser.getWindowHandle();
//         console.log('\nwindowHandle');
//         console.log(windowHandle);
//         console.log('windowHandle\n');

//         await browser.pause(7000);

//         /**
//          * To go back in browser
//          * function: back()
//          */
//         await browser.back();

//         await browser.pause(7000);

//         /**
//          * To go forward in browser
//          * function: forward()
//          */
//         await browser.forward();

//         await browser.pause(7000);

//         /**
//          * To refresh a webpage
//          * function: refresh()
//          */
//         await browser.refresh();

//         /**
//          * Other ways to refresh a webpage
//          * 1. re-launch the url
//          * 2. back() then forward()
//          */
//         await browser.pause(7000);

//     });

// });

// // Create a “describe” block
// // 12. Create an “it” block
// // 13. Automate below testcase:
// //     Verify facebook title contains LoG In (ignore cases)
// //     Steps:
// //     1. Launch facebook.com
// //     2. Get the page title
// //     3. Verify pageTitle contains “LoG In” (ignoring cases)

// /**
//  * launch new browser window
//  * launch facebook.com 
//  * get the page title 
//  * compare page title with expected result 
//  */


// describe('Launch Website andverify title', () => {

//     it('Verify the page title', async () => { // if I didnt do it.only it did not execute the test case. 
//         const webpage = ('https://www.apple.com/')
//         await browser.url(webpage)
//         await browser.pause(7000);

//         const pageTitle = await browser.getTitle();

//         console.log('\nPage title');
//         console.log(pageTitle);
//         console.log('Page title\n');

//         expectedPageTitle = 'Bpple';
//         expect(pageTitle, 'Apple title is not as expected').to.equal(expectedPageTitle);  


//     })




// })


//NEW VERSION: 
// const sampleTest = require('./sampleTest');
// const { expect, assert } = require('chai');
// const describe = require('mocha');

// describe('Login', () => {
    
//     before(async () => {
//         console.log("ABOUT TO OPEN1")
//         await browser.url('https://www.facebook.com');
//     });
//     it('Verify the page title', async () => {
//         console.log("TESTING")
//         const pageTitle = await browser.getTitle();

//         console.log('\nPage title');
//         console.log(pageTitle);
//         console.log('Page title\n');

//         expectedPageTitle = 'Facebook – log in or sign up';
//         expect(pageTitle, 'Facebook title is not as expected').to.equal(expectedPageTitle);
//     });

    // it('Verify the correct url launches when we open a webpage', async () => {
    //     const launchUrl = 'https://www.facebook.com/';
    //    // await browser.url(launchUrl);

    //     const launchedUrl = await browser.getUrl();

    //     expect(launchedUrl, 'Correct url is NOT launched when we open a webpage').to.equal(launchUrl);
    // });

    // it('Misc functions from browser', async () => {
    //     const launchUrl = 'https://www.facebook.com/';
    //    // await browser.url(launchUrl);

    //     const windowHandle = await browser.getWindowHandle();
    //     console.log('\nwindowHandle');
    //     console.log(windowHandle);
    //     console.log('windowHandle\n');

    //     await browser.pause(7000);

    //     await browser.back();

    //     await browser.pause(7000);

    //     await browser.forward();

    //     await browser.pause(7000);

    //     await browser.refresh();

    //     await browser.pause(7000);
    // });
// });

// Describe block for launching and verifying title
// describe('Launch Website and verify title', () => {
//     it('Verify the page title', async () => {
//         const webpage = 'https://www.apple.com/';
//         //await browser.url(webpage);
//         await browser.pause(7000);

//         const pageTitle = await browser.getTitle();

//         console.log('\nPage title');
//         console.log(pageTitle);
//         console.log('Page title\n');

//         expectedPageTitle = 'Apple';
//         expect(pageTitle, 'Apple title is not as expected').to.equal(expectedPageTitle);
//     });
// });


//V3
const { expect, assert } = require('chai');
const sampleTest = require('./sampleTest');


describe('Login', () => {
    before(async () => {
        console.log("ABOUT TO OPEN1");
        await browser.url('https://www.facebook.com');
    });

    it('Verify the page title', async () => {
        console.log("TESTING");
        const pageTitle = await browser.getTitle();

        console.log('\nPage title');
        console.log(pageTitle);
        console.log('Page title\n');

        expectedPageTitle = 'Facebook - log in or sign up';
        expect(pageTitle, 'Facebook title is not as expected').to.equal(expectedPageTitle);
    });

    // Additional tests can be added here using "it" blocks

    // Add other test hooks as needed

    // Example:
    // afterEach(async () => {
    //     // Code to run after each test
    // });

    // Example:
    // after(async () => {
    //     // Code to run after all tests
    // });
});
