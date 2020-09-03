"use strict";
const protractor_1 = require("protractor");
module.exports = {
    LOC_PayButton: protractor_1.by.css("button[class=\"stripe-button-el\"]"),
    LOC_TableRow: protractor_1.by.css("tbody"),
    LOC_Total: protractor_1.by.id("total"),
    LOC_CardPopup: protractor_1.by.className("Modal"),
    LOC_Email: protractor_1.by.css("input[type=\"email\"]"),
    LOC_CardNumber: protractor_1.by.css("input[type=\"tel\"][autocomplete=\"cc-number\"]"),
    LOC_Expiry: protractor_1.by.css("input[type=\"tel\"][autocomplete=\"cc-exp\"]"),
    LOC_CVV: protractor_1.by.css("input[type=\"tel\"][autocomplete=\"off\"]"),
    LOC_ZIP: protractor_1.by.css("input[type=\"tel\"][autocomplete=\"postal-code\"]"),
    LOC_PayAmountButton: protractor_1.by.css(".Section-button>button"),
    LOC_EnterManuallyLink: protractor_1.by.css("html[dir=\"ltr\"] .CodeNotReceived-actionMessage>span"),
    LOC_Back: protractor_1.by.css("span[aria-label=\"Back\"]")
};
//# sourceMappingURL=cart_locators.js.map