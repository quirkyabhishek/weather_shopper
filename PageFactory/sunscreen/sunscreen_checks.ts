import {by, element} from "protractor";
import locators = require('./sunscreen_locators');



export class sunscreen_checks{
    public async getlistofproducts(): Promise<string>{
        return await element(locators.LOC_TextLines).all(by.tagName('p')).getText();
    }
    public async getHeading(): Promise<string>{
        return await element(locators.LOC_Heading).getText();
    }
    async getInfoBoxTitle():Promise<string>{
        return await element(locators.LOC_Info).getAttribute('data-original-title')
    }
    public async getCartCount(): Promise<string>{
        return await element(locators.LOC_Cart).getText();
    }


}