import {by} from "protractor";

export = {
    LOC_TextLines: by.css(".container"),
    LOC_Heading: by.tagName("h2"),
    LOC_Info: by.css("span[data-toggle=\"popover\"]"),
    LOC_Cart: by.css("span[id=\"cart\"]")
}