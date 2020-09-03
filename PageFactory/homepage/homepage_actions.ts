import {element} from "protractor";
import locators = require('./homepage_locators')
export class homepage_actions{
    public async clickMoisturiser(){
        await element(locators.LOC_MoisturiserButton).click();
    }
    public async clickSunscreen(){
        await element(locators.LOC_SunscreenButton).click();
    }
}