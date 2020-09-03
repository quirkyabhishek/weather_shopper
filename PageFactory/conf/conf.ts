import {wait_util} from "../../waitUtil";
import {conf_checks} from "./conf_checks";
import locators = require('./conf_locators')
export class conf{
    check;
    constructor(){
        this.check = new conf_checks();
    }
    public async waitForCONFToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_CONFText, timeout);
    }

    /**
     * Function to verify if the Confirmation page has Success Message (Payment is successful).
     * @returns {Promise<void>}
     */
    public async verifyCONFMessage(){
        await this.waitForCONFToDisplay(5000);
        const message = await this.check.getCONF();
        expect(message).toEqual("PAYMENT SUCCESS", "Payment Failed")
    }
}
