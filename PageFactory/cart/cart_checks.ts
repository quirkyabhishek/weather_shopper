import {by, element} from "protractor";
import locators = require('./cart_locators');

export class cart_checks{
    public async getTotal():Promise<string>{
        return await element(locators.LOC_Total).getText();
    }
    public async getItems():Promise<string> {
        return await element(locators.LOC_TableRow).all(by.tagName('tr')).getText();
    }
}