import {cart_actions} from "./cart_actions";
import {cart_checks} from "./cart_checks";
import {wait_util} from "../../waitUtil";
import locators = require('./cart_locators');
import {browser} from "protractor";

export class cart {
    action;
    check;
    constructor(){
        this.action = new cart_actions();
        this.check =  new cart_checks();
    }
    public async waitForPayButton(timeout:number):Promise<boolean>{
        return await wait_util.waitForElementVisible(locators.LOC_PayButton,timeout);
    }
    public async clickPay(){
        await this.waitForPayButton(8000);
        await this.action.clickPayButton();
    }

    /**
     * Function to get the list of amounts for each item added in the cart and verify if total is the sum of each item's price.
     * @returns {Promise<void>}
     */
    public async getListofAmounts(){
        let listofamount:string[] = await this.check.getItems();
        console.log(listofamount);
        let amounts = [];
        for (let i = 0; i < listofamount.length; i++) {
            let name = listofamount[i].split(" ");
            amounts.push(Number(name[name.length-1]));
        }
        console.log(amounts);
        const totalSum = amounts.reduce((a,b) => a + b, 0);
        let totalamount = await this.check.getTotal();
        const total = totalamount.match(/\d/g).join("");
        expect(total).toEqual(totalSum.toString(),'Total Amount didn\'t match');
    }
    public async enterEmailId() {
        await this.action.enterEmail("a@a.com");
    }
    public async enterCreditCard() {
        await this.waitForCreditCardFieldToDisplay(8000);
        await this.action.enterCardNumber("4242424242424242");
    }
    public async enterExpiryDate() {
        await this.action.enterExpiry("10/20");
    }
    public async enterCVVCode() {
        await this.action.enterCvv("123");
    }
    public async enterZIPCode() {
        await this.waitForCreditZIPFieldToDisplay(3000);
        await this.action.enterZIP("112233");
    }
    public async clickPayFinal() {
        await this.action.clickPayAmountButton();
    }
    public async waitForCreditZIPFieldToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_ZIP, timeout);
    }
    public async waitForCreditCardFieldToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_CardNumber, timeout);
    }
    public async clickContinueManual() {
        await this.waitForPayButton(3000);
        await this.action.clickContinueManually();
    }

    /**
     * Function to switch to the payment pop-up.
     * @returns {Promise<void>}
     */
    public async selectPaymentFrame() {
        try {
            await browser.switchTo().frame(0);
        } catch (e) {
            console.log(e);
        }
    }

}