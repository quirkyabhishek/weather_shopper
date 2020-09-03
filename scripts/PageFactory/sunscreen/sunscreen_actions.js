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
class sunscreen_actions {
    clickInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_Info).click();
        });
    }
    clickCart() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_Cart).click();
        });
    }
    /**
     * Function to click on Add button based on index provided.
     * @param optionNum
     */
    addProductstoCart(optionNum) {
        if (optionNum >= 0) {
            protractor_1.element(locators.LOC_TextLines).all(protractor_1.by.tagName('button')).then(function (options) {
                options[optionNum].click();
            });
        }
    }
}
exports.sunscreen_actions = sunscreen_actions;
//# sourceMappingURL=sunscreen_actions.js.map