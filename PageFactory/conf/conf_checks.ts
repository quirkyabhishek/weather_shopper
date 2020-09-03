import {element} from "protractor";
import locators = require('./conf_locators')

export class conf_checks{
    public async getCONF():Promise<string>{
        return await element(locators.LOC_CONFMessage).getText();
    }
}
