import {element} from "protractor";
import locators = require('./homepage_locators')

export class homepage_checks{
    public async getTemperature(): Promise<string>{
        return await element(locators.LOC_Temperature).getText();
    }
    public async getHeading(): Promise<string>{
        return await element(locators.LOC_Heading).getText();
    }

}