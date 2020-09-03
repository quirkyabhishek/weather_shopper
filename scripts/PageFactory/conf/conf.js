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
const waitUtil_1 = require("../../waitUtil");
const conf_checks_1 = require("./conf_checks");
const locators = require("./conf_locators");
class conf {
    constructor() {
        this.check = new conf_checks_1.conf_checks();
    }
    waitForCONFToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield waitUtil_1.wait_util.waitForElementVisible(locators.LOC_CONFText, timeout);
        });
    }
    /**
     * Function to verify if the Confirmation page has Success Message (Payment is successful).
     * @returns {Promise<void>}
     */
    verifyCONFMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForCONFToDisplay(5000);
            const message = yield this.check.getCONF();
            expect(message).toEqual("PAYMENT SUCCESS", "Payment Failed");
        });
    }
}
exports.conf = conf;
//# sourceMappingURL=conf.js.map