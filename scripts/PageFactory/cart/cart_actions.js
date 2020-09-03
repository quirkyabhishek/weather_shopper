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
const protractor_1 = require("protractor");
const locators = require("./cart_locators");
class cart_actions {
    clickPayButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_PayButton).click();
        });
    }
    enterCardNumber(ccnumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_CardNumber).sendKeys(ccnumber);
        });
    }
    enterExpiry(expirydate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_Expiry).sendKeys(expirydate);
        });
    }
    enterCvv(cvv) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_CVV).sendKeys(cvv);
        });
    }
    enterEmail(emailid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_Email).sendKeys(emailid);
        });
    }
    enterZIP(zip) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_ZIP).sendKeys(zip);
        });
    }
    clickPayAmountButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_PayAmountButton).click();
        });
    }
    clickContinueManually() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_EnterManuallyLink).click();
            console.log('manual clicked');
        });
    }
    clickBackButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_Back).click();
            console.log('back clicked');
        });
    }
}
exports.cart_actions = cart_actions;
//# sourceMappingURL=cart_actions.js.map