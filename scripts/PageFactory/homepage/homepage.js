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
const homepage_actions_1 = require("./homepage_actions");
const homepage_checks_1 = require("./homepage_checks");
const waitUtil_1 = require("../../waitUtil");
const locators = require("./homepage_locators");
class homepage {
    constructor() {
        this.action = new homepage_actions_1.homepage_actions();
        this.check = new homepage_checks_1.homepage_checks();
    }
    selectMoisturiser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickMoisturiser();
        });
    }
    selectSunscreen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickSunscreen();
        });
    }
    /**
     * Funtion to get Temperature and select product based on Temperature (Moisturiser if Temp<19 and Sunscreen if Temp>34).
     * @returns {Promise<void>}
     */
    selectCorrectType() {
        return __awaiter(this, void 0, void 0, function* () {
            const Temperature = yield this.check.getTemperature();
            const numberTemp = Temperature.split(" ", 1);
            if (numberTemp > 34) {
                yield this.waitForSunscreenButtonToDisplay(3000);
                yield this.selectSunscreen();
                console.log('clicked sunscreen');
            }
            if (numberTemp < 19) {
                yield this.waitForMoisturiserButtonToDisplay(3000);
                yield this.selectMoisturiser();
                console.log('clicked moisturiser');
            }
        });
    }
    waitForSunscreenButtonToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield waitUtil_1.wait_util.waitForElementVisible(locators.LOC_SunscreenButton, timeout);
        });
    }
    waitForMoisturiserButtonToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield waitUtil_1.wait_util.waitForElementVisible(locators.LOC_MoisturiserButton, timeout);
        });
    }
    /**
     * Funtion to verify the page Heading of Homepage.
     * @returns {Promise<void>}
     */
    verifyHeading() {
        return __awaiter(this, void 0, void 0, function* () {
            const heading = yield this.check.getHeading();
            expect(heading).toEqual("Current temperature", "Heading not Displayed");
        });
    }
}
exports.homepage = homepage;
//# sourceMappingURL=homepage.js.map