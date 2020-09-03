"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_actions_1 = require("./cart_actions");
const cart_checks_1 = require("./cart_checks");
const waitUtil_1 = require("../../waitUtil");
const locators = require("./cart_locators");
const protractor_1 = require("protractor");
class cart {
    constructor() {
        this.action = new cart_actions_1.cart_actions();
        this.check = new cart_checks_1.cart_checks();
    }
    waitForPayButton(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield waitUtil_1.wait_util.waitForElementVisible(locators.LOC_PayButton, timeout);
        });
    }
    clickPay() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPayButton(8000);
            yield this.action.clickPayButton();
        });
    }
    /**
     * Function to get the list of amounts for each item added in the cart and verify if total is the sum of each item's price.
     * @returns {Promise<void>}
     */
    getListofAmounts() {
        return __awaiter(this, void 0, void 0, function* () {
            let listofamount = yield this.check.getItems();
            console.log(listofamount);
            let amounts = [];
            for (let i = 0; i < listofamount.length; i++) {
                let name = listofamount[i].split(" ");
                amounts.push(Number(name[name.length - 1]));
            }
            console.log(amounts);
            const totalSum = amounts.reduce((a, b) => a + b, 0);
            let totalamount = yield this.check.getTotal();
            const total = totalamount.match(/\d/g).join("");
            expect(total).toEqual(totalSum.toString(), 'Total Amount didn\'t match');
        });
    }
    enterEmailId() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.enterEmail("a@a.com");
        });
    }
    enterCreditCard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForCreditCardFieldToDisplay(8000);
            yield this.action.enterCardNumber("4242424242424242");
        });
    }
    enterExpiryDate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.enterExpiry("10/20");
        });
    }
    enterCVVCode() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.enterCvv("123");
        });
    }
    enterZIPCode() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForCreditZIPFieldToDisplay(3000);
            yield this.action.enterZIP("112233");
        });
    }
    clickPayFinal() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickPayAmountButton();
        });
    }
    waitForCreditZIPFieldToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield waitUtil_1.wait_util.waitForElementVisible(locators.LOC_ZIP, timeout);
        });
    }
    waitForCreditCardFieldToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield waitUtil_1.wait_util.waitForElementVisible(locators.LOC_CardNumber, timeout);
        });
    }
    clickContinueManual() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPayButton(3000);
            yield this.action.clickContinueManually();
        });
    }
    /**
     * Function to switch to the payment pop-up.
     * @returns {Promise<void>}
     */
    selectPaymentFrame() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.switchTo().frame(0);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.cart = cart;
//# sourceMappingURL=cart.js.map