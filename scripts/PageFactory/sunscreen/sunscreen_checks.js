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
const locators = require("./sunscreen_locators");
class sunscreen_checks {
    getlistofproducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(locators.LOC_TextLines).all(protractor_1.by.tagName('p')).getText();
        });
    }
    getHeading() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(locators.LOC_Heading).getText();
        });
    }
    getInfoBoxTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(locators.LOC_Info).getAttribute('data-original-title');
        });
    }
    getCartCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(locators.LOC_Cart).getText();
        });
    }
}
exports.sunscreen_checks = sunscreen_checks;
//# sourceMappingURL=sunscreen_checks.js.map