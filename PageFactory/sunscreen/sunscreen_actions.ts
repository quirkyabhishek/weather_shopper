import {by, element} from "protractor";
import locators = require('./sunscreen_locators');

export class sunscreen_actions{
    public async clickInfo(){
        await element(locators.LOC_Info).click();
    }
    public async clickCart(){
        await element(locators.LOC_Cart).click();
    }

    /**
     * Function to click on Add button based on index provided.
     * @param optionNum
     */
    public addProductstoCart(optionNum) {
        if (optionNum>=0) {
            element(locators.LOC_TextLines).all(by.tagName('button')).then(function(options) {
                options[optionNum].click();
            });
        }
    }
}