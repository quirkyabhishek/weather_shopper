import {element} from "protractor";
import locators = require('./cart_locators');

export class cart_actions{
    public async clickPayButton(){
        await element(locators.LOC_PayButton).click();
    }
    public async enterCardNumber(ccnumber: string) {
        await element(locators.LOC_CardNumber).sendKeys(ccnumber);
    }

    public async enterExpiry(expirydate: string) {
        await element(locators.LOC_Expiry).sendKeys(expirydate);
    }

    public async enterCvv(cvv: string) {
        await element(locators.LOC_CVV).sendKeys(cvv);
    }
    public async enterEmail(emailid: string) {
        await element(locators.LOC_Email).sendKeys(emailid);
    }
    public async enterZIP(zip: string) {
        await element(locators.LOC_ZIP).sendKeys(zip);
    }
    public async clickPayAmountButton(){
        await element(locators.LOC_PayAmountButton).click();
    }
    public async clickContinueManually(){
        await element(locators.LOC_EnterManuallyLink).click();
        console.log('manual clicked');
    }
    public async clickBackButton(){
        await element(locators.LOC_Back).click();
        console.log('back clicked');
    }
}