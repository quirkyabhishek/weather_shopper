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
var wait_util;
(function (wait_util) {
    function waitForElementVisible(eltLocator, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const until = yield protractor_1.protractor.ExpectedConditions;
                const isVisible = yield protractor_1.browser.wait(until.visibilityOf(protractor_1.element(eltLocator)), timeout, "Element locator " + eltLocator + " still not visible after " + timeout + " milli seconds");
                return Boolean(isVisible);
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    wait_util.waitForElementVisible = waitForElementVisible;
})(wait_util = exports.wait_util || (exports.wait_util = {}));
//# sourceMappingURL=waitUtil.js.map