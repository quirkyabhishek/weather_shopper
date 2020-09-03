import {by} from "protractor";

export = {
    LOC_Temperature: by.id("temperature"),
    LOC_MoisturiserButton: by.css("a[href*='moisturizer']"),
    LOC_SunscreenButton: by.css("a[href*='sunscreen']"),
    LOC_Heading: by.tagName("h2")
}