# weather_shopper
Automation script in protractor to purchase products based on certain conditions on weather shopper site.

Pre-requisites:
1. Install java
2. Install node.js

Project Specific:
1. Unzip the .zip folder in a location
2. Open CMD in the same folder: Enter following commands in CMD one after the other
	3. npm install
	4. npm install -g protractor
	5. webdriver-manager -update
	6. protractor config.ts
7. Test cases will start executing

*Test Results will be stored in 'test' folder in the same location as an HTML file.

*To test in Firefox, open config.ts file and replace 'chrome' with 'firefox'.
*To run tests in IE11, open config.ts file and replace 'chrome' with 'internet explorer' and change directConnect to 'false'.
*To test in Edge, open config.ts file and uncomment the binary (line:9) and chromeDriver (line:13) lines. (Make sure the path of edge application and edge driver is correct as per your machine).

---------------------------------------------------------------------------------------------------------

*Code Explanation*
Program has been written in Page Object model.

Entire Application was divided between four pages: homepage, sunscreen, cart, and, conf.

Each page has 4 components:
1. pageLocator: This contains all the element's locators required for executing test case.
2. pageAction: This contains all the methods necessary for executing the test case. The methods here will be called in the pageTestFlow (conf page doesn't have this class).
3. pageCheck: This contains all the methods required for getting the information from webpage. The methods here will be called in the pageTestFlow.
4. pageTestFlow: This contains all the business logic of the application, defines what check and action to be called for getting the desired flow.

Then there is testCase file: This is the file where we have the actual test steps and the flow in which the each functions should be called.

Then there's a config file which has configuration details like browser type, report generation, and test scenarios (specs) to be selected.

Also, a common waitUtil was written to process the wait time whenever any element wasn't to be found on the page.

---------------------------------------------------------------------------------------------------------

Author-Abhishek
