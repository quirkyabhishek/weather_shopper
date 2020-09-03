import {by} from "protractor";

export = {
    LOC_PayButton: by.css("button[class=\"stripe-button-el\"]"),
    LOC_TableRow: by.css("tbody"),
    LOC_Total: by.id("total"),
    LOC_CardPopup: by.className("Modal"),
    LOC_Email: by.css("input[type=\"email\"]"),
    LOC_CardNumber: by.css("input[type=\"tel\"][autocomplete=\"cc-number\"]"),
    LOC_Expiry: by.css("input[type=\"tel\"][autocomplete=\"cc-exp\"]"),
    LOC_CVV: by.css("input[type=\"tel\"][autocomplete=\"off\"]"),
    LOC_ZIP: by.css("input[type=\"tel\"][autocomplete=\"postal-code\"]"),
    LOC_PayAmountButton: by.css(".Section-button>button"),
    LOC_EnterManuallyLink: by.css("html[dir=\"ltr\"] .CodeNotReceived-actionMessage>span"),
    LOC_Back: by.css("span[aria-label=\"Back\"]")
}