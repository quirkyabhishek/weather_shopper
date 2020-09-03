"use strict";
const protractor_1 = require("protractor");
module.exports = {
    LOC_Temperature: protractor_1.by.id("temperature"),
    LOC_MoisturiserButton: protractor_1.by.css("a[href*='moisturizer']"),
    LOC_SunscreenButton: protractor_1.by.css("a[href*='sunscreen']"),
    LOC_Heading: protractor_1.by.tagName("h2")
};
//# sourceMappingURL=homepage_locators.js.map